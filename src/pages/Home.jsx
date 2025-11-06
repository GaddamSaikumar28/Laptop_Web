
// // import React, { useState, useEffect, Fragment } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import { 
// //   ArrowRight,
// //   Award,
// //   Box,
// //   CheckCircle,
// //   Cpu,
// //   DatabaseZap,
// //   HardDrive,
// //   Laptop,
// //   Layers,
// //   Monitor,
// //   PlayCircle,
// //   Printer,
// //   Recycle,
// //   Server,
// //   ShieldCheck,
// //   ShoppingCart,
// //   Smartphone,
// //   Smile,
// //   Star,
// //   Trash2,
// //   TrendingUp,
// //   Truck,
// //   Users,
// //   Wrench,
// //   Zap,
// // } from 'lucide-react';

// // // --- Reusable Components (Inlined) ---

// // // FadeIn component remains unchanged
// // const FadeIn = ({ children, delay = 0, duration = 0.8, x = 0, y = 20, once = true, ...props }) => {
// //   const { ref, inView } = useInView({
// //     triggerOnce: once,
// //     threshold: 0.1,
// //   });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, x, y }}
// //       animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
// //       transition={{ duration, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
// //       {...props}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // // Container component remains unchanged
// // const Container = ({ children, className = '', ...props }) => (
// //   <div
// //     className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
// //     {...props}
// //   >
// //     {children}
// //   </div>
// // );

// // // --- NEW CountUp Component (from your CountUp.jsx) ---
// // // I've modified it to handle decimal values
// // export const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
// //   const [count, setCount] = useState(0);
// //   const { ref, inView } = useInView({
// //     threshold: 0.5,
// //     triggerOnce: true,
// //   });

// //   useEffect(() => {
// //     if (inView) {
// //       let start = 0;
// //       const endValue = end;
// //       const startTime = Date.now();

// //       const easeOutQuad = (t) => t * (2 - t);

// //       const frame = () => {
// //         const now = Date.now();
// //         const progress = Math.min((now - startTime) / duration, 1);
// //         const easedProgress = easeOutQuad(progress);
        
// //         const currentCount = easedProgress * endValue;
// //         setCount(parseFloat(currentCount.toFixed(decimals)));

// //         if (progress < 1) {
// //           requestAnimationFrame(frame);
// //         } else {
// //           setCount(parseFloat(endValue.toFixed(decimals))); // Ensure it ends exactly on the end value
// //         }
// //       };
// //       requestAnimationFrame(frame);
// //     }
// //   }, [inView, end, duration, decimals]);

// //   return (
// //     <span ref={ref}>
// //       {count.toLocaleString(undefined, {
// //         minimumFractionDigits: decimals,
// //         maximumFractionDigits: decimals
// //       })}
// //     </span>
// //   );
// // };


// // // --- NEW VEDIC CAROUSEL SECTION ---

// // // Dummy data for the carousel
// // const vedicSlides = [
// //   {
// //     id: 1,
// //     videoUrl: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
// //     title: "Embrace Ancient Wisdom",
// //     text: "Discover the timeless knowledge of the Vedas and find balance in your modern life. Journey into tranquility.",
// //     cta: "Explore Now",
// //     link: "/wisdom"
// //   },
// //   {
// //     id: 2,
// //     videoUrl: "https://videos.pexels.com/video-files/4784090/4784090-hd_1920_1080_30fps.mp4",
// //     title: "The Journey of the Self",
// //     text: "Unlock your inner potential through practices refined over millennia. Connect with your true essence.",
// //     cta: "Begin Your Journey",
// //     link: "/journey"
// //   },
// //   {
// //     id: 3,
// //     videoUrl: "https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_30fps.mp4",
// //     title: "Harmony with Nature",
// //     text: "Learn how Vedic principles guide us toward a life of harmony, sustainability, and profound peace.",
// //     cta: "Find Harmony",
// //     link: "/harmony"
// //   },
// // ];

// // // Content animation variants for Framer Motion
// // const contentVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.8,
// //       ease: [0.4, 0.0, 0.2, 1],
// //       staggerChildren: 0.2
// //     }
// //   },
// //   exit: {
// //     opacity: 0,
// //     y: -20,
// //     transition: {
// //       duration: 0.5,
// //       ease: [0.4, 0.0, 0.2, 1]
// //     }
// //   }
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0 }
// // };

// // const VedicCarouselSection = () => {
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   // Auto-play timer
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setActiveSlide((prev) => (prev + 1) % vedicSlides.length);
// //     }, 7000); // Change slide every 7 seconds

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="relative h-screen w-full overflow-hidden bg-black">
// //       {/* Video Slides */}
// //       {vedicSlides.map((slide, index) => (
// //         <Fragment key={slide.id}>
// //           {/* Video Background */}
// //           <video
// //             key={slide.videoUrl} // Force video element remount on change
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
// //               index === activeSlide ? 'opacity-100' : 'opacity-0'
// //             }`}
// //             style={{ zIndex: index === activeSlide ? 0 : -1 }} // Keep active video visible
// //           >
// //             <source src={slide.videoUrl} type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //         </Fragment>
// //       ))}

// //       {/* Dark Overlay for Readability */}
// //       <div className="absolute inset-0 bg-black/50 z-10" />

// //       {/* Content */}
// //       <div className="relative z-20 h-full flex items-center justify-center text-center text-white p-4">
// //         <AnimatePresence mode="wait">
// //           {/* We render only the active slide's content, keyed by ID */}
// //           <motion.div
// //             key={vedicSlides[activeSlide].id}
// //             variants={contentVariants}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //             className="max-w-3xl mx-auto"
// //           >
// //             <motion.h1
// //               variants={itemVariants}
// //               className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-amber-300 drop-shadow-xl"
// //             >
// //               {vedicSlides[activeSlide].title}
// //             </motion.h1>
// //             <motion.p
// //               variants={itemVariants}
// //               className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-lg"
// //             >
// //               {vedicSlides[activeSlide].text}
// //             </motion.p>
// //             <motion.div variants={itemVariants}>
// //               <Link
// //                 to={vedicSlides[activeSlide].link}
// //                 className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-lg font-medium text-black bg-amber-400 rounded-full shadow-lg transform transition-all duration-300 hover:bg-amber-300 hover:shadow-xl hover:scale-105"
// //               >
// //                 <PlayCircle size={22} />
// //                 {vedicSlides[activeSlide].cta}
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>
      
// //       {/* Navigation Dots */}
// //       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
// //         {vedicSlides.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setActiveSlide(index)}
// //             aria-label={`Go to slide ${index + 1}`}
// //             className={`h-3 rounded-full transition-all duration-300 ${
// //               index === activeSlide ? 'w-6 bg-amber-400' : 'w-3 bg-white/50 hover:bg-white/80'
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };


// // // --- Hero Section ---
// // // This section remains unchanged from your original file
// // const HeroSection = () => (
// //   <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36">
// //     <Container>
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
// //         {/* Left Content */}
// //         <FadeIn y={0} delay={0.2} className="text-center lg:text-left">
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
// //             Secure, Certified,
// //             <span className="block text-green-600">Simple E-Waste Recycling</span>
// //           </h1>
// //           <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
// //             ECycleGreen is your trusted partner for responsible and secure
// //             electronics recycling and IT Asset Disposition (ITAD). We make
// //             sustainability simple.
// //           </p>
// //           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// //             <Link
// //               to="/contact"
// //               className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
// //             >
// //               Get a Free Quote
// //               <ArrowRight size={20} />
// //             </Link>
// //             <Link
// //               to="/services"
// //               className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-green-600 bg-green-100 rounded-full hover:bg-green-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
// //             >
// //               Our Services
// //             </Link>
// //           </div>
// //         </FadeIn>

// //         {/* Right Image/Graphic */}
// //         <FadeIn y={0} x={30} delay={0.4} className="relative">
// //           <div className="relative w-full max-w-md mx-auto lg:max-w-none">
// //             <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob"></div>
// //             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-50 filter blur-xl animate-blob animation-delay-3000"></div>
// //             <div className="absolute top-20 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-50 filter blur-lg animate-blob animation-delay-6000"></div>
            
// //             <img
// //               src="https://placehold.co/600x500/34D399/ffffff?text=ECycleGreen+Hero&font=inter"
// //               alt="E-Waste Recycling Process"
// //               className="relative rounded-3xl shadow-2xl w-full"
// //               onError={(e) => { e.target.src = 'https://placehold.co/600x500/EBFBF5/10B981?text=Secure+Recycling'; e.target.onerror = null; }}
// //             />
            
// //             {/* Floating Icon Badges */}
// //             <motion.div
// //               className="absolute -top-6 -left-6 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2"
// //               animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
// //               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //             >
// //               <ShieldCheck className="text-green-600" size={28} />
// //               <span className="font-semibold text-sm text-gray-700">Data Security</span>
// //             </motion.div>
            
// //             <motion.div
// //               className="absolute -bottom-8 right-0 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-2"
// //               animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
// //               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
// //             >
// //               <Award className="text-blue-600" size={28} />
// //               <span className="font-semibold text-sm text-gray-700">R2 Certified</span>
// //             </motion.div>

// //             <motion.div
// //               className="absolute top-1/3 -right-12 bg-white p-3 rounded-full shadow-lg"
// //               animate={{ scale: [1, 1.1, 1] }}
// //               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// //             >
// //               <Recycle className="text-emerald-600" size={32} />
// //             </motion.div>
// //           </div>
// //         </FadeIn>
// //       </div>
// //     </Container>
// //   </section>
// // );

