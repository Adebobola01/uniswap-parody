import React from "react";
import "./popTokens.scss";
import ethLogo from "../../assets/images/ethLogo.png"


const PopTokens = (props: any) => {
    

    return (
        <div className="popToken" >
            <img src={props.img || ethLogo} alt="token_img" />
            <span>{ props.sym}</span>
        </div>
    )
}

export default PopTokens;