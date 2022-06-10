import React from "react";
import { NavLink } from "react-router-dom";

// style
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles["menu__list"]}>
        <li className={styles["menu__item"]}>
          <NavLink to='/add-contact' className={({isActive}) => isActive ? styles["menu__link-active"] : styles["menu__link"]} >
            افزودن
          </NavLink>
        </li>
        <li className={styles["menu__item"]}>
          <NavLink to='/' className={({isActive}) => isActive ? styles["menu__link-active"] : styles["menu__link"]} >
            لیست مخاطبین  
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
