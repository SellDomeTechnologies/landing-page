import PageNav from "../components/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <PageNav />
      <header className={styles.header}></header>
    </>
  );
}

export default Home;
