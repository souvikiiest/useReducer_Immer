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
        case "changeTask":{
            return tasks.map(t=>{
                if(t.id === action.task.id)
                return action.task;
                else
                return t;
                });
                
        }
        case "deleteTask":{
            return tasks.filter(t=>t.id!==action.id);
        }
        default:
            throw Error("No task matched");
    }
}