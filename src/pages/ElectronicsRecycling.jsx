

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn.jsx'; // Corrected import path
// import { 
//   ArrowRight, 
//   Phone, 
//   Mail,
//   Server,
//   ShieldCheck,
//   Wrench,
//   Truck,
//   HardHat,
//   Box,
//   RefreshCw,
//   ServerOff,
//   FileText,
//   Users,
//   Trash2,
//   CheckCircle,
//   Heart, // For Donate
//   Globe, // For Eco-Friendly
//   ShieldOff, // For Secure Data
//   PackageCheck, // For Process Step 1
//   BoxSelect,    // For Process Step 2
//   Loader2,      // For Process Step 3
//   FileDigit     // For Process Step 4
// } from 'lucide-react';

// // --- REMOVED FeatureBoxes component ---

// // --- New How It Works Section ---
// const HowItWorks = () => {
//   const steps = [
//     { 
//       icon: PackageCheck, 
//       name: 'Step 1: Contact Us', 
//       description: 'Reach out with your inventory list. We’ll provide a quote and a pickup plan.' 
//     },
//     { 
//       icon: BoxSelect, 
//       name: 'Step 2: Secure Pickup', 
//       description: 'Our bonded logistics team securely collects and transports your assets.' 
//     },
//     { 
//       icon: Loader2, 
//       name: 'Step 3: Processing', 
//       description: 'Assets are securely wiped, tested, sorted for remarketing or recycling.' 
//     },
//     { 
//       icon: FileDigit, 
//       name: 'Step 4: Reporting', 
//       description: 'Receive certified documentation for data destruction and recycling.' 
//     },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
//             How ECycleGreen Works
//           </h2>
//           <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
//             Our process is simple, secure, and transparent, designed to give you peace of mind.
//           </p>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <FadeIn key={step.name} delay={index * 0.1}>
//               {/* --- ADDED HOVER ANIMATIONS --- */}
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//                 <div className="flex justify-center items-center mb-4">
//                   <step.icon className="w-12 h-12 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- New Why Choose Us Section ---
// const WhyChooseUs = () => {
//   const benefits = [
//     'R2v3, ISO 9001, 14001, & 45001 Certified',
//     'Nationwide Secure Logistics',
//     '100% Data Security Guarantee',
//     'Transparent Reporting & Certificates',
//     'Maximum Asset Value Recovery',
//     'Commitment to Zero-Landfill Policy',
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           <FadeIn>
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 We are more than a vendor; we are your partner in responsible and secure 
//                 IT asset and e-waste management. Our certifications and processes 
//                 ensure compliance and peace of mind.
//               </p>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
//                 {benefits.map((item) => (
//                   // --- ADDED HOVER ANIMATIONS ---
//                   <li key={item} className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
//                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </FadeIn>
//           <FadeIn delay={0.2} className="mt-10 lg:mt-0">
//             <img 
//               src="https://placehold.co/600x450/e0f2fe/0c4a6e?text=Our+Certified+Facility&font=inter" 
//               alt="ECycleGreen Certified Facility"
//               // --- ADDED HOVER ANIMATION ---
//               className="rounded-lg shadow-xl w-full object-cover transition-transform duration-300 hover:scale-105"
//             />
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Updated Main Content Component ---
// const RecyclingContent = () => {
//   const sections = [
//     {
//       title: 'Recycling Solutions for All Businesses',
//       description: 'From small offices to large enterprises, we customize our recycling programs to fit your needs. We handle computers, laptops, servers, mobile devices, and more, ensuring full compliance and data security for every asset.',
//       img: 'https://placehold.co/800x450/e2e8f0/334155?text=Business+Solutions&font=inter',
//       alt: 'Office electronics recycling'
//     },
//     {
//       title: 'Advantages of Recycling Unneeded Technical Equipment',
//       description: 'Recycling e-waste not only protects the environment from hazardous materials but also recovers valuable resources. It frees up office space, ensures data security, and demonstrates your company’s commitment to sustainability.',
//       img: 'https://placehold.co/800x450/f0f9ff/0284c7?text=Recycling+Advantages&font=inter',
//       alt: 'Stack of recycled laptops'
//     },
//     {
//       title: 'Secure Data and Hardware Disposal',
//       description: 'Our primary concern is protecting your data. We offer on-site and off-site data destruction services, including shredding and degaussing, compliant with NIST 800-88 standards. You receive a certificate of destruction for every drive.',
//       img: 'https://placehold.co/800x450/f1f5f9/1e293b?text=Secure+Data+Disposal&font=inter',
//       alt: 'Hard drive shredder'
//     },
//     {
//       title: 'E-waste Management for Corporations',
//       description: 'We provide comprehensive e-waste management solutions for corporations, including asset tracking, detailed reporting, and compliance management. Our programs help you meet sustainability goals and regulatory requirements with ease.',
//       img: 'https://placehold.co/800x450/f0fdf4/15803d?text=Corporate+E-Waste+Mgmt&font=inter',
//       alt: 'Corporate IT assets'
//     },
//   ];

