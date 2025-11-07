
// // import React from 'react';
// // import { MonitorCheck, Leaf, DollarSign } from 'lucide-react';
// // import { FadeIn } from '../components/common/FadeIn'; // Corrected path
// // // import { BrandDisplay } from '../components/BrandDisplay'; // Using your original component
// // import { CallToAction } from '../components/common/CallToAction'; // Corrected path
// // import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection'; // NEW
// // import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll'; // NEW
// // import BrandDisplay from '../components/laptops/BrandDisplay';
// // import { FlyerSection } from '../components/laptops/FlyerSection';
// // // This data structure matches your original BrandDisplay.jsx component's props
// // const brandData = [
// //   {
// //     brandName: "HP",
// //     slogan: "Performance. Reimagined.",
// //     description: "Experience robust performance and sleek design with our range of BSI Certified HP laptops, perfect for business and creativity.",
// //     imageUrl: "https://placehold.co/1000x600/004080/FFFFFF?text=HP+Laptop&font=inter",
// //     gradientFrom: "#0078D4", // HP Blue
// //     gradientTo: "#004C9A",
// //     link: "/laptops/hp"
// //   },
// //   {
// //     brandName: "DELL",
// //     slogan: "Innovation That Inspires.",
// //     description: "Discover reliable and powerful Dell laptops, from versatile Inspiron models to high-performance XPS, all rigorously tested.",
// //     imageUrl: "https://placehold.co/1000x600/0080C0/FFFFFF?text=Dell+Laptop&font=inter",
// //     gradientFrom: "#0076CE", // Dell Blue
// //     gradientTo: "#004E8B",
// //     link: "/laptops/dell"
// //   },
// //   {
// //     brandName: "LENOVO",
// //     slogan: "Smarter Technology for All.",
// //     description: "From the iconic ThinkPad to the flexible Yoga, our refurbished Lenovo laptops offer legendary reliability and cutting-edge features.",
// //     imageUrl: "https://placehold.co/1000x600/E04040/FFFFFF?text=Lenovo+Laptop&font=inter",
// //     gradientFrom: "#E2231A", // Lenovo Red
// //     gradientTo: "#A01B14",
// //     link: "/laptops/lenovo"
// //   }
// // ];

// // export const Laptop = () => { // Renamed to Laptops to match AppRouter.jsx
// //   return (
// //     <div className="bg-black text-white overflow-x-hidden">
// //       {/* Hero Section (Already dark, looks good) */}
// //       <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6">
// //         <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://placehold.co/1920x1080/000000/FFFFFF?text=Subtle+Pattern&font=inter')] bg-repeat"></div>
// //         <div className="relative z-10 max-w-4xl mx-auto">
// //           <FadeIn>
// //             <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
// //               Discover Your Perfect Refurbished Laptop
// //             </h1>
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <p className="text-lg md:text-xl mb-8 text-gray-200">
// //               High-performance, eco-friendly, and ECycleGreen Certified quality you can trust.
// //             </p>
// //           </FadeIn>
// //           <FadeIn delay={0.4}>
// //             <a
// //               href="#explore" // Changed to an anchor link
// //               className="inline-block bg-white text-blue-800 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
// //             >
// //               Explore Our Quality
// //             </a>
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* ECycleGreen Certified Standard Section (Dark Theme) */}
// //       <section id="explore" className="py-16 md:py-24 bg-gray-900">
// //         <div className="container mx-auto px-6 max-w-6xl">
// //           <FadeIn>
// //             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
// //               The ECycleGreen Certified Standard
// //             </h2>
// //           </FadeIn>
// //           <div className="grid md:grid-cols-3 gap-10">
// //             <FadeIn delay={0.1}>
// //               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
// //                 <MonitorCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
// //                 <h3 className="text-xl font-semibold mb-3 text-white">Rigorous Quality Checks</h3>
// //                 <p className="text-gray-300">
// //                   Every laptop undergoes a comprehensive 30-point inspection and restoration process to ensure peak performance.
// //                 </p>
// //               </div>
// //             </FadeIn>
// //             <FadeIn delay={0.2}>
// //               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
// //                 <Leaf className="w-12 h-12 text-teal-500 mx-auto mb-4" />
// //                 <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Choice</h3>
// //                 <p className="text-gray-300">
// //                   Choose refurbished and significantly reduce electronic waste, contributing to a healthier planet.
// //                 </p>
// //               </div>
// //             </FadeIn>
// //             <FadeIn delay={0.3}>
// //               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
// //                 <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
// //                 <h3 className="text-xl font-semibold mb-3 text-white">Unbeatable Value</h3>
// //                 <p className="text-gray-300">
// //                   Get premium features and performance at a fraction of the cost of new, without compromise.
// //                 </p>
// //               </div>
// //             </FadeIn>
// //           </div>
// //         </div>
// //       </section>

