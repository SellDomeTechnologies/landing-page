import { useEffect } from "react";
import styles from "./Category.module.css";
import { useState } from "react";

const data = [
  {
    title: "Fabric",
    content: (
      <p>
        What looked like a small <br /> patch of purple fabric
      </p>
    ),
    img: <img src="fabric-1.png" alt="fabric image" />,
  },
  {
    title: "Linings",
    content: (
      <p>
        What looked like a small <br /> patch of red lining
      </p>
    ),
    img: <img src="fabric-2.png" alt="lining image" />,
  },
  {
    title: "Fabric",
    content: (
      <p>
        What looked like a small <br /> patch of purple fabric
      </p>
    ),
    img: <img src="fabric-3.png" alt="fabric image" />,
  },
];

function Category() {
  const [arr, setArr] = useState(data);

  return (
    <section className={styles.category}>
      <div className={styles.category__text}>
        <h3>Categories</h3>
        <h2>Our top value categories for you</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {arr.map((item) => (
            <div className={styles.carouselCard}>
              <div className={styles.carouselImg}>{item.img}</div>
              <h3>{item.title}</h3>
              {item.content}
            </div>
          ))}
          {arr.map((item) => (
            <div className={styles.carouselCard}>
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
