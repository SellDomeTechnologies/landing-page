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
    img: <img src="fabric-1.png" alt="fabric image" />,
  },
];

function Category() {
  return (
    <section className="category">
      <div className="category__text">
        <h3>Categories</h3>
        <h2>
          Our top value <br />
          categories for you
        </h2>
      </div>

      {data.map((item) => (
        <div className="category__container">
          <div className="category_fabric">{item.img}</div>
          <h3>{item.title}</h3>
          {item.content}
        </div>
      ))}
    </section>
  );
}

export default Category;