// //       {/* NEW: Video Section */}
// //       <section className="py-16 md:py-24 bg-black">
// //         <LaptopVideoSection />
// //       </section>
      
// //       {/* NEW: Continuous Laptop Scroll (Design Section) */}
// //       <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           <FadeIn>
// //             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
// //               See Our Quality in Action
// //             </h2>
// //           </FadeIn>
// //           <ContinuousLaptopScroll />
// //         </div>
// //       </section>

// //       <section className="py-16 md:py-24 bg-black">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           <FlyerSection />
// //         </div>
// //       </section>

// //       {/* Featured Brands Section (Dark Theme) */}
// //       <section className="py-16 md:py-24 bg-black">
// //         <div className="container mx-auto px-6 max-w-6xl">
// //           <FadeIn>
// //             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
// //               Explore Top Brands
// //             </h2>
// //           </FadeIn>
// //           <div className="grid grid-cols-1 gap-12">
// //             {brandData.map((brand, index) => (
// //               <FadeIn key={index} delay={index * 0.1}>
// //                 <BrandDisplay
// //                   brandName={brand.brandName}
// //                   slogan={brand.slogan}
// //                   description={brand.description}
// //                   imageUrl={brand.imageUrl}
// //                   gradientFrom={brand.gradientFrom}
// //                   gradientTo={brand.gradientTo}
// //                   link={brand.link}
// //                 />
// //               </FadeIn>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action Section (Existing component - already dark) */}
// //       <CallToAction
// //         title="Ready to Upgrade Your Tech?"
// //         text="Find the perfect refurbished laptop that fits your needs and budget, backed by our ECycleGreen guarantee."
// //         buttonText="Shop All Laptops"
// //         buttonLink="/contact" // Changed to contact, as shop isn't built
// //       />
// //     </div>
// //   );
// // };

// //  export default Laptop; 
// // // // Ensure your file exports Laptops

// import React from 'react';
// import { MonitorCheck, Leaf, DollarSign, GraduationCap, ShieldCheck, Recycle, ArrowRight } from 'lucide-react';
// import { FadeIn } from '../components/common/FadeIn';
// import { CountUp } from '../components/common/CountUp';
// import { CallToAction } from '../components/common/CallToAction';
// import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection';
// import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll';
// import BrandDisplay from '../components/laptops/BrandDisplay';
// import { FlyerSection } from '../components/laptops/FlyerSection';
// // import { FAQSection } from '../components/laptops/FAQSection'; // New component
// import { motion } from 'framer-motion';
// import { FAQSection } from './FAQSection';
// // --- Reusable Feature Section (Adapted from Education.jsx) ---
// const FeatureSection = ({ title, subtitle, imageUrl, imageAlt, features, reverse = false }) => {
//   return (
//     <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
//       {/* Image Column */}
//       <div className="w-full lg:w-1/2">
//         <FadeIn>
//           <img
//             src={imageUrl}
//             alt={imageAlt}
//             className="w-full h-auto rounded-lg shadow-xl object-cover aspect-video"
//           />
//         </FadeIn>
//       </div>
      
//       {/* Content Column */}
//       <div className="w-full lg:w-1/2">
//         <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
//           <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
//           <div className="space-y-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
//                   <feature.icon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   );
// };


