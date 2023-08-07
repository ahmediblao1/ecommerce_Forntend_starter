/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export default function Users(){
    const [users,setusers] = useState([])

    useEffect(() =>{
        fetch('http://127.0.0.1:8000/api/user/show')
        .then((res) => res.json())
        .then((data) => setusers(data))
        .catch(error => console.log(error))
    }, [])

const showusers = users.map((user,index) =>
 <tr key={index}>
    <td>{index+1}</td>
    <td>{user.name}</td> 
    <td>{user.email}</td> 
 </tr>)

    return(
    <div style={{padding:"20px"}}>
            <table>
                <thead>
                    <th>ID</th>
                   <th>User</th>
                    <th>Email</th>
                </thead>
                <tbody>
                        
                {showusers}
                </tbody>
            </table>
        </div>
    )
}