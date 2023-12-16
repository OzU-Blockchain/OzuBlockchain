
import React from "react";

const AreaCard=(props)=> {
  
    return ( 
    <>
    {/* <div style={{display:"flex",flexDirection:"column"}}> */}
        <div>{props.title}</div>
    <div>{props.description}</div>
    <div>{props.date}</div>  
    <div>{props.img}</div>
    <div>{props.Area}</div>
    <img src={props.img} alt="arnavutkoy" width="100" height="100"></img>
      
      
    
    {/* </div> */}
   
    
    </>
    );
  

    
    
 
}

export default AreaCard;