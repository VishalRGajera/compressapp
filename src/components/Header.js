import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/"><img src="/images/logo.png" alt="CompressVideo" /></Link>
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          </button>
          <nav className={`main-nav ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/about">About Us</Link>
              </li>
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/image">Image</Link>
              </li>
              <li className={location.pathname === "/video" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/video">Video</Link>
              </li>
              <li className={location.pathname === "/pdf" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/pdf">Pdf</Link>
              </li>
              <li className={location.pathname === "/document" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/document">Doc</Link>
              </li>
              <li className={location.pathname === "/blog" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/blog">Blog</Link>
              </li>
              <li className={location.pathname === "/Contact" ? "active" : ""}>
                <Link onClick={toggleMenu} to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header