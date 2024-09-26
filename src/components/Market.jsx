import styles from "./Market.module.css";

function Market() {
  return (
    <section className={styles.section__market}>
      <div className={styles.market__content}>
        <h2>Powerful Marketplace</h2>
        <p>
          Explore a vibrant marketplace filled with a diverse range of fashion
          materials and accessories. From luxurious fabrics to one-of-a-kind
          embellishments, you'll find everything you need to bring your creative
          vision to life.
        </p>

        <p style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span>Download the SellDome App Now and Start Creating!</span>
          <span>Available on the App Store and Google Play Store</span>
        </p>

        <div className={styles.market__btn}>
          <button className={styles.market__app_btn}>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button className={styles.market__app_btn}>
            <img src="google-play.png" alt="download btn" />
          </button>
      {/* </div> */}
        </div>
      </div>

      <div className={styles.market__img}>
        <img src="ipad-air.png" alt="ipad image" />
      </div>
    </section>
  );
}

export default Market;
