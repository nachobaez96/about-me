import React from 'react';
import Project from './Project';
import './styles.css';

// './1920x1280.png'
// './1920x1440.png'

const Projects = () => {
  const projectData = [
    {
      barTitle: 'Digital Signal Processing',
      title: 'Eletrical Infetterence',
      description: (
        <span>
          <em>Eletrical Infetterence</em> is an Elementary-powered VST audio plug-in that works on your DAW. It mimics amp power going out and back, and is loaded with different modes and rhythmic features.
        </span>
      ),
      imageUrl: './placeholder.png'
    },
    {
      barTitle: 'Game',
      title: 'Project V',
      description: 'Ball Game is a local multiplayer, voleyball inspired game developed with the Phaser engine. It has fast paced gameplay, and a set of powerups to spice things up!', // WIP online multiplayer
      imageUrl: './clip1920x1280.gif'
    },
    {
      barTitle: 'Music Making',
      title: 'Launchpad/Drum Machine',
      description: "This drum machine web app has a few extra features that make it convenient to use, such as soundwave visualization, a necessary trimming feature, and the ability to create your own kit/instruments by uploading audio files.",
      // description: 'This drum machine web app has a few extra features that make it convenient to use, such as soundwave visualization, a necessary trimming feature (remove silences, or be creative with your samples!), and the ability to create your own kit/instruments by uploading audio files.',
      imageUrl: './drummachine.gif'
    },
    {
      barTitle: 'Web App',
      title: 'My Showcase Site',
      description: "The webpage you're witnessing right now. A simple but hopefully visually pleasing display of my React capabilities so far - it also has a back end!",
      imageUrl: './portfolio.gif'
    },
    {
      barTitle: 'More on GitHub!',
      title: 'Smaller projects and backend challenges',
      description: "I'm always working on something! My GitHub profile is constantly getting updates, and it isn't hard for me to find new projects to dive into.",
      imageUrl: './placeholder.png'
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <h2 className="wave-hover">Projects</h2>
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
