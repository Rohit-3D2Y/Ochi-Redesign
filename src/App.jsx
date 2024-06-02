// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Features from './components/Features';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);  };

  return (
    <div className={`w-full h-screen ${isDarkMode ? "darkmode" : "lightmode"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Landing toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Marquee  />
      <About toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Features toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
