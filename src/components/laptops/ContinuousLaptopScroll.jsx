
// import React from 'react';

// const marqueeStyles = `
//   @keyframes scroll-x {
//     from { transform: translateX(0); }
//     to { transform: translateX(-100%); }
//   }
//   .animate-marquee {
//     animation: scroll-x 40s linear infinite;
//   }
//   .animate-marquee-reverse {
//     animation: scroll-x 40s linear infinite reverse;
//   }
// `;

// // Updated light-theme placeholders
// const laptopsRow1 = [
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+A&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+B&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+C&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+D&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+E&font=inter",
// ];
// const laptopsRow2 = [
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+F&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+G&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+H&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+I&font=inter",
//   "https://placehold.co/600x400/e0e0e0/999999?text=Laptop+J&font=inter",
// ];

// // Reusable component for the laptop images
// const LaptopImage = ({ src }) => (
//   <img 
//     src={src} 
//     alt="Refurbished laptop" 
//     className="w-[400px] h-auto object-cover rounded-lg shadow-md mx-4 border border-gray-200"
//   />
// );

// const Marquee = ({ images, reverse = false }) => (
//   <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
//     <div className="flex">
//       {images.map((src, i) => <LaptopImage key={`a-${i}`} src={src} />)}
//     </div>
//     <div className="flex" aria-hidden="true">
//       {images.map((src, i) => <LaptopImage key={`b-${i}`} src={src} />)}
//     </div>
//   </div>
// );

// export const ContinuousLaptopScroll = () => {
//   return (
//     <div className="relative w-full py-12">
//       <style>{marqueeStyles}</style>
      
//       {/* Background Wavy Line - updated colors and opacity */}
//       <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
//         <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M-100 150 C 200 50, 400 250, 700 150 S 1000 50, 1200 150 S 1500 250, 1800 150" stroke="url(#wave-gradient)" strokeWidth="4" />
//           <defs>
//             {/* Updated green/teal gradient */}
//             <linearGradient id="wave-gradient">
//               <stop offset="0%" stopColor="#10B981" /> {/* emerald-500 */}
//               <stop offset="100%" stopColor="#0D9488" /> {/* teal-600 */}
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Scrolling Content */}
//       <div className="relative z-10 space-y-8">
//         <Marquee images={laptopsRow1} />
//         <Marquee images={laptopsRow2} reverse={true} />
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { Edit } from 'lucide-react'; // Import Edit icon

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
      {images.map((img) => <LaptopImage key={`a-${img.id}`} src={img.image_url} />)}
    </div>
    <div className="flex" aria-hidden="true">
      {images.map((img) => <LaptopImage key={`b-${img.id}`} src={img.image_url} />)}
    </div>
  </div>
);

export const ContinuousLaptopScroll = ({ data, isAdmin, onListEdit }) => {
  return (
    <div className="relative w-full py-12">
      <style>{marqueeStyles}</style>
      
      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          <button
            onClick={() => onListEdit('scroll_section_row1')}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
          >
            <Edit size={14} /> Edit Row 1
          </button>
          <button
            onClick={() => onListEdit('scroll_section_row2')}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
          >
            <Edit size={14} /> Edit Row 2
          </button>
        </div>
      )}
      
      {/* ... (Background Wavy Line remains the same) ... */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
        <svg width="100%" height="300" viewBox="0 0 1400 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C 200 50, 400 250, 700 150 S 1000 50, 1200 150 S 1500 250, 1800 150" stroke="url(#wave-gradient)" strokeWidth="4" />
          <defs>
            <linearGradient id="wave-gradient">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 space-y-8">
        <Marquee images={data.row1_images} />
        <Marquee images={data.row2_images} reverse={true} />
      </div>
    </div>
  );
};