import React from 'react'
import { useState } from 'react'

const Three = () => {
    const [input, setInput] = useState("")
  return (
    <div>
      <input type="text" onChange={(e)=> setInput(e.target.value)}/>
      <p>user Input: {input}</p>
    </div>
  )
}

export default Three
