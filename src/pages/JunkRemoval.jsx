// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn'; // Using path from your file structure
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Phone, 
//   Truck, 
//   Recycle, 
//   Check, 
//   Star, 
//   Play,
//   // Icons for "What We Haul"
//   Briefcase,
//   Monitor,
//   Printer,
//   Server,
//   Trash2,
//   Tv,
//   Users
// } from 'lucide-react';

// // --- Hero Section ---
// const HeroSection = () => (
//   <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
//     <FadeIn>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Text) */}
//           <div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Fast & Reliable Junk Removal
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               We haul away your unwanted items quickly, safely, and responsibly. From old office furniture to e-waste, we handle it all.
//             </p>
//             <div className="flex">
//               <Link
//                 to="/contact?subject=junk_removal_quote"
//                 className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//               >
//                 Get a Free Quote
//               </Link>
//             </div>
//           </div>

//           {/* Right Column (Image) */}
//           <motion.div 
//             className="mt-12 lg:mt-0"
//             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//           >
//             <img 
//               src="https://placehold.co/800x600/15803d/f0fdf4?text=Junk+Removal&font=inter"
//               alt="Junk Removal"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- "How It Works" Timeline ---
// const HowItWorks = () => {
//   const steps = [
//     { name: "Call Us", description: "Contact us to schedule a free, no-obligation quote.", icon: Phone },
//     { name: "We Haul It", description: "Our professional team arrives and safely removes your items.", icon: Truck },
//     { name: "We Recycle It", description: "We sort and responsibly recycle everything we can.", icon: Recycle },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
//             How It Works
//           </h2>
//         </FadeIn>
//         <div className="relative">
//           {/* The connecting line */}
//           <div className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-0.5 bg-green-200 -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

