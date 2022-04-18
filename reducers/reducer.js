export const reducer=(state,action)=>{
    if(action.type==="add"){
        console.log(action);
        const newTask=[...state.task,action.payload]
        return {...state,task:newTask}
    }
    if(action.type==="arr"){
        console.log(action.payload);
        return {...state}
    }
}
