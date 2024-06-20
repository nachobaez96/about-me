import React, { useRef, useEffect, useState } from 'react';
import './Project.css';

const Project = ({ barTitle, title, description, imageUrl }) => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.50 && rect.bottom >= window.innerHeight * 0.50) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={projectRef} className={`project-card ${isVisible ? 'project-visible' : ''}`}>
      <div className="project-titlebar">
        <div className="project-buttons">
          <div className="project-button project-button-close"></div>
          <div className="project-button project-button-minimize"></div>
          <div className="project-button project-button-fullscreen"></div>
        </div>
        <div className="project-bartitle">{barTitle}</div>
      </div>
      <div className="project-content">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-description-container">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
