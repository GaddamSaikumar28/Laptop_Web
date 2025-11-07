
// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Mail, 
//   Phone, 
//   MapPin,
//   Send,
//   Loader2,
//   CheckCircle,
//   AlertTriangle,
//   ChevronDown,
//   ArrowRight,
//   User,
//   Briefcase
// } from 'lucide-react';
// import { FadeIn } from '../components/common/FadeIn';

// // --- Animated Form Input ---
// const FormInput = ({ id, label, icon: Icon, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
  
//   return (
//     <div className="relative">
//       <label 
//         htmlFor={id} 
//         className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
//       >
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
//         <motion.input
//           id={id}
//           className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300"
//           style={{
//             boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
//             borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)', // cyan-400, gray-700
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };

// // --- Animated Text Area ---
// const FormTextarea = ({ id, label, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
  
//   return (
//     <div className="relative">
//       <label 
//         htmlFor={id} 
//         className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
//       >
//         {label}
//       </label>
//       <motion.textarea
//         id={id}
//         rows="5"
//         className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-600 outline-none resize-none transition-all duration-300"
//         style={{
//           boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
//           borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)',
//         }}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         {...props}
//       />
//     </div>
//   );
// };

// // --- Animated Select Input ---
// const FormSelect = ({ id, label, icon: Icon, children, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
  
//   return (
//     <div className="relative">
//       <label 
//         htmlFor={id} 
//         className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
//       >
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
//         <motion.select
//           id={id}
//           className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-12 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300 appearance-none" // `appearance-none` hides default arrow
//           style={{
//             boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
//             borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)',
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           {...props}
//         >
//           {children}
//         </motion.select>
//         <ChevronDown className="absolute right-4 w-5 h-5 text-gray-500 pointer-events-none" />
//       </div>
//     </div>
//   );
// };


// // --- Contact Form Component ---
// const ContactForm = () => {
//   const [formData, setFormData] = useState({ 
//     firstName: '', 
//     lastName: '', 
//     email: '', 
//     phone: '', 
//     company: '', 
//     jobTitle: '', 
//     interest: '', 
//     message: '' 
//   });
//   const [status, setStatus] = useState('idle'); // idle | loading | success | error

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus('loading');
    
//     // --- Mock Form Submission ---
//     // In a real app, you'd send `formData` to a backend or email service here.
//     console.log("Form Data Submitted:", formData);
    
//     setTimeout(() => {
//       // Simulate success
//       setStatus('success');
//       setFormData({ 
//         firstName: '', 
//         lastName: '', 
//         email: '', 
//         phone: '', 
//         company: '', 
//         jobTitle: '', 
//         interest: '', 
//         message: '' 
//       });

//       // Reset form after a few seconds
//       setTimeout(() => setStatus('idle'), 4000);

//       // To test error state:
//       // setStatus('error');
//       // setTimeout(() => setStatus('idle'), 4000);

//     }, 2000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <FormInput 
//           id="firstName" 
//           label="First Name" 
//           icon={User} 
//           type="text" 
//           placeholder="John"
//           value={formData.firstName}
//           onChange={handleChange}
//           required 
//         />
//         <FormInput 
//           id="lastName" 
//           label="Last Name" 
//           icon={User} 
//           type="text" 
//           placeholder="Doe"
//           value={formData.lastName}
//           onChange={handleChange}
//           required 
//         />
//         <FormInput 
//           id="email" 
//           label="Your Email" 
//           icon={Mail} 
//           type="email" 
//           placeholder="john.doe@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           required 
//         />
//         <FormInput 
//           id="phone" 
//           label="Phone Number" 
//           icon={Phone} 
//           type="tel" 
//           placeholder="+1 (555) 123-4567"
//           value={formData.phone}
//           onChange={handleChange}
//           // Not required
//         />
//         <FormInput 
//           id="company" 
//           label="Company Name" 
//           icon={Briefcase} 
//           type="text" 
//           placeholder="Eon Industries"
//           value={formData.company}
//           onChange={handleChange}
//         />
//         <FormInput 
//           id="jobTitle" 
//           label="Job Title" 
//           icon={Briefcase} 
//           type="text" 
//           placeholder="IT Manager"
//           value={formData.jobTitle}
//           onChange={handleChange}
//         />
//       </div>
//       <FormSelect 
//         id="interest"
//         label="I'm interested in..."
//         icon={ArrowRight}
//         value={formData.interest}
//         onChange={handleChange}
//         required
//       >
//         <option value="" disabled>Please select an option</option>
//         <option value="business">Laptops for Business</option>
//         <option value="education">Laptops for Education</option>
//         <option value="personal">Personal Use</option>
//         <option value="support">Technical Support</option>
//         <option value="other">Other Enquiry</option>
//       </FormSelect>
//       <FormTextarea 
//         id="message" 
//         label="Your Message" 
//         placeholder="How can we help you today?"
//         value={formData.message}
//         onChange={handleChange}
//         required 
//       />
      
