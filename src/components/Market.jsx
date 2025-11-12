// Market.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Market.module.css";

function Market() {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate('/downloads');
  };

  return (
    <section className={styles.section__market}>
      <div className={styles.market__container}>
        <div className={styles.market__content}>
          <h2>Expand Your Reach, Grow Your Sales</h2>
          <p>
          Are you a vendor looking to showcase your unique fabrics and accessories to a
          larger audience or a fashion designer in search of premium materials for your next creation,
          our marketplace brings both worlds together.
          </p>
          <div className={styles.market__download}>
            <p>Download the SellDome App Now and Start Creating!</p>
            <p className={styles.market__coming_soon}>App Store and Google Play coming soon!</p>
          </div>
          <div className={styles.market__btn}>
            <button 
              className={styles.market__custom_btn}
              onClick={handleDownloadClick}
            >
              <svg 
                className={styles.market__download_icon}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L12 14M12 14L17 9M12 14L7 9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M5 17L5 19C5 20.1046 5.89543 21 7 21L17 21C18.1046 21 19 20.1046 19 19L19 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span>Download APK for Android</span>
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

// //Market.jsx
// import React from 'react';
// import styles from "./Market.module.css";

// function Market() {
//   return (
//     <section className={styles.section__market}>
//       <div className={styles.market__container}>
//         <div className={styles.market__content}>
//           <h2>Expand Your Reach, Grow Your Sales</h2>
//           <p>
//           Are you a vendor looking to showcase your unique fabrics and accessories to a
//           larger audience or a fashion designer in search of premium materials for your next creation,
//           our marketplace brings both worlds together.
//           </p>
//           <div className={styles.market__download}>
//             <p>Download the SellDome App Now and Start Creating!</p>
//             <p>Available on the App Store and Google Play Store</p>
//           </div>
//           <div className={styles.market__btn}>
//             <button className={styles.market__app_btn}>
//               <img src="app-store.png" alt="Download on App Store" />
//             </button>
//             <button className={styles.market__app_btn}>
//               <img src="google-play.png" alt="Get it on Google Play" />
//             </button>
//           </div>
//         </div>
//         <div className={styles.market__img}>
//           <img src="ipad-air.png" alt="iPad Air displaying SellDome app" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Market;