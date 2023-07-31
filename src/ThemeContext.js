import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Set darkMode to true by default

  useEffect(() => {
    updateCssVariables(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const updateCssVariables = (isDarkMode) => {
    const root = document.querySelector(':root');
    root.style.setProperty('--bg-color', isDarkMode ? '#0a030f' : '#9e8ec37b');
    root.style.setProperty('--text-color', isDarkMode ? '#d6cfd1' : '#171515');
    root.style.setProperty('--main-color', isDarkMode ? '#e11d41' : '#ec2146');
  };

  useEffect(() => {
    // Set the default theme when the component mounts
    updateCssVariables(darkMode);
  }, []); // Empty dependency array to only run it once

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
