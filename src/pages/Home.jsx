

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
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
// //       transition={{ duration, delay }}
// //       {...props}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
// //   const [count, setCount] = useState(0);
// //   const { ref, inView: isVisible } = useInView({ threshold: 0.5, triggerOnce: true });

// //   useEffect(() => {
// //     if (isVisible) {
// //       let start = 0;
// //       const endValue = end;
// //       const startTime = Date.now();
// //       const easeOutQuad = (t) => t * (2 - t);

// //       const frame = () => {
// //         const now = Date.now();
// //         const progress = Math.min((now - startTime) / duration, 1);
// //         const easedProgress = easeOutQuad(progress);
// //         setCount(Math.floor(easedProgress * endValue));
// //         if (progress < 1) {
// //           requestAnimationFrame(frame);
// //         }
// //       };
// //       requestAnimationFrame(frame);
// //     }
// //   }, [isVisible, end, duration]);

// //   return (
// //     // Updated gradient to match the green/blue theme
// //     <span ref={ref} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
// //       {prefix}{count.toLocaleString()}{suffix}
// //     </span>
// //   );
// // };

// // const TestimonialCarousel = () => {
// //   const testimonials = [
// //     {
// //       quote: "The quality of the refurbished laptop I received was outstanding. It looked and felt brand new. Their commitment to sustainability is what won me over.",
// //       name: "Sarah J.",
// //       title: "Eco-Conscious Developer"
// //     },
// //     {
// //       quote: "EonCircular's service is top-notch. They helped our school district secure hundreds of high-quality laptops at an affordable price. A seamless process from start to finish.",
// //       name: "Michael T.",
// //       title: "IT Director, Public Schools"
// //     },
// //     {
// //       quote: "I was skeptical about 'refurbished' at first, but the laptop I bought exceeded all my expectations. Plus, I feel good about the purchase.",
// //       name: "Emily R.",
// //       title: "Freelance Designer"
// //     }
// //   ];
  
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
// //     }, 5000); // Change slide every 5 seconds
    
// //     return () => clearInterval(timer);
// //   }, [testimonials.length]);

// //   return (
// //     // Re-styled for DARK MODE theme per your screenshots
// //     <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
// //       {testimonials.map((item, index) => (
// //         <div
// //           key={index}
// //           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
// //             index === currentIndex ? 'opacity-100' : 'opacity-0'
// //           }`}
// //         >
// //           <div className="flex flex-col items-center justify-center h-full text-center">
// //             <p className="text-xl md:text-2xl font-light text-gray-200 italic">"{item.quote}"</p>
// //             <p className="text-lg font-semibold text-white mt-6">{item.name}</p>
// //             <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-medium">{item.title}</p>
// //           </div>
// //         </div>
// //       ))}
// //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
// //         {testimonials.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //               index === currentIndex ? 'bg-green-500 w-4' : 'bg-gray-400'
// //             }`}
// //           ></button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Reusable Container component
// // const Container = ({ children, className = '' }) => (
// //   <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
// //     {children}
// //   </div>
// // );

// // // --- Page Sections (All Sections Included) ---

// // // 1. Hero Section (Dark Mode, Video BG)
// // const HeroSection = () => {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
// //       {/* Background Video */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
// //         poster="https://placehold.co/1920x1080/000000/333?text=Loading+Video...&font=inter"
// //       >
// //         {/* Placeholder video - replace with your actual video */}
// //         <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-close-up-1033-large.mp4" type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>
      
// //       {/* Gradient Overlay */}
// //       <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      
// //       {/* Content */}
// //       <FadeIn className="relative z-20 flex flex-col items-center px-4">
// //         <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold !leading-tight tracking-tight">
// //           The Future of Tech is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Circular</span>.
// //         </h1>
// //         <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
// //           High-performance refurbished technology, certified for quality and sustainability. Good for the planet, great for your budget.
// //         </p>
// //         <div className="mt-10 flex flex-col sm:flex-row gap-4">
// //           <button
// //             onClick={() => navigate('/laptops')}
// //             className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105"
// //           >
// //             Browse Laptops
// //             <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
// //           </button>
// //           <button
// //             onClick={() => navigate('/sustainability')}
// //             className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-800 rounded-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-700 border border-gray-700"
// //           >
// //             Our Mission
// //           </button>
// //         </div>
// //       </FadeIn>
// //     </div>
// //   );
// // };

// // // 2. Stats Section (Dark Mode, CountUp)
// // const StatsSection = () => {
// //   const stats = [
// //     { value: 12000, suffix: 't', text: 'Tons of CO2 Saved' },
// //     { value: 500000, suffix: '+', text: 'Devices Given New Life' },
// //     { value: 98, suffix: '%', text: 'Positive Reviews' },
// //     { value: 45, suffix: 'M', text: 'Liters of Water Saved' }
// //   ];

// //   return (
// //     <section className="py-20 bg-black text-white">
// //       <Container>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
// //           {stats.map((stat, index) => (
// //             <FadeIn key={index} delay={index * 0.15} className="text-center">
// //               <span className="text-5xl md:text-6xl font-extrabold">
// //                 <CountUp end={stat.value} suffix={stat.suffix} />
// //               </span>
// //               <p className="mt-3 text-lg text-gray-400">{stat.text}</p>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 3. Commitment to Quality Section (Dark Mode, Gradient Icons)
// // const QualitySection = () => {
// //   const items = [
// //     { icon: Award, title: "BSI Kitemark Certified", text: "Proving our commitment to quality, safety, and performance standards." },
// //     { icon: CheckCircle, title: "300-Point Inspection", text: "Every device undergoes a rigorous check to ensure it meets our A-Grade standard." },
// //     { icon: Star, title: "A-Grade Cosmetics", text: "Cosmetically 'like-new' with only the lightest, if any, signs of use." }
// //   ];

