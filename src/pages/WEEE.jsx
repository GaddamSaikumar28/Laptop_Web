import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';

// Array of sections from your provided text
const sections = [
  { id: 'weee', title: 'UK WEEE Regulations' },
  { id: 'batteries', title: 'EU Waste Batteries Directive' },
];

// --- Sticky Sidebar Navigation ---
const StickyNav = ({ activeSection }) => (
  <nav className="sticky top-32">
    <h3 className="text-xl font-bold text-white mb-4">On this page</h3>
    <ul className="space-y-2">
      {sections.map(section => (
        <li key={section.id}>
          <ScrollLink
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100} // Offset for the sticky header
            className={`cursor-pointer block text-sm transition-all duration-200 ${
              activeSection === section.id
                ? 'text-cyan-400 font-semibold translate-x-2'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {section.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  </nav>
);

// --- Content Section Component ---
const ContentSection = ({ id, title, children }) => (
  <FadeIn>
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
        {title}
      </h2>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        {children}
      </div>
    </section>
  </FadeIn>
);

// --- Main Page Component ---
export const WEEE = () => {
  const [activeSection, setActiveSection] = useState('weee');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Regulations&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                WEEE & Battery Regulations
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Our compliance with UK & EU environmental directives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* --- Sidebar (Left Column) --- */}
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav activeSection={activeSection} />
            </div>
            
            {/* --- Content (Right Column) --- */}
            <div className="lg:col-span-3">
              
              <ContentSection id="weee" title="UK WEEE Regulations">
                <p>The EU Waste Electrical and Electronic Equipment (WEEE) Directive requires all Member EU countries to maximise the separate collection, reuse and recycling of WEEE. The UK WEEE Regulations (derived from this Directive) applies to all Electrical and Electronic Equipment (EEE) placed on the market in the UK covered by the scope of these Regulations.</p>
                <p>Under the UK WEEE Regulations, “Producers” are required to mark all relevant EEE with a “crossed-out wheelie bin” symbol to remind consumers not to discard WEEE in the domestic waste stream. A2C Services Ltd encourage all of its customers to make note of this symbol and avoid putting any WEEE in your domestic waste bin(s) or container(s).</p>
                <p>A2C Services Ltd support the reuse and recycling of WEEE as there are several environmental benefits of doing so, such as: Reduction of raw material and energy usage, prevention of landfill, prevention of hazardous and/or toxic materials present in some WEEE contaminating the environment. As a Producer under the UK WEEE Regulations, A2C Services Ltd comply with its Producer Obligations by being registered as a Member of the WeeeCare Compliance Scheme and obtaining the WEEE Producer Registration Number – WEE/EC0104WV</p>
              </ContentSection>

              <ContentSection id="batteries" title="EU Waste Batteries and Accumulators Directive">
                <p>The EU Waste Batteries and Accumulators Directive requires all Member EU countries to maximise the separate collection, treatment and recycling of waste batteries and accumulators. The UK Battery Regulations (derived from this Directive) applies to 3 types of batteries and accumulators placed on the market in the UK: Portable, Industrial, and Automotive.</p>
                <p>Under Regulation 5 of the Batteries and Accumulators (Placing on the Market) Regulations 2008, “Producers” are required to mark all relevant batteries and battery packs placed on the market in the UK with the “crossed out wheeled bin symbol” to remind consumers not to discard batteries and accumulators in the domestic waste stream. A2C Services Ltd encourage all of its customers to make note of this symbol and avoid putting any batteries in your domestic waste bin(s) or container(s).</p>
                <p>A2C Services Ltd supports the reuse and recycling of batteries as there are several environmental benefits of doing so, such as: Reduction of raw material and energy usage, prevention of landfill, prevention of hazardous and/or toxic materials present in some batteries contaminating the environment. As a Producer under the UK Battery Regulations, A2C Services Ltd complies with its Producer Obligations by being registered as a Member of the BatteryBack Compliance Scheme and has been assigned the following Battery Producer Registration Number – BPRN04874</p>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
