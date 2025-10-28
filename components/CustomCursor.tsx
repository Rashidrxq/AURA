import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  // The RGB representation of 'gold-accent' (#C0A062) from tailwind.config.js
  const goldAccentRGB = 'rgb(192, 160, 98)';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.closest('a, button, .group, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Check the color of the element under the cursor to determine if inversion is needed
      try {
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        let shouldInvert = false;

        if (elementUnderCursor) {
            const directStyle = window.getComputedStyle(elementUnderCursor);

            // Check if the text color is gold
            if (directStyle.color === goldAccentRGB) {
                shouldInvert = true;
            }

            // Check if the background color is gold, traversing up if the element is transparent
            if (!shouldInvert) {
                let currentElement: HTMLElement | null = elementUnderCursor as HTMLElement;
                // Traverse up a few levels to find a non-transparent background
                for (let i = 0; i < 5 && currentElement; i++) {
                    const style = window.getComputedStyle(currentElement);
                    const bgColor = style.backgroundColor;
                    // rgba(0, 0, 0, 0) is the computed style for 'transparent'
                    if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
                        if (bgColor === goldAccentRGB) {
                            shouldInvert = true;
                        }
                        break; // Stop once we find the first non-transparent background
                    }
                    currentElement = currentElement.parentElement;
                }
            }
        }
        setIsInverted(shouldInvert);
      } catch (error) {
        // In case of an error (e.g., in an iframe or special browser UI), default to not inverted
        setIsInverted(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [goldAccentRGB]);

  const cursorOutlineClasses = `
    fixed w-8 h-8 rounded-full border-2 
    pointer-events-none transform -translate-x-1/2 -translate-y-1/2
    transition-all duration-300 ease-out z-[9999]
    ${isHovering ? 'scale-150' : 'scale-100'}
    ${isInverted ? 'border-ivory' : 'border-gold-accent'}
  `;

  const cursorDotClasses = `
    fixed w-2 h-2 rounded-full
    pointer-events-none transform -translate-x-1/2 -translate-y-1/2
    z-[9999] transition-all duration-150
    ${isInverted ? 'bg-ivory' : 'bg-gold-accent'}
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
        }} 
      />
    </>
  );
};

export default CustomCursor;
