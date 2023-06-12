import React from "react";
import styles from "./mobile.module.scss";
import NavigationItem from "../../Navigation/NavigationItem";
import ThreeDots from "../../Buttons/3dots";

const MobileNav = (props: any) => {
    

    return (
        <div className={styles.nav}>
            <NavigationItem link='/swap' >Swap</NavigationItem>
            <NavigationItem link='/tokens' >Tokens</NavigationItem>
            <NavigationItem link='/nfts'>NFTs</NavigationItem>
            <NavigationItem link='/pools'>Pools</NavigationItem>
            <ThreeDots />
        </div>
    )
}

export default MobileNav;