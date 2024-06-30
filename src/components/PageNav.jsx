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
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Resources</Link>
          </li>
        </ul>
        <button>
          <Link>Sign Up</Link>
        </button>
      </nav>
    </>
  );
}

export default PageNav;
