
import React from "react";
import JoinTenderB from "./JoinTenderB";

const AreaCard = (props) => {
    
        return(
            <>
            
                <div className={props.className}>
                    <div>{props.title}</div>
                    <div>{props.description}</div>
                    <div>{props.date}</div>
                    <div>{props.Area}</div>
                    <img src={props.img} alt="arnavutkoy" width="auto" height="150" style={{borderRadius:"10px"}}></img>
                    <JoinTenderB/>
                </div>
            
                {/* <div style={{display:"flex",flexDirection:"column"}}> */}
                




                {/* </div> */}


            </>
        );





}

export default AreaCard;