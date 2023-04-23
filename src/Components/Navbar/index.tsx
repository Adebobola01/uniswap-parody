import React from "react";
import "./Navbar.scss";
import Logo from "../Logo";
import NavigationItem from "../Navigation/NavigationItem";
import ThreeDots from "../Buttons/3dots";

const Navbar = (prop: any) => {
    
    return (
        <div className="navbar">
                <Logo />
            <nav>
                <NavigationItem link='/link' >Swap</NavigationItem>
                <NavigationItem link='/tokens' >Tokens</NavigationItem>
                <NavigationItem link='/nfts' >Nfts</NavigationItem>
                <ThreeDots/>
            </nav>
        </div>
    )
}

export default Navbar;