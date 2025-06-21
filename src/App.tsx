import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Service';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import Certificate from './components/Certificate';

// Example certificates data - replace with your actual certificates
const certificates = [
  {
    title: "Tribute to Kargil Hero Capt. Vijayant Thapar ",
    issuer: "On Balidan Divas, I had the honor of presenting his portrait to his parents, Col. (Retd.) V.N. Thapar & Mrs. Tripta Thapar.",
    date: "June 29, 2023",
    credentialLink: "https://www.instagram.com/p/Cu1BakOR98G/?utm_source=ig_web_copy_link",
    image: "/testimage3.jpg"
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate",
    issuer: "Oracle",
    date: "February 2025",
    credentialLink: "https://www.instagram.com/p/Ctu-ycxvDq5/?utm_source=ig_web_copy_link",
    image: "/testimage1.jpg"
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "February 2025",
    credentialLink: "https://www.instagram.com/p/Ctsoz9CxVs8/?utm_source=ig_web_copy_link",
    image: "/e3.jpg"
  }
];


function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Apply dark mode class to body
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading ? (
        <Preloader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <ThreeScene />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <Skills />
            
            <Projects />
            <Certificate certificates={certificates} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;