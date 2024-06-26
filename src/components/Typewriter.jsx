import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 80, showBlinkingBlock = true, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlock, setShowBlock] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        let nextIndex = currentIndex + 1;
        if (text[currentIndex] === '<') {
          nextIndex = text.indexOf('>', currentIndex) + 1;
        }
        setDisplayedText(text.substring(0, nextIndex));
        setCurrentIndex(nextIndex);
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

  return (
    <span>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {showBlinkingBlock && <span className={showBlock ? "blinking-block" : "blinking-block-hidden"}>█</span>}
    </span>
  );
};

export default Typewriter;
