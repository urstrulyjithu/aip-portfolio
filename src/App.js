import React, { useRef } from 'react';
import './App.css';
import Home from './Home';
import AnimatedText from './AnimatedText';
import Footer from './Footer';
import Header from "./Header";
import Introduction from './Introduction';
import Goal from './Goal';
import ContactUs from './ContactUs';

function App() {
  const introRef = useRef(null);
  const homeRef=useRef(null)
  const goalRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <Header onHomeClick={()=> scrollToSection(homeRef)} onAboutClick={() => scrollToSection(introRef)} onGoalClick={() => scrollToSection(goalRef)} onContactClick={() => scrollToSection(contactRef)} />
      <Home ref={homeRef} />
      <Introduction ref={introRef} />
      <Goal ref={goalRef} />
      <ContactUs ref={contactRef} />
      <AnimatedText />
    </div>
  );
}

export default App;
