
// import React from 'react';
// import { FadeIn } from '../common/FadeIn';
// import { PlayCircle } from 'lucide-react';

// export const LaptopVideoSection = () => {
//   return (
//     // Container is now bg-white
//     <div className="container mx-auto px-6 max-w-5xl text-center">
//       <FadeIn>
//         {/* Text and gradient updated to new palette */}
//         <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
//           Experience <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">ECycleGreen Quality</span>
//         </h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//           See our state-of-the-art refurbishment process and why our BSI Kitemark
//           certification sets a new standard for refurbished technology.
//         </p>
//       </FadeIn>
//       <FadeIn delay={0.2}>
//         {/* Border updated */}
//         <div className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 group">
          
//           {/* Placeholder with updated light-theme Image */}
//           <img 
//             src="https://placehold.co/1280x720/e0e0e0/555555?text=Our+Facility+Tour&font=inter" 
//             alt="Video placeholder"
//             className="w-full h-full object-cover"
//           />
//           {/* Overlay and play button are fine as-is for contrast */}
//           <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//             <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
//           </div>
//         </div>
//       </FadeIn>
//     </div>
//   );
// };  


import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { Video, Edit } from 'lucide-react';

// --- Admin Imports ---
import { EditableText } from '../common/EditableText';
// import { EditableMediaButton } from '../common/EditableMediaButton'; // Assuming you create this helper
import { EditableMediaButton } from '../common/EditableMedia';
export const LaptopVideoSection = ({ data, isAdmin, onTextSave, onMediaSave }) => {
  return (
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <FadeIn>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title_prefix}
          onSave={onTextSave('video_section', 'title_prefix')}
          className="text-4xl md:text-5xl font-light mb-8 text-gray-900"
        >
          {data.title_prefix}{' '}
          <EditableText
            as="span"
            isAdmin={isAdmin}
            value={data.title_suffix_gradient}
            onSave={onTextSave('video_section', 'title_suffix_gradient')}
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
          />
        </EditableText>
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.subtitle}
          onSave={onTextSave('video_section', 'subtitle')}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          useTextarea
        />
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 group">
          <video
            key={data.video_url}
            src={data.video_url}
            controls
            className="w-full h-full object-cover bg-black"
          >
            Your browser does not support the video tag.
          </video>
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={onMediaSave('video_section', 'video')}
            label="Upload Video"
            accept="video/*"
            icon={<Video size={14} />}
            className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </FadeIn>
    </div>
  );
};