// // // --- Stats Section ---
// // // --- MODIFIED SECTION ---
// // // Updated stats array to work with CountUp component
// // const stats = [
// //   { id: 1, name: 'Tons of E-Waste Recycled', value: 10000, suffix: '+', icon: Recycle, color: 'text-green-600' },
// //   { id: 2, name: 'Businesses Served', value: 500, suffix: '+', icon: Users, color: 'text-blue-600' },
// //   { id: 3, name: 'Data-Secure Devices', value: 50000, suffix: '+', icon: ShieldCheck, color: 'text-red-600' },
// //   { id: 4, name: 'Customer Satisfaction', value: 99.8, suffix: '%', decimals: 1, icon: Smile, color: 'text-yellow-600' },
// // ];

// // const StatsSection = () => (
// //   <section className="bg-white py-20 sm:py-28">
// //     <Container>
// //       <FadeIn>
// //         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
// //           {stats.map((stat) => (
// //             <div key={stat.id} className="relative flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
// //               <div className={`absolute -top-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg`}>
// //                 <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
// //               </div>
// //               {/* Used CountUp component here */}
// //               <dd className="mt-8 text-5xl font-extrabold text-gray-900 tracking-tight">
// //                 <CountUp end={stat.value} duration={2000} decimals={stat.decimals || 0} />
// //                 {stat.suffix}
// //               </dd>
// //               <dt className="mt-3 text-base font-medium text-gray-500">{stat.name}</dt>
// //             </div>
// //           ))}
// //         </div>
// //       </FadeIn>
// //     </Container>
// //   </section>
// // );


// // // --- Leading The Way Section ---
// // // This section remains unchanged from your original file
// // const LeadingTheWaySection = () => (
// //   <section className="bg-gray-50 py-20 sm:py-28 overflow-hidden">
// //     <Container>
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //         {/* Image Side */}
// //         <FadeIn x={-30} className="relative">
// //           <img
// //             src="https://placehold.co/600x600/10B981/ffffff?text=Our+Facility&font=inter"
// //             alt="ECycleGreen advanced recycling facility"
// //             className="rounded-3xl shadow-2xl relative z-10 w-full"
// //             onError={(e) => { e.target.src = 'https://placehold.co/600x600/D1FAE5/10B981?text=Our+Facility'; e.target.onerror = null; }}
// //           />
// //           <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-60 filter blur-2xl animate-blob z-0"></div>
// //           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-200 rounded-full opacity-60 filter blur-2xl animate-blob animation-delay-4000 z-0"></div>
// //         </FadeIn>
        
// //         {/* Content Side */}
// //         <FadeIn x={30} delay={0.2}>
// //           <h2 className="text-base font-semibold text-green-600 uppercase tracking-wider">
// //             Leading the Way
// //           </h2>
// //           <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
// //             Why Choose ECycleGreen?
// //           </p>
// //           <p className="mt-6 text-lg text-gray-600">
// //             We don't just recycle electronics; we provide peace of mind. Our certified, secure, and transparent process ensures your e-waste is handled responsibly, protecting both your data and the planet.
// //           </p>
// //           <ul className="mt-8 space-y-6">
// //             <li className="flex items-start gap-4">
// //               <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
// //                 <ShieldCheck className="h-6 w-6 text-green-700" />
// //               </div>
// //               <div>
// //                 <h4 className="text-lg font-semibold text-gray-900">
// //                   Unmatched Data Security
// //                 </h4>
// //                 <p className="text-gray-600">
// //                   Military-grade data destruction (DoD 5220.22-M) for all hard drives and media. Your security is non-negotiable.
// //                 </p>
// //               </div>
// //             </li>
// //             <li className="flex items-start gap-4">
// //               <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
// //                 <Award className="h-6 w-6 text-green-700" />
// //               </div>
// //               <div>
// //                 <h4 className="text-lg font-semibold text-gray-900">
// //                   R2 & ISO Certified
// //                 </h4>
// //                 <p className="text-gray-600">
// //                   We adhere to the highest global standards for environmental protection and data security (R2v3, ISO 9001, 14001, 45001).
// //                 </p>
// //               </div>
// //             </li>
// //             <li className="flex items-start gap-4">
// //               <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
// //                 <Recycle className="h-6 w-6 text-green-700" />
// //               </div>
// //               <div>
// //                 <h4 className="text-lg font-semibold text-gray-900">
// //                   Zero Landfill Policy
// //                 </h4>
// //                 <p className="text-gray-600">
// //                   We are committed to a 100% zero-landfill solution, maximizing resource recovery from every item we process.
// //                 </p>
// //               </div>
// //             </li>
// //           </ul>
// //         </FadeIn>
// //       </div>
// //     </Container>
// //   </section>
// // );

// // // --- Services Section ---
// // // This section remains unchanged from your original file
// // const services = [
// //   {
// //     name: 'IT Asset Disposition (ITAD)',
// //     description: 'Maximize value recovery from your retired IT assets while ensuring 100% data security and compliance.',
// //     icon: DatabaseZap,
// //     link: '/services/itad'
// //   },
// //   {
// //     name: 'Secure Data Destruction',
// //     description: 'On-site and off-site shredding and wiping services that meet DoD and NIST 800-88 standards.',
// //     icon: ShieldCheck,
// //     link: '/services/data-destruction'
// //   },
// //   {
// //     name: 'E-Waste Recycling',
// //     description: 'Responsible recycling for all electronics, from laptops and servers to printers and mobile devices.',
// //     icon: Recycle,
// //     link: '/services/recycling'
// //   },
// //   {
// //     name: 'Logistics & Pickup',
// //     description: 'Secure, nationwide logistics and on-site pickup services tailored to your schedule and needs.',
// //     icon: Truck,
// //     link: '/services/logistics'
// //   },
// //   {
// //     name: 'Asset Resale & Remarketing',
// //     description: 'We refurbish and remarket viable assets, turning your e-waste into a potential revenue stream.',
// //     icon: TrendingUp,
// //     link: '/services/remarketing'
// //   },
// //   {
// //     name: 'Compliance Reporting',
// //     description: 'Receive detailed certificates of destruction and recycling, ensuring a clear audit trail for compliance.',
// //     icon: Award,
// //     link: '/services/reporting'
// //   },
// // ];

// // const ServicesSection = () => (
// //   <section className="bg-white py-20 sm:py-28">
// //     <Container>
// //       {/* Section Header */}
// //       <FadeIn className="text-center max-w-3xl mx-auto">
// //         <h2 className="text-base font-semibold text-green-600 uppercase tracking-wider">
// //           Our Services
// //         </h2>
// //         <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
// //           A Full Suite of E-Waste Solutions
// //         </p>
// //         <p className="mt-5 text-lg text-gray-600">
// //           From secure pickup to certified final disposition, we handle every step of the e-waste lifecycle with precision and care.
// //         </p>
// //       </FadeIn>

// //       {/* Services Grid */}
// //       <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
// //         {services.map((service, index) => (
// //           <FadeIn delay={index * 0.1} y={30} key={service.name}>
// //             <Link to={service.link} className="group block h-full">
// //               <div className="h-full p-8 bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:bg-green-50 group-hover:scale-105 transform">
// //                 <div className="inline-flex p-4 bg-green-600 rounded-full shadow-lg">
// //                   <service.icon className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h3 className="mt-6 text-xl font-semibold text-gray-900">
// //                   {service.name}
// //                 </h3>
// //                 <p className="mt-3 text-gray-600">
// //                   {service.description}
// //                 </p>
// //                 <div className="mt-6 text-green-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   Learn More <ArrowRight size={18} className="transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
// //                 </div>
// //               </div>
// //             </Link>
// //           </FadeIn>
// //         ))}
// //       </div>
// //     </Container>
// //   </section>
// // );

// // // --- Service CTA Section ---
// // // This section remains unchanged from your original file
// // const ServiceCtaSection = () => (
// //   <section className="bg-gray-900 py-20 sm:py-28">
// //     <Container>
// //       <FadeIn className="text-center">
// //         <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
// //           What Electronics Do We Recycle?
// //         </h2>
// //         <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
// //           We accept a wide range of electronic equipment from businesses. If it plugs in or runs on a battery, we can likely recycle it.
// //         </p>
        
// //         {/* Icons Grid */}
// //         <div className="mt-16 max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 text-gray-400">
// //           {[
// //             { icon: Laptop, name: 'Laptops' },
// //             { icon: Monitor, name: 'Monitors' },
// //             { icon: Server, name: 'Servers' },
// //             { icon: HardDrive, name: 'Hard Drives' },
// //             { icon: Smartphone, name: 'Phones' },
// //             { icon: Printer, name: 'Printers' },
// //             { icon: Cpu, name: 'CPUs' },
// //             { icon: Layers, name: 'Networking' },
// //           ].map((item) => (
// //             <div key={item.name} className="flex flex-col items-center gap-2 transform transition-transform duration-300 hover:scale-125 hover:text-white">
// //               <item.icon className="h-12 w-12" />
// //               <span className="text-sm font-medium">{item.name}</span>
// //             </div>
// //           ))}
// //         </div>

// //         <Link
// //           to="/services/what-we-accept"
// //           className="mt-16 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
// //         >
// //           See Full List <ArrowRight size={20} />
// //         </Link>
// //       </FadeIn>
// //     </Container>
// //   </section>
// // );

