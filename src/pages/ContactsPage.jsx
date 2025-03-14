import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import s from "../components/ContactForm/ContactForm.module.css";

const ContactsPage = () => {
const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);
return (
    <div>
        <h1 className={s.h1}>PHONEBOOK</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
    </div>
);
};

export default ContactsPage;