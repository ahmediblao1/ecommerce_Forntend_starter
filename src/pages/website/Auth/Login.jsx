/* eslint-disable no-unused-vars */
import { useState } from "react"
import "../../../index.css"
import axios from "axios"
import Hedear from '../../../components/Hedear';


export default function Login(){
const [email,setemail] = useState('')
const [password,setpassword] = useState('')
const [accept,setaccept] = useState(false)
const [emailError,setemailError] =useState("")


async function submit(e) {
    e.preventDefault();
  
    let flag = true;
    setaccept(true);

    if ( password.length < 8 ) {
      flag = false;
    } else {
      flag = true;
    }
  
    try {
      if (flag) {
        // send the data
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
         email: email,
          password: password,
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
              <Hedear />

        <div className="father">
            <form onSubmit={submit}>
            <label htmlFor="email">Email </label>
                {accept && emailError === 422 && <p className="error-message">The email has already been taken</p>}
                <input id="email" type="email" placeholder="Enter your email" required value={email} onChange={(e) =>setemail(e.target.value)}></input>
                <label htmlFor="password">Password </label>
                {password.length < 8 && accept && <p className="error-message">Password should be more the 8 char</p>}
                <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) =>setpassword(e.target.value)}></input>
                 <div style={{textAlign:"center"}}>
                    <button className="register-btn" type="submit" >Login</button>
                </div>
            </form>
        </div>
        </>
    )}