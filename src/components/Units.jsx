/* eslint-disable react/prop-types */
import "../App.css"
// const showlisting = Listings.map((item,index) => (
//   <Units key={index} img = {item.image} title = {item.title} rating = {item.rating} desc ={item.description} price = {item.price} />
// ))

export default function Units(props){
    return(
        <div style={{width:"300px", }}>
            <div style={{backgroundImage:`url(${props.img})`,
             width:"300px",
              height:"300px",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              backgroundPosition:"center",
              borderRadius:"15px"
              }}></div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",marginBottom:"0"}}>
            <h1 >{props.title}</h1>
            <h3 style={{ fontWeight:"normal"}}><i style={{color:"gold", }} className="fa-solid fa-star fa-fade"></i>{props.rating}</h3>
            </div>
            <h2 style={{color:"gray",marginTop:"0", fontWeight:"normal"}}>{props.desc}</h2>
        </div>

    )
}