//       {/* Submit Button with Animated States */}
//       <div>
//         <motion.button
//           type="submit"
//           disabled={status === 'loading' || status === 'success'}
//           className={`relative w-full text-lg font-bold py-4 px-8 rounded-lg text-white transition-all duration-300 overflow-hidden ${
//             status === 'idle' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500' :
//             status === 'loading' ? 'bg-gray-700' :
//             status === 'success' ? 'bg-green-600' :
//             'bg-red-600'
//           }`}
//           whileTap={status === 'idle' ? { scale: 0.95 } : {}}
//         >
//           <AnimatePresence mode="wait">
//             {status === 'idle' && (
//               <motion.span
//                 key="idle"
//                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//                 className="flex items-center justify-center"
//               >
//                 Send Message <Send className="w-5 h-5 ml-3" />
//               </motion.span>
//             )}
//             {status === 'loading' && (
//               <motion.span
//                 key="loading"
//                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//                 className="flex items-center justify-center"
//               >
//                 Sending... <Loader2 className="w-5 h-5 ml-3 animate-spin" />
//               </motion.span>
//             )}
//             {status === 'success' && (
//               <motion.span
//                 key="success"
//                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//                 className="flex items-center justify-center"
//               >
//                 Message Sent! <CheckCircle className="w-5 h-5 ml-3" />
//               </motion.span>
//             )}
//             {status === 'error' && (
//               <motion.span
//                 key="error"
//                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//                 className="flex items-center justify-center"
//               >
//                 An Error Occurred <AlertTriangle className="w-5 h-5 ml-3" />
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </div>
//     </form>
//   );
// };

// // --- Contact Info Card ---
// const InfoCard = ({ icon: Icon, title, children, delay }) => (
//   <FadeIn delay={delay}>
//     <motion.div
//       whileHover={{ y: -5, borderColor: 'rgb(56 189 248)' }} // cyan-400
//       className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
//     >
//       <Icon className="w-12 h-12 text-cyan-400 mb-6" />
//       <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
//       <div className="text-gray-300 space-y-2 text-lg">
//         {children}
//       </div>
//     </motion.div>
//   </FadeIn>
// );

