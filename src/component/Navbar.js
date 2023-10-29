import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          BeritaApp
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Indonesia</Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
