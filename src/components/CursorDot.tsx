import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from './theme-provider';

const CursorDot: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shooting, setShooting] = useState(false);
  const [shootAngle, setShootAngle] = useState(0);
  const { theme } = useTheme();

  const updatePosition = useCallback((x: number, y: number) => {
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shooting) {
        setTimeout(() => {
          updatePosition(e.clientX, e.clientY);
        }, 0.5);
      }
    };

    const handleClick = () => {
      if (!shooting) {
        setShooting(true);
        setShootAngle(Math.random() * 2 * Math.PI);
        setTimeout(() => setShooting(false), 500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [shooting, updatePosition]);

  useEffect(() => {
    if (shooting) {
      const shootInterval = setInterval(() => {
        setPosition(prev => ({
          x: prev.x + Math.cos(shootAngle) * 10,
          y: prev.y + Math.sin(shootAngle) * 10
        }));
      }, 16);

      return () => clearInterval(shootInterval);
    }
  }, [shooting, shootAngle]);

  const dotColor = theme === 'light' ? 'hsl(var(--primary))' : 'white';

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: dotColor,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: shooting ? 'none' : 'top 1s, left 1s',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorDot;