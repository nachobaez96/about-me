import React from 'react';
import './styles.css';
import ParagraphSequence from './ParagraphSequence';

const MacOSWindow = () => {
  return (
    <div className="macos-window">
      <div className="macos-titlebar">
        <div className="macos-buttons">
          <div className="macos-button macos-button-close"></div>
          <div className="macos-button macos-button-minimize"></div>
          <div className="macos-button macos-button-fullscreen"></div>
        </div>
        <div className="macos-title">About Me</div>
      </div>
      <div className="macos-content">
        <ParagraphSequence />
      </div>
    </div>
  );
};

export default MacOSWindow;
