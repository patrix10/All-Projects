import React from 'react'
import { useEffect,useState } from 'react'
import { useRef } from 'react'

const TwentyThree = () => {

    const [userInput, setUserInput] = useState("")
    const renders = useRef(0)

    useEffect(()=> {
        renders.current = renders.current + 1
    })

  return (
    <div>
      <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <p>The component rendered {renders.current} times</p>
    </div>
  )
}

export default TwentyThree
