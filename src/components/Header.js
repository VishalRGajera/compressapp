import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className="header">
        <div className="container">
        <div className="header-content">
          <button className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          </button>
          <nav className={`main-nav ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li className="active">
                <Link to="/image">Image</Link>
              </li>
              <li>
                <Link to="/video">Video</Link>
              </li>
              <li>
                <Link to="/pdf">Pdf</Link>
              </li>
              <li>
                <Link to="/document">Document</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header