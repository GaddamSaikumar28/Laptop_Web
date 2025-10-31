
// import React from 'react';
// import { MonitorCheck, Leaf, DollarSign } from 'lucide-react';
// import { FadeIn } from '../components/common/FadeIn'; // Corrected path
// // import { BrandDisplay } from '../components/BrandDisplay'; // Using your original component
// import { CallToAction } from '../components/common/CallToAction'; // Corrected path
// import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection'; // NEW
// import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll'; // NEW
// import BrandDisplay from '../components/laptops/BrandDisplay';
// import { FlyerSection } from '../components/laptops/FlyerSection';
// // This data structure matches your original BrandDisplay.jsx component's props
// const brandData = [
//   {
//     brandName: "HP",
//     slogan: "Performance. Reimagined.",
//     description: "Experience robust performance and sleek design with our range of BSI Certified HP laptops, perfect for business and creativity.",
//     imageUrl: "https://placehold.co/1000x600/004080/FFFFFF?text=HP+Laptop&font=inter",
//     gradientFrom: "#0078D4", // HP Blue
//     gradientTo: "#004C9A",
//     link: "/laptops/hp"
//   },
//   {
//     brandName: "DELL",
//     slogan: "Innovation That Inspires.",
//     description: "Discover reliable and powerful Dell laptops, from versatile Inspiron models to high-performance XPS, all rigorously tested.",
//     imageUrl: "https://placehold.co/1000x600/0080C0/FFFFFF?text=Dell+Laptop&font=inter",
//     gradientFrom: "#0076CE", // Dell Blue
//     gradientTo: "#004E8B",
//     link: "/laptops/dell"
//   },
//   {
//     brandName: "LENOVO",
//     slogan: "Smarter Technology for All.",
//     description: "From the iconic ThinkPad to the flexible Yoga, our refurbished Lenovo laptops offer legendary reliability and cutting-edge features.",
//     imageUrl: "https://placehold.co/1000x600/E04040/FFFFFF?text=Lenovo+Laptop&font=inter",
//     gradientFrom: "#E2231A", // Lenovo Red
//     gradientTo: "#A01B14",
//     link: "/laptops/lenovo"
//   }
// ];

// export const Laptop = () => { // Renamed to Laptops to match AppRouter.jsx
//   return (
//     <div className="bg-black text-white overflow-x-hidden">
//       {/* Hero Section (Already dark, looks good) */}
//       <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6">
//         <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://placehold.co/1920x1080/000000/FFFFFF?text=Subtle+Pattern&font=inter')] bg-repeat"></div>
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <FadeIn>
//             <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//               Discover Your Perfect Refurbished Laptop
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-lg md:text-xl mb-8 text-gray-200">
//               High-performance, eco-friendly, and EonCircular Certified quality you can trust.
//             </p>
//           </FadeIn>
//           <FadeIn delay={0.4}>
//             <a
//               href="#explore" // Changed to an anchor link
//               className="inline-block bg-white text-blue-800 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
//             >
//               Explore Our Quality
//             </a>
//           </FadeIn>
//         </div>
//       </section>

//       {/* EonCircular Certified Standard Section (Dark Theme) */}
//       <section id="explore" className="py-16 md:py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               The EonCircular Certified Standard
//             </h2>
//           </FadeIn>
//           <div className="grid md:grid-cols-3 gap-10">
//             <FadeIn delay={0.1}>
//               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
//                 <MonitorCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-white">Rigorous Quality Checks</h3>
//                 <p className="text-gray-300">
//                   Every laptop undergoes a comprehensive 30-point inspection and restoration process to ensure peak performance.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
//                 <Leaf className="w-12 h-12 text-teal-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Choice</h3>
//                 <p className="text-gray-300">
//                   Choose refurbished and significantly reduce electronic waste, contributing to a healthier planet.
//                 </p>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.3}>
//               <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300">
//                 <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-3 text-white">Unbeatable Value</h3>
//                 <p className="text-gray-300">
//                   Get premium features and performance at a fraction of the cost of new, without compromise.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* NEW: Video Section */}
//       <section className="py-16 md:py-24 bg-black">
//         <LaptopVideoSection />
//       </section>
      
