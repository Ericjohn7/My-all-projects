import React from 'react';
import './Certification.css'; // Ensure you have the correct path to your CSS file

const Certifications = () => {
  return (
    <>
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-item">
            <h3>Certified Web Developer</h3>
            <p>Issued by FreeCodeCamp — 2023</p>
          </div>
          <div className="certification-item">
            <h3>CompTIA Security+</h3>
            <p>Issued by CompTIA — 2024</p>
          </div>
          <div className="certification-item">
            <h3>Google Data Analytics Professional</h3>
            <p>Issued by Google — 2023</p>
          </div>
          <div className="certification-item">
            <h3>Machine Learning Specialization</h3>
            <p>Issued by Coursera — 2024</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Certifications;
// This code defines a React component for displaying certifications.