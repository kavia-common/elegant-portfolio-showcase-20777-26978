import React, { useState, useEffect } from 'react';
import './App.css';
import './landing.css';
import LandingPage from './components/Landing';

/**
 * PUBLIC_INTERFACE
 * App entry renders the LandingPage and provides a theme toggle that switches CSS variables.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <LandingPage />
    </div>
  );
}

export default App;
