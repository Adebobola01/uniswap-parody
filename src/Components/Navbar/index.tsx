import React from "react";
import "./Navbar.scss";
import Logo from "../Logo";
import NavigationItem from "../Navigation/NavigationItem";
import ThreeDots from "../Buttons/3dots";
import ConnectBtn from "../Buttons/connectBtn";
import Search from "../Inputs/search";
import ethImg from "../../assets/images/ethLogo.png"
import magnifierImg from "../../assets/images/search.svg"
const Navbar = (props: any) => {
    
    return (
        <div className={`navbar ${props.changeColor ? "color" : null}`}>
            <nav className="nav" >
                <Logo />
                <NavigationItem link='/swap' >Swap</NavigationItem>
                <NavigationItem link='/tokens' >Tokens</NavigationItem>
                <NavigationItem link='/nfts'>NFTs</NavigationItem>
                <NavigationItem link='/pools'>Pools</NavigationItem>
                <ThreeDots/>
            </nav>
            <Search/>
            <div className="nav-btns" >
                <div className="nav-btns__search">
                    <img src={magnifierImg} alt="mag_img" />
                </div>
                <div className="nav-btns__select" >
                    <img src={ethImg} alt="eth_logo" />
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="white"></path></svg>
                </div>
                <ConnectBtn/>
            </div>
        </div>
    )
}

export default Navbar;