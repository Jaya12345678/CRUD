import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios"
function Users() {
    const [Users, setUsers] = useState([])
    useEffect(() => {
      axios.get("https://management-system-8hpa.onrender.com/users")
      .then(result=>setUsers(result.data))
      .catch(err=>console.log(err))
    }, [])
    
    const handleDelete=(id)=>{
        axios.delete("https://management-system-8hpa.onrender.com/deleteUser/"+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user)=>(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success" style={{ marginRight: '10px' }}>Update</Link>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users;