// //   return (
// //     <section className="py-24 bg-gray-900 text-white">
// //       <Container>
// //         <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Quality</span></h2>
// //           <p className="text-lg text-gray-300">
// //             We don't just refurbish; we re-engineer for excellence. Our certifications and meticulous processes guarantee you receive a device you can trust.
// //           </p>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {items.map((item, index) => (
// //             <FadeIn key={item.title} delay={index * 0.2}>
// //               <div className="bg-black p-8 rounded-2xl border border-gray-800 shadow-xl transition-all duration-300 hover:shadow-green-500/10 hover:-translate-y-1 hover:border-gray-700">
// //                 <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full text-white shadow-lg mb-6">
// //                   <item.icon className="w-8 h-8" />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
// //                 <p className="text-gray-400">{item.text}</p>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 4. Brands Marquee (Dark Mode, Infinite Scroll)
// // const BrandsMarquee = () => {
// //   const brands = ['HP', 'Dell', 'Apple', 'Lenovo', 'Microsoft', 'Samsung', 'Acer', 'Asus'];
// //   const allBrands = [...brands, ...brands]; // Duplicate for seamless scroll

// //   return (
// //     <div className="py-16 bg-black overflow-hidden">
// //       <Container>
// //         <FadeIn>
// //           <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
// //             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 animate-infinite-scroll">
// //               {allBrands.map((brand, index) => (
// //                 <li key={index}>
// //                   <img 
// //                     src={`https://placehold.co/150x60/f1f5f9/9ca3af?text=${brand}&font=inter`} 
// //                     alt={brand} 
// //                     className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
// //                   />
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </FadeIn>
// //       </Container>
// //     </div>
// //   );
// // };

// // // 5. Sustainability Section (Dark Mode, Image Grid)
// // const SustainabilitySection = () => {
// //   const items = [
// //     { name: 'CO2 emissions', img: 'https://placehold.co/600x400/003973/ffffff?text=CO2&font=inter' },
// //     { name: 'Water Usage', img: 'https://placehold.co/600x400/005f9e/ffffff?text=Water&font=inter' },
// //     { name: 'Rare Minerals', img: 'https://placehold.co/600x400/008ac5/ffffff?text=Minerals&font=inter' },
// //     { name: 'E-waste', img: 'https://placehold.co/600x400/39b5e0/ffffff?text=E-waste&font=inter' },
// //     { name: 'Device Re-use', img: 'https://placehold.co/600x400/74c5e8/ffffff?text=Re-use&font=inter' },
// //   ];

// //   return (
// //     <section className="py-24 bg-black text-white">
// //       <Container>
// //         <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Positive Impact</span> With Every Device</h2>
// //           <p className="text-lg text-gray-300">
// //             Choosing refurbished isn't just a smart financial decision. It's an active vote for a more sustainable future.
// //           </p>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
// //           {items.map((item, index) => (
// //             <FadeIn key={item.name} delay={index * 0.1} className="relative h-64 sm:h-80 group overflow-hidden">
// //               <img 
// //                 src={item.img} 
// //                 alt={item.name} 
// //                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
// //               />
// //               <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
// //               <div className="absolute bottom-0 left-0 p-6">
// //                 <h3 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">{item.name}</h3>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 6. "Our Process" Video Section (Dark Mode, Play Button)
// // const ProcessVideoSection = () => {
// //   return (
// //     <section className="py-24 bg-gray-900 text-white">
// //       <Container>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
// //           <FadeIn>
// //             <h2 className="text-4xl md:text-5xl font-extrabold mb-6">See How We Do It</h2>
// //             <p className="text-lg text-gray-300 mb-8">
// //               From secure data erasure to our 300-point inspection and final A-Grade certification, see the journey your device takes before it gets to you.
// //             </p>
// //             <button
// //               onClick={() => { /* Implement modal logic here */ }}
// //               className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105"
// //             >
// //               Learn About Our Process
// //               <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
// //             </button>
// //           </FadeIn>
          
// //           <FadeIn delay={0.2}>
// //             <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
// //               <img 
// //                 src="https://placehold.co/600x400/1f2937/ffffff?text=Our+Refurbishing+Process&font=inter" 
// //                 alt="Our Refurbishing Process"
// //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //               />
// //               <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <PlayCircle className="w-24 h-24 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
// //               </div>
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 7. Testimonials Section (Dark Mode)
// // const TestimonialSection = () => (
// //   <section className="py-24 bg-black text-white">
// //     <Container>
// //       <FadeIn className="text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Thousands</span></h2>
// //       </FadeIn>
// //       <FadeIn>
// //         <TestimonialCarousel />
// //       </FadeIn>
// //     </Container>
// //   </section>
// // );

// // // 8. Recycling Process Section (Light Mode, Green Theme)
// // const RecyclingProcessSection = () => {
// //   const steps = [
// //     { icon: Truck, title: '1. Secure Collection', text: 'We arrange secure, GPS-tracked logistics from your facility to ours.' },
// //     { icon: DatabaseZap, title: '2. Data Destruction', text: 'All devices undergo certified data erasure or physical destruction.' },
// //     { icon: Wrench, title: '3. Triage & Refurbish', text: 'Devices are tested, graded, and refurbished for their next life.' },
// //     { icon: Recycle, title: '4. Responsible Recycling', text: 'Non-viable parts are processed responsibly, adhering to our zero-landfill policy.' }
// //   ];
  
