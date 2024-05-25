import { useState } from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'
import { initialTasks } from '../data/data'
import './App.css'

function App() {
  const [tasks, setTask] = useState(initialTasks);
  //function to get the next Id
  const getNextId = ()=>{
    const nextId = tasks[tasks.length-1].id + 1;
    return nextId;
  }
  //handlers
  function handleAddtask(text){
    setTask([
      ...tasks,
      {
        id: getNextId(),
        text: text,
        done: false
      }
    ])
  }
  function handleChangetask(task){
    console.log(task);
    let newTask = tasks.map(t=>{
      if(t.id === task.id)
        return task;
      else
        return t;
    })
    setTask(newTask);
  }
  function handleDeleteTask(id){
    let newTask = tasks.filter(t=>t.id!==id);
    setTask(newTask);
  }
  return (
    <>
      <h1>Todo Task List</h1>
      <AddTask handleAddtask={handleAddtask}/>
      <TaskList tasks={tasks} onChangetask={handleChangetask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App
