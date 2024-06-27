import PageNav from "../components/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <PageNav />
      <header className={styles.header}>
        <h1>
          Welcome
          <br />
          to SellDome
        </h1>

        <p>
          Your Ultimate Fashion Marketplace
          <br />
          Discover. Connect. Create.
        </p>

        <button>Get Started</button>

        <div className={styles.header__vison}>
          <p>
            Selldome is revolutionizing the fashion industry by providing a
            seamless platform for fashion <br /> designers and vendors to
            connect, collaborate, and create stunning designs.
          </p>
        </div>
      </header>
    </>
  );
}

export default Home;
