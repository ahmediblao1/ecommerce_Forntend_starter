import { Link } from "react-router-dom";


export default function Example() {
   
    return(
        <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center", fontWeight:"bold"}}>
            
            <button><Link to={"/Home"}>go back</Link></button>
        </div>
    )
}