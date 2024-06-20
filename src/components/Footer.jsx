import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made by Nacho Báez © {new Date().getFullYear()}</p>
      <p>Inspired by Justin Chi</p>
    </footer>
  );
};

export default Footer;
