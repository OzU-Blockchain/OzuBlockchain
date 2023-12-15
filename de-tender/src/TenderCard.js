
import React from "react";

function TenderCard({title, description, date, year, km, color, Area}) {
  
    return ( 
    <>
    
   <div>{title}</div>
    <div>{description}</div>
    <div>{date}</div>  
    <div>{year}</div>
    <div>{km}</div>
    <div>{color}</div>
    <div>{Area}</div>
    
    </>
    );
  
    
 
}
        
export default TenderCard;  
            
        
        
   
    
   