// //   return (
// //     <section className="py-24 bg-white text-gray-900">
// //       <Container>
// //         <FadeIn className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-700">Recycling Process</span></h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer comprehensive IT Asset Disposition (ITAD) services for businesses.</p>
// //         </FadeIn>
        
// //         <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {/* Decorative Line */}
// //           <div className="hidden lg:block absolute top-14 left-0 w-full h-px bg-gray-300 -z-10"></div>

// //           {steps.map((step, index) => (
// //             <FadeIn key={step.title} delay={index * 0.2}>
// //               <div className="relative bg-white p-6 rounded-xl text-center z-10">
// //                 <div className="mb-4 inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600 border-4 border-white shadow-md">
// //                   <step.icon className="w-12 h-12" />
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-3">{step.title}</h3>
// //                 <p className="text-gray-600 text-sm">{step.text}</p>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 9. "How It Works" (Buying) Section (Light Mode, Green Theme)
// // const HowItWorksSection = () => {
// //   const steps = [
// //     { icon: ShoppingCart, title: "1. You Shop", text: "Browse our A-Grade certified laptops and find the perfect match." },
// //     { icon: Box, title: "2. We Ship", text: "We securely pack your device in eco-friendly materials and ship it." },
// //     { icon: Smile, title: "3. You Enjoy", text: "Unbox your 'like-new' device and enjoy top performance." }
// //   ];

// //   return (
// //     <section className="py-24 bg-gray-50 text-gray-900">
// //       <Container>
// //         <FadeIn className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-700">(For Buyers)</span></h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">Getting your next device is simple, affordable, and sustainable.</p>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {steps.map((step, index) => (
// //             <FadeIn key={step.title} delay={index * 0.2}>
// //               <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-green-500/10 hover:-translate-y-1 hover:border-green-300 hover:scale-105">
// //                 <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white shadow-lg mb-6">
// //                   <step.icon className="w-10 h-10" />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
// //                 <p className="text-gray-600 flex-grow">{step.text}</p>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 10. Products Section (Light Mode, Green/Blue Theme)
// // const ProductsSection = () => {
// //   const navigate = useNavigate();
// //   const products = [
// //     { name: 'Latitude 7400', specs: 'Core i7, 16GB RAM, 512GB SSD', price: '$450', img: 'https://placehold.co/600x400/dbeafe/333?text=Refurbished+Latitude&font=inter' },
// //     { name: 'MacBook Pro 13"', specs: 'M1, 8GB RAM, 256GB SSD', price: '$820', img: 'https://placehold.co/600x400/e0e7ff/333?text=Refurbished+MacBook&font=inter' },
// //     { name: 'ThinkPad X1 Carbon', specs: 'Core i5, 16GB RAM, 512GB SSD', price: '$510', img: 'https://placehold.co/600x400/dcfce7/333?text=Refurbished+ThinkPad&font=inter' },
// //   ];

// //   return (
// //     <section className="py-24 bg-white text-gray-900">
// //       <Container>
// //         <FadeIn className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">A-Grade Laptops</span></h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">A-Grade quality. Unbeatable prices. 12-Month Warranty.</p>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {products.map((product, index) => (
// //             <FadeIn key={product.name} delay={index * 0.2}>
// //               <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/10 hover:border-blue-300">
// //                 <div className="overflow-hidden">
// //                   <img src={product.img} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
// //                   <p className="text-gray-600 mb-4">{product.specs}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">{product.price}</span>
// //                     <button 
// //                       onClick={() => navigate('/product/1')}
// //                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg border border-gray-900 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white"
// //                     >
// //                       View <ArrowRight className="w-4 h-4 ml-1" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // // 11. Deliverables Section (Dark Mode, Final CTA)
// // const DeliverablesSection = () => {
// //   return (
// //     <section className="py-24 bg-black text-white">
// //       <Container>
// //         <FadeIn className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">We Deliver. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Always.</span></h2>
// //         </FadeIn>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {['Quality', 'Consistency', 'Availability', 'Affordability'].map((item, index) => (
// //             <FadeIn key={item} delay={index * 0.15}>
// //               <div className="relative p-8 h-64 flex flex-col justify-end rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800 group">
// //                 <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-300"></div>
// //                 <img 
// //                   src={`https://placehold.co/400x300/${['1a237e', '1c3b7e', '1e557e', '1e6f7e'][index]}/ffffff?text=${item}&font=inter`} 
// //                   alt={item}
// //                   className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
// //                 />
// //                 <div className="relative">
// //                   <h3 className="text-4xl font-bold text-white z-10">{item}</h3>
// //                   <p className="text-blue-400 mt-2 font-medium group-hover:translate-x-1 transition-transform duration-300">This is our promise.</p>
// //                 </div>
// //               </div>
// //             </FadeIn>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };


// // // --- Main Home Component ---

