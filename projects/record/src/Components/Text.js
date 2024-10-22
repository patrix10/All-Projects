import React from 'react'
import { useState } from 'react';

const Text = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [data, setData] = useState([])

 const addData = ()=> {
    setData([...data, {
        name: name,
        email: email
    }])
    setName("")
    setEmail("")
 }
  
  return (
    <div>
        <div class="row">
         <div class="col">
         <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="name" aria-label="First name"/>
        </div>
        <div class="col">
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="email" aria-label="Last name"/>
         </div>
         <div className="r">
         <button onClick={addData} type="button" class="btn btn-success">Add</button>
         </div>
        </div>
    </div>
  )
}

export default Text
