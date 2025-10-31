// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Recycle, 
//   Droplet, 
//   Cpu, 
//   Box, 
//   ShieldCheck, 
//   CheckCircle, 
//   PlayCircle,
//   ArrowRight,
//   Briefcase,
//   BookOpen,
//   Zap,
//   Leaf
// } from 'lucide-react';
// import { FadeIn } from '../components/common/FadeIn';
// import { CountUp } from '../components/common/CountUp';
// import { CallToAction } from '../components/common/CallToAction';

// // --- Reusable Parallax Image Section ---
// // A reusable component to create the text-on-left, image-on-right (or vice-versa) layout
// // with a parallax background image effect, as seen in your wireframes.
// const ParallaxImageSection = ({ 
//   title, 
//   children, 
//   imageUrl, 
//   imageAlt = "EonCircular sustainability", 
//   reverse = false 
// }) => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start']
//   });

//   // Creates a parallax effect: background image moves slower than the content
//   const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 overflow-hidden"
//     >
//       {/* Content Column */}
//       <div className={`relative z-10 px-6 ${reverse ? 'md:order-2' : ''}`}>
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//             {title}
//           </h2>
//           <div className="text-lg text-gray-300 space-y-4">
//             {children}
//           </div>
//         </FadeIn>
//       </div>

//       {/* Image Column */}
//       <div className={`relative z-0 h-80 md:h-full min-h-[400px] ${reverse ? 'md:order-1' : ''}`}>
//         <motion.div
//           className="absolute inset-0"
//           style={{ y }} // Apply parallax
//         >
//           <img
//             src={imageUrl}
//             alt={imageAlt}
//             className="w-full h-full object-cover opacity-30 md:opacity-50"
//           />
//           {/* Fades on the edge of the image to blend into the black bg */}
//           <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'l' : 'r'} from-black via-transparent to-transparent`}></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // --- Futuristic Stat Component ---
// // For the "Reducing Carbon Footprint" section
// const StatBubble = ({ icon: Icon, value, unit, label, delay = 0 }) => (
//   <FadeIn delay={delay}>
//     <motion.div 
//       className="flex flex-col items-center justify-center text-center p-6"
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
//         {/* Outer pulsing glow */}
//         <motion.div 
//           className="absolute inset-0 rounded-full bg-cyan-500/10"
//           animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         ></motion.div>
//         {/* Inner solid ring */}
//         <div className="absolute inset-2 rounded-full border-2 border-cyan-400/50"></div>
//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center">
//           <Icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-2" />
//           <div className="text-4xl md:text-5xl font-bold text-white">
//             <CountUp end={value} />{unit}
//           </div>
//           <div className="text-sm md:text-md text-gray-300 mt-1">{label}</div>
//         </div>
//       </div>
//     </motion.div>
//   </FadeIn>
// );

// // --- Partner Card Component ---
// // For the "Partner With Us" section
// const PartnerCard = ({ icon: Icon, title, description, link }) => (
//   <FadeIn>
//     <motion.div
//       whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(6, 182, 212, 0.1)' }}
//       className="h-full bg-gray-900 p-8 rounded-2xl border border-gray-800 transition-shadow duration-300"
//     >
//       <Icon className="w-12 h-12 text-cyan-400 mb-6" />
//       <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
//       <p className="text-gray-300 mb-6">{description}</p>
//       <Link
//         to={link}
//         className="inline-flex items-center text-lg font-semibold text-cyan-400 hover:text-cyan-300 group"
//       >
//         Learn More
//         <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//       </Link>
//     </motion.div>
//   </FadeIn>
// );


// // --- Main Sustainability Page Component ---
// export const Sustainability = () => {
//   return (
//     <div className="bg-black text-white overflow-x-hidden">
      
