/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({tasks,onChangetask,onDeleteTask}){
    return(
        <>
            <ol>
                {tasks.map((task)=>(
                    <Task key={task.id} task={task} onChangetask={onChangetask} onDeleteTask={onDeleteTask} />
                ))}
            </ol>
        
        </>


    )}