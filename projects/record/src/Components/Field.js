import React from 'react'
import { useState } from 'react'

const Field = ({name,email,index}) => {
  const [data, setData] = useState([])

  // const Deldata = (index) => {
  //   let arr = data
  //   arr.splice(index, 1)
  //   setData([...arr])
  // }

  return (
    <div className='data'>
    <div className="da">
    <h4>{name}</h4>
    <h4>{email}</h4>
    <h4><button type="button" class="btn btn-danger">Delete</button></h4>
    </div>
  </div>
  )
}

export default Field