// // export const Home = () => {
// //   return (
// //     <div className="bg-black">
// //       <HeroSection />
// //       <StatsSection />
// //       <QualitySection />
// //       <BrandsMarquee />
// //       <SustainabilitySection />
// //       <ProcessVideoSection />
// //       <TestimonialSection />
// //       <RecyclingProcessSection />
// //       <HowItWorksSection />
// //       <ProductsSection />
// //       <DeliverablesSection />
// //     </div>
// //   );
// // };

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FadeIn } from '../components/common/FadeIn'; // Assuming FadeIn.jsx is in the same folder or adjust path
// import { CountUp } from '../components/common/CountUp'; // Assuming CountUp.jsx is in the same folder or adjust path
// import { TestimonialCarousel } from '../components/home/TestimonialCarousel'; // Assuming TestimonialCarousel.jsx is in the same folder or adjust path
// import {
//   Recycle,
//   ShieldCheck,
//   CheckCircle,
//   ArrowRight,
//   ChevronDown,
//   Database,
//   Laptop,
//   Server,
//   Smartphone,
//   Search,
//   Award,
//   Users,
//   ThumbsUp,
//   Star,
//   Zap,
//   Package,
//   Truck,
//   DatabaseZap,
//   HeartHandshake
// } from 'lucide-react';

// // A helper component to standardize page sections
// const Container = ({ children, className = "" }) => {
//   return (
//     <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
//       {children}
//     </div>
//   );
// };

// // Section 1 & 2: Hero + Leading the Way
// const HeroSection = () => {
//   const stats = [
//     { value: 10, suffix: 'M+', label: 'Devices Recycled' },
//     { value: 2500, suffix: '+', label: 'Happy Clients' },
//     { value: 40, suffix: 'M+', label: 'Lbs of E-Waste Diverted' },
//     { value: 100, suffix: '%', label: 'Data Security' },
//   ];

//   return (
//     <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-white">
//       <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <FadeIn>
//           <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
//             <Star size={16} className="text-green-600" />
//             100% Customer Satisfaction
//           </span>
//           <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
//             Leading the Way in Electronics Recycling
//           </h1>
//           <p className="mt-6 text-lg text-gray-600 max-w-xl">
//             We provide secure, certified, and sustainable recycling solutions for all your electronic devices, ensuring data security and environmental responsibility.
//           </p>
//           <div className="mt-10 flex flex-wrap gap-4">
//             <Link
//               to="/services"
//               className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               Our Services
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium text-green-700 bg-green-100 hover:bg-green-200 transform hover:scale-105 transition-all duration-300"
//             >
//               Get a Quote
//             </Link>
//           </div>
//         </FadeIn>
        
//         <FadeIn delay={0.2} className="w-full">
//           <img
//             src="https://placehold.co/600x500/16a34a/ffffff?text=Secure+Recycling&font=inter"
//             alt="Secure Electronics Recycling"
//             className="rounded-2xl shadow-2xl w-full h-auto object-cover"
//             onError={(e) => e.target.src = 'https://placehold.co/600x500/e0e0e0/909090?text=Image+Error'}
//           />
//         </FadeIn>
//       </Container>
      
