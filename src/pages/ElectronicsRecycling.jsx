// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FadeIn } from '../components/common/FadeIn'; // Assuming FadeIn.jsx is in components/common
// // // import { 
// // //   ArrowRight, 
// // //   Phone, 
// // //   Mail,
// // //   Server,
// // //   ShieldCheck,
// // //   Wrench,
// // //   Truck,
// // //   HardHat,
// // //   Box,
// // //   RefreshCw,
// // //   ServerOff,
// // //   FileText,
// // //   Users,
// // //   Trash2,
// // //   CheckCircle
// // // } from 'lucide-react';

// // // // This component will hold the main content of the recycling page
// // // const RecyclingContent = () => {
// // //   const acceptedItems = [
// // //     'Laptops & Computers',
// // //     'Mobile Phones & Tablets',
// // //     'Printers & Scanners',
// // //     'Servers & Networking Gear',
// // //     'Monitors & Displays',
// // //     'Cables & Accessories',
// // //   ];

// // //   return (
// // //     <div className="prose prose-lg max-w-none text-gray-700">
// // //       <FadeIn>
// // //         <img 
// // //           src="https://placehold.co/800x450/e2e8f0/334155?text=E-Waste+Recycling+Facility&font=inter" 
// // //           alt="Electronics Recycling Facility"
// // //           className="rounded-lg shadow-md mb-8 w-full object-cover"
// // //         />
// // //       </FadeIn>
      
// // //       <FadeIn>
// // //         <p className="lead text-xl text-gray-800">
// // //           At EonCircular, we provide comprehensive, certified electronics recycling solutions for businesses of all sizes. 
// // //           We ensure your e-waste is processed responsibly, securely, and in full compliance with all environmental regulations.
// // //         </p>
// // //         <p>
// // //           Our state-of-the-art recycling facilities are equipped to handle a wide range of electronic equipment, 
// // //           from complex server racks to everyday office electronics. We focus on maximizing resource recovery 
// // //           and minimizing environmental impact, turning your retired assets into reusable commodities.
// // //         </p>
// // //       </FadeIn>

// // //       <FadeIn>
// // //         <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">What We Accept</h3>
// // //         <p>
// // //           We accept nearly all types of electronic and IT equipment. If it plugs in or runs on a battery, 
// // //           we can likely recycle it. Our services include:
// // //         </p>
// // //         <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 not-prose list-none p-0 my-6">
// // //           {acceptedItems.map((item) => (
// // //             <li key={item} className="flex items-center space-x-3">
// // //               <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
// // //               <span className="text-gray-700">{item}</span>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </FadeIn>

// // //       <FadeIn>
// // //         <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Our Certified Process</h3>
// // //         <img 
// // //           src="https://placehold.co/800x450/f0f9ff/0284c7?text=Certified+Recycling+Process&font=inter" 
// // //           alt="Certified Recycling Process"
// // //           className="rounded-lg shadow-md my-8 w-full object-cover"
// // //         />
// // //         <p>
// // //           Data security and environmental responsibility are our top priorities. Our process begins 
// // //           with secure, GPS-tracked logistics to transport your assets to our facility. Upon arrival, 
// // //           all data-bearing devices are identified and subjected to certified data destruction protocols 
// // //           before any recycling occurs.
// // //         </p>
// // //         <p>
// // //           Once data is verifiably destroyed, assets are manually sorted and dismantled. We separate plastics, 
// // //           metals, glass, and hazardous components, ensuring each material stream is sent to a certified 
// // //           downstream partner for proper processing. We provide full transparency and chain-of-custody 
// // //           documentation for your compliance records.
// // //         </p>
// // //       </FadeIn>
// // //     </div>
// // //   );
// // // };

// // // // This component is the sticky sidebar
// // // const ServicesSidebar = () => {
// // //   // List of other services, excluding Electronics Recycling
// // //   const otherServices = [
// // //     { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
// // //     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
// // //     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
// // //     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
// // //     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
// // //     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box },
// // //     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
// // //     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
// // //     { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
// // //     { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
// // //     { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
// // //   ];

