import React from 'react';
import './Home.css'; // Ensure you have the correct path to your CSS file

const Home = () => {
  return (
    <>
    <section className="home" id="home">
      <div className="home-content">
        <h1>Eric John A. Calda</h1>
        <h2>I'm a
          <span style={{ "--i": 4 }} data-text="Web Developer">Web Developer</span>
          <span style={{ "--i": 3 }} data-text="Cybersecurity">Cybersecurity</span>
          <span style={{ "--i": 2 }} data-text="Data Analyst">Data Analyst</span>
          <span style={{ "--i": 1 }} data-text="Machine Learning">Machine Learning</span>
        </h2>
        <p>Hi, I'm Eric John, a passionate Web developer.</p>
        <div className="btn-sci">
          <a href="assets/Calda_CV.pdf" className="btn-cv" download>Download CV</a>
          <div className="sci">
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="/profile.png" alt="Portrait of Eric John A. Calda" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Home;