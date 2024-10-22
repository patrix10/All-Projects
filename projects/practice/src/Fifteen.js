import React from 'react'
import { useState } from 'react'

const Fifteen = ({items}) => {
    const [search, setSearch] = useState('')

    const filteritems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
      <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {filteritems.map((element,index)=> (
            <li key={index}>
                 {element}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Fifteen
