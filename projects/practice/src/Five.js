import React from 'react'
import { useState } from 'react'

const Five = () => {

    const [toggle, setToggle] = useState(false)

    const handletog = ()=> {
        setToggle(!toggle)
    }
  return (
    <div>
      <label htmlFor="">
        <input type='checkbox' onChange={handletog}/>
      </label>
      <p>{toggle ? "on":"off"}</p>
    </div>
  )
}

export default Five
