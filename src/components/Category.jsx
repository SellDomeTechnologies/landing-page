// Category.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Category.module.css';
//change

const data = [
  {
    title: "Fabrics",
    content: "Material used to make clothing, available in various texture.",
    img: <img src="fabric-1.png" alt="fabric image" />,
  },
  {
    title: "Embellishments",
    content: "Decorative items added to garments, like beads, sequins, or embroidery.",
    img: <img src="fabric-2.png" alt="lining image" />,
  },
  {
    title: "Linings",
    content: "Inner layer of a fabric done into garments for a neat finish.",
    img: <img src="fabric-3.png" alt="fabric image" />,
  },
  {
    title: "Sewing Tools / Equipment",
    content: "Instruments used in sewing such as needles, and sewing machine",
    img: <img src="fabric-4.png" alt="fabric image" />,
  },
  {
    title: "Fusibles",
    content: "Adhesive materials used to bond fabrics together with heat.",
    img: <img src="fabric-5.png" alt="fabric image" />,
  },
  {
    title: "Sewing Accessories",
    content: "Items that aid in sewing including pins, measuring tapes and thimbles.",
    img: <img src="fabric-6.png" alt="fabric image" />,
  },
  {
    title: "Fashion Apparels and Accessories",
    content: "Clothing items and complementary pieces like hats, belts and jewelry.",
    img: <img src="fabric-7.png" alt="fabric image" />,
  },
];

const Category = () => {
  const [items, setItems] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setItems([...data, ...data, ...data]);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth;
      const animationDuration = scrollWidth / 50;

      carousel.style.setProperty('--scroll-width', `-${scrollWidth / 3}px`);
      carousel.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, [items]);

  return (
    <section className={styles.category}>
      <div className={styles.category__text}>
        <h3>Categories</h3>
        <h2>Our top value categories for you</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {items.map((item, index) => (
            <div className={styles.carouselCard} key={`${item.title}-${index}`}>
              <div className={styles.carouselImg}>{item.img}</div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;

//