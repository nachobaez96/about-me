import React from 'react';
import './styles.css';
import Typewriter from './Typewriter';

const MacOSWindow = ({ title }) => {
  return (
    <div className="macos-window">
      <div className="macos-titlebar">
        <div className="macos-buttons">
          <span className="macos-button macos-button-close"></span>
          <span className="macos-button macos-button-minimize"></span>
          <span className="macos-button macos-button-fullscreen"></span>
        </div>
        <span className="macos-title">{title}</span>
      </div>
      <div className="macos-content">
        <Typewriter text="This is a cute MacOS terminal" />
      </div>
    </div>
  );
};

export default MacOSWindow;
