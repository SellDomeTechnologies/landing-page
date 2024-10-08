//TransparentPageNav.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./TransparentPageNav.module.css";

function TransparentPageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, [isMenuOpen]);

    return (
    <nav className={styles.nav}>
        <div className={styles.nav__logo}>
        <img src="logo-white.png" alt="selldome logo" />
        <span className={styles.logo__text}>SELLDOME</span>
        </div>
        <ul className={`${styles.nav__menu} ${isMenuOpen ? styles.open : ''}`}>
        <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
        </li>
        <li className={styles.mobileOnly}>
            <Link to="/faqs" onClick={() => setIsMenuOpen(false)}>FAQs</Link>
        </li>
        <li className={styles.mobileOnly}>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </li>
        <li>
            <button onClick={() => setIsMenuOpen(false)}>Sign up</button>
        </li>
        </ul>
        <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <span></span>
        <span></span>
        <span></span>
        </div>
    </nav>
    );
}

export default TransparentPageNav;