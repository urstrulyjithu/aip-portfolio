import React, { useState, useEffect  , forwardRef} from 'react';
import './App.css';

const Goal = forwardRef((props, ref) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "The Traffic and Urban Mobility Simulation Web Application is designed to optimize urban traffic management and enhance the overall transportation experience. Our solution provides real-time navigation options for various modes of transport, including driving, walking, cycling, and public transportation. It offers live traffic updates, route optimization based on user preferences, and an interactive map with layers and user annotations. By integrating comprehensive urban planning, we aim to create a seamless and efficient urban mobility ecosystem.";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Adjust this for faster or slower typing

    const type = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    // Cleanup function to reset text on unmount
    return () => {
      setDisplayedText('');
    };
  }, [fullText]);

  return (
    <div ref={ref} className="goal-container">
      <div className="goal-content">
        <h2>Our Solution</h2>
        <p>{displayedText}</p>
      </div>
    </div>
  );
});

export default Goal;