// // //   return (
// // //     <aside className="lg:sticky top-32"> {/* top-32 to account for h-20 header + padding */}
// // //       <FadeIn>
// // //         <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
// // //           <h3 className="text-xl font-semibold text-gray-900 mb-5">
// // //             Not The Service You Are Looking For?
// // //           </h3>
// // //           <div className="flex flex-col space-y-3">
// // //             {otherServices.map((service) => (
// // //               <Link
// // //                 key={service.name}
// // //                 to={service.path}
// // //                 className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md"
// // //               >
// // //                 <div className="flex items-center space-x-3">
// // //                   <service.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
// // //                   <span>{service.name}</span>
// // //                 </div>
// // //                 <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </FadeIn>

// // //       <FadeIn delay={0.2}>
// // //         <div className="bg-green-700 text-white rounded-lg p-8 mt-8 shadow-lg">
// // //           <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
// // //           <p className="opacity-90 mb-6">
// // //             Have questions about your e-waste? Our team is ready to help you find the right solution.
// // //           </p>
// // //           <div className="space-y-4 mb-6">
// // //             <a href="tel:+123456789" className="flex items-center space-x-3 group">
// // //               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
// // //               <span className="group-hover:underline">+1 (234) 567-890</span>
// // //             </a>
// // //             <a href="mailto:recycling@eoncircular.com" className="flex items-center space-x-3 group">
// // //               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
// // //               <span className="group-hover:underline">recycling@eoncircular.com</span>
// // //             </a>
// // //           </div>
// // //           <Link
// // //             to="/contact"
// // //             className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
// // //           >
// // //             Contact Us
// // //           </Link>
// // //         </div>
// // //       </FadeIn>
// // //     </aside>
// // //   );
// // // };

// // // // Main page component
// // // export const ElectronicsRecycling = () => {
// // //   return (
// // //     <div className="bg-white text-gray-900">
// // //       {/* Hero Section */}
// // //       <FadeIn>
// // //         <div className="bg-gray-100 pt-32 pb-20">
// // //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
// // //               Electronics Recycling
// // //             </h1>
// // //             <p className="text-xl text-gray-600 max-w-3xl">
// // //               Secure, certified, and sustainable recycling for your retired IT assets.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </FadeIn>

// // //       {/* Main Content Area */}
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
// // //         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
// // //           {/* Main Content */}
// // //           <div className="lg:col-span-8">
// // //             <RecyclingContent />
// // //           </div>
          
// // //           {/* Sidebar */}
// // //           <div className="lg:col-span-4 mt-12 lg:mt-0">
// // //             <ServicesSidebar />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FadeIn } from '../components/common/FadeIn.jsx'; 
// // import { 
// //   ArrowRight, 
// //   Phone, 
// //   Mail,
// //   Server,
// //   ShieldCheck,
// //   Wrench,
// //   Truck,
// //   HardHat,
// //   Box,
// //   RefreshCw,
// //   ServerOff,
// //   FileText,
// //   Users,
// //   Trash2,
// //   CheckCircle,
// //   Heart, // For Donate
// //   Globe, // For Eco-Friendly
// //   ShieldOff, // For Secure Data
// //   PackageCheck, // For Process Step 1
// //   BoxSelect,    // For Process Step 2
// //   Loader2,      // For Process Step 3
// //   FileDigit     // For Process Step 4
// // } from 'lucide-react';

// // // --- New Feature Boxes Section ---
// // const FeatureBoxes = () => (
// //   <section className="bg-white py-16 lg:py-24">
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Eco-Friendly Disposal */}
// //         <FadeIn delay={0.1}>
// //           <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
// //             <Globe className="w-10 h-10 text-green-600 mb-4" />
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
// //             <p className="text-gray-600">
// //               We ensure every component is processed in an environmentally responsible manner.
// //             </p>
// //           </div>
// //         </FadeIn>
// //         {/* Secure Data Destruction */}
// //         <FadeIn delay={0.2}>
// //           <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
// //             <ShieldOff className="w-10 h-10 text-green-600 mb-4" />
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Data Destruction</h3>
// //             <p className="text-gray-600">
// //               Certified processes to completely destroy sensitive data on all devices.
// //             </p>
// //           </div>
// //         </FadeIn>
// //         {/* Hassle-Free Pickup */}
// //         <FadeIn delay={0.3}>
// //           <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
// //             <Truck className="w-10 h-10 text-green-600 mb-4" />
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">Hassle-Free Pickup</h3>
// //             <p className="text-gray-600">
// //               We coordinate secure logistics and pickup from your location, anywhere nationwide.
// //             </p>
// //           </div>
// //         </FadeIn>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // --- New How It Works Section ---
// // const HowItWorks = () => {
// //   const steps = [
// //     { 
// //       icon: PackageCheck, 
// //       name: 'Step 1: Contact Us', 
// //       description: 'Reach out with your inventory list. We’ll provide a quote and a pickup plan.' 
// //     },
// //     { 
// //       icon: BoxSelect, 
// //       name: 'Step 2: Secure Pickup', 
// //       description: 'Our bonded logistics team securely collects and transports your assets.' 
// //     },
// //     { 
// //       icon: Loader2, 
// //       name: 'Step 3: Processing', 
// //       description: 'Assets are securely wiped, tested, sorted for remarketing or recycling.' 
// //     },
// //     { 
// //       icon: FileDigit, 
// //       name: 'Step 4: Reporting', 
// //       description: 'Receive certified documentation for data destruction and recycling.' 
// //     },
// //   ];

