import React from 'react';
import './styles.css';

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-titlebar">
        <div className="project-buttons">
          <div className="project-button project-button-close"></div>
          <div className="project-button project-button-minimize"></div>
          <div className="project-button project-button-fullscreen"></div>
        </div>
        <div className="project-title">{title}</div>
      </div>
      <div className="project-content">
        <img src={imageUrl} alt={title} className="project-image" />
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;
