import React from "react";
import "./Navbar.scss";
import Logo from "../Logo";
import NavigationItem from "../Navigation/NavigationItem";
import ThreeDots from "../Buttons/3dots";
import ConnectBtn from "../Buttons/connectBtn";
import Search from "../Inputs/search";
const Navbar = (prop: any) => {
    
    return (
        <div className="navbar">
            <nav className="nav" >
                <Logo />
                <NavigationItem link='/swap' >Swap</NavigationItem>
                <NavigationItem link='/tokens' >Tokens</NavigationItem>
                <NavigationItem link='/nfts'>NFTs</NavigationItem>
                <NavigationItem link='/pools'>Pools</NavigationItem>

                <ThreeDots/>
            </nav>
            <Search/>
            <div>
                <ConnectBtn/>
            </div>
        </div>
    )
}

export default Navbar;