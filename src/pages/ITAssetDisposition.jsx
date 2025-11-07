// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn'; // Corrected import path
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
//   ClipboardList,
//   CheckCircle,
//   Briefcase,
//   Users2,
//   Clock,
//   // New Icons for this page
//   Laptop,
//   Monitor,
//   Database,
//   Router as RouterIcon,
//   Smartphone,
//   DollarSign,
//   Lock,
//   BadgeCheck,
//   Recycle as RecycleIcon,
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- Re-usable Sticky Sidebar ---
// // Consistent with other services pages
// const ServicesSidebar = () => {
//   // Updated to remove ITAD and add Equipment Decommission
//   const otherServices = [
//     { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
//     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
//     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
//     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
//     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
//     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
//             Have questions about your IT assets? Our team is ready to help.
//           </p>
//           <div className="space-y-4 mb-6">
//             <a href="tel:+123456789" className="flex items-center space-x-3 group">
//               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">+1 (234) 567-890</span>
//             </a>
//             <a href="mailto:itad@ECycleGreen.com" className="flex items-center space-x-3 group">
//               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">itad@ECycleGreen.com</span>
//             </a>
//           </div>
//           <Link
//             to="/contact?subject=itad_quote"
//             className="inline--block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
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
//   <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
//     <FadeIn>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Text) */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               IT Asset Disposition (ITAD) Nationwide
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               Secure, compliant, and profitable solutions for your end-of-life IT equipment.
//             </p>
//             <Link
//               to="/contact?subject=itad_quote"
//               className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//             >
//               Get a Quote
//             </Link>
//           </div>

//           {/* Right Column (Image) */}
//           <motion.div 
//             className="mt-12 lg:mt-0"
//             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//           >
//             <img 
//               src="https://placehold.co/800x600/166534/f0fdf4?text=ITAD+Services&font=inter"
//               alt="IT Asset Disposition"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- What We Handle Section ---
// const WhatWeHandleSection = () => {
//   const items = [
//     { name: 'Servers', icon: Server },
//     { name: 'Laptops', icon: Laptop },
//     { name: 'Desktops', icon: Monitor },
//     { name: 'Networking Gear', icon: RouterIcon },
//     { name: 'Storage Arrays', icon: Database },
//     { name: 'Mobile Devices', icon: Smartphone },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">What We Handle</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {items.map((item, index) => (
//           <FadeIn key={item.name} delay={index * 0.1}>
//             <motion.div
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center transition-shadow duration-300 hover:shadow-lg"
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//             </motion.div>
//           </FadeIn>
//         ))}
//       </div>
//     </FadeIn>
//   );
// };

// // --- Advanced Feature: Process Timeline ---
// const ProcessSection = () => {
//   const steps = [
//     { 
//       name: 'Consultation & Planning', 
//       description: 'We start by understanding your needs, inventorying assets, and creating a custom ITAD plan.',
//       icon: ClipboardList
//     },
//     { 
//       name: 'Secure Logistics', 
//       description: 'Our team securely packs and transports your assets from your location with a full chain of custody.',
//       icon: Truck
//     },
//     { 
//       name: 'Data Destruction', 
//       description: 'We perform on-site or off-site data destruction, ensuring 100% compliance with NIST 800-88 standards.',
//       icon: ShieldCheck
//     },
//     { 
//       name: 'Recycling & Remarketing', 
//       description: 'Assets are tested and refurbished for resale to maximize your ROI. Non-viable items are responsibly recycled.',
//       icon: RecycleIcon
//     },
//     { 
//       name: 'Final Reporting', 
//       description: 'You receive detailed reports, including certificates of data destruction and environmental compliance.',
//       icon: FileText
//     },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our ITAD Process</h2>
//       <div className="relative pl-6 border-l-2 border-green-300">
//         {steps.map((step, index) => (
//           <FadeIn key={step.name} delay={index * 0.1}>
//             <div className="relative mb-10">
//               {/* Timeline Dot */}
//               <div className="absolute -left-[33px] top-1 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-green-300">
//                 <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                   <step.icon className="w-4 h-4 text-white" />
//                 </div>
//               </div>
//               {/* Content */}
//               <div className="ml-8">
//                 <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
//                 <p className="text-gray-600 mt-2">{step.description}</p>
//               </div>
//             </div>
//           </FadeIn>
//         ))}
//       </div>
//     </FadeIn>
//   );
// };

