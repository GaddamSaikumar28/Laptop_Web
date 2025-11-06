// src/components/animations/LaptopImagePopAnimation.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
// import useOnScreen from '../../hooks/useOnScreen'; // Reusing your existing hook
import { useOnScreen } from '../../hooks/useOnScreen';
// Define your laptop images here.
// IMPORTANT: Replace these with actual paths to high-quality laptop images.
// Consider using diverse angles, open/closed, different models for visual variety.
const laptopImages = [
  { src: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Laptop+1', alt: 'Refurbished Laptop Model A' },
  { src: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Laptop+2', alt: 'Refurbished Laptop Model B' },
  { src: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Laptop+3', alt: 'Refurbished Laptop Model C' },
  { src: 'https://via.placeholder.com/600x400/FF33E9/FFFFFF?text=Laptop+4', alt: 'Refurbished Laptop Model D' },
  { src: 'https://via.placeholder.com/600x400/33FFF5/FFFFFF?text=Laptop+5', alt: 'Refurbished Laptop Model E' },
  { src: 'https://via.placeholder.com/600x400/FFD433/FFFFFF?text=Laptop+6', alt: 'Refurbished Laptop Model F' },
];

const LaptopImagePopAnimation = () => {
  const containerRef = useRef();
  // Using useOnScreen to trigger the entire animation block once it's visible
  const isContainerVisible = useOnScreen(containerRef, { threshold: 0.1, triggerOnce: true });

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    },
  };

  return (
    <div ref={containerRef} className="relative py-12 md:py-20">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center"
        initial="hidden"
        animate={isContainerVisible ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // Stagger children animations by 0.1 seconds
            },
          },
        }}
      >
        {laptopImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full h-auto aspect-video rounded-lg shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 relative group bg-gray-200"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              loading="lazy"
            />
            {/* Optional overlay for description on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
        <p className="text-center text-gray-600 mt-12 text-lg">
            Each laptop is meticulously refurbished and rigorously tested to ensure it meets our ECycleGreen standards.
        </p>
    </div>
  );
};

export default LaptopImagePopAnimation;