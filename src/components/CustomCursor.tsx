import { useState, useEffect, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  // Track hoverable elements
  useEffect(() => {
    const handleElementHover = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    handleElementHover();
    
    // Re-check on DOM changes
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Main event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  // Hide on touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Single Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full bg-card transition-all duration-200 ${
            isHovering 
              ? 'w-12 h-12 bg-ocean/30' 
              : isClicking
                ? 'w-2 h-2'
                : 'w-4 h-4'
          }`}
        />
      </div>

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
