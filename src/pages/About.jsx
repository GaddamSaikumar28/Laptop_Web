import React from 'react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';
import { Timeline } from '../components/about/Timeline';
import { CoreValues } from '../components/about/CoreValues';
import { PlayCircle } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- About Hero Section --- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img 
          src="https://placehold.co/1920x1080/1a1a1a/333333?text=Our+Facility&font=inter" 
          alt="EonCircular Facility"
          className="absolute z-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Us</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              We built the world's leading facility to provide the highest quality
              refurbished laptops in the world.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* --- Animated Timeline Section (Imported) --- */}
      <Timeline />

      {/* --- Facility Video Section --- */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">World-Class Facility</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
              See the technology and the people that make our quality possible.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-800">
              <img 
                src="https://placehold.co/1280x720/1a1a1a/333333?text=Our+Facility+Tour&font=inter" 
                alt="Our Facility Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Dynamic Stats Section --- */}
      <section className="py-24 bg-gray-900" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FadeIn delay={0}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={30} suffix="+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">Years in the Market</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={10} suffix="M+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">Used Assets Sold</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={1000} suffix="+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">R&D Projects</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* --- Core Values Section (Imported) --- */}
      <CoreValues />

      {/* --- CTA Section --- */}
      <CallToAction 
        title="Let's have a conversation"
        text="Get in touch to learn how our products can provide for you."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};
