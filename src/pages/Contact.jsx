// // import React, { useState, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// // import { 
// //   Mail, 
// //   Phone, 
// //   MapPin,
// //   Send,
// //   Loader2,
// //   CheckCircle,
// //   AlertTriangle,
// //   ChevronDown,
// //   ArrowRight,User,
// // } from 'lucide-react';
// // import { FadeIn } from '../components/common/FadeIn';

// // // --- Animated Form Input ---
// // const FormInput = ({ id, label, icon: Icon, ...props }) => {
// //   const [isFocused, setIsFocused] = useState(false);
  
// //   return (
// //     <div className="relative">
// //       <label 
// //         htmlFor={id} 
// //         className="absolute -top-3 left-4 bg-gray-900 px-1 text-sm text-cyan-400"
// //       >
// //         {label}
// //       </label>
// //       <div className="relative flex items-center">
// //         <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
// //         <motion.input
// //           id={id}
// //           className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300"
// //           style={{
// //             boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
// //             borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)', // cyan-400, gray-700
// //           }}
// //           onFocus={() => setIsFocused(true)}
// //           onBlur={() => setIsFocused(false)}
// //           {...props}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Animated Text Area ---
// // const FormTextarea = ({ id, label, ...props }) => {
// //   const [isFocused, setIsFocused] = useState(false);
  
// //   return (
// //     <div className="relative">
// //       <label 
// //         htmlFor={id} 
// //         className="absolute -top-3 left-4 bg-gray-900 px-1 text-sm text-cyan-400"
// //       >
// //         {label}
// //       </label>
// //       <motion.textarea
// //         id={id}
// //         rows="5"
// //         className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-600 outline-none resize-none transition-all duration-300"
// //         style={{
// //           boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
// //           borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)',
// //         }}
// //         onFocus={() => setIsFocused(true)}
// //         onBlur={() => setIsFocused(false)}
// //         {...props}
// //       />
// //     </div>
// //   );
// // };

// // // --- Contact Form Component ---
// // const ContactForm = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
// //   const [status, setStatus] = useState('idle'); // idle | loading | success | error

// //   const handleChange = (e) => {
// //     const { id, value } = e.target;
// //     setFormData(prev => ({ ...prev, [id]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setStatus('loading');
    
// //     // --- Mock Form Submission ---
// //     // In a real app, you'd send `formData` to a backend or email service here.
// //     console.log("Form Data Submitted:", formData);
    
// //     setTimeout(() => {
// //       // Simulate success
// //       setStatus('success');
// //       setFormData({ name: '', email: '', subject: '', message: '' });

// //       // Reset form after a few seconds
// //       setTimeout(() => setStatus('idle'), 4000);

// //       // To test error state:
// //       // setStatus('error');
// //       // setTimeout(() => setStatus('idle'), 4000);

// //     }, 2000);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6">
// //       <FormInput 
// //         id="name" 
// //         label="Your Name" 
// //         icon={User} 
// //         type="text" 
// //         placeholder="John Doe"
// //         value={formData.name}
// //         onChange={handleChange}
// //         required 
// //       />
// //       <FormInput 
// //         id="email" 
// //         label="Your Email" 
// //         icon={Mail} 
// //         type="email" 
// //         placeholder="john.doe@example.com"
// //         value={formData.email}
// //         onChange={handleChange}
// //         required 
// //       />
// //       <FormInput 
// //         id="subject" 
// //         label="Subject" 
// //         icon={ArrowRight} // Using ArrowRight as a stand-in for 'Subject'
// //         type="text" 
// //         placeholder="e.g., Bulk Buy Enquiry"
// //         value={formData.subject}
// //         onChange={handleChange}
// //         required 
// //       />
// //       <FormTextarea 
// //         id="message" 
// //         label="Your Message" 
// //         placeholder="How can we help you today?"
// //         value={formData.message}
// //         onChange={handleChange}
// //         required 
// //       />
      
