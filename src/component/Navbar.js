import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
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
            <Link to="/covid19">Covid-19</Link>
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
