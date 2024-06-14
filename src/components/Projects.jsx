import React from 'react';
import Project from './Project';
import './styles.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Project',
      description: 'This section is under construction',
      imageUrl: 'image.jpg'
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
