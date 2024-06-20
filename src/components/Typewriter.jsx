import React, { useState, useEffect } from 'react';
import './styles.css';

const Typewriter = ({ text, speed = 80, showBlinkingBlock = true, onComplete, styleRules = [] }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlock, setShowBlock] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        if (onComplete) {
          onComplete();
        }
        if (showBlinkingBlock) {
          setInterval(() => {
            setShowBlock(prev => !prev);
          }, 500);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed, showBlinkingBlock, onComplete]);

  const getStyledText = () => {
    const styledText = displayedText.split('').map((char, index) => {
      let styleClass = '';
      for (let rule of styleRules) {
        if (index >= rule.start && index < rule.end) {
          styleClass = rule.className;
          break;
        }
      }
      return (
        <span key={index} className={styleClass}>
          {char}
        </span>
      );
    });

    return styledText;
  };

  return (
    <span>
      {getStyledText()}
      {showBlinkingBlock && <span className={showBlock ? "blinking-block" : "blinking-block-hidden"}>█</span>}
    </span>
  );
};

export default Typewriter;