// // // --- Benefits Section ---
// // // This section remains unchanged from your original file
// // const benefits = [
// //   {
// //     icon: ShieldCheck,
// //     title: 'Protect Your Brand',
// //     description: 'Data breaches from improperly disposed IT cost millions. Our secure process protects your reputation.'
// //   },
// //   {
// //     icon: Award,
// //     title: 'Ensure Compliance',
// //     description: 'We provide a full audit trail and compliance reporting for EPA, HIPAA, GDPR, and other regulations.'
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: 'Maximize ROI',
// //     description: 'Our ITAD and remarketing services find new life for old assets, returning value to your bottom line.'
// //   },
// //   {
// //     icon: Recycle,
// //     title: 'Achieve ESG Goals',
// //     description: 'Demonstrate your commitment to sustainability and corporate responsibility with our zero-landfill promise.'
// //   }
// // ]

// // const BenefitsSection = () => (
// //   <section className="bg-gray-50 py-20 sm:py-28">
// //     <Container>
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //         {/* Content Side */}
// //         <FadeIn x={-30}>
// //           <h2 className="text-base font-semibold text-green-600 uppercase tracking-wider">
// //             The ECycleGreen Advantage
// //           </h2>
// //           <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
// //             More Than Just Recycling
// //           </p>
// //           <p className="mt-6 text-lg text-gray-600">
// //             Partnering with us is a strategic business decision that protects your data, enhances your brand image, and contributes to a circular economy.
// //           </p>
// //           <div className="mt-10 space-y-8">
// //             {benefits.map((benefit) => (
// //               <div key={benefit.title} className="flex items-start gap-5">
// //                 <div className="flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
// //                   <benefit.icon className="h-7 w-7 text-green-600" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-xl font-semibold text-gray-900">
// //                     {benefit.title}
// //                   </h4>
// //                   <p className="mt-1 text-gray-600">
// //                     {benefit.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </FadeIn>
        
// //         {/* Image Side */}
// //         <FadeIn x={30} delay={0.2} className="relative">
// //           <img
// //             src="https://placehold.co/600x700/86EFAC/1F2937?text=Your+Brand+Protected&font=inter"
// //             alt="Business professional confident about data security"
// //             className="rounded-3xl shadow-2xl relative z-10 w-full"
// //             onError={(e) => { e.target.src = 'https://placehold.co/600x700/D1FAE5/111827?text=Compliance+Assured'; e.target.onerror = null; }}
// //           />
// //           <div className="absolute top-0 -right-10 w-48 h-48 bg-blue-200 rounded-full opacity-60 filter blur-2xl animate-blob z-0 animation-delay-3000"></div>
// //           <div className="absolute bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-60 filter blur-2xl animate-blob z-0 animation-delay-6000"></div>
// //         </FadeIn>
// //       </div>
// //     </Container>
// //   </section>
// // );


// // // --- Process Section ---
// // // This section remains unchanged from your original file
// // const processSteps = [
// //   {
// //     id: '01',
// //     name: 'Schedule Pickup',
// //     description: 'Use our simple online portal to schedule a secure, convenient pickup from your location.',
// //     icon: Truck
// //   },
// //   {
// //     id: '02',
// //     name: 'Secure Transport',
// //     description: 'Our GPS-tracked, secure-chain-of-custody fleet transports your assets to our facility.',
// //     icon: Box
// //   },
// //   {
// //     id: '03',
// //     name: 'Audit & Data Wipe',
// //     description: 'Assets are inventoried, tested, and all data is securely destroyed to NIST 800-88 standards.',
// //     icon: ShieldCheck
// //   },
// //   {
// //     id: '04',
// //     name: 'Recycle & Report',
// //     description: 'Items are responsibly recycled or remarketed. You receive a full certificate of destruction.',
// //     icon: Recycle
// //   },
// // ];

// // const ProcessSection = () => (
// //   <section className="bg-white py-20 sm:py-28">
// //     <Container>
// //       {/* Section Header */}
// //       <FadeIn className="text-center max-w-3xl mx-auto">
// //         <h2 className="text-base font-semibold text-green-600 uppercase tracking-wider">
// //           Our Process
// //         </h2>
// //         <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
// //           Simple, Secure, and Transparent
// //         </p>
// //         <p className="mt-5 text-lg text-gray-600">
// //           We've streamlined the e-waste recycling process to make it effortless for you, while maintaining the highest standards of security.
// //         </p>
// //       </FadeIn>
      
// //       {/* Steps */}
// //       <div className="mt-20 relative">
// //         {/* Dashed Line */}
// //         <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 -translate-y-1/2" />
        
// //         <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
// //           {processSteps.map((step, index) => (
// //             <FadeIn key={step.id} delay={index * 0.15} y={40} className="relative z-10">
// //               <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
// //                 <div className="relative inline-flex items-center justify-center">
// //                   <span className="text-7xl font-extrabold text-gray-100 absolute -top-8 -left-4 z-0">
// //                     {step.id}
// //                   </span>
// //                   <div className="relative z-10 p-5 bg-green-600 rounded-full shadow-lg">
// //                     <step.icon className="h-10 w-10 text-white" />
// //                   </div>
// //                 </div>
// //                 <h3 className="mt-8 text-xl font-semibold text-gray-900">
// //                   {step.name}
// //                 </h3>
// //                 <p className="mt-3 text-gray-600">
// //                   {step.description}
// //                 </p>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </div>
// //     </Container>
// //   </section>
// // );


// // // --- Testimonial Section ---
// // // --- MODIFIED SECTION ---
// // const testimonials = [
// //   {
// //     quote: "ECycleGreen's data destruction service is ironclad. Their professionalism and detailed reporting give us complete peace of mind. They are a true partner.",
// //     name: 'Sarah J.',
// //     title: 'IT Director, Finance Corp',
// //     avatar: 'https://placehold.co/100x100/EBFBF5/10B981?text=SJ'
// //   },
// //   {
// //     quote: "The entire process was incredibly smooth, from scheduling the pickup to receiving our certificate of recycling. Their team is efficient and professional. Highly recommend!",
// //     name: 'Michael B.',
// //     title: 'Operations Manager, HealthTech',
// //     avatar: 'https://placehold.co/100x100/E0E7FF/4338CA?text=MB'
// //   },
// //   {
// //     quote: "Switching to ECycleGreen helped us hit our ESG targets. Their zero-landfill policy and transparent reporting are exactly what we needed.",
// //     name: 'Emily T.',
// //     title: 'Sustainability Officer, Global Logistics',
// //     avatar: 'https://placehold.co/100x100/FEF3C7/D97706?text=ET'
// //   },
// //   // Added a few more for a better scrolling effect
// //   {
// //     quote: "Data security was our #1 concern. ECycleGreen's transparent process and certified data wipe gave us the confidence we needed.",
// //     name: 'David K.',
// //     title: 'CISO, Legal Firm',
// //     avatar: 'https://placehold.co/100x100/FEE2E2/B91C1C?text=DK'
// //   },
// //   {
// //     quote: "Not only did we clear out our old hardware securely, but their remarketing program actually gave us a return on assets we thought were worthless.",
// //     name: 'Priya S.',
// //     title: 'CFO, Retail Chain',
// //     avatar: 'https://placehold.co/100x100/D1FAE5/047857?text=PS'
// //   },
// // ];

// // const TestimonialSection = () => (
// //   <section className="bg-gray-50 py-20 sm:py-28">
// //     <Container>
// //       <FadeIn className="text-center max-w-3xl mx-auto">
// //         <h2 className="text-base font-semibold text-green-600 uppercase tracking-wider">
// //           Testimonials
// //         </h2>
// //         <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
// //           What Our Partners Say
// //         </p>
// //       </FadeIn>
      
// //       {/* Replaced grid with scrolling marquee */}
// //       <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
// //         <div className="flex w-max animate-scroll hover:pause-animation">
// //           {[...testimonials, ...testimonials].map((testimonial, index) => (
// //             <div key={index} className="w-[300px] sm:w-[400px] lg:w-[450px] mx-4 flex-shrink-0">
// //               {/* Re-using the card styling from your original file */}
// //               <div className="h-full flex flex-col justify-between p-8 bg-white rounded-2xl shadow-xl">
// //                 <div className="flex-1">
// //                   <div className="flex text-yellow-500">
// //                     {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
// //                   </div>
// //                   <blockquote className="mt-5 text-lg text-gray-700 italic">
// //                     "{testimonial.quote}"
// //                   </blockquote>
// //                 </div>
// //                 <footer className="mt-8 flex items-center gap-4">
// //                   <img className="h-14 w-14 rounded-full" src={testimonial.avatar} alt={testimonial.name} 
// //                     onError={(e) => { e.target.src = 'https://placehold.co/100x100/EEEEEE/999999?text=User'; e.target.onerror = null; }}
// //                   />
// //                   <div>
// //                     <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
// //                     <div className="text-sm text-gray-500">{testimonial.title}</div>
// //                   </div>
// //                 </footer>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </Container>
// //   </section>
// // );


// // // --- Client Logo Section ---
// // // --- MODIFIED SECTION ---
// // const logos = [
// //   { name: 'TechCorp', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=TechCorp&font=inter' },
// //   { name: 'FinBank', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=FinBank&font=inter' },
// //   { name: 'HealthWell', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=HealthWell&font=inter' },
// //   { name: 'UniState', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=UniState&font=inter' },
// //   { name: 'GlobalLogi', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=GlobalLogi&font=inter' },
// //   // Added more logos for a better scrolling effect
// //   { name: 'StartUp', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=StartUp&font=inter' },
// //   { name: 'EcoBrand', logo: 'https://placehold.co/150x60/9CA3AF/FFFFFF?text=EcoBrand&font=inter' },
// // ];

