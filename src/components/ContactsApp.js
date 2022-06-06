import React, { useState } from 'react';
import AddContact from './AddContact';

const ContactsApp = () => {

    const [contacts, setContacts] = useState([]);

    // submit new contact to contact list
    // const submitHandler = (e, newContact) => {
    //     e.preventDefault();
    //     console.log(newContact)
    //     setContacts([...contacts, newContact])
    // }

    return (
        <div>
            <AddContact contacts={contacts} setContacts={setContacts} />
        </div>
    );
};

export default ContactsApp;