//   return (
//     <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
//       {sections.map((section) => (
//         <FadeIn key={section.title}>
//           <article>
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">{section.title}</h2>
//             <img 
//               src={section.img} 
//               alt={section.alt}
//               // --- ADDED HOVER ANIMATION ---
//               className="rounded-lg shadow-md mb-8 w-full object-cover aspect-video transition-transform duration-300 hover:scale-[1.02]"
//             />
//             <p>{section.description}</p>
//           </article>
//         </FadeIn>
//       ))}
//     </div>
//   );
// };

// // --- Updated Sticky Sidebar ---
// const ServicesSidebar = () => {
//   const otherServices = [
//     { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
//     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
//     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
//     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
//     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box },
//     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
//     { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
//     { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
//     { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
//   ];

//   return (
//     // This makes the whole sidebar sticky
//     <aside className="lg:sticky top-32 space-y-8">
      
//       {/* 1. Donate Box (New) */}
//       <FadeIn>
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow-sm">
//           <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate Today!</h3>
//           <p className="text-gray-600 mb-5">
//             Donate Your Electronics, Make a Difference Today!
//           </p>
//           <Link
//             to="/contact?subject=donation"
//             className="inline-block w-full text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
//           >
//             Start Donating
//           </Link>
//         </div>
//       </FadeIn>

//       {/* 2. Not The Service... (Existing) */}
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

//       {/* 3. Get in Touch Box (Existing) */}
//       <FadeIn delay={0.2}>
//         <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
//           <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
//           <p className="opacity-90 mb-6">
//             Have questions about your e-waste? Our team is ready to help.
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

// // --- Main Page Component (Updated) ---
// export const ElectronicsRecycling = () => {
//   return (
//     <div className="bg-white text-gray-900">
      
//       {/* === UPDATED HERO SECTION === */}
//       <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
//         <FadeIn>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              
//               {/* Left Column (Text & Feature Boxes) */}
//               <div>
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                   Electronics Recycling Nationwide
//                 </h1>
//                 <p className="text-xl text-gray-600 max-w-2xl mb-10">
//                   Eco-friendly e-waste solutions for businesses and individuals.
//                 </p>
                
//                 {/* Stacked Feature Boxes */}
//                 <div className="grid grid-cols-1 gap-6">
//                   {/* Eco-Friendly Disposal */}
//                   {/* --- ADDED HOVER ANIMATION --- */}
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
//                     <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
//                       <Globe className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Eco-Friendly Disposal</h3>
//                       <p className="text-gray-600 text-sm">
//                         Environmentally responsible processing.
//                       </p>
//                     </div>
//                   </div>
//                   {/* Secure Data Destruction */}
//                   {/* --- ADDED HOVER ANIMATION --- */}
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
//                     <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
//                       <ShieldOff className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Secure Data Destruction</h3>
//                       <p className="text-gray-600 text-sm">
//                         Certified processes to destroy sensitive data.
//                       </p>
//                     </div>
//                   </div>
//                   {/* Hassle-Free Pickup */}
//                   {/* --- ADDED HOVER ANIMATION --- */}
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
//                     <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
//                       <Truck className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Hassle-Free Pickup</h3>
//                       <p className="text-gray-600 text-sm">
//                         Secure logistics from your location, nationwide.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column (Image) */}
//               <div className="mt-12 lg:mt-0">
//                 <img 
//                   src="https://placehold.co/800x600/e0f2fe/0c4a6e?text=E-Waste+Recycling&font=inter"
//                   alt="Electronics Recycling"
//                   className="rounded-lg shadow-xl w-full h-full object-cover"
//                 />
//               </div>

