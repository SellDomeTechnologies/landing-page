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

        <div className={styles.market__btn}>
          <button>
            <img src="app-store.png" alt="app-store image" />
          </button>
          <button>
            <img src="google-play.png" alt="google-play image" />
          </button>
        </div>
        <button className={styles.market__start}>Get Started</button>
      </div>

      <div className={styles.market__img}>
        <img src="ipad-air.png" alt="ipad image" />
      </div>
    </section>
  );
}

export default Market;
