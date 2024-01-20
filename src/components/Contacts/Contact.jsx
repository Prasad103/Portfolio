import React from 'react';
import './contact.css'; 
import { CiLinkedin } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="get-in-touch">
      <h2>Get in Touch</h2>
      <p>Feel free to connect with me on the following platforms:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/prasad-bebale/" target="_blank" rel="noopener noreferrer" title="prasad-bebale">
          <CiLinkedin />
          LinkedIn
        </a>
        <a href="https://github.com/Prasad103" target="_blank" rel="noopener noreferrer" title="Prasad103">
          <ImGithub />
          GitHub
        </a>
        <a href="mailto:prasadbebale010@gmail.com" title="prasadbebale010@gmail.com">
          <MdOutlineEmail />
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
