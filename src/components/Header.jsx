// // Header.jsx
// import { useEffect, useRef, useState } from 'react';
// import styles from "./Header.module.css";

// function Header({ onVideoPlayingChange }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const videoRef = useRef(null);
  
//   useEffect(() => {
//     const handleVideoEnd = () => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
//       setIsVideoPlaying(false);
//       onVideoPlayingChange(false);
//     };

//     const handleImageTimer = () => {
//       if (activeIndex === 0) {
//         setTimeout(() => {
//           setActiveIndex(1);
//           setIsVideoPlaying(true);
//           onVideoPlayingChange(true);
//           if (videoRef.current) {
//             videoRef.current.play();
//           }
//         }, 5000);
//       }
//     };

//     if (videoRef.current) {
//       videoRef.current.addEventListener('ended', handleVideoEnd);
//     }

//     handleImageTimer();

//     return () => {
//       if (videoRef.current) {
//         videoRef.current.removeEventListener('ended', handleVideoEnd);
//       }
//     };
//   }, [activeIndex, onVideoPlayingChange]);

//   return (
//     <header className={styles.header}>
//       <div className={styles['background-container']}>
//         <div className={`${styles['background-item']} ${styles['background-image']} ${activeIndex === 0 ? styles.active : ''}`} />
//         <video
//           ref={videoRef}
//           className={`${styles['background-item']} ${styles['background-video']} ${activeIndex === 1 ? styles.active : ''}`}
//           muted
//           playsInline
//         >
//           <source src="/video1.mp4" type="video/mp4" />
//         </video>
//       </div>
//       <h1>
//         Your Ultimate Fashion
//         <br />
//         Marketplace
//       </h1>
//       <p>
//         Connect. Create. Collaborate.
//         <br />
//       </p>
//       <button>Get Started</button>
//     </header>
//   );
// }

// export default Header;

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

function Header({ onVideoPlayingChange }) {
  const [activeIndex, setActiveIndex] = useState(0); // 0 = image, 1 = video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      setActiveIndex(0); // Switch back to image
      setIsVideoPlaying(false);
      onVideoPlayingChange(false); // Notify parent component
    };

    const handleImageTimer = () => {
      if (activeIndex === 0) {
        // Start the image animation immediately when it becomes active
        document.querySelector(`.${styles['background-image']}`).style.animation = 'none'; // Reset animation
        setTimeout(() => {
          document.querySelector(`.${styles['background-image']}`).style.animation = ''; // Restart animation
        }, 0);

        setTimeout(() => {
          setActiveIndex(1); // Switch to video after 10 seconds (image duration)
          setIsVideoPlaying(true);
          onVideoPlayingChange(true); // Notify parent component
          if (videoRef.current) {
            videoRef.current.play(); // Play video when transitioning
          }
        }, 10000); // Background image shows for 10 seconds
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd); // Listen to when video ends
    }

    handleImageTimer(); // Start the image timer when activeIndex is 0

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd); // Cleanup the event listener
      }
    };
  }, [activeIndex, onVideoPlayingChange]);

  return (
    <header className={styles.header}>
      <div className={styles['background-container']}>
        {/* Background Image */}
        <div className={`${styles['background-item']} ${styles['background-image']} ${activeIndex === 0 ? styles.active : ''}`} />
        {/* Background Video */}
        <video
          ref={videoRef}
          className={`${styles['background-item']} ${styles['background-video']} ${activeIndex === 1 ? styles.active : ''}`}
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <h1>
        Your Ultimate Fashion
        <br />
        Marketplace
      </h1>
      <p>
        Connect. Create. Collaborate.
        <br />
      </p>
      <button>Get Started</button>
    </header>
  );
}

export default Header;
