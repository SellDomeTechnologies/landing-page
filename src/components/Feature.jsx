import styles from "./Feature.module.css";

const datas = [
  {
    title: "We offer best services",
    content: "Lorem Ipsum is not simply random text",
    img: <img src="location-icon.png" alt="location icon" />,
  },
  {
    title: "Search",
    content: "It has roots in a piece of classical",
    img: <img src="search-icon.png" alt="location icon" />,
  },
  {
    title: "Connect",
    content: "Lorem Ipsum is not simply random text",
    img: <img src="connect-icon.png" alt="location icon" />,
  },
];

function Feature() {
  return (
    <section className={styles.section__feature}>
      <div className={styles.feature}>
        <h2>Key Features</h2>
        <h1>We offer best services</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        {datas.map((data) => (
          <div className={styles.feature__container}>
            <div>{data.img}</div>
            <div>
              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <img src="services-img.png" alt="services img icon" />
      </div>
    </section>
  );
}

export default Feature;
