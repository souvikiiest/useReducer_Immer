# USE of useReducer to reduce complexity

As your components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s state gets updated. For example, the TaskApp component below holds an array of tasks in state and uses three different event handlers to add, remove, and edit tasks:

Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:

    Move from setting state to dispatching actions.
    Write a reducer function.
    Use the reducer from your component.

## Step 1: Move from setting state to dispatching actions

Your event handlers currently specify what to do by setting state:

````javascript
 function handleAddTask(text) {
  setTask([
    ...tasks,
    {
      id: getNextId(),
      text: text,
      done: false
    }
  ]);
} ```

## New state logic wth dispatch():

``` javascript
function handleAddtask(text){
dispatch({
type: "AddTask",
text: text,
id: getNextId(),
})
}
function handleChangetask(task){
dispatch({
type:"changeTask",
task
})

}
function handleDeleteTask(id){
dispatch({
type:"deleteTask",
id
})
} ```

## Step 2: Wriitng a reducer function

``` javascript
export default function TaskReducer(tasks, action){
switch(action.type){
case "AddTask":{
return [
...tasks,
{
id: action.id,
text: action.text,
done: false
}
]

        }
    }}```

## Step 3: useReducer from the main app.

`const [tasks, dispatch] = useReducer(TaskReducer,initialTasks);`

Taskreducer is the function, and initialTask is the array of task.
tasks is the output, dipatch is what we use in the handlers.

````
