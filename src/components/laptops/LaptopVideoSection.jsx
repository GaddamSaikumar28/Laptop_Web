// src/components/laptops/LaptopVideoSection.jsx
import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { PlayCircle } from 'lucide-react';

export const LaptopVideoSection = () => {
  return (
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Experience EonCircular Quality
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          See our state-of-the-art refurbishment process and why our BSI Kitemark certification
          sets a new standard for refurbished technology.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-800">
          {/* TODO: Replace this div with your video embed.
            For YouTube, use an <iframe>:
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="EonCircular Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          */}
          
          {/* Placeholder with Image and Play Button */}
          <img 
            src="https://placehold.co/1280x720/1a1a1a/333333?text=Our+Facility&font=inter" 
            alt="Video placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};