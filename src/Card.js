import React from 'react';
import './Card.css';
import { RiInformationLine, RiLinkedinBoxLine, RiDribbbleFill, RiGithubFill } from 'react-icons/ri';

const Card = ({ photo, name, role, place }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__border">
          <div className="card__perfil">
            <img src={photo} alt="card image" className="card__img" />
          </div>
        </div>

        <h3 className="card__name">{name}</h3>
        <span className="card__profession">{role}</span>

        <div className="info">
          <div className="info__icon">
            <RiInformationLine />
          </div>

          <div className="info__border">
            <div className="info__perfil">
              <img src={photo} alt="card image" className="info__img" />
            </div>
          </div>

          <div className="info__data">
            <h3 className="info__name">{name}</h3>
            <span className="info__profession">{role}</span>
            <span className="info__location">{place}</span>
          </div>

          <div className="info__social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <RiLinkedinBoxLine />
              </span>
            </a>

            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <RiDribbbleFill />
              </span>
            </a>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="info__social-link">
              <span className="info__social-icon">
                <RiGithubFill />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
