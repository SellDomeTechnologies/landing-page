import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <img src="logo.svg" alt="selldome logo" />
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
  );
}

export default PageNav;