// //       {/* Submit Button with Animated States */}
// //       <div>
// //         <motion.button
// //           type="submit"
// //           disabled={status === 'loading' || status === 'success'}
// //           className={`relative w-full text-lg font-bold py-4 px-8 rounded-lg text-white transition-all duration-300 overflow-hidden ${
// //             status === 'idle' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500' :
// //             status === 'loading' ? 'bg-gray-700' :
// //             status === 'success' ? 'bg-green-600' :
// //             'bg-red-600'
// //           }`}
// //           whileTap={status === 'idle' ? { scale: 0.95 } : {}}
// //         >
// //           <AnimatePresence mode="wait">
// //             {status === 'idle' && (
// //               <motion.span
// //                 key="idle"
// //                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //                 className="flex items-center justify-center"
// //               >
// //                 Send Message <Send className="w-5 h-5 ml-3" />
// //               </motion.span>
// //             )}
// //             {status === 'loading' && (
// //               <motion.span
// //                 key="loading"
// //                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //                 className="flex items-center justify-center"
// //               >
// //                 Sending... <Loader2 className="w-5 h-5 ml-3 animate-spin" />
// //               </motion.span>
// //             )}
// //             {status === 'success' && (
// //               <motion.span
// //                 key="success"
// //                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //                 className="flex items-center justify-center"
// //               >
// //                 Message Sent! <CheckCircle className="w-5 h-5 ml-3" />
// //               </motion.span>
// //             )}
// //             {status === 'error' && (
// //               <motion.span
// //                 key="error"
// //                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //                 className="flex items-center justify-center"
// //               >
// //                 An Error Occurred <AlertTriangle className="w-5 h-5 ml-3" />
// //               </motion.span>
// //             )}
// //           </AnimatePresence>
// //         </motion.button>
// //       </div>
// //     </form>
// //   );
// // };

// // // --- Contact Info Card ---
// // const InfoCard = ({ icon: Icon, title, children, delay }) => (
// //   <FadeIn delay={delay}>
// //     <motion.div
// //       whileHover={{ y: -5, borderColor: 'rgb(56 189 248)' }} // cyan-400
// //       className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
// //     >
// //       <Icon className="w-12 h-12 text-cyan-400 mb-6" />
// //       <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
// //       <div className="text-gray-300 space-y-2 text-lg">
// //         {children}
// //       </div>
// //     </motion.div>
// //   </FadeIn>
// // );

// // // --- FAQ Accordion (Re-used from Education) ---
// // const AccordionItem = ({ index, title, children, isOpen, onToggle }) => (
// //   <div className="border-b border-gray-800">
// //     <button
// //       onClick={() => onToggle(index)}
// //       className="flex justify-between items-center w-full py-6 text-left"
// //     >
// //       <span className="text-xl font-semibold text-white">{title}</span>
// //       <motion.div
// //         animate={{ rotate: isOpen ? 180 : 0 }}
// //         transition={{ duration: 0.3 }}
// //       >
// //         <ChevronDown className="w-6 h-6 text-cyan-400" />
// //       </motion.div>
// //     </button>
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.section
// //           key="content"
// //           initial="collapsed"
// //           animate="open"
// //           exit="collapsed"
// //           variants={{
// //             open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '24px' },
// //             collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' }
// //           }}
// //           transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
// //         >
// //           <div className="text-gray-300 pb-6">{children}</div>
// //         </motion.section>
// //       )}
// //     </AnimatePresence>
// //   </div>
// // );

// // const FAQSection = () => {
// //   const [openIndex, setOpenIndex] = useState(null);
// //   const faqs = [
// //     { q: "What is the typical response time?", a: "Our team aims to respond to all enquiries within 24 business hours. For urgent matters, please call us directly." },
// //     { q: "Do you offer technical support?", a: "Yes, we provide technical support for all devices under warranty. If you have an issue, please email support@eoncircular.co.uk or call our support line." },
// //     { q: "Can I visit your facility in Portsmouth?", a: "Our facility is a secure processing center and not open to the general public. However, we are happy to arrange site visits for potential business and education partners. Please contact us to schedule." },
// //     { q: "Do you have international offices?", a: "Our main headquarters is in the UK, but we operate and ship globally. Please get in touch with our sales team to discuss international orders." },
// //   ];

// //   const handleToggle = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="w-full">
// //       {faqs.map((faq, index) => (
// //         <AccordionItem
// //           key={index}
// //           index={index}
// //           title={faq.q}
// //           isOpen={openIndex === index}
// //           onToggle={handleToggle}
// //         >
// //           {faq.a}
// //         </AccordionItem>
// //       ))}
// //     </div>
// //   );
// // };


// // // --- Main Contact Page Component ---
// // export const Contact = () => {
// //   return (
// //     <div className="bg-black text-white overflow-x-hidden">
      
