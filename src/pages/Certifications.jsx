import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';

// Array of sections from your provided text
const sections = [
  { id: 'quality-policy', title: 'Our Quality Policy' },
  { id: 'iso-certs', title: 'ISO & OHSAS Certifications' },
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

// --- Reusable Certification Card ---
const CertificationCard = ({ logoSrc, title, subtitle, children, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full shadow-lg hover:border-cyan-400/50 transition-all duration-300">
      <img 
        src={logoSrc} 
        alt={title} 
        className="h-20 w-auto mb-6 object-contain object-left"
        onError={(e) => e.target.src = 'https://placehold.co/200x100/1a1a1a/333333?text=Logo+Error&font=inter'}
      />
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <h4 className="text-md font-semibold text-cyan-400 mb-4">{subtitle}</h4>
      <p className="text-gray-300 text-base">{children}</p>
    </div>
  </FadeIn>
);


// --- Main Page Component ---
export const Certifications = () => {
  const [activeSection, setActiveSection] = useState('quality-policy');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Certifications&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Quality & Certifications
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Our unwavering commitment to global standards and continuous improvement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="py-24 bg-black"> {/* Changed to black for card contrast */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* --- Sidebar (Left Column) --- */}
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav activeSection={activeSection} />
            </div>
            
            {/* --- Content (Right Column) --- */}
            <div className="lg:col-span-3">
              
              <ContentSection id="quality-policy" title="Our Quality Policy">
                <p>A2C Services Ltd, parent company to EonCircular, is committed to leading the IT remanufacturing industry through a culture of quality and continuous improvement. Our primary goal is to meet or exceed customer expectations by delivering products and services of the highest standard, reliability, and value.</p>
                <p>We achieve this through:</p>
                <ul>
                  <li><strong>Customer Focus:</strong> Understanding and fulfilling the needs of our customers, ensuring every refurbished and remanufactured laptop meets rigorous performance and aesthetic standards.</li>
                  <li><strong>Continuous Improvement:</strong> Actively monitoring our processes, seeking feedback, and implementing changes to enhance product quality, operational efficiency, and customer satisfaction.</li>
                  <li><strong>Compliance:</strong> Adhering to all relevant legal, regulatory, and industry standards, including our BSI Kitemark, ISO 9001, ISO 14001, and ISO 45001 certifications.</li>
                  <li><strong>Employee Engagement:</strong> Empowering our team with the training, tools, and support needed to maintain a quality-first mindset in all aspects of their work.</li>
                </ul>
                <p>Our commitment to quality is integral to our mission of providing sustainable technology without compromise.</p>
              </ContentSection>

              <ContentSection id="iso-certs" title="ISO & OHSAS Certifications">
                <p className="mb-12">We adhere to the world's most recognized standards for quality, environmental responsibility, and occupational health and safety. These certifications are independently audited and demonstrate our commitment to operational excellence.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <CertificationCard
                    logoSrc="https://placehold.co/200x100/1a1a1a/ffffff?text=ISO+9001&font=inter"
                    title="ISO 9001: 2015"
                    subtitle="Quality Management"
                    delay={0}
                  >
                    This certification ensures our products and services consistently meet customer requirements and that quality is continuously improved. It is the bedrock of our BSI Kitemark and customer satisfaction.
                  </CertificationCard>
                  
                  <CertificationCard
                    logoSrc="https://placehold.co/200x100/1a1a1a/ffffff?text=ISO+14001&font=inter"
                    title="ISO 14001: 2015"
                    subtitle="Environmental Management"
                    delay={0.1}
                  >
                    We actively manage our environmental responsibilities. This standard verifies our commitment to reducing waste, minimizing our carbon footprint, and promoting sustainability in every process.
                  </CertificationCard>

                  <CertificationCard
                    logoSrc="https://placehold.co/200x100/1a1a1a/ffffff?text=ISO+45001&font=inter"
                    title="ISO 45001: 2018"
                    subtitle="Health & Safety"
                    delay={0.2}
                  >
                    Our team's wellbeing is paramount. This certification (replacing OHSAS 18001) confirms we provide a safe and healthy workplace by preventing work-related injury and ill health.
                  </CertificationCard>
                </div>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
