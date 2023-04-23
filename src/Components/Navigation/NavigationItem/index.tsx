import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.scss";


const NavigationItem = (props: any) => {
    return (
        <NavLink to={props.link} className="navigationItem" >
            {props.children}
        </NavLink>
    )
}

export default NavigationItem;