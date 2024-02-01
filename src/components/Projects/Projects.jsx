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
    imageUrl: 'https://private-user-images.githubusercontent.com/119681991/297520340-6c80d3b2-9dee-48d6-b7dc-0574f653f009.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3MDg1MTYsIm5iZiI6MTcwNjcwODIxNiwicGF0aCI6Ii8xMTk2ODE5OTEvMjk3NTIwMzQwLTZjODBkM2IyLTlkZWUtNDhkNi1iN2RjLTA1NzRmNjUzZjAwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEzMVQxMzM2NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZTAxMWYyZjRhYjA4MTM5NjA0Zjg1MDg4OTNhZTJlMWZjZDE3NDNmZTMwMDgyN2VkOTA2ODU5OTJmNTk0YmFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.FihD6DO01F-13Ep8-Y3keKen-kiUVgRGMzTuNkI-nDo',
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
    imageUrl: 'https://private-user-images.githubusercontent.com/119681991/300523483-705b871c-c109-4a16-a451-f0ed099be5f6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3MDgzNDMsIm5iZiI6MTcwNjcwODA0MywicGF0aCI6Ii8xMTk2ODE5OTEvMzAwNTIzNDgzLTcwNWI4NzFjLWMxMDktNGExNi1hNDUxLWYwZWQwOTliZTVmNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEzMVQxMzM0MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMmY3ODFiN2MyNmNjMmUzZTc3N2Y0YzYyNDRkYTBmNzM5ODMyOTAyMjVmMjk2Y2U0YTY1N2YzZTRkMmY2NzQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gIwo82a_k1_ajfCNUKTFPQcuO-UNta0jlqonxEGU5y8',
    githubUrl: 'https://github.com/Prasad103/Mobile-Selling-Website',
  },

  {
    title: 'Genotek Landing Page',
    description: 'This project is a high-converting landing page prototype for Genotek "Expansion Joint Covers." It includes an interactive subscription form, engaging content, and is built using ReactJS to demonstrate web development and digital marketing skills.',
    imageUrl: 'https://private-user-images.githubusercontent.com/119681991/300256735-738718c8-325b-4348-8fa4-25618d8ec322.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3MTcyOTUsIm5iZiI6MTcwNjcxNjk5NSwicGF0aCI6Ii8xMTk2ODE5OTEvMzAwMjU2NzM1LTczODcxOGM4LTMyNWItNDM0OC04ZmE0LTI1NjE4ZDhlYzMyMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEzMVQxNjAzMTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYjc3M2M0NThlNWUxZjc1NTY0NzM0ZmQ5NzIwNjQ2ZmVkODc4Nzg0N2FlYjM3OTdlMDY3MmViNWE0ZDQ4NDAxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.v94a9upeJ1MUwY7DmkmmCB3PCK81fQbYcAhgJH536o8', 
    githubUrl: 'https://github.com/Prasad103/Genotek-landing-page',
  },

  {
    title: 'Portfolio',
    description: 'This is a comprehensive portfolio website designed to showcase and highlight my coding projects hosted on GitHub. It serves as a dynamic and visually appealing platform that provides visitors with an overview of my skills, and experience.',
    imageUrl: 'https://private-user-images.githubusercontent.com/119681991/301228760-7208f065-493c-43a3-a052-1397953a54d1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY3MTc3MzUsIm5iZiI6MTcwNjcxNzQzNSwicGF0aCI6Ii8xMTk2ODE5OTEvMzAxMjI4NzYwLTcyMDhmMDY1LTQ5M2MtNDNhMy1hMDUyLTEzOTc5NTNhNTRkMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEzMVQxNjEwMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNWNiZDZlYzVhYWU3NWRmYjZlNjAxZmM3M2VkYWRmYWMxM2ZiMGY0OTkxZjQ5MGY2NzI4N2JiMWYyNDRmZmQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8vZSOy0IJLjG8zZg6h2vcOHd7ZqCQ3Y33Fzlpd7Igq0', 
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