import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn'; // Using the path from your context
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
  // New Icons for this page
  ClipboardList,
  Package,
  CircleDot,
  CheckCircle,
  Briefcase,
  Users2,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Re-usable Sticky Sidebar (Copied from EquipmentBuyback.jsx) ---
// This includes "Not The Service..." and "Get in Touch"
const ServicesSidebar = () => {
  const otherServices = [
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
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
            Have questions? Our team is ready to help.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:recycling@eoncircular.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">recycling@eoncircular.com</span>
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


// --- Hero Section ---
const HeroSection = () => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nationwide Equipment Decommission Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              Safe, secure, and seamless removal of your IT infrastructure, minimizing downtime and maximizing value.
            </p>
            <Link
              to="/contact?subject=decommission_quote"
              className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right Column (Image) */}
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://placehold.co/800x600/166534/f0fdf4?text=Server+Decommission&font=inter"
              alt="Equipment Decommission"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- Advanced Feature: Process Timeline ---
const ProcessSection = () => {
  const steps = [
    { 
      name: 'Planning & Assessment', 
      description: 'We work with your team to create a detailed project plan, inventory assets, and map dependencies to ensure zero disruption.',
      icon: ClipboardList
    },
    { 
      name: 'On-site De-installation', 
      description: 'Our certified technicians safely disconnect, dismantle, and remove all specified equipment from your data center or offices.',
      icon: ServerOff
    },
    { 
      name: 'Secure Logistics', 
      description: 'Assets are securely packed and transported in GPS-tracked vehicles, maintaining a full chain of custody from start to finish.',
      icon: Truck
    },
    { 
      name: 'Data Destruction & Reporting', 
      description: 'All media is wiped or shredded according to NIST 800-88 standards. You receive a final report and certificate of destruction.',
      icon: ShieldCheck
    },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our Decommissioning Process</h2>
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
      name: 'Experienced Team', 
      description: 'Our technicians are certified and insured, with years of experience in complex data center environments.',
      icon: Users2
    },
    { 
      name: 'Minimized Disruption', 
      description: 'We work around your schedule, including nights and weekends, to ensure your business operations continue smoothly.',
      icon: Clock
    },
    { 
      name: 'Full-Service Solution', 
      description: 'From de-racking to recycling and buyback, we handle every aspect of the decommissioning process.',
      icon: Briefcase
    },
    { 
      name: 'Guaranteed Compliance', 
      description: 'We provide full documentation to satisfy all internal and external compliance audits.',
      icon: CheckCircle
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
const DecommissionContent = () => (
  <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
    <FadeIn>
      <article>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Seamless IT Infrastructure Decommissioning</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            className="overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://placehold.co/800x600/f0fdf4/15803d?text=Seamless+De-installation&font=inter"
              alt="Seamless De-installation"
              className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
            />
          </motion.div>
          <div className="mt-6 lg:mt-0">
            <p>Moving offices? Upgrading your data center? We provide a comprehensive decommissioning service that covers everything from hardware removal and data destruction to logistics and recycling.</p>
            <p className="mt-4">Our project managers handle all the details, allowing your IT team to stay focused on critical business tasks. We guarantee a secure and efficient process, whether you're decommissioning a single rack or an entire data center.</p>
          </div>
        </div>
      </article>
    </FadeIn>

    <ProcessSection />

    <WhyChooseUsSection />

    {/* Final CTA */}
    <FadeIn>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get a Quote</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Contact us today for a detailed, no-obligation quote for your equipment decommissioning project.
        </p>
        <Link
          to="/contact?subject=decommission_quote"
          className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </FadeIn>
  </div>
);

// --- Main Page Component ---
export const EquipmentDecommission = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <DecommissionContent />
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
