import React, { useEffect, useState } from 'react';

const greetings = [
  'Jai Hind!',
  'Vande Mataram!',
  'Bharat Mata!',
  'Hindustan Zindabad!',
  //'Inquilab Zindabad!',
  //'🇮🇳 Desh Prem Zindabad!',
  'Mera Bharat Mahan!',
  //'🇮🇳 Shaheedon Ko Salaam!',
  //'🇮🇳 Swatantrata Amar Rahe!',
  //'🇮🇳 Jai Jawan Jai Kisan!',
];

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 150); // Change greeting every second

    // Simulate loading complete after 3 seconds
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{greetings[greetingIndex]}</h1>
    </div>
  );
};

export default Preloader;