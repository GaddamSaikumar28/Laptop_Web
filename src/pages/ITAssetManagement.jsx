// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn.jsx'; // Using path from your file structure
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
//   Globe,
//   ClipboardList,
//   DollarSign,
//   Lock,
//   // New Icons for this page
//   FileStack,
//   ShieldAlert,
//   TrendingUp,
//   Clock,
//   ListTree,
//   Database,
//   BadgeCheck,
//   PlayCircle,
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- Re-usable Sticky Sidebar ---
// // Consistent with other services pages
// const ServicesSidebar = () => {
//   // Updated to remove IT Asset Management
//   const otherServices = [
//     { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
//     { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
//     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
//     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
//     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
//     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
//     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
//             Need to streamline your ITAM strategy? Our experts are here to help.
//           </p>
//           <div className="space-y-4 mb-6">
//             <a href="tel:+123456789" className="flex items-center space-x-3 group">
//               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">+1 (234) 567-890</span>
//             </a>
//             <a href="mailto:itam@ECycleGreen.com" className="flex items-center space-x-3 group">
//               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">itam@ECycleGreen.com</span>
//             </a>
//           </div>
//           <Link
//             to="/contact?subject=itam_quote"
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
//   <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
//     <FadeIn>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Text) */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               IT Asset Management (ITAM) Nationwide
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               Full-service solutions to track, manage, and optimize your entire IT inventory.
//             </p>
//             <Link
//               to="/contact?subject=itam_quote"
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
//               src="https://placehold.co/800x600/166534/f0fdf4?text=IT+Asset+Management&font=inter"
//               alt="IT Asset Management"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- What We Include Section ---
// const WhatWeIncludeSection = () => {
//   const items = [
//     { name: 'Hardware Inventory', icon: Server, description: 'Complete tracking of all physical IT assets.' },
//     { name: 'Software License Management', icon: FileStack, description: 'Ensure compliance and avoid overspending.' },
//     { name: 'Lifecycle Tracking', icon: RefreshCw, description: 'Manage assets from procurement to disposal.' },
//     { name: 'Contract Management', icon: FileText, description: 'Keep track of vendor contracts and warranties.' },
//     { name: 'Compliance & Security', icon: ShieldAlert, description: 'Monitor assets to ensure security compliance.' },
//     { name: 'Cost Optimization', icon: TrendingUp, description: 'Identify savings and eliminate ghost assets.' },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">What Our ITAM Service Includes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item, index) => (
//           <FadeIn key={item.name} delay={index * 0.05}>
//             <motion.div
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg h-full"
//             >
//               <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
//                 <item.icon className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </motion.div>
//           </FadeIn>
//         ))}
//       </div>
//     </FadeIn>
//   );
// };

// // --- Benefits Section ---
// const BenefitsSection = () => (
//   <FadeIn>
//     <article>
//       <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
//         <motion.div 
//           className="overflow-hidden rounded-lg shadow-md"
//           whileHover={{ scale: 1.02 }}
//         >
//           <img 
//             src="https://placehold.co/800x600/f0fdf4/15803d?text=ITAM+Benefits&font=inter"
//             alt="Benefits of IT Asset Management"
//             className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
//           />
//         </motion.div>
//         <div className="mt-6 lg:mt-0">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Benefits of Effective ITAM</h2>
//           <p className="text-gray-700 mb-4">Effective IT Asset Management is more than just an inventory list; it's a strategic business advantage. By gaining full visibility into your IT environment, you can make informed decisions that reduce costs, mitigate risks, and improve efficiency.</p>
//           <ul className="space-y-3 list-disc list-inside text-gray-700">
//             <li>Eliminate wasteful spending on unused software.</li>
//             <li>Ensure you are always compliant with licensing agreements.</li>
//             <li>Strengthen security by tracking all hardware and software.</li>
//             <li>Streamline budgeting and forecasting for future IT needs.</li>
//           </ul>
//         </div>
//       </div>
//     </article>
//   </FadeIn>
// );

// // --- Process Timeline ---
// const ProcessSection = () => {
//   const steps = [
//     { 
//       name: 'Discovery & Inventory', 
//       description: 'We deploy tools to conduct a comprehensive audit of all hardware and software across your network.',
//       icon: ListTree
//     },
//     { 
//       name: 'Continuous Tracking', 
//       description: 'Our platform provides real-time tracking of assets, monitoring changes, and updating your inventory automatically.',
//       icon: Clock
//     },
//     { 
//       name: 'Maintenance & Optimization', 
//       description: 'We manage software updates, track contracts, and identify opportunities for cost savings and consolidation.',
//       icon: Wrench
//     },
//     { 
//       name: 'Retirement & Disposition', 
//       description: 'When assets reach end-of-life, we manage their secure retirement, linking directly to our ITAD services.',
//       icon: Trash2
//     },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">Our IT Asset Management Process</h2>
//       <div className="relative pl-6 border-l-2 border-green-300">
//         {steps.map((step, index) => (
//           <FadeIn key={step.name} delay={index * 0.1}>
//             <div className="relative mb-10 last:mb-0">
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

