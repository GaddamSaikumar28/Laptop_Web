// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../common/FadeIn';

// export const BrandDisplay = ({ brandName, slogan, imageUrl, gradientFrom, gradientTo, description, link }) => {
//   return (
//     <motion.div
//       className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out"
//       style={{
//         background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
//         minHeight: '400px', // Ensure consistent height
//       }}
//       whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//     >
//       {/* Background Image/Pattern */}
//       <div 
//         className="absolute inset-0 opacity-20" 
//         style={{ 
//           backgroundImage: `url(${imageUrl})`, 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           filter: 'grayscale(100%) blur(5px)',
//           mixBlendMode: 'luminosity'
//         }}
//       />
      
//       {/* Content */}
//       <div className="relative z-10 text-center md:text-left text-white max-w-md md:mr-10 mb-8 md:mb-0">
//         <FadeIn y={-20} delay={0.2}>
//           <h2 className="text-6xl lg:text-8xl font-black mb-4 uppercase leading-none">
//             {brandName}
//           </h2>
//         </FadeIn>
//         <FadeIn y={-20} delay={0.4}>
//           <p className="text-xl md:text-2xl font-light mb-6">
//             {slogan}
//           </p>
//         </FadeIn>
//         <FadeIn y={-20} delay={0.6}>
//           <p className="text-md text-gray-200 mb-8">
//             {description}
//           </p>
//         </FadeIn>
//         <FadeIn y={-20} delay={0.8}>
//           <Link 
//             to={link} 
//             className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg 
//                        hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
//           >
//             Explore {brandName} Laptops
//           </Link>
//         </FadeIn>
//       </div>

//       {/* Placeholder laptop image if needed, or rely solely on text and background */}
//       {/* <div className="relative z-10 flex-shrink-0">
//         <img src={imageUrl} alt={`${brandName} Laptop`} className="w-96 h-auto object-contain" />
//       </div> */}
//     </motion.div>
//   );
// };

// src/components/BrandDisplay.jsx (Example modification)
import React from 'react';
import { motion } from 'framer-motion';

const BrandDisplay = ({ name, slogan, description, logo, image }) => { // Added 'image' prop
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }} // Slight lift on hover
    >
      {image && ( // Display laptop image if provided
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={`${name} Laptop`} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6 flex-grow">
        {logo && <img src={logo} alt={`${name} Logo`} className="h-10 mb-4 mx-auto md:mx-0" />}
        <h3 className="text-2xl font-bold text-blue-800 mb-2 text-center md:text-left">{name}</h3>
        <p className="text-blue-600 font-semibold mb-3 text-center md:text-left">{slogan}</p>
        <p className="text-gray-700 text-center md:text-left">{description}</p>
      </div>
      <div className="p-6 pt-0 text-center md:text-left">
        <button className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
          View {name} Laptops
        </button>
      </div>
    </motion.div>
  );
};

export default BrandDisplay;