//       {/* --- 1. Hero Section --- */}
//       <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Circuit+Background&font=inter" 
//             alt="Futuristic background"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//           {/* Subtle animated grid lines */}
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(to right, rgba(0, 150, 200, 0.1) 1px, transparent 1px),
//                 linear-gradient(to bottom, rgba(0, 150, 200, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: '40px 40px',
//               animation: 'pulseGrid 10s linear infinite'
//             }}
//           ></div>
//           <style>{`
//             @keyframes pulseGrid {
//               0% { opacity: 0.5; }
//               50% { opacity: 0.8; }
//               100% { opacity: 0.5; }
//             }
//           `}</style>
//         </div>
        
//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
//                 SUSTAINABILITY
//               </span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
//               Our commitment isn't just a statement. It's the core of our business,
//               certified by the world's leading standards.
//             </p>
//           </FadeIn>
//           <FadeIn delay={0.4}>
//             <motion.a
//               href="#process-video"
//               className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-cyan-500/20
//                          hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
//               whileHover={{
//                 boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)"
//               }}
//             >
//               <PlayCircle className="w-6 h-6 mr-3" />
//               Watch Our Process
//             </motion.a>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 2. EonCircular Certified (from wireframe) --- */}
//       <ParallaxImageSection
//         title="EonCircular Certified"
//         imageUrl="https://placehold.co/1000x800/1a1a1a/333333?text=Laptop+Diagram&font=inter"
//         imageAlt="Certified Laptop Diagram"
//         reverse={true}
//       >
//         <p>
//           Being EonCircular Certified means every device has passed a rigorous 30-point
//           inspection. This isn't just a check; it's a complete remanufacturing process
//           that guarantees performance, reliability, and quality equivalent to new.
//         </p>
//         <p className="font-semibold text-cyan-400">
//           We don't just refurbish. We re-engineer for a second life.
//         </p>
//       </ParallaxImageSection>

//       {/* --- 3. Stats Section (Carbon Footprint) --- */}
//       <section className="py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//               Reducing Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Global Footprint</span>
//             </h2>
//           </FadeIn>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <StatBubble icon={Recycle} value={70} unit="%" label="Less CO2 Emissions" delay={0.0} />
//             <StatBubble icon={Droplet} value={80} unit="%" label="Less Water Usage" delay={0.1} />
//             <StatBubble icon={Cpu} value={75} unit="%" label="Less Rare Minerals" delay={0.2} />
//             <StatBubble icon={Box} value={90} unit="%" label="Less E-Waste" delay={0.3} />
//           </div>
//         </div>
//       </section>

//       {/* --- 4. BSI Kitemark Section --- */}
//       <ParallaxImageSection
//         title="BSI Kitemark™"
//         imageUrl="https://placehold.co/800x800/111111/555555?text=BSI+Kitemark+Logo&font=inter"
//         imageAlt="BSI Kitemark Certified"
//       >
//         <p>
//           We are the <span className="text-white font-bold">only company in the world</span> to hold a
//           BSI Kitemark for both refurbished and remanufactured laptops. This isn't an
//           easy certification to achieve; it's a testament to our unwavering commitment
//           to quality, safety, and processes you can trust.
//         </p>
//         <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
//           <li>Independently tested and verified.</li>
//           <li>Continuous auditing of our processes.</li>
//           <li>A global symbol of trust and quality.</li>
//         </ul>
//       </ParallaxImageSection>

//       {/* --- 5. Carbon Neutral Section --- */}
//       <ParallaxImageSection
//         title="Certified Carbon Neutral"
//         imageUrl="https://placehold.co/800x800/111111/555555?text=Carbon+Neutral+Logo&font=inter"
//         imageAlt="Carbon Neutral Certified"
//         reverse={true}
//       >
//         <p>
//           Every laptop we sell is certified Carbon Neutral. We've meticulously
//           measured, reduced, and offset the entire carbon footprint of our
//           remanufacturing process.
//         </p>
//         <p className="mt-4">
//           Choosing EonCircular means making a direct, positive impact on the planet.
//           You get premium technology with zero environmental guilt.
//         </p>
//       </ParallaxImageSection>
      
