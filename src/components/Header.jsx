// Header.jsx
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

function Header({ onVideoPlayingChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      setActiveIndex(0);
      setIsVideoPlaying(false);
      onVideoPlayingChange(false); 
    };

    const handleImageTimer = () => {
      if (activeIndex === 0) {
        document.querySelector(`.${styles['background-image']}`).style.animation = 'none';
        setTimeout(() => {
          document.querySelector(`.${styles['background-image']}`).style.animation = ''; 
        }, 0);

        setTimeout(() => {
          setActiveIndex(1);
          setIsVideoPlaying(true);
          onVideoPlayingChange(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 10000);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd); 
    }

    handleImageTimer(); 

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd); 
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
