import React from "react";
import Settings from "../Buttons/settings";
import SwapInput from "../Inputs/swap";
import "./swap.scss";

const Swap = (props: any) => {
    
    return (
        <div className={`swap-container ${props.hero ? "hero-swap" : null}`} style={props.style ? props.style : null} >
            <div className="swap-header" >
                <div>
                    <span>Swap</span>
                    <span>Buy</span>
                </div>
                <Settings/>
            </div>
            <div className="swap-inputs">
                <SwapInput token="from" click={props.click} />
                <SwapInput token="to" click={props.click} />
                <div className="swap-switch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5D6785" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
            </div>
            <button className="swap-btn">Connect Wallet</button>
        </div>
    )
}

export default Swap;