import React from 'react'
import { useState } from 'react'

const Seventeen = () => {
    const [selestedColor, setSelestedColor] = useState('#000000')

    const update = (e) => {
        setSelestedColor(e.target.value)
    }
  return (
    <div>
      <input type="color" onChange={update} />
      <div style={{width:'100px' , height:'100px' , backgroundColor:selestedColor}}></div>
    </div>
  )
}

export default Seventeen
