import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../Navbar";
import SwapPage from "../../Pages/Swap";
import MobileNav from "../Navbar/Mobile";


const Layout = () => {
    const [visible, setVisible] = useState(false)

    const successCallback = (position: any) => {
        console.log(position);
    };
      
    const navBarHandler: any = (val: boolean) => {
        setVisible(val);
    }
    const errorCallback = (error: any) => {
        console.log(error);
    };

    console.log(visible);

    return (
        <>
            <Navbar changeColor={visible} />
            <main className="main" >
                {/* <SwapPage/> */}
                <Outlet context={[navBarHandler]} />
            </main>
            <MobileNav/>
        </>
    )
}

export default Layout;