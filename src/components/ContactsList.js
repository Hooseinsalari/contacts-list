import React from "react";

const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <div>{contact.name}</div>

          <div>
              <button onClick={() => deleteHandler(contact.id)}>حذف</button>
            <div>
                {contact.number}
                {contact.email}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
