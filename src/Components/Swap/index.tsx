import React from "react";
import Settings from "../Buttons/settings";
import SwapInput from "../Inputs/swap";
import "./swap.scss";

const Swap = (props: any) => {
    
    return (
        <div className="swap-container" >
            <div className="swap-header" >
                <div>
                    <span>Swap</span>
                    <span>Buy</span>
                </div>
                <Settings/>
            </div>
            <div className="swap-inputs">
                <SwapInput/>
                <SwapInput/>
            </div>
            <button className="swap-btn">Connect Wallet</button>
        </div>
    )
}

export default Swap;