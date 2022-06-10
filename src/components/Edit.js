import React, { useState } from "react";

// style
import styles from "./Edit.module.css";

// svg
import close from "../svg/xmark-solid.svg";

const Edit = ({ edit, setEdit, addContactHandler, isShow, setIsShow }) => {
  const [contact, setContact] = useState({
    id: edit.id,
    name: edit.name,
    number: edit.number,
    email: edit.email,
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const updateHandler = (e) => {
    e.preventDefault();

    addContactHandler(contact);

    setContact({
      id: null,
      name: "",
      number: "",
      email: "",
    });

    setIsShow(false);
  };

  const closeModal = () => {
    //   setIsShow(false);
      setEdit({ id: null, name: "", number: "", email: "" });
  };

  return (
    <>
      {isShow ? (
        <div className={styles.updateContainer}>
          <form
            className={styles.form}
            onSubmit={updateHandler}
            autoComplete="off"
          >
            <button className={styles["form__close"]} onClick={closeModal}>
              <img src={close} alt="close" />
            </button>

            <h3 className={styles["form__title"]}>ویرایش مخاطب</h3>

            <div className={styles["form__container"]}>
              <label className={styles["form__label"]} htmlFor="name">
                اسم
              </label>
              <input
                className={styles["form__input"]}
                type="text"
                name="name"
                id="name"
                value={contact.name}
                onChange={changeHandler}
                placeholder="حسین سالاری"
              />
            </div>

            <div className={styles["form__container"]}>
              <label className={styles["form__label"]} htmlFor="number">
                شماره موبایل
              </label>
              <input
                className={styles["form__input"]}
                type="number"
                name="number"
                id="number"
                value={contact.number}
                onChange={changeHandler}
                placeholder="09123456789"
              />
            </div>

            <div className={styles["form__container"]}>
              <label className={styles["form__label"]} htmlFor="email">
                ایمیل
              </label>
              <input
                className={styles["form__input"]}
                type="email"
                name="email"
                id="email"
                value={contact.email}
                onChange={changeHandler}
                placeholder="exam@gmail.com"
              />
            </div>

            <button className={styles["form__submit"]} type="submit">
              ویرایش
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Edit;
