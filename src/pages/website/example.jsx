import { Link } from "react-router-dom";


export default function Example() {
    return(
        <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center", fontWeight:"bold"}}>
            <p > hello welcome to my page </p>
            <button><Link to={"/Home"}>go back</Link></button>
        </div>
    )
}