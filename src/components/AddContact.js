import React, { useState } from "react";

const AddContact = ({ contacts, setContacts }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    email: "",
  });

  const changeHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setContacts([...contacts, newContact]);

    setNewContact({
      name: "",
      number: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} autoComplete="off">
        <div>
          <label htmlFor="name">اسم</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newContact.name}
            onChange={changeHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="number">شماره موبایل</label>
          <input
            type="number"
            name="number"
            id="number"
            value={newContact.number}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">ایمیل</label>
          <input
            type="text"
            name="email"
            id="email"
            value={newContact.email}
            onChange={changeHandler}
          />
        </div>

        <button type="submit">اضافه کن</button>
      </form>
    </div>
  );
};

export default AddContact;
