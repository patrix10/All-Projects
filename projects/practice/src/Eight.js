import React from 'react'
import { useState } from 'react'

const Eight = () => {
    const [input, setInput] = useState()
    const [todos, setTodos] = useState([])

    const addtodo = () => {
       if(input.trim()!=='') {
        setTodos([...todos,input])
        setInput('')
       }
    }

    const deltodo =(index) => {
        const updtodo = todos.filter((_,i) => i!== index)
        setTodos(updtodo)
    }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addtodo}>add</button>
      <ul>
        {todos.map((todo,index)=> {
            return(
            <li key={index}>
                {todo} <button onClick={()=>deltodo(index)}>remove</button>
            </li>
        )})}
      </ul>
    </div>
  )
}

export default Eight
