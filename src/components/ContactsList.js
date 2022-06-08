import React from "react";

// style
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <div className={styles.contList}>
      {contacts.map((contact) => (
        <div className={styles['contList__item']} key={contact.id}>
          <div className={styles['contList__name']}>
            <p>{contact.name}</p>
          </div>

          <div className={styles['contList__data']}>
            <p className={styles['contList__number']}>
              {contact.number}
            </p>
            <p className={styles['contList__email']}>
              {contact.email}
            </p>
          </div>

          <div className={styles['contList__btns']}>
              <button onClick={() => deleteHandler(contact.id)}>حذف</button>
              <button onClick={() => deleteHandler(contact.id)}>حذف</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