// // --- The Main Laptops Page Component ---
// export const Laptop = () => {
//   // Data for the BrandDisplay components
//   const brandData = [
//     {
//       name: "HP",
//       slogan: "Performance. Reimagined.",
//       description: "Experience robust performance and sleek design with our range of BSI Certified HP laptops, perfect for business and creativity.",
//       logo: "https://placehold.co/150x50/f0f0f0/333333?text=HP+Logo&font=inter",
//       image: "https://placehold.co/1000x600/e0e0e0/555555?text=HP+Laptop&font=inter",
//     },
//     {
//       name: "DELL",
//       slogan: "Innovation That Inspires.",
//       description: "Discover reliable and powerful Dell laptops, from versatile Inspiron models to high-performance XPS, all rigorously tested.",
//       logo: "https://placehold.co/150x50/f0f0f0/333333?text=Dell+Logo&font=inter",
//       image: "https://placehold.co/1000x600/e0e0e0/555555?text=Dell+Laptop&font=inter",
//     },
//     {
//       name: "Lenovo",
//       slogan: "Smarter Technology For All.",
//       description: "From the workhorse ThinkPad to the flexible Yoga, our refurbished Lenovo laptops offer unmatched versatility and reliability.",
//       logo: "https://placehold.co/150x50/f0f0f0/333333?text=Lenovo+Logo&font=inter",
//       image: "https://placehold.co/1000x600/e0e0e0/555555?text=Lenovo+Laptop&font=inter",
//     },
//   ];

//   // Data for the "For Education" section (from Education.jsx)
//   const educationFeatures = [
//     {
//       icon: DollarSign,
//       title: "Maximize Your Budget",
//       desc: "Get high-performance devices for a fraction of the cost, allowing you to equip more students for less."
//     },
//     {
//       icon: ShieldCheck,
//       title: "Certified Reliability",
//       desc: "Our BSI Kitemark certification guarantees every laptop meets the highest standards, ensuring classroom readiness."
//     },
//     {
//       icon: Recycle,
//       title: "Promote Sustainability",
//       desc: "Teach and practice environmental responsibility by choosing refurbished technology and reducing e-waste."
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
      
//       {/* --- 1. New Hero Section --- */}
//       <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gray-50">
//         <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//           {/* Text Content */}
//           <div className="relative z-10">
//             <FadeIn>
//               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
//                 Premium Laptops.
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
//                   Sustainably Refurbished.
//                 </span>
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-600 max-w-lg mb-10">
//                 Experience world-class quality and performance with our
//                 BSI Kitemark certified refurbished laptops.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <motion.button
//                   className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Shop All Laptops
//                 </motion.button>
//                 <motion.button
//                   className="px-8 py-3 bg-white text-gray-700 text-lg font-semibold rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   For Education
//                 </motion.button>
//               </div>
//             </FadeIn>
//           </div>

//           {/* Image Content (Placeholder) */}
//           <div className="relative h-64 lg:h-full w-full">
//             <FadeIn delay={0.2}>
//               <img 
//                 src="https://placehold.co/1000x800/e0e0e0/555555?text=Hero+Laptop+Image&font=inter" 
//                 alt="Refurbished Laptops"
//                 className="w-full h-full object-contain"
//               />
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* --- 2. New "Why ECycleGreen?" Section (New Feature) --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
//               Why <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">ECycleGreen?</span>
//             </h2>
//             <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-20">
//               We don't just sell refurbished laptops. We remanufacture them to a
//               standard that is indistinguishable from new.
//             </p>
//           </FadeIn>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <FadeIn delay={0}>
//               <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <MonitorCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">BSI Kitemark Certified</h3>
//                 <p className="text-gray-600">
//                   The only company in the world with a BSI Kitemark for
//                   remanufactured laptops, guaranteeing quality.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainable Choice</h3>
//                 <p className="text-gray-600">
//                   Choosing refurbished extends the life of technology and
//                   prevents e-waste, supporting a circular economy.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.4}>
//               <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Unbeatable Value</h3>
//                 <p className="text-gray-600">
//                   Get the performance and reliability of a new device for a
//                   fraction of the price, complete with a warranty.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>
      
//       {/* --- 3. Flyer Section (From Laptop.jsx) --- */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <FlyerSection />
//         </div>
//       </section>

