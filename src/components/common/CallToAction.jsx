import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export const CallToAction = ({ title, text, buttonText, buttonLink }) => {
  const navigate = useNavigate();
  return (
    <section className="py-24" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/2b2b2b?text=Dark+Texture&font=inter')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light text-gray-200">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-10">
            {text}
          </p>
          <button
            onClick={() => navigate(buttonLink)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            {buttonText}
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
