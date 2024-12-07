import React from 'react';
import { BiVideo } from 'react-icons/bi'; 
import './TAC.css';  // Assuming the styles are in TAC.css
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

// TAC array holding tac details
const TAC = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    description: 'An attempt to make a very simple, Personal Assistant that understands speech as well as text input and is capable of performing tasks other than conversing.',
    imageUrl: 'https://user-images.githubusercontent.com/119681991/209427817-b46ef571-7e94-4eca-8b2c-7198ae33ac5f.png',
    githubUrl: 'https://github.com/Prasad103/I.R.I.S.-Voice-Assistent-Interactive-and-Responsive-Intelligent-System-',
  },
  {
    title: 'GitHub Repositories Website',
    description: 'This is a simple website that allows users to view public repositories of a GitHub user. The website displays basic user information along with a list of repositories, including their names, descriptions, and associated topics.',
    imageUrl: 'https://i.postimg.cc/RFy767wD/Screenshot-from-2024-01-18-02-46-54.png',
    videoUrl: 'https://drive.google.com/file/d/1vwc4LHxXJbSy_FDCeDqAFxb0dmoyCJco/view?usp=sharing',
    githubUrl: 'https://github.com/Prasad103/GitHub-Public-Repos-Display',
  },
  {
    title: 'Tableau Dashboard',
    description: '"Crafted an engaging and dynamic UEFA Champions League Dashboard, offering real-time updates and in-depth analysis. Explore the world’s top club football competition like never before!"',
    imageUrl: 'https://i.postimg.cc/fTBZZHRG/Whats-App-Image-2024-01-20-at-6-20-51-PM.jpg',
    githubUrl: '#',
  },
  { 
    title: 'Mobile Selling Website',
    description: '"Mobile Selling Website" is a straightforward and user-friendly online platform designed for the seamless buying mobile phones.',
    imageUrl: 'https://i.postimg.cc/sxxLy4sH/Screenshot-49.png',
    githubUrl: 'https://github.com/Prasad103/Mobile-Selling-Website',
  },
  {
    title: 'Genotek Landing Page',
    description: 'This tac is a high-converting landing page prototype for Genotek "Expansion Joint Covers." It includes an interactive subscription form, engaging content, and is built using ReactJS to demonstrate web development and digital marketing skills.',
    imageUrl: 'https://i.postimg.cc/yYQZkXBX/Screenshot-from-2024-01-28-16-11-04.png',
    githubUrl: 'https://github.com/Prasad103/Genotek-landing-page',
  },
  {
    title: 'Portfolio',
    description: 'This is a comprehensive portfolio website designed to showcase and highlight my coding tacs hosted on GitHub. It serves as a dynamic and visually appealing platform that provides visitors with an overview of my skills, and experience.',
    imageUrl: 'https://i.postimg.cc/jd8189QV/Screenshot-from-2024-01-31-21-39-54.png',
    githubUrl: 'https://github.com/Prasad103/Portfolio',
    websiteUrl: 'https://prasad103.github.io/Portfolio/'
  },
];

const TACComponent = () => {
  return (
    <section id='title'>
      <h2>Training and Certificate</h2>
      <div className="tac-section">
        {TAC.map((tac, index) => (
          <div className="tac-container" key={index}>
            <h3 className="tac-title">{tac.title}</h3>
            <p className="tac-description">{tac.description}</p>
            <img className="tac-image" src={tac.imageUrl} alt={`${tac.title} Image`} />

            <div className="tac-buttons">
              {tac.videoUrl && (
                <a href={tac.videoUrl} target="_blank" rel="noopener noreferrer" className="tac-button">
                  <BiVideo />
                </a>
              )}
              {tac.githubUrl && (
                <a href={tac.githubUrl} target="_blank" rel="noopener noreferrer" className="tac-button github-button">
                  <FaGithub />
                </a>
              )}
              {tac.websiteUrl && (
                <a href={tac.websiteUrl} target="_blank" rel="noopener noreferrer" className="tac-button wesite-button">
                  <FaLink />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TACComponent;
