import { Link } from "react-router-dom";


 export default  function Example() {
//    try {
//      let users = await fetch("http://127.0.0.1:8000/api/user/show")
//      console.log( await users.json())

//  } catch (error) {
//     console.log(" there was unexpexted arror "`${error}`) 
//  }
    
    return(
        <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center", fontWeight:"bold"}}>
            
            <button><Link to={"/Home"}>go back</Link></button>
        </div>
    )
}