// // --- FAQ Accordion (Re-used from Education) ---
// const AccordionItem = ({ index, title, children, isOpen, onToggle }) => (
//   <div className="border-b border-gray-800">
//     <button
//       onClick={() => onToggle(index)}
//       className="flex justify-between items-center w-full py-6 text-left"
//     >
//       <span className="text-xl font-semibold text-white">{title}</span>
//       <motion.div
//         animate={{ rotate: isOpen ? 180 : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <ChevronDown className="w-6 h-6 text-cyan-400" />
//       </motion.div>
//     </button>
//     <AnimatePresence>
//       {isOpen && (
//         <motion.section
//           key="content"
//           initial="collapsed"
//           animate="open"
//           exit="collapsed"
//           variants={{
//             open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '24px' },
//             collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' }
//           }}
//           transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
//         >
//           <div className="text-gray-300 pb-6">{children}</div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   </div>
// );

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const faqs = [
//     { q: "What is the typical response time?", a: "Our team aims to respond to all enquiries within 24 business hours. For urgent matters, please call us directly." },
//     { q: "Do you offer technical support?", a: "Yes, we provide technical support for all devices under warranty. If you have an issue, please email support@ECycleGreen.co.uk or call our support line." },
//     { q: "Can I visit your facility in Portsmouth?", a: "Our facility is a secure processing center and not open to the general public. However, we are happy to arrange site visits for potential business and education partners. Please contact us to schedule." },
//     { q:"Do you have international offices?", a: "Our main headquarters is in the UK, but we operate and ship globally. Please get in touch with our sales team to discuss international orders." },
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full">
//       {faqs.map((faq, index) => (
//         <AccordionItem
//           key={index}
//           index={index}
//           title={faq.q}
//           isOpen={openIndex === index}
//           onToggle={handleToggle}
//         >
//           {faq.a}
//         </AccordionItem>
//       ))}
//     </div>
//   );
// };


// // --- Main Contact Page Component ---
// export const Contact = () => {
//   return (
//     <div className="bg-black text-white overflow-x-hidden">
      
//       {/* --- 1. Hero Section --- */}
//       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Contact+Background&font=inter" 
//             alt="Contact background"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//           {/* Animated Dots */}
//           <style>{`
//             @keyframes float {
//               0% { transform: translateY(0px); opacity: 0.5; }
//               50% { transform: translateY(-20px); opacity: 0.8; }
//               100% { transform: translateY(0px); opacity: 0.5; }
//             }
//             .floating-dot { animation: float 6s ease-in-out infinite; }
//           `}</style>
//           <Mail className="floating-dot absolute w-16 h-16 text-cyan-500/10" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
//           <Phone className="floating-dot absolute w-12 h-12 text-cyan-500/10" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
//           <MapPin className="floating-dot absolute w-20 h-20 text-cyan-500/10" style={{ left: '30%', top: '70%', animationDelay: '4s' }} />
//         </div>
        
//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
//                 Contact Us
//               </span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
//               Have a question? We'd love to hear from you. Get in touch with our
//               specialist team for sales, support, or partnership enquiries.
//             </p>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 2. Main Content: Info + Form --- */}
//       <section className="py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
//             {/* Left Column: Contact Info */}
//             <div className="space-y-8">
//               <FadeIn>
//                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                   Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
//                 </h2>
//               </FadeIn>
//               <InfoCard icon={MapPin} title="Our Headquarters" delay={0.1}>
//                 <p>Unit E, Railway Triangle, Walton Road</p>
//                 <p>Portsmouth, PO6 1TY</p>
//                 <p>United Kingdom</p>
//               </InfoCard>
//               <InfoCard icon={Mail} title="Email Us" delay={0.2}>
//                 <p>
//                   <a href="mailto:info@ECycleGreen.co.uk" className="hover:text-cyan-400 transition-colors">
//                     info@ECycleGreen.co.uk
//                   </a>
//                 </p>
//                 <p className="text-sm text-gray-400">For general and sales enquiries</p>
//               </InfoCard>
//               <InfoCard icon={Phone} title="Call Us" delay={0.3}>
//                 <p>
//                   <a href="tel:+442392530290" className="hover:text-cyan-400 transition-colors">
//                     +44 (0)2392 530290
//                   </a>
//                 </p>
//                 <p className="text-sm text-gray-400">Mon - Fri, 9:00 AM - 5:00 PM (GMT)</p>
//               </InfoCard>
//             </div>
            
//             {/* Right Column: Contact Form */}
//             <FadeIn delay={0.2}>
//               <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
//                 <ContactForm />
//               </div>
//             </FadeIn>
            
//           </div>
//         </div>
//       </section>

//       {/* --- 3. FAQ Section --- */}
//       <section className="py-24 bg-black">
//         <div className="container mx-auto px-6 max-w-3xl">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//               Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
//             </h2>
//           </FadeIn>
//           <FadeIn>
//             <FAQSection />
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 4. Map Section --- */}
//       <section className="py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-6xl text-center">
//           <FadeIn>
//             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//               Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Headquarters</span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.402633095944!2d-1.076826184252554!3d50.86221407953443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745d3112b323b7%3A0x6a5de6321d586a1!2sRailway%20Triangle%2C%20Walton%20Rd%2C%20Portsmouth%20PO6%201TY%2C%20UK!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 // This filter inverts the map colors for a dark mode theme
//                 className="filter grayscale invert contrast-90"
//               ></iframe>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// // Make sure to replace this export with your file's default export if needed
// // export default Contact;

// import React, { useState }  from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Mail, 
//   Phone, 
//   MapPin,
//   Send,
//   Loader2,
//   CheckCircle,
//   AlertTriangle,
//   ChevronDown,
//   ArrowRight,
//   User,
//   Briefcase,
//   Building
// } from 'lucide-react';
// import { FadeIn } from '../components/common/FadeIn';

// // --- Animated Form Input (Redesigned for Light Mode) ---
// const FormInput = ({ id, label, icon: Icon, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
  
