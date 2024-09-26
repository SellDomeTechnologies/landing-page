import styles from "./Discovery.module.css";

function Discovery() {
  return (
    <section className={styles.section__discovery}>
      <div className={styles.discovery__content}>
        <h2>Seamless Connection with Vendors</h2>
        <p>
          Selldome connects fashion designers with a curated network of
          reputable vendors, making it easy to purchase the perfect materials,
          accessories and so on that enable you bring your designs to life.
        </p>
      </div>
      <div className={styles.discovery__img}>
        <img src="iphone.png" alt="iphone logo" />
      </div>
    </section>
  );
}

export default Discovery;
