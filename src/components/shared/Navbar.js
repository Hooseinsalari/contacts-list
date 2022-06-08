import React from "react";

// style
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles["menu__list"]}>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            افزودن
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            لیست مخاطبین  
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