//   return (
//     <div className="relative">
//       {/* Label updated for light mode */}
//       <label 
//         htmlFor={id} 
//         className={`absolute -top-2.5 left-4 px-1 text-sm z-10 transition-colors duration-300
//                     ${isFocused ? 'text-green-600' : 'text-gray-500'}
//                     ${props.type === 'textarea' ? 'bg-white' : 'bg-gray-50'}
//                   `}
//       >
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         {/* Icon updated for light mode */}
//         <Icon className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
//         <motion.input
//           id={id}
//           // Input updated for light mode
//           className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
//           style={{
//             // Green focus shadow
//             boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
//             borderColor: isFocused ? '#10B981' : '#D1D5DB' // green-500, gray-300
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };

// // --- Animated Text Area (Redesigned for Light Mode) ---
// const FormTextarea = ({ id, label, icon: Icon, ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
  
//   return (
//     <div className="relative">
//       {/* Label updated for light mode */}
//       <label 
//         htmlFor={id} 
//         className={`absolute -top-2.5 left-4 bg-white px-1 text-sm z-10 transition-colors duration-300
//                     ${isFocused ? 'text-green-600' : 'text-gray-500'}
//                   `}
//       >
//         {label}
//       </label>
//       <div className="relative">
//         <Icon className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
//         <motion.textarea
//           id={id}
//           // Textarea updated for light mode
//           className="w-full bg-white border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
//           rows={5}
//           style={{
//             // Green focus shadow
//             boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
//             borderColor: isFocused ? '#10B981' : '#D1D5DB' // green-500, gray-300
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           {...props}
//         ></motion.textarea>
//       </div>
//     </div>
//   );
// };

// // --- FAQ Section (Redesigned for Light Mode) ---
// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     { q: "What is your bulk pricing for businesses?", a: "We offer significant discounts for bulk orders. Please use the form to contact our sales team with your requirements, and we'll provide a custom quote." },
//     { q: "How do I make an enquiry for my school?", a: "You can either fill out the contact form with 'Education' as the subject, or visit our dedicated Education page for more specific information and case studies." },
//     { q: "Where are you located?", a: "Our headquarters and main remanufacturing facility are located at 123 Circular Drive, Tech Park, London. You can see a map at the bottom of this page." },
//     { q: "What is your warranty policy?", a: "All ECycleGreen certified laptops come with a standard 12-month warranty, covering all hardware and performance issues." }
//   ];

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full">
//       {faqs.map((faq, index) => (
//         // Updated border color
//         <div key={index} className="border-b border-gray-200">
//           <button
//             onClick={() => handleClick(index)}
//             className="flex justify-between items-center w-full py-6 text-left"
//           >
//             {/* Updated text color */}
//             <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
//             {/* Updated icon color */}
//             <motion.div
//               animate={{ rotate: openIndex === index ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronDown className="w-6 h-6 text-green-500" />
//             </motion.div>
//           </button>
//           <AnimatePresence>
//             {openIndex === index && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3, ease: 'easeInOut' }}
//                 className="overflow-hidden"
//               >
//                 {/* Updated answer text color */}
//                 <p className="pb-6 text-gray-600">{faq.a}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };


// // --- Main Contact Page Component ---
// export const Contact = () => {
//   const [formState, setFormState] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormState('loading');
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     // Simulate success/error
//     if (e.target.email.value.includes('error')) {
//       setFormState('error');
//     } else {
//       setFormState('success');
//     }
//   };

//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
      