// //       {/* --- 1. Hero Section --- */}
// //       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
// //         {/* Animated Background */}
// //         <div className="absolute inset-0 z-0">
// //           <img 
// //             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Contact+Background&font=inter" 
// //             alt="Contact background"
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
// //           {/* Animated Dots */}
// //           <style>{`
// //             @keyframes float {
// //               0% { transform: translateY(0px); opacity: 0.5; }
// //               50% { transform: translateY(-20px); opacity: 0.8; }
// //               100% { transform: translateY(0px); opacity: 0.5; }
// //             }
// //             .floating-dot { animation: float 6s ease-in-out infinite; }
// //           `}</style>
// //           <Mail className="floating-dot absolute w-16 h-16 text-cyan-500/10" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
// //           <Phone className="floating-dot absolute w-12 h-12 text-cyan-500/10" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
// //           <MapPin className="floating-dot absolute w-20 h-20 text-cyan-500/10" style={{ left: '30%', top: '70%', animationDelay: '4s' }} />
// //         </div>
        
// //         {/* Content */}
// //         <div className="relative z-10 max-w-4xl mx-auto px-6">
// //           <FadeIn>
// //             <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
// //                 Contact Us
// //               </span>
// //             </h1>
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
// //               Have a question? We'd love to hear from you. Get in touch with our
// //               specialist team for sales, support, or partnership enquiries.
// //             </p>
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- 2. Main Content: Info + Form --- */}
// //       <section className="py-24 bg-gray-900">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
// //             {/* Left Column: Contact Info */}
// //             <div className="space-y-8">
// //               <FadeIn>
// //                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //                   Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
// //                 </h2>
// //               </FadeIn>
// //               <InfoCard icon={MapPin} title="Our Headquarters" delay={0.1}>
// //                 <p>Unit E, Railway Triangle, Walton Road</p>
// //                 <p>Portsmouth, PO6 1TY</p>
// //                 <p>United Kingdom</p>
// //               </InfoCard>
// //               <InfoCard icon={Mail} title="Email Us" delay={0.2}>
// //                 <p>
// //                   <a href="mailto:info@eoncircular.co.uk" className="hover:text-cyan-400 transition-colors">
// //                     info@eoncircular.co.uk
// //                   </a>
// //                 </p>
// //                 <p className="text-sm text-gray-400">For general and sales enquiries</p>
// //               </InfoCard>
// //               <InfoCard icon={Phone} title="Call Us" delay={0.3}>
// //                 <p>
// //                   <a href="tel:+442392530290" className="hover:text-cyan-400 transition-colors">
// //                     +44 (0)2392 530290
// //                   </a>
// //                 </p>
// //                 <p className="text-sm text-gray-400">Mon - Fri, 9:00 AM - 5:00 PM (GMT)</p>
// //               </InfoCard>
// //             </div>
            
// //             {/* Right Column: Contact Form */}
// //             <FadeIn delay={0.2}>
// //               <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
// //                 <ContactForm />
// //               </div>
// //             </FadeIn>
            
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- 3. FAQ Section --- */}
// //       <section className="py-24 bg-black">
// //         <div className="container mx-auto px-6 max-w-3xl">
// //           <FadeIn>
// //             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
// //               Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
// //             </h2>
// //           </FadeIn>
// //           <FadeIn>
// //             <FAQSection />
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- 4. Map Section --- */}
// //       <section className="py-24 bg-gray-900">
// //         <div className="container mx-auto px-6 max-w-6xl text-center">
// //           <FadeIn>
// //             <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
// //               Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Headquarters</span>
// //             </h2>
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.402633095944!2d-1.076826184252554!3d50.86221407953443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745d3112b323b7%3A0x6a5de6321d586a1!2sRailway%20Triangle%2C%20Walton%20Rd%2C%20Portsmouth%20PO6%201TY%2C%20UK!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 // This filter inverts the map colors for a dark mode theme
// //                 className="filter grayscale invert contrast-90"
// //               ></iframe>
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </section>
      
// //     </div>
// //   );
// // };

