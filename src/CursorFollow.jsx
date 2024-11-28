import React, { useState, useEffect, useRef } from 'react';

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false); 
  const animationFrameRef = useRef(null);
  const delay = 0.1; 


  useEffect(() => {
    const checkIfMobile = () => {
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);


  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    // Add event listener for mouse move
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);


  useEffect(() => {
    if (isMobile) return;

    const updateCursor = () => {

      const diffX = cursorPosition.x - cursorStyle.x;
      const diffY = cursorPosition.y - cursorStyle.y;
      

      const newX = cursorStyle.x + diffX * delay;
      const newY = cursorStyle.y + diffY * delay;

      setCursorStyle({
        x: newX,
        y: newY,
      });


      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);


    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [cursorPosition, cursorStyle, isMobile]);

  if (isMobile) return null; 

  return (
    <div
      className="cursor-follow"
      style={{
        left: `${cursorStyle.x}px`,
        top: `${cursorStyle.y}px`,
      }}
    ></div>
  );
};

export default CursorFollow;

