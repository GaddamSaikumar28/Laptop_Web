
// import React from 'react';
// import { motion } from 'framer-motion';

// const BrandDisplay = ({ name, slogan, description, logo, image }) => { // Added 'image' prop
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
//       whileHover={{ y: -5 }} // Slight lift on hover
//     >
//       {image && ( // Display laptop image if provided
//         <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
//           <img src={image} alt={`${name} Laptop`} className="object-cover w-full h-full" />
//         </div>
//       )}
//       <div className="p-6 flex-grow">
//         {logo && <img src={logo} alt={`${name} Logo`} className="h-10 mb-4 mx-auto md:mx-0" />}
//         <h3 className="text-2xl font-bold text-blue-800 mb-2 text-center md:text-left">{name}</h3>
//         <p className="text-blue-600 font-semibold mb-3 text-center md:text-left">{slogan}</p>
//         <p className="text-gray-700 text-center md:text-left">{description}</p>
//       </div>
//       <div className="p-6 pt-0 text-center md:text-left">
//         <button className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
//           View {name} Laptops
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default BrandDisplay;

// src/components/laptops/BrandDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BrandDisplay = ({ name, slogan, description, logo, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
    >
      {/* More space for photos */}
      {image && (
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={image} alt={`${name} Laptop`} className="object-cover w-full h-full" />
        </div>
      )}
      
      {/* Increased padding for more space */}
      <div className="p-8 flex-grow">
        {logo && <img src={logo} alt={`${name} Logo`} className="h-10 mb-6" />}
        
        {/* Updated text colors */}
        <h3 className="text-2xl font-bold text-green-700 mb-2">{name}</h3>
        <p className="text-teal-600 font-semibold mb-4">{slogan}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Updated button color */}
      <div className="p-8 pt-0">
        <button className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 group">
          View {name} Laptops
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default BrandDisplay;