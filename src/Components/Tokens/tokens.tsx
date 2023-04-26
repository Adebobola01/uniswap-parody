import React, {useState} from "react";
import "./tokens.scss";
import TokenInput from "../Inputs/tokens";
import PopTokens from "../PopTokens";
import Backdrop from "../Backdrop";

const Token = (props: any) => {

    return (
        <>
            <Backdrop click={props.close} />
            <div className="tokens-container" >
                <div className="tokens-header" >
                    <div className="tokens-header__text" >
                        <span>Select a token</span>
                        <span onClick={props.close} >X</span>
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
        </>
    )
}

export default Token;