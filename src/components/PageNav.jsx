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
            <Link>About us</Link>
          </li>
          <li>
            <button>Sign up</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNav;
