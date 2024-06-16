import React from 'react';
import Project from './Project';
import './styles.css';

const Projects = () => {
  const projectData = [
    {
      barTitle: 'Game',
      title: 'Project V',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe',
      imageUrl: './project-v.png'
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            barTitle={project.barTitle}
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
