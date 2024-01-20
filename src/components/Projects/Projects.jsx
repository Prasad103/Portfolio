import React from 'react';
import { BiVideo } from 'react-icons/bi'; 
import './project.css';


const projects = [
  {
    title: 'IRIS-The Voice Assistent',
    description: 'An attempt to make a very simple, Personal Assistant that understands speech as well as text input and is capable of performing tasks other than conversing.',
    imageUrl: 'https://user-images.githubusercontent.com/119681991/209427817-b46ef571-7e94-4eca-8b2c-7198ae33ac5f.png', 
  },
  {
    title: 'GitHub Repositories Website',
    description: 'This is a simple website that allows users to view public repositories of a GitHub user. The website displays basic user information along with a list of repositories, including their names, descriptions, and associated topics.',
    imageUrl: 'https://private-user-images.githubusercontent.com/119681991/297520340-6c80d3b2-9dee-48d6-b7dc-0574f653f009.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU2NjYwNzAsIm5iZiI6MTcwNTY2NTc3MCwicGF0aCI6Ii8xMTk2ODE5OTEvMjk3NTIwMzQwLTZjODBkM2IyLTlkZWUtNDhkNi1iN2RjLTA1NzRmNjUzZjAwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExOVQxMjAyNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NmFkYTBkZTkxOWVmMDE3YjVjZjI0NjliZjFjMDZhYjk5N2Q2OGVjYWZiMjNmNGEzNGUxOGE2MTM5Y2E0MTQ1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.SW0MfxdXIFh1Qzep5IEUvyCAMWUu2zSPUjesxm8uuyY',
    videoUrl: 'https://drive.google.com/file/d/1vwc4LHxXJbSy_FDCeDqAFxb0dmoyCJco/view?usp=sharing',
  },
  {
    title: 'Tableau Dashboard',
    description: '"Crafted an engaging and dynamic UEFA Champions League Dashboard, offering real-time updates and in-depth analysis. Explore the worlds top club football competition like never before!"',
    imageUrl: 'https://i.postimg.cc/fTBZZHRG/Whats-App-Image-2024-01-20-at-6-20-51-PM.jpg',
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
            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
              <BiVideo /> 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;