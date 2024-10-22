import './App.css';
import Header from './Components/Header';
import Field from './Components/Field';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <Header/>
      <div><div class="row">
         <div class="col">
         <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="name" aria-label="First name"/>
        </div>
        <div class="col">
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="email" aria-label="Last name"/>
         </div>
         <div className="r">
         <button onClick={addData} type="button" class="btn btn-success">Add</button>
         </div>
        </div></div>
      <div className='data'>
        <div className="da">
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Delete</h4>
        </div>
        {
        data.map((e,index) => {
          return(
            <Field key={index} name={e.name} email={e.email} index={index}/>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;

