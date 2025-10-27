import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      // Check if the target or its parent is an interactive element
      if (target.closest('a, button, .group, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorOutlineClasses = `
    fixed w-8 h-8 rounded-full border-2 border-gold-accent
    pointer-events-none transform -translate-x-1/2 -translate-y-1/2
    transition-transform duration-300 ease-out z-[9999]
    ${isHovering ? 'scale-150' : 'scale-100'}
  `;

  const cursorDotClasses = `
    fixed w-2 h-2 rounded-full bg-gold-accent
    pointer-events-none transform -translate-x-1/2 -translate-y-1/2
    transition-transform duration-100 z-[9999]
  `;

  return (
    <>
      <div 
        className={cursorOutlineClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        className={cursorDotClasses}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          // A slight delay for the dot to create a smoother feel
          transition: 'transform 0.05s ease-out'
        }} 
      />
    </>
  );
};

export default CustomCursor;