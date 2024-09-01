import React, { useState } from 'react';
import './NavBar.css'; 

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img 
          src="/images/logo.svg" 
          alt="logo" 
          className="navbar-logo"
        />
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {props.navItems.map((navItem, idx) => (
            <a key={idx} href={navItem.url}>{navItem.name}</a>
          ))}
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;