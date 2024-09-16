import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Logic to increase speed as the user approaches the planet
      const scale = 1 + scrollY / 1000; // Increase the scale based on scroll
      document.body.style.transform = `scale(${scale})`;  // Example of scaling effect
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
