
import React from "react";

function TenderCard({props}) {
  
    return ( 
    <>
    <div style={{display:"flex",flexDirection:"column"}}>
        <div>{props.title}</div>
    <div>{props.description}</div>
    <div>{props.date}</div>  
    <div>{props.year}</div>
    <div>{props.km}</div>
    <div>{props.color}</div>
    <div>{props.Area}</div>
    <div>{props.img}</div>
    </div>
   
    
    </>
    );
  
    
 
}
        
export default TenderCard;  
            
        
        
   
    
   

