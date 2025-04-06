import React from "react";

const Btn=(props2)=>{
    const {hammasi,span}=props2
    return(
            <button className="btn">{hammasi} <span>{span}</span></button>
    )
}
export default Btn