// // --- Why Choose Us Section ---
// const WhyChooseUsSection = () => {
//   const benefits = [
//     { 
//       name: 'Total Data Security', 
//       description: 'Your data security is our top priority. We provide certified, auditable data destruction.',
//       icon: Lock
//     },
//     { 
//       name: 'Maximum Value Recovery', 
//       description: 'Our extensive refurbishment and resale network ensures you get the highest possible return on your assets.',
//       icon: DollarSign
//     },
//     { 
//       name: 'Environmental Compliance', 
//       description: 'We adhere to a strict zero-landfill policy and all R2, e-Stewards, and ISO 14001 standards.',
//       icon: Globe
//     },
//     { 
//       name: 'Certified & Insured', 
//       description: 'We are fully certified and insured, giving you complete peace of mind from start to finish.',
//       icon: BadgeCheck
//     },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">Why Choose Us?</h2>
//       <div className="space-y-8">
//         {benefits.map((benefit, index) => (
//           <FadeIn key={benefit.name} delay={index * 0.1}>
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="flex items-start space-x-5 p-6 bg-gray-50 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
//             >
//               <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
//                 <benefit.icon className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">{benefit.name}</h3>
//                 <p className="text-gray-600 mt-2">{benefit.description}</p>
//               </div>
//             </motion.div>
//           </FadeIn>
//         ))}
//       </div>
//     </FadeIn>
//   );
// };


// // --- Main Content (To be placed next to sidebar) ---
// const ITADContent = () => (
//   <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
//     <FadeIn>
//       <article>
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Premier IT Asset Disposition Services</h2>
//         <p>ECycleGreen provides a single-source solution for all your IT asset disposition needs. We securely manage the entire lifecycle of your retired IT assets, from pickup and data destruction to refurbishment, remarketing, and recycling.</p>
//         <p className="mt-4">Our goal is to protect your sensitive data, ensure environmental compliance, and recover the maximum possible value from your equipment.</p>
//       </article>
//     </FadeIn>
    
//     <WhatWeHandleSection />

//     <ProcessSection />

//     {/* Maximize ROI Section */}
//     <FadeIn>
//       <article>
//         <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
//           <motion.div 
//             className="overflow-hidden rounded-lg shadow-md"
//             whileHover={{ scale: 1.02 }}
//           >
//             <img 
//               src="https://placehold.co/800x600/f0fdf4/15803d?text=Maximize+Your+ROI&font=inter"
//               alt="Maximize ROI"
//               className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
//             />
//           </motion.div>
//           <div className="mt-6 lg:mt-0">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">Maximize Your ROI</h2>
//             <p>Don't let your old equipment collect dust. Our ITAD program is designed to turn your retired assets into a revenue stream. Through expert testing, repair, and refurbishment, we give your equipment a second life and find the best resale channels, returning value directly to your bottom line.</p>
//           </div>
//         </div>
//       </article>
//     </FadeIn>

//     <WhyChooseUsSection />

//   </div>
// );

// // --- Main Page Component ---
// export const ITAssetDisposition = () => {
//   return (
//     <div className="bg-white text-gray-900">
      
//       {/* Hero Section */}
//       <HeroSection />
      
//       {/* Main Content Area (with Sidebar) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8">
//             <ITADContent />
//           </div>
          
