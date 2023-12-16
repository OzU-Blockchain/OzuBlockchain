
import React from "react";
import JoinTenderB from "./JoinTenderB";

const HouseCard = (props) => {

    return (
        <>
            {/* <div style={{display:"flex",flexDirection:"column"}}> */}
            <div className={props.className}>
                <div>{props.title}</div>
                <div>{props.description}</div>
                <div>{props.date}</div>
                <div>{props.year}</div>
                <div>{props.Area}</div>
                <img src={props.img} alt='kadikoy' width="auto" height="150" style={{borderRadius:"20px"}}></img>
                <JoinTenderB></JoinTenderB>
            </div>
            {/* </div> */}
        </>
    );





}

export default HouseCard;