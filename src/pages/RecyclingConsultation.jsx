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
  Lightbulb,
  Scale,
  BarChart2,
  ClipboardCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Re-usable Sticky Sidebar ---
// Consistent with other services pages
const ServicesSidebar = () => {
  // Updated to remove Recycling Consultation
  const otherServices = [
    { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
    { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileStack },
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
            Ready to optimize your recycling program? Let's talk.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:consulting@eoncircular.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">consulting@eoncircular.com</span>
            </a>
          </div>
          <Link
            to="/contact?subject=consulting_quote"
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
              Recycling Consultation Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10">
              Expert guidance to build efficient, compliant, and cost-effective e-waste recycling programs.
            </p>
            <Link
              to="/contact?subject=consulting_quote"
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
              src="https://placehold.co/800x600/166534/f0fdf4?text=Recycling+Consultation&font=inter"
              alt="Recycling Consultation"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- "What is..." Section ---
const MainContent = () => (
  <FadeIn>
    <article className="prose prose-lg max-w-none text-gray-700">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">What is Recycling Consultation?</h2>
      <p>A recycling consultation from EonCircular is a comprehensive analysis of your organization's current e-waste streams and disposal practices. We identify inefficiencies, compliance gaps, and cost-saving opportunities. Our experts then design a tailored recycling program that aligns with your business goals and sustainability targets, ensuring you dispose of electronic waste responsibly and economically.</p>
    </article>
  </FadeIn>
);

// --- "What Our Service Includes" Section ---
const ConsultationIncludesSection = () => {
  const items = [
    { name: 'Waste Stream Analysis', icon: BarChart2, description: 'A deep dive into your current e-waste output.' },
    { name: 'Compliance & Legal Audits', icon: Scale, description: 'Ensuring your program meets all local and federal regulations.' },
    { name: 'Custom Program Design', icon: ListTree, description: 'Developing a tailored pickup and disposal plan.' },
    { name: 'Cost-Benefit Analysis', icon: DollarSign, description: 'Identifying potential ROI and cost-saving opportunities.' },
    { name: 'Employee Training', icon: Users, description: 'Educating your team on proper disposal procedures.' },
    { name: 'Reporting & Documentation', icon: ClipboardCheck, description: 'Providing all necessary documentation for compliance.' },
  ];

  return (
    <FadeIn>
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">What Our Recycling Consultation Service Includes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full overflow-hidden bg-white"
            >
              {/* Futuristic Glow Effect */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
              
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
        <div className="mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Benefits of Our Consultation Services</h2>
          <p className="text-gray-700 mb-4">Partnering with EonCircular for a recycling consultation transforms your e-waste from a liability into a streamlined, managed process. We help you go beyond simple disposal to create a program that adds value to your business.</p>
          <ul className="space-y-4">
            {[
              { text: 'Reduce disposal costs by optimizing logistics and sorting.', icon: DollarSign },
              { text: 'Ensure 100% compliance with complex environmental laws.', icon: ShieldCheck },
              { text: 'Enhance your corporate sustainability reputation.', icon: Globe },
              { text: 'Improve data security with certified destruction processes.', icon: Lock },
            ].map((item, index) => (
              <FadeIn key={item.text} delay={index * 0.1}>
                <motion.li 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md border border-gray-200 transition-all duration-300 hover:bg-white hover:border-green-300 hover:shadow-md"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
        </div>
        <motion.div 
          className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://placehold.co/800x600/f0fdf4/15803d?text=Consultation+Benefits&font=inter"
            alt="Benefits of Recycling Consultation"
            className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
          />
        </motion.div>
      </div>
    </article>
  </FadeIn>
);

// --- Video Section (Additional Feature) ---
const VideoSection = () => (
  <FadeIn>
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 relative">
      <div className="md:flex md:items-center md:gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Consultation Process in Action</h2>
          <p className="text-gray-300 max-w-lg mb-6 md:mb-0">
            See how our experts analyze, plan, and execute a world-class recycling program. Watch this 2-minute overview to understand the value we bring to your organization.
          </p>
        </div>
        <motion.div 
          className="flex-shrink-0 mt-6 md:mt-0 relative cursor-pointer group"
          whileHover={{ scale: 1.03 }}
        >
          <img 
            src="https://placehold.co/600x400/166534/f0fdf4?text=Watch+Our+Process&font=inter"
            alt="Consultation Process Video"
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
const WhyChooseUsSection = () => (
  <FadeIn>
    <h2 className="text-3xl font-semibold text-gray-900 mb-10">Why Choose Us?</h2>
    <article className="prose prose-lg max-w-none text-gray-700">
      <p>When you choose EonCircular, you're not just hiring a vendor; you're gaining a partner. We bring years of industry expertise, a commitment to 100% compliance, and a passion for sustainability to every project. Our data-driven approach ensures your recycling program is not only eco-friendly but also economically sound.</p>
      
      <motion.div 
        className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0"
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src="https://placehold.co/1000x500/f0fdf4/15803d?text=Why+Choose+Us&font=inter"
          alt="Why Choose EonCircular"
          className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
        />
      </motion.div>
    </article>
  </FadeIn>
);


// --- Main Page Component ---
export const RecyclingConsultation = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <MainContent />
            <ConsultationIncludesSection />
            <BenefitsSection />
            <VideoSection />
            <WhyChooseUsSection />
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
