import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function CreateUser() {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone,setphone]=useState()
  const [age, setage] = useState()
  const navigate=useNavigate()   
  
  const validForm=()=>{
    if (!name || !email || !phone || !age) {
      alert('Please fill in all fields');
    } else if (!isValidEmail(email)) {
      alert('Invalid email address');
    } else if (!isValidPhoneNumber(phone)) {
      alert('Invalid phone number');
    } else {
      // Form data is valid, you can proceed with submission or other actions
      return true;
    }
  }

  const isValidEmail = (email) => {
    // Implement email validation logic (e.g., using a regular expression)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Implement phone number validation logic
    return /^\d{10}$/.test(phone);
  };

  const Submit=(e)=>{
    e.preventDefault();
    if(validForm())
    {
        axios.post("https://management-system-8hpa.onrender.com/createUser",{name,email,phone,age})
      .then(result=>{
        console.log(result)
        navigate('/users')
      })
      .catch(err=>console.log(err))
    }
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Submit}>
              <h2>Add User</h2>
              <div className="mb-2">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter your name" className="form-control"
                  onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className="mb-2">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Enter your email" className="form-control"
                    onChange={(e)=>setemail(e.target.value)}/>
              </div>
              <div className="mb-2">
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" maxLength={10} placeholder="Enter your phone number" className="form-control"
                    onChange={(e)=>setphone(e.target.value)}/>
              </div>
              <div className="mb-2">
                  <label htmlFor="">Age</label>
                  <input type="text" placeholder="Enter your age" className="form-control"
                    onChange={(e)=>setage(e.target.value)}/>
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser;