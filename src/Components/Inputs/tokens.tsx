import React from "react";
import searchImg from "../../assets/images/search.svg"
import "./Inputs.scss";

const TokenInput = (props: any) => {
    

    return (
        <div className="tokens-input__container">
            <img src={searchImg} alt="search_logo" />
            <input type="text" placeholder="Search name or paste address" />
        </div>
    )
}

export default TokenInput;