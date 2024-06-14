import React, { useState, useEffect } from 'react';
import './styles.css';

const Typewriter = ({ text, speed = 80, showBlinkingBlock = true, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showBlock, setShowBlock] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let blinkingBlockInterval;

    const typewriterInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        blinkingBlockInterval = setInterval(() => {
          setShowBlock(prevState => !prevState);
        }, 500);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => {
      clearInterval(typewriterInterval);
      clearInterval(blinkingBlockInterval);
    };
  }, [text, speed]);

  return (
    <span>
      {displayText}
      {showBlinkingBlock && <span className={showBlock ? "blinking-block" : "blinking-block-hidden"}>█</span>}
    </span>
  );
};

export default Typewriter;
