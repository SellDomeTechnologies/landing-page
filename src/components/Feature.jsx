// Feature.jsx
import React from 'react';
import styles from './Feature.module.css';

const featureItems = [
  {
    title: "For Fashion Designers",
    content: [
      "• Limitless Material Selection: Explore a vast array of high-quality materials, fabrics, and accessories from global vendors, tailored to your unique design vision.",
      "• Vendor Partnerships: Forge meaningful connections with trusted vendors through detailed profiles and seamless communication channels, ensuring the perfect match for your projects.",
      "• Effortless Ordering: Manage orders effortlessly with intuitive tools for tracking, payment processing, and real-time updates, simplifying your workflow and saving you time.",
      "• Community Engagement: Immerse yourself in a vibrant community of like-minded designers, sharing insights, inspiration, and collaborative opportunities to elevate your craft."
    ],
    img: <img src="scissors.png" alt="scissors icon" className={styles.scissorsIcon} />,
  }
];

function Feature() {
  return (
    <section className={styles.section__feature}>
      <div className={styles.left_content}>
        <h2>Key Features</h2>
        <h1>We offer best services</h1>
        <div className={styles.image_container}>
          <img src="services-img.png" alt="services img icon" />
        </div>
      </div>
      <div className={styles.feature}>
        {featureItems.map((item, index) => (
          <div className={styles.feature__container} key={index}>
            {item.img}
            <div className={styles.content}>
              <h3 className={styles.designer_title}>{item.title}</h3>
              {item.content.map((point, pointIndex) => (
                <p key={pointIndex}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;