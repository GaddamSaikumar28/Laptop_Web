import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { FadeIn } from '../components/common/FadeIn';
import { FadeIn } from '../components/common/FadeIn';
import {
  Recycle,
  Cpu,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Briefcase,
  HardDrive,
  Truck,
  MessageSquare,
  Package,
  FileText,
  Leaf,
} from 'lucide-react';

// --- Container Component ---
const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Section 1: "Solutions for Responsible Waste Management"
const ServicesHeroSection = () => (
  <section className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <span className="text-sm font-bold uppercase text-green-600">Our Services</span>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Solutions for Responsible Waste Management
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We provide comprehensive, certified, and secure e-waste recycling and IT Asset Disposition (ITAD) services tailored to your every need.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
        </FadeIn>
        <FadeIn delay={0.2} className="relative h-80 lg:h-[450px]">
          <img 
            src="https://placehold.co/600x450/16a34a/ffffff?text=Secure+Services&font=inter" 
            alt="Secure Electronics Recycling Services" 
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </FadeIn>
      </div>
    </Container>
  </section>
);

// Section 2: "Discover the Services We Offer" (Slider)
const ServiceOfferingsSection = () => {
  // These services match the children from Header.jsx
  const serviceChildren = [
    { name: 'ITAD Services', path: '/services/itad', icon: Briefcase, desc: 'Secure, certified IT Asset Disposition to maximize value recovery from your retired assets.' },
    { name: 'Data Destruction', path: '/services/data-destruction', icon: ShieldCheck, desc: 'NAID AAA Certified data destruction, ensuring 100% security for your sensitive information.' },
    { name: 'E-Waste Recycling', path: '/services/recycling', icon: Recycle, desc: 'Responsible, zero-landfill recycling for all types of electronic waste.' },
    { name: 'Device Refurbishment', path: '/services/refurbishment', icon: Cpu, desc: 'Extending the lifecycle of electronics through professional testing and refurbishment.' },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck, desc: 'Secure, GPS-tracked logistics and pickup services from your facility to ours.' },
    { name: 'On-Site Services', path: '/services/on-site', icon: HardDrive, desc: 'On-site data shredding, asset auditing, and de-installation services for maximum convenience.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Discover the Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a complete suite of services to handle every aspect of your electronics lifecycle, from secure logistics to final disposition.
          </p>
        </FadeIn>
      </Container>
      
      {/* Horizontal Scrolling Wrapper ("Slide Bar") */}
      <div className="mt-16 -mx-4 px-4">
        <FadeIn>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {serviceChildren.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-[350px]">
                <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <service.icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-gray-600 flex-grow">{service.desc}</p>
                  <Link 
                    to={service.path}
                    className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
            {/* Optional: Add a "View All" card */}
            <div className="flex-shrink-0 w-full sm:w-[350px]">
              <Link 
                to="/contact" 
                className="h-full bg-green-50 p-6 rounded-2xl border border-green-200 flex flex-col items-center justify-center text-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <MessageSquare size={32} />
                </div>
                <h4 className="mt-4 font-bold text-lg text-green-700">Custom Solution?</h4>
                <p className="mt-1 text-sm text-green-600">Don't see what you need? Contact us for a custom quote.</p>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// Section 3: "Easy 4-Step Process to Success" (Re-used from Home)
const ProcessSection = () => {
  const steps = [
    { name: 'Get a Quote', icon: MessageSquare, desc: 'Contact us with your inventory list for a fast, free quote.' },
    { name: 'Schedule Pickup', icon: Truck, desc: 'We arrange secure, GPS-tracked logistics from your location.' },
    { name: 'Secure Processing', icon: Package, desc: 'Your assets are received, audited, and data-destroyed in our secure facility.' },
    { name: 'Receive Certificate', icon: FileText, desc: 'Get a Certificate of Destruction and a detailed audit report.' },
  ];
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase text-green-600">How It Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Easy 4-Step Process to Success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We've streamlined our process to be as simple and transparent as possible for you.
          </p>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.name} delay={index * 0.1}>
              <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 flex items-center gap-2">
                  <step.icon className="text-green-600" size={24} />
                  {step.name}
                </h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Section 4: "Sustainable Solutions for a Greener Future"
const SustainabilityCtaSection = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <Container>
      <FadeIn>
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Leaf size={256} className="absolute -top-16 -left-16 text-white" />
            <Recycle size={256} className="absolute -bottom-24 -right-16 text-white" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Sustainable Solutions for a Greener Future
            </h2>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Partner with us to not only secure your data but also to make a positive, measurable impact on the environment. Our zero-landfill promise is just the beginning.
            </p>
            <Link
              to="/sustainability"
              className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-green-600 bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Our Sustainability Mission <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>
);


// --- Main Services Page Component ---
export const Services = () => {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <ServicesHeroSection />
      <ServiceOfferingsSection />
      <ProcessSection />
      <SustainabilityCtaSection />
    </div>
  );
};
