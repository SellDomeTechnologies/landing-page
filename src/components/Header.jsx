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
  const animationRef = useRef(null);
  const lastAnimationTimeRef = useRef(0);
  const animationDuration = 10000;

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime - lastAnimationTimeRef.current;
      
      const elapsedTime = (currentTime - startTime) % animationDuration;
      const progress = elapsedTime / animationDuration;
      
      if (animationRef.current) {
        updateBackgroundPosition(progress);
      }
      
      lastAnimationTimeRef.current = elapsedTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    const updateBackgroundPosition = (progress) => {
      const keyframes = [
        { transform: 'scale(1) translate(0, 0)' },
        { transform: 'scale(1.4) translate(-10%, 20%)', offset: 0.1 },
        { transform: 'scale(1.4) translate(-10%, -15%)', offset: 0.2 },
        { transform: 'scale(1.4) translate(10%, 20%)', offset: 0.4 },
        { transform: 'scale(1.4) translate(-10%, 10%)', offset: 0.6 },
        { transform: 'scale(1.4) translate(-10%, 20%)', offset: 0.8 },
        { transform: 'scale(1.4) translate(10%, 20%)', offset: 0.9 },
        { transform: 'scale(1) translate(0, 0)' }
      ];

      const currentKeyframe = keyframes.reduce((prev, curr, index) => {
        if (index === 0) return curr;
        const prevOffset = keyframes[index - 1].offset || (index - 1) / (keyframes.length - 1);
        const currentOffset = curr.offset || index / (keyframes.length - 1);
        
        if (progress >= prevOffset && progress <= currentOffset) {
          return curr;
        }
        return prev;
      });

      animationRef.current.style.transform = currentKeyframe.transform;
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleVideoEnd = () => {
      setActiveIndex(0);
      setIsVideoPlaying(false);
      onVideoPlayingChange(false);
    };

    const startVideoTimer = () => {
      if (activeIndex === 0) {
        setTimeout(() => {
          setActiveIndex(1);
          setIsVideoPlaying(true);
          onVideoPlayingChange(true);
          if (videoRef.current) {
            videoRef.current.play();
            setTimeout(handleVideoEnd, 5000);
          }
        }, 7000);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    startVideoTimer();

    return () => {
      cancelAnimationFrame(animationFrameId);
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
    <header className={`${styles.header} ${isVideoPlaying ? styles.videoPlaying : ''}`}>
      <div className={styles['background-container']}>
        <div 
          ref={animationRef}
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
                style={{ width: 35, height: 35 }}
              />
            </div>
          ))}
        </div>
        <div className={`${styles['background-item']} ${styles['video-container']} ${activeIndex === 1 ? styles.active : ''}`}>
          <video
            ref={videoRef}
            className={styles['background-video']}
            muted
            playsInline
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className={styles['video-overlay']}></div>
        </div>
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