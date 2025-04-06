import React from "react";


const Card=(props)=>{
    const {document,muddati,hajmi,yuklash}=props
    return(
        
            <div className="card">
            <p className="document">{document}</p>
            <h5 className="muddati">{muddati}</h5>
            <div className="bir">
            <p className="hajmi">{hajmi}</p>
            <p className="yuklash">{yuklash}</p>
            </div>
        </div>
    )
}

export default Card