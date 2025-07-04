import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="website-title">
        <NavLink to="/">🛒 E-Commerce</NavLink>
      </div>
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
