import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './DownloadsPage.module.css';

function DownloadsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Google Drive direct download links
  const downloadLinks = {
    universal: 'https://drive.google.com/uc?export=download&id=1t-ag2mbWGd5KXGNzKDriWOU42fk5b2fK',
    arm64: 'https://drive.google.com/uc?export=download&id=1fTtG8lpan14MMFV6c7W3-Iw9Mbm9Zo5J',
    armv7: 'https://drive.google.com/uc?export=download&id=1euDMOxYFgHM1gv8Rv7_C2t1xYXCBKpaX'
  };

  const handleDownload = (url) => {
    // Direct download - opens in new tab and triggers download
    window.open(url, '_blank');
  };

  return (
    <section className={styles.downloads__section}>
      <div className={styles.downloads__container}>
        <div className={styles.downloads__header}>
          <h1 className={styles.downloads__title}>Download SellDome</h1>
          <p className={styles.downloads__subtitle}>
            Choose the perfect APK for your Android device
          </p>
        </div>

        <div className={styles.info__card}>
          <svg className={styles.info__icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <p>
            For most modern Android devices, use the <strong>arm64-v8a</strong> version. 
            If unsure, download the <strong>universal APK</strong>.
          </p>
        </div>

        <div className={styles.apk__grid}>
          <div className={styles.apk__card}>
            <div className={styles.apk__badge}>Recommended</div>
            <div className={styles.apk__icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 14M12 14L17 9M12 14L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17L5 19C5 20.1046 5.89543 21 7 21L17 21C18.1046 21 19 20.1046 19 19L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.apk__title}>Universal APK</h3>
            <p className={styles.apk__description}>
              Works on all Android devices. Perfect if you're unsure about your device architecture.
            </p>
            {/* <div className={styles.apk__size}>~50 MB</div> */}
            <button 
              className={styles.download__btn}
              onClick={() => handleDownload(downloadLinks.universal)}
            >
              Download Now
            </button>
          </div>

          <div className={styles.apk__card}>
            <div className={styles.apk__badge_alt}>Popular</div>
            <div className={styles.apk__icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 14M12 14L17 9M12 14L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17L5 19C5 20.1046 5.89543 21 7 21L17 21C18.1046 21 19 20.1046 19 19L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.apk__title}>ARM64-v8a</h3>
            <p className={styles.apk__description}>
              Optimized for modern 64-bit ARM devices. Smaller size and better performance.
            </p>
            {/* <div className={styles.apk__size}>~20 MB</div> */}
            <button 
              className={styles.download__btn}
              onClick={() => handleDownload(downloadLinks.arm64)}
            >
              Download Now
            </button>
          </div>

          <div className={styles.apk__card}>
            <div className={styles.apk__icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 14M12 14L17 9M12 14L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 17L5 19C5 20.1046 5.89543 21 7 21L17 21C18.1046 21 19 20.1046 19 19L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.apk__title}>ARMEABI-v7a</h3>
            <p className={styles.apk__description}>
              For older 32-bit ARM devices. Compatible with legacy Android phones.
            </p>
            {/* <div className={styles.apk__size}>~15 MB</div> */}
            <button 
              className={styles.download__btn}
              onClick={() => handleDownload(downloadLinks.armv7)}
            >
              Download Now
            </button>
          </div>
        </div>

        <div className={styles.installation__guide}>
          <h3>Installation Instructions</h3>
          <ol className={styles.steps__list}>
            <li>
              <span className={styles.step__number}>1</span>
              <div>
                <strong>Enable Unknown Sources</strong>
                <p>Go to Settings → Security → Enable "Install from unknown sources"</p>
              </div>
            </li>
            <li>
              <span className={styles.step__number}>2</span>
              <div>
                <strong>Download the APK</strong>
                <p>Tap the download button above for your device type</p>
              </div>
            </li>
            <li>
              <span className={styles.step__number}>3</span>
              <div>
                <strong>Install & Enjoy</strong>
                <p>Open the downloaded file and follow the prompts to install</p>
              </div>
            </li>
          </ol>
        </div>

        <div className={styles.support__section}>
          <p>Need help? Contact our support team at <a href="mailto:support@selldome.africa">support@selldome.africa</a></p>
        </div>

        <Link to="/" className={styles.back__btn}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default DownloadsPage;