
import React from "react";
import JoinTenderB from "./JoinTenderB";

const CarCard = (props) => {

    return (
        <>
            {/* <div style={{display:"flex",flexDirection:"column"}}> */}

            <div className={props.className}>
                <div>{props.title}</div>
                <div>{props.description}</div>
                <div>{props.date}</div>
                <div>{props.year}</div>
                <div>{props.km}</div>
                <div>{props.color}</div>
                <img src={props.img} alt="mercedes" width="auto" height="150" style={{borderRadius:"20px"}}></img>
                <JoinTenderB/>
            </div>


            {/* </div> */}


        </>
    );





}

export default CarCard;