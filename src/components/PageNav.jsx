import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <img src="logo.png" alt="selldome logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
        </ul>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </nav>
    </>
  );
}

export default PageNav;
