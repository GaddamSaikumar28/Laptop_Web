import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn'; // Corrected import path
import { 
  ArrowRight, 
  Phone, 
  Mail,
  Server,
  ShieldCheck,
  Wrench,
  Truck,
  HardHat,
  RefreshCw,
  ServerOff,
  FileText,
  Users,
  Trash2,
  Heart,
  Globe,
  ClipboardList,
  CheckCircle,
  Briefcase,
  Users2,
  Clock,
  // New Icons for this page
  Laptop,
  Monitor,
  Database,
  Router as RouterIcon,
  Smartphone,
  DollarSign,
  Lock,
  BadgeCheck,
  Recycle as RecycleIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Re-usable Sticky Sidebar ---
// Consistent with other services pages
const ServicesSidebar = () => {
  // Updated to remove ITAD and add Equipment Decommission
  const otherServices = [
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
    { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
    { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
    { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
  ];

  return (
    <aside className="lg:sticky top-32 space-y-8">
      {/* "Not The Service..." Box */}
      <FadeIn delay={0.1}>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Not The Service You Are Looking For?
          </h3>
          <div className="flex flex-col space-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  <span>{service.name}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* "Get in Touch" Box */}
      <FadeIn delay={0.2}>
        <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="opacity-90 mb-6">
            Have questions about your IT assets? Our team is ready to help.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:itad@eoncircular.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">itad@eoncircular.com</span>
            </a>
          </div>
          <Link
            to="/contact?subject=itad_quote"
            className="inline--block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </FadeIn>
    </aside>
  );
};


// --- Hero Section ---
const HeroSection = () => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Asset Disposition (ITAD) Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              Secure, compliant, and profitable solutions for your end-of-life IT equipment.
            </p>
            <Link
              to="/contact?subject=itad_quote"
              className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            className="mt-12 lg:mt-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img 
              src="https://placehold.co/800x600/166534/f0fdf4?text=ITAD+Services&font=inter"
              alt="IT Asset Disposition"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- What We Handle Section ---
const WhatWeHandleSection = () => {
  const items = [
    { name: 'Servers', icon: Server },
    { name: 'Laptops', icon: Laptop },
    { name: 'Desktops', icon: Monitor },
    { name: 'Networking Gear', icon: RouterIcon },
    { name: 'Storage Arrays', icon: Database },
    { name: 'Mobile Devices', icon: Smartphone },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">What We Handle</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};

// --- Advanced Feature: Process Timeline ---
const ProcessSection = () => {
  const steps = [
    { 
      name: 'Consultation & Planning', 
      description: 'We start by understanding your needs, inventorying assets, and creating a custom ITAD plan.',
      icon: ClipboardList
    },
    { 
      name: 'Secure Logistics', 
      description: 'Our team securely packs and transports your assets from your location with a full chain of custody.',
      icon: Truck
    },
    { 
      name: 'Data Destruction', 
      description: 'We perform on-site or off-site data destruction, ensuring 100% compliance with NIST 800-88 standards.',
      icon: ShieldCheck
    },
    { 
      name: 'Recycling & Remarketing', 
      description: 'Assets are tested and refurbished for resale to maximize your ROI. Non-viable items are responsibly recycled.',
      icon: RecycleIcon
    },
    { 
      name: 'Final Reporting', 
      description: 'You receive detailed reports, including certificates of data destruction and environmental compliance.',
      icon: FileText
    },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our ITAD Process</h2>
      <div className="relative pl-6 border-l-2 border-green-300">
        {steps.map((step, index) => (
          <FadeIn key={step.name} delay={index * 0.1}>
            <div className="relative mb-10">
              {/* Timeline Dot */}
              <div className="absolute -left-[33px] top-1 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-green-300">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="ml-8">
                <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};

// --- Why Choose Us Section ---
const WhyChooseUsSection = () => {
  const benefits = [
    { 
      name: 'Total Data Security', 
      description: 'Your data security is our top priority. We provide certified, auditable data destruction.',
      icon: Lock
    },
    { 
      name: 'Maximum Value Recovery', 
      description: 'Our extensive refurbishment and resale network ensures you get the highest possible return on your assets.',
      icon: DollarSign
    },
    { 
      name: 'Environmental Compliance', 
      description: 'We adhere to a strict zero-landfill policy and all R2, e-Stewards, and ISO 14001 standards.',
      icon: Globe
    },
    { 
      name: 'Certified & Insured', 
      description: 'We are fully certified and insured, giving you complete peace of mind from start to finish.',
      icon: BadgeCheck
    },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Why Choose Us?</h2>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.name} delay={index * 0.1}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-5 p-6 bg-gray-50 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.name}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};


// --- Main Content (To be placed next to sidebar) ---
const ITADContent = () => (
  <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
    <FadeIn>
      <article>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Premier IT Asset Disposition Services</h2>
        <p>EonCircular provides a single-source solution for all your IT asset disposition needs. We securely manage the entire lifecycle of your retired IT assets, from pickup and data destruction to refurbishment, remarketing, and recycling.</p>
        <p className="mt-4">Our goal is to protect your sensitive data, ensure environmental compliance, and recover the maximum possible value from your equipment.</p>
      </article>
    </FadeIn>
    
    <WhatWeHandleSection />

    <ProcessSection />

    {/* Maximize ROI Section */}
    <FadeIn>
      <article>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            className="overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://placehold.co/800x600/f0fdf4/15803d?text=Maximize+Your+ROI&font=inter"
              alt="Maximize ROI"
              className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
            />
          </motion.div>
          <div className="mt-6 lg:mt-0">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Maximize Your ROI</h2>
            <p>Don't let your old equipment collect dust. Our ITAD program is designed to turn your retired assets into a revenue stream. Through expert testing, repair, and refurbishment, we give your equipment a second life and find the best resale channels, returning value directly to your bottom line.</p>
          </div>
        </div>
      </article>
    </FadeIn>

    <WhyChooseUsSection />

  </div>
);

// --- Main Page Component ---
export const ITAssetDisposition = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <ITADContent />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar />
          </div>
        </div>
      </div>
      
    </div>
  );
};

