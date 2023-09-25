import React, { useEffect } from 'react';

const Efect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-black');
      } else {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

};

export { Efect };

