import React from 'react'

const Four = () => {
    const items = ['m','e','s','s','i']
  return (
    <div>
      <ul>
        {items.map((e,index) => {
          return  <li key={index}>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default Four
