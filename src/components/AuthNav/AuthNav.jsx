import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../AuthNav/AuthNav.module.css";

const AuthNav = () => {
return (
    <div className={s.div}>
    <NavLink
        to="/login"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
    >
        Login
    </NavLink>
    <NavLink
        to="/register"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
    >
        Register
    </NavLink>
    </div>
);
};

export default AuthNav;