// //   return (
// //     <section className="py-16 lg:py-24 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <FadeIn>
// //           <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
// //             How EonCircular Works
// //           </h2>
// //           <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
// //             Our process is simple, secure, and transparent, designed to give you peace of mind.
// //           </p>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {steps.map((step, index) => (
// //             <FadeIn key={step.name} delay={index * 0.1}>
// //               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
// //                 <div className="flex justify-center items-center mb-4">
// //                   <step.icon className="w-12 h-12 text-green-600" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
// //                 <p className="text-gray-600">{step.description}</p>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- New Why Choose Us Section ---
// // const WhyChooseUs = () => {
// //   const benefits = [
// //     'R2v3, ISO 9001, 14001, & 45001 Certified',
// //     'Nationwide Secure Logistics',
// //     '100% Data Security Guarantee',
// //     'Transparent Reporting & Certificates',
// //     'Maximum Asset Value Recovery',
// //     'Commitment to Zero-Landfill Policy',
// //   ];

// //   return (
// //     <section className="py-16 lg:py-24 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
// //           <FadeIn>
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
// //               <p className="text-lg text-gray-600 mb-8">
// //                 We are more than a vendor; we are your partner in responsible and secure 
// //                 IT asset and e-waste management. Our certifications and processes 
// //                 ensure compliance and peace of mind.
// //               </p>
// //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
// //                 {benefits.map((item) => (
// //                   <li key={item} className="flex items-center space-x-3">
// //                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
// //                     <span className="text-gray-700">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </FadeIn>
// //           <FadeIn delay={0.2} className="mt-10 lg:mt-0">
// //             <img 
// //               src="https://placehold.co/600x450/e0f2fe/0c4a6e?text=Our+Certified+Facility&font=inter" 
// //               alt="EonCircular Certified Facility"
// //               className="rounded-lg shadow-xl w-full object-cover"
// //             />
// //           </FadeIn>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Updated Main Content Component ---
// // const RecyclingContent = () => {
// //   const sections = [
// //     {
// //       title: 'Recycling Solutions for All Businesses',
// //       description: 'From small offices to large enterprises, we customize our recycling programs to fit your needs. We handle computers, laptops, servers, mobile devices, and more, ensuring full compliance and data security for every asset.',
// //       img: 'https://placehold.co/800x450/e2e8f0/334155?text=Business+Solutions&font=inter',
// //       alt: 'Office electronics recycling'
// //     },
// //     {
// //       title: 'Advantages of Recycling Unneeded Technical Equipment',
// //       description: 'Recycling e-waste not only protects the environment from hazardous materials but also recovers valuable resources. It frees up office space, ensures data security, and demonstrates your company’s commitment to sustainability.',
// //       img: 'https://placehold.co/800x450/f0f9ff/0284c7?text=Recycling+Advantages&font=inter',
// //       alt: 'Stack of recycled laptops'
// //     },
// //     {
// //       title: 'Secure Data and Hardware Disposal',
// //       description: 'Our primary concern is protecting your data. We offer on-site and off-site data destruction services, including shredding and degaussing, compliant with NIST 800-88 standards. You receive a certificate of destruction for every drive.',
// //       img: 'https://placehold.co/800x450/f1f5f9/1e293b?text=Secure+Data+Disposal&font=inter',
// //       alt: 'Hard drive shredder'
// //     },
// //     {
// //       title: 'E-waste Management for Corporations',
// //       description: 'We provide comprehensive e-waste management solutions for corporations, including asset tracking, detailed reporting, and compliance management. Our programs help you meet sustainability goals and regulatory requirements with ease.',
// //       img: 'https://placehold.co/800x450/f0fdf4/15803d?text=Corporate+E-Waste+Mgmt&font=inter',
// //       alt: 'Corporate IT assets'
// //     },
// //   ];

