import { Menu } from "../components/Menu";
import { Sideshow } from "../components/Sideshow";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.siteContainer}>
        <div className={styles.sliderContainer}>
          <Menu />
        </div>
        <div className={styles.aboutContainer}>
          <img src="images/image-about-dark.jpg" alt="Nice furniture" />
          <div className={styles.aboutTextBox}>
            <article className={styles.aboutText}>
              <h2>ABOUT OUR FURNITURE</h2>
              <span>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </span>
            </article>
          </div>
          <img src="images/image-about-light.jpg" alt="Nice furniture" />
        </div>
      </div>
    </div>
  );
}