// // --- Video Section (Additional Feature) ---
// const VideoSection = () => (
//   <FadeIn>
//     <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 relative">
//       <div className="md:flex md:items-center md:gap-8">
//         <div className="flex-1">
//           <h2 className="text-3xl font-semibold text-white mb-4">See Our ITAM Platform in Action</h2>
//           <p className="text-gray-300 max-w-lg mb-6 md:mb-0">
//             Watch a 2-minute demo of our powerful, all-in-one ITAM portal. See how easy it is to track assets, manage licenses, and generate compliance reports in real-time.
//           </p>
//         </div>
//         <motion.div 
//           className="flex-shrink-0 mt-6 md:mt-0 relative cursor-pointer group"
//           whileHover={{ scale: 1.03 }}
//         >
//           <img 
//             src="https://placehold.co/600x400/166534/f0fdf4?text=ITAM+Portal+Demo&font=inter"
//             alt="ITAM Platform Demo"
//             className="rounded-lg w-full object-cover shadow-lg"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//             <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300" />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </FadeIn>
// );

// // --- Why Choose Us Section ---
// const WhyChooseUsSection = () => {
//   const benefits = [
//     { 
//       name: 'Reduce Costs', 
//       description: 'Our granular tracking helps you eliminate ghost assets and avoid overspending on software licenses.',
//       icon: DollarSign
//     },
//     { 
//       name: 'Ensure Compliance', 
//       description: 'Maintain a constant state of audit-readiness with automated compliance and licensing reports.',
//       icon: BadgeCheck
//     },
//     { 
//       name: 'Improve Security', 
//       description: 'Identify and patch vulnerabilities by knowing exactly what hardware and software is on your network.',
//       icon: Lock
//     },
//     { 
//       name: 'Data-Driven Decisions', 
//       description: 'Use comprehensive analytics to make smart, data-driven decisions about future IT procurement.',
//       icon: Database
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
// const ITAMContent = () => (
//   <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
//     <FadeIn>
//       <article>
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">Maximize the Value of Your IT Assets</h2>
//         <p>ECycleGreen provides a single, unified platform to manage the entire lifecycle of your IT assets. From procurement to disposal, our IT Asset Management (ITAM) services give you complete visibility and control over your hardware, software, and contracts.</p>
//         <p className="mt-4">Our goal is simple: to help you reduce costs, mitigate risk, and make smarter IT decisions.</p>
//       </article>
//     </FadeIn>
    
//     <WhatWeIncludeSection />

//     <BenefitsSection />
    
//     <ProcessSection />

//     <VideoSection />

//     <WhyChooseUsSection />

//   </div>
// );

// // --- Main Page Component ---
// export const ITAssetManagement = () => {
//   return (
//     <div className="bg-white text-gray-900">
      
//       {/* Hero Section */}
//       <HeroSection />
      
//       {/* Main Content Area (with Sidebar) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8">
//             <ITAMContent />
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
import { FadeIn } from '../components/common/FadeIn.jsx';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, Server, ShieldCheck, Wrench, Truck, HardHat, 
  RefreshCw, ServerOff, FileText, Users, Trash2, Globe, CheckCircle, 
  DollarSign, Lock, Edit, Upload, Video
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { itamApi } from '../api/itamApi'; // Use the new API
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
        {/* ... (static content) ... */}
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


// --- Hero Section (Refactored) ---
const HeroSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
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
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={data.image_url}
              alt={data.image_alt}
              onSave={onImageSave('hero', 'image')}
              className="rounded-lg shadow-xl w-full h-full object-cover"
              imgClassName="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- What We Include Section (Refactored) ---
const WhatWeIncludeSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <FadeIn>
      <div className="relative">
        {isAdmin && <AdminEditButton onClick={() => onListEdit('what_we_include')} text="Edit Items" />}
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title}
          onSave={onTextSave('what_we_include', 'title')}
          className="text-3xl font-semibold text-gray-900 mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg h-full"
              >
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                  <DynamicIcon name={item.icon_name} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

