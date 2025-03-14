import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../Navigation/Navigation.module.css";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
const isLoggedIn = useSelector(SelectIsLoggedIn);
return (
    <nav className={s.nav}>
        <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
        Home
        </NavLink>
        {isLoggedIn && (
        <NavLink
            to="/contacts"
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
        Contacts
        </NavLink>
    )}
    </nav>
);
};

export default Navigation;