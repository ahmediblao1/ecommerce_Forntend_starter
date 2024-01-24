/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users(){
const [users,setuusers] = useState([])
const [runuseeffect,setrun] = useState(0)

useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then((res) => res.json())
    .then((data) => setuusers(data) )
},[runuseeffect]) 





// delete function
async function deleteuser(id){
    try {
        const res = await  axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        if(res.status === 200){
            setrun((prev) => prev + 1)
        } 
    } catch (error) {
        console.error("Error deleting user:", error);
    }
     

}
 
const showusers = users.map((user,index) => 
<tr key={index}>
    <td>{index + 1}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>
    <Link to={`${user.id}`} >
    <i
    style={{color:"dark", fontSize:'20px', paddingRight:"5px"}}
    className="fa-solid fa-pen-to-square"></i>
    </Link>

    <i onClick={()=> deleteuser(user.id)}
    style={{color:"red", fontSize:'20px',cursor:"pointer"}}
    className="fa-solid fa-trash"></i>
    </td>
</tr>)

    return(
    <div style={{padding:"20px"}}>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                   <th>User</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showusers}
                </tbody>
            </table>
        </div>
    )
}