// //   return (
// //     <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
// //       {sections.map((section) => (
// //         <FadeIn key={section.title}>
// //           <article>
// //             <h2 className="text-3xl font-semibold text-gray-900 mb-6">{section.title}</h2>
// //             <img 
// //               src={section.img} 
// //               alt={section.alt}
// //               className="rounded-lg shadow-md mb-8 w-full object-cover aspect-video"
// //             />
// //             <p>{section.description}</p>
// //           </article>
// //         </FadeIn>
// //       ))}
// //     </div>
// //   );
// // };

// // // --- Updated Sticky Sidebar ---
// // const ServicesSidebar = () => {
// //   const otherServices = [
// //     { name: 'IT Asset Disposition', path: '/services/itad', icon: Server },
// //     { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck },
// //     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench },
// //     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck },
// //     { name: 'On-site Services', path: '/services/on-site', icon: HardHat },
// //     { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box },
// //     { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw },
// //     { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff },
// //     { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText },
// //     { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users },
// //     { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2 },
// //   ];

// //   return (
// //     // This makes the whole sidebar sticky
// //     <aside className="lg:sticky top-32 space-y-8">
      
// //       {/* 1. Donate Box (New) */}
// //       <FadeIn>
// //         <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow-sm">
// //           <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
// //           <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate Today!</h3>
// //           <p className="text-gray-600 mb-5">
// //             Donate Your Electronics, Make a Difference Today!
// //           </p>
// //           <Link
// //             to="/contact?subject=donation"
// //             className="inline-block w-full text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
// //           >
// //             Start Donating
// //           </Link>
// //         </div>
// //       </FadeIn>

// //       {/* 2. Not The Service... (Existing) */}
// //       <FadeIn delay={0.1}>
// //         <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
// //           <h3 className="text-xl font-semibold text-gray-900 mb-5">
// //             Not The Service You Are Looking For?
// //           </h3>
// //           <div className="flex flex-col space-y-3">
// //             {otherServices.map((service) => (
// //               <Link
// //                 key={service.name}
// //                 to={service.path}
// //                 className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md"
// //               >
// //                 <div className="flex items-center space-x-3">
// //                   <service.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
// //                   <span>{service.name}</span>
// //                 </div>
// //                 <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </FadeIn>

// //       {/* 3. Get in Touch Box (Existing) */}
// //       <FadeIn delay={0.2}>
// //         <div className="bg-green-700 text-white rounded-lg p-8 shadow-lg">
// //           <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
// //           <p className="opacity-90 mb-6">
// //             Have questions about your e-waste? Our team is ready to help.
// //           </p>
// //           <div className="space-y-4 mb-6">
// //             <a href="tel:+123456789" className="flex items-center space-x-3 group">
// //               <Phone className="w-5 h-5 opacity-80 group-hover:opacity-100" />
// //               <span className="group-hover:underline">+1 (234) 567-890</span>
// //             </a>
// //             <a href="mailto:recycling@eoncircular.com" className="flex items-center space-x-3 group">
// //               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
// //               <span className="group-hover:underline">recycling@eoncircular.com</span>
// //             </a>
// //           </div>
// //           <Link
// //             to="/contact"
// //             className="inline-block w-full text-center bg-white text-green-700 font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
// //           >
// //             Contact Us
// //           </Link>
// //         </div>
// //       </FadeIn>
// //     </aside>
// //   );
// // };

// // // --- Main Page Component (Updated) ---
// // export const ElectronicsRecycling = () => {
// //   return (
// //     <div className="bg-white text-gray-900">
// //       {/* Hero Section */}
// //       <FadeIn>
// //         <div className="bg-gray-100 pt-32 pb-20">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
// //               Electronics Recycling Nationwide
// //             </h1>
// //             <p className="text-xl text-gray-600 max-w-3xl">
// //               Eco-friendly e-waste solutions for businesses and individuals.
// //             </p>
// //           </div>
// //         </div>
// //       </FadeIn>

// //       {/* Feature Boxes Section */}
// //       <FeatureBoxes />