// // // Make sure to replace this export with your file's default export if needed

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
//         className="absolute -top-3 left-4 bg-gray-900 px-1 text-sm text-cyan-400"
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
//         className="absolute -top-3 left-4 bg-gray-900 px-1 text-sm text-cyan-400"
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
//         className="absolute -top-3 left-4 bg-gray-900 px-1 text-sm text-cyan-400"
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
//     <form onSubmit={handleSubmit} className="space-y-7">
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
//     { q: "Do you offer technical support?", a: "Yes, we provide technical support for all devices under warranty. If you have an issue, please email support@eoncircular.co.uk or call our support line." },
//     { q: "Can I visit your facility in Portsmouth?", a: "Our facility is a secure processing center and not open to the general public. However, we are happy to arrange site visits for potential business and education partners. Please contact us to schedule." },
//     { q: "Do you have international offices?", a: "Our main headquarters is in the UK, but we operate and ship globally. Please get in touch with our sales team to discuss international orders." },
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
//                   <a href="mailto:info@eoncircular.co.uk" className="hover:text-cyan-400 transition-colors">
//                     info@eoncircular.co.uk
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

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  User,
  Briefcase
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';

// --- Animated Form Input ---
const FormInput = ({ id, label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
        <motion.input
          id={id}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300"
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
            borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)', // cyan-400, gray-700
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    </div>
  );
};

// --- Animated Text Area ---
const FormTextarea = ({ id, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
      >
        {label}
      </label>
      <motion.textarea
        id={id}
        rows="5"
        className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-600 outline-none resize-none transition-all duration-300"
        style={{
          boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
          borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)',
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

// --- Animated Select Input ---
const FormSelect = ({ id, label, icon: Icon, children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
        <motion.select
          id={id}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-12 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300 appearance-none" // `appearance-none` hides default arrow
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
            borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        >
          {children}
        </motion.select>
        <ChevronDown className="absolute right-4 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};


// --- Contact Form Component ---
const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    company: '', 
    jobTitle: '', 
    interest: '', 
    message: '' 
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // --- Mock Form Submission ---
    // In a real app, you'd send `formData` to a backend or email service here.
    console.log("Form Data Submitted:", formData);
    
    setTimeout(() => {
      // Simulate success
      setStatus('success');
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        company: '', 
        jobTitle: '', 
        interest: '', 
        message: '' 
      });

      // Reset form after a few seconds
      setTimeout(() => setStatus('idle'), 4000);

      // To test error state:
      // setStatus('error');
      // setTimeout(() => setStatus('idle'), 4000);

    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput 
          id="firstName" 
          label="First Name" 
          icon={User} 
          type="text" 
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange}
          required 
        />
        <FormInput 
          id="lastName" 
          label="Last Name" 
          icon={User} 
          type="text" 
          placeholder="Doe"
          value={formData.lastName}
          onChange={handleChange}
          required 
        />
        <FormInput 
          id="email" 
          label="Your Email" 
          icon={Mail} 
          type="email" 
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <FormInput 
          id="phone" 
          label="Phone Number" 
          icon={Phone} 
          type="tel" 
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          // Not required
        />
        <FormInput 
          id="company" 
          label="Company Name" 
          icon={Briefcase} 
          type="text" 
          placeholder="Eon Industries"
          value={formData.company}
          onChange={handleChange}
        />
        <FormInput 
          id="jobTitle" 
          label="Job Title" 
          icon={Briefcase} 
          type="text" 
          placeholder="IT Manager"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>
      <FormSelect 
        id="interest"
        label="I'm interested in..."
        icon={ArrowRight}
        value={formData.interest}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Please select an option</option>
        <option value="business">Laptops for Business</option>
        <option value="education">Laptops for Education</option>
        <option value="personal">Personal Use</option>
        <option value="support">Technical Support</option>
        <option value="other">Other Enquiry</option>
      </FormSelect>
      <FormTextarea 
        id="message" 
        label="Your Message" 
        placeholder="How can we help you today?"
        value={formData.message}
        onChange={handleChange}
        required 
      />
      
      {/* Submit Button with Animated States */}
      <div>
        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`relative w-full text-lg font-bold py-4 px-8 rounded-lg text-white transition-all duration-300 overflow-hidden ${
            status === 'idle' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500' :
            status === 'loading' ? 'bg-gray-700' :
            status === 'success' ? 'bg-green-600' :
            'bg-red-600'
          }`}
          whileTap={status === 'idle' ? { scale: 0.95 } : {}}
        >
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center"
              >
                Send Message <Send className="w-5 h-5 ml-3" />
              </motion.span>
            )}
            {status === 'loading' && (
              <motion.span
                key="loading"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center"
              >
                Sending... <Loader2 className="w-5 h-5 ml-3 animate-spin" />
              </motion.span>
            )}
            {status === 'success' && (
              <motion.span
                key="success"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center"
              >
                Message Sent! <CheckCircle className="w-5 h-5 ml-3" />
              </motion.span>
            )}
            {status === 'error' && (
              <motion.span
                key="error"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center"
              >
                An Error Occurred <AlertTriangle className="w-5 h-5 ml-3" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </form>
  );
};

// --- Contact Info Card ---
const InfoCard = ({ icon: Icon, title, children, delay }) => (
  <FadeIn delay={delay}>
    <motion.div
      whileHover={{ y: -5, borderColor: 'rgb(56 189 248)' }} // cyan-400
      className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
    >
      <Icon className="w-12 h-12 text-cyan-400 mb-6" />
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <div className="text-gray-300 space-y-2 text-lg">
        {children}
      </div>
    </motion.div>
  </FadeIn>
);

// --- FAQ Accordion (Re-used from Education) ---
const AccordionItem = ({ index, title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-800">
    <button
      onClick={() => onToggle(index)}
      className="flex justify-between items-center w-full py-6 text-left"
    >
      <span className="text-xl font-semibold text-white">{title}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '24px' },
            collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' }
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="text-gray-300 pb-6">{children}</div>
        </motion.section>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "What is the typical response time?", a: "Our team aims to respond to all enquiries within 24 business hours. For urgent matters, please call us directly." },
    { q: "Do you offer technical support?", a: "Yes, we provide technical support for all devices under warranty. If you have an issue, please email support@eoncircular.co.uk or call our support line." },
    { q: "Can I visit your facility in Portsmouth?", a: "Our facility is a secure processing center and not open to the general public. However, we are happy to arrange site visits for potential business and education partners. Please contact us to schedule." },
    { q:"Do you have international offices?", a: "Our main headquarters is in the UK, but we operate and ship globally. Please get in touch with our sales team to discuss international orders." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={faq.q}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        >
          {faq.a}
        </AccordionItem>
      ))}
    </div>
  );
};


