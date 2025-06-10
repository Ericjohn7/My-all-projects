import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    'Home',
    'About Me',
    'Skills',
    'Resume',
    'Education',
    'Certifications',
    'Projects',
    'Services',
    'Contact'
  ];

  const sectionIds = navItems.map(item => item.toLowerCase().replace(/\s/g, ''));

  useEffect(() => {
    // Theme logic
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

useEffect(() => {
  let timeoutId;

  const handleScroll = () => {
    clearTimeout(timeoutId); // Clear previous debounce

    timeoutId = setTimeout(() => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight * 0.35;
      const scrollPos = scrollY + offset;

      let currentSectionIndex = sectionIds.findIndex((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        return scrollPos >= top && scrollPos < top + height;
      });

      if (currentSectionIndex === -1) {
        // fallback to last section if user scrolls beyond
        const lastSection = document.getElementById(sectionIds.at(-1));
        if (lastSection && scrollPos > lastSection.offsetTop) {
          currentSectionIndex = sectionIds.length - 1;
        }
      }

      if (currentSectionIndex !== -1 && currentSectionIndex !== activeIndex) {
        setActiveIndex(currentSectionIndex);
      }
    }, 50); // Debounced at ~20fps
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // initial run

  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(timeoutId);
  };
}, [activeIndex, sectionIds]);

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">Eric John</a>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item}
              className={activeIndex === index ? 'active' : ''}
            >
              <a href={`#${sectionIds[index]}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button
          id="dark-mode-toggle"
          aria-label="Toggle dark mode"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>

      <div className="bars-animation">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bar" style={{ "--i": i }}></div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