//       {/* NEW: Continuous Laptop Scroll (Design Section) */}
//       <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               See Our Quality in Action
//             </h2>
//           </FadeIn>
//           <ContinuousLaptopScroll />
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-black">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <FlyerSection />
//         </div>
//       </section>

//       {/* Featured Brands Section (Dark Theme) */}
//       <section className="py-16 md:py-24 bg-black">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               Explore Top Brands
//             </h2>
//           </FadeIn>
//           <div className="grid grid-cols-1 gap-12">
//             {brandData.map((brand, index) => (
//               <FadeIn key={index} delay={index * 0.1}>
//                 <BrandDisplay
//                   brandName={brand.brandName}
//                   slogan={brand.slogan}
//                   description={brand.description}
//                   imageUrl={brand.imageUrl}
//                   gradientFrom={brand.gradientFrom}
//                   gradientTo={brand.gradientTo}
//                   link={brand.link}
//                 />
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section (Existing component - already dark) */}
//       <CallToAction
//         title="Ready to Upgrade Your Tech?"
//         text="Find the perfect refurbished laptop that fits your needs and budget, backed by our EonCircular guarantee."
//         buttonText="Shop All Laptops"
//         buttonLink="/contact" // Changed to contact, as shop isn't built
//       />
//     </div>
//   );
// };

//  export default Laptop; 
// // // Ensure your file exports Laptops

