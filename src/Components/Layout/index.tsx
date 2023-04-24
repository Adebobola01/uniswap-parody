import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../Navbar";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main className="main" >
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;