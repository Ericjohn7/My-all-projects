import React from 'react';
import './Projects.css'; // Ensure you have the correct path to your CSS file

const Projects = () => {
  return (
    <>
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website built with React and Node.js to showcase my work and skills.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" onClick={() => alert('Coming soon!')}>Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>A task management web app with user authentication and real-time updates using Firebase.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" onClick={() => alert('Coming soon!')}>Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>E-commerce Store</h3>
            <p>An online store built with React, Redux, and Stripe for payment integration.</p>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" onClick={() => alert('Coming soon!')}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Projects;
// This code defines a React component for displaying projects in a portfolio.