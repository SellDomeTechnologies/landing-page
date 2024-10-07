// // Feature.jsx
// import React, { useEffect, useState } from 'react';
// import styles from './Feature.module.css';

// const featureItems = [
//   {
//     title: "For Fashion Designers",
//     titleColor: "#EA4335",
//     content: [
//       "• Limitless Material Selection: Explore a vast array of high-quality materials, fabrics, and accessories from global vendors, tailored to your unique design vision.",
//       "• Vendor Partnerships: Forge meaningful connections with trusted vendors through detailed profiles and seamless communication channels, ensuring the perfect match for your projects.",
//       "• Effortless Ordering: Manage orders effortlessly with intuitive tools for tracking, payment processing, and real-time updates, simplifying your workflow and saving you time.",
//       "• Community Engagement: Immerse yourself in a vibrant community of like-minded designers, sharing insights, inspiration, and collaborative opportunities to elevate your craft."
//     ],
//     img: <img src="scissors.png" alt="scissors icon" className={styles.scissorsIcon} />,
//   },
//   {
//     title: "For Material Vendor",
//     titleColor: "#FBBC04",
//     content: [
//       "• Global Reach: Showcase your products to a global audience of passionate designers, expanding your reach and driving sales through SellDome's dynamic marketplace.",
//       "• Tailored Shop Experience: Create a digital storefront that reflects your brand identity and showcases your materials in the best light, attracting discerning designers with ease.",
//       "• Streamlined Operations: Streamline your order management process with SellDome's comprehensive tools, from inventory management to fulfilment, maximizing efficiency and profitability.",
//       "• Personalized Engagement: Cultivate meaningful relationships with designers, offering personalized recommendations, responsive customer service, and exclusive collaborations to foster loyalty and growth."
//     ],
//     img: <img src="vendor.png" alt="vendor icon" className={styles.scissorsIcon} />,
//   }
// ];

// function Feature() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current === 0 ? 1 : 0));
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   const handlePrevious = () => {
//     setActiveIndex((current) => (current === 0 ? featureItems.length - 1 : current - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((current) => (current === featureItems.length - 1 ? 0 : current + 1));
//   };

//   return (
//     <section className={styles.section__feature}>
//       <div className={styles.container}>
//         <div className={styles.left_content}>
//           <h2>Key Features</h2>
//           <h1>We offer best services</h1>
//           <div className={styles.image_container}>
//             <img src="services-img.png" alt="services img icon" />
//           </div>
//         </div>
//         <div className={styles.right_content}>
//           <div className={styles.feature}>
//             <div className={styles.feature__slide_container}>
//               {featureItems.map((item, index) => (
//                 <div 
//                   key={index}
//                   className={`${styles.feature__container} ${index === activeIndex ? styles.active : ''}`}
//                 >
//                   {item.img}
//                   <div className={styles.content}>
//                     <h3 className={styles.designer_title} style={{ color: item.titleColor }}>
//                       {item.title}
//                     </h3>
//                     {item.content.map((point, pointIndex) => (
//                       <p key={pointIndex}>{point}</p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className={styles.navigation}>
//             <button 
//               onClick={handlePrevious}
//               className={styles.navButton}
//               aria-label="Previous feature"
//             >
//               ◀
//             </button>
//             <button
//               onClick={handleNext}
//               className={styles.navButton}
//               aria-label="Next feature"
//             >
//               ▶
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Feature;

import React, { useEffect, useRef, useState } from 'react';
import styles from './Feature.module.css';

const featureItems = [
  {
    title: "For Fashion Designers",
    titleColor: "#EA4335",
    content: [
      "• Limitless Material Selection: Explore a vast array of high-quality materials, fabrics, and accessories from global vendors, tailored to your unique design vision.",
      "• Vendor Partnerships: Forge meaningful connections with trusted vendors through detailed profiles and seamless communication channels, ensuring the perfect match for your projects.",
      "• Effortless Ordering: Manage orders effortlessly with intuitive tools for tracking, payment processing, and real-time updates, simplifying your workflow and saving you time.",
      "• Community Engagement: Immerse yourself in a vibrant community of like-minded designers, sharing insights, inspiration, and collaborative opportunities to elevate your craft."
    ],
    img: <img src="scissors.png" alt="scissors icon" className={styles.scissorsIcon} />,
  },
  {
    title: "For Material Vendor",
    titleColor: "#FBBC04",
    content: [
      "• Global Reach: Showcase your products to a global audience of passionate designers, expanding your reach and driving sales through SellDome's dynamic marketplace.",
      "• Tailored Shop Experience: Create a digital storefront that reflects your brand identity and showcases your materials in the best light, attracting discerning designers with ease.",
      "• Streamlined Operations: Streamline your order management process with SellDome's comprehensive tools, from inventory management to fulfilment, maximizing efficiency and profitability.",
      "• Personalized Engagement: Cultivate meaningful relationships with designers, offering personalized recommendations, responsive customer service, and exclusive collaborations to foster loyalty and growth."
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