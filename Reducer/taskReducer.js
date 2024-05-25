export default function TaskReducer(draft, action){
    switch(action.type){
        case "AddTask":{
            draft.push(
                {
                id: action.id,
                text: action.text,
                done: false
                })
                break; 
                
            
        }
        case "changeTask":{
            const index = draft.findIndex(t=>t.id===action.task.id);
            draft[index]=action.task;
            break;
                
        }
        case "deleteTask":{
            return draft.filter(t=>t.id!==action.id);
        }
        default:
            throw Error("No task matched");
    }
}