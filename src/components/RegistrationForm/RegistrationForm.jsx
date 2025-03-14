import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import s from "../RegistrationForm/RegistrationForm.module.css";

const RegistrationForm = () => {
const dispatch = useDispatch();
const initialValues = {
    name: "",
    email: "",
    password: "",
};
const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
};

return (
    <div className={s.div}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
        <label>
            <span>Name</span>
            <Field name="name" />
        </label>
        <label>
            <span>Email</span>
            <Field name="email" />
        </label>
        <label>
            <span>Password</span>
            <Field name="password" type="password" />
        </label>
            <button type="submit">Register</button>
            <p>
            You already have account? <Link to="/login">Get it!</Link>
            </p>
        </Form>
    </Formik>
    </div>
);
};

export default RegistrationForm;