//           <div className="relative flex flex-col md:flex-row justify-between gap-12">
//             {steps.map((step, index) => (
//               <FadeIn key={step.name} delay={index * 0.15} className="flex-1">
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center z-10 h-full"
//                 >
//                   <div className="relative w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
//                     <step.icon className="w-10 h-10" />
//                     {/* Step Number Badge */}
//                     <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold text-sm rounded-full border-4 border-white">
//                       {index + 1}
//                     </span>
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.name}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </motion.div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- "What We Haul" Grid ---
// const WhatWeHaul = () => {
//   const items = [
//     { name: "Office Furniture", icon: Briefcase },
//     { name: "E-Waste", icon: Monitor },
//     { name: "Computers & Laptops", icon: Server },
//     { name: "Printers & Copiers", icon: Printer },
//     { name: "General Junk", icon: Trash2 },
//     { name: "Old Appliances", icon: Tv },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//             What We Haul
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {items.map((item, index) => (
//             <FadeIn key={item.name} delay={index * 0.05}>
//               <motion.div
//                 whileHover={{ scale: 1.03, shadow: '0 25px 50px -12px rgba(22, 163, 74, 0.25)' }}
//                 className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white"
//               >
//                 <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900">{item.name}</h3>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Video Section ---
// const VideoSection = () => (
//   <section className="py-16 lg:py-24 bg-gray-900">
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//       <FadeIn>
//         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//           See Our Team in Action
//         </h2>
//         <motion.div 
//           className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
//           whileHover={{ scale: 1.02 }}
//         >
//           <img 
//             src="https://placehold.co/1280x720/166534/f0fdf4?text=Video+Placeholder&font=inter" 
//             alt="Junk removal in action" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//             <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
//               <Play className="w-12 h-12 text-white fill-white" />
//             </div>
//           </div>
//         </motion.div>
//       </FadeIn>
//     </div>
//   </section>
// );

// // --- "Why Choose Us" Section ---
// const WhyChooseUs = () => {
//   const benefits = [
//     { name: "Fast & Reliable Service", description: "We show up on time and get the job done efficiently." },
//     { name: "Eco-Friendly Disposal", description: "We prioritize recycling and donation to minimize landfill waste." },
//     { name: "Upfront, Honest Pricing", description: "No hidden fees. You'll know the cost before we start." },
//     { name: "Insured & Professional", description: "Our team is fully insured and trained for safe removal." }
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Image) */}
//           <FadeIn>
//             <motion.img 
//               src="https://placehold.co/800x600/15803d/f0fdf4?text=Why+Choose+Us?&font=inter"
//               alt="Our professional team"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//               whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//             />
//           </FadeIn>
          
//           {/* Right Column (Benefits) */}
//           <FadeIn>
//             <div className="mt-12 lg:mt-0">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//                 Why Choose Us?
//               </h2>
//               <ul className="space-y-6">
//                 {benefits.map((benefit) => (
//                   <li key={benefit.name} className="flex items-start">
//                     <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
//                       <Check className="w-5 h-5" />
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="text-xl font-semibold text-gray-900">{benefit.name}</h3>
//                       <p className="text-gray-600 mt-1">{benefit.description}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Main Page Component ---
// export const JunkRemoval = () => {
//   // We'll use the two-column layout from previous pages.
//   // For simplicity, I'm defining the sidebar here. In a real app, this would be a shared component.
  
//   const otherServices = [
//     { name: 'IT Asset Disposition (ITAD)', path: '/services/itad' },
//     { name: 'Data Destruction', path: '/services/data-destruction' },
//     { name: 'Electronics Recycling', path: '/services/recycling' },
//     { name: 'Equipment Buyback', path: '/services/equipment-buyback' },
//     { name: 'Equipment Decommission', path: '/services/equipment-decommission' },
//     { name: 'IT Asset Management', path: '/services/it-asset-management' },
//     { name: 'Recycling Consultation', path: '/services/recycling-consultation' },
//     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box' },
//   ];

//   const StickySidebar = () => (
//     <div className="sticky top-28 space-y-8">
//       {/* Other Services */}
//       <FadeIn delay={0.2}>
//         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//           <h3 className="text-xl font-semibold text-gray-900 mb-5">Not The Service You Are looking for?</h3>
//           <ul className="space-y-1">
//             {otherServices.map(service => (
//               <li key={service.name}>
//                 <Link 
//                   to={service.path}
//                   className="group flex items-center justify-between p-3 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-all"
//                 >
//                   <span>{service.name}</span>
//                   <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </FadeIn>
      
//       {/* Get in Touch */}
//       <FadeIn delay={0.3}>
//         <div className="bg-green-600 text-white p-8 rounded-lg text-center shadow-lg">
//           <Users className="w-12 h-12 mx-auto mb-4" />
//           <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
//           <p className="mb-6">Have questions? We're here to help you with all your recycling needs.</p>
//           <Link
//             to="/contact"
//             className="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded-md transition-all transform hover:scale-105"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </FadeIn>
//     </div>
//   );

//   return (
//     <div className="bg-white">
//       <HeroSection />
      
//       {/* Main Content Area with Sidebar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="lg:grid lg:grid-cols-3 lg:gap-12">
//           {/* Main Content (Left) */}
//           <main className="lg:col-span-2 space-y-16 lg:space-y-24">
//             <HowItWorks />
//             <WhatWeHaul />
//             <VideoSection />
//             <WhyChooseUs />

//             {/* Eco-Friendly Section */}
//             <section>
//               <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//                 <FadeIn>
//                   <div>
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                       Eco-Friendly Junk Removal
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-4">
//                       We're not just a junk removal company; we're a recycling company. We're committed to diverting as much waste from landfills as possible.
//                     </p>
//                     <p className="text-lg text-gray-600 mb-8">
//                       Our process involves careful sorting to identify items that can be recycled, donated, or repurposed. We partner with certified recycling facilities to ensure your e-waste and other materials are handled according to the highest environmental standards.
//                     </p>
//                   </div>
//                 </FadeIn>
//                 <FadeIn delay={0.1}>
//                   <motion.img 
//                     src="https://placehold.co/800x600/15803d/f0fdf4?text=Eco-Friendly&font=inter"
//                     alt="Eco-friendly recycling"
//                     className="rounded-lg shadow-xl w-full h-full object-cover mt-12 lg:mt-0"
//                     whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//                   />
//                 </FadeIn>
//               </div>
//             </section>
//           </main>
          
//           {/* Sidebar (Right) */}
//           <aside className="mt-16 lg:mt-0">
//             <StickySidebar />
//           </aside>
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
  ArrowRight, Phone, Truck, Recycle, Check, Play, Users, Edit, Upload, Video,Server,ShieldCheck,Globe,RefreshCw,ServerOff,FileText,HardHat
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { junkRemovalApi } from '../api/junkRemovalApi'; // Use the new API
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


// --- Hero Section (Refactored) ---
const HeroSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={data.title}
              onSave={onTextSave('hero', 'title')}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={data.subtitle}
              onSave={onTextSave('hero', 'subtitle')}
              className="text-xl text-gray-600 max-w-2xl mb-10"
              useTextarea
            />
            <div className="flex">
              <Link
                to="/contact?subject=junk_removal_quote"
                className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>
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

// --- "How It Works" Timeline (Refactored) ---
const HowItWorks = ({ data, isAdmin, onTextSave, onListEdit }) => {
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
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
          />
        </FadeIn>
        <div className="relative">
          <div className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-0.5 bg-green-200 -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            {data.steps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.15} className="flex-1">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center z-10 h-full"
                >
                  <div className="relative w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <DynamicIcon name={step.icon_name} className="w-10 h-10" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold text-sm rounded-full border-4 border-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.name}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- "What We Haul" Grid (Refactored) ---
const WhatWeHaul = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('what_we_haul')} text="Edit Items" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('what_we_haul', 'title')}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03, shadow: '0 25px 50px -12px rgba(22, 163, 74, 0.25)' }}
                className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white"
              >
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <DynamicIcon name={item.icon_name} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{item.name}</h3>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Video Section (Refactored) ---
const VideoSection = ({ data, isAdmin, onTextSave, onMediaSave }) => (
  <section className="py-16 lg:py-24 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title}
          onSave={onTextSave('video', 'title')}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        />
        <motion.div 
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.02 }}
        >
          <video
            key={data.video_url} // Force re-render if URL changes
            src={data.video_url}
            controls
            className="w-full h-full object-cover bg-black"
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
      </FadeIn>
    </div>
  </section>
);

