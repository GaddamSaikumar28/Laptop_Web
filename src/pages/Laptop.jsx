// // // // import React, { useRef } from 'react';
// // // // import { useScrollProgress } from '../../hooks/useScrollProgress';
// // // // import { Laptop } from 'lucide-react';

// // // // // This component defines the text that fades in and out
// // // // const ScrollFeature = ({ children, progress, start, end }) => {
// // // //   // Calculate opacity based on scroll progress
// // // //   let opacity = 0;
// // // //   const range = end - start;
// // // //   const progressInRange = (progress - start) / range;

// // // //   if (progressInRange < 0) {
// // // //     opacity = 0;
// // // //   } else if (progressInRange < 0.25) { // Fade in
// // // //     opacity = progressInRange * 4;
// // // //   } else if (progressInRange < 0.75) { // Hold
// // // //     opacity = 1;
// // // //   } else if (progressInRange < 1) { // Fade out
// // // //     opacity = (1 - progressInRange) * 4;
// // // //   }

// // // //   opacity = Math.max(0, Math.min(1, opacity));

// // // //   return (
// // // //     <div className="text-left max-w-md" style={{ opacity }}>
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // };

// // // // export const LaptopScrollAnimation = () => {
// // // //   // This ref is for the *entire scrollable section* (which is 5x viewport height)
// // // //   const scrollRef = useRef(null);
// // // //   // Get the progress (0-1) of scrolling through that section
// // // //   const progress = useScrollProgress(scrollRef);

// // // //   // --- Animation Calculations ---
  
// // // //   // 1. Laptop Scale: Starts small, grows to full size, then shrinks again
// // // //   let scale;
// // // //   if (progress < 0.2) {
// // // //     scale = 0.8 + progress * 5 * 0.2; // Grows from 0.8 to 1.0
// // // //   } else if (progress > 0.8) {
// // // //     scale = 1.0 - (progress - 0.8) * 5 * 0.2; // Shrinks from 1.0 to 0.8
// // // //   } else {
// // // //     scale = 1.0;
// // // //   }

// // // //   // 2. Laptop Rotation: Rotates slightly
// // // //   const rotateY = -15 + progress * 30; // Rotates from -15deg to +15deg

// // // //   // 3. Laptop "Opening" (simulated with rotateX)
// // // //   // Starts at 60deg (closed), opens to 0deg (flat)
// // // //   let rotateX;
// // // //   if (progress < 0.2) {
// // // //     rotateX = 60 - (progress / 0.2) * 60; // Opens from 60deg to 0deg
// // // //   } else {
// // // //     rotateX = 0; // Stays open
// // // //   }

// // // //   // 4. Background Glow Opacity
// // // //   const glowOpacity = progress < 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;


// // // //   return (
// // // //     // This parent container defines the scrollable area.
// // // //     // 500vh means it's 5 times the height of the screen.
// // // //     <div ref={scrollRef} className="relative h-[500vh] bg-black">
      
// // // //       {/* This is the "pinned" element that stays on screen */}
// // // //       <div className="sticky top-0 h-screen w-full overflow-hidden">
        
// // // //         {/* Animated Visuals (Laptop) */}
// // // //         <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
          
// // // //           {/* Background Glow */}
// // // //           <div 
// // // //             className="absolute w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-cyan-500/30 rounded-full blur-[100px]"
// // // //             style={{ opacity: glowOpacity, transform: `scale(${1 + progress})` }}
// // // //           />

// // // //           {/* The Laptop Icon */}
// // // //           <div 
// // // //             style={{
// // // //               transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
// // // //               transformStyle: 'preserve-3d',
// // // //               transition: 'transform 0.1s linear',
// // // //             }}
// // // //           >
// // // //             {/* Using a placeholder. Replace with a 3D model or image */}
// // // //             <Laptop className="w-64 h-64 md:w-96 md:h-96 text-gray-300" />
// // // //             {/* This would be the "screen" part of the laptop opening */}
// // // //             <div 
// // // //               className="absolute top-[11%] left-[16%] w-[68%] h-[68%] bg-black transition-opacity duration-300"
// // // //               style={{ opacity: progress > 0.15 ? 1 : 0 }} // Screen turns on after "opening"
// // // //             >
// // // //               <div className="flex items-center justify-center h-full">
// // // //                 <p className="text-cyan-400 text-xl font-bold">EonCircular OS</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Text Content */}
// // // //         <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0 w-full px-8 md:w-auto text-white">
// // // //           <div className="relative h-48 flex items-center">
            
