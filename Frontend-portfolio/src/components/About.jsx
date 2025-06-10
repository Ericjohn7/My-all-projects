import React from 'react';
import './About.css'; // Ensure you have the correct path to your CSS file

const About = () => {
  return (
    <>
    <section className="about" id="aboutme">
      <div className="about-wrapper">
        <div className="about-img">
          <img src="/profile.png" alt="About Image" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>I'm a web developer with a passion for creating dynamic and responsive websites. I have experience in various programming languages and frameworks, and I'm always eager to learn new technologies.</p>
          <div className="personal-info">
            <p className="mb-4">Information about me:</p>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">Eric John A. Calda</span>
                </div>
                <div className="info-item">
                  <span className="label">Phone:</span>
                  <span className="value">+63 9942714105</span>
                </div>
                <div className="info-item">
                  <span className="label">Age:</span>
                  <span className="value">22 Years</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">johnericcalda@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="label">Occupation:</span>
                  <span className="value">Student</span>
                </div>
                <div className="info-item">
                  <span className="label">Nationality:</span>
                  <span className="value">Filipino</span>
                </div>
              </div>
            </div>
            <div className="signature mt-4">
              <div className="signature-image">
                <img src="/esign.jpg" alt="" className="img-fluid" />
              </div>
              <div className="signature-info">
                <h4>ERIC JOHN A. CALDA</h4>
                <p>Aspiring Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;