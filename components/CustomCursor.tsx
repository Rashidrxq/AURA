import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  // Fix: The error "Expected 1 arguments, but got 0" is resolved by providing an initial value to useRef.
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const cursorOutline = cursorOutlineRef.current;
    const cursorDot = cursorDotRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorOutline && cursorDot) {
        // Use requestAnimationFrame to batch updates and improve performance
        // Fix: Add a check to ensure requestRef.current has a value before calling cancelAnimationFrame.
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        requestRef.current = requestAnimationFrame(() => {
          cursorOutline.style.transform = `translate(${clientX}px, ${clientY}px)`;
          cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
        });
      }
    };

    const handleMouseOver = (e: Event) => {
        if ((e.target as HTMLElement).closest('a, button, .group, input, [role="button"]')) {
            cursorOutlineRef.current?.classList.add('is-hovering');
        }
    };
    
    const handleMouseOut = (e: Event) => {
        if ((e.target as HTMLElement).closest('a, button, .group, input, [role="button"]')) {
            cursorOutlineRef.current?.classList.remove('is-hovering');
        }
    };

    // Use passive listeners for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if(requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorOutlineRef}
        className="custom-cursor-outline"
      />
      <div 
        ref={cursorDotRef}
        className="custom-cursor-dot"
      />
    </>
  );
};

export default CustomCursor;
