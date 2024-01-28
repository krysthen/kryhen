'use client'
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function ScrollToDownButton() {
    const [isVisible, setIsunVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsunVisible(scrollY != 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 800,
        behavior: 'smooth',
      });
    };

    return (
        <div className='scrollToDown'>
            <button className={`scrollToDownButton ${isVisible ? '' : 'visible'}`} onClick={scrollToTop}>
                <div data-cursor-size="80px" data-cursor-color="#6699ffcc"><span className="material-symbols-rounded">arrow_downward</span></div>
            </button>
        </div>
    );
  };