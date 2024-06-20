import React from 'react';
import Typewriter from './Typewriter';
import './styles.css';

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <span className="hero-text"><Typewriter text="Hi! I'm Nacho Báez" /></span>
    </div>
  );
};

export default Hero;
