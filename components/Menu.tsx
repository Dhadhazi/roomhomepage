import React from "react";
import styles from "../styles/Menu.module.scss";
import { MenuItem } from "./MenuItem";

const MENU = ["home", "shop", "about", "contact"];

export const Menu = () => {
  return (
    <div className={styles.container}>
      <img src="./logo.svg" />

      <div className={styles.menuItems}>
        {MENU.map((title, index) => (
          <MenuItem title={title} key={`menu-${index}`} />
        ))}
      </div>
    </div>
  );
};
