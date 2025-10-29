import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';

// Array of sections from your provided text
const sections = [
  { id: 'what-is', title: 'What is Modern Slavery?' },
  { id: 'policies', title: 'Our Policies' },
  { id: 'code', title: 'Code of Conduct' },
  { id: 'risk', title: 'Identifying Risk' },
  { id: 'diligence', title: 'Due Diligence' },
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
export const ModernSlavery = () => {
  const [activeSection, setActiveSection] = useState('what-is');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Policy+Background&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Modern Slavery Policy
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to acting ethically and with integrity in all our business relationships.
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
              
              <ContentSection id="what-is" title="What is Modern Slavery?">
                <p>Modern Slavery and Human Trafficking remains a hidden issue within global society. We all have a responsibility to be alert to the risks, however small, in our businesses and in the wider supply chain.</p>
                <p>Staff are expected to report concerns and management are expected to act upon them.</p>
                <p>Many think of slavery as a relic of history, eradicated in the nineteenth century by the abolitionist movement. Unfortunately, slavery continues to flourish in the modern world. Modern Slavery refers to situations of exploitation that a person cannot refuse or leave, because of threats, violence, and coercion, abuse of power or deception. As of 2016 there were 40.3 million people reported in modern slavery (71% Female & 29% Male).</p>
                <p>We are committed to acting ethically and with integrity in all of our business relationships and are taking steps to enforce effective systems and controls to ensure that no Modern Slavery or Human Trafficking occurs anywhere in our supply chain in the UK and internationally.</p>
              </ContentSection>

              <ContentSection id="policies" title="Our Policies">
                <p>As part of our commitment to identify and mitigate risk, we build long standing relationships with our suppliers and make our expectations of acceptable business behaviour, clear.</p>
                <p>By building these relationships and following guidelines outline by the Responsible Business Alliance we can engage with our suppliers to ensure that they share our commitment and ethics. With the strength of our supplier relationships we are confident that our tier 1 suppliers maintain this same relationship with their tier 1 suppliers and so forth.</p>
                <p>We have a zero tolerance approach to Modern Slavery and Human Trafficking and expect all those in our supply chain to take the same approach and to comply with our values, including any 3rd party brands who supply both our A2C Services Ltd and Circular Computing™ brand.</p>
                <p>Any suppliers within our supply chain who are unable to comply with our code of conduct and Modern Slavery Polices and refuse to collaborate with us on implementing improvement strategies would have their contractual relationship terminated immediately.</p>
              </ContentSection>

              <ContentSection id="code" title="Code of Conduct">
                <p>Our Code of Conduct is based on the Responsible Business Alliance principles which can be applied, fairly, to all nations. We are signatories to the United Nations Global Compact demonstrating our commitment to helping eliminate modern day slavery. We also undertake to complete annually the Modern Slavery assessment tool provided for by HM Government, as part of our annual policy reviews.</p>
                <p>This code is shared with all our current Tier 1 suppliers across our supply chain and with all our service providers.</p>
                <p>We require our Agents to translate and ensure our Code of Conduct is communicated to all suppliers under their remit. Those factories operating outside of Agents we communicate directly with.</p>
                <p>We ensure all employees have access to our polices via our A2C Wikipedia, website and internal systems which covers anti -bribery policies, grievance and whistle blowing procedures and forms part of our mandatory induction process. We will continue to enhance and develop our policies through the coming year as we learn from our experience, and best practices.</p>
                <p>We endeavour to provide a support network for our employees to consult and provide them guidance on their wellbeing and to provide a further forum for educating our employees on Modern Slavery and raising its awareness.</p>
              </ContentSection>

              <ContentSection id="risk" title="Identifying Risk">
                <p>We source our products globally with a wide and varied supplier base. We push to understand areas with the greatest risk of modern slavery and focus our efforts in ensuring those we choose to work with prevent modern slavery. Our continued focus for 2020/2021 is to ensure that standards are continuing to be met throughout our supply chain and support those that need further educating. We collaborate and look to remedy any areas of concern through close communication and education.</p>
                <p>We instil our company virtues and ethical stance in our agents/resellers. We engage them to the highest standard to share our values face to face with our factories. They regularly visit operations and provide feedback to our head office team ensuring all comply to our Code of Conduct.</p>
                <p>We endeavour to have our Modern Slavery Policy / Code of Conduct available to all stakeholders of our business and encourage them to continue to develop their practises based on our own.</p>
                <p>We ensure all our employees are aware of and abide by the Bribery Act 2010. We train employees involved within buying and sourcing to equip them with the tools to identify practices that would contravene our code of ethics.</p>
              </ContentSection>

              <ContentSection id="diligence" title="Due Diligence">
                <p>We are committed to conducting our business with honesty and integrity and we expect all staff to maintain high standards. We operate a transparent and open culture at all levels throughout our organisation and supply chain.</p>
                <p>As a business we have a Senior Management Team (SMT) who directly report to the board on business operations, governance & risk management. The SMT meet on a weekly basis and operate as a steering group to discuss topics including Business Sustainability, Risk Identification & Modern Slavery amongst others.</p>
                <p>Members of the group represent functional areas across the business and take responsibility for ensuring the business operates within accordance of our corporate governance structure.</p>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
