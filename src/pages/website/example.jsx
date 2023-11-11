import { Link } from "react-router-dom";


export default function Example() {
   fetch("http://127.0.0.1:8000/api/user/show")
   .then(res => res.json() ) .then(data => data.map(user => console.log(user.email)))
   .catch(err => console.log(err))
    return(
        <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center", fontWeight:"bold"}}>
            
            <button><Link to={"/Home"}>go back</Link></button>
        </div>
    )
}