import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './styles.css';

const ParagraphSequence = () => {
  const paragraphs = [
    `// I am a web developer from Madrid, Spain.`,
    `// My passion is creating functionally harmonious software.`,
    ".",
    // `nachobaez96 = {\n\tcontactInfo: ['nachobaez96@gmail.com', 'github/nachobaez96'],\n\tskillSet: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose'],\n\tinterests: ['composition', 'digital signal processing', 'tennis']\n}`,
    `nacho.contactInfo = ['nachobaez96@gmail.com', 'github/nachobaez96']`,
    `nacho.skillSet = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose']`,
    `nacho.interests = ['composition', 'digital signal processing', 'tennis']`,
    ".",
    "// I'd love to work with you! Check out my CV here:",
    `nacho.CV = './assets/docs/NachoBaezCV.pdf'`
  ];

//   `nachobaez96 = {`,
//   `\tcontactInfo: ['nachobaez96@gmail.com', 'github/nachobaez96'],`,
//   `\tskillSet: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose'],`,
//   `\tinterests: ['composition', 'digital signal processing', 'tennis']`,
//   "}",


  const [currentParagraph, setCurrentParagraph] = useState(-1);
  const [skip, setSkip] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    const startSequence = setTimeout(() => {
      setCurrentParagraph(0);
      setShowSkipButton(true);
    }, 2300);

    return () => clearTimeout(startSequence);
  }, []);

  const handleComplete = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setTimeout(() => {
      setCurrentParagraph(prev => prev + 1);
    }, 1100)};
  };

  const handleSkip = () => {
    setSkip(true);
    setCurrentParagraph(paragraphs.length - 1);
    setShowSkipButton(false);
  };

  return (
   <div className="macos-content">
      {showSkipButton && (
        <button className="skip-button" onClick={handleSkip}>Skip</button>
      )}
      {paragraphs.map((paragraph, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {index <= currentParagraph && (
            skip ? (
              <span>{paragraph}</span>
            ) : (
              <Typewriter
                text={paragraph}
                speed={45}
                showBlinkingBlock={index === currentParagraph}
                onComplete={index === currentParagraph ? handleComplete : null}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ParagraphSequence;