// // // //             {/* Step 1 */}
// // // //             <div className="absolute w-full">
// // // //               <ScrollFeature progress={progress} start={0.05} end={0.30}>
// // // //                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
// // // //                   Built to Last.
// // // //                 </h3>
// // // //                 <p className="text-lg text-gray-300">
// // // //                   Every device undergoes a rigorous, multi-point inspection to ensure it meets our highest standards.
// // // //                 </p>
// // // //               </ScrollFeature>
// // // //             </div>

// // // //             {/* Step 2 */}
// // // //             <div className="absolute w-full">
// // // //               <ScrollFeature progress={progress} start={0.30} end={0.55}>
// // // //                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
// // // //                   Kitemark™ Certified.
// // // //                 </h3>
// // // //                 <p className="text-lg text-gray-300">
// // // //                   We are globally recognized for quality and safety, giving you peace of mind with every purchase.
// // // //                 </p>
// // // //               </ScrollFeature>
// // // //             </div>
            
// // // //             {/* Step 3 */}
// // // //             <div className="absolute w-full">
// // // //               <ScrollFeature progress={progress} start={0.55} end={0.80}>
// // // //                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
// // // //                   Powerful Performance.
// // // //                 </h3>
// // // //                 <p className="text-lg text-gray-300">
// // // //                   Featuring modern components, our laptops are ready for work, study, and creativity.
// // // //                 </p>
// // // //               </ScrollFeature>
// // // //             </div>

// // // //             {/* Step 4 */}
// // // //             <div className="absolute w-full">
// // // //               <ScrollFeature progress={progress} start={0.80} end={1.0}>
// // // //                 <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
// // // //                   Ready for You.
// // // //                 </h3>
// // // //                 <p className="text-lg text-gray-300">
// // // //                   Experience the EonCircular difference. Sustainable, powerful, and affordable.
// // // //                 </p>
// // // //               </ScrollFeature>
// // // //             </div>

// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // import React from 'react';
// // // import { FadeIn } from '../components/common/FadeIn.jsx';
// // // import { CallToAction } from '../components/common/CallToAction.jsx';
// // // import { LaptopScrollAnimation } from '../components/laptops/LaptopScrollAnimation.jsx';
// // // import { CheckCircle, Zap, Cpu } from 'lucide-react';

// // // // Re-using the brand component structure from our old 'Shop' idea,
// // // // but now it's just for showcasing, not for shopping.
// // // const BrandHighlight = ({ brand, description, link }) => (
// // //   <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl border border-gray-700 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1">
// // //     <h3 className="text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>{brand}</h3>
// // //     <p className="text-gray-300 mb-6 flex-grow">{description}</p>
// // //     <button className="font-semibold text-cyan-300 transition-all duration-300">
// // //       Learn More
// // //     </button>
// // //   </div>
// // // );

// // // // New component for the "Our Process" section
// // // const ProcessStep = ({ icon, title, text }) => (
// // //   <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-500/50">
// // //     <div className="flex justify-center mb-4">
// // //       <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
// // //         {icon}
// // //       </div>
// // //     </div>
// // //     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
// // //     <p className="text-gray-400">{text}</p>
// // //   </div>
// // // );

// // // export const Laptops = () => {
// // //   return (
// // //     <div className="bg-black text-gray-200">
// // //       {/* Hero Section */}
// // //       <div className="pt-48 pb-32 relative overflow-hidden" style={{ backgroundImage: "url('https://placehold.co/1920x800/0a0a0a/1f1f1f?text=Abstract+Tech+Background&font=inter')" }}>
// // //         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
// // //           <FadeIn>
// // //             <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
// // //               The Future of
// // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">
// // //                 Refurbished Tech
// // //               </span>
// // //             </h1>
// // //             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
// // //               We don't just refurbish. We re-engineer for a new life, combining sustainability with elite performance.
// // //             </p>
// // //           </FadeIn>
// // //         </div>
// // //       </div>

