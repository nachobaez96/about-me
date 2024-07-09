import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import './styles.css';
import paragraphData from './paragraphData';

const ParagraphSequence = () => {
  const paragraphs = [
    {
      text: `<span class="comment" style="margin-bottom: 20px;">// I am a web developer from Madrid, Spain.</span>`,
    },
    {
      text: `<span class="comment" style="margin-bottom: 20px;">// My passion is creating functionally seamless web apps.</span>`,
    },
    {
      text: `<span style="margin-bottom: 20px;">‎</span>`,
    },
    {
      text: `<span class="text" style="margin-bottom: 20px;">nacho.contactInfo<span class="equal"> = </span><span class="bracket">[</span><span class="string"><a href="mailto:nachobaez96@gmail.com" class="link">'nachobaez96@gmail.com'</a><span class="comma">, </span><a href="https://github.com/nachobaez96" target="_blank" rel="noopener noreferrer" class="link">'github/nachobaez96'</a></span><span class="bracket">]</span></span>`,
    },
    {
      text: `<span class="text" style="margin-bottom: 20px;">nacho.skillSet<span class="equal"> = </span><span class="bracket">[</span><span class="string">'JavaScript'<span class="comma">, </span>'React'<span class="comma">, </span>'Node.js'<span class="comma">, </span>'Express'<span class="comma">, </span>'MongoDB w/ Mongoose'</span><span class="bracket">]</span></span>`,
    },
    {
      text: `<span class="text" style="margin-bottom: 20px;">nacho.interests<span class="equal"> = </span><span class="bracket">[</span><span class="string">'composition'<span class="comma">, </span>'digital signal processing'<span class="comma">, </span>'tennis'</span><span class="bracket">]</span></span>`,
    },
    {
      text: `<span style="margin-bottom: 20px;">‎</span>`,
    },
    {
      text: `<span class="comment" style="margin-bottom: 20px;">// I'd love to work with you! Check out my CV here:</span>`,
    },
    {
      text: `<span class="text">nacho.CV<span class="equal"> = </span><span class="string"><a href="./assets/docs/NachoBaezCV.pdf" target="_blank" rel="noopener noreferrer" class="link">'./assets/docs/NachoBaezCV.pdf'</a></span></span>`,
    },
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
      {skip ? paragraphData : (
        paragraphs.map((paragraph, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            {index <= currentParagraph && (
              <Typewriter
                text={paragraph.text}
                speed={35}
                showBlinkingBlock={index === currentParagraph}
                onComplete={index === currentParagraph ? handleComplete : null}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ParagraphSequence;
