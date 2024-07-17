import React from "react";
import "./WhyNiyo.css";

function WhyNiyo(props) {

    const { 
        icon,
        altText,
        title,
        description,
    } = props;
    return (
        <div className="niyogrid">
        <div>
            <img src={icon} alt ={altText} className="niyoicon"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </div>
    )
}

export default WhyNiyo;