// // //       {/* Scrollytelling Component */}
// // //       <LaptopScrollAnimation />

// // //       {/* Our Process Section */}
// // //       <div className="py-24 bg-gray-900/50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <FadeIn>
// // //             <h2 className="text-4xl font-bold text-center text-white mb-4">Our Unmatched Process</h2>
// // //             <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
// // //               This is what sets our devices apart. A meticulous journey from used to renewed.
// // //             </p>
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //               <ProcessStep 
// // //                 icon={<Cpu className="w-8 h-8 text-black" />}
// // //                 title="1. Deep Diagnostics"
// // //                 text="Every component, from the CPU to the smallest port, is tested with enterprise-grade software."
// // //               />
// // //               <ProcessStep 
// // //                 icon={<Zap className="w-8 h-8 text-black" />}
// // //                 title="2. Component Upgrades"
// // //                 text="We replace and upgrade key parts, like installing new NVMe SSDs and high-speed RAM."
// // //               />
// // //               <ProcessStep 
// // //                 icon={<CheckCircle className="w-8 h-8 text-black" />}
// // //                 title="3. BSI Kitemark™"
// // //                 text="A final, rigorous certification ensures your device is safe, secure, and performs like new."
// // //               />
// // //             </div>
// // //           </FadeIn>
// // //         </div>
// // //       </div>

// // //       {/* Brand Highlights Section */}
// // //       <div className="py-24">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <FadeIn>
// // //             <h2 className="text-4xl font-bold text-center text-white mb-12">Featuring the Brands You Trust</h2>
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //               <BrandHighlight
// // //                 brand="HP"
// // //                 description="Reliable performance and robust security from the EliteBook series."
// // //                 link="/laptops/hp"
// // //               />
// // //               <BrandHighlight
// // //                 brand="DELL"
// // //                 description="Innovative design meets powerful Latitude and XPS performance."
// // //                 link="/laptops/dell"
// // //               />
// // //               <BrandHighlight
// // //                 brand="LENOVO"
// // //                 description="Legendary ThinkPad reliability and cutting-edge Yoga flexibility."
// // //                 link="/laptops/lenovo"
// // //               />
// // //             </div>
// // //           </FadeIn>
// // //         </div>
// // //       </div>

// // //       {/* CTA Section */}
// // //       <CallToAction 
// // //         title="Interested in a Partnership?"
// // //         text="We work with schools, businesses, and organizations to provide high-quality, sustainable tech solutions. Let's talk."
// // //         buttonText="Contact Us"
// // //         buttonLink="/contact"
// // //       />
// // //     </div>
// // //   );
// // // };
// // import React from 'react';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { CallToAction } from '../components/common/CallToAction';
// // import { LaptopScrollAnimation } from '../components/laptops/LaptopScrollAnimation';
// // import { BrandDisplay } from '../components/laptops/BrandDisplay'; // New BrandDisplay component
// // import { CheckCircle, Zap, Cpu } from 'lucide-react';

// // // New component for the "Our Process" section
// // const ProcessStep = ({ icon, title, text }) => (
// //   <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-500/50">
// //     <div className="flex justify-center mb-4">
// //       <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
// //         {icon}
// //       </div>
// //     </div>
// //     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
// //     <p className="text-gray-400">{text}</p>
// //   </div>
// // );

// // export const Laptops = () => {
// //   return (
// //     <div className="bg-black text-gray-200">
// //       {/* Hero Section */}
// //       <div className="pt-48 pb-32 relative overflow-hidden" style={{ backgroundImage: "url('https://placehold.co/1920x800/0a0a0a/1f1f1f?text=Abstract+Tech+Background&font=inter')" }}>
// //         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
// //           <FadeIn>
// //             <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
// //               The Future of
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">
// //                 Refurbished Tech
// //               </span>
// //             </h1>
// //             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
// //               We don't just refurbish. We re-engineer for a new life, combining sustainability with elite performance.
// //             </p>
// //           </FadeIn>
// //         </div>
// //       </div>

