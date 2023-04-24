import React from "react";
import Settings from "../Buttons/settings";
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
        </div>
    )
}

export default Swap;