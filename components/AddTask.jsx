import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AddTask({handleAddtask}){
    const [text, setText] = useState('');

    return(
        <>
            <input type="text" value={text} placeholder="Add task" onChange={e=>setText(e.target.value)}></input>
            <button onClick={()=>{
                setText('');
                handleAddtask(text)}}>ADD</button>
        </>
    )
}