// //       {/* Scrollytelling Component */}
// //       <LaptopScrollAnimation />

// //       {/* Our Process Section */}
// //       <div className="py-24 bg-gray-900/50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <FadeIn>
// //             <h2 className="text-4xl font-bold text-center text-white mb-4">Our Unmatched Process</h2>
// //             <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
// //               This is what sets our devices apart. A meticulous journey from used to renewed.
// //             </p>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //               <ProcessStep 
// //                 icon={<Cpu className="w-8 h-8 text-black" />}
// //                 title="1. Deep Diagnostics"
// //                 text="Every component, from the CPU to the smallest port, is tested with enterprise-grade software."
// //               />
// //               <ProcessStep 
// //                 icon={<Zap className="w-8 h-8 text-black" />}
// //                 title="2. Component Upgrades"
// //                 text="We replace and upgrade key parts, like installing new NVMe SSDs and high-speed RAM."
// //               />
// //               <ProcessStep 
// //                 icon={<CheckCircle className="w-8 h-8 text-black" />}
// //                 title="3. BSI Kitemark™"
// //                 text="A final, rigorous certification ensures your device is safe, secure, and performs like new."
// //               />
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </div>

// //       {/* Brand Highlights Section (Updated) */}
// //       <div className="py-24">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
// //           <FadeIn>
// //             <h2 className="text-4xl font-bold text-center text-white mb-12">Showcasing Premier Brands</h2>
// //             <BrandDisplay
// //               brandName="HP"
// //               slogan="Engineered for Performance. Refurbished for Life."
// //               description="Discover our range of meticulously restored HP laptops, offering robust performance, enterprise-grade security, and sleek designs. Perfect for professionals and students seeking reliability and value."
// //               imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_Logo_2012.svg" // Example HP Logo
// //               gradientFrom="#007ACC" // HP Blue
// //               gradientTo="#004A77"
// //               link="/laptops/hp"
// //             />
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <BrandDisplay
// //               brandName="DELL"
// //               slogan="Innovation Sustained. Power Unleashed."
// //               description="Experience the renowned innovation and dependable power of Dell. Our refurbished Dell laptops are upgraded to deliver exceptional speeds and responsiveness for every task."
// //               imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/46/Dell_Logo.svg" // Example Dell Logo
// //               gradientFrom="#007A2A" // Dell Green
// //               gradientTo="#004E1E"
// //               link="/laptops/dell"
// //             />
// //           </FadeIn>
// //           <FadeIn delay={0.4}>
// //             <BrandDisplay
// //               brandName="LENOVO"
// //               slogan="Reliability Redefined. Productivity Enhanced."
// //               description="From the legendary ThinkPad series to versatile Yoga models, our refurbished Lenovo laptops offer unparalleled durability, ergonomic design, and powerful features for seamless productivity."
// //               imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/ec/Lenovo_logo_2015.svg" // Example Lenovo Logo
// //               gradientFrom="#CC0000" // Lenovo Red
// //               gradientTo="#800000"
// //               link="/laptops/lenovo"
// //             />
// //           </FadeIn>
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <CallToAction 
// //         title="Ready to Elevate Your Tech?"
// //         text="Explore our full range of certified refurbished laptops and find the perfect device that aligns with your values and performance needs."
// //         buttonText="View All Devices"
// //         buttonLink="/laptops"
// //       />
// //     </div>
// //   );
// // };

// // src/pages/Laptop.jsx
// import React from 'react';
// import { MonitorCheck, Leaf, DollarSign } from 'lucide-react'; // Example icons

