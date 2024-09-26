import styles from "./Work.module.css";

function Work() {
  return (
    <section className={styles.section__work}>
      <h2>How It Works</h2>
      <div className={styles.work__content}>
        <h3>Vendor</h3>
        <div className={styles.vendor__img}>
          <img src="vendor-img.png" alt="vendors chain" />
        </div>
      </div>
      <div className={styles.work__content}>
        <h3>Fashion Designer</h3>
        <div className={styles.vendor__img}>
          <img src="fashion-img.png" alt="vendors chain" />
        </div>
      </div>
    </section>
  );
}

export default Work;
