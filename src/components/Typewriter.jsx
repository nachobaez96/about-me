import React, { useState, useEffect } from 'react';
import './styles.css';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showBlock, setShowBlock] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const startTypewriterEffect = () => {
      const typewriterInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typewriterInterval);
          const blinkingBlockInterval = setInterval(() => {
            setShowBlock(prevState => !prevState);
          }, 500);

          return () => clearInterval(blinkingBlockInterval);
        }
      }, speed);

    };

    const timeout = setTimeout(startTypewriterEffect, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed]);

  return (
    <span>
      {displayText}
      <span className={showBlock ? "blinking-block" : "blinking-block-hidden"}>█</span>
    </span>
  );
};

export default Typewriter
