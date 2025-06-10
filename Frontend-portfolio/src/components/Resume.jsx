import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <>
      <section className={`resume ${isExpanded ? 'expanded' : ''}`} id="resume">
        <div className="container">
          <h2 className="section-title">Resume</h2>

          <div className="resume-section">
            <h3>Professional Summary</h3>
            <p>
              Highly skilled IT professional with a strong foundation in <strong>network infrastructure</strong>, <strong>cybersecurity</strong>, and <strong>software system implementation</strong>. Experienced in troubleshooting complex systems, streamlining workflows, and ensuring data protection through strategic solutions. Passionate about innovative technologies, cloud infrastructure, and full-stack development.
            </p>
          </div>

          <div className="resume-section">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              <li>Languages: JavaScript, Python, Bash</li>
              <li>Frontend: HTML5, CSS3, React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB (Atlas), MySQL</li>
              <li>Tools: Git, GitHub, Docker, Postman</li>
              <li>Networking: TCP/IP, Firewalls, DNS, VPN, Routing</li>
              <li>Security: Network Hardening, Vulnerability Assessment, SIEM Tools</li>
              <li>Other: Linux, Windows Server, Virtualization (VMware/VirtualBox)</li>
            </ul>
          </div>

          <button onClick={handleToggle} className="toggle-btn">
            {isExpanded ? 'See Less ▲' : 'See More ▼'}
          </button>

          {isExpanded && (
            <>
              <div className="resume-section">
                <h3>Projects</h3>
                <ul className="projects-list">
                  <li>
                    <strong>Full-Stack Portfolio Website</strong> – React, Node.js, MongoDB Atlas<br />
                    Designed and developed a responsive portfolio site with contact form connected to a Node.js backend. Integrated MongoDB Atlas for real-time data. Implemented scroll animations and skill progress bars.
                  </li>
                  <li>
                    <strong>Secure LAN Setup & Policy Enforcement</strong><br />
                    Configured secure local network with firewall rules, VLANs, and monitoring. Implemented access control and endpoint protection.
                  </li>
                  <li>
                    <strong>System Monitoring Dashboard (Linux)</strong> – Python, Shell Scripts<br />
                    Developed a dashboard showing CPU, memory, and disk usage across nodes.
                  </li>
                </ul>
              </div>

              <div className="resume-section">
                <h3>Experience</h3>
                <div className="job">
                  <h4>IT Support Specialist</h4>
                  <span>Company Name – Location | MM/YYYY – Present</span>
                  <ul>
                    <li>Provided Tier 1–2 support for software and hardware issues.</li>
                    <li>Managed backup and disaster recovery systems, reducing downtime by 30%.</li>
                    <li>Led internal cybersecurity training sessions.</li>
                  </ul>
                </div>

                <div className="job">
                  <h4>Network Technician (Internship)</h4>
                  <span>Company Name – Location | MM/YYYY – MM/YYYY</span>
                  <ul>
                    <li>Assisted configuring routers, switches, and firewalls.</li>
                    <li>Troubleshot LAN/WAN network issues.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-section">
                <h3>Education</h3>
                <p><strong>Bachelor of Science in Information Technology</strong><br />
                  Eastern Visayas State University – Tanauan Campus | Graduated: 2025</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Resume;
