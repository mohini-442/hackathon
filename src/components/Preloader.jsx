import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import coder from '../assets/images/coder.png'

const Preloader = ({ hidePreloader }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      preloaderRef.current,
      { clipPath: 'circle(100%)', opacity: 1 },
      { clipPath: 'circle(0%)', opacity: 0, duration: 2, delay: 2 }
    );

    const timeout = setTimeout(() => {
      handleClick();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    gsap.to(preloaderRef.current, {
      clipPath: 'circle(0%)',
      opacity: 0,
      duration: 1,
      onComplete: hidePreloader
    });
  };

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex items-center justify-center bg-purple-800 z-50"
    >
      <div className="text-center">
        <img src={coder} alt="Preloader" className="w-full max-w-md mx-auto" />
        <button
          onClick={handleClick}
          className="mt-6 px-8 py-3 text-lg bg-white text-purple-800 rounded-full shadow-lg transition duration-300 hover:bg-gray-300"
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Preloader;
