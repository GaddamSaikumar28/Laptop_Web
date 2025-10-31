// import React, { useState } from 'react';
// import { Eye, Heart, Zap as ZapIcon, Shield } from 'lucide-react';
// import { FadeIn } from '../common/FadeIn';

// export const CoreValues = () => {
//   const coreValues = [
//     { 
//       icon: Eye, 
//       title: "Vision", 
//       desc: "If we wait for somebody else, it is already too late. Tomorrow belongs to the people and companies prepared to bet it all on red. The wheel is spinning." 
//     },
//     { 
//       icon: Heart, 
//       title: "Commitment", 
//       desc: "Commitment to people, commitment to quality, commitment to outcomes. Commitment is an act, not a word." 
//     },
//     { 
//       icon: ZapIcon, 
//       title: "Courage", 
//       desc: "Courage to spend 6 years building a world-class facility and raising the bar on what is considered 'the best quality used stock in the world'." 
//     },
//     { 
//       icon: Shield, 
//       title: "Integrity", 
//       desc: "Integrity is the essential ingredient that retains your customer. It is about the essence and DNA of a company and does not have an on/off switch." 
//     },
//   ];

//   const [hoveredValue, setHoveredValue] = useState(coreValues[0].title);

//   return (
//     <section className="py-24 bg-black">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
//             Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Core Values</span>
//           </h2>
//         </FadeIn>
        
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
//           {/* Interactive Hub */}
//           <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
//             <div className="absolute inset-0 rounded-full bg-gray-900 border-2 border-gray-800"></div>
//             <div className="absolute inset-4 rounded-full bg-black border border-gray-700"></div>
            
//             {/* Central Content */}
//             <div className="absolute inset-16 md:inset-24 rounded-full bg-gray-900 flex items-center justify-center text-center p-4 border-2 border-blue-500 shadow-xl shadow-blue-500/20">
//               {coreValues.map(value => (
//                 <div 
//                   key={value.title}
//                   className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
//                     hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <value.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
//                   <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{value.title}</h3>
//                 </div>
//               ))}
//             </div>

//             {/* Spoke Buttons */}
//             {coreValues.map((value, index) => {
//               const angle = (index / coreValues.length) * 2 * Math.PI - (Math.PI / 2); // Start at top
//               const x = Math.cos(angle) * 50 + 50; // 50% radius
//               const y = Math.sin(angle) * 50 + 50;
              
//               return (
//                 <button
//                   key={value.title}
//                   className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:scale-110"
//                   style={{ 
//                     top: `calc(${y}% - ${window.innerWidth >= 768 ? '2.5rem' : '2rem'})`, 
//                     left: `calc(${x}% - ${window.innerWidth >= 768 ? '2.5rem' : '2rem'})`,
//                   }}
//                   onMouseEnter={() => setHoveredValue(value.title)}
//                 >
//                   <value.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 transition-colors duration-300" />
//                 </button>
//               );
//             })}
//           </div>
          
//           {/* Description Area */}
//           <div className="relative w-full max-w-md h-48 lg:h-96">
//             {coreValues.map(value => (
//               <div 
//                 key={value.title}
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <FadeIn direction="up">
//                   <h3 className="text-3xl font-bold text-white mb-4">{value.title}</h3>
//                   <p className="text-lg text-gray-300">{value.desc}</p>
//                 </FadeIn>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState } from 'react';
import { Eye, Heart, Zap as ZapIcon, Shield } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';

export const CoreValues = () => {
  const coreValues = [
    { 
      icon: Eye, 
      title: "Vision", 
      desc: "If we wait for somebody else, it is already too late. Tomorrow belongs to the people and companies prepared to bet it all on red. The wheel is spinning." 
    },
    { 
      icon: Heart, 
      title: "Commitment", 
      desc: "Commitment to people, commitment to quality, commitment to outcomes. Commitment is an act, not a word." 
    },
    { 
      icon: ZapIcon, 
      title: "Courage", 
      desc: "Courage to spend 6 years building a world-class facility and raising the bar on what is considered 'the best quality used stock in the world'." 
    },
    { 
      icon: Shield, 
      title: "Integrity", 
      desc: "Integrity is the essential ingredient that retains your customer. It is about the essence and DNA of a company and does not have an on/off switch." 
    },
  ];

  const [hoveredValue, setHoveredValue] = useState(coreValues[0].title);

  return (
    // Section background changed to light gray for contrast
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Text and gradient updated to new palette */}
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 text-gray-900">
            Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Core Values</span>
          </h2>
        </FadeIn>
        
        {/* Increased gap for more breathing room */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          {/* Interactive Hub */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            {/* Circle colors updated */}
            <div className="absolute inset-0 rounded-full bg-gray-200/70 border-2 border-gray-300"></div>
            <div className="absolute inset-4 rounded-full bg-white border border-gray-200"></div>
            
            {/* Central Content colors updated */}
            <div className="absolute inset-16 md:inset-24 rounded-full bg-white flex items-center justify-center text-center p-4 border-2 border-green-500 shadow-xl shadow-green-500/20">
              {coreValues.map(value => (
                <div 
                  key={value.title}
                  // Added scale transition for a smoother 'pop'
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                    hoveredValue === value.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">{value.title}</h3>
                </div>
              ))}
            </div>

            {/* Spoke Buttons */}
            {coreValues.map((value, index) => {
              const angle = (index / coreValues.length) * 2 * Math.PI - (Math.PI / 2); // Start at top
              const x = Math.cos(angle) * 50 + 50; // 50% radius
              const y = Math.sin(angle) * 50 + 50;
              
              return (
                // Improved positioning: Wrapper div handles position, button handles centering
                <div
                  key={value.title}
                  className="absolute"
                  style={{ top: `${y}%`, left: `${x}%` }}
                >
                  <button
                    className="w-16 h-16 -translate-x-8 -translate-y-8 md:w-20 md:h-20 md:-translate-x-10 md:-translate-y-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group transition-all duration-300 hover:bg-green-500 hover:border-green-400 hover:scale-110"
                    onMouseEnter={() => setHoveredValue(value.title)}
                  >
                    {/* Icon color updated, with 'group-hover' state */}
                    <value.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-500 transition-colors duration-300 group-hover:text-white" />
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Description Area */}
          <div className="relative w-full max-w-md h-48 lg:h-96">
            {coreValues.map(value => (
              <div 
                key={value.title}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Text colors updated */}
                <FadeIn direction="up">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600">{value.desc}</p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};