// Header.js
import React from 'react';
import logo from './logo.svg';
import './App.css'; // Import the CSS file

function Header({ onAboutClick  , onContactClick , onGoalClick, onHomeClick  ,}) {
  return (
    <header className="header">
      <div className="logo">
        <h3>CATALYST</h3>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); onAboutClick(); }}>About</a></li>
          <li><a href="#goal" onClick={(e) => { e.preventDefault(); onGoalClick(); }}>Our Goal</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
