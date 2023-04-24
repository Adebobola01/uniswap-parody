import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../Navbar";
import SwapPage from "../../Pages/Swap";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main className="main" >
                <SwapPage/>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;