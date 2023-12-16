
import React from "react";

const HouseCard=(props)=> {
  
    return ( 
    <>
    {/* <div style={{display:"flex",flexDirection:"column"}}> */}
        <div>{props.title}</div>
    <div>{props.description}</div>
    <div>{props.date}</div>  
    <div>{props.year}</div>
    <div>{props.Area}</div>     
    <div>{props.img}</div>
    <img src={props.img} alt='kadikoy' width="100" height="100"></img>  
    <img src={props.img} alt='cankaya' width="100" height="100"></img>
    <img src={props.img} alt='umraniye' width="100" height="100"></img>
      
    
    
    {/* </div> */}
   
    
    </>
    );
  

    
    
 
}

export default HouseCard;