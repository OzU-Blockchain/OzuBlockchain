
import React from "react";

const AreaCard = (props) => {
    
        return(
            <>
            
                <div className={props.className}>
                    <div>{props.title}</div>
                    <div>{props.description}</div>
                    <div>{props.date}</div>
                    <div>{props.Area}</div>
                    <img src={props.img} alt="arnavutkoy" width="100" height="100"></img>
                </div>
            
                {/* <div style={{display:"flex",flexDirection:"column"}}> */}
                




                {/* </div> */}


            </>
        );





}

export default AreaCard;