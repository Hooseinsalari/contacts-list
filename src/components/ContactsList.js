import React from "react";

// style
import styles from "./ContactsList.module.css";

// icons
import trash from "../svg/trash-can-solid.svg";
import edit from "../svg/pen-to-square-solid.svg";
import { Link } from "react-router-dom";

const ContactsList = ({ contacts, deleteHandler }) => {
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
                onClick={() => deleteHandler(contact.id)}
              >
                <img src={edit} alt="edit" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles['contList__alert']}>
          <h2>لیستت خالیه!</h2>
          <Link to="/add-contact">اضافه کردن مخاطب</Link>
        </div>
      )}
    </div>
  );
};

export default ContactsList;