// //       {/* Main Content Area */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
// //         <div className="lg:grid lg:grid-cols-12 lg:gap-12">
// //           {/* Main Content */}
// //           <div className="lg:col-span-8">
// //             <RecyclingContent />
// //           </div>
          
// //           {/* Sidebar */}
// //           <div className="lg:col-span-4 mt-12 lg:mt-0">
// //             <ServicesSidebar />
// //           </div>
// //         </div>
// //       </div>

// //       {/* How It Works Section */}
// //       <HowItWorks />
      
// //       {/* Why Choose Us Section */}
// //       <WhyChooseUs />
// //     </div>
// //   );
// // };

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
//             How EonCircular Works
//           </h2>
//           <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
//             Our process is simple, secure, and transparent, designed to give you peace of mind.
//           </p>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <FadeIn key={step.name} delay={index * 0.1}>
//               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
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
//                   <li key={item} className="flex items-center space-x-3">
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
//               alt="EonCircular Certified Facility"
//               className="rounded-lg shadow-xl w-full object-cover"
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
//               className="rounded-lg shadow-md mb-8 w-full object-cover aspect-video"
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
//                 className="group flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm text-gray-700 font-medium transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md"
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
//             <a href="mailto:recycling@eoncircular.com" className="flex items-center space-x-3 group">
//               <Mail className="w-5 h-5 opacity-80 group-hover:opacity-100" />
//               <span className="group-hover:underline">recycling@eoncircular.com</span>
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
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4">
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
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4">
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
//                   <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4">
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


import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx'; // Corrected import path
import { 
  ArrowRight, 
  Phone, 
  Mail,
  Server,
  ShieldCheck,
  Wrench,
  Truck,
  HardHat,
  Box,
  RefreshCw,
  ServerOff,
  FileText,
  Users,
  Trash2,
  CheckCircle,
  Heart, // For Donate
  Globe, // For Eco-Friendly
  ShieldOff, // For Secure Data
  PackageCheck, // For Process Step 1
  BoxSelect,    // For Process Step 2
  Loader2,      // For Process Step 3
  FileDigit     // For Process Step 4
} from 'lucide-react';

// --- REMOVED FeatureBoxes component ---

