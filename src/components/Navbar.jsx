import React from 'react';
import './styles.css';

const Navbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#projects" onClick={(event) => handleScroll(event, 'projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
