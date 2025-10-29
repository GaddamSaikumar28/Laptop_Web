import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedLaptopSVG = ({ progress, scale, rotateX, rotateY }) => {
  const lidRotation = rotateX; // 0 (open) to 60 (closed)

  return (
    <motion.svg
      width="400" // Base width, will be scaled
      height="400" // Base height, will be scaled
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-[80vw] max-h-[80vh]" // Responsive sizing
      style={{
        transformOrigin: 'center bottom', // Rotate from the hinge
        transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s linear', // Smooth out small progress changes
      }}
    >
      {/* Base (Bottom Part of Laptop) */}
      <rect x="0" y="60" width="100" height="20" rx="3" fill="#2C2C2C" />
      <rect x="5" y="63" width="90" height="15" rx="1" fill="#1C1C1C" /> {/* Keyboard inset */}
      
      {/* Lid (Top Part of Laptop - Screen) */}
      <motion.g
        style={{
          transformOrigin: '50% 60px', // Hinge point for the lid
          transform: `rotateX(${-lidRotation}deg)`, // Inverse rotation to make it open correctly
          transformStyle: 'preserve-3d',
        }}
      >
        <rect x="10" y="0" width="80" height="60" rx="2" fill="#2C2C2C" />
        {/* Screen inside the lid */}
        <rect 
          x="12" y="2" width="76" height="56" rx="1" fill="#0A0A0A"
          style={{ opacity: progress > 0.15 ? 1 : 0, transition: 'opacity 0.3s' }} // Screen turns on
        />
        {/* EonCircular OS text on screen */}
        <text
          x="50" y="30"
          fontFamily="Exo 2, sans-serif"
          fontSize="5"
          fontWeight="bold"
          textAnchor="middle"
          fill="#00BFFF" // Cyan blue color
          style={{ opacity: progress > 0.2 ? 1 : 0, transition: 'opacity 0.3s 0.1s' }}
        >
          EONCIRCULAR OS
        </text>
      </motion.g>
    </motion.svg>
  );
};
