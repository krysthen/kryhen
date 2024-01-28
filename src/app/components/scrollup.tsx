'use client'
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 400);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    return (
      <button
        className={`scrollToTopButton ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <div data-cursor-size="80px" data-cursor-color="#6699ffcc"><span className="material-symbols-rounded">arrow_upward</span></div>
      </button>
    );
  };