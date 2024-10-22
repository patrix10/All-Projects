import React from 'react'
import { useReducer } from 'react'

const reducer = (state,action) => {
    if(action.type === 'inc') {
        return state + 2
    }else if(action.type === 'dec') {
        return state - 2
    }else if(action.type === 'res') {
        return state * 0
    }

    return state
}

const TwentyOne = () => {

    const [state, dispatch] = useReducer(reducer,0)

  return (
    <div>
      <p>{state}</p>
      <button onClick={()=> dispatch({type:'inc'})}>+</button>
      <button onClick={()=> dispatch({type:'dec'})}>-</button>
      <button onClick={()=> dispatch({type:'res'})}>Reset</button>
    </div>
  )
}

export default TwentyOne
