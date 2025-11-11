import styles from "./Download.module.css";

function Download() {
  const handleDownloadClick = () => {
    // Replace with your actual GitHub releases URL
    window.open('https://github.com/Gld-Mx24483/selldome-technologies-mobile-app/releases/latest', '_blank');
  };

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
          With our innovative mobile app, finding the perfect materials and
          accessories for your next masterpiece have never been easier.</b>
        </p>
        <p>Download the SellDome App Now and Start Creating!</p>
        {/* <p>Available on the App Store and Google Play Store.</p> */}
        <p className={styles.download__coming_soon}>App Store and Google Play coming soon!</p>
        
        <div className={styles.download__button}>
          <button 
            className={styles.download__custom_btn}
            onClick={handleDownloadClick}
          >
            <svg 
              className={styles.download__icon}
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
          
          {/* Original buttons - commented out */}
          {/* <button className={styles.download__app_button}>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button className={styles.download__app_button}>
            <img src="google-play.png" alt="download btn" />
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Download;

// // Download.jsx
// import styles from "./Download.module.css";

// function Download() {
//   return (
//     <section className={styles.section__download}>
//       <div className={styles.download__cloth}>
//         <img src="cloth.png" alt="clothing image" />
//       </div>
//       <div className={styles.download__content}>
//         <h3>
//           Effortless Product Discovery
//         </h3>
//         <p><b>
//           With our innovative moble app, finding the perfect materials and
//           accessories for your next masterpiece have never been easier.</b>
//         </p>
//         <p>Download the SellDome App Now and Start Creating!</p>
//         <p>Available on the App Store and Google Play Store.</p>
//         <div className={styles.download__button}>
//           <button className={styles.download__app_button}>
//             <img src="app-store.png" alt="download btn" />
//           </button>
//           <button className={styles.download__app_button}>
//             <img src="google-play.png" alt="download btn" />
//           </button>
//       </div>
//       </div>
//     </section>
//   );
// }

// export default Download;
