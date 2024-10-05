//Market.jsx
import React from 'react';
import styles from "./Market.module.css";

function Market() {
  return (
    <section className={styles.section__market}>
      <div className={styles.market__container}>
        <div className={styles.market__content}>
          <h2>Expand Your Reach, Grow Your Sales</h2>
          <p>
          Whether you're a vendor looking to showcase your unique fabrics and accessories to a 
          larger audience or a fashion designer in search of premium materials for your next creation, 
          our marketplace brings both worlds together. Discover a seamless platform where vendors expand their reach, 
          and designers find exactly what they need to bring their visions to life. Join today and be part of a thriving 
          community that fuels creativity and growth for everyone involved.
          </p>
          <div className={styles.market__download}>
            <p>Download the SellDome App Now and Start Creating!</p>
            <p>Available on the App Store and Google Play Store</p>
          </div>
          <div className={styles.market__btn}>
            <button className={styles.market__app_btn}>
              <img src="app-store.png" alt="Download on App Store" />
            </button>
            <button className={styles.market__app_btn}>
              <img src="google-play.png" alt="Get it on Google Play" />
            </button>
          </div>
        </div>
        <div className={styles.market__img}>
          <img src="ipad-air.png" alt="iPad Air displaying SellDome app" />
        </div>
      </div>
    </section>
  );
}

export default Market;