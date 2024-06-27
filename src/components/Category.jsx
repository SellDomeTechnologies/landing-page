const data = [
  {
    title: "Fabric",
    content: `What looked like a small <br /> patchor purple fabric`,
    img: "",
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

      <div className="category__container">
        <div className="category_fabric">
          <img src="" alt="" />
        </div>
        <h3>Fabrics</h3>
        <p>
          What look like a small
          <br />
          patch or purple fabric
        </p>
      </div>

      <div className="category__container">
        <div className="category_fabric">
          <img src="" alt="" />
        </div>
        <h3>Fabrics</h3>
        <p>
          What look like a small
          <br />
          patch or purple fabric
        </p>
      </div>

      <div className="category__container">
        <div className="category_fabric">
          <img src="" alt="" />
        </div>
        <h3>Fabrics</h3>
        <p>
          What look like a small
          <br />
          patch or purple fabric
        </p>
      </div>
    </section>
  );
}

export default Category;
