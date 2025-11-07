// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn'; // Using path from your file structure
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
//   DollarSign,
//   Lock,
//   FileStack,
//   Lightbulb,
//   PlayCircle,
//   BadgeCheck,
//   Scale,
//   ListTree,
//   // New Icons for this page
//   Database,
//   Shield,
//   FileSearch,
//   CheckCircle,
//   HardDrive,
//   Disc,
//   Usb,
//   Smartphone
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- Re-usable Sticky Sidebar ---
// // Consistent with other services pages
// const ServicesSidebar = () => {
//   // Updated to remove Hard Drive Shredding and add Recycling Consultation
//   const otherServices = [
//     { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
//     { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileStack },
//     { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
//     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
//     { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Lightbulb },
//     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
//     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
//     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
//             Ensure your data is gone for good. Contact us for a quote.
//           </p>
//           <div className="space-y-4 mb-6">
//             <a href="tel:+123456789" className="flex items-center space-x-3 group">
//               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">+1 (234) 567-890</span>
//             </a>
//             <a href="mailto:shredding@ECycleGreen.com" className="flex items-center space-x-3 group">
//               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">shredding@ECycleGreen.com</span>
//             </a>
//           </div>
//           <Link
//             to="/contact?subject=shredding_quote"
//             className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
//           >
//             Get a Quote
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
//               Hard Drive Shredding Services
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               Secure, compliant, and certified destruction of your sensitive data on any media.
//             </p>
//             <Link
//               to="/contact?subject=shredding_quote"
//               className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//             >
//               Request a Quote
//             </Link>
//           </div>

//           {/* Right Column (Image) */}
//           <motion.div 
//             className="mt-12 lg:mt-0"
//             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//           >
//             <img 
//               src="https://placehold.co/800x600/166534/f0fdf4?text=Secure+Shredding&font=inter"
//               alt="Hard Drive Shredding"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- "What is..." Section ---
// const MainContent = () => (
//   <FadeIn>
//     <article className="prose prose-lg max-w-none text-gray-700">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-6">What is Hard Drive Shredding?</h2>
//       <p>Hard drive shredding is the ultimate solution for permanent data destruction. Simply deleting files or reformatting a drive is not enough to prevent data recovery. Our industrial-grade shredders physically destroy the hard drive, grinding it into small, irrecoverable pieces. This process ensures your confidential information, financial records, and client data are 100% destroyed and can never be compromised, guaranteeing full compliance with data privacy laws like HIPAA, FACTA, and GDPR.</p>
//     </article>
//   </FadeIn>
// );

// // --- "What We Shred" Section ---
// const WhatWeShredSection = () => {
//   const items = [
//     { name: 'Hard Disk Drives (HDDs)', icon: HardDrive },
//     { name: 'Solid State Drives (SSDs)', icon: Disc },
//     { name: 'Backup Tapes (LTO, DLT)', icon: Database },
//     { name: 'USB Flash Drives', icon: Usb },
//     { name: 'Mobile Phones & Tablets', icon: Smartphone },
//     { name: 'CDs, DVDs, & Floppy Disks', icon: Disc },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-10">What We Shred</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item, index) => (
//           <FadeIn key={item.name} delay={index * 0.05}>
//             <motion.div
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="relative p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full overflow-hidden bg-white"
//             >
//               {/* Futuristic Glow Effect */}
//               <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
              
//               <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
//                 <item.icon className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
//             </motion.div>
//           </FadeIn>
//         ))}
//       </div>
//     </FadeIn>
//   );
// };

// // --- Our Shredding Process (Animated Timeline) ---
// const ProcessSection = () => {
//   const steps = [
//     { name: 'Pickup or Drop-Off', description: 'We arrange secure, chain-of-custody logistics or you can drop off at our facility.', icon: Truck },
//     { name: 'Inventory & Barcoding', description: 'Every drive is scanned and inventoried by serial number for tracking.', icon: FileSearch },
//     { name: 'Secure Destruction', description: 'Drives are physically destroyed in our industrial-grade shredders.', icon: Shield },
//     { name: 'Certified Recycling', description: 'All shredded material is 100% recycled in an eco-friendly manner.', icon: Globe },
//     { name: 'Certificate of Destruction', description: 'We issue a formal certificate verifying the destruction of every serial number.', icon: BadgeCheck },
//   ];

//   return (
//     <FadeIn>
//       <h2 className="text-3xl font-semibold text-gray-900 mb-12">Our Secure Shredding Process</h2>
//       <div className="relative pl-8">
//         {/* The vertical line */}
//         <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-200 rounded-full" style={{ left: '1.4rem' }}></div>
        
