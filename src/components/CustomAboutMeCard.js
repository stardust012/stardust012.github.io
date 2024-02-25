import React from 'react';
import '../styles/AboutMe.css'

function CustomAboutMeCard({ imageSrc, title, description, children, socialLinks }) {
  return (
    <div className="card">
      <img src={imageSrc} alt="Profile" className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {children}
        <div className="social-links">
          {socialLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="social-link">
              <i className={link.icon}></i>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomAboutMeCard;
