// Header.jsx
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import greenLottie from './green.json';
import styles from './Header.module.css';
import orangeLottie from './orange.json';

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
            // Set a timeout to end the video after 3 seconds
            setTimeout(() => {
              handleVideoEnd();
            }, 5000);
          }
        }, 5000);
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

  const orangeLottiePositions = [
    { top: '10%', left: '20%' },
    { top: '20%', left: '50%' },
    { top: '30%', left: '80%' },
    { top: '5%', left: '40%' },
    { top: '50%', left: '60%' },
    { top: '30%', left: '20%' },
    { top: '70%', left: '70%' },
    { top: '80%', left: '50%' },
    { top: '50%', left: '40%' },
    { top: '5%', left: '60%' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles['background-container']}>
        <div 
          className={`${styles['background-item']} ${styles['background-image']} ${activeIndex === 0 ? styles.active : ''}`}
        >
          <div className={styles['lottie-container-green']}>
            <Lottie
              loop
              animationData={greenLottie}
              play
              style={{ width: 150, height: 150 }}
            />
          </div>
          {orangeLottiePositions.map((position, index) => (
            <div 
              key={index}
              className={styles['lottie-container-orange']}
              style={{ top: position.top, left: position.left }}
            >
              <Lottie
                loop
                animationData={orangeLottie}
                play
                style={{ width: 50, height: 50 }}
              />
            </div>
          ))}
        </div>
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