import React from "react";


const Footer=(props3)=>{
    const {bankamat,valyuta,kabinet,svyaz}=props3
    return(
        <ul className="fUl">
            <li>{bankamat}</li>
            <li>{valyuta}</li>
            <li>{kabinet}</li>
            <li>{svyaz}</li>
        </ul>
    )
}
export default Footer