import React, { useState, useEffect } from 'react';
import './CustomCursorCSS.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return <div className="custom-cursor" style={{ left: position.x, top: position.y }} />;
};

export default CustomCursor;
