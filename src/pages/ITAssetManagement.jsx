import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx'; // Using path from your file structure
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
  Globe,
  ClipboardList,
  DollarSign,
  Lock,
  // New Icons for this page
  FileStack,
  ShieldAlert,
  TrendingUp,
  Clock,
  ListTree,
  Database,
  BadgeCheck,
  PlayCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Re-usable Sticky Sidebar ---
// Consistent with other services pages
const ServicesSidebar = () => {
  // Updated to remove IT Asset Management
  const otherServices = [
    { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
            Need to streamline your ITAM strategy? Our experts are here to help.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:itam@ECycleGreen.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">itam@ECycleGreen.com</span>
            </a>
          </div>
          <Link
            to="/contact?subject=itam_quote"
            className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
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
              IT Asset Management (ITAM) Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              Full-service solutions to track, manage, and optimize your entire IT inventory.
            </p>
            <Link
              to="/contact?subject=itam_quote"
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
              src="https://placehold.co/800x600/166534/f0fdf4?text=IT+Asset+Management&font=inter"
              alt="IT Asset Management"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- What We Include Section ---
const WhatWeIncludeSection = () => {
  const items = [
    { name: 'Hardware Inventory', icon: Server, description: 'Complete tracking of all physical IT assets.' },
    { name: 'Software License Management', icon: FileStack, description: 'Ensure compliance and avoid overspending.' },
    { name: 'Lifecycle Tracking', icon: RefreshCw, description: 'Manage assets from procurement to disposal.' },
    { name: 'Contract Management', icon: FileText, description: 'Keep track of vendor contracts and warranties.' },
    { name: 'Compliance & Security', icon: ShieldAlert, description: 'Monitor assets to ensure security compliance.' },
    { name: 'Cost Optimization', icon: TrendingUp, description: 'Identify savings and eliminate ghost assets.' },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">What Our ITAM Service Includes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg h-full"
            >
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};

// --- Benefits Section ---
const BenefitsSection = () => (
  <FadeIn>
    <article>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div 
          className="overflow-hidden rounded-lg shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://placehold.co/800x600/f0fdf4/15803d?text=ITAM+Benefits&font=inter"
            alt="Benefits of IT Asset Management"
            className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
          />
        </motion.div>
        <div className="mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Benefits of Effective ITAM</h2>
          <p className="text-gray-700 mb-4">Effective IT Asset Management is more than just an inventory list; it's a strategic business advantage. By gaining full visibility into your IT environment, you can make informed decisions that reduce costs, mitigate risks, and improve efficiency.</p>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Eliminate wasteful spending on unused software.</li>
            <li>Ensure you are always compliant with licensing agreements.</li>
            <li>Strengthen security by tracking all hardware and software.</li>
            <li>Streamline budgeting and forecasting for future IT needs.</li>
          </ul>
        </div>
      </div>
    </article>
  </FadeIn>
);

// --- Process Timeline ---
const ProcessSection = () => {
  const steps = [
    { 
      name: 'Discovery & Inventory', 
      description: 'We deploy tools to conduct a comprehensive audit of all hardware and software across your network.',
      icon: ListTree
    },
    { 
      name: 'Continuous Tracking', 
      description: 'Our platform provides real-time tracking of assets, monitoring changes, and updating your inventory automatically.',
      icon: Clock
    },
    { 
      name: 'Maintenance & Optimization', 
      description: 'We manage software updates, track contracts, and identify opportunities for cost savings and consolidation.',
      icon: Wrench
    },
    { 
      name: 'Retirement & Disposition', 
      description: 'When assets reach end-of-life, we manage their secure retirement, linking directly to our ITAD services.',
      icon: Trash2
    },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our IT Asset Management Process</h2>
      <div className="relative pl-6 border-l-2 border-green-300">
        {steps.map((step, index) => (
          <FadeIn key={step.name} delay={index * 0.1}>
            <div className="relative mb-10 last:mb-0">
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

// --- Video Section (Additional Feature) ---
const VideoSection = () => (
  <FadeIn>
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 relative">
      <div className="md:flex md:items-center md:gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-white mb-4">See Our ITAM Platform in Action</h2>
          <p className="text-gray-300 max-w-lg mb-6 md:mb-0">
            Watch a 2-minute demo of our powerful, all-in-one ITAM portal. See how easy it is to track assets, manage licenses, and generate compliance reports in real-time.
          </p>
        </div>
        <motion.div 
          className="flex-shrink-0 mt-6 md:mt-0 relative cursor-pointer group"
          whileHover={{ scale: 1.03 }}
        >
          <img 
            src="https://placehold.co/600x400/166534/f0fdf4?text=ITAM+Portal+Demo&font=inter"
            alt="ITAM Platform Demo"
            className="rounded-lg w-full object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  </FadeIn>
);

// --- Why Choose Us Section ---
const WhyChooseUsSection = () => {
  const benefits = [
    { 
      name: 'Reduce Costs', 
      description: 'Our granular tracking helps you eliminate ghost assets and avoid overspending on software licenses.',
      icon: DollarSign
    },
    { 
      name: 'Ensure Compliance', 
      description: 'Maintain a constant state of audit-readiness with automated compliance and licensing reports.',
      icon: BadgeCheck
    },
    { 
      name: 'Improve Security', 
      description: 'Identify and patch vulnerabilities by knowing exactly what hardware and software is on your network.',
      icon: Lock
    },
    { 
      name: 'Data-Driven Decisions', 
      description: 'Use comprehensive analytics to make smart, data-driven decisions about future IT procurement.',
      icon: Database
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
const ITAMContent = () => (
  <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
    <FadeIn>
      <article>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Maximize the Value of Your IT Assets</h2>
        <p>ECycleGreen provides a single, unified platform to manage the entire lifecycle of your IT assets. From procurement to disposal, our IT Asset Management (ITAM) services give you complete visibility and control over your hardware, software, and contracts.</p>
        <p className="mt-4">Our goal is simple: to help you reduce costs, mitigate risk, and make smarter IT decisions.</p>
      </article>
    </FadeIn>
    
    <WhatWeIncludeSection />

    <BenefitsSection />
    
    <ProcessSection />

    <VideoSection />

    <WhyChooseUsSection />

  </div>
);

// --- Main Page Component ---
export const ITAssetManagement = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <ITAMContent />
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

