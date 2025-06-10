import React from 'react';
import './Education.css'; // Ensure you have the correct path to your CSS file

const Education = () => {
  return (
    <>
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>Elementary School</h3>
            <span className="edu-institution">Brgy. Santa Cruz Julita, Leyte</span>
            <span className="edu-duration">2009 - 2015</span>
            <p>Completed primary education.</p>
          </div>
          <div className="education-item">
            <h3>High School</h3>
            <span className="edu-institution">Julita National High School</span>
            <span className="edu-duration">2015 - 2019</span>
            <p>Focused on general academic subjects.</p>
          </div>
          <div className="education-item">
            <h3>Senior High School</h3>
            <span className="edu-institution">Julita Senior High School</span>
            <span className="edu-duration">2019 - 2021</span>
            <p>GAS - General Academic Strand.</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Science in Information Technology</h3>
            <span className="edu-institution">Eastern Visayas State University – Tanauan Campus</span>
            <span className="edu-duration">2021 - 2025</span>
            <p>Specialized in Web/software development, network security, and data analytics.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Education;
// This code defines a React component for displaying education information.