// --- Main Contact Page Component ---
export const Contact = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Contact+Background&font=inter" 
            alt="Contact background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          {/* Animated Dots */}
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); opacity: 0.5; }
              50% { transform: translateY(-20px); opacity: 0.8; }
              100% { transform: translateY(0px); opacity: 0.5; }
            }
            .floating-dot { animation: float 6s ease-in-out infinite; }
          `}</style>
          <Mail className="floating-dot absolute w-16 h-16 text-cyan-500/10" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <Phone className="floating-dot absolute w-12 h-12 text-cyan-500/10" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
          <MapPin className="floating-dot absolute w-20 h-20 text-cyan-500/10" style={{ left: '30%', top: '70%', animationDelay: '4s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Contact Us
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Have a question? We'd love to hear from you. Get in touch with our
              specialist team for sales, support, or partnership enquiries.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- 2. Main Content: Info + Form --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                </h2>
              </FadeIn>
              <InfoCard icon={MapPin} title="Our Headquarters" delay={0.1}>
                <p>Unit E, Railway Triangle, Walton Road</p>
                <p>Portsmouth, PO6 1TY</p>
                <p>United Kingdom</p>
              </InfoCard>
              <InfoCard icon={Mail} title="Email Us" delay={0.2}>
                <p>
                  <a href="mailto:info@eoncircular.co.uk" className="hover:text-cyan-400 transition-colors">
                    info@eoncircular.co.uk
                  </a>
                </p>
                <p className="text-sm text-gray-400">For general and sales enquiries</p>
              </InfoCard>
              <InfoCard icon={Phone} title="Call Us" delay={0.3}>
                <p>
                  <a href="tel:+442392530290" className="hover:text-cyan-400 transition-colors">
                    +44 (0)2392 530290
                  </a>
                </p>
                <p className="text-sm text-gray-400">Mon - Fri, 9:00 AM - 5:00 PM (GMT)</p>
              </InfoCard>
            </div>
            
            {/* Right Column: Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
                <ContactForm />
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* --- 3. FAQ Section --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
            </h2>
          </FadeIn>
          <FadeIn>
            <FAQSection />
          </FadeIn>
        </div>
      </section>

      {/* --- 4. Map Section --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Headquarters</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.402633095944!2d-1.076826184252554!3d50.86221407953443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745d3112b323b7%3A0x6a5de6321d586a1!2sRailway%20Triangle%2C%20Walton%20Rd%2C%20Portsmouth%20PO6%201TY%2C%20UK!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // This filter inverts the map colors for a dark mode theme
                className="filter grayscale invert contrast-90"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};

// Make sure to replace this export with your file's default export if needed
// export default Contact;