//       {/* --- 1. Hero Section --- */}
//       <section 
//         className="relative py-32 md:py-48 flex items-center justify-center text-center bg-gray-50"
//         style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Grid+BG&font=inter')" }}
//       >
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             {/* Heading updated */}
//             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6">
//               Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Touch</span>
//             </h1>
//             {/* Subtitle updated */}
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
//               We're here to help. Whether you're a business, a school, or just curious,
//               reach out and let's talk.
//             </p>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 2. NEW Contact Channels Section --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FadeIn delay={0}>
//               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
//                 <Mail className="w-12 h-12 text-green-600 mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Email Us</h3>
//                 <p className="text-gray-600 mb-4">Our team will get back to you within 24 hours.</p>
//                 <a href="mailto:sales@ECycleGreen.com" className="font-semibold text-green-600 hover:text-green-500">sales@ECycleGreen.com</a>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.1}>
//               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
//                 <Phone className="w-12 h-12 text-green-600 mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Call Us</h3>
//                 <p className="text-gray-600 mb-4">Speak to a specialist Monday - Friday, 9am - 5pm.</p>
//                 <a href="tel:+440123456789" className="font-semibold text-green-600 hover:text-green-500">+44 01234 56789</a>
//               </div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
//                 <Building className="w-12 h-12 text-green-600 mb-6" />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">Visit Us</h3>
//                 <p className="text-gray-600 mb-4">123 Circular Drive, Tech Park, London, UK.</p>
//                 <a href="#map" className="font-semibold text-green-600 hover:text-green-500">Get Directions</a>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* --- 3. Contact Form Section --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
//             {/* Left Column: Info */}
//             <div className="lg:mt-8">
//               <FadeIn>
//                 <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Let's Talk</h2>
//                 <p className="text-xl text-gray-600 mb-12">
//                   Fill out the form and a member of our team will get back to you
//                   as soon as possible.
//                 </p>
//                 {/* Info items updated for light mode */}
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">General Enquiries</h4>
//                       <p className="text-gray-600">info@ECycleGreen.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Briefcase className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">Sales & Business</h4>
//                       <p className="text-gray-600">sales@ECycleGreen.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">Our Address</h4>
//                       <p className="text-gray-600">123 Circular Drive, Tech Park, London, UK</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>
//             </div>
            
//             {/* Right Column: Form */}
//             <FadeIn delay={0.2}>
//               {/* Form container updated for light mode */}
//               <form 
//                 onSubmit={handleSubmit} 
//                 className="w-full bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
//               >
//                 <div className="space-y-8">
//                   <FormInput id="name" label="Full Name" icon={User} type="text" required />
//                   <FormInput id="email" label="Email Address" icon={Mail} type="email" required />
//                   <FormInput id="subject" label="Subject" icon={Briefcase} type="text" />
//                   <FormTextarea id="message" label="Your Message" icon={Send} required />
                  
//                   {/* Button updated for light mode */}
//                   <motion.button
//                     type="submit"
//                     className={`w-full py-4 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
//                                 ${formState === 'loading' && 'bg-gray-400 cursor-not-allowed'}
//                                 ${formState === 'idle' && 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20 hover:scale-105'}
//                                 ${formState === 'success' && 'bg-emerald-600'}
//                                 ${formState === 'error' && 'bg-red-600'}
//                               `}
//                     disabled={formState === 'loading'}
//                     whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
//                   >
//                     {formState === 'idle' && <><Send className="w-5 h-5 mr-3" /> Send Message</>}
//                     {formState === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Sending...</>}
//                     {formState === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Message Sent!</>}
//                     {formState === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Error! Try Again.</>}
//                   </motion.button>
//                 </div>
//               </form>
//             </FadeIn>

//           </div>
//         </div>
//       </section>

//       {/* --- 4. FAQ Section --- */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-4xl">
//           <FadeIn>
//             {/* Heading updated for light mode */}
//             <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
//               Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Questions</span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
//               <FAQSection />
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- 5. Map Section --- */}
//       <section id="map" className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl text-center">
//           <FadeIn>
//             {/* Heading updated for light mode */}
//             <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
//               Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Headquarters</span>
//             </h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             {/* Map container updated for light mode */}
//             <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.250562858107!2d-0.1277583842302611!3d51.50735097963503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce393a553f%3A0x861346380c651c6c!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1678886910903!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 // Adding a CSS filter to make the map less saturated, more "on-brand"
//                 className="grayscale-[30%] contrast-[1.1] opacity-90"
//               ></iframe>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//     </div>
//   );
// };


/* src/pages/Contact.jsx */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertTriangle, 
  ChevronDown, ArrowRight, User, Briefcase, Building, Edit, X, Trash2, Eye
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { contactApi } from '../api/contactApi'; // Use the new API
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS ===

const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);

// --- Animated Form Input (No changes needed) ---
const FormInput = ({ id, label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className={`absolute -top-2.5 left-4 px-1 text-sm z-10 transition-colors duration-300
                    ${isFocused ? 'text-green-600' : 'text-gray-500'}
                    ${props.type === 'textarea' ? 'bg-white' : 'bg-gray-50'}
                  `}
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
        <motion.input
          id={id}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
            borderColor: isFocused ? '#10B981' : '#D1D5DB'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    </div>
  );
};

