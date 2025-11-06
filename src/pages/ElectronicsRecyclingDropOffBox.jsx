import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx'; // Using the path from your context
import { 
  ArrowRight, 
  Phone, 
  Mail,
  Server,
  ShieldCheck,
  Wrench,
  Truck,
  HardHat,
  Box,
  RefreshCw,
  ServerOff,
  FileText,
  Users,
  Trash2,
  CheckCircle,
  Heart,
  Globe,
  ShieldOff,
  PackageCheck,
  BoxSelect,
  Loader2,
  MapPin, // For new map
  Search, // For new map
  Building, // For new feature
  Clock // For new feature
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Re-usable Sticky Sidebar (Copied from ElectronicsRecycling.jsx) ---
const ServicesSidebar = () => {
  const otherServices = [
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
    { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
    { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
    { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
  ];

  return (
    <aside className="lg:sticky top-32 space-y-8">
      <FadeIn>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow-sm">
          <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate Today!</h3>
          <p className="text-gray-600 mb-5">
            Donate Your Electronics, Make a Difference Today!
          </p>
          <Link
            to="/contact?subject=donation"
            className="inline-block w-full text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Start Donating
          </Link>
        </div>
      </FadeIn>

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

      <FadeIn delay={0.2}>
        <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="opacity-90 mb-6">
            Have questions? Our team is ready to help.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:recycling@ECycleGreen.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">recycling@ECycleGreen.com</span>
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </FadeIn>
    </aside>
  );
};

// --- Main Content for this page ---
const DropOffContent = () => {
  // This section details what can be dropped off.
  const acceptedItems = [
    'Laptops & Computers', 'Phones & Tablets', 'Printers & Scanners',
    'Keyboards & Mice', 'Cables & Chargers', 'Servers & Networking Gear',
    'Cameras & Audio Equipment', 'Game Consoles'
  ];

  return (
    <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
      {/* Section 1: Program Overview */}
      <FadeIn>
        <article>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our E-Waste Drop-Off Box Program</h2>
          <img 
            src="https://placehold.co/800x450/e0f2fe/0c4a6e?text=Secure+Drop-Off+Program&font=inter" 
            alt="Secure E-Waste Drop-Off Program"
            className="rounded-lg shadow-md mb-8 w-full object-cover aspect-video transition-transform duration-300 hover:scale-[1.02]"
          />
          <p>Our secure drop-off boxes provide a convenient and safe way for businesses and residents to recycle unwanted electronics. Placed in accessible locations, these heavy-duty steel containers are designed to protect your devices and data until they are securely collected by our bonded team.</p>
          <p>This program is ideal for businesses with small, regular streams of e-waste or for community-wide recycling initiatives. We handle all logistics, from box placement to regular collection and certified data destruction.</p>
        </article>
      </FadeIn>

      {/* Section 2: What Can You Drop Off? */}
      <FadeIn>
        <article>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What Can You Drop Off?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <p className="mb-6">We accept a wide range of common electronics. Our goal is to make responsible recycling as easy as possible. Please ensure devices are intact.</p>
              <ul className="space-y-3">
                {acceptedItems.map(item => (
                  <li key={item} className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img 
              src="https://placehold.co/800x600/f0fdf4/15803d?text=Accepted+Items&font=inter" 
              alt="Accepted E-Waste Items"
              className="rounded-lg shadow-md w-full object-cover aspect-square transition-transform duration-300 hover:scale-[1.02] mt-6 md:mt-0"
            />
          </div>
          <p className="mt-6 text-sm text-gray-600"><strong>Please note:</strong> We cannot accept items containing hazardous materials like CRT monitors, batteries (unless inside a device), or large appliances in our drop-off boxes. Please contact us for these items.</p>
        </article>
      </FadeIn>
    </div>
  );
};

// --- How It Works Section (3-Step) ---
const HowItWorks = () => {
  const steps = [
    { 
      icon: MapPin, 
      name: 'Step 1: Locate a Box', 
      description: 'Use our interactive map below to find a secure drop-off box near you.' 
    },
    { 
      icon: BoxSelect, 
      name: 'Step 2: Drop Off Items', 
      description: 'Place your unwanted electronics securely inside the one-way deposit slot.' 
    },
    { 
      icon: Truck, 
      name: 'Step 3: Secure Collection', 
      description: 'Our bonded team collects, transports, and processes all items securely.' 
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Our Drop-Off Box Works
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.name} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center items-center mb-4">
                  <step.icon className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ADVANCED FEATURE: Interactive Map Section ---
const MapSection = () => {
  // Mock locations for the "theatrical" map
  const locations = [
    { name: 'ECycleGreen HQ', top: '30%', left: '25%' },
    { name: 'Downtown Business Hub', top: '50%', left: '55%' },
    { name: 'North Tech Park', top: '15%', left: '65%' },
    { name: 'Community Center South', top: '70%', left: '35%' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Find a Drop-Off Location Near You
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Enter your zip code to find the nearest secure drop-off location.
          </p>
          {/* Mock Search Bar */}
          <div className="max-w-xl mx-auto flex gap-2 mb-12">
            <input 
              type="text" 
              placeholder="Enter Zip Code or City"
              className="flex-grow px-5 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition-shadow"
            />
            <button className="flex-shrink-0 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors transform hover:scale-105">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        {/* Theatrical Map Mock-up */}
        <FadeIn>
          <div className="relative h-[500px] w-full rounded-lg bg-gray-200 shadow-inner overflow-hidden border border-gray-300">
            {/* This is a static map image placeholder */}
            <img 
              src="https://placehold.co/1200x500/e5e7eb/9ca3af?text=Static+Map+Background&font=inter"
              alt="Map background"
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Animated Pins */}
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                className="absolute"
                style={{ top: loc.top, left: loc.left }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: 'spring', stiffness: 100 }}
              >
                <div className="relative group cursor-pointer">
                  <MapPin className="w-12 h-12 text-red-600 drop-shadow-lg" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {loc.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};


// --- Main Page Component ---
export const ElectronicsRecyclingDropOffBox = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              
              {/* Left Column (Text & Feature Boxes) */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Electronic Recycling Drop-Off Box
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-10">
                  Secure, convenient, and eco-friendly e-waste drop-off solutions.
                </p>
                
                {/* Updated Feature Boxes */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">24/7 Secure Access</h3>
                      <p className="text-gray-600 text-sm">
                        Drop off your items at your convenience.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <Building className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">For Businesses & Residents</h3>
                      <p className="text-gray-600 text-sm">
                        Ideal for small offices and local communities.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Certified Recycling</h3>
                      <p className="text-gray-600 text-sm">
                        All items are processed to R2v3 standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Image) */}
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://placehold.co/800x600/0c4a6e/e0f2fe?text=Secure+Drop-Off+Box&font=inter"
                  alt="Secure E-Waste Drop-Off Box"
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </FadeIn>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <DropOffContent />
            <div className="mt-16">
              <HowItWorks />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar />
          </div>
        </div>
      </div>
      
      {/* Full-width Map Section */}
      <MapSection />
    </div>
  );
};

