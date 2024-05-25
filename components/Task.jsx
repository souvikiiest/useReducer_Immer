import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({task, onChangetask, onDeleteTask}){
   
    const [isEditing, setisEditing] = useState(false);
    const [newText ,setNewText] = useState(task.text);

    const handleClick = ()=>{
        
        onChangetask({
            ...task,
            text:newText
        });
        setisEditing(!isEditing);
    }
    let taskcontent;
    if(isEditing){
        taskcontent = (<><input value={newText} onChange={e=>setNewText( e.target.value)}/> 
        <button  onClick={handleClick}>SAVE</button></>)
       }
       else{
        taskcontent = (<> {task.text} 
        <button onClick={handleClick}>EDIT</button></>
        )
       }

    return(
        <>
            <li>
                <label>
                    <input type="checkbox" checked={task.done} onChange={e=>{
                        onChangetask({
                            ...task,
                            done: e.target.checked
                        })
                    }}/>
                    ID: {task.id}
                    {taskcontent}
                    <button onClick={()=>onDeleteTask(task.id)}>DELETE</button>
                </label>
            </li>
        </>

    )}