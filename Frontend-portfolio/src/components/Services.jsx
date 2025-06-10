import React from 'react';
import './Services.css'; // Ensure you have the correct path to your CSS file

const Services = () => {
  return (
    <>
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Technical Support</h3>
            <p>Providing expert troubleshooting and resolution for hardware, software, and network issues to keep your systems running smoothly.</p>
          </div>
          <div className="service-card">
            <h3>System Optimization</h3>
            <p>Improving performance of software and networks through fine-tuning, updates, and best practice implementations.</p>
          </div>
          <div className="service-card">
            <h3>Cybersecurity</h3>
            <p>Implementing protective measures including firewalls, monitoring, and vulnerability assessments to safeguard your data.</p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>Helping you migrate, configure, and maintain cloud infrastructure for scalable and secure computing.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Services;
// This code defines a React component for displaying services offered in a portfolio.