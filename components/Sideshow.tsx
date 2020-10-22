import React, { useState, useEffect } from "react";
import styles from "../styles/Sideshow.module.scss";
import { SLIDES } from "../content";

export const Sideshow = () => {
  const [slide, setSlide] = useState<number>(1);
  const [width, setWidth] = useState<number>();
  const lastSlide = SLIDES.length - 1;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function nextSlide() {
    setSlide((currentSlide) => {
      return currentSlide === lastSlide ? 0 : currentSlide + 1;
    });
  }

  function prevSlide() {
    setSlide((currentSlide) => {
      return currentSlide === 0 ? lastSlide : currentSlide - 1;
    });
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage:
            width > 870
              ? `url(${SLIDES[slide].image})`
              : `url(${SLIDES[slide].imageMobile})`,
        }}
      ></div>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <h1>{SLIDES[slide].title}</h1>
          <article>{SLIDES[slide].description}</article>
          <a>
            SHOP NOW &nbsp; &nbsp;
            <img src="./icon-arrow.svg" alt="Shop Now Arrow" />
          </a>
        </div>
        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton} onClick={() => prevSlide()}>
            <img src="./icon-angle-left.svg" alt="Previous Slide" />
          </button>
          <button className={styles.arrowButton} onClick={() => nextSlide()}>
            <img src="./icon-angle-right.svg" alt="Next Slide" />
          </button>
        </div>
      </div>
    </div>
  );
};
