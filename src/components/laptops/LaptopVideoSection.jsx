
import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { PlayCircle } from 'lucide-react';

export const LaptopVideoSection = () => {
  return (
    // Container is now bg-white
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <FadeIn>
        {/* Text and gradient updated to new palette */}
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
          Experience <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">ECycleGreen Quality</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          See our state-of-the-art refurbishment process and why our BSI Kitemark
          certification sets a new standard for refurbished technology.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        {/* Border updated */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 group">
          
          {/* Placeholder with updated light-theme Image */}
          <img 
            src="https://placehold.co/1280x720/e0e0e0/555555?text=Our+Facility+Tour&font=inter" 
            alt="Video placeholder"
            className="w-full h-full object-cover"
          />
          {/* Overlay and play button are fine as-is for contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};  