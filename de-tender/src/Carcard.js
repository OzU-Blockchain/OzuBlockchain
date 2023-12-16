
import React from "react";

const CarCard=(props)=> {
    
    return ( 
    <>
    {/* <div style={{display:"flex",flexDirection:"column"}}> */}

    
    <div>{props.title}</div>
    <div>{props.description}</div>
    <div>{props.date}</div>  
    <div>{props.year}</div>
    <div>{props.km}</div>
    <div>{props.color}</div>  
    <img src={props.img} alt="mercedes" width="100" height="100"></img>
    
    {/* </div> */}
   
    
    </>
    );
  

    
    
 
}

export default CarCard;