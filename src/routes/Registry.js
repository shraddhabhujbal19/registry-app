import React,{useState,useEffect} from "react";
import {Link }from "react-router-dom";
function Registry(){
    const[registryData,setRegistryData]=useState([])
    const[textInput,setTextInput]=useState("")
    const[error,setError]=useState(false)

    const addItem = (e) => {
        e.preventDefault();

        const tempData =[...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        //console.log(registryData)
    }

    useEffect(() =>{
if(textInput.length > 10) setError(true)
else setError(false)
    },[textInput])

    const removeItem =(index) =>{
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem =(index) =>{
        if(error) return;
        let newData = [...registryData]
        newData[index]=textInput;
        setRegistryData(newData)
    }

    return(
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here to go home</Link>
            <form onSubmit={addItem}>
                <label>text input:
                    <input type="text" value={textInput} onChange={(e) =>setTextInput(e.target.value)}></input>
                </label>
                    <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{color:"red"}}>Error occ</span> : null}
            {
                registryData.map((item,index) => {
                    return (
                    <li key={index}>{index} <button onClick={() =>removeItem(index)} ></button> <button onclick={() =>editItem(index)} ></button></li>
                    )
                })
            }
        </div>
    )
}
export default Registry;