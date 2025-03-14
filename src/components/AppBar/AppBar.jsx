import React from "react";
import s from "../AppBar/AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
const isLoggedIn = useSelector(SelectIsLoggedIn);
return (
    <div className={s.div}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
);
};

export default AppBar;