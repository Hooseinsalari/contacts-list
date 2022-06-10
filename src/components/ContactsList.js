import React, { useState } from "react";
import { Link } from "react-router-dom";

// component
import Edit from "./Edit";

// style
import styles from "./ContactsList.module.css";

// icons
import trash from "../svg/trash-can-solid.svg";
import editIcon from "../svg/pen-to-square-solid.svg";

const ContactsList = ({
  addContactHandler,
  contacts,
  deleteHandler,
  onUpdateContact,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    number: "",
    email: "",
  });

  // state for show edit modal
  const [isShow, setIsShow] = useState(false);

  const editHandler = (contact) => {
    setEdit(contact);
    setIsShow((prevState) => !prevState);
  };

  const submitHandler = (newContact) => {
    onUpdateContact(edit.id, newContact);
    setEdit({
      id: null,
      name: "",
      number: "",
      email: "",
    });
  };

  return (
    <div className={styles.contList}>
      {contacts.length ? (
        contacts.map((contact) => (
          <div className={styles["contList__item"]} key={contact.id}>
            <div className={styles["contList__name"]}>
              <p>{contact.name}</p>
            </div>

            <div className={styles["contList__data"]}>
              <p className={styles["contList__number"]}>{contact.number}</p>
              <p className={styles["contList__email"]}>{contact.email}</p>
            </div>

            <div className={styles["contList__btns"]}>
              <button
                className={styles["contList__trash-btn"]}
                onClick={() => deleteHandler(contact.id)}
              >
                <img src={trash} alt="trash" />
              </button>
              <button
                className={styles["contList__edit-btn"]}
                onClick={() => editHandler(contact)}
              >
                <img src={editIcon} alt="edit" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles["contList__alert"]}>
          <h2>لیستت خالیه!</h2>
          <Link to="/add-contact">اضافه کردن مخاطب</Link>
        </div>
      )}

      {edit.id ? (
        <Edit
          edit={edit}
          setEdit={setEdit}
          addContactHandler={submitHandler}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      ) : null}
    </div>
  );
};

export default ContactsList;
