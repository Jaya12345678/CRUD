import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
function Signup() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password==confirmPassword)
        {
            axios.post('http://localhost:3001',{name,email,password})
            .then(res=>{
                console.log(res)
                navigate('/login')
            })
            .catch(err=>console.log(err))
        }
        else
        {
            setPasswordsMatch(false)
        }
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
            <label htmlFor=""><strong>Email</strong></label>
              <input type="email" className="form-control" placeholder="Enter Your Email" onChange={(e)=>setemail(e.target.value)} />
            </div>
  
            <div className="mb-3">
            <label htmlFor=""><strong>Password</strong></label>
              <input type="password" className="form-control" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
  
            <div className="mb-3">
            <label htmlFor=""><strong>Confirm Password</strong></label>
              <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            {!passwordsMatch && (
            <p className="text-danger">Passwords do not match. Please try again.</p>
          )}
  
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                I agree to the <a href="#!" className="text-body">Terms of service</a>
              </label>
            </div>
  
            <button type="submit" className="btn btn-success ">Register</button>
  
            <p className="text-center text-muted my-4">Already have an account? 
                <Link to="/login" className="fw-bold text-body">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup;
  