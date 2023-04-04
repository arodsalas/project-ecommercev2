import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>Valid</h1>
    </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Shop"> Shop </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};