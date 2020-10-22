import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.scss";
import { MenuItem } from "./MenuItem";

const MENU = ["home", "shop", "about", "contact"];

export const Menu = () => {
  const [width, setWidth] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width > 870) {
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
  }
  return (
    <div className={styles.container}>
      <img src="./logo.svg" />
      {open ? (
        <div className={styles.menuOpen}>
          <button onClick={() => setOpen(false)}>
            <img src="./icon-close.svg" alt="Close menu" />
          </button>
          {MENU.map((title, index) => (
            <MenuItem title={title} key={`menu-${index}`} />
          ))}
        </div>
      ) : (
        <div onClick={() => setOpen(true)} className={styles.menuClosed}>
          <button>
            <img src="./icon-hamburger.svg" alt="Open menu" />
          </button>
        </div>
      )}
      {open ? (
        <>
          <div className={styles.bg}></div>
          <div className={styles.overlay}></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
