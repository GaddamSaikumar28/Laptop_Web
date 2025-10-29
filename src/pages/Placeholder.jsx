import React from 'react';
// import { useAuth } from '../context/AuthContext';
import { FadeIn } from '../components/common/FadeIn';

export const Placeholder = ({ title }) => {
  //const { userId } = useAuth();
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-6xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{title}</h1>
          <p className="text-2xl text-gray-300">This page is under construction.</p>
          <div className="mt-8 p-4 bg-gray-900 border border-gray-700 rounded-lg max-w-md">
            <p className="text-gray-400">Your User ID (for testing):</p>
            {/* <p className="text-blue-400 text-sm break-all">{userId || 'loading...'}</p> */}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};


