import React from "react";
import styles from "../styles/Sideshow.module.scss";
import { SLIDES } from "../content";

export const Sideshow = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${SLIDES[0]})` }}
      ></div>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <h1>{SLIDES[0].title}</h1>
          <article>{SLIDES[0].description}</article>
          <div>
            SHOP NOW &nbsp; &nbsp;
            <img src="./icon-arrow.svg" alt="Shop Now Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