//           {/* Sidebar */}
//           <div className="lg:col-span-4 mt-12 lg:mt-0">
//             <ServicesSidebar />
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn'; 
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, Globe, HardHat, RefreshCw, ServerOff, 
  FileText, Users, Trash2, Wrench, Truck, ShieldCheck, Edit, Upload
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { itadApi } from '../api/itadApi';
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon'; // We need this
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
const EditableMediaButton = ({ isAdmin, onSave, label, accept, className = '' }) => {
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
        {isUploading ? 'Uploading...' : <><Upload size={14} /> {label}</>}
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


// --- Re-usable Sticky Sidebar ---
// This remains STATIC as it's global navigation, not page-specific content
const ServicesSidebar = () => {
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
      <FadeIn delay={0.1}>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Other Services
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
            Have questions about your IT assets? Our team is ready to help.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:itad@ECycleGreen.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">itad@ECycleGreen.com</span>
            </a>
          </div>
          <Link
            to="/contact?subject=itad_quote"
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
const HeroSection = ({ heroData, isAdmin, onTextSave, onImageSave }) => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={heroData.title}
              onSave={onTextSave('hero', 'title')}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={heroData.subtitle}
              onSave={onTextSave('hero', 'subtitle')}
              className="text-xl text-gray-600 max-w-2xl mb-10"
              useTextarea
            />
            <Link
              to="/contact?subject=itad_quote"
              className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right Column (Image) */}
          <EditableCenteredImage
            isAdmin={isAdmin}
            src={heroData.image_url}
            alt={heroData.image_alt}
            onSave={onImageSave('hero', 'image')}
            className="mt-12 lg:mt-0 shadow-xl"
            imgClassName="rounded-lg"
          />
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- What We Handle Section (Refactored) ---
const WhatWeHandleSection = ({ data, isAdmin, onTextSave }) => {
  return (
    <FadeIn>
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('what_we_handle', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-10"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <DynamicIcon name={item.icon_name} className="w-8 h-8" />
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

// --- Process Timeline (Refactored) ---
const ProcessSection = ({ data, isAdmin, onTextSave }) => {
  return (
    <FadeIn>
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('process', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-10"
      />
      <div className="relative pl-6 border-l-2 border-green-300">
        {data.steps.map((step, index) => (
          <FadeIn key={step.id} delay={index * 0.1}>
            <div className="relative mb-10">
              <div className="absolute -left-[33px] top-1 flex items-center justify-center w-10 h-10 bg-white rounded-full border-2 border-green-300">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <DynamicIcon name={step.icon_name} className="w-4 h-4 text-white" />
                </div>
              </div>
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

// --- Why Choose Us Section (Refactored) ---
const WhyChooseUsSection = ({ data, isAdmin, onTextSave }) => {
  return (
    <FadeIn>
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('why_choose_us', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-10"
      />
      <div className="space-y-8">
        {data.benefits.map((benefit, index) => (
          <FadeIn key={benefit.id} delay={index * 0.1}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-5 p-6 bg-gray-50 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                <DynamicIcon name={benefit.icon_name} className="w-6 h-6" />
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


// --- Main Content (Refactored) ---
const ITADContent = ({ content, isAdmin, onTextSave, onImageSave, onListEdit }) => (
  <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
    <FadeIn>
      <article>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={content.intro.title}
          onSave={onTextSave('intro', 'title')}
          className="text-3xl font-semibold text-gray-900 mb-6"
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={content.intro.paragraph1}
          onSave={onTextSave('intro', 'paragraph1')}
          useTextarea
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={content.intro.paragraph2}
          onSave={onTextSave('intro', 'paragraph2')}
          className="mt-4"
          useTextarea
        />
      </article>
    </FadeIn>
    
    <section className="relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('what_we_handle')} text="Edit Items" />}
      <WhatWeHandleSection data={content.what_we_handle} isAdmin={isAdmin} onTextSave={onTextSave} />
    </section>

    <section className="relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('process')} text="Edit Steps" />}
      <ProcessSection data={content.process} isAdmin={isAdmin} onTextSave={onTextSave} />
    </section>

    {/* Maximize ROI Section */}
    <FadeIn>
      <article>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <EditableCenteredImage
            isAdmin={isAdmin}
            src={content.roi.image_url}
            alt={content.roi.image_alt}
            onSave={onImageSave('roi', 'image')}
            className="shadow-md"
            imgClassName="rounded-lg aspect-video"
          />
          <div className="mt-6 lg:mt-0">
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.roi.title}
              onSave={onTextSave('roi', 'title')}
              className="text-3xl font-semibold text-gray-900 mb-6"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={content.roi.paragraph}
              onSave={onTextSave('roi', 'paragraph')}
              useTextarea
            />
          </div>
        </div>
      </article>
    </FadeIn>

    <section className="relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('why_choose_us')} text="Edit Benefits" />}
      <WhyChooseUsSection data={content.why_choose_us} isAdmin={isAdmin} onTextSave={onTextSave} />
    </section>

  </div>
);

// --- Main Page Component (Refactored) ---
export const ITAssetDisposition = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'what_we_handle', 'process', 'why_choose_us'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await itadApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load ITAD content', err);
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
      await itadApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await itadApi.updateFile(newFile, oldStoragePath);
      const newContent = {
        ...section,
        [`${field}_url`]: publicUrl,
        [`${field}_storage_path`]: storagePath,
      };
      await handleSave(sectionName, newContent);
    } catch (err) {
      console.error("Failed to update image", err);
      alert("Image update failed.");
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'what_we_handle':
        return (
          <>
            <label>Item Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
          </>
        );
      case 'process':
        return (
          <>
            <label>Step Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      case 'why_choose_us':
        return (
          <>
            <label>Benefit Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
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
        heroData={content.hero}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave}
      />
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <ITADContent 
              content={content}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
              onListEdit={(modalName) => setModal(modalName)}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar />
          </div>
        </div>
      </div>
      
      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            content[modal].items || content[modal].steps || content[modal].benefits
          }
          itemTitleKey="name"
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            const key = content[modal].items ? 'items' : (content[modal].steps ? 'steps' : 'benefits');
            const newContent = {
              ...content[modal],
              [key]: newItems
            };
            await handleSave(modal, newContent);
            setModal(null); // Close modal on save
          }}
        />
      )}
    </div>
  );
};