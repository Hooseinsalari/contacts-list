import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import ContactsList from './ContactsList';

const ContactsApp = () => {

    const [contacts, setContacts] = useState([]);

    // submit new contact to contact list
    const addContactHandler = (newContact) => {
        setContacts([...contacts, {...newContact, id: Math.random() }])
    }

    // delete a contact
    const deleteHandler = (id) => {
        const filteredContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(filteredContacts)
    }

    // save data in localStorage
    useEffect(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (contacts) setContacts(contacts)
    }, [])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    return (
        <div className='contacts__app'>
            <AddContact addContactHandler={addContactHandler} />
            <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
};

export default ContactsApp;