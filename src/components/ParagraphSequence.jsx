import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './styles.css';

const ParagraphSequence = () => {
  const paragraphs = [
    {
      text: `// I am a web developer from Madrid, Spain.`,
      styleRules: [{ start: 0, end: 43, className: 'comment' }]
    },
    {
      text: `// My passion is creating functionally seamless web apps.`,
      styleRules: [{ start: 0, end: 57, className: 'comment' }]
    },
    {
      text: "‎", // invisible symbol
      styleRules: []
    },
    {
      text: `nacho.contactInfo = ['nachobaez96@gmail.com', 'github/nachobaez96']`,
      styleRules: [
        { start: 0, end: 17, className: 'text' }, // nacho.contactInfo
        { start: 18, end: 19, className: 'equal' }, // =
        { start: 20, end: 21, className: 'bracket' }, // [
        { start: 21, end: 44, className: 'string' }, // 'nachobaez96@gmail.com'
        { start: 44, end: 45, className: 'comma' }, // ,
        { start: 45, end: 66, className: 'string' }, // 'github/nachobaez96'
        { start: 66, end: 67, className: 'bracket' } // ]
      ]
    },
    {
      text: `nacho.skillSet = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB w/ Mongoose']`,
      styleRules: [
        { start: 0, end: 14, className: 'text' }, // nacho.skillSet
        { start: 15, end: 16, className: 'equal' }, // =
        { start: 17, end: 18, className: 'bracket' }, // [
        { start: 18, end: 30, className: 'string' }, // 'JavaScript'
        { start: 30, end: 31, className: 'comma' }, // ,
        { start: 32, end: 39, className: 'string' }, // 'React'
        { start: 39, end: 40, className: 'comma' }, // ,
        { start: 41, end: 50, className: 'string' }, // 'Node.js'
        { start: 50, end: 51, className: 'comma' }, // ,
        { start: 51, end: 61, className: 'string' }, // 'Express'
        { start: 61, end: 62, className: 'comma' }, // ,
        { start: 62, end: 84, className: 'string' }, // 'MongoDB w/ Mongoose'
        { start: 84, end: 85, className: 'bracket' } // ]
      ]
    },
    {
      text: `nacho.interests = ['composition', 'digital signal processing', 'tennis']`,
      styleRules: [
        { start: 0, end: 15, className: 'text' }, // nacho.interests
        { start: 16, end: 17, className: 'equal' }, // =
        { start: 18, end: 19, className: 'bracket' }, // [
        { start: 19, end: 32, className: 'string' }, // 'composition'
        { start: 32, end: 33, className: 'comma' }, // ,
        { start: 33, end: 61, className: 'string' }, // 'digital signal processing'
        { start: 61, end: 62, className: 'comma' }, // ,
        { start: 63, end: 71, className: 'string' }, // 'tennis'
        { start: 71, end: 72, className: 'bracket' } // ]
      ]
    },
    {
      text: "‎",
      styleRules: []
    },
    {
      text: "// I'd love to work with you! Check out my CV here:",
      styleRules: [{ start: 0, end: 51, className: 'comment' }]
    },
    {
      text: `nacho.CV = './assets/docs/NachoBaezCV.pdf'`,
      styleRules: [
        { start: 0, end: 8, className: 'text' }, // nacho.CV
        { start: 9, end: 10, className: 'equal' }, // =
        { start: 11, end: 42, className: 'string' } // './assets/docs/NachoBaezCV.pdf'
      ]
    }
  ];

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
    if (currentParagraph == 2 || currentParagraph == 6) {
        setCurrentParagraph(prev => prev + 1);
    }
    else if (currentParagraph < paragraphs.length - 1) {
      setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 1100)
    }
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
              <span>{paragraph.text}</span>
            ) : (
              <Typewriter
                text={paragraph.text}
                speed={40}
                showBlinkingBlock={index === currentParagraph}
                onComplete={index === currentParagraph ? handleComplete : null}
                styleRules={paragraph.styleRules}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ParagraphSequence;
