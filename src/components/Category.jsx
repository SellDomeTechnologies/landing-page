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
  const [counter, setCounter] = useState(0);

  useEffect(function () {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % data.length);
      setArr((prevArr) => {
        const firstItem = prevArr[0];
        return [...prevArr.slice(1), firstItem];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.category}>
      <div className={styles.category__text}>
        <h3>Categories</h3>
        <h2>Our top value categories for you</h2>
      </div>

      <div className={styles.category__content}>
        {arr.map((item, index) => (
          <div
            className={styles.category__container}
            style={{
              transform: `translateX(${index * 100}%)`,
              paddingRight: "2rem",
            }}
          >
            <div className={styles.category__fabric}>{item.img}</div>
            <h3>{item.title}</h3>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
