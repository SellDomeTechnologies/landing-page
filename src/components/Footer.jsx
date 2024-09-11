import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <figure className={styles.footer__logo}>
          <img src="logo.png" alt="logo icon" />
        </figure>
        <p>
          Download the SellDome App Now and Start Creating! <br /> Available on
          the App Store and Google Play.
        </p>
        <div className={styles.footer__btn}>
          <button>
            <img src="app-store.png" alt="app-store-image" />
          </button>
          <button>
            <img src="google-play.png" alt="google-play-image" />
          </button>
        </div>
      </div>

      {/* <div className={styles.footer__social}>
        <img src="youtube-icon.png" alt="youtube icon" />
        <img src="facebook-icon.png" alt="facebook icon" />
        <img src="twitter-icon.png" alt="twitter icon" />
        <img src="insta-icon.png" alt="instgram icon" />
        <img src="linkedin-icon.png" alt="linkedin icon" />
      </div> */}
      {/* <p className={styles.footer__copyright}>
        &copy; Copyright 2024 SellDome Africa
      </p> */}

      <div>
        <div>
          <h4>Company</h4>
          <ul className={styles.footer__company}>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className={styles.footer__services}>
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>SEO for businesses</li>
            <li>UI design</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
