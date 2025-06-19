// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

function Header({ darkMode, setDarkMode }) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <div className="logo">Dev</div>
      <div className="header-right">
        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Theme Toggle Button */}
        <button
          className="btn"
          style={{ marginLeft: '2rem' }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}

export default Header;
