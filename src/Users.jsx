/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import axios from "axios"
import { useEffect, useState } from "react"

export default function Users(){
const [users,setuusers] = useState([])
useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then((res) => res.json())
    .then((data) => setuusers(data) )
},[users])

function deleteuser(id) {
 axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
 .catch((error) => console.error("Error deleting user:", error));

}
 
const showusers = users.map((user,index) => 
<tr key={index}>
    <td>{index + 1}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>
    <i
    onClick={() => deleteuser(user.id)}
    style={{color:"dark", fontSize:'20px', paddingRight:"5px"}}
    className="fa-solid fa-pen-to-square"></i>
    <i
    style={{color:"red", fontSize:'20px',cursor:"pointer"}}
    className="fa-solid fa-trash"></i>
    </td>
</tr>)




    return(
    <div style={{padding:"20px"}}>
            <table>
                <thead>
                    <th>ID</th>
                   <th>User</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {showusers}
                </tbody>
            </table>
        </div>
    )
}