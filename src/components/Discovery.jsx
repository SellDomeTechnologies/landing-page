import styles from "./Discovery.module.css";

function Discovery() {
  return (
    <section className={styles.section__discovery}>
      <div className={styles.discovery__content}>
        <h2>Effortless Vendor Discovery</h2>
        <p>
          Say goodbye to endless searches and countless hours spent sourcing
          materials. SellDome connects fashion designers with a curated network
          of reputable vendors, making it simple to find the perfect fabrics,
          trims, and accessories for your designs.
        </p>
      </div>
      <div className={styles.discovery__img}>
        <img src="iphone.png" alt="iphone logo" />
      </div>
    </section>
  );
}

export default Discovery;
