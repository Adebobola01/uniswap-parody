import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../Navbar";
import SwapPage from "../../Pages/Swap";


const Layout = () => {

    const successCallback = (position: any) => {
        console.log(position);
    };
      
    const errorCallback = (error: any) => {
    console.log(error);
    };
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    })

    return (
        <>
            <Navbar />
            <main className="main" >
                {/* <SwapPage/> */}
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;