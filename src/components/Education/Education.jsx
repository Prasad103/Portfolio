import React from 'react';
import './education.css';
import { IoSchoolSharp } from 'react-icons/io5';


const Education = () => {
  return (
    <section id="education">
      <h5>Get To Know</h5>
      <h2>Education</h2>

      <div className="education__container">
        <div className="education__content">
          <div className="education__cards">
            <article className="education__card">
              <IoSchoolSharp className="education__icon" />
              <h5>SSC</h5>
              <small>83.40%</small>
              <br />
              <small>Shivaji University</small>
              <br />
              <small>2018</small>
            </article>

            <article className="education__card">
              <IoSchoolSharp className="education__icon" />
              <h5>HSC</h5>
              <small>60.43%</small>
              <br />
              <small>Shivaji University</small>
              <br />
              <small>2020</small>
            </article>

            <article className="education__card">
              <IoSchoolSharp className="education__icon" />
              <h5>B.Tech</h5>
              <small>Pursuing</small>
              <br />
              <small>DBATU Lonere</small>
              <br />
              <small>2021 to 2024</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
