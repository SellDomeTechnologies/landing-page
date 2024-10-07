// Feature.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Feature.module.css';

const featureItems = [
  {
    title: "For Fashion Designers",
    titleColor: "#EA4335",
    content: [
      "• Wide Material Selection: Discover high-quality fabrics and accessories from global vendors.",
      "• Trusted Vendor Connections: Build strong partnerships through seamless communication with reliable vendors.",
      "• Easy Ordering: Simplify your workflow with intuituve order management, payment, and tracking tools.",
      "• Creative Community: Join a vibrant designer community for inspiration, collaboration, and shared insights."
    ],
    img: <img src="scissors.png" alt="scissors icon" className={styles.scissorsIcon} />,
  },
  {
    title: "For Material Vendor",
    titleColor: "#FBBC04",
    content: [
      "• Expand Your Reach: Access a global network of customers and boost sales through SellDome's marketplace.",
      "• Tailored Digital Storefront: Customize your shop to showcase your brand and materials, attracting top designers.",
      "• Efficient Operations: Simplify order management with tools for inventory, orders, and fulfillment, optimizing profitability.",
      "• Build Relationships: Engage with customers through personalized service, recommendations, and exclusive collaborations."
    ],
    img: <img src="vendor.png" alt="vendor icon" className={styles.scissorsIcon} />,
  }
];

function Feature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? featureItems.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === featureItems.length - 1 ? 0 : current + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className={styles.section__feature}>
      <div className={styles.container}>
        <div className={styles.left_content}>
          <h2>Key Features</h2>
          <h1>We offer best services</h1>
          <div className={styles.image_container}>
            <img src="services-img.png" alt="services img icon" />
          </div>
        </div>
        <div className={styles.right_content}>
          <div 
            className={styles.feature}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.feature__slide_container}>
              {featureItems.map((item, index) => (
                <div 
                  key={index}
                  className={`${styles.feature__container} ${index === activeIndex ? styles.active : ''}`}
                >
                  {item.img}
                  <div className={styles.content}>
                    <h3 className={styles.designer_title} style={{ color: item.titleColor }}>
                      {item.title}
                    </h3>
                    {item.content.map((point, pointIndex) => (
                      <p key={pointIndex}>{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.navigation}>
            <button 
              onClick={handlePrevious}
              className={`${styles.navButton} ${activeIndex === 0 ? styles.activeNav : ''}`}
              aria-label="Previous feature"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className={`${styles.navButton} ${activeIndex === 1 ? styles.activeNav : ''}`}
              aria-label="Next feature"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;