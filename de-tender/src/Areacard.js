import App from "./App";
import React from "react";

function AreaCard({props}) {
  
    return ( 
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
        <div>{props.title}</div>
    <div>{props.description}</div>
    <div>{props.date}</div>  
    <div>{props.img}</div>
    <div>{props.Area}</div>
    </div>
   
    
    </>
    );
  

    
    
 
}

export default AreaCard;