// // const ClientLogoSection = () => (
// //   <section className="bg-white py-16 sm:py-20">
// //     <Container>
// //       <FadeIn>
// //         <h2 className="text-center text-lg font-semibold text-gray-600">
// //           Trusted by leading organizations
// //         </h2>
// //       </FadeIn>
// //       {/* Replaced static grid with scrolling marquee */}
// //       <div className="mt-8 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
// //         <div className="flex w-max animate-scroll-logos hover:pause-animation">
// //           {[...logos, ...logos].map((logo, index) => (
// //             <img
// //               key={index}
// //               className="h-10 sm:h-12 mx-8 sm:mx-12 flex-shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100"
// //               src={logo.logo}
// //               alt={logo.name}
// //               onError={(e) => { e.target.src = 'https://placehold.co/150x60/EEEEEE/999999?text=Client'; e.target.onerror = null; }}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </Container>
// //   </section>
// // );


// // // --- Contact CTA Section ---
// // // This section remains unchanged from your original file
// // const ContactCtaSection = () => (
// //   <section className="bg-white py-20 sm:py-28">
// //     <Container>
// //       <FadeIn>
// //         <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 overflow-hidden">
// //           <div className="relative z-10 text-center">
// //             <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
// //               Ready to Start Your Recycling Journey?
// //             </h2>
// //             <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
// //               Join hundreds of businesses who trust ECycleGreen for secure and sustainable electronics recycling. Get your free quote today.
// //             </p>
// //             <Link
// //               to="/contact"
// //               className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-green-600 bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
// //             >
// //               Get a Free Quote <ArrowRight size={20} />
// //             </Link>
// //           </div>
// //         </div>
// //       </FadeIn>
// //     </Container>
// //   </section>
// // );

// // // --- Main Home Component ---
// // export const Home = () => {
// //   return (
// //     <>
// //       {/* Injecting custom CSS for the scrolling animations.
// //         This is the cleanest way to add keyframes and classes 
// //         in this single-file setup.
// //       */}
// //       <style>
// //         {`
// //           @keyframes scroll {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //           .animate-scroll {
// //             /* We use -50% because the content is duplicated */
// //             animation: scroll 60s linear infinite;
// //           }
// //           .animate-scroll-logos {
// //             animation: scroll 40s linear infinite;
// //           }
// //           .hover\\:pause-animation:hover {
// //             animation-play-state: paused;
// //           }
// //         `}
// //       </style>
// //       <div className="bg-white text-gray-900 overflow-x-hidden">
// //         <VedicCarouselSection /> {/* <-- NEW SECTION ADDED AT THE TOP --> */}
// //         <HeroSection />
// //         <StatsSection />
// //         <LeadingTheWaySection />
// //         <ServicesSection />
// //         <ServiceCtaSection />
// //         <BenefitsSection />
// //         <ProcessSection />
// //         <TestimonialSection />
// //         <ClientLogoSection />
// //         <ContactCtaSection />
// //       </div>
// //     </>
// //   );
// // };

// // export default Home;


// /*
// *
// * Fully Updated Home.jsx (CMS-Enabled)
// *
// */
// import React, { useState, useEffect, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { 
//   ArrowRight, Award, Box, CheckCircle, Cpu, DatabaseZap, HardDrive,
//   Laptop, Layers, Monitor, PlayCircle, Printer, Recycle, Server,
//   ShieldCheck, ShoppingCart, Smartphone, Smile, Star, Trash2,
//   TrendingUp, Truck, Users, Wrench, Zap, Edit, Plus, X, Upload,
// } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid'; // npm install uuid

// // --- NEW IMPORTS ---
// // import { useAuth } from '../AuthContext'; // Get admin status
// import * as contentApi from '../api/contentApi'; // Our new API
// // import { EditableText } from '../components/EditableText'; // Our new component
// // import { EditableImage } from '../components/EditableImage'; // Our new component
// // import { DynamicIcon, availableIconNames } from '../components/DynamicIcon'; // Our new component
// import { useAuth } from '../context/AuthContext';
// import { EditableText } from '../components/common/EditableText';
// import { EditableImage } from '../components/common/EditableImage';
// import { DynamicIcon, availableIconNames } from '../components/common/DynamicIcon';
// // --- Reusable Components (Unchanged from your file) ---
// const FadeIn = ({ children, ...props }) => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: props.x || 0, y: props.y || 20 }}
//       animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: props.delay || 0, ease: [0.25, 0.25, 0.25, 0.75] }}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// };
// const Container = ({ children, className = '', ...props }) => (
//   <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// // CountUp component (Unchanged from your file)
// const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const endValue = end;
//       const startTime = Date.now();
//       const easeOutQuad = (t) => t * (2 - t);
//       const frame = () => {
//         const now = Date.now();
//         const progress = Math.min((now - startTime) / duration, 1);
//         const easedProgress = easeOutQuad(progress);
//         const currentCount = easedProgress * endValue;
//         setCount(parseFloat(currentCount.toFixed(decimals)));
//         if (progress < 1) {
//           requestAnimationFrame(frame);
//         } else {
//           setCount(parseFloat(endValue.toFixed(decimals)));
//         }
//       };
//       requestAnimationFrame(frame);
//     }
//   }, [inView, end, duration, decimals]);
//   return (
//     <span ref={ref}>
//       {count.toLocaleString(undefined, {
//         minimumFractionDigits: decimals,
//         maximumFractionDigits: decimals
//       })}
//     </span>
//   );
// };


// // ---
// // --- VEDIC CAROUSEL SECTION (NOW DYNAMIC & EDITABLE)
// // ---
// const contentVariants = { /* ... (variants from your file) ... */ };
// const itemVariants = { /* ... (variants from your file) ... */ };

// const VedicCarouselSection = ({ content, isAdmin, onUpdate }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   const slides = content || []; // Use fetched content or empty array

//   // Auto-play effect
//   useEffect(() => {
//     if (slides.length <= 1) return;
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Video Slides */}
//       {slides.map((slide, index) => (
//         <Fragment key={slide.id}>
//           <video
//             key={slide.video_url} // Use video_url as key
//             autoPlay muted loop playsInline
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
//               index === activeSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ zIndex: index === activeSlide ? 0 : -1 }}
//           >
//             <source src={slide.video_url} type="video/mp4" />
//           </video>
//         </Fragment>
//       ))}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center justify-center text-center text-white p-4">
//         <AnimatePresence mode="wait">
//           {slides.length > 0 && (
//             <motion.div
//               key={slides[activeSlide].id}
//               variants={contentVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="max-w-3xl mx-auto"
//             >
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-amber-300 drop-shadow-xl"
//               >
//                 {slides[activeSlide].title}
//               </motion.h1>
//               <motion.p
//                 variants={itemVariants}
//                 className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-lg"
//               >
//                 {slides[activeSlide].text}
//               </motion.p>
//               <motion.div variants={itemVariants}>
//                 <Link
//                   to={slides[activeSlide].link}
//                   className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-lg font-medium text-black bg-amber-400 rounded-full shadow-lg transform transition-all duration-300 hover:bg-amber-300 hover:shadow-xl hover:scale-105"
//                 >
//                   <PlayCircle size={22} />
//                   {slides[activeSlide].cta}
//                 </Link>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
      
//       {/* Navigation Dots */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-3 rounded-full transition-all duration-300 ${
//               index === activeSlide ? 'w-6 bg-amber-400' : 'w-3 bg-white/50 hover:bg-white/80'
//             }`}
//           />
//         ))}
//       </div>

//       {/* --- NEW EDIT BUTTON --- */}
//       {isAdmin && (
//         <div className="absolute z-40 bottom-24 left-1/2 -translate-x-1/2">
//           <button
//             onClick={() => setIsManageModalOpen(true)}
//             className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
//           >
//             <Edit size={18} /> Manage Carousel
//           </button>
//         </div>
//       )}

//       {/* --- NEW MANAGEMENT MODAL --- */}
//       {isManageModalOpen && (
//         <ListManagementModal
//           title="Manage Carousel Slides"
//           items={slides}
//           onClose={() => setIsManageModalOpen(false)}
//           onSave={(newSlides) => onUpdate('vedic_carousel', newSlides)}
//           renderForm={(item, setItem, isNew) => (
//             <>
//               <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               <label>CTA Button Text: <input type="text" value={item.cta || ''} onChange={e => setItem(i => ({...i, cta: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               <label>Link (e.g., /wisdom): <input type="text" value={item.link || ''} onChange={e => setItem(i => ({...i, link: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               <label>New Video File (optional): <input type="file" accept="video/mp4" data-key="video" className="w-full p-1 border rounded file-input" /></label>
//               {item.video_url && <small>Current video: {item.video_url.substring(0, 50)}... Leave blank to keep.</small>}
//             </>
//           )}
//           itemTitleKey="title"
//           fileKeys={['video']} // This tells the modal to look for a file input with data-key="video"
//         />
//       )}
//     </section>
//   );
// };


// // ---
// // --- HERO SECTION (NOW DYNAMIC & EDITABLE)
// // ---
// const HeroSection = ({ content, isAdmin, onUpdate }) => {
//   const { title, subtitle, image_url, image_storage_path } = content || {};

//   // Generic helper to save a simple text field
//   const handleTextSave = async (key, newValue) => {
//     const newContent = { ...content, [key]: newValue };
//     await onUpdate('hero', newContent);
//   };
  
