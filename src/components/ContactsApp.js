import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// components
import AddContact from "./AddContact";
import ContactsList from "./ContactsList";

// toastify
import { notify } from "./shared/toastify";

const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);

  // submit new contact to contact list
  const addContactHandler = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Math.random() }]);
  };

  // delete a contact
  const deleteHandler = (id) => {
    notify("delete", "با موفقیت حذف شد.");
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  // save data in localStorage
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // update contact
  const updateContact = (id, newContact) => {
    const index = contacts.findIndex((c) => c.id === id);
    const selectedContact = { ...contacts[index] };
    selectedContact.name = newContact.name;
    selectedContact.number = newContact.number;
    selectedContact.email = newContact.email;
    const updateContacts = [...contacts];
    updateContacts[index] = selectedContact;
    setContacts(updateContacts);
  };

  return (
    <div className="contacts__app">
      <Routes>
        <Route
          path="/add-contact"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactsList
              contacts={contacts}
              deleteHandler={deleteHandler}
              onUpdateContact={updateContact}
              addContactHandler={addContactHandler}
            />
          }
        />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactsList contacts={contacts} deleteHandler={deleteHandler} /> */}
    </div>
  );
};

export default ContactsApp;
