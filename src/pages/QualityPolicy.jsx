import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';

// Array of sections from your provided text
const sections = [
  { id: 'quality-policy', title: 'Our Quality Policy' },
  { id: 'vision', title: 'The A2C LTD Vision' },
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
export const QualityPolicy = () => {
  const [activeSection, setActiveSection] = useState('quality-policy');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Quality+Policy&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Quality Policy
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to the highest standards in all operations.
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
              
              <ContentSection id="quality-policy" title="Our Quality Policy">
                <p>A2C Services is committed to the highest standards in refurbishing, remanufacturing, testing, repairing, assembling, and trading of IT equipment and computer components. We ensure excellence through responsible downstream vendor management and secure logical and physical data sanitization, delivering reliable and sustainable solutions to our customers.</p>
                <p>We listen to our clients, continually reviewing our processes of service realisation in line with business needs, maximising the efficiency of our integrated management system.</p>
                <p>We are committed to minimising our impact on the environment protecting the health & safety of all individuals affected by our activities, including our employees & the public while in the pursuit of quality production and supply.</p>
                <p>We provide a safe & healthy working environment by ensuring that all personnel are suitably protected, informed, trained or instructed to carry out their work in & safe, healthy & environmentally friendly manner both to themselves, their surroundings & any other individuals who may be affected. We fully assess the risks of our activities & mitigate to reduce impact on Quality, Health,Safety & the Environment – <strong>TARGET ZERO</strong> accidents.</p>
                <p>The principal elements of our policies are: –</p>
                <ul>
                  <li><strong>a)</strong> To develop & maintain a Quality, Health, Safety & Environmental Management System satisfying the requirements of BS EN ISO 9001: 2015; 14001:2015 and ISO 45001 and BS8887-211 which form the framework for achieving continual improvement, complete client satisfaction, reduced health, safety & environmental impact & full realization of all company objectives in line with the strategy and aims of the company.</li>
                  <li><strong>b)</strong> To focus on the requirements of our clients, establishing levels of communication capable of fully determining their needs & expectations.</li>
                  <li><strong>c)</strong> To maintain an accurate knowledge of and comply with all relevant health, safety & environmental legislation, requirements, best practice and guidelines.</li>
                  <li><strong>d)</strong> To maintain an optimum understanding of health, safety & environmental risk & impact associated with our activities & communicate these to our staff, & clients (as appropriate) through training and continually updated knowledge on quality, health, safety & environmental issues.</li>
                  <li><strong>e)</strong> To encourage open debate, input & suggestion for Quality, Health, Safety & Environmental improvement from all of our staff.</li>
                  <li><strong>f)</strong> To establish & maintain an infrastructure capable of supporting all company activities & realising all company objectives in relation to these policies.</li>
                  <li><strong>g)</strong> To identify scope for improvement in every aspect of the company’s activities, devising & implementing effective solutions throughout.</li>
                </ul>
              </ContentSection>

              <ContentSection id="vision" title="The A2C LTD Vision">
                <p>We are customer- focused bulk computer dealers who trade in volumes of Used, Refurbished, Recycled and end of line Computer stocks. Our aim is to offer unsurpassed levels of customer service, delivery, reliability and competitive pricing – a partner to both our customers & the environment.</p>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