// import { FadeIn } from '../components/common/FadeIn';
// import { CallToAction } from '../components/common/CallToAction';
// import BrandDisplay from '../components/laptops/BrandDisplay';
// import LaptopImagePopAnimation from '../components/laptops/LaptopImagePopAnimation';
// const brandData = [
//   {
//     name: "HP",
//     slogan: "Innovation for Every Journey",
//     description: "HP laptops offer reliable performance and stylish designs, perfect for both professional and personal use. Experience cutting-edge technology and robust build quality.",
//     logo: "/path/to/hp-logo.png", // Placeholder: Replace with actual path
//     image: "/path/to/hp-laptop-image.png" // Placeholder: Add a laptop image for the brand
//   },
//   {
//     name: "Dell",
//     slogan: "Power Your Potential",
//     description: "Dell delivers powerful and durable machines, trusted by businesses and creators worldwide. Discover unparalleled productivity and immersive computing.",
//     logo: "/path/to/dell-logo.png", // Placeholder: Replace with actual path
//     image: "/path/to/dell-laptop-image.png" // Placeholder: Add a laptop image for the brand
//   },
//   {
//     name: "Lenovo",
//     slogan: "Smarter Technology for All",
//     description: "Lenovo combines sleek design with robust functionality, providing versatile laptops for diverse needs. Engineered for efficiency and user comfort.",
//     logo: "/path/to/lenovo-logo.png", // Placeholder: Replace with actual path
//     image: "/path/to/lenovo-laptop-image.png" // Placeholder: Add a laptop image for the brand
//   },
//   // Add more brands as needed
// ];

// const Laptop = () => {
//   return (
//     <div className="text-gray-900 bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6">
//         <div className="absolute inset-0 z-0 opacity-20">
//           {/* Background pattern or subtle animation can go here */}
//           <div className="bg-pattern-dots absolute inset-0"></div>
//         </div>
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <FadeIn>
//             <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//               Discover Your Perfect Refurbished Laptop
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-lg md:text-xl mb-8 opacity-90">
//               High-performance, eco-friendly, and EonCircular Certified quality you can trust.
//             </p>
//           </FadeIn>
//           <FadeIn delay={0.4}>
//             <a
//               href="/laptops/shop" // Link to actual shop page
//               className="inline-block bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
//             >
//               Explore Our Collection
//             </a>
//           </FadeIn>
//         </div>
//       </section>

//       {/* EonCircular Certified Standard Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
//               The EonCircular Certified Standard
//             </h2>
//           </FadeIn>
//           <div className="grid md:grid-cols-3 gap-10">
//             <FadeIn delay={0.1}>
//               <div className="text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <MonitorCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3">Rigorous Quality Checks</h3>
//                 <p className="text-gray-700">
//                   Every laptop undergoes a comprehensive 30-point inspection and restoration process to ensure peak performance.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <Leaf className="w-12 h-12 text-teal-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3">Sustainable Choice</h3>
//                 <p className="text-gray-700">
//                   Choose refurbished and significantly reduce electronic waste, contributing to a healthier planet.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.3}>
//               <div className="text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <DollarSign className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3">Unbeatable Value</h3>
//                 <p className="text-gray-700">
//                   Get premium features and performance at a fraction of the cost of new, without compromise.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* NEW: Dynamic Laptop Showcase with Image Pop Animation */}
//       <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-800">
//               See Our Quality in Action
//             </h2>
//           </FadeIn>
//           {/* This is where the new animation component will live */}
//           <LaptopImagePopAnimation />
//         </div>
//       </section>

//       {/* Featured Brands Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
//               Explore Top Brands
//             </h2>
//           </FadeIn>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {brandData.map((brand, index) => (
//               <FadeIn key={index} delay={index * 0.1}>
//                 <BrandDisplay
//                   name={brand.name}
//                   slogan={brand.slogan}
//                   description={brand.description}
//                   logo={brand.logo}
//                   image={brand.image} // Pass the new image prop
//                 />
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section (Existing component) */}
//       <section className="py-16 md:py-24 bg-blue-800 text-white">
//         <CallToAction
//           title="Ready to Upgrade Your Tech?"
//           description="Find the perfect refurbished laptop that fits your needs and budget, backed by our EonCircular guarantee."
//           buttonText="Shop All Laptops"
//           buttonLink="/laptops/shop" // Ensure this links to your actual shop
//         />
//       </section>
//     </div>
//   );
// };

// export default Laptop;

