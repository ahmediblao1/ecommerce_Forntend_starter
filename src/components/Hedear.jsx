import { Link } from "react-router-dom"

 export default function Hedear(){
    function handleLogout(){
        window.localStorage.removeItem('email')
        window.location.pathname = '/'
    }
    return(
        <div className="container">
        <nav className="d-flex shadow">
            <div className="d-flex menu">
            <Link to={"/Home"} className="bar">Home</Link>
            <Link to={"/Home"} className="bar" >About</Link>
            <Link to={"/Dashboard"} className="bar" >Dashboard</Link>
            <Link to={"/Example"} className="bar" >example</Link>


            </div>
            <div className="d-flex">
            { !window.localStorage.getItem("email") ? (
            <> <Link 
            to={"/register"} className="register-nav" style={{textAlign:"center"}}>
                register
            </Link>
            <Link to={"/Login"} className="register-nav" style={{textAlign:"center"}}>
                Login
            </Link></> ) : <div className="register-nav" onClick={handleLogout}>Log Out </div>} 
            </div>
        </nav>
        </div>
    )
 }