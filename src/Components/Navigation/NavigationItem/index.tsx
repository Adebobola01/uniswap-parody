import React from "react";
import { NavLink } from "react-router-dom";


type navProp = {
    link: any,
    children: React.ReactElement
}

const NavigationItem = (props: any) => {
    return (
        <NavLink to={props.link}>{ props.children}</NavLink>
    )
}

export default NavigationItem;