import React from 'react';
import { MonitorCheck, Leaf, DollarSign, GraduationCap, ShieldCheck, Recycle, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';
import { LaptopVideoSection } from '../components/laptops/LaptopVideoSection';
import { ContinuousLaptopScroll } from '../components/laptops/ContinuousLaptopScroll';
import BrandDisplay from '../components/laptops/BrandDisplay';
import { FlyerSection } from '../components/laptops/FlyerSection';
// import { FAQSection } from '../components/laptops/FAQSection'; // New component
import { motion } from 'framer-motion';
import { FAQSection } from './FAQSection';
// --- Reusable Feature Section (Adapted from Education.jsx) ---
const FeatureSection = ({ title, subtitle, imageUrl, imageAlt, features, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-xl object-cover aspect-video"
          />
        </FadeIn>
      </div>
      
      {/* Content Column */}
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                  <feature.icon className="w-5 h-5" />
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
  // Data for the BrandDisplay components
  const brandData = [
    {
      name: "HP",
      slogan: "Performance. Reimagined.",
      description: "Experience robust performance and sleek design with our range of BSI Certified HP laptops, perfect for business and creativity.",
      logo: "https://placehold.co/150x50/f0f0f0/333333?text=HP+Logo&font=inter",
      image: "https://placehold.co/1000x600/e0e0e0/555555?text=HP+Laptop&font=inter",
    },
    {
      name: "DELL",
      slogan: "Innovation That Inspires.",
      description: "Discover reliable and powerful Dell laptops, from versatile Inspiron models to high-performance XPS, all rigorously tested.",
      logo: "https://placehold.co/150x50/f0f0f0/333333?text=Dell+Logo&font=inter",
      image: "https://placehold.co/1000x600/e0e0e0/555555?text=Dell+Laptop&font=inter",
    },
    {
      name: "Lenovo",
      slogan: "Smarter Technology For All.",
      description: "From the workhorse ThinkPad to the flexible Yoga, our refurbished Lenovo laptops offer unmatched versatility and reliability.",
      logo: "https://placehold.co/150x50/f0f0f0/333333?text=Lenovo+Logo&font=inter",
      image: "https://placehold.co/1000x600/e0e0e0/555555?text=Lenovo+Laptop&font=inter",
    },
  ];

  // Data for the "For Education" section (from Education.jsx)
  const educationFeatures = [
    {
      icon: DollarSign,
      title: "Maximize Your Budget",
      desc: "Get high-performance devices for a fraction of the cost, allowing you to equip more students for less."
    },
    {
      icon: ShieldCheck,
      title: "Certified Reliability",
      desc: "Our BSI Kitemark certification guarantees every laptop meets the highest standards, ensuring classroom readiness."
    },
    {
      icon: Recycle,
      title: "Promote Sustainability",
      desc: "Teach and practice environmental responsibility by choosing refurbished technology and reducing e-waste."
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* --- 1. New Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
                Premium Laptops.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
                  Sustainably Refurbished.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg mb-10">
                Experience world-class quality and performance with our
                BSI Kitemark certified refurbished laptops.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Shop All Laptops
                </motion.button>
                <motion.button
                  className="px-8 py-3 bg-white text-gray-700 text-lg font-semibold rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  For Education
                </motion.button>
              </div>
            </FadeIn>
          </div>

          {/* Image Content (Placeholder) */}
          <div className="relative h-64 lg:h-full w-full">
            <FadeIn delay={0.2}>
              <img 
                src="https://placehold.co/1000x800/e0e0e0/555555?text=Hero+Laptop+Image&font=inter" 
                alt="Refurbished Laptops"
                className="w-full h-full object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 2. New "Why EonCircular?" Section (New Feature) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
              Why <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">EonCircular?</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-20">
              We don't just sell refurbished laptops. We remanufacture them to a
              standard that is indistinguishable from new.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0}>
              <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <MonitorCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">BSI Kitemark Certified</h3>
                <p className="text-gray-600">
                  The only company in the world with a BSI Kitemark for
                  remanufactured laptops, guaranteeing quality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainable Choice</h3>
                <p className="text-gray-600">
                  Choosing refurbished extends the life of technology and
                  prevents e-waste, supporting a circular economy.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Unbeatable Value</h3>
                <p className="text-gray-600">
                  Get the performance and reliability of a new device for a
                  fraction of the price, complete with a warranty.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* --- 3. Flyer Section (From Laptop.jsx) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FlyerSection />
        </div>
      </section>

      {/* --- 4. Video Section (From Laptop.jsx) --- */}
      <section className="py-24 bg-white">
        <LaptopVideoSection />
      </section>

      {/* --- 5. Continuous Scroll Section (From Laptop.jsx) --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <ContinuousLaptopScroll />
      </section>

      {/* --- 6. Brand Display Section (From Laptop.jsx) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-gray-900">
              Explore <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Top Brands</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandData.map((brand, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <BrandDisplay
                  name={brand.name}
                  slogan={brand.slogan}
                  description={brand.description}
                  logo={brand.logo}
                  image={brand.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. "For Education" Section (From Education.jsx) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FeatureSection
            title="Empower Your Classroom"
            subtitle="Discover why schools and universities trust EonCircular for their technology needs."
            imageUrl="https://placehold.co/1200x800/e0e0e0/555555?text=Students+Using+Laptops&font=inter"
            imageAlt="Students in a classroom"
            features={educationFeatures}
            reverse={false}
          />
        </div>
      </section>

      {/* --- 8. Case Study / Testimonial (From Education.jsx) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl shadow-2xl p-12 md:p-20 overflow-hidden">
            <FadeIn>
              <div className="lg:w-3/4">
                <GraduationCap className="w-16 h-16 text-white/70 mb-6" />
                <blockquote className="text-2xl md:text-4xl font-light italic border-l-4 border-white/50 pl-8 py-4">
                  "EonCircular didn't just sell us laptops; they provided a
                  sustainable solution that saved our budget and empowered our
                  students."
                </blockquote>
                <p className="text-xl font-semibold text-white mt-8">- Head of IT, Westview Academy</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-12 mt-12">
                  <div>
                    <div className="text-5xl font-bold text-white"><CountUp end={500} suffix="+" /></div>
                    <div className="text-lg text-white/80">Laptops Deployed</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-white"><CountUp end={20} suffix="%" /></div>
                    <div className="text-lg text-white/80">Budget Saved</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ Section (From Education.jsx) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
              Frequently Asked <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Questions</span>
            </h2>
          </FadeIn>
          <FadeIn>
            {/* This new component is defined in file 6 */}
            <FAQSection />
          </FadeIn>
        </div>
      </section>

      {/* --- 10. Final Call to Action --- */}
      <CallToAction
        title="Ready to Upgrade Your Tech?"
        text="Find the perfect refurbished laptop that fits your needs and budget, backed by our EonCircular guarantee."
        buttonText="Shop All Laptops"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Laptop;