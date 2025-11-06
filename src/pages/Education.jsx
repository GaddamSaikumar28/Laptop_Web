import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  DollarSign, 
  ShieldCheck, 
  Recycle, 
  BookOpen, 
  Users,
  CheckSquare,
  Package,
  ArrowRight,
  ChevronDown,
  Monitor,
  Laptop,
  Server
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';

// --- Reusable Parallax Image Section (from Sustainability) ---
const ParallaxImageSection = ({ 
  title, 
  children, 
  imageUrl, 
  imageAlt = "ECycleGreen for education", 
  reverse = false 
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section 
      ref={sectionRef} 
      className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 overflow-hidden"
    >
      {/* Content Column */}
      <div className={`relative z-10 px-6 ${reverse ? 'md:order-2' : ''}`}>
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {title}
          </h2>
          <div className="text-lg text-gray-300 space-y-4">
            {children}
          </div>
        </FadeIn>
      </div>
      {/* Image Column */}
      <div className={`relative z-0 h-80 md:h-full min-h-[400px] ${reverse ? 'md:order-1' : ''}`}>
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-30 md:opacity-50"
          />
          <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'l' : 'r'} from-black via-transparent to-transparent`}></div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Animated Benefit Card ---
const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <FadeIn delay={delay}>
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(6, 182, 212, 0.1)' }}
      className="h-full bg-gray-900 p-8 rounded-2xl border border-gray-800 transition-shadow duration-300"
    >
      <Icon className="w-12 h-12 text-cyan-400 mb-6" />
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  </FadeIn>
);

// --- Animated Timeline Step ---
const TimelineStep = ({ number, title, description, delay }) => (
  <FadeIn delay={delay} y={0} x={-20}>
    <div className="relative pl-12 pb-12">
      {/* Number and Line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold text-black bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full">
          {number}
        </span>
        <div className="w-px h-full bg-gray-700 mt-4"></div> {/* Vertical line */}
      </div>
      {/* Content */}
      <div className="ml-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </FadeIn>
);

// --- Device Showcase Tabs ---
const deviceTabs = [
  { id: 'students', label: 'Best for Students', icon: Laptop },
  { id: 'staff', label: 'For Staff', icon: Users },
  { id: 'labs', label: 'For IT Labs', icon: Server },
];

const devices = {
  students: [
    { name: 'ThinkPad T-Series', specs: 'Durable, lightweight, all-day battery.', img: 'https://placehold.co/600x400/222222/555555?text=ThinkPad+T480s&font=inter' },
    { name: 'Dell Latitude 5000', specs: 'Versatile 2-in-1, compact, robust.', img: 'https://placehold.co/600x400/222222/555555?text=Latitude+5490&font=inter' },
    { name: 'HP ProBook x360', specs: 'Flexible, touch-screen, budget-friendly.', img: 'https://placehold.co/600x400/222222/555555?text=ProBook+x360&font=inter' },
  ],
  staff: [
    { name: 'Dell XPS 13', specs: 'Premium, powerful, lightweight.', img: 'https://placehold.co/600x400/333333/666666?text=Dell+XPS+13&font=inter' },
    { name: 'MacBook Pro 14"', specs: 'High-performance, creative powerhouse.', img: 'https://placehold.co/600x400/333333/666666?text=MacBook+Pro+14&font=inter' },
    { name: 'Lenovo ThinkPad X1', specs: 'Ultra-portable, executive build.', img: 'https://placehold.co/600x400/333333/666666?text=ThinkPad+X1&font=inter' },
  ],
  labs: [
    { name: 'HP EliteDesk Mini', specs: 'Compact desktops, VESA mountable.', img: 'https://placehold.co/600x400/444444/777777?text=EliteDesk+Mini&font=inter' },
    { name: 'Dell OptiPlex MFF', specs: 'Reliable, scalable, easy to manage.', img: 'https://placehold.co/600x400/444444/777777?text=OptiPlex+MFF&font=inter' },
    { name: 'Lenovo ThinkCentre', specs: 'Workhorse performance, enterprise-grade.', img: 'https://placehold.co/600x400/444444/777777?text=ThinkCentre&font=inter' },
  ]
};

const DeviceShowcase = () => {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
        {deviceTabs.map(tab => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative w-full md:w-auto text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-300 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-400 bg-gray-900 hover:text-white'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg z-0"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              <tab.icon className="w-5 h-5 mr-3" />
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {devices[activeTab].map((device, index) => (
            <motion.div
              key={device.name}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={device.img} alt={device.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{device.name}</h3>
                <p className="text-gray-300">{device.specs}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- FAQ Accordion ---
const AccordionItem = ({ index, title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-800">
    <button
      onClick={() => onToggle(index)}
      className="flex justify-between items-center w-full py-6 text-left"
    >
      <span className="text-xl font-semibold text-white">{title}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '24px' },
            collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' }
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="text-gray-300 pb-6">{children}</div>
        </motion.section>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "What kind of warranty is included?", a: "All our devices for education come with a comprehensive 12-month warranty, with options to extend. We handle all repairs and replacements in-house for a fast turnaround." },
    { q: "Do you offer bulk-buy discounts?", a: "Yes, we offer significant discounts for bulk purchases. Our specialists will work with you to create a custom quote based on your institution's needs." },
    { q: "Are these devices suitable for new software?", a: "Absolutely. All our laptops meet modern performance standards and are perfect for running the latest educational software, video conferencing, and multitasking." },
    { q: "How does the carbon-neutral aspect work?", a: "We have measured and offset the entire carbon footprint of our remanufacturing process. Every device you purchase is certified carbon-neutral, helping your institution meet its ESG and sustainability goals." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={faq.q}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        >
          {faq.a}
        </AccordionItem>
      ))}
    </div>
  );
};


// --- Main Education Page Component ---
export const Education = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Education+Setting&font=inter" 
            alt="Classroom background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          {/* Animated Dots */}
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); opacity: 0.5; }
              50% { transform: translateY(-20px); opacity: 0.8; }
              100% { transform: translateY(0px); opacity: 0.5; }
            }
            .floating-dot { animation: float 6s ease-in-out infinite; }
          `}</style>
          <GraduationCap className="floating-dot absolute w-16 h-16 text-cyan-500/10" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <BookOpen className="floating-dot absolute w-12 h-12 text-cyan-500/10" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
          <Laptop className="floating-dot absolute w-20 h-20 text-cyan-500/10" style={{ left: '30%', top: '70%', animationDelay: '4s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Laptops for Education
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Equip your students and staff with high-performance, sustainable, and
              affordable technology, backed by our BSI Kitemark certification.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <motion.a
              href="#enquire"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-cyan-500/20
                         hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              whileHover={{ boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}
            >
              Enquire Now
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* --- 2. Benefits Section --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={DollarSign}
              title="Bulk Buy Discounts"
              description="Get powerful devices at a fraction of the cost of new, with special pricing for educational institutions."
              delay={0.0}
            />
            <BenefitCard
              icon={ShieldCheck}
              title="Comprehensive Warranty"
              description="All our devices include a 12-month warranty, ensuring reliability and peace of mind for your IT department."
              delay={0.1}
            />
            <BenefitCard
              icon={Recycle}
              title="Carbon Neutral Tech"
              description="Meet your sustainability goals. Every laptop is certified carbon-neutral, reducing your school's environmental impact."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* --- 3. How It Works Timeline --- */}
      <section id="enquire" className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Procurement Process</span>
            </h2>
          </FadeIn>
          <div className="relative">
            {/* The final step has no line */}
            <TimelineStep number="01" title="Enquire" description="Fill out our simple form with your device requirements, quantities, and budget." delay={0.0} />
            <TimelineStep number="02" title="Consult" description="An education specialist will contact you to confirm details and provide expert recommendations." delay={0.2} />
            <TimelineStep number="03" title="Quote & Approval" description="Receive a detailed, no-obligation quote. On approval, we prepare your order." delay={0.4} />
            <div className="relative pl-12"> {/* Final step wrapper to align it */}
              <FadeIn delay={0.6} y={0} x={-20}>
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <span className="flex items-center justify-center w-12 h-12 text-2xl font-bold text-black bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full">
                    04
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Delivery</h3>
                  <p className="text-gray-300">Your fully tested and certified devices are securely shipped, ready for deployment.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 4. Device Showcase Section --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Devices for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Every Need</span>
            </h2>
          </FadeIn>
          <DeviceShowcase />
        </div>
      </section>

      {/* --- 5. Case Study Section --- */}
      <ParallaxImageSection
        title="Case Study: Westview Academy"
        imageUrl="https://placehold.co/1000x800/1a1a1a/333333?text=Students+with+Laptops&font=inter"
        imageAlt="Students using laptops"
        reverse={true}
      >
        <p className="italic text-xl text-gray-200">
          "ECycleGreen was a game-changer for our digital literacy program. We
          deployed 500 laptops across three schools, coming in 20% under budget
          with devices that performed like new."
        </p>
        <p className="font-semibold text-white mt-6">- Head of IT, Westview Academy</p>
        
        {/* Stats for Case Study */}
        <div className="flex gap-8 mt-8">
          <FadeIn>
            <div className="text-4xl font-bold text-cyan-400"><CountUp end={500} suffix="+" /></div>
            <div className="text-gray-300">Laptops Deployed</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-4xl font-bold text-cyan-400"><CountUp end={20} suffix="%" /></div>
            <div className="text-gray-300">Budget Saved</div>
          </FadeIn>
        </div>
      </ParallaxImageSection>

      {/* --- 6. FAQ Section --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
            </h2>
          </FadeIn>
          <FadeIn>
            <FAQSection />
          </FadeIn>
        </div>
      </section>

      {/* --- 7. Final Call to Action --- */}
      <CallToAction 
        title="Ready to Empower Your Institution?"
        text="Contact our education specialists today for a free consultation and a no-obligation quote. Let's build a sustainable digital future for your students."
        buttonText="Contact Education Sales"
        buttonLink="/contact"
      />
    </div>
  );
};


