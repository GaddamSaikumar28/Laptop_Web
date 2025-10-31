import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn'; // Using path from your file structure
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Check,
  X,
  Recycle,
  Globe,
  DollarSign,
  Heart,
  Zap,
  // Icons for categories
  Laptop,
  Smartphone,
  Server,
  Printer,
  Monitor,
  Headphones,
  HardDrive,
  Battery,
  Cable,
  Tv,
  Microwave,
  Info
} from 'lucide-react';

// --- Hero Section ---
const HeroSection = () => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Accept
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              We responsibly recycle a wide range of electronic waste. See our comprehensive list of accepted items below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact?subject=recycling_pickup"
                className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
              >
                Schedule a Pickup
              </Link>
              <Link
                to="/services/drop-off-box"
                className="inline-block bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-gray-200"
              >
                Find a Drop-Off Box
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            className="mt-12 lg:mt-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img 
              src="https://placehold.co/800x600/166534/f0fdf4?text=Accepted+E-Waste&font=inter"
              alt="Accepted E-Waste"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- Accepted Items Grid ---
const AcceptedItemsGrid = () => {
  const categories = [
    { name: "Computers & Laptops", icon: Laptop, items: ["Desktops", "Laptops", "MacBooks", "All-in-Ones"] },
    { name: "Mobile Devices", icon: Smartphone, items: ["Smartphones", "Tablets", "Cell Phones", "PDAs"] },
    { name: "Servers & Networking", icon: Server, items: ["Servers", "Routers", "Switches", "Network Racks"] },
    { name: "Office Equipment", icon: Printer, items: ["Printers", "Scanners", "Copiers", "Fax Machines"] },
    { name: "Monitors & Displays", icon: Monitor, items: ["LCD & LED Monitors", "Flat Screen TVs", "Projectors"] },
    { name: "Audio & Video", icon: Headphones, items: ["Speakers", "Stereos", "DVD/VCR Players", "Cameras"] },
    { name: "Peripherals", icon: HardDrive, items: ["Keyboards", "Mice", "Hard Drives", "UPS Systems"] },
    { name: "Batteries & Power", icon: Battery, items: ["Laptop Batteries", "UPS Batteries", "Power Adapters"] },
    { name: "Cables & Wires", icon: Cable, items: ["All types of power cables", "Data cables (Ethernet, USB)"] },
    { name: "Miscellaneous", icon: Info, items: ["Circuit Boards", "Modems", "Game Consoles", "And more..."] }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            We Gladly Accept
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white"
              >
                {/* Futuristic Glow Effect */}
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
                
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map(item => (
                    <li key={item} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Not Accepted Section ---
const NotAcceptedSection = () => {
  const items = [
    "Large Appliances (Refrigerators, AC Units)",
    "Hazardous Waste (Chemicals, Asbestos)",
    "Non-Electronic Waste (Furniture, Tires)",
    "Light Bulbs (Fluorescent, LED, Incandescent)",
    "Smoke Detectors / Carbon Monoxide Detectors",
    "Anything containing liquids or food"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-red-900 mb-6">What We Don't Accept</h2>
            <p className="text-lg text-red-800 mb-6">
              For safety and regulatory reasons, we cannot accept the following items. Please contact your local municipality for proper disposal options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {items.map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Why Recycle Section ---
const WhyRecycleSection = () => {
  const benefits = [
    { name: "Prevent Pollution", description: "Keep toxic materials like lead and mercury out of landfills and water.", icon: Globe },
    { name: "Conserve Resources", description: "Recover valuable materials like gold, copper, and aluminum.", icon: Recycle },
    { name: "Create Jobs", description: "The recycling industry supports local economies and creates jobs.", icon: DollarSign },
    { name: "Protect Data", description: "Ensure your personal data is securely destroyed before recycling.", icon: Zap },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Recycling Your E-Waste Matters
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full"
              >
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.name}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export const AcceptedItems = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <AcceptedItemsGrid />
      <NotAcceptedSection />
      <WhyRecycleSection />

      {/* Final CTA */}
      <FadeIn>
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Recycle Responsibly?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether it's one item or a truckload, we make it easy.
            </p>
            <Link
              to="/contact?subject=recycling_quote"
              className="inline-block bg-green-600 text-white font-bold px-10 py-5 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

