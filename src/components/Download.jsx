import styles from "./Download.module.css";

function Download() {
  return (
    <section className={styles.section__download}>
      <div className={styles.download__cloth}>
        <img src="cloth.png" alt="clothing image" />
      </div>
      <div className={styles.download__content}>
        <h3>
          Effortless Product Discovery
        </h3>
        <p><b>
          With our innovative moble app, finding the perfect materials and
          accessories for your next masterpiece have never been easier.</b>
        </p>
        <p>Download the SellDome App Now and Start Creating!</p>
        <p>Available on the App Store and Google Play Store.</p>
        <div className={styles.download__button}>
          <button className={styles.download__app_button}>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button className={styles.download__app_button}>
            <img src="google-play.png" alt="download btn" />
          </button>
      </div>
      </div>
    </section>
  );
}

export default Download;