//       {/* --- 4. Video Section (From Laptop.jsx) --- */}
//       <section className="py-24 bg-white">
//         <LaptopVideoSection />
//       </section>

//       {/* --- 5. Continuous Scroll Section (From Laptop.jsx) --- */}
//       <section className="py-24 bg-gray-50 overflow-hidden">
//         <ContinuousLaptopScroll />
//       </section>

//       {/* --- 6. Brand Display Section (From Laptop.jsx) --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-gray-900">
//               Explore <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Top Brands</span>
//             </h2>
//           </FadeIn>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {brandData.map((brand, index) => (
//               <FadeIn key={index} delay={index * 0.1}>
//                 <BrandDisplay
//                   name={brand.name}
//                   slogan={brand.slogan}
//                   description={brand.description}
//                   logo={brand.logo}
//                   image={brand.image}
//                 />
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- 7. "For Education" Section (From Education.jsx) --- */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <FeatureSection
//             title="Empower Your Classroom"
//             subtitle="Discover why schools and universities trust ECycleGreen for their technology needs."
//             imageUrl="https://placehold.co/1200x800/e0e0e0/555555?text=Students+Using+Laptops&font=inter"
//             imageAlt="Students in a classroom"
//             features={educationFeatures}
//             reverse={false}
//           />
//         </div>
//       </section>

//       {/* --- 8. Case Study / Testimonial (From Education.jsx) --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-2xl p-12 md:p-20 overflow-hidden">
//             <FadeIn>
//               <div className="lg:w-3/4">
//                 <GraduationCap className="w-16 h-16 text-white/70 mb-6" />
//                 <blockquote className="text-2xl md:text-4xl font-light italic border-l-4 border-white/50 pl-8 py-4">
//                   "ECycleGreen didn't just sell us laptops; they provided a
//                   sustainable solution that saved our budget and empowered our
//                   students."
//                 </blockquote>
//                 <p className="text-xl font-semibold text-white mt-8">- Head of IT, Westview Academy</p>
                
//                 {/* Stats */}
//                 <div className="flex flex-wrap gap-12 mt-12">
//                   <div>
//                     <div className="text-5xl font-bold text-white"><CountUp end={500} suffix="+" /></div>
//                     <div className="text-lg text-white/80">Laptops Deployed</div>
//                   </div>
//                   <div>
//                     <div className="text-5xl font-bold text-white"><CountUp end={20} suffix="%" /></div>
//                     <div className="text-lg text-white/80">Budget Saved</div>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* --- 9. FAQ Section (From Education.jsx) --- */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-3xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
//               Frequently Asked <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Questions</span>
//             </h2>
//           </FadeIn>
//           <FadeIn>
//             {/* This new component is defined in file 6 */}
//             <FAQSection />
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 10. Final Call to Action --- */}
//       <CallToAction
//         title="Ready to Upgrade Your Tech?"
//         text="Find the perfect refurbished laptop that fits your needs and budget, backed by our ECycleGreen guarantee."
//         buttonText="Shop All Laptops"
//         buttonLink="/contact"
//       />
//     </div>
//   );
// };

// export default Laptop;



