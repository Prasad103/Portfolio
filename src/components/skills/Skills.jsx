import React from 'react';
import './skills.css';


const Skills = () => {
  return (
    <section id="skills">
      <h2>My Technical Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend skills__section">
          <h4>Frontend Development</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>HTML</h5>
                <small className="small">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>CSS</h5>
                <small className="small">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>JavaScript</h5>
                <small className="small">Intermidiate</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>BootStrap</h5>
                <small className="small">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Tailwind</h5>
                <small className="small">Exprienced</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>React</h5>
                <small className="small">Exprienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend skills__section">
          <h4>Backend Development</h4>
          <div className="skills__contents">
            <article className="skills__details">
              
              <div>
                <h5>React JS</h5>
                <small className="small">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Java</h5>
                <small className="small">Exprienced</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>Python</h5>
                <small className="small">Intermidiate</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>PHP</h5>
                <small className="small">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <div>
                <h5>MySQL</h5>
                <small className="small">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
