import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Your Ultimate Fashion
          <br />
          Marketplace
        </h1>

        <p>
          Discover. Connect. Create.
          <br />
          Africa's Ultimate Fashion Marketplace
        </p>

        <button>Get Started</button>
      </header>
    </>
  );
}

export default Header;
