

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "The entire process was seamless and incredibly secure. We received our certificates of destruction within days. Highly recommend for any business.",
      name: "Sarah J.",
      title: "IT Director, Finance Corp"
    },
    {
      quote: "Their team handled our massive data center decommission with professionalism and efficiency. Their zero-landfill policy was a huge plus for our ESG goals.",
      name: "Michael T.",
      title: "Operations Manager, Tech Solutions"
    },
    {
      quote: "I was worried about our data security, but their transparent process and secure chain of custody gave me complete peace of mind. A+ service.",
      name: "Emily R.",
      title: "Small Business Owner"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="flex gap-1 text-yellow-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            {/* Updated text colors for light mode */}
            <p className="mt-6 text-xl md:text-2xl font-light text-gray-700 italic">"{item.quote}"</p>
            <p className="text-lg font-semibold text-gray-900 mt-6">{item.name}</p>
            <p className="text-sm text-green-600 font-medium">{item.title}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            // Updated button colors for light mode
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
