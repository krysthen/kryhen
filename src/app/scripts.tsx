'use client'
import React, { useEffect, useState } from 'react';

const CursorTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // Pusta tablica oznacza, że useEffect uruchamia się tylko raz, jak componentDidMount

  return (
    <div id="cursorTracker" style={{ transform: `translate(${position.x - 12.5}px, ${position.y - 12.5}px)` }}></div>
  );
};

export default CursorTracker;