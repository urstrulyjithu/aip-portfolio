import React, { useEffect } from 'react';
import './App.css';

const textContent = "Catalyst";

function createText() {
  const text = document.createElement("div");
  text.className = "animated-text";
  text.innerText = textContent[Math.floor(Math.random() * textContent.length)];
  text.style.left = `${Math.random() * 100}vw`;
  text.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.getElementById('animated-text-container').appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 5000);
}

const AnimatedText = () => {
  useEffect(() => {
    const interval = setInterval(createText, 50);
    return () => clearInterval(interval);
  }, []);

  return <div id="animated-text-container"></div>;
};

export default AnimatedText;
