// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn.jsx'; // Using the path from your context
// import { 
//   ArrowRight, 
//   Phone, 
//   Mail,
//   Server,
//   ShieldCheck,
//   Wrench,
//   Truck,
//   HardHat,
//   RefreshCw,
//   ServerOff,
//   FileText,
//   Users,
//   Trash2,
//   Heart,
//   Globe,
//   // New Icons for this page
//   Laptop,
//   Monitor,
//   Router,
//   Smartphone,
//   DollarSign,
//   CheckCircle,
//   PlayCircle,
//   TrendingUp,
//   Zap,
//   Award,
//   Map
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- Re-usable Sticky Sidebar (Copied from ElectronicsRecyclingDropOffBox.jsx) ---
// // This includes "Not The Service..." and "Get in Touch"
// const ServicesSidebar = () => {
//   const otherServices = [
//     { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat }, // Assuming this path
//     { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
//     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
//     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
//     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
//     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
//     { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
//     { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
//     { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
//   ];

//   return (
//     <aside className="lg:sticky top-32 space-y-8">
//       {/* "Not The Service..." Box */}
//       <FadeIn delay={0.1}>
//         <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-5">
//             Not The Service You Are Looking For?
//           </h3>
//           <div className="flex flex-col space-y-3">
//             {otherServices.map((service) => (
//               <Link
//                 key={service.name}
//                 to={service.path}
//                 className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md hover:-translate-y-0.5"
//               >
//                 <div className="flex items-center space-x-3">
//                   <service.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
//                   <span>{service.name}</span>
//                 </div>
//                 <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </FadeIn>

//       {/* "Get in Touch" Box */}
//       <FadeIn delay={0.2}>
//         <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
//           <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
//           <p className="opacity-90 mb-6">
//             Have questions? Our team is ready to help.
//           </p>
//           <div className="space-y-4 mb-6">
//             <a href="tel:+123456789" className="flex items-center space-x-3 group">
//               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">+1 (234) 567-890</span>
//             </a>
//             <a href="mailto:recycling@ECycleGreen.com" className="flex items-center space-x-3 group">
//               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">recycling@ECycleGreen.com</span>
//             </a>
//           </div>
//           <Link
//             to="/contact"
//             className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </FadeIn>
//     </aside>
//   );
// };


// // --- Hero Section ---
// const HeroSection = () => (
//   <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
//     <FadeIn>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Text) */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Equipment Buyback
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               Maximize the value of your old or surplus IT equipment. We offer competitive prices and secure data destruction for all your assets.
//             </p>
//             <Link
//               to="/contact?subject=buyback_quote"
//               className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//             >
//               Get a Quote Today
//             </Link>
//           </div>