// src/pages/Laptop.jsx
import React from 'react';
import { MonitorCheck, Leaf, DollarSign } from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn'; // Corrected path
// import { BrandDisplay } from '../components/BrandDisplay'; // Using your original component
import { CallToAction } from '../components/common/CallToAction'; // Corrected path
import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection'; // NEW
import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll'; // NEW
import BrandDisplay from '../components/laptops/BrandDisplay';
import { FlyerSection } from '../components/laptops/FlyerSection';
// This data structure matches your original BrandDisplay.jsx component's props
const brandData = [
  {
    brandName: "HP",
    slogan: "Performance. Reimagined.",
    description: "Experience robust performance and sleek design with our range of BSI Certified HP laptops, perfect for business and creativity.",
    imageUrl: "https://placehold.co/1000x600/004080/FFFFFF?text=HP+Laptop&font=inter",
    gradientFrom: "#0078D4", // HP Blue
    gradientTo: "#004C9A",
    link: "/laptops/hp"
  },
  {
    brandName: "DELL",
    slogan: "Innovation That Inspires.",
    description: "Discover reliable and powerful Dell laptops, from versatile Inspiron models to high-performance XPS, all rigorously tested.",
    imageUrl: "https://placehold.co/1000x600/0080C0/FFFFFF?text=Dell+Laptop&font=inter",
    gradientFrom: "#0076CE", // Dell Blue
    gradientTo: "#004E8B",
    link: "/laptops/dell"
  },
  {
    brandName: "LENOVO",
    slogan: "Smarter Technology for All.",
    description: "From the iconic ThinkPad to the flexible Yoga, our refurbished Lenovo laptops offer legendary reliability and cutting-edge features.",
    imageUrl: "https://placehold.co/1000x600/E04040/FFFFFF?text=Lenovo+Laptop&font=inter",
    gradientFrom: "#E2231A", // Lenovo Red
    gradientTo: "#A01B14",
    link: "/laptops/lenovo"
  }
];

export const Laptop = () => { // Renamed to Laptops to match AppRouter.jsx
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section (Already dark, looks good) */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://placehold.co/1920x1080/000000/FFFFFF?text=Subtle+Pattern&font=inter')] bg-repeat"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Discover Your Perfect Refurbished Laptop
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              High-performance, eco-friendly, and EonCircular Certified quality you can trust.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href="#explore" // Changed to an anchor link
              className="inline-block bg-white text-blue-800 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Explore Our Quality
            </a>
          </FadeIn>
        </div>
      </section>

      {/* EonCircular Certified Standard Section (Dark Theme) */}
      <section id="explore" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              The EonCircular Certified Standard
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn delay={0.1}>
              <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
                <MonitorCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Rigorous Quality Checks</h3>
                <p className="text-gray-300">
                  Every laptop undergoes a comprehensive 30-point inspection and restoration process to ensure peak performance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
                <Leaf className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Choice</h3>
                <p className="text-gray-300">
                  Choose refurbished and significantly reduce electronic waste, contributing to a healthier planet.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
                <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Unbeatable Value</h3>
                <p className="text-gray-300">
                  Get premium features and performance at a fraction of the cost of new, without compromise.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NEW: Video Section */}
      <section className="py-16 md:py-24 bg-black">
        <LaptopVideoSection />
      </section>
      
      {/* NEW: Continuous Laptop Scroll (Design Section) */}
      <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              See Our Quality in Action
            </h2>
          </FadeIn>
          <ContinuousLaptopScroll />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <FlyerSection />
        </div>
      </section>

      {/* Featured Brands Section (Dark Theme) */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Explore Top Brands
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-12">
            {brandData.map((brand, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <BrandDisplay
                  brandName={brand.brandName}
                  slogan={brand.slogan}
                  description={brand.description}
                  imageUrl={brand.imageUrl}
                  gradientFrom={brand.gradientFrom}
                  gradientTo={brand.gradientTo}
                  link={brand.link}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section (Existing component - already dark) */}
      <CallToAction
        title="Ready to Upgrade Your Tech?"
        text="Find the perfect refurbished laptop that fits your needs and budget, backed by our EonCircular guarantee."
        buttonText="Shop All Laptops"
        buttonLink="/contact" // Changed to contact, as shop isn't built
      />
    </div>
  );
};

 export default Laptop; 
// // Ensure your file exports Laptops