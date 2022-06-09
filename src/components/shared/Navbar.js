import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles["menu__list"]}>
        <li className={styles["menu__item"]}>
          <Link to='/add-contact' className={styles["menu__link"]} >
            افزودن
          </Link>
        </li>
        <li className={styles["menu__item"]}>
          <Link to='/' className={styles["menu__link"]} >
            لیست مخاطبین  
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
