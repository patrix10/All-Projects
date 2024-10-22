import React from 'react'
import { useState } from 'react'

const Two = () => {
    const [count, setCount] = useState(0)

    const addd = () => {
        setCount(count + 2)
    }

    const subb = () => {
        setCount(count - 2)
    }
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={addd}>add</button>
      <button onClick={subb}>sub</button>
    </div>
  )
}

export default Two
