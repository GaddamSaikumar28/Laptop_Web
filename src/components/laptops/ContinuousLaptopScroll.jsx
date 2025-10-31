// // src/components/laptops/ContinuousLaptopScroll.jsx
// import React from 'react';

// // --- Add this to your main CSS file (e.g., index.css) or here in a <style> tag ---
// // This defines the scrolling animation.
// const marqueeStyles = `
//   @keyframes scroll-x {
//     from {
//       transform: translateX(0);
//     }
//     to {
//       transform: translateX(-100%);
//     }
//   }
//   .animate-marquee {
//     animation: scroll-x 40s linear infinite;
//   }
//   .animate-marquee-reverse {
//     animation: scroll-x 40s linear infinite reverse;
//   }
// `;

// // Dummy images. Replace with your actual laptop image paths/placeholders.
// const laptopsRow1 = [
//   "https://placehold.co/600x400/333333/555555?text=Laptop+A&font=inter",
//   "https://placehold.co/600x400/333333/555555?text=Laptop+B&font=inter",
//   "https://placehold.co/600x400/333333/555555?text=Laptop+C&font=inter",
//   "https://placehold.co/600x400/333333/555555?text=Laptop+D&font=inter",
//   "https://placehold.co/600x400/333333/555555?text=Laptop+E&font=inter",
//   "https://placehold.co/600x400/333333/555555?text=Laptop+F&font=inter",
// ];

// const laptopsRow2 = [
//   "https://placehold.co/600x400/444444/666666?text=Laptop+G&font=inter",
//   "https://placehold.co/600x400/444444/666666?text=Laptop+H&font=inter",
//   "https://placehold.co/600x400/444444/666666?text=Laptop+I&font=inter",
//   "https://placehold.co/600x400/444444/666666?text=Laptop+J&font=inter",
//   "https://placehold.co/600x400/444444/666666?text=Laptop+K&font=inter",
//   "https://placehold.co/600x400/444444/666666?text=Laptop+L&font=inter",
// ];

// // Helper component for a single image
// const LaptopImage = ({ src }) => (
//   <div className="w-64 md:w-80 flex-shrink-0 mx-4">
//     <img 
//       src={src} 
//       alt="Refurbished laptop" 
//       className="w-full rounded-lg shadow-lg object-cover aspect-video border-2 border-gray-700" 
//     />
//   </div>
// );

// // Helper component for a single scrolling row
// // Renders the list twice for a seamless loop
// const ScrollRow = ({ images, reverse = false }) => (
//   <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
//     <div className="flex">
//       {images.map((src, i) => <LaptopImage key={`a-${i}`} src={src} />)}
//     </div>
//     <div className="flex">
//       {images.map((src, i) => <LaptopImage key={`b-${i}`} src={src} />)}
//     </div>
//   </div>
// );

// export const ContinuousLaptopScroll = () => {
//   return (
//     <div className="relative w-full py-12">
//       <style>{marqueeStyles}</style>
      
//       {/* Background Wavy Line (from your wireframe) */}
//       <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
//         <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M-100 150 C 200 50, 400 250, 700 150 S 1000 50, 1200 150 S 1500 250, 1800 150" stroke="url(#wave-gradient)" strokeWidth="4" />
//           <defs>
//             <linearGradient id="wave-gradient">
//               <stop offset="0%" stopColor="#06B6D4" /> {/* cyan-500 */}
//               <stop offset="100%" stopColor="#3B82F6" /> {/* blue-500 */}
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Scroller Row 1 */}
//       <div className="w-full overflow-hidden mb-8 z-10 relative">
//         <ScrollRow images={laptopsRow1} />
//       </div>
      
//       {/* Scroller Row 2 (Reversed) */}
//       <div className="w-full overflow-hidden z-10 relative">
//         <ScrollRow images={laptopsRow2} reverse={true} />
//       </div>
//     </div>
//   );
// };

// src/components/laptops/ContinuousLaptopScroll.jsx
import React from 'react';

const marqueeStyles = `
  @keyframes scroll-x {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: scroll-x 40s linear infinite;
  }
  .animate-marquee-reverse {
    animation: scroll-x 40s linear infinite reverse;
  }
`;

// Updated light-theme placeholders
const laptopsRow1 = [
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+A&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+B&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+C&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+D&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+E&font=inter",
];
const laptopsRow2 = [
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+F&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+G&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+H&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+I&font=inter",
  "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+J&font=inter",
];

// Reusable component for the laptop images
const LaptopImage = ({ src }) => (
  <img 
    src={src} 
    alt="Refurbished laptop" 
    className="w-[400px] h-auto object-cover rounded-lg shadow-md mx-4 border border-gray-200"
  />
);

const Marquee = ({ images, reverse = false }) => (
  <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
    <div className="flex">
      {images.map((src, i) => <LaptopImage key={`a-${i}`} src={src} />)}
    </div>
    <div className="flex" aria-hidden="true">
      {images.map((src, i) => <LaptopImage key={`b-${i}`} src={src} />)}
    </div>
  </div>
);

export const ContinuousLaptopScroll = () => {
  return (
    <div className="relative w-full py-12">
      <style>{marqueeStyles}</style>
      
      {/* Background Wavy Line - updated colors and opacity */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
        <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C 200 50, 400 250, 700 150 S 1000 50, 1200 150 S 1500 250, 1800 150" stroke="url(#wave-gradient)" strokeWidth="4" />
          <defs>
            {/* Updated green/teal gradient */}
            <linearGradient id="wave-gradient">
              <stop offset="0%" stopColor="#10B981" /> {/* emerald-500 */}
              <stop offset="100%" stopColor="#0D9488" /> {/* teal-600 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 space-y-8">
        <Marquee images={laptopsRow1} />
        <Marquee images={laptopsRow2} reverse={true} />
      </div>
    </div>
  );
};