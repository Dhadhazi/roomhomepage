import React from "react";
import styles from "../styles/Sideshow.module.scss";
import { SLIDES } from "../content";

export const Sideshow = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${SLIDES[0].image})` }}
      ></div>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <h1>{SLIDES[0].title}</h1>
          <article>{SLIDES[0].description}</article>

          <a>
            SHOP NOW &nbsp; &nbsp;
            <img src="./icon-arrow.svg" alt="Shop Now Arrow" />
          </a>
        </div>
        <div className={styles.arrowsContainer}>
          <div className={styles.arrowBox}>
            <img src="./icon-angle-left.svg" alt="Previous Slide" />
          </div>
          <div className={styles.arrowBox}>
            <img src="./icon-angle-right.svg" alt="Next Slide" />
          </div>
        </div>
      </div>
    </div>
  );
};