//       {/* --- 6. Video Section --- */}
//       <section id="process-video" className="py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-5xl text-center">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-bold mb-8">
//               Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Remanufacturing Process</span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <motion.div 
//               className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-800"
//               whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)" }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <img 
//                 src="https://placehold.co/1280x720/1a1a1a/333333?text=Our+Process+Video&font=inter" 
//                 alt="Video placeholder"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//                 >
//                   <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 7. E-Waste & Re-use Sections (Combined) --- */}
//       <ParallaxImageSection
//         title="E-Waste Reduction"
//         imageUrl="https://placehold.co/1000x800/1a1a1a/333333?text=E-Waste+Components&font=inter"
//         imageAlt="Electronic waste"
//       >
//         <p>
//           Electronic waste is the world's fastest-growing trash stream. By
//           remanufacturing devices, we prevent thousands of tons of hazardous
//           materials from entering landfills, protecting our soil and water.
//         </p>
//       </ParallaxImageSection>
//       <ParallaxImageSection
//         title="Device Re-Use"
//         imageUrl="https://placehold.co/1000x800/1a1a1a/333333?text=Laptops+Ready+for+Use&font=inter"
//         imageAlt="Refurbished laptops"
//         reverse={true}
//       >
//         <p>
//           The most sustainable laptop is the one that already exists. Our
//           process gives high-end devices a second, third, or even fourth life,
//           dramatically extending their usability and value, ensuring the
//           resources used to create them are maximized.
//         </p>
//       </ParallaxImageSection>

//       {/* --- 8. Partner With Us Section --- */}
//       <section className="py-24 bg-black">
//         <div className="container mx-auto px-6 max-w-6xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//               Partner With Us on Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Circular Journey</span>
//             </h2>
//           </FadeIn>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <PartnerCard
//               icon={Briefcase}
//               title="For Business"
//               description="Equip your workforce with BSI Kitemark certified, carbon-neutral laptops. Meet your ESG goals and reduce your IT budget without compromising on performance."
//               link="/contact" // Update with correct link
//             />
//             <PartnerCard
//               icon={BookOpen}
//               title="For Education"
//               description="Provide students and faculty with reliable, high-performance devices at a fraction of the cost. We offer bulk purchasing and dedicated support for educational institutions."
//               link="/education" // Update with correct link
//             />
//           </div>
//         </div>
//       </section>

//       {/* --- 9. Final Call to Action --- */}
//       <CallToAction 
//         title="Join Our Circular Journey"
//         text="Make your next technology choice a sustainable one. Explore our certified devices or contact our team to see how we can help your organization."
//         buttonText="Explore All Laptops"
//         buttonLink="/laptops"
//       />
//     </div>
//   );
// };


        
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Recycle, 
  Droplet, 
  Cpu, 
  Box, 
  ShieldCheck, 
  CheckCircle, 
  PlayCircle,
  ArrowRight,
  Briefcase,
  BookOpen,
  Zap,
  Leaf
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';