//       {/* Stats part of the Hero */}
//       <Container className="mt-24">
//         <FadeIn>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
//                   <CountUp end={stat.value} suffix={stat.suffix} />
//                 </h3>
//                 <p className="mt-2 text-base font-medium text-gray-500">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// // Section 3: Multifaceted Electronics Recycling Services
// const ServicesSection = () => {
//   const services = [
//     {
//       icon: DatabaseZap,
//       name: "Data Destruction",
//       desc: "Certified and secure data wiping and physical destruction.",
//       path: "/services/data-destruction"
//     },
//     {
//       icon: Laptop,
//       name: "ITAD",
//       desc: "IT Asset Disposition for remarketing and value recovery.",
//       path: "/services/itad"
//     },
//     {
//       icon: Server,
//       name: "Enterprise Recycling",
//       desc: "Scalable solutions for large-scale corporate e-waste.",
//       path: "/services/enterprise"
//     },
//     {
//       icon: Smartphone,
//       name: "Device Refurbishing",
//       desc: "Extending the life of devices to promote a circular economy.",
//       path: "/services/refurbishing"
//     },
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50">
//       <Container>
//         <FadeIn className="text-center">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             Multifaceted Electronics Recycling Services
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             From secure data destruction to asset remarketing, we offer a full suite of services.
//           </p>
//         </FadeIn>
        
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <FadeIn key={service.name} delay={index * 0.1}>
//               <Link
//                 to={service.path}
//                 className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <service.icon className="h-12 w-12 text-green-600" />
//                 <h3 className="mt-6 text-xl font-bold text-gray-900">{service.name}</h3>
//                 <p className="mt-2 text-gray-500">{service.desc}</p>
//                 <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-600 group-hover:text-green-700">
//                   Learn More
//                   <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Link>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Section 4: "Not the Service you are Looking For?"
// const CtaSection = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="py-16 sm:py-24 bg-gradient-to-r from-green-50 to-emerald-50">
//       <Container>
//         <FadeIn className="flex flex-col lg:flex-row justify-between items-center gap-8 bg-white p-12 rounded-2xl shadow-xl">
//           <div className="text-center lg:text-left">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//               Not the Service You're Looking For?
//             </h2>
//             <p className="mt-3 text-lg text-gray-600 max-w-2xl">
//               Explore our full range of certified recycling and IT disposition services to find the perfect solution for your needs.
//             </p>
//           </div>
//           <motion.button
//             onClick={() => navigate('/services')}
//             className="flex-shrink-0 px-10 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg"
//             whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore All Services
//           </motion.button>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// // Section 5: "The Benefits of Our Services"
// const BenefitsSection = () => {
//   const benefits = [
//     {
//       icon: ShieldCheck,
//       name: "Absolute Data Security",
//       desc: "Our NAID AAA certified process ensures 100% data destruction, protecting your sensitive information."
//     },
//     {
//       icon: Recycle,
//       name: "Environmental Stewardship",
//       desc: "We adhere to a zero-landfill policy, ensuring all components are recycled or repurposed responsibly."
//     },
//     {
//       icon: Award,
//       name: "Certified & Compliant",
//       desc: "R2v3, ISO 9001, 14001, and 45001 certified, meeting all regulatory requirements."
//     },
//     {
//       icon: HeartHandshake,
//       name: "Maximize Value Recovery",
//       desc: "Our remarketing program finds new life for usable assets, returning value to your bottom line."
//     }
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-white">
//       <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <FadeIn>
//           <img
//             src="https://placehold.co/600x600/15803d/ffffff?text=Our+Benefits&font=inter"
//             alt="Benefits of Recycling"
//             className="rounded-2xl shadow-2xl w-full h-auto object-cover"
//             onError={(e) => e.target.src = 'https://placehold.co/600x600/e0e0e0/909090?text=Image+Error'}
//           />
//         </FadeIn>
//         <FadeIn delay={0.2}>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             The Benefits of Our Services
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Choosing us means choosing peace of mind. We turn your environmental liabilities into secure, manageable assets.
//           </p>
//           <div className="mt-10 space-y-8">
//             {benefits.map((benefit) => (
//               <div key={benefit.name} className="flex gap-4">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
//                   <benefit.icon size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">{benefit.name}</h3>
//                   <p className="mt-1 text-gray-500">{benefit.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// // Section 6: "Easy 4-Step Process to Success"
// const ProcessSection = () => {
//   const steps = [
//     {
//       num: "01",
//       icon: Package,
//       name: "Schedule Pickup",
//       desc: "Contact us to schedule a convenient pickup for your electronics."
//     },
//     {
//       num: "02",
//       icon: Truck,
//       name: "Secure Logistics",
//       desc: "Our secure, GPS-tracked fleet collects and transports your assets."
//     },
//     {
//       num: "03",
//       icon: Search,
//       name: "Audit & Sorting",
//       desc: "We inventory, test, and sort all assets for data destruction or resale."
//     },
//     {
//       num: "04",
//       icon: DatabaseZap,
//       name: "Recycle & Report",
//       desc: "Receive full certification of data destruction and recycling."
//     }
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50">
//       <Container>
//         <FadeIn className="text-center">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             Easy 4-Step Process to Success
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             We've streamlined our process to be as simple and transparent as possible.
//           </p>
//         </FadeIn>
        
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <FadeIn key={step.name} delay={index * 0.1}>
//               <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 transition-all duration-300 h-full">
//                 <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-3xl font-extrabold text-green-300">
//                   {step.num}
//                 </div>
//                 <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center">
//                   <step.icon size={32} />
//                 </div>
//                 <h3 className="mt-6 text-xl font-bold text-gray-900">{step.name}</h3>
//                 <p className="mt-2 text-gray-500">{step.desc}</p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Section 7: "Worry-Free Electronics Recycling Solutions"
// // Accordion Item Helper
// const AccordionItem = ({ title, children, isOpen, onToggle }) => {
//   return (
//     <div className="border-b border-gray-200">
//       <button
//         onClick={onToggle}
//         className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-900"
//       >
//         <span>{title}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           <ChevronDown size={24} className={`text-gray-500 ${isOpen ? 'text-green-600' : ''}`} />
//         </motion.div>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="overflow-hidden"
//           >
//             <div className="pb-5 pr-4 text-gray-600">
//               {children}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const SolutionsSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const solutions = [
//     {
//       title: "Secure Chain of Custody",
//       content: "From pickup to final processing, your assets are tracked and secured. Our GPS-monitored fleet and 24/7 facility surveillance ensure total peace of mind."
//     },
//     {
//       title: "Certified Data Erasure",
//       content: "We use DoD 5220.22-M and NIST 800-88 compliant software for data erasure. Physical destruction is also available for ultimate security."
//     },
//     {
//       title: "Transparent Reporting",
//       content: "Receive detailed, serialized reports and certificates of destruction for your records, ensuring you meet all compliance and auditing requirements."
//     }
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-white">
//       <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <FadeIn>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             Worry-Free Electronics Recycling Solutions
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Our processes are designed to eliminate risk and ensure compliance, giving you complete confidence.
//           </p>
//           <div className="mt-10 space-y-2">
//             {solutions.map((item, index) => (
//               <AccordionItem
//                 key={index}
//                 title={item.title}
//                 isOpen={openIndex === index}
//                 onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
//               >
//                 {item.content}
//               </AccordionItem>
//             ))}
//           </div>
//         </FadeIn>
//         <FadeIn delay={0.2} className="w-full">
//           <img
//             src="https://placehold.co/600x500/10b981/ffffff?text=Worry-Free&font=inter"
//             alt="Worry-Free Solutions"
//             className="rounded-2xl shadow-2xl w-full h-auto object-cover"
//             onError={(e) => e.target.src = 'https://placehold.co/600x500/e0e0e0/909090?text=Image+Error'}
//           />
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// // Section 8: "Why You Can Trust Us"
// const TrustSection = () => {
//   const trustPillars = [
//     {
//       icon: Award,
//       name: "Fully Certified",
//       desc: "R2v3, ISO 9001, 14001 & 45001. We meet the highest industry standards for quality, environment, and safety."
//     },
//     {
//       icon: Users,
//       name: "Client-Focused",
//       desc: "We build lasting partnerships by providing flexible, reliable, and customized solutions for every client."
//     },
//     {
//       icon: ThumbsUp,
//       name: "Proven Track Record",
//       desc: "Over a decade of experience serving businesses, schools, and government agencies with a 100% satisfaction rate."
//     }
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50">
//       <Container>
//         <FadeIn className="text-center">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             Why You Can Trust Us
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Our commitment to security, compliance, and customer service is unwavering.
//           </p>
//         </FadeIn>
        
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trustPillars.map((pillar, index) => (
//             <FadeIn key={pillar.name} delay={index * 0.1}>
//               <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 h-full">
//                 <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
//                   <pillar.icon size={32} />
//                 </div>
//                 <h3 className="mt-6 text-xl font-bold text-gray-900">{pillar.name}</h3>
//                 <p className="mt-2 text-gray-500">{pillar.desc}</p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Re-styled Testimonial Section
// const TestimonialSection = () => {
//   return (
//     <section className="py-16 sm:py-24 bg-white">
//       <Container className="text-center">
//         <FadeIn>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             What Our Clients Say
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             We're proud to be a trusted partner for hundreds of organizations.
//           </p>
//           <div className="mt-12">
//             <TestimonialCarousel />
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// // Section 9: "Ready to Start Your Recycling Journey?"
// const FinalCtaSection = () => {
//   return (
//     <section className="py-16 sm:py-24">
//       <Container>
//         <FadeIn>
//           <div className="relative py-16 sm:py-24 px-8 text-center bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden">
//             <div className="absolute inset-0 opacity-10">
//               <Recycle size={200} className="absolute -top-12 -left-12 text-white" />
//               <Recycle size={300} className="absolute -bottom-24 -right-16 text-white" />
//             </div>
//             <div className="relative">
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
//                 Ready to Start Your Recycling Journey?
//               </h2>
//               <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
//                 Join hundreds of satisfied clients and take the first step towards secure and sustainable e-waste management.
//               </p>
//               <div className="mt-10">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-medium text-green-700 bg-white shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
//                 >
//                   Get Your Free Quote Today
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };


// // --- Main Home Component ---
// export const Home = () => {
//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
//       <HeroSection />
//       <ServicesSection />
//       <CtaSection />
//       <BenefitsSection />
//       <ProcessSection />
//       <SolutionsSection />
//       <TrustSection />
//       <TestimonialSection />
//       <FinalCtaSection />
//     </div>
//   );
// };
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/common/FadeIn'; // Assuming FadeIn.jsx is in this path
import { CountUp } from '../components/common/CountUp'; // Assuming CountUp.jsx is in this path
import { TestimonialCarousel } from '../components/home/TestimonialCarousel'; // Assuming TestimonialCarousel.jsx is in this path
import {
  Recycle,
  Cpu,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  DatabaseZap,
  Briefcase,
  HardDrive,
  Users,
  Award,
  Zap,
  TrendingUp,
  PlayCircle,
  MessageSquare,
  Package,
  Truck,
  FileText,
  DollarSign,
  Star,
  ChevronDown
} from 'lucide-react';

// --- Container Component ---
const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// --- Hero Section ---
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Secure & Sustainable
              <span className="text-green-600"> Electronics Recycling</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              EonCircular provides certified, eco-friendly electronics recycling and ITAD services. We ensure 100% data security and zero-landfill solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Our Services <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-green-600 bg-green-100 rounded-full hover:bg-green-200 hover:text-green-700 transform hover:scale-105 transition-all duration-300"
              >
                <PlayCircle size={20} /> Watch Our Story
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative h-64 lg:h-auto lg:min-h-[450px]">
            <img 
              src="https://placehold.co/600x450/22c55e/ffffff?text=EonCircular+Facility&font=inter" 
              alt="EonCircular Recycling Facility" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

// Section 1: "100% Customer Satisfaction"
const StatsSection = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 text-center">
        <FadeIn>
          <div className="text-6xl font-extrabold text-green-600">
            <CountUp end={100} duration={3000} suffix="%" />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
          <p className="mt-1 text-gray-600">Guaranteed peace of mind.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="text-6xl font-extrabold text-green-600">
            <CountUp end={250} duration={3000} suffix="+" />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">Corporate Partners</h3>
          <p className="mt-1 text-gray-600">Trusted by businesses large and small.</p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="text-6xl font-extrabold text-green-600">
            <CountUp end={500} duration={3000} suffix="K+" />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">Devices Recycled</h3>
          <p className="mt-1 text-gray-600">And counting, all zero-landfill.</p>
        </FadeIn>
      </div>
    </Container>
  </section>
);

