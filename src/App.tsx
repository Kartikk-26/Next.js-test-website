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
    title: "Bhagat Singh – A3 Pencil Sketch",
    issuer: "Detailed pencil sketch of Bhagat Singh on A3 sheet with warshing-proof finish. Commissioned artwork.",
    date: "Price: ₹2000",
    credentialLink: "https://www.instagram.com/keertikamla/",
    image: "/testimage3.jpg"
  },
  {
    title: "Couple Portrait – Acrylic on Canvas",
    issuer: "Customized large-size acrylic painting of a couple, created on request with emotional depth and personal touch.",
    date: "Price: ₹4000",
    credentialLink: "https://www.instagram.com/keertikamla/",
    image: "/testimage1.jpg"
  },
  {
    title: "Tribute Portrait – Indian Army Officer",
    issuer: "Hand-painted black and white acrylic portrait of an Indian Army officer on canvas, blended with the Indian tricolor for a patriotic finish. Commissioned tribute piece.",
    date: "Price: ₹2500",
    credentialLink: "https://www.instagram.com/keertikamla/",
    image: "/e4.jpg"
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