import React from "react";
import "./tokens.scss";
import TokenInput from "../Inputs/tokens";

const Token = (props: any) => {

    return (
        <div className="tokens-container" >
            <div className="tokens-header" >
                <div className="tokens-header__text" >
                    <span>Select a token</span>
                    <span>X</span>
                </div>
                <div>
                    <TokenInput/>
                </div>
            </div>
            <div className="tokens-body" >

            </div>
        </div>
    )
}

export default Token;