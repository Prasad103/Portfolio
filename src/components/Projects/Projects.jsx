import React from 'react';
import { BiVideo } from 'react-icons/bi'; 
import './project.css';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";




const projects = [
  
  
  {
    title: 'IRIS-The Voice Assistent',
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
    description: '"Crafted an engaging and dynamic UEFA Champions League Dashboard, offering real-time updates and in-depth analysis. Explore the worlds top club football competition like never before!"',
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
    description: 'This project is a high-converting landing page prototype for Genotek "Expansion Joint Covers." It includes an interactive subscription form, engaging content, and is built using ReactJS to demonstrate web development and digital marketing skills.',
    imageUrl: 'https://i.postimg.cc/yYQZkXBX/Screenshot-from-2024-01-28-16-11-04.png', 
    githubUrl: 'https://github.com/Prasad103/Genotek-landing-page',
  },

  {
    title: 'Portfolio',
    description: 'This is a comprehensive portfolio website designed to showcase and highlight my coding projects hosted on GitHub. It serves as a dynamic and visually appealing platform that provides visitors with an overview of my skills, and experience.',
    imageUrl: 'https://i.postimg.cc/jd8189QV/Screenshot-from-2024-01-31-21-39-54.png', 
    githubUrl: 'https://github.com/Prasad103/Portfolio',
    websiteUrl: 'https://prasad103.github.io/Portfolio/'
  },

];

const Project = () => {
  return (
    <section id='title'>
      <h2>Projects</h2>
      <div className="project-section">
        {projects.map((project, index) => (
          <div className="project-container" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <img className="project-image" src={project.imageUrl} alt={`${project.title} Image`} />

            <div className="project-buttons">
              {project.videoUrl && (
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                  <BiVideo />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button github-button">
                  <FaGithub />
                </a>
              )}
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className='project-button wesite-button'>
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

export default Project;