//   // Helper to save an image
//   const handleImageSave = async (file) => {
//     const { publicUrl, storagePath } = await contentApi.updateFile(
//         file,
//         image_storage_path
//     );
//     const newContent = {
//         ...content,
//         image_url: publicUrl,
//         image_storage_path: storagePath
//     };
//     await onUpdate('hero', newContent);
//   };

//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <FadeIn y={0} delay={0.2} className="text-center lg:text-left">
//             <EditableText
//               as="h1"
//               isAdmin={isAdmin}
//               value={title || ''}
//               onSave={(newValue) => handleTextSave('title', newValue)}
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
//               useTextarea
//             />
//             <EditableText
//               as="p"
//               isAdmin={isAdmin}
//               value={subtitle || ''}
//               onSave={(newValue) => handleTextSave('subtitle', newValue)}
//               className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
//               useTextarea
//             />
//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               {/* Static buttons */}
//               <Link to="/contact" className="...">Get a Free Quote <ArrowRight size={20} /></Link>
//               <Link to="/services" className="...">Our Services</Link>
//             </div>
//           </FadeIn>

//           {/* Right Image/Graphic */}
//           <FadeIn y={0} x={30} delay={0.4} className="relative">
//             <div className="relative w-full max-w-md mx-auto lg:max-w-none">
//               {/* Decorative blobs */}
//               <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob"></div>
//               {/* ... other blobs ... */}
              
//               <EditableImage
//                 isAdmin={isAdmin}
//                 src={image_url || 'https://placehold.co/600x500'}
//                 alt="E-Waste Recycling Process"
//                 onSave={handleImageSave}
//                 className="relative rounded-3xl shadow-2xl w-full"
//               />
              
//               {/* Floating Icon Badges (static) */}
//               <motion.div className="absolute -top-6 -left-6 ...">
//                 <ShieldCheck className="text-green-600" size={28} />
//                 <span className="font-semibold text-sm text-gray-700">Data Security</span>
//               </motion.div>
//               {/* ... other badges ... */}
//             </div>
//           </FadeIn>
//         </div>
//       </Container>
//     </section>
//   );
// };