// --- "Why Choose Us" Section (Refactored) ---
const WhyChooseUs = ({ data, isAdmin, onTextSave, onImageSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('why_choose_us')} text="Edit Benefits" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Image) */}
          <FadeIn>
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={data.image_url}
              alt={data.image_alt}
              onSave={onImageSave('why_choose_us', 'image')}
              className="rounded-lg shadow-xl w-full h-full object-cover"
              imgClassName="rounded-lg"
            />
          </FadeIn>
          
          {/* Right Column (Benefits) */}
          <FadeIn>
            <div className="mt-12 lg:mt-0">
              <EditableText
                as="h2"
                isAdmin={isAdmin}
                value={data.title}
                onSave={onTextSave('why_choose_us', 'title')}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              />
              <ul className="space-y-6">
                {data.benefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.name}</h3>
                      <p className="text-gray-600 mt-1">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Eco-Friendly Section (Refactored) ---
const EcoFriendlySection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <section>
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <FadeIn>
        <div>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('eco_friendly', 'title')}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.paragraph1}
            onSave={onTextSave('eco_friendly', 'paragraph1')}
            className="text-lg text-gray-600 mb-4"
            useTextarea
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.paragraph2}
            onSave={onTextSave('eco_friendly', 'paragraph2')}
            className="text-lg text-gray-600 mb-8"
            useTextarea
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <motion.div
          className="mt-12 lg:mt-0"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <EditableCenteredImage
            isAdmin={isAdmin}
            src={data.image_url}
            alt={data.image_alt}
            onSave={onImageSave('eco_friendly', 'image')}
            className="rounded-lg shadow-xl w-full h-full object-cover"
            imgClassName="rounded-lg"
          />
        </motion.div>
      </FadeIn>
    </div>
  </section>
);