// Section 2: "Leading the Way in Electronics Recycling"
const LeadingTheWaySection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://placehold.co/600x500/e0f2f1/1e3a8a?text=Our+Team&font=inter" 
            alt="EonCircular Team" 
            className="w-full h-full object-cover"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <span className="text-sm font-bold uppercase text-green-600">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Leading the Way in Electronics Recycling
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            At EonCircular, we're not just a recycling company; we're pioneers in sustainable IT solutions. Our mission is to provide secure, responsible, and transparent electronics recycling that protects your data and our planet.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-600"><b>R2v3 & RIOS Certified:</b> Adhering to the highest standards of responsible recycling.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-600"><b>Zero-Landfill Policy:</b> We guarantee that 100% of your electronics are recycled or refurbished.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-600"><b>Total Data Security:</b> NAID AAA certified data destruction for complete peace of mind.</span>
            </li>
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
          </Link>
        </FadeIn>
      </div>
    </Container>
  </section>
);

// Section 3: "Multifaceted Electronics Recycling Services"
const ServicesSection = () => {
  const services = [
    { name: 'ITAD Services', icon: Briefcase, desc: 'Maximize value recovery from your retired IT assets securely.' },
    { name: 'Data Destruction', icon: ShieldCheck, desc: 'NAID AAA certified on-site and off-site data sanitization.' },
    { name: 'E-Waste Recycling', icon: Recycle, desc: 'Responsible recycling for all types of electronic equipment.' },
    { name: 'Device Refurbishment', icon: Cpu, desc: 'Extending the life of devices through expert refurbishment.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase text-green-600">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Multifaceted Electronics Recycling Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From comprehensive IT asset disposition (ITAD) to certified data destruction, we offer a full suite of services.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1}>
              <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <service.icon className="text-green-600" size={32} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{service.desc}</p>
                <Link 
                  to="/services" 
                  className="mt-5 text-sm font-semibold text-green-600 inline-flex items-center gap-1 group"
                >
                  Learn More 
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Section 4: "Not the Service you are Looking For?"
const ServiceCtaSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <Container>
      <FadeIn>
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Not the Service You Are Looking For?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of custom solutions. Explore all our offerings to find the perfect fit for your needs.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All Services <ArrowRight size={20} />
          </Link>
        </div>
      </FadeIn>
    </Container>
  </section>
);

// Section 5: "The Benefits of Our Services"
const BenefitsSection = () => {
  const benefits = [
    { name: 'Environmental Impact', icon: Recycle, desc: 'Contribute to a circular economy and reduce your carbon footprint.' },
    { name: 'Data Security', icon: ShieldCheck, desc: 'Protect your sensitive data with our 100% secure destruction methods.' },
    { name: 'Full Compliance', icon: Award, desc: 'Meet all local, state, and federal e-waste regulations effortlessly.' },
    { name: 'Value Recovery', icon: DollarSign, desc: 'Get the best possible return on your retired IT assets.' },
  ];
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase text-green-600">Our Benefits</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
              The Benefits of Our Services
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Choosing EonCircular means choosing a partner dedicated to security, sustainability, and service.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.name}>
                  <benefit.icon className="text-green-600" size={32} />
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{benefit.name}</h3>
                  <p className="mt-1 text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://placehold.co/600x500/15803d/ffffff?text=Our+Process&font=inter" 
              alt="EonCircular Secure Process" 
              className="w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

// Section 6: "Easy 4-Step Process to Success"
const ProcessSection = () => {
  const steps = [
    { name: 'Get a Quote', icon: MessageSquare, desc: 'Contact us with your inventory list for a fast, free quote.' },
    { name: 'Schedule Pickup', icon: Truck, desc: 'We arrange secure, GPS-tracked logistics from your location.' },
    { name: 'Secure Processing', icon: Package, desc: 'Your assets are received, audited, and data-destroyed in our secure facility.' },
    { name: 'Receive Certificate', icon: FileText, desc: 'Get a Certificate of Destruction and a detailed audit report.' },
  ];
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase text-green-600">How It Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Easy 4-Step Process to Success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We've streamlined our process to be as simple and transparent as possible for you.
          </p>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.name} delay={index * 0.1}>
              <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 flex items-center gap-2">
                  <step.icon className="text-green-600" size={24} />
                  {step.name}
                </h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Section 7: "Worry-Free Electronics Recycling Solutions"
const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'For Businesses', icon: Briefcase, content: 'Secure ITAD, mass data destruction, and certified recycling for corporate needs. We handle office cleanouts, data center decommissioning, and regular e-waste pickups.', image: 'https://placehold.co/600x400/047857/ffffff?text=Corporate+Solutions&font=inter' },
    { name: 'For Government', icon: Award, content: 'Fully compliant, NAID certified services for public sector entities. We understand the strict data security and reporting requirements for government agencies.', image: 'https://placehold.co/600x400/065f46/ffffff?text=Government+Services&font=inter' },
    { name: 'For Residents', icon: Users, content: 'Easy and accessible drop-off locations and mail-in programs for your personal electronics. Ensure your old devices are recycled responsibly.', image: 'https://placehold.co/600x400/064e3b/ffffff?text=Residential+Recycling&font=inter' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase text-green-600">Our Solutions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Worry-Free Electronics Recycling Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored solutions for every sector. Click below to learn more about how we serve you.
          </p>
        </FadeIn>
        
        <FadeIn className="mt-16">
          <div className="flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-4 p-2 bg-gray-200 rounded-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-green-600 shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-white/50'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-10 relative">
            {tabs.map((tab, index) => (
              <AnimatePresence mode="wait" key={tab.name}>
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tab.name}</h3>
                      <p className="mt-4 text-lg text-gray-600">{tab.content}</p>
                      <Link
                        to="/services"
                        className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Get Started <ArrowRight size={20} />
                      </Link>
                    </div>
                    <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={tab.image}
                        alt={tab.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

// Section 8: "Why You Can Trust Us"
const TrustSection = () => {
  const certifications = [
    { name: 'R2v3 Certified', logo: 'https://placehold.co/150x80/ffffff/166534?text=R2v3&font=inter' },
    { name: 'RIOS Certified', logo: 'https://placehold.co/150x80/ffffff/166534?text=RIOS&font=inter' },
    { name: 'NAID AAA Certified', logo: 'https://placehold.co/150x80/ffffff/166534?text=NAID+AAA&font=inter' },
    { name: 'ISO 9001', logo: 'https://placehold.co/150x80/ffffff/166534?text=ISO+9001&font=inter' },
    { name: 'ISO 14001', logo: 'https://placehold.co/150x80/ffffff/166534?text=ISO+14001&font=inter' },
    { name: 'ISO 45001', logo: 'https://placehold.co/150x80/ffffff/166534?text=ISO+45001&font=inter' },
  ];
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase text-green-600">Our Credentials</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why You Can Trust Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We hold the industry's most respected certifications, proving our commitment to quality, security, and environmental responsibility.
          </p>
        </FadeIn>
        
        <FadeIn className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-16 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

// --- Testimonial Section ---
// This uses the TestimonialCarousel component you provided
const TestimonialSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </FadeIn>
        <FadeIn className="mt-16">
          {/* This renders the carousel you provided, which now has the updated light theme */}
          <TestimonialCarousel />
        </FadeIn>
      </Container>
    </section>
  );
};

// --- NEW SECTION ---
// Helper SVG for Google Logo
const GoogleGLogo = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M46.8 24.5429C46.8 22.8686 46.6457 21.2486 46.36 19.68H24V28.7143H36.9314C36.36 31.3943 34.92 33.62 32.8514 35.1057V41.0143H40.78C44.6057 37.4029 46.8 31.4314 46.8 24.5429Z" fill="#4285F4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 48C30.48 48 35.9571 45.8714 40.78 42.0143L32.8514 36.1057C30.78 37.4857 27.6914 38.3714 24 38.3714C17.26 38.3714 11.52 33.9114 9.61714 27.9714H1.47429V33.9971C6.01714 42.2314 14.3829 48 24 48Z" fill="#34A853"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.61714 27.9714C9.15429 26.6314 8.88 25.2 8.88 23.7143C8.88 22.2286 9.15429 20.7886 9.61714 19.4486V13.4229H1.47429C-0.342857 16.9314 -1.37143 20.94 -1.37143 25.2857C-1.37143 29.6314 -0.342857 33.64 1.47429 37.1486L9.61714 31.1229V27.9714Z" fill="#FBBC05"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 8.05714C27.2914 8.05714 30.2 9.14 32.8514 11.4543L40.78 3.52571C35.9571 -0.428571 30.48 0 24 0C14.3829 0 6.01714 5.76857 1.47429 13.9771L9.61714 19.9486C11.52 13.5114 17.26 8.05714 24 8.05714Z" fill="#EA4335"/>
  </svg>
);

// Helper Component for Google Review Card
const ReviewCard = ({ review, delay = 0 }) => (
  <FadeIn delay={delay} className="flex-shrink-0 w-full sm:w-[350px]">
    <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <GoogleGLogo />
            <div>
              <h4 className="font-bold text-gray-900">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-0.5 text-yellow-400 mt-3">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="mt-4 text-gray-600 text-sm">"{review.text}"</p>
      </div>
      <a 
        href="https://www.google.com/search?q=reworx+recycling+reviews" // Example link
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 text-sm font-medium text-green-600 hover:text-green-700 inline-flex items-center gap-1"
      >
        View on Google <ArrowRight size={14} />
      </a>
    </div>
  </FadeIn>
);

// New Google Reviews Section
const GoogleReviewsSection = () => {
  const googleReviews = [
    { name: "Sarah L.", date: "2 weeks ago", text: "Incredibly professional and secure service. They handled our office cleanout flawlessly and provided all the data destruction certificates." },
    { name: "Mike B.", date: "1 month ago", text: "Fast pickup, great communication, and I love their commitment to zero-landfill. Our old servers are in good hands." },
    { name: "TechForward Inc.", date: "1 month ago", text: "We've used them for years for our ITAD needs. They consistently provide the best value recovery and are a trusted partner." },
    { name:"Emily K.", date: "3 months ago", text: "As a small business, I was worried about the cost and complexity. They made it simple, affordable, and so easy. Highly recommend!" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about us on Google.
          </p>
        </FadeIn>
        
        {/* Horizontal Scrolling Wrapper */}
        <div className="mt-16 -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-6">
            {googleReviews.map((review, index) => (
              <ReviewCard key={index} review={review} delay={index * 0.1} />
            ))}
            {/* Optional: Add a "View All" card */}
            <FadeIn delay={googleReviews.length * 0.1} className="flex-shrink-0 w-full sm:w-[350px]">
              <a 
                href="https://www.google.com/search?q=reworx+recycling+reviews" // Example link
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-full bg-green-50 p-6 rounded-2xl border border-green-200 flex flex-col items-center justify-center text-center hover:bg-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <ArrowRight size={32} />
                </div>
                <h4 className="mt-4 font-bold text-lg text-green-700">See More Reviews</h4>
                <p className="mt-1 text-sm text-green-600">Click to view all our reviews directly on Google.</p>
              </a>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};


// Section 9: "Ready to Start Your Recycling Journey?"
const FinalCtaSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <Container>
      <FadeIn>
        <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Start Your Recycling Journey?
            </h2>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
              Join hundreds of businesses who trust EonCircular for secure and sustainable electronics recycling. Get your free quote today.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-green-600 bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>
);

// --- Main Home Component ---
export const Home = () => {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <LeadingTheWaySection />
      <ServicesSection />
      <ServiceCtaSection />
      <BenefitsSection />
      <ProcessSection />
      <SolutionsSection />
      <TrustSection />
      <TestimonialSection />
      <GoogleReviewsSection /> {/* Added new section */}
      <FinalCtaSection />
    </div>
  );
};



