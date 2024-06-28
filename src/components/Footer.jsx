import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src="logo.png" alt="logo icon" />
      </div>
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
      <h3>Follow Us</h3>
      <div className={styles.footer__social}>
        <img src="youtube-icon.png" alt="youtube icon" />
        <img src="facebook-icon.png" alt="facebook icon" />
        <img src="twitter-icon.png" alt="twitter icon" />
        <img src="insta-icon.png" alt="instgram icon" />
        <img src="linkedin-icon.png" alt="linkedin icon" />
      </div>
      <p className={styles.footer__copyright}>
        &copy; Copyright 2024 SellDome Africa
      </p>
      <h4>Company</h4>
      <ul className={styles.footer__company}>
        <li>About us</li>
        <li>Contact us</li>
        <li>Careers</li>
        <li>Press</li>
      </ul>
      <h4>Product</h4>
      <ul className={styles.footer__product}>
        <li>Features</li>
        <li>Pricing</li>
        <li>News</li>
        <li>Help desk</li>
        <li>Support</li>
      </ul>
      <h4>Services</h4>
      <ul className={styles.footer__services}>
        <li>Digital Marketing</li>
        <li>Content Writing</li>
        <li>SEO for businesses</li>
        <li>UI design</li>
      </ul>
      <h4>Legal</h4>
      <ul className={styles.footer__legal}>
        <li>Privacy Policy</li>
        <li>Terms &</li>
        <li>Conditions</li>
        <li>Return Policy</li>
      </ul>
    </footer>
  );
}

export default Footer;