// // ---
// // --- STATS SECTION (NOW DYNAMIC & EDITABLE)
// // ---
// const StatsSection = ({ content, isAdmin, onUpdate }) => {
//   const stats = content || [];
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   return (
//     <section className="bg-white py-20 sm:py-28">
//       <Container>
//         <FadeIn>
//           <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.id} className="relative flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                 <div className="absolute -top-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg">
//                   <DynamicIcon name={stat.icon_name} className="h-8 w-8 text-green-600" aria-hidden="true" />
//                 </div>
//                 <dd className="mt-8 text-5xl font-extrabold text-gray-900 tracking-tight">
//                   <CountUp end={stat.value} duration={2000} decimals={stat.decimals || 0} />
//                   {stat.suffix}
//                 </dd>
//                 <dt className="mt-3 text-base font-medium text-gray-500">{stat.label}</dt>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//         {isAdmin && (
//           <div className="text-center mt-12">
//             <button onClick={() => setIsManageModalOpen(true)} className="... (edit button styles) ...">
//               <Edit size={18} /> Manage Stats
//             </button>
//           </div>
//         )}
//         {isManageModalOpen && (
//           <ListManagementModal
//             title="Manage Stats"
//             items={stats}
//             onClose={() => setIsManageModalOpen(false)}
//             onSave={(newStats) => onUpdate('stats', newStats)}
//             renderForm={(item, setItem) => (
//               <>
//                 <label>Label: <input type="text" value={item.label || ''} onChange={e => setItem(i => ({...i, label: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Value (Number): <input type="number" value={item.value || 0} onChange={e => setItem(i => ({...i, value: parseFloat(e.target.value)}))} className="w-full p-1 border rounded" /></label>
//                 <label>Suffix (e.g., + or %): <input type="text" value={item.suffix || ''} onChange={e => setItem(i => ({...i, suffix: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Decimals (e.g., 0 or 1): <input type="number" value={item.decimals || 0} onChange={e => setItem(i => ({...i, decimals: parseInt(e.target.value)}))} className="w-full p-1 border rounded" /></label>
//                 <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
//               </>
//             )}
//             itemTitleKey="label"
//           />
//         )}
//       </Container>
//     </section>
//   );
// };


// // ---
// // --- LEADING THE WAY SECTION (NOW DYNAMIC & EDITABLE)
// // ---
// const LeadingTheWaySection = ({ content, isAdmin, onUpdate }) => {
//   const { pre_title, title, text, image_url, image_storage_path, benefits } = content || {};
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('leading_the_way', { ...content, [key]: newValue });
//   };
//   const handleImageSave = async (file) => {
//     const { publicUrl, storagePath } = await contentApi.updateFile(file, image_storage_path);
//     await onUpdate('leading_the_way', { ...content, image_url: publicUrl, image_storage_path: storagePath });
//   };
//   const handleBenefitsSave = async (newBenefits) => {
//     await onUpdate('leading_the_way', { ...content, benefits: newBenefits });
//   };

//   return (
//     <section className="bg-gray-50 py-20 sm:py-28 overflow-hidden">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Image Side */}
//           <FadeIn x={-30} className="relative">
//             <EditableImage
//               isAdmin={isAdmin}
//               src={image_url || 'https://placehold.co/600x600'}
//               alt="ECycleGreen advanced recycling facility"
//               onSave={handleImageSave}
//               className="rounded-3xl shadow-2xl relative z-10 w-full"
//             />
//             {/* ... decorative blobs ... */}
//           </FadeIn>
          
//           {/* Content Side */}
//           <FadeIn x={30} delay={0.2}>
//             <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
//             <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
//             <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
            
//             <ul className="mt-8 space-y-6">
//               {(benefits || []).map(item => (
//                 <li key={item.id} className="flex items-start gap-4">
//                   <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
//                     <DynamicIcon name={item.icon_name} className="h-6 w-6 text-green-700" />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
//                     <p className="text-gray-600">{item.text}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
            
//             {isAdmin && (
//               <button onClick={() => setIsManageModalOpen(true)} className="mt-6 ... (edit button styles) ...">
//                 <Edit size={18} /> Edit Benefit List
//               </button>
//             )}
//             {isManageModalOpen && (
//               <ListManagementModal
//                 title="Manage Benefits"
//                 items={benefits}
//                 onClose={() => setIsManageModalOpen(false)}
//                 onSave={handleBenefitsSave}
//                 renderForm={(item, setItem) => (
//                   <>
//                     <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                     <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                     <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
//                   </>
//                 )}
//                 itemTitleKey="title"
//               />
//             )}
//           </FadeIn>
//         </div>
//       </Container>
//     </section>
//   );
// };

// // ...
// // ... REPEAT THE SAME PATTERN FOR ALL OTHER SECTIONS ...
// // (ServicesSection, ServiceCtaSection, BenefitsSection, ProcessSection, TestimonialSection, ClientLogoSection, ContactCtaSection)
// // ...
// // For example, here's the TestimonialSection:
// // ---
// const TestimonialSection = ({ content, isAdmin, onUpdate }) => {
//   const { pre_title, title, list } = content || {};
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   const testimonials = list || [];
  
//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('testimonials', { ...content, [key]: newValue });
//   };
  
//   return (
//     <section className="bg-gray-50 py-20 sm:py-28">
//       <Container>
//         <FadeIn className="text-center max-w-3xl mx-auto">
//           <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
//           <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
//         </FadeIn>
        
//         <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
//           <div className="flex w-max animate-scroll hover:pause-animation">
//             {[...testimonials, ...testimonials].map((testimonial, index) => (
//               <div key={index} className="w-[300px] sm:w-[400px] lg:w-[450px] mx-4 flex-shrink-0">
//                 <div className="h-full flex flex-col justify-between p-8 bg-white rounded-2xl shadow-xl">
//                   {/* ... card content ... */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {isAdmin && (
//           <div className="text-center mt-12">
//             <button onClick={() => setIsManageModalOpen(true)} className="... (edit button styles) ...">
//               <Edit size={18} /> Manage Testimonials
//             </button>
//             {isManageModalOpen && (
//               <ListManagementModal
//                 title="Manage Testimonials"
//                 items={testimonials}
//                 onClose={() => setIsManageModalOpen(false)}
//                 onSave={newList => onUpdate('testimonials', {...content, list: newList})}
//                 renderForm={(item, setItem) => (
//                   <>
//                     <label>Quote: <textarea value={item.quote || ''} onChange={e => setItem(i => ({...i, quote: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                     <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                     <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                     <label>Avatar URL: <input type="text" value={item.avatar || ''} onChange={e => setItem(i => ({...i, avatar: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                   </>
//                 )}
//                 itemTitleKey="name"
//               />
//             )}
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// };


// // ---
// // --- GENERIC HELPER COMPONENTS (MODAL, ICONPICKER)
// // ---
// // Put these at the bottom of Home.jsx or in their own files
// // ---
// const ListManagementModal = ({ title, items, onClose, onSave, renderForm, itemTitleKey, fileKeys = [] }) => {
//   const [currentItems, setCurrentItems] = useState(items);
//   const [editingItem, setEditingItem] = useState(null); // The item object to edit
//   const [isSaving, setIsSaving] = useState(false);
//   const formRef = useRef(null);

//   const handleAddNew = () => {
//     setEditingItem({ id: uuidv4(), isNew: true }); // Use isNew flag
//   };

//   const handleEdit = (item) => {
//     setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
//   };

//   const handleDelete = (itemToDelete) => {
//     if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey]}"?`)) return;
//     const newItems = currentItems.filter(i => i.id !== itemToDelete.id);
//     setCurrentItems(newItems);
//     // Note: This only updates local state. The "Save All Changes" button pushes to DB.
//     // Or, you could have onSave push immediately.
//   };
  
//   const handleSaveAllChanges = async () => {
//     setIsSaving(true);
//     try {
//       // This is a simple save. For file-based saves, it's more complex.
//       // We will just call onSave with the currentItems.
//       // The individual form save (handleFormSubmit) is better.
//       await onSave(currentItems);
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert('Failed to save changes.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // This handles the form submission for BOTH add and edit
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSaving(true);
//     let updatedItem = { ...editingItem };
    
//     try {
//       // Handle file uploads
//       const fileInputs = formRef.current.querySelectorAll('.file-input');
//       for (const input of fileInputs) {
//         const file = input.files[0];
//         if (file) {
//           const key = input.dataset.key; // e.g., 'video' or 'image'
//           const oldStoragePath = editingItem[`${key}_storage_path`];
//           const { publicUrl, storagePath } = await contentApi.updateFile(file, oldStoragePath);
//           updatedItem[`${key}_url`] = publicUrl;
//           updatedItem[`${key}_storage_path`] = storagePath;
//         }
//       }
      
//       delete updatedItem.isNew; // Clean up flag

//       let newItemsArray;
//       if (items.find(i => i.id === updatedItem.id)) { // It's an update
//         newItemsArray = currentItems.map(i => i.id === updatedItem.id ? updatedItem : i);
//       } else { // It's a new item
//         newItemsArray = [...currentItems, updatedItem];
//       }
      
//       await onSave(newItemsArray); // Save the entire new array
//       setCurrentItems(newItemsArray);
//       setEditingItem(null); // Close the form
//     } catch (err) {
//       console.error(err);
//       alert('Failed to save item.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
//       <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <button onClick={onClose}><X /></button>
//         </div>

//         {/* --- Add/Edit Form --- */}
//         {editingItem ? (
//           <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg">
//             <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item: ${editingItem[itemTitleKey]}`}</h3>
//             <div className="flex flex-col gap-2 mt-2">
//               {renderForm(editingItem, setEditingItem, editingItem.isNew)}
//             </div>
//             <div className="flex gap-2 mt-4">
//               <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
//               <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
//             </div>
//           </form>
//         ) : (
//           <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 my-4 text-white bg-blue-600 rounded">
//             <Plus size={18} /> Add New Item
//           </button>
//         )}

//         {/* --- List of Current Items --- */}
//         <div className="space-y-2">
//           {currentItems.map(item => (
//             <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
//               <span className="font-semibold">{item[itemTitleKey] || 'New Item'}</span>
//               <div className="flex gap-2">
//                 <button onClick={() => handleEdit(item)} className="p-1 text-blue-600"><Edit size={16} /></button>
//                 <button onClick={() => handleDelete(item)} className="p-1 text-red-600"><Trash2 size={16} /></button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* <div className="flex justify-end gap-4 mt-6">
//           <button onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md">Cancel</button>
//           <button onClick={handleSaveAllChanges} disabled={isSaving} className="px-4 py-2 text-white bg-green-600 rounded-md">
//             {isSaving ? 'Saving...' : 'Save All Changes'}
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// const IconPicker = ({ value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [filter, setFilter] = useState('');
  
//   const filteredIcons = availableIconNames.filter(name => 
//     name.toLowerCase().includes(filter.toLowerCase())
//   ).slice(0, 50); // Limit to 50
  
//   return (
//     <div className="relative">
//       <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full p-2 border rounded">
//         <span>{value ? <DynamicIcon name={value} className="inline-block mr-2" /> : null} {value || 'Select Icon'}</span>
//         <span>{isOpen ? 'Close' : 'Open'}</span>
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
//           <input
//             type="text"
//             placeholder="Search icons..."
//             value={filter}
//             onChange={e => setFilter(e.target.value)}
//             className="w-full p-1 mb-2 border rounded"
//           />
//           <div className="grid grid-cols-6 gap-1">
//             {filteredIcons.map(name => (
//               <button
//                 key={name}
//                 type="button"
//                 onClick={() => {
//                   onChange(name);
//                   setIsOpen(false);
//                   setFilter('');
//                 }}
//                 className="p-2 border rounded hover:bg-gray-100"
//                 title={name}
//               >
//                 <DynamicIcon name={name} />
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// // ---
// // --- MAIN HOME COMPONENT (THE "CONTROLLER")
// // ---
// export const Home = () => {
//   const { isAdmin } = useAuth(); // Get admin status
  
//   // This one state holds ALL content for the page
//   const [pageContent, setPageContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch all page content on mount
//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const content = await contentApi.getHomePageContent();
//         setPageContent(content);
//       } catch (err) {
//         setError(err.message);
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchContent();
//   }, []);

//   //
//   // This is the MASTER update function passed to all sections
//   //
//   const handleSectionUpdate = async (sectionName, newContent) => {
//     if (!isAdmin) return;

//     // 1. Optimistic UI: Update local state immediately
//     setPageContent((prev) => ({
//       ...prev,
//       [sectionName]: newContent,
//     }));

//     // 2. Push change to the database
//     try {
//       await contentApi.updateSectionContent(sectionName, newContent);
//       // Can show a "Saved!" toast here
//     } catch (err) {
//       console.error('Failed to save content:', err);
//       setError('Failed to save changes. Please refresh.');
//       // Rollback optimistic update on failure (or fetch fresh data)
//     }
//   };

//   // Show a loading state
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading Content...
//       </div>
//     );
//   }

//   // Show an error state
//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold text-red-600">Error Loading Content</h2>
//         <p className="mt-2">{error}</p>
//         <p className="mt-4">Please check your Supabase connection and RLS policies.</p>
//       </div>
//     );
//   }

//   // Inject styles (unchanged)
//   const scrollStyles = `
//     @keyframes scroll {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//     .animate-scroll { animation: scroll 60s linear infinite; }
//     .animate-scroll-logos { animation: scroll 40s linear infinite; }
//     .hover\\:pause-animation:hover { animation-play-state: paused; }
//   `;

//   // Render the full page, passing content down
//   return (
//     <>
//       <style>{scrollStyles}</style>
//       <div className="bg-white text-gray-900 overflow-x-hidden">
//         {/*
//           *
//           * Each section now gets its content, admin status,
//           * and the master update function.
//           *
//           */}
//         <VedicCarouselSection
//           content={pageContent.vedic_carousel}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <HeroSection
//           content={pageContent.hero}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <StatsSection
//           content={pageContent.stats}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <LeadingTheWaySection
//           content={pageContent.leading_the_way}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <ServicesSection
//           content={pageContent.services}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <ServiceCtaSection
//           content={pageContent.ewaste_items}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <BenefitsSection
//           content={pageContent.benefits}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <ProcessSection
//           content={pageContent.process}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <TestimonialSection
//           content={pageContent.testimonials}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <ClientLogoSection
//           content={pageContent.client_logos}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//         <ContactCtaSection
//           content={pageContent.contact_cta}
//           isAdmin={isAdmin}
//           onUpdate={handleSectionUpdate}
//         />
//       </div>
//     </>
//   );
// };

// export default Home;
/*
*
* === FULLY UPDATED AND COMPLETE Home.jsx ===
*
*/
import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, Award, Box, CheckCircle, Cpu, DatabaseZap, HardDrive,
  Laptop, Layers, Monitor, PlayCircle, Printer, Recycle, Server,
  ShieldCheck, ShoppingCart, Smartphone, Smile, Star, Trash2,
  TrendingUp, Truck, Users, Wrench, Zap, Edit, Plus, X, Upload,
} from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // npm install uuid

// --- NEW IMPORTS ---
// import { useAuth } from '../AuthContext'; // Get admin status
// Ensure this path is correct for your project structure
import * as contentApi from '../api/contentApi'; // Our new API
// import { EditableText } from '../components/EditableText'; // Our new component
// import { EditableImage } from '../components/EditableImage'; // Our new component
// import { DynamicIcon, availableIconNames } from '../components/DynamicIcon'; // Our new component
import { useAuth } from '../context/AuthContext';
import { EditableText } from '../components/common/EditableText';
import { EditableImage } from '../components/common/EditableImage';
import { DynamicIcon, availableIconNames } from '../components/common/DynamicIcon';

// --- Reusable Components (Unchanged from your file) ---
const FadeIn = ({ children, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: props.x || 0, y: props.y || 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: props.delay || 0, ease: [0.25, 0.25, 0.25, 0.75] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Container = ({ children, className = '', ...props }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
    {children}
  </div>
);

const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const endValue = end;
      const startTime = Date.now();
      const easeOutQuad = (t) => t * (2 - t);
      const frame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentCount = easedProgress * endValue;
        setCount(parseFloat(currentCount.toFixed(decimals)));
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setCount(parseFloat(endValue.toFixed(decimals)));
        }
      };
      requestAnimationFrame(frame);
    }
  }, [inView, end, duration, decimals]);
  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
    </span>
  );
};