/* src/pages/Laptop.jsx */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Child Components ---
import { FadeIn } from '../components/common/FadeIn.jsx';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';
import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection';
import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll';
import BrandDisplay from '../components/laptops/BrandDisplay';
import { FlyerSection } from '../components/laptops/FlyerSection';
import { FAQSection } from './FAQSection'; // Assuming path
import { 
  MonitorCheck, Leaf, DollarSign, GraduationCap, ShieldCheck, 
  Recycle, ArrowRight, Edit, Upload
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { laptopApi } from '../api/laptopApi'; // Use the new API
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS (Scoped to this file) ===

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
const EditableMediaButtonInternal = ({ isAdmin, onSave, label, accept, className = '', icon }) => {
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
const EditableCenteredImageInternal = ({ isAdmin, src, alt, onSave, className = '', imgClassName = '' }) => {
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
          <EditableMediaButtonInternal
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


// --- Reusable Feature Section (Refactored) ---
const FeatureSection = ({ data, isAdmin, onTextSave, onImageSave, onListEdit, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <EditableCenteredImageInternal
            isAdmin={isAdmin}
            src={data.image_url}
            alt={data.image_alt}
            onSave={onImageSave('education', 'image')}
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            imgClassName="aspect-video"
          />
        </FadeIn>
      </div>
      
      {/* Content Column */}
      <div className="w-full lg:w-1/2 relative">
        {isAdmin && <AdminEditButton onClick={() => onListEdit('education_features')} text="Edit Features" />}
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('education', 'title')}
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={data.subtitle}
            onSave={onTextSave('education', 'subtitle')}
            className="text-xl text-gray-600 mb-8"
            useTextarea
          />
          <div className="space-y-6">
            {data.features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                  <DynamicIcon name={feature.icon_name} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};


// --- The Main Laptops Page Component ---
export const Laptop = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); 

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await laptopApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load laptop content', err);
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
      await laptopApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await laptopApi.updateFile(newFile, oldStoragePath);
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
      case 'why_us_features':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
          </>
        );
      case 'flyer_section_flyers':
        return (
          <>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Subtitle: <input type="text" className="w-full p-1 border rounded" value={item.subtitle || ''} onChange={e => setItem({...item, subtitle: e.target.value})} /></label>
            <label>Image: <input type="file" className="w-full p-1 border rounded file-input" data-key="image" /></label>
            {item.image_url && <img src={item.image_url} alt="Preview" className="w-32 h-auto mt-2 rounded" />}
            <label>Button Text: <input type="text" className="w-full p-1 border rounded" value={item.button_text || ''} onChange={e => setItem({...item, button_text: e.target.value})} /></label>
            <label>Button Link: <input type="text" className="w-full p-1 border rounded" value={item.button_link || ''} onChange={e => setItem({...item, button_link: e.target.value})} /></label>
          </>
        );
      case 'scroll_section_row1':
      case 'scroll_section_row2':
        return (
          <>
            <label>Image: <input type="file" className="w-full p-1 border rounded file-input" data-key="image" /></label>
            {item.image_url && <img src={item.image_url} alt="Preview" className="w-32 h-auto mt-2 rounded" />}
          </>
        );
      case 'brands_items':
        return (
          <>
            <label>Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Slogan: <input type="text" className="w-full p-1 border rounded" value={item.slogan || ''} onChange={e => setItem({...item, slogan: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
            <label>Logo: <input type="file" className="w-full p-1 border rounded file-input" data-key="logo" /></label>
            {item.logo_url && <img src={item.logo_url} alt="Logo Preview" className="w-32 h-auto mt-2 rounded" />}
            <label>Image: <input type="file" className="w-full p-1 border rounded file-input" data-key="image" /></label>
            {item.image_url && <img src={item.image_url} alt="Image Preview" className="w-32 h-auto mt-2 rounded" />}
          </>
        );
      case 'education_features':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
          </>
        );
      case 'testimonial_stats':
        return (
          <>
            <h4 className="font-semibold">Stat 1</h4>
            <label>Value: <input type="number" className="w-full p-1 border rounded" value={item.stat1.value || 0} onChange={e => setItem({...item, stat1: {...item.stat1, value: parseInt(e.target.value)}})} /></label>
            <label>Suffix: <input type="text" className="w-full p-1 border rounded" value={item.stat1.suffix || ''} onChange={e => setItem({...item, stat1: {...item.stat1, suffix: e.target.value}})} /></label>
            <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.stat1.label || ''} onChange={e => setItem({...item, stat1: {...item.stat1, label: e.target.value}})} /></label>
            <hr className="my-4" />
            <h4 className="font-semibold">Stat 2</h4>
            <label>Value: <input type="number" className="w-full p-1 border rounded" value={item.stat2.value || 0} onChange={e => setItem({...item, stat2: {...item.stat2, value: parseInt(e.target.value)}})} /></label>
            <label>Suffix: <input type="text" className="w-full p-1 border rounded" value={item.stat2.suffix || ''} onChange={e => setItem({...item, stat2: {...item.stat2, suffix: e.target.value}})} /></label>
            <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.stat2.label || ''} onChange={e => setItem({...item, stat2: {...item.stat2, label: e.target.value}})} /></label>
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
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* --- 1. New Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="relative z-10">
            <FadeIn>
              <EditableText
                as="h1"
                isAdmin={isAdmin}
                value={content.hero.title_line1}
                onSave={handleTextSave('hero', 'title_line1')}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900"
              >
                {content.hero.title_line1}
                <br />
                <EditableText
                  as="span"
                  isAdmin={isAdmin}
                  value={content.hero.title_line2_gradient}
                  onSave={handleTextSave('hero', 'title_line2_gradient')}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
                />
              </EditableText>
              <EditableText
                as="p"
                isAdmin={isAdmin}
                value={content.hero.subtitle}
                onSave={handleTextSave('hero', 'subtitle')}
                className="text-xl md:text-2xl text-gray-600 max-w-lg mb-10"
                useTextarea
              />
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <EditableText
                    as="span"
                    isAdmin={isAdmin}
                    value={content.hero.button1_text}
                    onSave={handleTextSave('hero', 'button1_text')}
                  />
                </motion.button>
                <motion.button
                  className="px-8 py-3 bg-white text-gray-700 text-lg font-semibold rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <EditableText
                    as="span"
                    isAdmin={isAdmin}
                    value={content.hero.button2_text}
                    onSave={handleTextSave('hero', 'button2_text')}
                  />
                </motion.button>
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="relative h-64 lg:h-full w-full">
            <FadeIn delay={0.2}>
              <EditableCenteredImageInternal
                isAdmin={isAdmin}
                src={content.hero.image_url}
                alt={content.hero.image_alt}
                onSave={handleMediaSave('hero', 'image')}
                className="w-full h-full"
                imgClassName="w-full h-full object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 2. New "Why ECycleGreen?" Section --- */}
      <section className="py-24 bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('why_us_features')} text="Edit Features" />}
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.why_us.title_prefix}
              onSave={handleTextSave('why_us', 'title_prefix')}
              className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900"
            >
              {content.why_us.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.why_us.title_suffix_gradient}
                onSave={handleTextSave('why_us', 'title_suffix_gradient')}
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={content.why_us.subtitle}
              onSave={handleTextSave('why_us', 'subtitle')}
              className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-20"
              useTextarea
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.why_us.features.map((feature, index) => (
              <FadeIn key={feature.id} delay={index * 0.2}>
                <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <DynamicIcon name={feature.icon_name} className="w-16 h-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- 3. Flyer Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FlyerSection 
            data={content.flyer_section}
            isAdmin={isAdmin}
            onTextSave={handleTextSave}
            onListEdit={setModal}
          />
        </div>
      </section>

      {/* --- 4. Video Section --- */}
      <section className="py-24 bg-white">
        <LaptopVideoSection 
          data={content.video_section}
          isAdmin={isAdmin}
          onTextSave={handleTextSave}
          onMediaSave={handleMediaSave}
        />
      </section>

      {/* --- 5. Continuous Scroll Section --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <ContinuousLaptopScroll 
          data={content.scroll_section}
          isAdmin={isAdmin}
          onListEdit={setModal}
        />
      </section>

      {/* --- 6. Brand Display Section --- */}
      <section className="py-24 bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('brands_items')} text="Edit Brands" />}
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.brands.title_prefix}
              onSave={handleTextSave('brands', 'title_prefix')}
              className="text-4xl md:text-5xl font-light text-center mb-20 text-gray-900"
            >
              {content.brands.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.brands.title_suffix_gradient}
                onSave={handleTextSave('brands', 'title_suffix_gradient')}
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.brands.brand_items.map((brand, index) => (
              <FadeIn key={brand.id} delay={index * 0.1}>
                <BrandDisplay
                  name={brand.name}
                  slogan={brand.slogan}
                  description={brand.description}
                  logo={brand.logo_url}
                  image={brand.image_url}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. "For Education" Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FeatureSection
            data={content.education}
            isAdmin={isAdmin}
            onTextSave={handleTextSave}
            onImageSave={handleMediaSave}
            onListEdit={setModal}
            reverse={false}
          />
        </div>
      </section>

      {/* --- 8. Case Study / Testimonial --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-2xl p-12 md:p-20 overflow-hidden">
            {isAdmin && <AdminEditButton onClick={() => setModal('testimonial_stats')} text="Edit Stats" />}
            <FadeIn>
              <div className="lg:w-3/4">
                <GraduationCap className="w-16 h-16 text-white/70 mb-6" />
                <EditableText
                  as="blockquote"
                  isAdmin={isAdmin}
                  value={content.testimonial.quote}
                  onSave={handleTextSave('testimonial', 'quote')}
                  className="text-2xl md:text-4xl font-light italic border-l-4 border-white/50 pl-8 py-4"
                  useTextarea
                />
                <EditableText
                  as="p"
                  isAdmin={isAdmin}
                  value={content.testimonial.attribution}
                  onSave={handleTextSave('testimonial', 'attribution')}
                  className="text-xl font-semibold text-white mt-8"
                />
                
                {/* Stats */}
                <div className="flex flex-wrap gap-12 mt-12">
                  <div>
                    <div className="text-5xl font-bold text-white">
                      <CountUp end={content.testimonial.stat1.value} suffix={content.testimonial.stat1.suffix} />
                    </div>
                    <div className="text-lg text-white/80">{content.testimonial.stat1.label}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-white">
                      <CountUp end={content.testimonial.stat2.value} suffix={content.testimonial.stat2.suffix} />
                    </div>
                    <div className="text-lg text-white/80">{content.testimonial.stat2.label}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ Section (Assuming it fetches its own data) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
              Frequently Asked <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Questions</span>
            </h2>
          </FadeIn>
          <FadeIn>
            <FAQSection />
          </FadeIn>
        </div>
      </section>

      {/* --- 10. Final Call to Action (Data-driven) --- */}
      {/* <CallToAction
        title={content.cta.title}
        text={content.cta.text}
        buttonText={content.cta.buttonText}
        buttonLink={content.cta.buttonLink}
      /> */}
      <CallToAction
        data={content.cta}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave('cta', 'background_image')} 
      />

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace(/_/g, ' ')}`}
          // Special case for testimonial stats, which isn't a list
          items={
            modal === 'testimonial_stats' ? [content.testimonial] :
            modal === 'why_us_features' ? content.why_us.features :
            modal === 'flyer_section_flyers' ? content.flyer_section.flyers :
            modal === 'scroll_section_row1' ? content.scroll_section.row1_images :
            modal === 'scroll_section_row2' ? content.scroll_section.row2_images :
            modal === 'brands_items' ? content.brands.brand_items :
            content.education.features
          }
          itemTitleKey={
            modal.includes('scroll') ? 'image_url' :
            modal.includes('education') ? 'title' :
            modal.includes('why_us') ? 'title' :
            modal.includes('flyer') ? 'title' :
            modal.includes('brands') ? 'name' :
            'quote' // for testimonial
          }
          fileKeys={
            modal === 'flyer_section_flyers' ? ['image'] :
            modal.includes('scroll') ? ['image'] :
            modal === 'brands_items' ? ['logo', 'image'] :
            []
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal.split('_')[0];
            let listKey = modal.split('_').slice(1).join('_');

            if (modal === 'testimonial_stats') {
              await handleSave('testimonial', newItems[0]); // Save the single object
              setModal(null);
              return;
            }
            
            if (modal === 'why_us_features') { sectionName = 'why_us'; listKey = 'features'; }
            if (modal === 'flyer_section_flyers') { sectionName = 'flyer_section'; listKey = 'flyers'; }
            if (modal === 'scroll_section_row1') { sectionName = 'scroll_section'; listKey = 'row1_images'; }
            if (modal === 'scroll_section_row2') { sectionName = 'scroll_section'; listKey = 'row2_images'; }
            if (modal === 'brands_items') { sectionName = 'brands'; listKey = 'brand_items'; }
            if (modal === 'education_features') { sectionName = 'education'; listKey = 'features'; }

            const newContent = {
              ...content[sectionName],
              [listKey]: newItems
            };
            
            await handleSave(sectionName, newContent);
            setModal(null);
          }}
        />
      )}
    </div>
  );
};

export default Laptop;