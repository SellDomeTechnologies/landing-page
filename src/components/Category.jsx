import React, { useEffect, useRef, useState } from 'react';
import styles from './Category.module.css';

const data = [
  {
    title: "Fabric",
    content: (
      <p>
        Material used to make clothing, <br /> available in various texture.
      </p>
    ),
    img: <img src="fabric-1.png" alt="fabric image" />,
  },
  {
    title: "Embellishments",
    content: (
      <p>
        Decorative items added to garments, <br /> like beads, sequins, or
        embroidery.
      </p>
    ),
    img: <img src="fabric-2.png" alt="lining image" />,
  },
  {
    title: "Linings",
    content: (
      <p>
        Inner layer of a fabric done into <br /> garments for a neat finish .
      </p>
    ),
    img: <img src="fabric-3.png" alt="fabric image" />,
  },
  {
    title: "Sewing Tools / Equipment",
    content: (
      <p>
        Instruments used in sewing such <br /> as needles, and sewing machine
      </p>
    ),
    img: <img src="fabric-4.png" alt="fabric image" />,
  },
  {
    title: "Fusibles",
    content: (
      <p>
        Adhesive materials used to bond <br /> fabrics together with heat.
      </p>
    ),
    img: <img src="fabric-5.png" alt="fabric image" />,
  },
  {
    title: "Sewing Accessories",
    content: (
      <p>
        Items that aid in sewing including pins, measuring tapes and thimbles.
      </p>
    ),
    img: <img src="fabric-6.png" alt="fabric image" />,
  },
  {
    title: "Fashion Apparels and Accessories",
    content: (
      <p>
        Clothing items and complementary <br /> pieces like hats, belts and
        jewelry.
      </p>
    ),
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
              <h3>{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;