// --- Benefits Section (Refactored) ---
const BenefitsSection = ({ data, isAdmin, onTextSave, onImageSave, onListEdit }) => (
  <FadeIn>
    <article className="relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('benefits')} text="Edit List" />}
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <EditableCenteredImage
          isAdmin={isAdmin}
          src={data.image_url}
          alt={data.image_alt}
          onSave={onImageSave('benefits', 'image')}
          className="overflow-hidden rounded-lg shadow-md"
          imgClassName="rounded-lg w-full object-cover aspect-video"
        />
        <div className="mt-6 lg:mt-0">
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('benefits', 'title')}
            className="text-3xl font-semibold text-gray-900 mb-6"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.paragraph}
            onSave={onTextSave('benefits', 'paragraph')}
            className="text-gray-700 mb-4"
            useTextarea
          />
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {data.items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  </FadeIn>
);

// --- Process Timeline (Refactored) ---
const ProcessSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <FadeIn>
      <div className="relative">
        {isAdmin && <AdminEditButton onClick={() => onListEdit('process')} text="Edit Steps" />}
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
              <div className="relative mb-10 last:mb-0">
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
      </div>
    </FadeIn>
  );
};

// --- Video Section (Refactored) ---
const VideoSection = ({ data, isAdmin, onTextSave, onMediaSave }) => (
  <FadeIn>
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 relative">
      <div className="md:flex md:items-center md:gap-8">
        <div className="flex-1">
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('video', 'title')}
            className="text-3xl font-semibold text-white mb-4"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.subtitle}
            onSave={onTextSave('video', 'subtitle')}
            className="text-gray-300 max-w-lg mb-6 md:mb-0"
            useTextarea
          />
        </div>
        <motion.div 
          className="flex-shrink-0 mt-6 md:mt-0 relative group"
          whileHover={{ scale: 1.03 }}
        >
          <video
            key={data.video_url} // Force re-render if URL changes
            src={data.video_url}
            controls
            className="rounded-lg w-full object-cover shadow-lg aspect-video bg-black"
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
        </motion.div>
      </div>
    </div>
  </FadeIn>
);

// --- Why Choose Us Section (Refactored) ---
const WhyChooseUsSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <FadeIn>
      <div className="relative">
        {isAdmin && <AdminEditButton onClick={() => onListEdit('why_choose_us')} text="Edit Benefits" />}
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
      </div>
    </FadeIn>
  );
};


// --- Main Content (Refactored) ---
const ITAMContent = ({ content, isAdmin, onTextSave, onImageSave, onListEdit }) => (
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
    
    <WhatWeIncludeSection 
      data={content.what_we_include}
      isAdmin={isAdmin}
      onTextSave={onTextSave}
      onListEdit={onListEdit}
    />

    <BenefitsSection 
      data={content.benefits}
      isAdmin={isAdmin}
      onTextSave={onTextSave}
      onImageSave={onImageSave}
      onListEdit={onListEdit}
    />
    
    <ProcessSection 
      data={content.process}
      isAdmin={isAdmin}
      onTextSave={onTextSave}
      onListEdit={onListEdit}
    />

    <VideoSection 
      data={content.video}
      isAdmin={isAdmin}
      onTextSave={onTextSave}
      onMediaSave={onImageSave} // Re-use onImageSave for video
    />

    <WhyChooseUsSection 
      data={content.why_choose_us}
      isAdmin={isAdmin}
      onTextSave={onTextSave}
      onListEdit={onListEdit}
    />
  </div>
);

// --- Main Page Component ---
export const ITAssetManagement = () => {
  const { isAdmin } = useAuth(); // UNCOMMENT THIS
  //const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'what_we_include', 'benefits', 'process', 'why_choose_us'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await itamApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load ITAM content', err);
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
      await itamApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await itamApi.updateFile(newFile, oldStoragePath);
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
      case 'what_we_include':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Item Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      case 'benefits':
        return (
          <>
            <label>Benefit Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
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
      
      {/* Main Content Area (with Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <ITAMContent 
              content={content}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
              onListEdit={setModal}
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
            modal === 'what_we_include' ? content.what_we_include.items :
            modal === 'benefits' ? content.benefits.items :
            modal === 'process' ? content.process.steps :
            content.why_choose_us.benefits
          }
          itemTitleKey={
            modal === 'benefits' ? 'text' : 'name'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'what_we_include') {
              listKey = 'items';
            } else if (modal === 'benefits') {
              listKey = 'items';
            } else if (modal === 'process') {
              listKey = 'steps';
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
