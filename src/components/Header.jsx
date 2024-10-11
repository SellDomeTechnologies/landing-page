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
  const animationDuration = 10000; // 10 seconds, matching CSS animation duration

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
        { transform: 'scale(1) translate(0, 0)' }, // 0%
        { transform: 'scale(1.4) translate(-10%, 20%)', offset: 0.1 }, // 10%
        { transform: 'scale(1.4) translate(-10%, -15%)', offset: 0.2 }, // 20%
        { transform: 'scale(1.4) translate(10%, 20%)', offset: 0.4 }, // 40%
        { transform: 'scale(1.4) translate(-10%, 10%)', offset: 0.6 }, // 60%
        { transform: 'scale(1.4) translate(-10%, 20%)', offset: 0.8 }, // 80%
        { transform: 'scale(1.4) translate(10%, 20%)', offset: 0.9 }, // 90%
        { transform: 'scale(1) translate(0, 0)' } // 100%
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
    <header className={styles.header}>
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