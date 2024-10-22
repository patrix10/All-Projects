import React from 'react'
import { useState } from 'react'

const TwentyFour = () => {

    const [state,setState] = useState({
        count:0,
        text:'Hello World',
        isActive:true
    })

    function inccount () {
        setState({...state,count:state.count + 1})
    }

    function changetext () {
        setState({...state,text:'Updated Text'})
    }

    function toggleisActive () {
        setState({...state,isActive:!state.isActive})
    }
  return (
    <div>
      <h4>Multiple State Example</h4>
      <p>Count:{state.count}</p>
      <p>Text:{state.text}</p>
      <p>Active:{state.isActive ? 'yes' : 'no'}</p>

      <button onClick={inccount}>Increment</button>
      <button onClick={changetext}>Change Text</button>
      <button onClick={toggleisActive}>Toggle Active</button>
    </div>
  )
}

export default TwentyFour