//         {steps.map((step, index) => (
//           <FadeIn key={index} delay={index * 0.1}>
//             <motion.div 
//               className="relative mb-12"
//               whileHover={{ scale: 1.03 }}
//             >
//               {/* Icon and Circle */}
//               <div className="absolute left-0 top-1 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-md" style={{ transform: 'translateX(-50%)' }}>
//                 <step.icon className="w-6 h-6 text-white" />
//               </div>
//               {/* Content */}
//               <div className="ml-12 pl-8 pt-2">
//                 <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
//                 <p className="text-gray-600 mt-2">{step.description}</p>
//               </div>
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
//           className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0 order-last"
//           whileHover={{ scale: 1.02 }}
//         >
//           <img 
//             src="https://placehold.co/800x600/f0fdf4/15803d?text=Data+Security+Benefits&font=inter"
//             alt="Benefits of Hard Drive Shredding"
//             className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
//           />
//         </motion.div>
//         <div className="mt-6 lg:mt-0">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">Benefits of Shredding</h2>
//           <p className="text-gray-700 mb-4">Physical destruction is the only 100% guaranteed way to ensure your data is irrecoverable.</p>
//           <ul className="space-y-4">
//             {[
//               { text: 'Guaranteed Data Security', icon: Lock },
//               { text: 'Full Legal & Regulatory Compliance (HIPAA, GDPR)', icon: Scale },
//               { text: 'Protect Your Brand & Reputation', icon: ShieldCheck },
//               { text: 'Peace of Mind with a Certificate of Destruction', icon: BadgeCheck },
//             ].map((item, index) => (
//               <FadeIn key={item.text} delay={index * 0.1}>
//                 <motion.li 
//                   className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md border border-gray-200 transition-all duration-300 hover:bg-white hover:border-green-300 hover:shadow-md"
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <span className="text-gray-700">{item.text}</span>
//                 </motion.li>
//               </FadeIn>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </article>
//   </FadeIn>
// );

// // --- Video Section (Additional Feature) ---
// const VideoSection = () => (
//   <FadeIn>
//     <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 relative">
//       <div className="md:flex md:items-center md:gap-8">
//         <div className="flex-1">
//           <h2 className="text-3xl font-semibold text-white mb-4">See Our Shredder in Action</h2>
//           <p className="text-gray-300 max-w-lg mb-6 md:mb-0">
//             Witness the power of our industrial-grade shredders. Watch this 1-minute clip to see how we turn hard drives into scrap metal, guaranteeing your data is gone forever.
//           </p>
//         </div>
//         <motion.div 
//           className="flex-shrink-0 mt-6 md:mt-0 relative cursor-pointer group"
//           whileHover={{ scale: 1.03 }}
//         >
//           <img 
//             src="https://placehold.co/600x400/166534/f0fdf4?text=Watch+Us+Shred&font=inter"
//             alt="Shredding Process Video"
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

// // --- Certificate Section ---
// const CertificateSection = () => (
//   <FadeIn>
//     <article className="prose prose-lg max-w-none text-gray-700">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-6">Certificate of Destruction</h2>
//       <p>Upon completion of the shredding process, we provide you with a formal Certificate of Destruction. This legal document serves as your auditable proof of compliance, listing the date of destruction and all unique serial numbers of the media destroyed. This is your ultimate peace of mind and a critical component of any data security policy.</p>
//       <motion.div 
//         className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0"
//         whileHover={{ scale: 1.02 }}
//       >
//         <img 
//           src="https://placehold.co/1000x500/f0fdf4/15803d?text=Certificate+of+Destruction&font=inter"
//           alt="Certificate of Destruction"
//           className="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
//         />
//       </motion.div>
//     </article>
//   </FadeIn>
// );


// // --- Main Page Component ---
// export const HardDriveShredding = () => {
//   return (
//     <div className="bg-white text-gray-900">
      
//       {/* Hero Section */}
//       <HeroSection />
      
//       {/* Main Content Area (with Sidebar) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8 space-y-16">
//             <MainContent />
//             <WhatWeShredSection />
//             <ProcessSection />
//             <BenefitsSection />
//             <VideoSection />
//             <CertificateSection />
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
  ArrowRight, Phone, Mail, Server, ShieldCheck, Wrench, Truck, HardHat, 
  RefreshCw, ServerOff, FileText, Users, Trash2, Globe, FileStack, Lightbulb, 
  Edit, Upload, Video
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { shreddingApi } from '../api/shreddingApi'; // Use the new API
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


