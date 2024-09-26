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
          Connect. Create. Collaborate.
          <br />
        </p>
        <button>Get Started</button>
      </header>
    </>
  );
}

export default Header;
