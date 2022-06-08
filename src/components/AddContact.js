import React, { useState } from "react";

// styles
import styles from "./AddContact.module.css";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
    email: ""
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(!contact.name) {
      alert("اسم رو وارد نکردی!!!")
      return
    }

    addContactHandler(contact)

    setContact({
      name: "",
      number: "",
      email: "",
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler} autoComplete="off">
          <h3 className={styles['form__title']}>اضافه کردن مخاطب</h3>

          <div className={styles['form__container']}>
              <label className={styles['form__label']} htmlFor="name">اسم</label>
              <input
              className={styles['form__input']}
              type="text"
              name="name"
              id="name"
              value={contact.name}
              onChange={changeHandler}
              placeholder="حسین سالاری"
              />
          </div>

          <div className={styles['form__container']}>
              <label className={styles['form__label']} htmlFor="number">شماره موبایل</label>
              <input
              className={styles['form__input']}
              type="number"
              name="number"
              id="number"
              value={contact.number}
              onChange={changeHandler}
              placeholder="09123456789"
              />
          </div>

          <div className={styles['form__container']}>
              <label className={styles['form__label']} htmlFor="email">ایمیل</label>
              <input
              className={styles['form__input']}
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={changeHandler}
              placeholder="exam@gmail.com"
              />
          </div>

          <button className={styles['form__submit-btn']} type="submit">اضافه کن</button>
      </form>
    </div>
  );
};

export default AddContact;