// --- New How It Works Section ---
const HowItWorks = () => {
  const steps = [
    { 
      icon: PackageCheck, 
      name: 'Step 1: Contact Us', 
      description: 'Reach out with your inventory list. We’ll provide a quote and a pickup plan.' 
    },
    { 
      icon: BoxSelect, 
      name: 'Step 2: Secure Pickup', 
      description: 'Our bonded logistics team securely collects and transports your assets.' 
    },
    { 
      icon: Loader2, 
      name: 'Step 3: Processing', 
      description: 'Assets are securely wiped, tested, sorted for remarketing or recycling.' 
    },
    { 
      icon: FileDigit, 
      name: 'Step 4: Reporting', 
      description: 'Receive certified documentation for data destruction and recycling.' 
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How EonCircular Works
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our process is simple, secure, and transparent, designed to give you peace of mind.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.name} delay={index * 0.1}>
              {/* --- ADDED HOVER ANIMATIONS --- */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center items-center mb-4">
                  <step.icon className="w-12 h-12 text-green-600" />
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

// --- New Why Choose Us Section ---
const WhyChooseUs = () => {
  const benefits = [
    'R2v3, ISO 9001, 14001, & 45001 Certified',
    'Nationwide Secure Logistics',
    '100% Data Security Guarantee',
    'Transparent Reporting & Certificates',
    'Maximum Asset Value Recovery',
    'Commitment to Zero-Landfill Policy',
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are more than a vendor; we are your partner in responsible and secure 
                IT asset and e-waste management. Our certifications and processes 
                ensure compliance and peace of mind.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {benefits.map((item) => (
                  // --- ADDED HOVER ANIMATIONS ---
                  <li key={item} className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10 lg:mt-0">
            <img 
              src="https://placehold.co/600x450/e0f2fe/0c4a6e?text=Our+Certified+Facility&font=inter" 
              alt="EonCircular Certified Facility"
              // --- ADDED HOVER ANIMATION ---
              className="rounded-lg shadow-xl w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Updated Main Content Component ---
const RecyclingContent = () => {
  const sections = [
    {
      title: 'Recycling Solutions for All Businesses',
      description: 'From small offices to large enterprises, we customize our recycling programs to fit your needs. We handle computers, laptops, servers, mobile devices, and more, ensuring full compliance and data security for every asset.',
      img: 'https://placehold.co/800x450/e2e8f0/334155?text=Business+Solutions&font=inter',
      alt: 'Office electronics recycling'
    },
    {
      title: 'Advantages of Recycling Unneeded Technical Equipment',
      description: 'Recycling e-waste not only protects the environment from hazardous materials but also recovers valuable resources. It frees up office space, ensures data security, and demonstrates your company’s commitment to sustainability.',
      img: 'https://placehold.co/800x450/f0f9ff/0284c7?text=Recycling+Advantages&font=inter',
      alt: 'Stack of recycled laptops'
    },
    {
      title: 'Secure Data and Hardware Disposal',
      description: 'Our primary concern is protecting your data. We offer on-site and off-site data destruction services, including shredding and degaussing, compliant with NIST 800-88 standards. You receive a certificate of destruction for every drive.',
      img: 'https://placehold.co/800x450/f1f5f9/1e293b?text=Secure+Data+Disposal&font=inter',
      alt: 'Hard drive shredder'
    },
    {
      title: 'E-waste Management for Corporations',
      description: 'We provide comprehensive e-waste management solutions for corporations, including asset tracking, detailed reporting, and compliance management. Our programs help you meet sustainability goals and regulatory requirements with ease.',
      img: 'https://placehold.co/800x450/f0fdf4/15803d?text=Corporate+E-Waste+Mgmt&font=inter',
      alt: 'Corporate IT assets'
    },
  ];

  return (
    <div className="prose prose-lg max-w-none text-gray-700 space-y-16">
      {sections.map((section) => (
        <FadeIn key={section.title}>
          <article>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{section.title}</h2>
            <img 
              src={section.img} 
              alt={section.alt}
              // --- ADDED HOVER ANIMATION ---
              className="rounded-lg shadow-md mb-8 w-full object-cover aspect-video transition-transform duration-300 hover:scale-[1.02]"
            />
            <p>{section.description}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
};

// --- Updated Sticky Sidebar ---
const ServicesSidebar = () => {
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
    // This makes the whole sidebar sticky
    <aside className="lg:sticky top-32 space-y-8">
      
      {/* 1. Donate Box (New) */}
      <FadeIn>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow-sm">
          <Heart className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate Today!</h3>
          <p className="text-gray-600 mb-5">
            Donate Your Electronics, Make a Difference Today!
          </p>
          <Link
            to="/contact?subject=donation"
            className="inline-block w-full text-center bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Start Donating
          </Link>
        </div>
      </FadeIn>

      {/* 2. Not The Service... (Existing) */}
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

      {/* 3. Get in Touch Box (Existing) */}
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

// --- Main Page Component (Updated) ---
export const ElectronicsRecycling = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* === UPDATED HERO SECTION === */}
      <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              
              {/* Left Column (Text & Feature Boxes) */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Electronics Recycling Nationwide
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-10">
                  Eco-friendly e-waste solutions for businesses and individuals.
                </p>
                
                {/* Stacked Feature Boxes */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Eco-Friendly Disposal */}
                  {/* --- ADDED HOVER ANIMATION --- */}
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Eco-Friendly Disposal</h3>
                      <p className="text-gray-600 text-sm">
                        Environmentally responsible processing.
                      </p>
                    </div>
                  </div>
                  {/* Secure Data Destruction */}
                  {/* --- ADDED HOVER ANIMATION --- */}
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <ShieldOff className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Secure Data Destruction</h3>
                      <p className="text-gray-600 text-sm">
                        Certified processes to destroy sensitive data.
                      </p>
                    </div>
                  </div>
                  {/* Hassle-Free Pickup */}
                  {/* --- ADDED HOVER ANIMATION --- */}
                  <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-full">
                      <Truck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Hassle-Free Pickup</h3>
                      <p className="text-gray-600 text-sm">
                        Secure logistics from your location, nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Image) */}
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://placehold.co/800x600/e0f2fe/0c4a6e?text=E-Waste+Recycling&font=inter"
                  alt="Electronics Recycling"
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </FadeIn>
      </section>
      {/* === END OF UPDATED HERO === */}


      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <RecyclingContent />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <ServicesSidebar />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};


