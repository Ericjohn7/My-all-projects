import React from 'react';
import './Skills.css'; // Ensure you have the correct path to your CSS file

const Skills = () => {
  return (
    <>
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3><i className='bx bx-code-alt'></i> Frontend</h3>
          <div className="skill">
            <span>HTML</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "95%" }} data-width="95%"></div></div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "90%" }} data-width="90%"></div></div>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "85%" }} data-width="85%"></div></div>
          </div>
          <div className="skill">
            <span>React</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "75%" }} data-width="75%"></div></div>
          </div>
        </div>

        <div className="skill-category">
          <h3><i className='bx bx-shield'></i> Cybersecurity</h3>
          <div className="skill">
            <span>Network Security</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "80%" }} data-width="80%"></div></div>
          </div>
          <div className="skill">
            <span>Penetration Testing</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "70%" }} data-width="70%"></div></div>
          </div>
          <div className="skill">
            <span>Risk Assessment</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "65%" }} data-width="65%"></div></div>
          </div>
        </div>

        <div className="skill-category">
          <h3><i className='bx bx-data'></i> Data & ML</h3>
          <div className="skill">
            <span>Python</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "85%" }} data-width="85%"></div></div>
          </div>
          <div className="skill">
            <span>Pandas / NumPy</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "80%" }} data-width="80%"></div></div>
          </div>
          <div className="skill">
            <span>Machine Learning</span>
            <div className="progress-bar"><div className="progress" style={{ "--width": "70%" }} data-width="70%"></div></div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Skills;
// This code defines a React component for displaying skills in a portfolio.
