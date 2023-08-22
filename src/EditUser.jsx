/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import Hedear from "./components/Hedear"
import axios from "axios";
import Form from "./components/Form";

export default function EditUser() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
   

const id = window.location.pathname.split("/").slice(-1)[0]
useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
    .then((res) => res.json())
    .then((data) => { 
        // Two Ways to get the values
        setname(data.map((info) => info.name)) 
        setemail(data[0].email)

    })
},[])
 
 
    
    // async function submit(e) {
    //     e.preventDefault();
    //     let flag = true;
    //   setaccept(true)
    //     if (name.trim() === "" || password.length < 8 || rpassword !== password) {
    //       flag = false;
    //     } else {
    //       flag = true;
    //     }
      
    //     try {
    //       if (flag) {
    //         // send the data
    //         let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
    //           name: name,
    //           email: email,
    //           password: password,
    //           password_confirmation: rpassword,
    //         });
    //         if(res.status === 200){
    //             window.localStorage.setItem("email",email)
    //             window.location.pathname ='/dashboard/users'
    //         }
      
        
    //       }
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }
      
        return(
          <>
            <div className="father">
                <Form button = "Update" name = {name} email = {email} />
            </div>
            </>
        )
     }