import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/" exact activeStyle={{color:'red'}}>Home</NavLink>
            <NavLink to="/About" exact activeStyle={{color:'red'}}>About</NavLink>
            <NavLink to="/Contact" exact activeStyle={{color:'red'}}>Contact</NavLink>
        </div>
    );
};

export default Navigation;