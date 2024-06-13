import React, { useState } from 'react';
import Typewriter from './Typewriter';
import './styles.css';

const ParagraphSequence = () => {
  const paragraphs = [
    "I am a web developer from Madrid, Spain.",
    "My passion is creating functionally harmonious software.",
    // `nachobaez96 = {\n\tcontactInfo: ['nachobaez96@gmail.com', 'github/nachobaez96'],\n\tskillSet: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose'],\n\tinterests: ['composition', 'digital signal processing', 'tennis']\n}`,
    `nacho.contactInfo: ['nachobaez96@gmail.com', 'github/nachobaez96']`,
    `nacho.skillSet: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose']`,
    `nacho.interests: ['composition', 'digital signal processing', 'tennis']`,
    "Check out my CV here."
  ];

//   `nachobaez96 = {`,
//   `\tcontactInfo: ['nachobaez96@gmail.com', 'github/nachobaez96'],`,
//   `\tskillSet: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose'],`,
//   `\tinterests: ['composition', 'digital signal processing', 'tennis']`,
//   "}",


  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleComplete = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setTimeout(() => {
      setCurrentParagraph(prev => prev + 1);
    }, 1500)};
  };

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <pre key={index} style={{ marginBottom: '20px' }}>
          {index <= currentParagraph && (
            <Typewriter
              text={paragraph}
              speed={50}
              showBlinkingBlock={index === currentParagraph}
              onComplete={index === currentParagraph ? handleComplete : null}
            />
          )}
        </pre>
      ))}
    </div>
  );
};

export default ParagraphSequence;
