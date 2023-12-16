
import React from "react";

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
                <img src={props.img} alt='kadikoy' width="100" height="100"></img>
            </div>





            {/* </div> */}


        </>
    );





}

export default HouseCard;