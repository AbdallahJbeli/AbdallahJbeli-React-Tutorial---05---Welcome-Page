import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1>My website</h1>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
