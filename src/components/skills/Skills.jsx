import React from 'react';
import './skills.css';


const Skills = () => {
  return (
    <section id="skills">
      <h2>My Technical Skills</h2>

      <div className="container skills__container">

      <div className="skills__frontend skills__section">
          <h4>Cyber Security</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>Risk Managment</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Cyber Security Audit</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Incident Responce</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Data Loss Protection(DLP)</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Third Party Risk Managment</h5>
              </div>
            </article>

            
          </div>
        </div>




        <div className="skills__frontend skills__section">
          <h4>Networking & Infrastructure</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>Network Engineering</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5> Asset Management</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5> Infrastructure Management</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Security Education and Awareness</h5>
              </div>
            </article>
          </div>
        </div>


        <div className="skills__frontend skills__section">
          <h4>Identity & Access Management (IAM)</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>Access Control</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5> Security Protocols</h5>
              </div>
            </article>

          </div>
        </div>


        <div className="skills__frontend skills__section">
          <h4>Web Technologies</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>Java</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Python</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>HTML</h5>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>CSS</h5>
              </div>
            </article>
            
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;
