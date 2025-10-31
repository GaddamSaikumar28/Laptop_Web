// import React from 'react';
// import { FadeIn } from '../common/FadeIn';

// export const Timeline = () => {
//   const timelineEvents = [
//     { year: 1992, title: "Our Foundation", desc: "We began our journey in the business of buying and supplying used IT equipment to every corner of the globe." },
//     { year: 2015, title: "A New Focus", desc: "We decided to become the world's largest and highest quality refurbisher of laptop products, narrowing our focus to excel." },
//     { year: 2017, title: "World-Class Facility", desc: "We built the world's leading facility for the remanufacturing and refurbishment of laptops, which remains the industry standard today." },
//     { year: 2020, title: "Pioneering R&D", desc: "Embarked on over 1,000 mini research and development projects to perfect the consistent quality you see today." },
//     { year: 2023, title: "BSI Kitemark Achieved", desc: "Became the only company worldwide to hold a BSI Kitemark for both remanufactured and refurbished laptops." },
//   ];

//   return (
//     <section className="py-24 bg-gray-900" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
//             Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
//           </h2>
//           <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-20">
//             Our journey is the reason we are the market leader in quality.
//             We started this process years before others in the market.
//           </p>
//         </FadeIn>
        
//         <div className="relative max-w-2xl mx-auto">
//           {/* The vertical line */}
//           <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-800 rounded-full"></div>
          
//           {timelineEvents.map((event, index) => (
//             <FadeIn key={index} triggerOnce={true}>
//               <div className="relative mb-12 flex items-center md:w-full">
//                 {/* Dot */}
//                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
//                   <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-blue-500 flex items-center justify-center">
//                     <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
//                   </div>
//                 </div>
                
//                 {/* Content Box */}
//                 <div className={`w-full p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
//                   } md:w-[calc(50%-2rem)]`}>
//                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{event.year}</h3>
//                   <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
//                   <p className="text-gray-400">{event.desc}</p>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { FadeIn } from '../common/FadeIn';

export const Timeline = () => {
  const timelineEvents = [
    { year: 1992, title: "Our Foundation", desc: "We began our journey in the business of buying and supplying used IT equipment to every corner of the globe." },
    { year: 2015, title: "A New Focus", desc: "We decided to become the world's largest and highest quality refurbisher of laptop products, narrowing our focus to excel." },
    { year: 2017, title: "World-Class Facility", desc: "We built the world's leading facility for the remanufacturing and refurbishment of laptops, which remains the industry standard today." },
    { year: 2020, title: "Pioneering R&D", desc: "Embarked on over 1,000 mini research and development projects to perfect the consistent quality you see today." },
    { year: 2023, title: "BSI Kitemark Achieved", desc: "Became the only company worldwide to hold a BSI Kitemark for both remanufactured and refurbished laptops." },
  ];

  return (
    // Section background changed to white, placeholder image updated
    <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Text and gradient updated to new palette */}
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
            Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Journey</span>
          </h2>
          {/* Text color updated */}
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-24">
            Our journey is the reason we are the market leader in quality.
            We started this process years before others in the market.
          </p>
        </FadeIn>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line color updated */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>
          
          {timelineEvents.map((event, index) => (
            <FadeIn key={index} triggerOnce={true}>
              {/* Added 'group' for hover effects */}
              <div className="relative mb-12 flex items-center md:w-full group">
                {/* Dot colors updated, added hover animation */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-green-500 flex items-center justify-center transition-all duration-300 group-hover:border-teal-400 group-hover:scale-110">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content Box colors updated, added spacing (p-8) and hover shadow */}
                <div className={`w-full p-8 bg-white border border-gray-200 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  } md:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-xl hover:border-gray-300`}>
                  {/* Year gradient updated */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-2">{event.year}</h3>
                  {/* Text colors updated */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};