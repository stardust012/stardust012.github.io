import React from 'react';
import CustomAboutMeCard from '../components/CustomAboutMeCard.js';

const socialLinks = [
  { url: 'https://www.linkedin.com/in/daniella-chasse', icon: 'fab fa-linkedin', name: 'LinkedIn' },
  // Add more social links here as needed
];

function AboutMe() {
  return (
    <div className="about-me">
      <CustomAboutMeCard
        imageSrc="your-profile.jpg"
        title="Daniella Chasse"
        description="I'm an artist passionate about..."
        socialLinks={socialLinks}
      />
    </div>
  );
}

export default AboutMe;