//           {/* Right Column (Image) */}
//           <div className="mt-12 lg:mt-0">
//             <img 
//               src="https://placehold.co/800x600/166534/f0fdf4?text=IT+Asset+Value&font=inter"
//               alt="Equipment Buyback"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- What We Buy Section ---
// const WhatWeBuySection = () => {
//   const items = [
//     { name: 'Laptops', icon: Laptop },
//     { name: 'Desktops', icon: Monitor },
//     { name: 'Servers', icon: Server },
//     { name: 'Networking Gear', icon: Router },
//     { name: 'Mobile Phones', icon: Smartphone },
//     { name: 'Telecom Equipment', icon: Phone },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//             What We Buy
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {items.map((item, index) => (
//             <FadeIn key={item.name} delay={index * 0.1}>
//               <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//                 <div className="flex justify-center items-center mb-4">
//                   <item.icon className="w-12 h-12 text-green-600" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Our Process Section ---
// const ProcessSection = () => {
//   const steps = [
//     { name: '1. Submit Your List', description: 'Send us a detailed list of your IT assets.', icon: FileText },
//     { name: '2. Receive an Offer', description: 'We provide a competitive, no-obligation quote.', icon: DollarSign },
//     { name: '3. Schedule Pickup', description: 'We arrange secure logistics from your location.', icon: Truck },
//     { name: '4. Get Paid', description: 'Receive prompt payment upon verification.', icon: CheckCircle },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//             Our Buyback Process
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <FadeIn key={step.name} delay={index * 0.1}>
//               <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-left space-y-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//                 <step.icon className="w-10 h-10 text-green-600" />
//                 <h3 className="text-xl font-semibold text-gray-900 pt-2">{step.name}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Main Content (To be placed next to sidebar) ---
// const BuybackContent = () => (
//   <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
//     <FadeIn>
//       <article>
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Secure Data and Hardware Disposal</h2>
//         <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
//           <img 
//             src="https://placehold.co/800x600/f0fdf4/15803d?text=Secure+Data+Wiping&font=inter"
//             alt="Secure Data Wiping"
//             className="rounded-lg shadow-md w-full object-cover aspect-video transition-transform duration-300 hover:scale-[1.02]"
//           />
//           <div className="mt-6 lg:mt-0">
//             <p>Data security is our top priority. Every asset we purchase undergoes a rigorous, certified data destruction process. We ensure your sensitive information is permanently erased, protecting your company from data breaches and compliance violations.</p>
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center space-x-2"><ShieldCheck className="w-5 h-5 text-green-500" /><span>NIST 800-88 Certified Wiping</span></li>
//               <li className="flex items-center space-x-2"><ShieldCheck className="w-5 h-5 text-green-500" /><span>On-site & Off-site Shredding</span></li>
//               <li className="flex items-center space-x-2"><ShieldCheck className="w-5 h-5 text-green-500" /><span>Full Chain of Custody Reporting</span></li>
//             </ul>
//           </div>
//         </div>
//       </article>
//     </FadeIn>

//     <FadeIn>
//       <article>
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Corporate E-waste Management</h2>
//         <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
//           <div className="mt-6 lg:mt-0 lg:order-2">
//             <img 
//               src="https://placehold.co/800x600/e0f2fe/0c4a6e?text=Corporate+E-Waste&font=inter"
//               alt="Corporate E-waste Management"
//               className="rounded-lg shadow-md w-full object-cover aspect-video transition-transform duration-300 hover:scale-[1.02]"
//             />
//           </div>
//           <div className="mt-6 lg:mt-0 lg:order-1">
//             <p>Beyond simple buybacks, we offer comprehensive IT Asset Disposition (ITAD) solutions. We manage your entire end-of-life IT hardware, from secure logistics and inventory auditing to remarketing and eco-friendly recycling, turning your tech trash into treasure.</p>
//             <p className="mt-4">Our goal is to maximize your return on investment while minimizing your environmental impact and ensuring 100% compliance.</p>
//           </div>
//         </div>
//       </article>
//     </FadeIn>
//   </div>
// );

// // --- Advanced Feature: Video Section ---
// const VideoSection = () => (
//   <section className="py-16 lg:py-24 bg-gray-900 text-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <FadeIn>
//         <h2 className="text-3xl font-bold text-center mb-4">
//           Watch Our Secure Process in Action
//         </h2>
//         <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-10">
//           See how we handle your assets with care, from pickup to final certification.
//         </p>
//         <div className="relative max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden group">
//           <img 
//             src="https://placehold.co/1280x720/000000/333333?text=Video+Placeholder&font=inter"
//             alt="Video Placeholder"
//             className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <button className="relative flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm transition-all transform group-hover:scale-110">
//               <span className="absolute inset-0 bg-white opacity-20 rounded-full animate-ping"></span>
//               <PlayCircle className="w-20 h-20 text-white" />
//             </button>
//           </div>
//         </div>
//       </FadeIn>
//     </div>
//   </section>
// );

// // --- Why Choose Us Section ---
// const WhyChooseUsSection = () => {
//   const benefits = [
//     { name: 'Maximize Your ROI', description: 'We offer top-market value for your used IT equipment.', icon: TrendingUp },
//     { name: 'Certified Data Security', description: 'Complete, documented data destruction for every asset.', icon: ShieldCheck },
//     { name: 'Eco-Friendly Disposal', description: 'R2v3 certified recycling ensures zero-landfill impact.', icon: Globe },
//     { name: 'Fast & Easy Process', description: 'From quote to payment, we make it simple and quick.', icon: Zap },
//     { name: 'Full Compliance', description: 'Meet all EPA, HIPAA, and GDPR data regulations.', icon: Award },
//     { name: 'Nationwide Logistics', description: 'Secure, GPS-tracked pickups from any location.', icon: Map },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//             Why Choose Us?
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <FadeIn key={benefit.name} delay={index * 0.1}>
//               <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex space-x-4 transition-all duration-300 hover:shadow-lg hover:border-green-300">
//                 <div className="flex-shrink-0">
//                   <benefit.icon className="w-8 h-8 text-green-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.name}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Bottom CTA Section ---
// const BottomCTASection = () => (
//   <section className="py-16 lg:py-24 bg-gray-50">
//     <FadeIn>
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Ready to Sell Your IT Assets?
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
//           Get a fast, fair, and transparent quote from our team today. Turn your surplus technology into working capital.
//         </p>
//         <Link
//           to="/contact?subject=buyback_quote"
//           className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//         >
//           Request a Quote
//         </Link>
//       </div>
//     </FadeIn>
//   </section>
// );


// // --- Main Page Component ---
// export const EquipmentBuyback = () => {
//   return (
//     <div className="bg-white text-gray-900">
      
//       {/* Hero Section */}
//       <HeroSection />
      
//       {/* What We Buy Section */}
//       <WhatWeBuySection />

//       {/* Process Section */}
//       <ProcessSection />

//       {/* Main Content Area (with Sidebar) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8">
//             <BuybackContent />
//           </div>
          
//           {/* Sidebar */}
//           <div className="lg:col-span-4 mt-12 lg:mt-0">
//             <ServicesSidebar />
//           </div>
//         </div>
//       </div>
      
//       {/* Full-width Video Section */}
//       <VideoSection />

//       {/* Why Choose Us Section */}
//       <WhyChooseUsSection />

//       {/* Bottom CTA Section */}
//       <BottomCTASection />
//     </div>
//   );
// };
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, Server, ShieldCheck, Wrench, Truck, HardHat, 
  Box, RefreshCw, ServerOff, FileText, Users, Trash2, Heart, Globe, 
  CheckCircle, DollarSign, Edit, Upload, Video
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { buybackApi } from '../api/buybackApi'; // Use the new API
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS (SCOPED TO THIS FILE) ===

// Admin button for list modals
const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);

// Admin button for media uploads
const EditableMediaButton = ({ isAdmin, onSave, label, accept, className = '', icon }) => {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      await onSave(file);
    } catch (error) {
      console.error('Failed to save media:', error);
      alert('Media upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAdmin) return null;

  return (
    <>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        disabled={isUploading}
        className={`bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 ${className}`}
      >
        {isUploading ? 'Uploading...' : <>{icon || <Upload size={14} />} {label}</>}
      </button>
    </>
  );
};

// Wrapper for editable background images (center-on-hover)
const EditableCenteredImage = ({ isAdmin, src, alt, onSave, className = '', imgClassName = '' }) => {
  return (
    <motion.div 
      className={`relative rounded-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      {isAdmin && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 hover:bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={onSave}
            label="Change Image"
            accept="image/*"
          />
        </div>
      )}
    </motion.div>
  );
};

// === END OF ADMIN HELPERS ===

// --- Re-usable Sticky Sidebar (Static) ---
const ServicesSidebar = () => {
  const otherServices = [
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
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
      {/* "Not The Service..." Box */}
      <FadeIn delay={0.1}>
        {/* ... (static content) ... */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Not The Service You Are Looking For?
          </h3>
          <div className="flex flex-col space-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md hover:-translate-y-0.F5"
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
        {/* ... (static content) ... */}
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


// --- Hero Section (Refactored) ---
const HeroSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={data.title}
              onSave={onTextSave('hero', 'title')}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={data.subtitle}
              onSave={onTextSave('hero', 'subtitle')}
              className="text-xl text-gray-600 max-w-2xl mb-10"
              useTextarea
            />
            <Link
              to="/contact?subject=buyback_quote"
              className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Get a Quote Today
            </Link>
          </div>

          {/* Right Column (Image) */}
          <div className="mt-12 lg:mt-0">
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={data.image_url}
              alt={data.image_alt}
              onSave={onImageSave('hero', 'image')}
              className="rounded-lg shadow-xl w-full h-full object-cover"
              imgClassName="rounded-lg"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- What We Buy Section (Refactored) ---
const WhatWeBuySection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('what_we_buy')} text="Edit Items" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('what_we_buy', 'title')}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {data.items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center items-center mb-4">
                  <DynamicIcon name={item.icon_name} className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Our Process Section (Refactored) ---
const ProcessSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('process')} text="Edit Steps" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('process', 'title')}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-left space-y-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <DynamicIcon name={step.icon_name} className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900 pt-2">{step.name}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Secure Data Section (Refactored) ---
const SecureDataSection = ({ data, isAdmin, onTextSave, onImageSave, onListEdit }) => (
  <article className="relative">
    {isAdmin && <AdminEditButton onClick={() => onListEdit('secure_data')} text="Edit Benefits" />}
    <EditableText
      as="h2"
      isAdmin={isAdmin}
      value={data.title}
      onSave={onTextSave('secure_data', 'title')}
      className="text-3xl font-semibold text-gray-900 mb-6"
    />
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      <EditableCenteredImage
        isAdmin={isAdmin}
        src={data.image_url}
        alt={data.image_alt}
        onSave={onImageSave('secure_data', 'image')}
        className="rounded-lg shadow-md w-full object-cover"
        imgClassName="rounded-lg aspect-video"
      />
      <div className="mt-6 lg:mt-0">
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.paragraph}
          onSave={onTextSave('secure_data', 'paragraph')}
          useTextarea
        />
        <ul className="mt-4 space-y-2">
          {data.benefits.map((item) => (
            <li key={item.id} className="flex items-center space-x-2">
              <DynamicIcon name={item.icon_name} className="w-5 h-5 text-green-500" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

// --- Corporate E-waste Section (Refactored) ---
const CorporateEwasteSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <article>
    <EditableText
      as="h2"
      isAdmin={isAdmin}
      value={data.title}
      onSave={onTextSave('corporate_ewaste', 'title')}
      className="text-3xl font-semibold text-gray-900 mb-6"
    />
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      <div className="mt-6 lg:mt-0 lg:order-2">
        <EditableCenteredImage
          isAdmin={isAdmin}
          src={data.image_url}
          alt={data.image_alt}
          onSave={onImageSave('corporate_ewaste', 'image')}
          className="rounded-lg shadow-md w-full object-cover"
          imgClassName="rounded-lg aspect-video"
        />
      </div>
      <div className="mt-6 lg:mt-0 lg:order-1">
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.paragraph1}
          onSave={onTextSave('corporate_ewaste', 'paragraph1')}
          useTextarea
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.paragraph2}
          onSave={onTextSave('corporate_ewaste', 'paragraph2')}
          className="mt-4"
          useTextarea
        />
      </div>
    </div>
  </article>
);

// --- Video Section (Refactored) ---
const VideoSection = ({ data, isAdmin, onTextSave, onMediaSave }) => (
  <section className="py-16 lg:py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title}
          onSave={onTextSave('video', 'title')}
          className="text-3xl font-bold text-center mb-4"
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.subtitle}
          onSave={onTextSave('video', 'subtitle')}
          className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-10"
          useTextarea
        />
        <div className="relative max-w-4xl mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden group">
          <video
            key={data.video_url} // Force re-render if URL changes
            src={data.video_url}
            controls
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={onMediaSave('video', 'video')}
            label="Upload Video"
            accept="video/*"
            icon={<Video size={14} />}
            className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

// --- Why Choose Us Section (Refactored) ---
const WhyChooseUsSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('why_choose_us')} text="Edit Benefits" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('why_choose_us', 'title')}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) => (
            <FadeIn key={benefit.id} delay={index * 0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex space-x-4 transition-all duration-300 hover:shadow-lg hover:border-green-300">
                <div className="flex-shrink-0">
                  <DynamicIcon name={benefit.icon_name} className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.name}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Bottom CTA Section (Refactored) ---
const BottomCTASection = ({ data, isAdmin, onTextSave }) => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <FadeIn>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title}
          onSave={onTextSave('bottom_cta', 'title')}
          className="text-3xl font-bold text-gray-900 mb-4"
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.subtitle}
          onSave={onTextSave('bottom_cta', 'subtitle')}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          useTextarea
        />
        <Link
          to="/contact?subject=buyback_quote"
          className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
        >
          Request a Quote
        </Link>
      </div>
    </FadeIn>
  </section>
);


// --- Main Page Component ---
export const EquipmentBuyback = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'what_we_buy', 'process', 'secure_data', 'why_choose_us'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await buybackApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load buyback content', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  // --- Data Saving ---
  const handleSave = async (sectionName, newContent) => {
    setContent((prev) => ({
      ...prev,
      [sectionName]: newContent,
    }));
    try {
      await buybackApi.updateSectionContent(sectionName, newContent);
    } catch (err) {
      console.error('Failed to save content', err);
      alert('Error saving content.');
    }
  };

  const handleTextSave = (sectionName, field) => async (newValue) => {
    const newContent = {
      ...content[sectionName],
      [field]: newValue,
    };
    await handleSave(sectionName, newContent);
  };

  const handleMediaSave = (sectionName, field) => async (newFile) => {
    if (!newFile) return;
    const section = content[sectionName];
    const oldStoragePath = section[`${field}_storage_path`];
    try {
      const { publicUrl, storagePath } = await buybackApi.updateFile(newFile, oldStoragePath);
      const newContent = {
        ...section,
        [`${field}_url`]: publicUrl,
        [`${field}_storage_path`]: storagePath,
      };
      await handleSave(sectionName, newContent);
    } catch (err) {
      console.error("Failed to update media", err);
      alert("Media update failed.");
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'what_we_buy':
        return (
          <>
            <label>Item Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
          </>
        );
      case 'process':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Step Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      case 'secure_data':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Benefit Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
          </>
        );
      case 'why_choose_us':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Benefit Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      default: return null;
    }
  };

  if (isLoading) {
    return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Loading...</div>;
  }
  
  if (!content) {
    return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Error loading content.</div>;
  }

  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection 
        data={content.hero}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave}
      />
      
      {/* What We Buy Section */}
      <WhatWeBuySection 
        data={content.what_we_buy}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />

      {/* Process Section */}
      <ProcessSection 
        data={content.process}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />

      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <SecureDataSection 
              data={content.secure_data}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
              onListEdit={setModal}
            />
            <CorporateEwasteSection 
              data={content.corporate_ewaste}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar />
          </div>
        </div>
      </div>
      
      {/* Full-width Video Section */}
      <VideoSection 
        data={content.video}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onMediaSave={handleMediaSave}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        data={content.why_choose_us}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />

      {/* Bottom CTA Section */}
      <BottomCTASection 
        data={content.bottom_cta}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
      />

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'what_we_buy' ? content.what_we_buy.items :
            modal === 'process' ? content.process.steps :
            modal === 'secure_data' ? content.secure_data.benefits :
            content.why_choose_us.benefits
          }
          itemTitleKey={
            modal === 'secure_data' ? 'text' : 'name'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'what_we_buy') {
              listKey = 'items';
            } else if (modal === 'process') {
              listKey = 'steps';
            } else if (modal === 'secure_data') {
              listKey = 'benefits';
            } else if (modal === 'why_choose_us') {
              listKey = 'benefits';
            }

            const newContent = {
              ...content[sectionName],
              [listKey]: newItems
            };
            
            await handleSave(sectionName, newContent);
            setModal(null); // Close modal on save
          }}
        />
      )}
    </div>
  );
};