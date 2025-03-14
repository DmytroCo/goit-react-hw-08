import React from "react";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
const isLoggedIn = useSelector(SelectIsLoggedIn);
return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};