// --- Re-usable Sticky Sidebar ---
// This remains STATIC as it's global navigation
const ServicesSidebar = () => {
  const otherServices = [
    { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
    { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileStack },
    { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
    { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
    { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
    { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Lightbulb },
    { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
    { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
    { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
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
            Ensure your data is gone for good. Contact us for a quote.
          </p>
          <div className="space-y-4 mb-6">
            <a href="tel:+123456789" className="flex items-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:shredding@ECycleGreen.com" className="flex items-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              <span className="group-hover:underline">shredding@ECycleGreen.com</span>
            </a>
          </div>
          <Link
            to="/contact?subject=shredding_quote"
            className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Get a Quote
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
              to="/contact?subject=shredding_quote"
              className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              Request a Quote
            </Link>
          </div>

          {/* Right Column (Image) */}
          <EditableCenteredImage
            isAdmin={isAdmin}
            src={data.image_url}
            alt={data.image_alt}
            onSave={onImageSave('hero', 'image')}
            className="mt-12 lg:mt-0 shadow-xl"
            imgClassName="rounded-lg"
          />
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- "What is..." Section (Refactored) ---
const IntroSection = ({ data, isAdmin, onTextSave }) => (
  <FadeIn>
    <article className="prose prose-lg max-w-none text-gray-700">
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('intro', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-6"
      />
      <EditableText
        as="p"
        isAdmin={isAdmin}
        value={data.paragraph}
        onSave={onTextSave('intro', 'paragraph')}
        useTextarea
      />
    </article>
  </FadeIn>
);

// --- "What We Shred" Section (Refactored) ---
const WhatWeShredSection = ({ data, isAdmin, onTextSave }) => {
  return (
    <FadeIn>
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('what_we_shred', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl h-full overflow-hidden bg-white group"
            >
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
              
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                <DynamicIcon name={item.icon_name} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};

// --- Our Shredding Process (Refactored) ---
const ProcessSection = ({ data, isAdmin, onTextSave }) => {
  return (
    <FadeIn>
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('process', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-12"
      />
      <div className="relative pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-200 rounded-full" style={{ left: '1.4rem' }}></div>
        
        {data.steps.map((step, index) => (
          <FadeIn key={step.id} delay={index * 0.1}>
            <motion.div 
              className="relative mb-12"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute left-0 top-1 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-md" style={{ transform: 'translateX(-50%)' }}>
                <DynamicIcon name={step.icon_name} className="w-6 h-6 text-white" />
              </div>
              <div className="ml-12 pl-8 pt-2">
                <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
};

// --- Benefits Section (Refactored) ---
const BenefitsSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <FadeIn>
    <article>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <EditableCenteredImage
          isAdmin={isAdmin}
          src={data.image_url}
          alt={data.image_alt}
          onSave={onImageSave('benefits', 'image')}
          className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0 order-last"
          imgClassName="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
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
            value={data.intro_paragraph}
            onSave={onTextSave('benefits', 'intro_paragraph')}
            className="text-gray-700 mb-4"
            useTextarea
          />
          <ul className="space-y-4">
            {data.benefit_items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <motion.li 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md border border-gray-200 transition-all duration-300 hover:bg-white hover:border-green-300 hover:shadow-md"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                    <DynamicIcon name={item.icon_name} className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </article>
  </FadeIn>
);

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
        <div className="flex-shrink-0 mt-6 md:mt-0 relative group">
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
        </div>
      </div>
    </div>
  </FadeIn>
);

// --- Certificate Section (Refactored) ---
const CertificateSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <FadeIn>
    <article className="prose prose-lg max-w-none text-gray-700">
      <EditableText
        as="h2"
        isAdmin={isAdmin}
        value={data.title}
        onSave={onTextSave('certificate', 'title')}
        className="text-3xl font-semibold text-gray-900 mb-6"
      />
      <EditableText
        as="p"
        isAdmin={isAdmin}
        value={data.paragraph}
        onSave={onTextSave('certificate', 'paragraph')}
        useTextarea
      />
      <EditableCenteredImage
        isAdmin={isAdmin}
        src={data.image_url}
        alt={data.image_alt}
        onSave={onImageSave('certificate', 'image')}
        className="overflow-hidden rounded-lg shadow-md mt-8 lg:mt-0"
        imgClassName="rounded-lg w-full object-cover aspect-video transition-transform duration-300"
      />
    </article>
  </FadeIn>
);


// --- Main Page Component ---
export const HardDriveShredding = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'what_we_shred', 'process', 'benefits'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await shreddingApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load shredding content', err);
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
      await shreddingApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await shreddingApi.updateFile(newFile, oldStoragePath);
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
      case 'what_we_shred':
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
      case 'benefits':
        return (
          <>
            <label>Benefit Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
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
          <div className="lg:col-span-8 space-y-16">
            <IntroSection 
              data={content.intro}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
            />
            
            <section className="relative">
              {isAdmin && <AdminEditButton onClick={() => setModal('what_we_shred')} text="Edit Items" />}
              <WhatWeShredSection 
                data={content.what_we_shred}
                isAdmin={isAdmin}
                onTextSave={handleTextSave}
              />
            </section>
            
            <section className="relative">
              {isAdmin && <AdminEditButton onClick={() => setModal('process')} text="Edit Steps" />}
              <ProcessSection 
                data={content.process}
                isAdmin={isAdmin}
                onTextSave={handleTextSave}
              />
            </section>
            
            <section className="relative">
              {isAdmin && <AdminEditButton onClick={() => setModal('benefits')} text="Edit Items" />}
              <BenefitsSection 
                data={content.benefits}
                isAdmin={isAdmin}
                onTextSave={handleTextSave}
                onImageSave={handleMediaSave}
              />
            </section>
            
            <VideoSection 
              data={content.video}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onMediaSave={handleMediaSave}
            />
            
            <CertificateSection 
              data={content.certificate}
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
      
      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            content[modal].items || content[modal].steps || content[modal].benefit_items
          }
          itemTitleKey={modal === 'benefits' ? 'text' : 'name'}
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            const key = content[modal].items ? 'items' : (content[modal].steps ? 'steps' : 'benefit_items');
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
