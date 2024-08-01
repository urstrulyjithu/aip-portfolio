import React , {useEffect , useState , forwardRef} from 'react';
import './App.css';
import videoFile from './Toronto.mp4';

const Home = forwardRef((props, ref) => {

    const texts = [
        "Real-Time Data Analytics",
        "Smart Traffic Management Systems",
        "Integrated Transit Apps"
      ];
      
      const [currentTextIndex, setCurrentTextIndex] = useState(0);
      const [displayedText, setDisplayedText] = useState('');
    
      useEffect(() => {
        let charIndex = 0;
        let erase = false;
        let timer;
    
        const type = () => {
          if (!erase && charIndex <= texts[currentTextIndex].length) {
            setDisplayedText(texts[currentTextIndex].substring(0, charIndex));
            charIndex++;
            timer = setTimeout(type, 100);
          } else if (!erase && charIndex > texts[currentTextIndex].length) {
            erase = true;
            timer = setTimeout(type, 1000); // Wait for 1 second before starting erase
          } else if (erase && charIndex >= 0) {
            setDisplayedText(texts[currentTextIndex].substring(0, charIndex));
            charIndex--;
            timer = setTimeout(type, 50);
          } else {
            erase = false;
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setDisplayedText('');
            charIndex = 0;
            timer = setTimeout(type, 1000); // Wait for 1 second before typing next text
          }
        };
    
        type(); // Start typing the first text
    
        return () => clearTimeout(timer); // Clean up timer on component unmount
      }, [currentTextIndex]);
    
        
      return (
        <div ref={ref} className="video-container">
          <video autoPlay muted loop className="video">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay2"></div>
          <div className="content">
            <h1>Traffic and Urban Mobility Simulation</h1><br/>
            <h2>{displayedText}</h2>
          </div>
        </div>
      );
    
});

export default Home;
