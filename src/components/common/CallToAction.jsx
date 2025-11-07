// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { FadeIn } from './FadeIn';

// // export const CallToAction = ({ title, text, buttonText, buttonLink }) => {
// //   const navigate = useNavigate();
// //   return (
// //     <section className="py-24" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/2b2b2b?text=Dark+Texture&font=inter')" }}>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <FadeIn>
// //           <h2 className="text-4xl md:text-5xl font-light text-gray-200">
// //             {title}
// //           </h2>
// //           <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-10">
// //             {text}
// //           </p>
// //           <button
// //             onClick={() => navigate(buttonLink)}
// //             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
// //           >
// //             {buttonText}
// //           </button>
// //         </FadeIn>
// //       </div>
// //     </section>
// //   );
// // };
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FadeIn } from './FadeIn';
// import { EditableText } from './EditableText';
// import { EditableImage } from './EditableImage'; // We'll use this differently

// export const CallToAction = ({ ctaData, isAdmin, onSave, onImageSave }) => {
//   const navigate = useNavigate();

//   // Create a save handler for the text fields
//   const handleTextSave = (field) => async (newValue) => {
//     const newContent = {
//       ...ctaData,
//       [field]: newValue,
//     };
//     await onSave('about_cta', newContent); // Call the main save function from About.js
//   };

//   return (
//     // Updated to a light theme with green gradients
//     <section 
//       className="py-24 bg-gray-100 relative" 
//       style={{ 
//         backgroundImage: `url('${ctaData.background_image_url}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white/80"></div>

//       {/* Admin Button to change background */}
//       {isAdmin && (
//         <div className="absolute top-2 right-2 z-50">
//           <label className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all cursor-pointer">
//             Change BG
//             <input type="file" accept="image/*" className="hidden" onChange={(e) => onImageSave(e.target.files[0])} />
//           </label>
//         </div>
//       )}

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <FadeIn>
//           <EditableText
//             as="h2"
//             isAdmin={isAdmin}
//             value={ctaData.title}
//             onSave={handleTextSave('title')}
//             className="text-4xl md:text-5xl font-light text-gray-900"
//           />
//           <EditableText
//             as="p"
//             isAdmin={isAdmin}
//             value={ctaData.text}
//             onSave={handleTextSave('text')}
//             className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 mb-10"
//             useTextarea
//           />
          
//           {/* Button is editable text, but link is not (for now) */}
//           <button
//             onClick={() => navigate(ctaData.buttonLink)}
//             className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
//           >
//             <EditableText
//               as="span"
//               isAdmin={isAdmin}
//               value={ctaData.buttonText}
//               onSave={handleTextSave('buttonText')}
//             />
//           </button>
//         </FadeIn>
//       </div>
//     </section>
//   );
// };

/* src/components/common/CallToAction.jsx */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from './FadeIn';
import { EditableText } from './EditableText';
import { EditableMediaButton } from './EditableMedia';

export const CallToAction = ({
  data,
  isAdmin,
  onTextSave,
  onImageSave
}) => {
  const navigate = useNavigate();

  // Fallback data in case something is wrong
  const ctaData = data || {
    title: "Default Title",
    text: "Default text.",
    buttonText: "Default Button",
    buttonLink: "/",
    background_image_url: "https://placehold.co/1920x1080/f0fdf4/15803d?text=CTA+Background&font=inter"
  };

  return (
    <section 
      className="py-24 bg-gray-100 relative bg-cover bg-center" 
      style={{ 
        backgroundImage: `url('${ctaData.background_image_url}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      {/* Admin Button to change background */}
      <EditableMediaButton
        isAdmin={isAdmin}
        onSave={onImageSave} // This is the onImageSave(file) function
        label="Change Background"
        accept="image/*"
        className="absolute top-4 right-4 z-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={ctaData.title}
            onSave={onTextSave('cta', 'title')} // Assumes section name is 'cta'
            className="text-4xl md:text-5xl font-light text-gray-900"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={ctaData.text}
            onSave={onTextSave('cta', 'text')}
            className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 mb-10"
            useTextarea
          />
          
          <button
            onClick={() => navigate(ctaData.buttonLink)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
          >
            <EditableText
              as="span"
              isAdmin={isAdmin}
              value={ctaData.buttonText}
              onSave={onTextSave('cta', 'buttonText')}
            />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};