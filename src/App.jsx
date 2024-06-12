import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MacOSWindow from './components/MacOSWindow';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MacOSWindow title="Terminal" />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