// --- Main Page Component ---
export const JunkRemoval = () => {
  const { isAdmin } = useAuth(); // UNCOMMENT THIS
  //const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'how_it_works', 'what_we_haul', 'why_choose_us'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await junkRemovalApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load junk removal content', err);
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
      await junkRemovalApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await junkRemovalApi.updateFile(newFile, oldStoragePath);
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
      case 'how_it_works':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Step Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      case 'what_we_haul':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Item Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
          </>
        );
      case 'why_choose_us':
        return (
          <>
            <label>Benefit Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
          </>
        );
      default: return null;
    }
  };

  // --- FIX: This is the correct StickySidebar component ---
  const StickySidebar = () => {
    const otherServices = [
      { name: 'IT Asset Disposition (ITAD)', path: '/services/itad', icon: Server },
      { name: 'Data Destruction', path: '/services/data-destruction', icon: ShieldCheck },
      { name: 'Electronics Recycling', path: '/services/recycling', icon: Globe },
      { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
      { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
      { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
      { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
      { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: HardHat },
    ];

    // Map icons to components (You might need to import more)
    const iconMap = {
      Server, ShieldCheck, Globe, RefreshCw, ServerOff, FileText, Users, HardHat
    };

    return (
      <div className="sticky top-28 space-y-8">
        {/* Other Services */}
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-5">Not The Service You Are looking for?</h3>
            <ul className="space-y-1">
              {otherServices.map(service => {
                const Icon = iconMap[service.icon.name] || service.icon; // Handle icon mapping
                return (
                  <li key={service.name}>
                    <Link 
                      to={service.path}
                      className="group flex items-center justify-between p-3 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                        {service.name}
                      </span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>
        
        {/* Get in Touch */}
        <FadeIn delay={0.3}>
          <div className="bg-green-600 text-white p-8 rounded-lg text-center shadow-lg">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
            <p className="mb-6">Have questions? We're here to help you with all your recycling needs.</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded-md transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  };

  if (isLoading) {
    return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Loading...</div>;
  }
  
  if (!content) {
    return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Error loading content.</div>;
  }

  return (
    <div className="bg-white">
      <HeroSection 
        data={content.hero}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave}
      />
      
      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content (Left) */}
          <main className="lg:col-span-2 space-y-16 lg:space-y-24">
            <HowItWorks 
              data={content.how_it_works}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onListEdit={setModal}
            />
            <WhatWeHaul 
              data={content.what_we_haul}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onListEdit={setModal}
            />
            <VideoSection 
              data={content.video}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onMediaSave={handleMediaSave}
            />
            <WhyChooseUs 
              data={content.why_choose_us}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
              onListEdit={setModal}
            />
            <EcoFriendlySection 
              data={content.eco_friendly}
              isAdmin={isAdmin}
              onTextSave={handleTextSave}
              onImageSave={handleMediaSave}
            />
          </main>
          
          {/* Sidebar (Right) */}
          <aside className="mt-16 lg:mt-0">
            <StickySidebar />
          </aside>
        </div>
      </div>

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'how_it_works' ? content.how_it_works.steps :
            modal === 'what_we_haul' ? content.what_we_haul.items :
            content.why_choose_us.benefits
          }
          itemTitleKey="name"
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'how_it_works') {
              listKey = 'steps';
            } else if (modal === 'what_we_haul') {
              listKey = 'items';
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