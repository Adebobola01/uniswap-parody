import React from "react";
import "./tokens.scss";
import TokenInput from "../Inputs/tokens";
import PopTokens from "../PopTokens";

const Token = (props: any) => {

    return (
        <div className="tokens-container" >
            <div className="tokens-header" >
                <div className="tokens-header__text" >
                    <span>Select a token</span>
                    <span>X</span>
                </div>
                    <TokenInput/>
                <div className="popular-tokens" >
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />
                    <PopTokens sym="ETH" />

                </div>
            </div>
            <div className="tokens-body" >

            </div>
        </div>
    )
}

export default Token;