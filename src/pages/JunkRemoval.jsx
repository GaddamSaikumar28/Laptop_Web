import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn'; // Using path from your file structure
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Truck, 
  Recycle, 
  Check, 
  Star, 
  Play,
  // Icons for "What We Haul"
  Briefcase,
  Monitor,
  Printer,
  Server,
  Trash2,
  Tv,
  Users
} from 'lucide-react';

// --- Hero Section ---
const HeroSection = () => (
  <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fast & Reliable Junk Removal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              We haul away your unwanted items quickly, safely, and responsibly. From old office furniture to e-waste, we handle it all.
            </p>
            <div className="flex">
              <Link
                to="/contact?subject=junk_removal_quote"
                className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            className="mt-12 lg:mt-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img 
              src="https://placehold.co/800x600/15803d/f0fdf4?text=Junk+Removal&font=inter"
              alt="Junk Removal"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- "How It Works" Timeline ---
const HowItWorks = () => {
  const steps = [
    { name: "Call Us", description: "Contact us to schedule a free, no-obligation quote.", icon: Phone },
    { name: "We Haul It", description: "Our professional team arrives and safely removes your items.", icon: Truck },
    { name: "We Recycle It", description: "We sort and responsibly recycle everything we can.", icon: Recycle },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            How It Works
          </h2>
        </FadeIn>
        <div className="relative">
          {/* The connecting line */}
          <div className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-0.5 bg-green-200 -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            {steps.map((step, index) => (
              <FadeIn key={step.name} delay={index * 0.15} className="flex-1">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center z-10 h-full"
                >
                  <div className="relative w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-10 h-10" />
                    {/* Step Number Badge */}
                    <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold text-sm rounded-full border-4 border-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.name}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- "What We Haul" Grid ---
const WhatWeHaul = () => {
  const items = [
    { name: "Office Furniture", icon: Briefcase },
    { name: "E-Waste", icon: Monitor },
    { name: "Computers & Laptops", icon: Server },
    { name: "Printers & Copiers", icon: Printer },
    { name: "General Junk", icon: Trash2 },
    { name: "Old Appliances", icon: Tv },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What We Haul
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03, shadow: '0 25px 50px -12px rgba(22, 163, 74, 0.25)' }}
                className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white"
              >
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.name}</h3>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Video Section ---
const VideoSection = () => (
  <section className="py-16 lg:py-24 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          See Our Team in Action
        </h2>
        <motion.div 
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://placehold.co/1280x720/166534/f0fdf4?text=Video+Placeholder&font=inter" 
            alt="Junk removal in action" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

// --- "Why Choose Us" Section ---
const WhyChooseUs = () => {
  const benefits = [
    { name: "Fast & Reliable Service", description: "We show up on time and get the job done efficiently." },
    { name: "Eco-Friendly Disposal", description: "We prioritize recycling and donation to minimize landfill waste." },
    { name: "Upfront, Honest Pricing", description: "No hidden fees. You'll know the cost before we start." },
    { name: "Insured & Professional", description: "Our team is fully insured and trained for safe removal." }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Image) */}
          <FadeIn>
            <motion.img 
              src="https://placehold.co/800x600/15803d/f0fdf4?text=Why+Choose+Us?&font=inter"
              alt="Our professional team"
              className="rounded-lg shadow-xl w-full h-full object-cover"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </FadeIn>
          
          {/* Right Column (Benefits) */}
          <FadeIn>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Us?
              </h2>
              <ul className="space-y-6">
                {benefits.map((benefit) => (
                  <li key={benefit.name} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.name}</h3>
                      <p className="text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export const JunkRemoval = () => {
  // We'll use the two-column layout from previous pages.
  // For simplicity, I'm defining the sidebar here. In a real app, this would be a shared component.
  
  const otherServices = [
    { name: 'IT Asset Disposition (ITAD)', path: '/services/itad' },
    { name: 'Data Destruction', path: '/services/data-destruction' },
    { name: 'Electronics Recycling', path: '/services/recycling' },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback' },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission' },
    { name: 'IT Asset Management', path: '/services/it-asset-management' },
    { name: 'Recycling Consultation', path: '/services/recycling-consultation' },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box' },
  ];

  const StickySidebar = () => (
    <div className="sticky top-28 space-y-8">
      {/* Other Services */}
      <FadeIn delay={0.2}>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Not The Service You Are looking for?</h3>
          <ul className="space-y-1">
            {otherServices.map(service => (
              <li key={service.name}>
                <Link 
                  to={service.path}
                  className="group flex items-center justify-between p-3 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-all"
                >
                  <span>{service.name}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      
      {/* Get in Touch */}
      <FadeIn delay={0.3}>
        <div className="bg-green-600 text-white p-8 rounded-lg text-center shadow-lg">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
          <p className="mb-6">Have questions? We're here to help you with all your recycling needs.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded-md transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </FadeIn>
    </div>
  );

  return (
    <div className="bg-white">
      <HeroSection />
      
      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content (Left) */}
          <main className="lg:col-span-2 space-y-16 lg:space-y-24">
            <HowItWorks />
            <WhatWeHaul />
            <VideoSection />
            <WhyChooseUs />

            {/* Eco-Friendly Section */}
            <section>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <FadeIn>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Eco-Friendly Junk Removal
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      We're not just a junk removal company; we're a recycling company. We're committed to diverting as much waste from landfills as possible.
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                      Our process involves careful sorting to identify items that can be recycled, donated, or repurposed. We partner with certified recycling facilities to ensure your e-waste and other materials are handled according to the highest environmental standards.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <motion.img 
                    src="https://placehold.co/800x600/15803d/f0fdf4?text=Eco-Friendly&font=inter"
                    alt="Eco-friendly recycling"
                    className="rounded-lg shadow-xl w-full h-full object-cover mt-12 lg:mt-0"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  />
                </FadeIn>
              </div>
            </section>
          </main>
          
          {/* Sidebar (Right) */}
          <aside className="mt-16 lg:mt-0">
            <StickySidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};
