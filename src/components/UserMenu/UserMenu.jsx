import React from "react";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { SelectUser } from "../../redux/auth/selectors";
import s from "../UserMenu/UserMenu.module.css";

const UserMenu = () => {
const dispatch = useDispatch();
const user = useSelector(SelectUser);
    return (
    <div className={s.div}>
        <p> hello, {user.name}</p>
        <button className={s.button} onClick={() => dispatch(logOut())}>
        Logout
        </button>
    </div>
);
};

export default UserMenu;