// --- Animated Text Area (No changes needed) ---
const FormTextarea = ({ id, label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className={`absolute -top-2.5 left-4 bg-white px-1 text-sm z-10 transition-colors duration-300
                    ${isFocused ? 'text-green-600' : 'text-gray-500'}
                  `}
      >
        {label}
      </label>
      <div className="relative">
        <Icon className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
        <motion.textarea
          id={id}
          className="w-full bg-white border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
          rows={5}
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
            borderColor: isFocused ? '#10B981' : '#D1D5DB'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        ></motion.textarea>
      </div>
    </div>
  );
};

// --- FAQ Section (Refactored) ---
const FAQSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('faq')} text="Edit FAQs" />}
      <FadeIn>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title_prefix}
          onSave={onTextSave('faq', 'title_prefix')}
          className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900"
        >
          {data.title_prefix}{' '}
          <EditableText
            as="span"
            isAdmin={isAdmin}
            value={data.title_suffix_gradient}
            onSave={onTextSave('faq', 'title_suffix_gradient')}
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
          />
        </EditableText>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          {data.faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => handleClick(index)}
                className="flex justify-between items-center w-full py-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-green-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

// --- NEW Admin Modal for Submissions ---
const SubmissionsModal = ({ onClose, submissions, onDelete }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Form Submissions</h2>
          <button onClick={onClose}><X /></button>
        </div>
        
        {selected ? (
          // Detail View
          <div className="mt-4">
            <button onClick={() => setSelected(null)} className="text-sm text-blue-600 mb-4">&larr; Back to list</button>
            <h3 className="text-xl font-semibold">{selected.subject}</h3>
            <p className="text-sm text-gray-500">From: {selected.name} ({selected.email})</p>
            <p className="text-sm text-gray-500 mb-4">Received: {new Date(selected.created_at).toLocaleString()}</p>
            <div className="p-4 bg-gray-100 rounded border whitespace-pre-wrap">
              {selected.message}
            </div>
            <button
              onClick={() => onDelete(selected.id)}
              className="mt-4 flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        ) : (
          // List View
          <div className="space-y-2 mt-6">
            {submissions.length === 0 && <p>No submissions yet.</p>}
            {submissions.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className={`font-semibold ${!sub.is_read ? 'text-green-700' : ''}`}>{sub.subject || '(No Subject)'}</span>
                  <span className="text-sm text-gray-600 ml-2">from {sub.name}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => {
                    setSelected(sub);
                    if (!sub.is_read) {
                      contactApi.updateSubmission(sub.id, { is_read: true });
                    }
                  }} className="p-1 text-blue-600"><Eye size={16} /></button>
                  <button onClick={() => onDelete(sub.id)} className="p-1 text-red-600"><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


// --- Main Contact Page Component ---
export const Contact = () => {
  //const { isAdmin } = useAuth(); // UNCOMMENT THIS
   const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'channels', 'form_info', 'faq'
  const [formState, setFormState] = useState('idle');
  
  // State for admin submissions modal
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await contactApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load contact content', err);
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
      await contactApi.updateSectionContent(sectionName, newContent);
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
  
  // --- Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      await contactApi.submitForm(formData);
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 3000); // Reset after 3s
    } catch (err) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };
  
  // --- Admin Submission Management ---
  const handleViewSubmissions = async () => {
    if (!isAdmin) return;
    try {
      const data = await contactApi.getSubmissions();
      setSubmissions(data);
      setShowSubmissions(true);
    } catch (err) {
      alert('Failed to load submissions.');
    }
  };

  const handleDeleteSubmission = async (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await contactApi.deleteSubmission(id);
        setSubmissions(submissions.filter(s => s.id !== id));
      } catch (err) {
        alert('Failed to delete submission.');
      }
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'channels':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Subtitle: <input type="text" className="w-full p-1 border rounded" value={item.subtitle || ''} onChange={e => setItem({...item, subtitle: e.target.value})} /></label>
            <label>Link Text: <input type="text" className="w-full p-1 border rounded" value={item.link_text || ''} onChange={e => setItem({...item, link_text: e.target.value})} /></label>
            <label>Link Href: <input type="text" className="w-full p-1 border rounded" value={item.link_href || ''} onChange={e => setItem({...item, link_href: e.target.value})} /></label>
          </>
        );
      case 'form_info':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
          </>
        );
      case 'faq':
        return (
          <>
            <label>Question: <input type="text" className="w-full p-1 border rounded" value={item.q || ''} onChange={e => setItem({...item, q: e.target.value})} /></label>
            <label>Answer: <textarea className="w-full p-1 border rounded" value={item.a || ''} onChange={e => setItem({...item, a: e.target.value})} /></label>
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
      
      {/* Admin Button to View Submissions */}
      {isAdmin && (
        <button
          onClick={handleViewSubmissions}
          className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all flex items-center gap-2"
        >
          <Eye size={18} /> View Submissions
        </button>
      )}
      
      {/* --- 1. Hero Section --- */}
      <section 
        className="relative py-32 md:py-48 flex items-center justify-center text-center bg-gray-50"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Grid+BG&font=inter')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={content.hero.title_prefix}
              onSave={handleTextSave('hero', 'title_prefix')}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6"
            >
              {content.hero.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.hero.title_suffix_gradient}
                onSave={handleTextSave('hero', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={content.hero.subtitle}
              onSave={handleTextSave('hero', 'subtitle')}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
              useTextarea
            />
          </FadeIn>
        </div>
      </section>

      {/* --- 2. Contact Channels Section --- */}
      <section className="py-24 bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('channels')} text="Edit Channels" />}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.channels.cards.map((card, index) => (
              <FadeIn key={card.id} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <DynamicIcon name={card.icon_name} className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.subtitle}</p>
                  <a href={card.link_href} className="font-semibold text-green-600 hover:text-green-500">{card.link_text}</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Contact Form Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info */}
            <div className="lg:mt-8 relative">
              {isAdmin && <AdminEditButton onClick={() => setModal('form_info')} text="Edit Info" />}
              <FadeIn>
                <EditableText
                  as="h2"
                  isAdmin={isAdmin}
                  value={content.form_info.title}
                  onSave={handleTextSave('form_info', 'title')}
                  className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
                />
                <EditableText
                  as="p"
                  isAdmin={isAdmin}
                  value={content.form_info.subtitle}
                  onSave={handleTextSave('form_info', 'subtitle')}
                  className="text-xl text-gray-600 mb-12"
                  useTextarea
                />
                <div className="space-y-6">
                  {content.form_info.items.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <DynamicIcon name={item.icon_name} className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            {/* Right Column: Form */}
            <FadeIn delay={0.2}>
              <form 
                onSubmit={handleSubmit} 
                className="w-full bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="space-y-8">
                  <FormInput id="name" label="Full Name" icon={User} type="text" required />
                  <FormInput id="email" label="Email Address" icon={Mail} type="email" required />
                  <FormInput id="subject" label="Subject" icon={Briefcase} type="text" />
                  <FormTextarea id="message" label="Your Message" icon={Send} required />
                  
                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
                                ${formState === 'loading' && 'bg-gray-400 cursor-not-allowed'}
                                ${formState === 'idle' && 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20 hover:scale-105'}
                                ${formState === 'success' && 'bg-emerald-600'}
                                ${formState === 'error' && 'bg-red-600'}
                              `}
                    disabled={formState === 'loading'}
                    whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                  >
                    {formState === 'idle' && <><Send className="w-5 h-5 mr-3" /> Send Message</>}
                    {formState === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Sending...</>}
                    {formState === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Message Sent!</>}
                    {formState === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Error! Try Again.</>}
                  </motion.button>
                </div>
              </form>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- 4. FAQ Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FAQSection 
            data={content.faq}
            isAdmin={isAdmin}
            onTextSave={handleTextSave}
            onListEdit={setModal}
          />
        </div>
      </section>

      {/* --- 5. Map Section --- */}
      <section id="map" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.map.title_prefix}
              onSave={handleTextSave('map', 'title_prefix')}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900"
            >
              {content.map.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.map.title_suffix_gradient}
                onSave={handleTextSave('map', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
              <iframe
                src={content.map.map_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1] opacity-90"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* --- Admin Modals --- */}
      
      {/* Content CMS Modal */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'channels' ? content.channels.cards :
            modal === 'form_info' ? content.form_info.items :
            content.faq.faqs
          }
          itemTitleKey={
            modal === 'faq' ? 'q' : 'title'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'channels') {
              listKey = 'cards';
            } else if (modal === 'form_info') {
              listKey = 'items';
            } else if (modal === 'faq') {
              listKey = 'faqs';
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
      
      {/* Submissions Viewer Modal */}
      {isAdmin && showSubmissions && (
        <SubmissionsModal 
          onClose={() => setShowSubmissions(false)}
          submissions={submissions}
          onDelete={handleDeleteSubmission}
        />
      )}

    </div>
  );
};