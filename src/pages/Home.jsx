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

        <h4>
          Your Ultimate Fashion Marketplace
          <br />
          Discover. Connect. Create.
        </h4>

        <button>Get Started</button>
      </header>
    </>
  );
}

export default Home;
