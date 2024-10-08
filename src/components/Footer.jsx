//Footer.jsx
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__company}>
        <figure className={styles.footer__logo}>
          <img src="logo.png" alt="selldome logo" />
        <span className={styles.logo__text}>SELLDOME</span>
        </figure>
        <p>
          Download the SellDome App Now and Start Creating! <br /> Available on
          the App Store and Google Play.
        </p>
        <div className={styles.footer__btn}>
        <button className={styles.footer__app_btn}>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button className={styles.footer__app_btn}>
            <img src="google-play.png" alt="download btn" />
          </button>
        </div>
      </div>

      <div className={styles.footer__details}>
        <div>
          <h4>Services</h4>
          <ul className={styles.footer__company}>
            <li>Online Marketplace</li>
            <li>Industry Trends</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul className={styles.footer__services}>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <div className={styles.follow}>
        <h3>Follow Us</h3>
        <div className={styles.footer__social}>
          <img src="youtube-icon.png" alt="youtube icon" />
          <img src="facebook-icon.png" alt="facebook icon" />
          <img src="twitter-icon.png" alt="twitter icon" />
          <img src="insta-icon.png" alt="instgram icon" />
          <img src="linkedin-icon.png" alt="linkedin icon" />
        </div>
        <p className={styles.footer__copyright}>
          Selldome Africa. All rights reserved 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;

//sell
