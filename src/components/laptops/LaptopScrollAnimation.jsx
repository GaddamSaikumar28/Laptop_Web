// import React, { useRef } from 'react';
// import { useScrollProgress } from '../../hooks/useScrollProgress.js';
// import { Laptop } from 'lucide-react';

// // This component defines the text that fades in and out
// const ScrollFeature = ({ children, progress, start, end }) => {
//   // Calculate opacity based on scroll progress
//   let opacity = 0;
//   const range = end - start;
//   const progressInRange = (progress - start) / range;

//   if (progressInRange < 0) {
//     opacity = 0;
//   } else if (progressInRange < 0.25) { // Fade in
//     opacity = progressInRange * 4;
//   } else if (progressInRange < 0.75) { // Hold
//     opacity = 1;
//   } else if (progressInRange < 1) { // Fade out
//     opacity = (1 - progressInRange) * 4;
//   }

//   opacity = Math.max(0, Math.min(1, opacity));

//   return (
//     <div className="text-left max-w-md" style={{ opacity }}>
//       {children}
//     </div>
//   );
// };

// export const LaptopScrollAnimation = () => {
//   // This ref is for the *entire scrollable section* (which is 5x viewport height)
//   const scrollRef = useRef(null);
//   // Get the progress (0-1) of scrolling through that section
//   const progress = useScrollProgress(scrollRef);

//   // --- Animation Calculations ---
  
//   // 1. Laptop Scale: Starts small, grows to full size, then shrinks again
//   let scale;
//   if (progress < 0.2) {
//     scale = 0.8 + progress * 5 * 0.2; // Grows from 0.8 to 1.0
//   } else if (progress > 0.8) {
//     scale = 1.0 - (progress - 0.8) * 5 * 0.2; // Shrinks from 1.0 to 0.8
//   } else {
//     scale = 1.0;
//   }

//   // 2. Laptop Rotation: Rotates slightly
//   const rotateY = -15 + progress * 30; // Rotates from -15deg to +15deg

//   // 3. Laptop "Opening" (simulated with rotateX)
//   // Starts at 60deg (closed), opens to 0deg (flat)
//   let rotateX;
//   if (progress < 0.2) {
//     rotateX = 60 - (progress / 0.2) * 60; // Opens from 60deg to 0deg
//   } else {
//     rotateX = 0; // Stays open
//   }

//   // 4. Background Glow Opacity
//   const glowOpacity = progress < 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;


//   return (
//     // This parent container defines the scrollable area.
//     // 500vh means it's 5 times the height of the screen.
//     <div ref={scrollRef} className="relative h-[500vh] bg-black">
      
//       {/* This is the "pinned" element that stays on screen */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
        
//         {/* Animated Visuals (Laptop) */}
//         <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
          
//           {/* Background Glow */}
//           <div 
//             className="absolute w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-cyan-500/30 rounded-full blur-[100px]"
//             style={{ opacity: glowOpacity, transform: `scale(${1 + progress})` }}
//           />

//           {/* The Laptop Icon */}
//           <div 
//             style={{
//               transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
//               transformStyle: 'preserve-3d',
//               transition: 'transform 0.1s linear',
//             }}
//           >
//             {/* Using a placeholder. Replace with a 3D model or image */}
//             <Laptop className="w-64 h-64 md:w-96 md:h-96 text-gray-300" />
//             {/* This would be the "screen" part of the laptop opening */}
//             <div 
//               className="absolute top-[11%] left-[16%] w-[68%] h-[68%] bg-black transition-opacity duration-300"
//               style={{ opacity: progress > 0.15 ? 1 : 0 }} // Screen turns on after "opening"
//             >
//               <div className="flex items-center justify-center h-full">
//                 <p className="text-cyan-400 text-xl font-bold">EonCircular OS</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0 w-full px-8 md:w-auto text-white">
//           <div className="relative h-48 flex items-center">
            
//             {/* Step 1 */}
//             <div className="absolute w-full">
//               <ScrollFeature progress={progress} start={0.05} end={0.30}>
//                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
//                   Built to Last.
//                 </h3>
//                 <p className="text-lg text-gray-300">
//                   Every device undergoes a rigorous, multi-point inspection to ensure it meets our highest standards.
//                 </p>
//               </ScrollFeature>
//             </div>

//             {/* Step 2 */}
//             <div className="absolute w-full">
//               <ScrollFeature progress={progress} start={0.30} end={0.55}>
//                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
//                   Kitemark™ Certified.
//                 </h3>
//                 <p className="text-lg text-gray-300">
//                   We are globally recognized for quality and safety, giving you peace of mind with every purchase.
//                 </p>
//               </ScrollFeature>
//             </div>
            
