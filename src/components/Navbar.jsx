import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;