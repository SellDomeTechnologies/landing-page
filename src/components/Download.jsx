import styles from "./Download.module.css";

function Download() {
  return (
    <section className={styles.section__download}>
      <div className={styles.download__cloth}>
        <img src="cloth.png" alt="clothing image" />
      </div>
      <div className={styles.download__content}>
        <h3>
          With our innovative moble app, finding the perfect materials and
          accessories for your next masterpiece have never been easier.
        </h3>
        <p>Download the SellDome App Now and Start Creating!</p>
        <p>Available on the App Store and Google Play.</p>
        <div className={styles.download__button}>
          <button>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button>
            <img src="google-play.png" alt="download btn" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Download;
