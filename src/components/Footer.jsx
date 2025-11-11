import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Footer.module.css";

function Footer() {
  const navigate = useNavigate();

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'hello@selldome.africa';
    const subject = 'Subject';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleDownloadClick = () => {
    navigate('/downloads');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__company}>
        <figure className={styles.footer__logo}>
          <img src="logo.png" alt="selldome logo" />
          <span className={styles.logo__text}>SELLDOME</span>
        </figure>
        <p>
          Download the SellDome App Now and Start Creating! <br /> 
          {/* Available on the App Store and Google Play. */}
          <span className={styles.coming_soon_text}>App Store and Google Play coming soon!</span>
        </p>
        <div className={styles.footer__btn}>
          <button 
            className={styles.footer__custom_btn}
            onClick={handleDownloadClick}
          >
            <svg 
              className={styles.footer__download_icon}
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
            <span>Download APK</span>
          </button>
          
          {/* Original buttons - commented out */}
          {/* <button className={styles.footer__app_btn}>
            <img src="app-store.png" alt="download btn" />
          </button>
          <button className={styles.footer__app_btn}>
            <img src="google-play.png" alt="download btn" />
          </button> */}
        </div>
      </div>

      <div className={styles.footer__details}>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Online Marketplace</li>
            <li>Industry Trends</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a 
                href="mailto:selldomeafrica@gmail.com" 
                className={styles.email_link}
                onClick={handleEmailClick}
              >
                hello@selldome.africa
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.follow}>
        <h3>Follow Us</h3>
        <div className={styles.footer__social}>
          <img src="youtube-icon.png" alt="youtube icon" />
          <img src="facebook-icon.png" alt="facebook icon" />
          <img src="twitter-icon.png" alt="twitter icon" />
          <img src="insta-icon.png" alt="instgram icon" />
          <img src="linkedin-icon.png" alt="linkedin icon" />
        </div>
        <p className={styles.footer__copyright}>
          © SellDome Africa. All rights reserved 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import styles from "./Footer.module.css";

// function Footer() {
//   const handleEmailClick = (e) => {
//     e.preventDefault();
//     const email = 'hello@selldome.africa';
//     const subject = 'Subject';
//     const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
//     window.open(gmailUrl, '_blank');
//   };

//   const handleDownloadClick = () => {
//     // Replace with your actual GitHub releases URL
//     window.open('https://github.com/Gld-Mx24483/selldome-technologies-mobile-app/releases/latest', '_blank');
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footer__company}>
//         <figure className={styles.footer__logo}>
//           <img src="logo.png" alt="selldome logo" />
//           <span className={styles.logo__text}>SELLDOME</span>
//         </figure>
//         <p>
//           Download the SellDome App Now and Start Creating! <br /> 
//           {/* Available on the App Store and Google Play. */}
//           <span className={styles.coming_soon_text}>App Store and Google Play coming soon!</span>
//         </p>
//         <div className={styles.footer__btn}>
//           <button 
//             className={styles.footer__custom_btn}
//             onClick={handleDownloadClick}
//           >
//             <svg 
//               className={styles.footer__download_icon}
//               viewBox="0 0 24 24" 
//               fill="none" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path 
//                 d="M12 2L12 14M12 14L17 9M12 14L7 9" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               />
//               <path 
//                 d="M5 17L5 19C5 20.1046 5.89543 21 7 21L17 21C18.1046 21 19 20.1046 19 19L19 17" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <span>Download APK</span>
//           </button>
          
//           {/* Original buttons - commented out */}
//           {/* <button className={styles.footer__app_btn}>
//             <img src="app-store.png" alt="download btn" />
//           </button>
//           <button className={styles.footer__app_btn}>
//             <img src="google-play.png" alt="download btn" />
//           </button> */}
//         </div>
//       </div>

//       <div className={styles.footer__details}>
//         <div>
//           <h4>Services</h4>
//           <ul>
//             <li>Online Marketplace</li>
//             <li>Industry Trends</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Company</h4>
//           <ul>
//             <li>About Us</li>
//             <li>FAQs</li>
//             <li>Blog</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Legal</h4>
//           <ul>
//             <li>Privacy Policy</li>
//             <li>Terms and Conditions</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Contact Us</h4>
//           <ul>
//             <li>
//               <a 
//                 href="mailto:selldomeafrica@gmail.com" 
//                 className={styles.email_link}
//                 onClick={handleEmailClick}
//               >
//                 hello@selldome.africa
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className={styles.follow}>
//         <h3>Follow Us</h3>
//         <div className={styles.footer__social}>
//           <img src="youtube-icon.png" alt="youtube icon" />
//           <img src="facebook-icon.png" alt="facebook icon" />
//           <img src="twitter-icon.png" alt="twitter icon" />
//           <img src="insta-icon.png" alt="instgram icon" />
//           <img src="linkedin-icon.png" alt="linkedin icon" />
//         </div>
//         <p className={styles.footer__copyright}>
//           © SellDome Africa. All rights reserved 2024
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';
// import styles from "./Footer.module.css";

// function Footer() {
//   const handleEmailClick = (e) => {
//     e.preventDefault();
//     const email = 'hello@selldome.africa';
//     const subject = 'Subject';
//     const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
//     window.open(gmailUrl, '_blank');
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footer__company}>
//         <figure className={styles.footer__logo}>
//           <img src="logo.png" alt="selldome logo" />
//           <span className={styles.logo__text}>SELLDOME</span>
//         </figure>
//         <p>
//           Download the SellDome App Now and Start Creating! <br /> Available on
//           the App Store and Google Play.
//         </p>
//         <div className={styles.footer__btn}>
//           <button className={styles.footer__app_btn}>
//             <img src="app-store.png" alt="download btn" />
//           </button>
//           <button className={styles.footer__app_btn}>
//             <img src="google-play.png" alt="download btn" />
//           </button>
//         </div>
//       </div>

//       <div className={styles.footer__details}>
//         <div>
//           <h4>Services</h4>
//           <ul>
//             <li>Online Marketplace</li>
//             <li>Industry Trends</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Company</h4>
//           <ul>
//             <li>About Us</li>
//             <li>FAQs</li>
//             <li>Blog</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Legal</h4>
//           <ul>
//             <li>Privacy Policy</li>
//             <li>Terms and Conditions</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Contact Us</h4>
//           <ul>
//             <li>
//               <a 
//                 href="mailto:selldomeafrica@gmail.com" 
//                 className={styles.email_link}
//                 onClick={handleEmailClick}
//               >
//                 hello@selldome.africa
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className={styles.follow}>
//         <h3>Follow Us</h3>
//         <div className={styles.footer__social}>
//           <img src="youtube-icon.png" alt="youtube icon" />
//           <img src="facebook-icon.png" alt="facebook icon" />
//           <img src="twitter-icon.png" alt="twitter icon" />
//           <img src="insta-icon.png" alt="instgram icon" />
//           <img src="linkedin-icon.png" alt="linkedin icon" />
//         </div>
//         <p className={styles.footer__copyright}>
//           © SellDome Africa. All rights reserved 2024
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;