//             {/* Step 3 */}
//             <div className="absolute w-full">
//               <ScrollFeature progress={progress} start={0.55} end={0.80}>
//                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
//                   Powerful Performance.
//                 </h3>
//                 <p className="text-lg text-gray-300">
//                   Featuring modern components, our laptops are ready for work, study, and creativity.
//                 </p>
//               </ScrollFeature>
//             </div>

//             {/* Step 4 */}
//             <div className="absolute w-full">
//               <ScrollFeature progress={progress} start={0.80} end={1.0}>
//                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
//                   Ready for You.
//                 </h3>
//                 <p className="text-lg text-gray-30Services">
//                   Experience the EonCircular difference. Sustainable, powerful, and affordable.
//                 </p>
//               </ScrollFeature>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

import React, { useRef } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLaptopSVG } from './AnimatedLaptopSVG'; // Import our new SVG component

// Component to handle text fading with AnimatePresence
const ScrollFeatureText = ({ progress, start, end, children }) => {
  const isActive = progress >= start && progress < end;

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={start} // Key is important for AnimatePresence to track
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-left max-w-md w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export const LaptopScrollAnimation = () => {
  const scrollRef = useRef(null);
  const progress = useScrollProgress(scrollRef);

  // --- Animation Calculations ---
  
  // 1. Laptop Scale: Starts small, grows to full size, then shrinks again
  let scale;
  if (progress < 0.2) {
    scale = 0.8 + progress * 5 * 0.2; // Grows from 0.8 to 1.0
  } else if (progress > 0.8) {
    scale = 1.0 - (progress - 0.8) * 5 * 0.2; // Shrinks from 1.0 to 0.8
  } else {
    scale = 1.0;
  }

  // 2. Laptop Rotation: Rotates slightly
  const rotateY = -15 + progress * 30; // Rotates from -15deg to +15deg

  // 3. Laptop "Opening" (simulated with rotateX)
  // Starts at 60deg (closed), opens to 0deg (flat)
  let rotateX;
  if (progress < 0.2) {
    rotateX = 60 - (progress / 0.2) * 60; // Opens from 60deg to 0deg
  } else {
    rotateX = 0; // Stays open
  }

  // 4. Background Glow Opacity and position
  const glowOpacity = progress < 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;
  const glowX = progress * 100 - 50; // Moves from left to right behind the laptop
  const glowY = 0;


  return (
    <div ref={scrollRef} className="relative h-[500vh] bg-black">
      
      {/* This is the "pinned" element that stays on screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Animated Visuals (Laptop and Glow) */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
          
          {/* Background Glow */}
          <motion.div 
            className="absolute w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-gradient-to-br from-cyan-500/50 to-blue-600/50 rounded-full blur-[120px]"
            style={{ 
              opacity: glowOpacity,
              scale: 1 + progress * 0.5, // Grow glow slightly
              x: `${glowX}vw`, // Move glow horizontally
              y: `${glowY}vh`,
             }}
             transition={{ duration: 0.1, ease: "linear" }}
          />

          {/* The Animated Laptop SVG */}
          <AnimatedLaptopSVG progress={progress} scale={scale} rotateX={rotateX} rotateY={rotateY} />
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0 w-full px-8 md:w-auto text-white">
          <div className="relative h-48 flex items-center">
            
            {/* Step 1 */}
            <ScrollFeatureText progress={progress} start={0.05} end={0.30}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Meticulously Renewed.
              </h3>
              <p className="text-lg text-gray-300">
                Every device is carefully selected and undergoes a deep, multi-stage restoration process.
              </p>
            </ScrollFeatureText>
            
            {/* Step 2 */}
            <ScrollFeatureText progress={progress} start={0.30} end={0.55}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                Powered for Tomorrow.
              </h3>
              <p className="text-lg text-gray-300">
                Upgraded with high-performance components, ready to tackle any modern workflow.
              </p>
            </ScrollFeatureText>
            
            {/* Step 3 */}
            <ScrollFeatureText progress={progress} start={0.55} end={0.80}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-4">
                Sustainability in Every Byte.
              </h3>
              <p className="text-lg text-gray-300">
                Extend the lifecycle of technology, reducing e-waste and your carbon footprint.
              </p>
            </ScrollFeatureText>

            {/* Step 4 */}
            <ScrollFeatureText progress={progress} start={0.80} end={1.0}>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                Your Next Device Awaits.
              </h3>
              <p className="text-lg text-gray-300">
                Discover the perfect blend of reliability, performance, and eco-consciousness.
              </p>
            </ScrollFeatureText>

          </div>
        </div>

      </div>
    </div>
  );
};