//             </div>
//           </div>
//         </FadeIn>
//       </section>
//       {/* === END OF UPDATED HERO === */}


//       {/* Main Content Area */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8">
//             <RecyclingContent />
//           </div>
          
//           {/* Sidebar */}
//           <div className="lg:col-span-4 mt-12 lg:mt-0">
//             <ServicesSidebar />
//           </div>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <HowItWorks />
      
//       {/* Why Choose Us Section */}
//       <WhyChooseUs />
//     </div>
//   );
// };


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, Server, ShieldCheck, Wrench, Truck, HardHat, 
  Box, RefreshCw, ServerOff, FileText, Users, Trash2, CheckCircle, Heart, 
  Globe, ShieldOff, Edit, Upload
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { recyclingApi } from '../api/recyclingApi'; // Use the new API
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


// --- How It Works Section (Refactored) ---
const HowItWorks = ({ data, isAdmin, onTextSave ,onListEdit}) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('how_it_works')} text="Edit Steps" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('how_it_works', 'title')}
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.subtitle}
            onSave={onTextSave('how_it_works', 'subtitle')}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
            useTextarea
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center items-center mb-4">
                  <DynamicIcon name={step.icon_name} className="w-12 h-12 text-green-600" />
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

// --- Why Choose Us Section (Refactored) ---
const WhyChooseUs = ({ data, isAdmin, onTextSave, onImageSave,onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('why_choose_us')} text="Edit Benefits" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <div>
              <EditableText
                as="h2"
                isAdmin={isAdmin}
                value={data.title}
                onSave={onTextSave('why_choose_us', 'title')}
                className="text-3xl font-bold text-gray-900 mb-4"
              />
              <EditableText
                as="p"
                isAdmin={isAdmin}
                value={data.subtitle}
                onSave={onTextSave('why_choose_us', 'subtitle')}
                className="text-lg text-gray-600 mb-8"
                useTextarea
              />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.benefits.map((item) => (
                  <li key={item.id} className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10 lg:mt-0">
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={data.image_url}
              alt={data.image_alt}
              onSave={onImageSave('why_choose_us', 'image')}
              className="rounded-lg shadow-xl w-full object-cover"
              imgClassName="rounded-lg"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Main Content Component (Refactored) ---
const RecyclingContent = ({ articles, isAdmin, onImageSave }) => {
  // This component is now just for rendering the list.
  // The text is edited inside the modal.
  return (
    <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
      {articles.map((section, index) => (
        <FadeIn key={section.id} delay={index * 0.1}>
          <article>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{section.title}</h2>
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={section.image_url}
              alt={section.image_alt}
              onSave={(file) => onImageSave(file, section.id)} // Special save handler
              className="rounded-lg shadow-md mb-8 w-full object-cover"
              imgClassName="rounded-lg aspect-video"
            />
            <p>{section.description}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
};

// --- Sticky Sidebar (Refactored) ---
const ServicesSidebar = ({ data, isAdmin, onTextSave }) => {
  // Other services list remains static
  const otherServices = [
    { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
    { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
    { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
    { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
  ];

  return (
    <aside className="lg:sticky top-32 space-y-8">
      
      {/* 1. Donate Box (Editable) */}
      <FadeIn>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow-sm">
          <DynamicIcon name={data.icon_name} className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
          <EditableText
            as="h3"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('sidebar_donate', 'title')}
            className="text-xl font-semibold text-gray-900 mb-2"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.subtitle}
            onSave={onTextSave('sidebar_donate', 'subtitle')}
            className="text-gray-600 mb-5"
            useTextarea
          />
          <Link
            to="/contact?subject=donation"
            className="inline-block w-full text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            <EditableText
              as="span"
              isAdmin={isAdmin}
              value={data.button_text}
              onSave={onTextSave('sidebar_donate', 'button_text')}
            />
          </Link>
        </div>
      </FadeIn>

      {/* 2. Not The Service... (Static) */}
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

      {/* 3. Get in Touch Box (Static) */}
      <FadeIn delay={0.2}>
        <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="opacity-90 mb-6">
            Have questions about your e-waste? Our team is ready to help.
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

// --- Main Page Component (Refactored) ---
export const ElectronicsRecycling = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'hero_features', 'recycling_content', 'how_it_works', 'why_choose_us'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await recyclingApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load recycling content', err);
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
      await recyclingApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await recyclingApi.updateFile(newFile, oldStoragePath);
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

  // Special handler for images inside a list
  const handleListImageSave = (sectionName, listKey, itemId, file) => async () => {
    if (!file) return;
    const section = content[sectionName];
    const list = section[listKey];
    const item = list.find(i => i.id === itemId);
    const oldStoragePath = item.image_storage_path;

    try {
      const { publicUrl, storagePath } = await recyclingApi.updateFile(file, oldStoragePath);
      
      // Update the item in the list
      const newList = list.map(i => 
        i.id === itemId 
          ? { ...i, image_url: publicUrl, image_storage_path: storagePath } 
          : i
      );

      const newContent = {
        ...section,
        [listKey]: newList
      };
      await handleSave(sectionName, newContent);

    } catch (err) {
      
      console.error("Failed to update list image", err);
      alert("Image update failed.");
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'hero_features':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Subtitle: <input type="text" className="w-full p-1 border rounded" value={item.subtitle || ''} onChange={e => setItem({...item, subtitle: e.target.value})} /></label>
          </>
        );
      case 'recycling_content':
        return (
          <>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
            <label>Image: <input type="file" className="w-full p-1 border rounded file-input" data-key="image" /></label>
            {item.image_url && <img src={item.image_url} alt="Preview" className="w-32 h-auto mt-2 rounded" />}
          </>
        );
      case 'how_it_works':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Step Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      case 'why_choose_us':
        return (
          <>
            <label>Benefit Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
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
      
      {/* === HERO SECTION === */}
      <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              
              {/* Left Column (Text & Feature Boxes) */}
              <div>
                <EditableText
                  as="h1"
                  isAdmin={isAdmin}
                  value={content.hero.title}
                  onSave={handleTextSave('hero', 'title')}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                />
                <EditableText
                  as="p"
                  isAdmin={isAdmin}
                  value={content.hero.subtitle}
                  onSave={handleTextSave('hero', 'subtitle')}
                  className="text-xl text-gray-600 max-w-2xl mb-10"
                  useTextarea
                />
                
                {/* Stacked Feature Boxes (Editable) */}
                <div className="grid grid-cols-1 gap-6 relative">
                  {isAdmin && <AdminEditButton onClick={() => setModal('hero_features')} text="Edit Features" />}
                  {content.hero.features.map((feature) => (
                    <div key={feature.id} className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                      <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                        <DynamicIcon name={feature.icon_name} className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Image) */}
              <div className="mt-12 lg:mt-0">
                <EditableCenteredImage
                  isAdmin={isAdmin}
                  src={content.hero.image_url}
                  alt={content.hero.image_alt}
                  onSave={handleMediaSave('hero', 'image')}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                  imgClassName="rounded-lg"
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
          <div className="lg:col-span-8 relative">
            {isAdmin && <AdminEditButton onClick={() => setModal('recycling_content')} text="Edit Articles" />}
            <RecyclingContent 
              articles={content.recycling_content.articles}
              isAdmin={isAdmin}
              onImageSave={(file, itemId) => handleListImageSave('recycling_content', 'articles', itemId, file)}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar 
              data={content.sidebar_donate}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks 
        data={content.how_it_works}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs 
        data={content.why_choose_us}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave}
        onListEdit={setModal}
      />
      
      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'hero_features' ? content.hero.features :
            modal === 'recycling_content' ? content.recycling_content.articles :
            modal === 'how_it_works' ? content.how_it_works.steps :
            content.why_choose_us.benefits
          }
          itemTitleKey={
            modal === 'hero_features' ? 'title' :
            modal === 'recycling_content' ? 'title' :
            modal === 'how_it_works' ? 'name' :
            'text'
          }
          fileKeys={modal === 'recycling_content' ? ['image'] : []}
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'hero_features') {
              sectionName = 'hero';
              listKey = 'features';
            } else if (modal === 'recycling_content') {
              sectionName = 'recycling_content';
              listKey = 'articles';
            } else if (modal === 'how_it_works') {
              sectionName = 'how_it_works';
              listKey = 'steps';
            } else if (modal === 'why_choose_us') {
              sectionName = 'why_choose_us';
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