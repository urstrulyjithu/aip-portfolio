import React, { forwardRef } from 'react';
import './App.css';
import videoFile from './city.mp4';

const Introduction = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="introduction-container">
      <video autoPlay muted loop className="video">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay2"></div>
      <div className="text-content">
        <div className="intro-card">
          <div className="intro-card-inner">
            <div className="intro-card-front">
              <h2>About Our Project</h2>
            </div>
            <div className="intro-card-back">
              <p>
                The goal of the Traffic and Urban Mobility Simulation Web Application is to help users navigate urban environments effectively. It offers real-time navigation options for driving, walking, cycling, and public transportation. Live traffic updates keep users informed about current road conditions, while route optimization tailors paths based on user preferences and real-time data. Additionally, interactive map features provide various transportation layers and allow for user annotations, enhancing the overall user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-inner">
            <div className="intro-card-front">
              <h2>Enhancing Public Transit Efficiency </h2>
            </div>
            <div className="intro-card-back">
              <div className="feature">
                <h3>Live Traffic Updates</h3>
                <p>Keeping users informed about current road conditions to enhance public transit efficiency.</p>
              </div>
              <div className="feature">
                <h3>Cycling Infrastructure</h3>
                <p>Developing infrastructure to promote cycling as a sustainable mode of transportation.</p>
              </div>
              <div className="feature">
                <h3>Pedestrian Safety</h3>
                <p>Implementing measures to ensure pedestrian safety within urban environments.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-card">
          <div className="intro-card-inner">
            <div className="intro-card-front">
              <h2>Urban Planning and Comprehensive Solutions</h2>
            </div>
            <div className="intro-card-back">
              <div className="feature">
                <h3>Interactive Map Features</h3>
                <p>Offering an interactive map with various transportation layers and user annotations for a user-friendly experience.</p>
              </div>
              <div className="feature">
                <h3>Comprehensive Urban Planning</h3>
                <p>Considering urban planning to ensure holistic solutions that benefit the entire urban ecosystem.</p>
              </div>
              <div className="feature">
                <h3>User Annotations</h3>
                <p>Allowing users to contribute annotations for a more collaborative and informative navigation experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Introduction;
