import React from 'react'
import { useReducer,useState } from 'react'

const taskReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [...state,{id:Date.now(),text:action.payload}]
     default:
    return state;// delete_task case and default case
}

}

const TwentyTwo = () => {

    const [tasks,dispatch] = useReducer(taskReducer,[])

    const [taskText, setTaskText] = useState('')
    
    const addTask = ()=> {
       dispatch({type:'ADD_TASK'},{payload:taskText})
    }
  return (
    <div>
      <input type="text" value={taskText} onChange={(e)=> setTaskText(e.target.value)} placeholder='Add new task' />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task)=>(
            <li key={task.id}>
                <span>
                    {taskText}
                </span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TwentyTwo