// ---
// --- 1. VEDIC CAROUSEL SECTION (Dynamic & Editable)
// ---
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const VedicCarouselSection = ({ content, isAdmin, onUpdate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const slides = content || []; 

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <Fragment key={slide.id}>
          <video
            key={slide.video_url} 
            autoPlay muted loop playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === activeSlide ? 0 : -1 }}
          >
            <source src={slide.video_url} type="video/mp4" />
          </video>
        </Fragment>
      ))}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white p-4">
        <AnimatePresence mode="wait">
          {slides.length > 0 && (
            <motion.div
              key={slides[activeSlide].id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-amber-300 drop-shadow-xl"
              >
                {slides[activeSlide].title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-lg"
              >
                {slides[activeSlide].text}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  to={slides[activeSlide].link}
                  className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-lg font-medium text-black bg-amber-400 rounded-full shadow-lg transform transition-all duration-300 hover:bg-amber-300 hover:shadow-xl hover:scale-105"
                >
                  <PlayCircle size={22} />
                  {slides[activeSlide].cta}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'w-6 bg-amber-400' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* --- EDIT BUTTON --- */}
      {isAdmin && (
        <div className="absolute z-40 bottom-24 left-1/2 -translate-x-1/2">
          <button
            onClick={() => setIsManageModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Edit size={18} /> Manage Carousel
          </button>
        </div>
      )}

      {/* --- MANAGEMENT MODAL (SYNTAX CORRECTED) --- */}
      {isManageModalOpen && (
        <ListManagementModal
          title="Manage Carousel Slides"
          items={slides}
          onClose={() => setIsManageModalOpen(false)}
          onSave={(newSlides) => onUpdate('vedic_carousel', newSlides)}
          renderForm={ (item, setItem, isNew) => (
            <>
              <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>CTA Button Text: <input type="text" value={item.cta || ''} onChange={e => setItem(i => ({...i, cta: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>Link (e.g., /wisdom): <input type="text" value={item.link || ''} onChange={e => setItem(i => ({...i, link: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>New Video File (optional): <input type="file" accept="video/mp4" data-key="video" className="w-full p-1 border rounded file-input" /></label>
              {item.video_url && <small>Current video: {item.video_url.substring(0, 50)}... Leave blank to keep.</small>}
            </>
          )}
          itemTitleKey="title"
          fileKeys={['video']}
        />
      )}
    </section>
  );
};


// ---
// --- 2. HERO SECTION (Dynamic & Editable)
// ---
const HeroSection = ({ content, isAdmin, onUpdate }) => {
  const { title, subtitle, image_url, image_storage_path } = content || {};

  const handleTextSave = async (key, newValue) => {
    const newContent = { ...content, [key]: newValue };
    await onUpdate('hero', newContent);
  };
  
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(
        file,
        image_storage_path
    );
    const newContent = {
        ...content,
        image_url: publicUrl,
        image_storage_path: storagePath
    };
    await onUpdate('hero', newContent);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <FadeIn y={0} delay={0.2} className="text-center lg:text-left">
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={title || ''}
              onSave={(newValue) => handleTextSave('title', newValue)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
              useTextarea
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={subtitle || ''}
              onSave={(newValue) => handleTextSave('subtitle', newValue)}
              className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
              useTextarea
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Static buttons */}
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-green-700 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                Our Services
              </Link>
            </div>
          </FadeIn>

          {/* Right Image/Graphic */}
          <FadeIn y={0} x={30} delay={0.4} className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob animation-delay-4000"></div>
              
              <EditableImage
                isAdmin={isAdmin}
                src={image_url || 'https://placehold.co/600x500'}
                alt="E-Waste Recycling Process"
                onSave={handleImageSave}
                className="relative rounded-3xl shadow-2xl w-full"
              />
              
              {/* Floating Icon Badges (static) */}
              <motion.div 
                className="absolute -top-6 -left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck className="text-green-600" size={28} />
                <span className="font-semibold text-sm text-gray-700">Data Security</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Recycle className="text-green-600" size={28} />
                <span className="font-semibold text-sm text-gray-700">Zero Landfill</span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 3. STATS SECTION (Dynamic & Editable)
// ---
const StatsSection = ({ content, isAdmin, onUpdate }) => {
  const stats = content || [];
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="relative flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute -top-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg">
                  <DynamicIcon name={stat.icon_name || 'Box'} className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
                <dd className="mt-8 text-5xl font-extrabold text-gray-900 tracking-tight">
                  <CountUp end={stat.value} duration={2000} decimals={stat.decimals || 0} />
                  {stat.suffix}
                </dd>
                <dt className="mt-3 text-base font-medium text-gray-500">{stat.label}</dt>
              </div>
            ))}
          </div>
        </FadeIn>
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Stats
            </button>
          </div>
        )}
        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Stats"
            items={stats}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newStats) => onUpdate('stats', newStats)}
            renderForm={ (item, setItem) => (
              <>
                <label>Label: <input type="text" value={item.label || ''} onChange={e => setItem(i => ({...i, label: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Value (Number): <input type="number" value={item.value || 0} onChange={e => setItem(i => ({...i, value: parseFloat(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Suffix (e.g., + or %): <input type="text" value={item.suffix || ''} onChange={e => setItem(i => ({...i, suffix: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Decimals (e.g., 0 or 1): <input type="number" value={item.decimals || 0} onChange={e => setItem(i => ({...i, decimals: parseInt(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="label"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 4. LEADING THE WAY SECTION (Dynamic & Editable)
// ---
const LeadingTheWaySection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, image_url, image_storage_path, benefits } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('leading_the_way', { ...content, [key]: newValue });
  };
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(file, image_storage_path);
    await onUpdate('leading_the_way', { ...content, image_url: publicUrl, image_storage_path: storagePath });
  };
  const handleBenefitsSave = async (newBenefits) => {
    await onUpdate('leading_the_way', { ...content, benefits: newBenefits });
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <FadeIn x={-30} className="relative">
            <EditableImage
              isAdmin={isAdmin}
              src={image_url || 'https://placehold.co/600x600'}
              alt="ECycleGreen advanced recycling facility"
              onSave={handleImageSave}
              className="rounded-3xl shadow-2xl relative z-10 w-full"
            />
          </FadeIn>
          
          {/* Content Side */}
          <FadeIn x={30} delay={0.2}>
            <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
            <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
            <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
            
            <ul className="mt-8 space-y-6">
              {(benefits || []).map(item => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    <DynamicIcon name={item.icon_name || 'Box'} className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {isAdmin && (
              <button 
                onClick={() => setIsManageModalOpen(true)} 
                className="mt-6 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Edit size={18} /> Edit Benefit List
              </button>
            )}
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Benefits"
                items={benefits}
                onClose={() => setIsManageModalOpen(false)}
                onSave={handleBenefitsSave}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
                  </>
                )}
                itemTitleKey="title"
              />
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 5. SERVICES SECTION (NOW IMPLEMENTED)
// ---
const ServicesSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('services', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {(list || []).map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="h-full p-8 bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white group">
                <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full inline-block shadow-lg">
                  <DynamicIcon name={service.icon_name || 'Box'} className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <Link to={service.link || '#'} className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Learn More <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Services
            </button>
          </div>
        )}

        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Services"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('services', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Link (e.g., /services/itad): <input type="text" value={item.link || ''} onChange={e => setItem(i => ({...i, link: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 6. SERVICE CTA (E-WASTE ITEMS) SECTION (Dynamic & Editable)
// ---
const ServiceCtaSection = ({ content, isAdmin, onUpdate }) => {
  const { title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('ewaste_items', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 sm:py-28">
      <Container className="text-center">
        <FadeIn>
          <EditableText as="h2" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto" useTextarea />
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mt-16">
          {(list || []).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05} className="flex flex-col items-center">
              <div className="p-5 bg-white/10 rounded-full">
                <DynamicIcon name={item.icon_name || 'Box'} className="h-10 w-10 text-green-400" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-200">{item.name}</p>
            </FadeIn>
          ))}
        </div>

        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Recycled Items
            </button>
          </div>
        )}
        
        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Recycled Items"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('ewaste_items', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 7. BENEFITS SECTION (Dynamic & Editable)
// ---
const BenefitsSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, image_url, image_storage_path, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('benefits', { ...content, [key]: newValue });
  };
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(file, image_storage_path);
    await onUpdate('benefits', { ...content, image_url: publicUrl, image_storage_path: storagePath });
  };

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <FadeIn x={-30} delay={0.2}>
            <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
            <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
            <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
            
            <ul className="mt-8 space-y-6">
              {(list || []).map(item => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    <DynamicIcon name={item.icon_name || 'Box'} className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {isAdmin && (
              <button 
                onClick={() => setIsManageModalOpen(true)} 
                className="mt-6 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Edit size={18} /> Edit Benefit List
              </button>
            )}
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Benefits List"
                items={list || []}
                onClose={() => setIsManageModalOpen(false)}
                onSave={(newList) => onUpdate('benefits', { ...content, list: newList })}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
                  </>
                )}
                itemTitleKey="title"
              />
            )}
          </FadeIn>
          
          {/* Image Side */}
          <FadeIn x={30} className="relative">
            <EditableImage
              isAdmin={isAdmin}
              src={image_url || 'https://placehold.co/600x700'}
              alt="Protecting your brand with secure e-waste recycling"
              onSave={handleImageSave}
              className="rounded-3xl shadow-2xl relative z-10 w-full"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 8. PROCESS SECTION (Dynamic & Editable)
// ---
const ProcessSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('process', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
        </FadeIn>
        
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gray-300 border-dashed" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {(list || []).map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.15} className="relative p-8 bg-white rounded-2xl shadow-xl z-10">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold text-green-600">{step.step}</span>
                  <DynamicIcon name={step.icon_name || 'Box'} className="h-12 w-12 text-gray-900" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.name}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Process Steps
            </button>
          </div>
        )}
        
        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Process Steps"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('process', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Step (e.g., 01): <input type="text" value={item.step || ''} onChange={e => setItem(i => ({...i, step: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 9. TESTIMONIALS SECTION (Dynamic & Editable)
// ---
const TestimonialSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const testimonials = list || [];
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('testimonials', { ...content, [key]: newValue });
  };
  
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
        </FadeIn>
        
        <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll hover:pause-animation">
            {[...(testimonials), ...(testimonials)].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-[300px] sm:w-[400px] lg:w-[450px] mx-4 flex-shrink-0">
                <div className="h-full flex flex-col justify-between p-8 bg-gray-50 rounded-2xl shadow-xl">
                  <div className="flex-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <blockquote className="mt-6 text-lg text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <img className="h-14 w-14 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Testimonials
            </button>
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Testimonials"
                items={testimonials}
                onClose={() => setIsManageModalOpen(false)}
                onSave={newList => onUpdate('testimonials', {...content, list: newList})}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Quote: <textarea value={item.quote || ''} onChange={e => setItem(i => ({...i, quote: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Avatar URL: <input type="text" value={item.avatar || ''} onChange={e => setItem(i => ({...i, avatar: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <small>Use a service like placehold.co or upload to storage and paste the URL.</small>
                  </>
                )}
                itemTitleKey="name"
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};


// ---
// --- 10. CLIENT LOGOS SECTION (Dynamic & Editable)
// ---
const ClientLogoSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const logos = list || [];

  const handleTextSave = async (key, newValue) => {
    await onUpdate('client_logos', { ...content, [key]: newValue });
  };
  
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-gray-600 tracking-wider" />
        </FadeIn>
        
        <div className="mt-8 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll-logos hover:pause-animation">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="w-48 mx-8 flex-shrink-0">
                <img 
                  src={logo.logo_url} 
                  alt={logo.name} 
                  className="h-12 w-full object-contain" 
                  style={{ filter: 'grayscale(100%) opacity(60%)' }} 
                />
              </div>
            ))}
          </div>
        </div>

        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Client Logos
            </button>
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Client Logos"
                items={logos}
                onClose={() => setIsManageModalOpen(false)}
                onSave={newList => onUpdate('client_logos', {...content, list: newList})}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Logo URL: <input type="text" value={item.logo_url || ''} onChange={e => setItem(i => ({...i, logo_url: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>New Logo File (optional): <input type="file" accept="image/*" data-key="logo" className="w-full p-1 border rounded file-input" /></label>
                    <small>Uploading a file will override the URL.</small>
                  </>
                )}
                itemTitleKey="name"
                fileKeys={['logo']}
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};


// ---
// --- 11. CONTACT CTA SECTION (Dynamic & Editable)
// ---
const ContactCtaSection = ({ content, isAdmin, onUpdate }) => {
  const { title, text } = content || {};
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('contact_cta', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Container className="py-20 sm:py-28 text-center">
        <FadeIn>
          <EditableText as="h2" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto" useTextarea />
          <div className="mt-10">
            {/* Static button */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-gray-900 bg-green-500 rounded-lg shadow-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};


// ---
// --- GENERIC HELPER COMPONENTS (MODAL, ICONPICKER)
// ---
const ListManagementModal = ({ title, items, onClose, onSave, renderForm, itemTitleKey, fileKeys = [] }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [editingItem, setEditingItem] = useState(null); // The item object to edit
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(null);

  const handleAddNew = () => {
    setEditingItem({ id: uuidv4(), isNew: true }); // Use isNew flag
  };

  const handleEdit = (item) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
  };

  const handleDelete = async (itemToDelete) => {
    if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey] || 'this item'}"?`)) return;
    
    setIsSaving(true);
    try {
      // Delete any associated files
      for (const key of fileKeys) {
        if (itemToDelete[`${key}_storage_path`]) {
          await contentApi.deleteFile(itemToDelete[`${key}_storage_path`]);
        }
      }
      
      const newItems = currentItems.filter(i => i.id !== itemToDelete.id);
      await onSave(newItems); // Save deletion immediately
      setCurrentItems(newItems);
      
    } catch (err) {
      console.error('Failed to delete item:', err);
      alert('Failed to delete item.');
    } finally {
      setIsSaving(false);
    }
  };

  // This handles the form submission for BOTH add and edit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let updatedItem = { ...editingItem };
    
    try {
      // Handle file uploads
      const fileInputs = formRef.current.querySelectorAll('.file-input');
      for (const input of fileInputs) {
        const file = input.files[0];
        if (file) {
          const key = input.dataset.key; // e.g., 'video' or 'logo'
          const oldStoragePath = items.find(i => i.id === updatedItem.id)?.[`${key}_storage_path`];
          
          const { publicUrl, storagePath } = await contentApi.updateFile(file, oldStoragePath);
          updatedItem[`${key}_url`] = publicUrl;
          updatedItem[`${key}_storage_path`] = storagePath;
        }
      }
      
      delete updatedItem.isNew; // Clean up flag

      let newItemsArray;
      if (items.find(i => i.id === updatedItem.id)) { // It's an update
        newItemsArray = currentItems.map(i => i.id === updatedItem.id ? updatedItem : i);
      } else { // It's a new item
        newItemsArray = [...currentItems, updatedItem];
      }
      
      await onSave(newItemsArray); // Save the entire new array
      setCurrentItems(newItemsArray);
      setEditingItem(null); // Close the form
    } catch (err) {
      console.error(err);
      alert('Failed to save item.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose}><X /></button>
        </div>

        {/* --- Add/Edit Form --- */}
        {editingItem ? (
          <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item`}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {renderForm(editingItem, setEditingItem, editingItem.isNew)}
            </div>
            <div className="flex gap-2 mt-4">
              <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
              <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 my-4 text-white bg-blue-600 rounded">
            <Plus size={18} /> Add New Item
          </button>
        )}

        {/* --- List of Current Items --- */}
        <div className="space-y-2">
          {currentItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
              <span className="font-semibold">{item[itemTitleKey] || 'New Item'}</span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} disabled={isSaving} className="p-1 text-blue-600 disabled:text-gray-400"><Edit size={16} /></button>
                <button onClick={() => handleDelete(item)} disabled={isSaving} className="p-1 text-red-600 disabled:text-gray-400"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IconPicker = ({ value, onChange }) => {
const [isOpen, setIsOpen] = useState(false);
const [filter, setFilter] = useState('');

const filteredIcons = availableIconNames.filter(name => 
  name.toLowerCase().includes(filter.toLowerCase())
).slice(0, 50); // Limit to 50

return (
  <div className="relative">
    <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full p-2 border rounded">
      <span>{value ? <DynamicIcon name={value} className="inline-block mr-2" /> : null} {value || 'Select Icon'}</span>
      <span>{isOpen ? 'Close' : 'Open'}</span>
    </button>
    {isOpen && (
      <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
        <input
          type="text"
          placeholder="Search icons..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full p-1 mb-2 border rounded"
        />
        <div className="grid grid-cols-6 gap-1">
          {filteredIcons.map(name => (
            <button
              key={name}
              type="button"
              onClick={() => {
                onChange(name);
                setIsOpen(false);
                setFilter('');
              }}
              className="p-2 border rounded hover:bg-gray-100"
              title={name}
            >
              <DynamicIcon name={name} />
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);
};


// ---
// --- MAIN HOME COMPONENT (THE "CONTROLLER")
// ---
export const Home = () => {
  //const { isAdmin } = useAuth(); // Get admin status
  const isAdmin = true; // TEMP: Hardcoded for testing
  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all page content on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await contentApi.getHomePageContent();
        setPageContent(content);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, []);

  // MASTER update function
  const handleSectionUpdate = async (sectionName, newContent) => {
    if (!isAdmin) return;

    // 1. Optimistic UI: Update local state immediately
    setPageContent((prev) => ({
      ...prev,
      [sectionName]: newContent,
    }));

    // 2. Push change to the database
    try {
      await contentApi.updateSectionContent(sectionName, newContent);
      // You could show a "Saved!" toast here
    } catch (err) {
      console.error('Failed to save content:', err);
      setError('Failed to save changes. Please refresh.');
      // You could implement a more robust rollback here.
    }
  };

  // Show a loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading Content...
      </div>
    );
  }

  // Show an error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error Loading Content</h2>
        <p className="mt-2">{error}</p>
        <p className="mt-4">Please check your Supabase connection and RLS policies.</p>
      </div>
    );
  }

  // Inject styles (unchanged)
  const scrollStyles = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll { animation: scroll 60s linear infinite; }
    .animate-scroll-logos { animation: scroll 40s linear infinite; }
    .hover\\:pause-animation:hover { animation-play-state: paused; }
  `;

  // Render the full page, passing content down
  return (
    <>
      <style>{scrollStyles}</style>
      <div className="bg-white text-gray-900 overflow-x-hidden">
        {/*
          *
          * Each section now gets its content, admin status,
          * and the master update function.
          *
          */}
        <VedicCarouselSection
          content={pageContent.vedic_carousel}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <HeroSection
          content={pageContent.hero}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <StatsSection
          content={pageContent.stats}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <LeadingTheWaySection
          content={pageContent.leading_the_way}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ServicesSection
          content={pageContent.services}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ServiceCtaSection
          content={pageContent.ewaste_items}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <BenefitsSection
          content={pageContent.benefits}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ProcessSection
          content={pageContent.process}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <TestimonialSection
          content={pageContent.testimonials}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ClientLogoSection
          content={pageContent.client_logos}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ContactCtaSection
          content={pageContent.contact_cta}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </>
  );
};

export default Home;