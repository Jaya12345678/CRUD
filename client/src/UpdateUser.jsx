import { useState ,useEffect} from "react"
import { useParams ,useNavigate} from "react-router-dom"
import axios from 'axios'
function UpdateUser() {
  const {id}=useParams()
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone,setphone]=useState()
  const [age, setage] = useState()
  const navigate=useNavigate() 

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result=>{
      console.log(result)
      setname(result.data.name)
      setemail(result.data.email)
      setphone(result.data.phone)
      setage(result.data.age)

    })
    .catch(err=>console.log(err))
  }, [])

  const Update=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+id,{name,email,phone,age})
    .then(result=>{
      console.log(result)
      navigate('/users')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Update}>
              <h2>Update User</h2>
              <div className="mb-3">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter your name" className="form-control" value={name}
                    onChange={(e)=>setname(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Enter your email" className="form-control" value={email}
                    onChange={(e)=>setemail(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="">Phone Number</label>
                  <input type="tel" maxLength={10} placeholder="Enter your phone number" className="form-control" value={phone}
                    onChange={(e)=>setphone(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="">Age</label>
                  <input type="text" placeholder="Enter your age" className="form-control" value={age}
                    onChange={(e)=>setage(e.target.value)}
                  />
              </div>
              <button className="btn btn-success">Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser