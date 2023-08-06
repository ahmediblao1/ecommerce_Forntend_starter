import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <div className=" topbar container ">
            <h1 className="logo ">Vallor</h1>
            <Link to={"/"} className="register-nav" >Luanch App</Link>
        </div>
    )
}