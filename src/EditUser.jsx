/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hedear from "./components/Hedear"
import axios from "axios";

export default function EditUser() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [rpassword,setrpassword] = useState('')
    const [accept,setaccept] = useState(false)
    const [emailError,setemailError] =useState("")
    
    async function submit(e) {
        e.preventDefault();
      
        let flag = true;
      setaccept(true)
        if (name.trim() === "" || password.length < 8 || rpassword !== password) {
          flag = false;
        } else {
          flag = true;
        }
      
        try {
          if (flag) {
            // send the data
            let res = await axios.post("http://127.0.0.1:8000/api/register", {
              name: name,
              email: email,
              password: password,
              password_confirmation: rpassword,
            });
            if(res.status === 200){
                window.localStorage.setItem("email",email)
                window.location.pathname ='/'
            }
      
        
          }
        } catch (err) {
          setemailError(err.response.status);
        }
      }
      
        return(
          <>
            <div className="father">
                <form onSubmit={submit}>
<label htmlFor="name">Name </label>
 {name === '' && accept && <p className="error-message">User name is required</p>}
  <input id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) =>setname(e.target.value)}></input>
<label htmlFor="email">Email </label>
 {accept && emailError === 422 && <p className="error-message">The email has already been taken</p>}
  <input id="email" type="email" placeholder="Enter your email" required value={email} onChange={(e) =>setemail(e.target.value)}></input>
  <label htmlFor="password">Password </label>
 {password.length < 8 && accept && <p className="error-message">Password should be more the 8 char</p>}
 <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) =>setpassword(e.target.value)}></input>
 <label htmlFor="rpassword">Repeat Password </label>
{rpassword !== password && accept && <p className="error-message">Password dont match </p>}
<input id="rpassword" type="password" placeholder="Confirm your password" value={rpassword} onChange={(e) =>setrpassword(e.target.value)}></input>
  <div style={{textAlign:"center"}}>
     <button className="register-btn" type="submit" >Update</button>
                    </div>
                </form>
            </div>
            </>
        )
     }