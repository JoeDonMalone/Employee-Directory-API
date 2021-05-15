import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={
            location.pathname === "/blog" ? "nav-link active" : "nav-link"
          }
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={
            location.pathname === "/contact/learn"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Learn
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
