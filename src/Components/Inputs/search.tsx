import React from "react";
import "./Inputs.scss";


const Search = () => {
    

    return (
        <div className="search-box" >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15L11.2439 11.2439M12.3821 6.69106C12.3821 9.83414 9.83414 12.3821 6.69106 12.3821C3.54797 12.3821 1 9.83414 1 6.69106C1 3.54797 3.54797 1 6.69106 1C9.83414 1 12.3821 3.54797 12.3821 6.69106Z" stroke="#98a1c0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <input className="search-input" placeholder="Search tokens and NFT collections" />
            <div className="search-img">/</div>
        </div>
    )
}

export default Search;