// --- Reusable Parallax Image Section (Redesigned for Light Mode) ---
const ParallaxImageSection = ({ 
  title, 
  children, 
  imageUrl, 
  imageAlt = "EonCircular sustainability", 
  reverse = false 
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Creates a parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section 
      ref={sectionRef} 
      className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 overflow-hidden"
    >
      {/* Content Column */}
      <div className={`relative z-10 px-6 ${reverse ? 'md:order-2' : ''}`}>
        <FadeIn>
          {/* Gradient updated to green/teal */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
            {title}
          </h2>
          {/* Text updated to dark gray */}
          <div className="text-lg text-gray-600 space-y-4">
            {children}
          </div>
        </FadeIn>
      </div>

      {/* Image Column */}
      <div className={`relative z-0 h-80 md:h-full min-h-[400px] ${reverse ? 'md:order-1' : ''}`}>
        <motion.div
          className="absolute inset-0"
          style={{ y }} // Apply parallax
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            // Increased opacity slightly for light mode
            className="w-full h-full object-cover opacity-50 md:opacity-70"
          />
          {/* Fades on the edge of the image to blend into the WHITE bg */}
          <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'l' : 'r'} from-white via-transparent to-transparent`}></div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Futuristic Stat Component (Redesigned for Light Mode) ---
const StatBubble = ({ icon: Icon, value, unit, label, delay = 0 }) => (
  <FadeIn delay={delay}>
    <motion.div 
      className="flex flex-col items-center justify-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      {/* Redesigned as a "popped" card for light mode */}
      <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center bg-white rounded-2xl shadow-xl border border-gray-100">
        {/* Outer pulsing glow (green) */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-green-500/10"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        {/* Inner solid ring (green) */}
        <div className="absolute inset-2 rounded-lg border-2 border-green-400/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Icon updated to green */}
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-2" />
          {/* Text updated to dark */}
          <div className="text-4xl md:text-5xl font-bold text-gray-900">
            <CountUp end={value} />{unit}
          </div>
          <div className="text-sm md:text-md text-gray-600 mt-1">{label}</div>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

// --- Partner Card Component (Redesigned for Light Mode) ---
const PartnerCard = ({ icon: Icon, title, description, link }) => (
  <FadeIn>
    <motion.div
      // Hover shadow updated to green
      whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(16, 185, 129, 0.1)' }}
      // Card updated to white
      className="h-full bg-white p-8 rounded-2xl border border-gray-200 shadow-lg transition-shadow duration-300"
    >
      {/* Icon updated to green */}
      <Icon className="w-12 h-12 text-green-600 mb-6" />
      {/* Text updated to dark */}
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {/* Link updated to green */}
      <Link
        to={link}
        className="inline-flex items-center text-lg font-semibold text-green-600 hover:text-green-500 group"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  </FadeIn>
);


// --- Main Sustainability Page Component ---
export const Sustainability = () => {
  return (
    // Main background changed to white
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden bg-gray-50">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Light placeholder background */}
          <img 
            src="https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter" 
            alt="Futuristic background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
          
          {/* Subtle animated grid lines (green) */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'pulseGrid 10s linear infinite'
            }}
          ></div>
          <style>{`
            @keyframes pulseGrid {
              0% { opacity: 0.5; }
              50% { opacity: 0.8; }
              100% { opacity: 0.5; }
            }
          `}</style>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            {/* Heading gradient updated to green/teal */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
                SUSTAINABILITY
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Subtitle text updated to dark gray */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Our commitment isn't just a statement. It's the core of our business,
              certified by the world's leading standards.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            {/* Button updated to green */}
            <motion.a
              href="#process-video"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-green-500/20
                         hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
              }}
            >
              <PlayCircle className="w-6 h-6 mr-3" />
              Watch Our Process
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* --- 2. EonCircular Certified (Alternating bg-white) --- */}
      <div className="bg-white">
        <ParallaxImageSection
          title="EonCircular Certified"
          imageUrl="https://placehold.co/1000x800/e0e0e0/555555?text=Laptop+Diagram&font=inter"
          imageAlt="Certified Laptop Diagram"
          reverse={true}
        >
          <p>
            Being EonCircular Certified means every device has passed a rigorous 30-point
            inspection. This isn't just a check; it's a complete remanufacturing process
            that guarantees performance, reliability, and quality equivalent to new.
          </p>
          {/* Accent text updated to green */}
          <p className="font-semibold text-green-600">
            We don't just refurbish. We re-engineer for a second life.
          </p>
        </ParallaxImageSection>
      </div>

      {/* --- 3. Stats Section (Alternating bg-gray-50) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            {/* Heading gradient updated */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Reducing Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Global Footprint</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <StatBubble icon={Recycle} value={70} unit="%" label="Less CO2 Emissions" delay={0.0} />
            <StatBubble icon={Droplet} value={80} unit="%" label="Less Water Usage" delay={0.1} />
            <StatBubble icon={Cpu} value={75} unit="%" label="Less Rare Minerals" delay={0.2} />
            <StatBubble icon={Box} value={90} unit="%" label="Less E-Waste" delay={0.3} />
          </div>
        </div>
      </section>

      {/* --- 4. BSI Kitemark Section (Alternating bg-white) --- */}
      <div className="bg-white">
        <ParallaxImageSection
          title="BSI Kitemark™"
          imageUrl="https://placehold.co/800x800/e5e5e5/555555?text=BSI+Kitemark+Logo&font=inter"
          imageAlt="BSI Kitemark Certified"
        >
          <p>
            We are the <span className="text-gray-900 font-bold">only company in the world</span> to hold a
            BSI Kitemark for both refurbished and remanufactured laptops. This isn't an
            easy certification to achieve; it's a testament to our unwavering commitment
            to quality, safety, and processes you can trust.
          </p>
          {/* List text updated */}
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
            <li>Independently tested and verified.</li>
            <li>Continuous auditing of our processes.</li>
            <li>A global symbol of trust and quality.</li>
          </ul>
        </ParallaxImageSection>
      </div>

      {/* --- 5. Carbon Neutral Section (Alternating bg-gray-50) --- */}
      <div className="bg-gray-50">
        <ParallaxImageSection
          title="Certified Carbon Neutral"
          imageUrl="https://placehold.co/800x800/e5e5e5/555555?text=Carbon+Neutral+Logo&font=inter"
          imageAlt="Carbon Neutral Certified"
          reverse={true}
        >
          <p>
            Every laptop we sell is certified Carbon Neutral. We've meticulously
            measured, reduced, and offset the entire carbon footprint of our
            remanufacturing process.
          </p>
          <p className="mt-4">
            Choosing EonCircular means making a direct, positive impact on the planet.
            You get premium technology with zero environmental guilt.
          </p>
        </ParallaxImageSection>
      </div>
      
      {/* --- 6. Video Section (Alternating bg-white) --- */}
      <section id="process-video" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            {/* Heading gradient updated */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Remanufacturing Process</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Hover shadow and border updated */}
            <motion.div 
              className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Light placeholder */}
              <img 
                src="https://placehold.co/1280x720/e0e0e0/555555?text=Our+Process+Video&font=inter" 
                alt="Video placeholder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="group-hover:scale-110 transition-transform"
                >
                  <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer" />
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* --- 7. E-Waste & Re-use Sections (Combined) --- */}
      <div className="bg-gray-50">
        <ParallaxImageSection
          title="E-Waste Reduction"
          imageUrl="https://placehold.co/1000x800/e0e0e0/555555?text=E-Waste+Components&font=inter"
          imageAlt="Electronic waste"
        >
          <p>
            Electronic waste is the world's fastest-growing trash stream. By
            remanufacturing devices, we prevent thousands of tons of hazardous
            materials from entering landfills, protecting our soil and water.
          </p>
        </ParallaxImageSection>
      </div>
      <div className="bg-white">
        <ParallaxImageSection
          title="Device Re-Use"
          imageUrl="https://placehold.co/1000x800/e0e0e0/555555?text=Laptops+Ready+for+Use&font=inter"
          imageAlt="Refurbished laptops"
          reverse={true}
        >
          <p>
            The most sustainable laptop is the one that already exists. Our
            process gives high-end devices a second, third, or even fourth life,
            dramatically extending their usability and value, ensuring the
            resources used to create them are maximized.
          </p>
        </ParallaxImageSection>
      </div>

      {/* --- 8. Partner With Us Section (Alternating bg-gray-50) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            {/* Heading gradient updated */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Partner With Us on Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Circular Journey</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PartnerCard
              icon={Briefcase}
              title="For Business"
              description="Equip your workforce with BSI Kitemark certified, carbon-neutral laptops. Meet your ESG goals and reduce your IT budget without compromising on performance."
              link="/contact"
            />
            <PartnerCard
              icon={BookOpen}
              title="For Education"
              description="Provide students and faculty with reliable, high-performance devices at a fraction of the cost. We offer bulk purchasing and dedicated support for educational institutions."
              link="/education"
            />
          </div>
        </div>
      </section>

      {/* --- 9. Final Call to Action (On bg-white) --- */}
      <div className="bg-white">
        <CallToAction 
          title="Join Our Circular Journey"
          text="Make your next technology choice a sustainable one. Explore our certified devices or contact our team to see how we can help your organization."
          buttonText="Explore All Laptops"
          buttonLink="/laptops"
        />
      </div>
    </div>
  );
};