import React from 'react'
import { useState } from 'react'

const Nine = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')

    const handle = ()=> {
        const newColor = backgroundColor === 'white' ? 'blue' : 'white'
        setBackgroundColor(newColor)
    }
  return (
    <div onClick={handle}
    style={{
        backgroundColor,
        width:'100px',
        height:'100px',
        cursor:'pointer'
    }}>
      click me to change color
    </div>
  )
}

export default Nine
