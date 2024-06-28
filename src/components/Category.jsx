import styles from "./Category.module.css";

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
  return (
    <section className={styles.category}>
      <div className={styles.category__text}>
        <h3>Categories</h3>
        <h2>Our top value categories for you</h2>
      </div>

      <div className={styles.category__content}>
        {data.map((item) => (
          <div className={`swiper-slide ${styles.category__container}`}>
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
