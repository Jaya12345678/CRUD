import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios"
function login() {
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{name,password})
        .then(res=>{
                console.log(res)
                if(res.data==="Success")
                {
                  navigate('/users')
                }
            })
        .catch(err=>console.log(err))
    }
    return (
      <div className="container my-5 d-flex justify-content-center align-items-center">
        <div className="card p-4" style={{ borderRadius: "18px" , width: "500px"}}>
          <h2 className="text-center mb-4">Create an account</h2>
  
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor=""><strong>Name</strong></label>
              <input type="text" className="form-control" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)} />
            </div>
  
            <div className="mb-3">
            <label htmlFor=""><strong>Password</strong></label>
              <input type="password" className="form-control" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
  
            <button type="submit" className="btn btn-success ">Login</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default login;
  