// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Link as ScrollLink } from 'react-scroll';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { ArrowRight, AlertTriangle } from 'lucide-react';

// // // Array of sections from your provided text
// // const sections = [
// //   { id: 'intro', title: 'Introduction' },
// //   { id: 'uk-warranty', title: 'UK Warranty' },
// //   { id: 'us-warranty', title: 'US Warranty' },
// //   { id: 'eu-warranty', title: 'EU Warranty' },
// //   { id: 'exceptions', title: 'Warranty Exceptions' },
// //   { id: 'data-backup', title: 'Data Backup Policy' },
// //   { id: 'support-hours', title: 'Hours of Support' },
// // ];

// // // --- Sticky Sidebar Navigation ---
// // const StickyNav = ({ activeSection }) => (
// //   <nav className="sticky top-32">
// //     <h3 className="text-xl font-bold text-white mb-4">On this page</h3>
// //     <ul className="space-y-2">
// //       {sections.map(section => (
// //         <li key={section.id}>
// //           <ScrollLink
// //             to={section.id}
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             offset={-100} // Offset for the sticky header
// //             className={`cursor-pointer block text-sm transition-all duration-200 ${
// //               activeSection === section.id
// //                 ? 'text-cyan-400 font-semibold translate-x-2'
// //                 : 'text-gray-400 hover:text-white'
// //             }`}
// //           >
// //             {section.title}
// //           </ScrollLink>
// //         </li>
// //       ))}
// //     </ul>
// //   </nav>
// // );

// // // --- Content Section Component ---
// // const ContentSection = ({ id, title, children }) => (
// //   <FadeIn>
// //     <section id={id} className="mb-12">
// //       <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
// //         {title}
// //       </h2>
// //       <div className="prose prose-invert prose-lg max-w-none text-gray-300">
// //         {children}
// //       </div>
// //     </section>
// //   </FadeIn>
// // );


// // // --- Main Page Component ---
// // export const Warranty = () => {
// //   const [activeSection] = React.useState('intro');

// //   return (
// //     <div className="bg-black text-white overflow-x-hidden">
// //       {/* --- Hero Section --- */}
// //       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <img 
// //             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Warranty&font=inter" 
// //             alt="Abstract background"
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
// //         </div>
        
// //         <div className="relative z-10 max-w-4xl mx-auto px-6">
// //           <FadeIn>
// //             <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
// //                 Warranty Information
// //               </span>
// //             </h1>
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
// //               Our commitment to product reliability and support.
// //             </p>
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- Main Content --- */}
// //       <section className="py-24 bg-gray-900">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
// //             {/* --- Sidebar (Left Column) --- */}
// //             <div className="hidden lg:block lg:col-span-1">
// //               <StickyNav activeSection={activeSection} />
// //             </div>
            
// //             {/* --- Content (Right Column) --- */}
// //             <div className="lg:col-span-3">
              
// //               {/* --- Warranty Link Callout --- */}
// //               <FadeIn>
// //                 <div className="bg-gray-800 border border-cyan-500/50 rounded-lg p-6 mb-12 shadow-lg">
// //                   <h3 className="text-2xl font-bold text-white mb-3">Submit a Warranty Claim</h3>
// //                   <p className="text-gray-300 mb-4">
// //                     All warranty information and claims are provided and processed through our dedicated portal.
// //                   </p>
// //                   <motion.a 
// //                     href="https://MY-WARRANTY.COM" 
// //                     target="_blank" 
// //                     rel="noopener noreferrer"
// //                     className="inline-flex items-center text-lg font-semibold text-black bg-cyan-400 px-6 py-3 rounded-md group hover:bg-cyan-300 transition-colors"
// //                     whileHover={{ scale: 1.05 }}
// //                   >
// //                     Go to MY-WARRANTY.COM
// //                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
// //                   </motion.a>
// //                 </div>
// //               </FadeIn>

// //               <ContentSection id="intro" title="Introduction">
// //                 <p>In our “Agreement”, “We” or “Us” are “A2C Services Limited” (Company No: 05557861) of Unit E, Railway Triangle, Walton Road, Portsmouth PO6 1TY, “You” are the person detailed on the order forms contained within this site.</p>
// //                 <p>Warranty information is provided in full at <a href="https://MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MY-WARRANTY.COM</a>.</p>
// //               </ContentSection>

// //               <ContentSection id="uk-warranty" title="UK Warranty">
// //                 <h3>To submit a Warranty Claim please follow the procedure below:</h3>
// //                 <ul>
// //                   <li>Warranty claims need submitting online in the following form at <a href="https://MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MY-WARRANTY.COM</a>, please note that claims submitted via any other process cannot be processed.</li>
// //                   <li>Please include your full contact name and address, which should be where the unit needs to be collected and swapped from, the laptop asset tag number, serial number, machine type (make and model) and a detailed description of fault when submitting a claim.</li>
// //                   <li>Where a fault cannot be accurately diagnosed and suitable replacement parts sent out to the customer, we will ‘Advance Replace’ the unit, shipping out a replacement unit and arranging for collection of the faulty one, using the DPD Swap IT service. You will be sent an RMA reference in reply from the <a href="mailto:SUPPORT@MY-WARRANTY.COM" className="text-cyan-400 hover:underline">SUPPORT@MY-WARRANTY.COM</a> operator after completing the following form. Please ensure you check SPAM filters for emails.</li>
// //                   <li>Please have the faulty item packed and ready to be collected in your reception with the RMA reference clearly labelled for this fault. Our courier will drop off a replacement unit and collect the faulty at the same time.</li>
// //                 </ul>
// //                 <div className="bg-gray-800 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
// //                   <h4 className="font-bold text-yellow-300 text-xl flex items-center"><AlertTriangle className="w-6 h-6 mr-3" />Important:</h4>
// //                   <ul className="list-disc pl-6 text-gray-300">
// //                     <li>IT IS ESSENTIAL THAT THE FAULTY ITEM IS PACKAGED AND READY TO COLLECT WHEN THE COURIER ARRIVES – THEY CANNOT SWAP IT OTHERWISE.</li>
// //                     <li>If the SWAP IT service is rejected or fails more than twice, we will reject the warranty claim.</li>
// //                   </ul>
// //                 </div>
// //                 <p>Where a product becomes obsolete and is then claimed against, we will replace faulty goods with a product of either equivalent or higher specification of the original product.</p>
// //                 <p>We will also at our discretion issue a tested working used part to replace faulty goods/parts.</p>
// //               </ContentSection>

// //               <ContentSection id="us-warranty" title="US Warranty Information">
// //                 <h3>Service level agreement</h3>
// //                 <ul>
// //                   <li>Emails: <a href="mailto:support@my-warranty.com" className="text-cyan-400 hover:underline">support@my-warranty.com</a> respond to within a maximum of 8 working hours. Your supplier representative will review your claim to determine if the equipment requires returning.</li>
// //                   <li>Tracking: If submitted for repair, you will be updated regarding your repair or replacement at each stage of progression.</li>
// //                 </ul>
// //                 <h3>Warranty overview</h3>
// //                 <ul>
// //                   <li>Extended warranty – unlimited claims</li>
// //                   <li>1 or 3 year cover on your laptop</li>
// //                   <li>90 days – 1 year cover on your battery</li>
// //                 </ul>
// //                 <h3>What is covered?</h3>
// //                 <ul>
// //                   <li>Mechanical or electrical breakdown</li>
// //                   <li>Power surge</li>
// //                   <li>Not customer or other induced damage</li>
// //                 </ul>
// //                 <h3>Service methods</h3>
// //                 <ul>
// //                   <li>Repair services on covered products</li>
// //                   <li>See full terms and conditions outlined with your supplier</li>
// //                 </ul>
// //               </ContentSection>

// //               <ContentSection id="eu-warranty" title="EU Warranty">
// //                 <h3>Service level agreement</h3>
// //                 <ul>
// //                   <li>Emails: <a href="mailto:support@my-warranty.com" className="text-cyan-400 hover:underline">support@my-warranty.com</a> responded to within a maximum of 8 working hours. Your supplier representative will review your claim to determine if the equipment needs returning.</li>
// //                   <li>Tracking: If submitted for repair, you will be updated regarding your repair or replacement at each stage of progression.</li>
// //                 </ul>
// //                 <h3>Warranty overview</h3>
// //                 <ul>
// //                   <li>Extended warranty</li>
// //                   <li>1 year or 3 year cover on laptop</li>
// //                   <li>90 days – 1 year cover on battery</li>
// //                 </ul>
// //                 <h3>What is covered?</h3>
// //                 <ul>
// //                   <li>Mechanical or electrical breakdown</li>
// //                   <li>Not customer or other induced damage</li>
// //                 </ul>
// //                 <h3>Service methods</h3>
// //                 <ul>
// //                   <li>Repair services on covered products</li>
// //                   <li>See full terms and conditions outlined with your supplier</li>
// //                 </ul>
// //                 <h3>To submit a Warranty Claim please follow the procedure below.</h3>
// //                 <ul>
// //                   <li>Warranty claims need submitting direct through the following claim form. Please note that claims submitted via any other process cannot be processed.</li>
// //                   <li>Please include your full contact name and address, mobile phone number, the address where the unit needs to be collected and potentially swapped from, the laptop asset tag number, serial number, machine type (make and model) and a detailed description of fault when submitting a claim.</li>
// //                   <li>We expect return of the faulty unit to be arranged by you.</li>
// //                   <li>We will also, at our discretion, issue a tested working used part to replace faulty goods/parts.</li>
// //                 </ul>
// //               </ContentSection>

// //               <ContentSection id="exceptions" title="Warranty Exceptions">
// //                 <p>We will not authorise the return and repair of any system which has been modified from what was originally purchased and specification i.e. addition / removal of components without prior consent from us. This includes changing of parts supplied by us.</p>
// //                 <p>If you wish to alter the system from the original specification you must contact us and provide the part numbers so that we can record the changes on our systems.</p>
// //                 <p>Machines found to have been used in environments not suited to their operation and prove detrimental to their health or performance will not be covered by warranty. This includes but is not limited to; dusty, excessively hot or cold, damp, humid or vibrating environments.</p>
// //                 <p>Where our engineers detect evidence of the above then any remaining warranty will be declared null & void, the item will be returned and a charge will be made to cover the cost.</p>
// //                 <p>External Power Supply Units are not covered by the 1 year warranty. Power Supply Units have a 90 day warranty from the date of delivery.</p>
// //                 <h3>Laptop Batteries</h3>
// //                 <p>Laptop batteries are exempt from the warranties detailed above and are only covered for 90 days from date of delivery.</p>
// //                 <p><strong>NOTE:</strong> The capacity of all rechargeable batteries will decline over time depending on the use and charging/discharging process. This is considered normal and therefore, a reduction in battery capacity is not covered under warranty. The battery is only warranted from defects in material or workmanship resulting in failures. Reduced runtime is not warranted and will vary depending on the power management settings and configurations that are set on the mobile device as well as the number of times the battery has been charged and discharged. Please be advised that rechargeable batteries are considered ‘consumable products’ and warranty coverage is limited to a battery not being able to receive and hold a charge.</p>
// //                 <p>The Advance Replacement Warranty does not cover malicious or accidental damage. Nor does it cover mechanical failure or cosmetic degradation through expected wear & tear.</p>
// //               </ContentSection>

// //               <ContentSection id="data-backup" title="Backup your data">
// //                 <div className="bg-gray-800 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
// //                   <h4 className="font-bold text-red-400 text-xl flex items-center"><AlertTriangle className="w-6 h-6 mr-3" />Data Backup Policy</h4>
// //                   <p className="text-gray-300">Although we make every reasonable effort not to lose any information from your hard disk, you must ensure that all of your system data is backed up prior to returning hard drives or complete systems.</p>
// //                   <p className="text-gray-300 mt-2">We cannot be held liable for loss of data or consequential losses arising from the loss of data or program files.</p>
// //                 </div>
// //               </ContentSection>
              
// //               <ContentSection id="support-hours" title="Hours of Support">
// //                 <p>Our Warranty Support is available from 9.00am to 5.00pm Monday to Friday (excluding UK Bank Holidays).</p>
// //                 <p>Initial response time for support enquiries is one working day.</p>
// //                 <ul>
// //                   <li>Web: <a href="https://WWW.MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">WWW.MY-WARRANTY.COM</a></li>
// //                   <li>E-mail: <a href="mailto:SUPPORT@MY-WARRANTY.COM" className="text-cyan-400 hover:underline">SUPPORT@MY-WARRANTY.COM</a></li>
// //                 </ul>
// //               </ContentSection>

// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// /* Warranty.jsx */
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';
// import { ArrowRight, AlertTriangle } from 'lucide-react';

// // Admin Imports
// import { useAuth } from '../context/AuthContext'; // Assuming you have this
// import { EditableText } from '../components/common/EditableText';
// import { getPageContent, updatePageContent } from '../api/policyApi';

// const PAGE_ID = 'warranty';

// const sections = [
//   { id: 'intro', title: 'Introduction' },
//   { id: 'uk-warranty', title: 'UK Warranty' },
//   { id: 'us-warranty', title: 'US Warranty' },
//   { id: 'eu-warranty', title: 'EU Warranty' },
//   { id: 'exceptions', title: 'Warranty Exceptions' },
//   { id: 'data-backup', title: 'Data Backup Policy' },
//   { id: 'support-hours', title: 'Hours of Support' },
// ];

// // --- Sticky Sidebar Navigation (no changes) ---
// const StickyNav = ({ activeSection }) => (
//   <nav className="sticky top-32">
//     {/* ... (your existing nav code) ... */}
//   </nav>
// );

// // --- Content Section Component (no changes) ---
// const ContentSection = ({ id, title, children }) => (
//   <FadeIn>
//     {/* ... (your existing section code) ... */}
//   </FadeIn>
// );

// export const Warranty = () => {
//   const { isAdmin } = useAuth(); // Get admin status
//   const [activeSection, setActiveSection] = useState(sections[0].id);
//   const [content, setContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // 1. Fetch data on load
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await getPageContent(PAGE_ID);
//         setContent(data);
//       } catch (err) {
//         console.error("Failed to load warranty content", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   // 2. Create a save handler
//   const handleSave = async (sectionKey, newHtml) => {
//     try {
//       const newContent = { ...content, [sectionKey]: newHtml };
//       await updatePageContent(PAGE_ID, newContent);
//       setContent(newContent); // Update local state
//     } catch (err) {
//       console.error("Failed to save content", err);
//       alert("Save failed!");
//     }
//   };

//   // 3. Show loading state
//   if (isLoading) {
//     return <div>Loading warranty policy...</div>; // Or a proper spinner
//   }

//   return (
//     <div className="bg-gray-900 text-gray-300">
//       {/* ... (Header/Hero section) ... */}
//       <section className="py-16 sm:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div className="md:col-span-1">
//               <StickyNav activeSection={activeSection} />
//             </div>
            
//             <div className="md:col-span-3 prose prose-invert max-w-none prose-h2:text-white prose-h2:mb-4 prose-p:text-gray-400 prose-ul:text-gray-400">
              
//               {/* 4. Use EditableText for each section */}
              
//               <ContentSection id="intro" title="Introduction">
//                 <EditableText
//                   isAdmin={isAdmin}
//                   value={content.intro}
//                   onSave={(newValue) => handleSave('intro', newValue)}
//                   dangerouslySetInnerHTML={{ __html: content.intro }}
//                   useTextarea={true} // Use textarea to edit HTML
//                   className="prose-p"
//                 />
//               </ContentSection>
              
//               <ContentSection id="uk-warranty" title="UK Warranty">
//                 <EditableText
//                   isAdmin={isAdmin}
//                   value={content.uk_warranty}
//                   onSave={(newValue) => handleSave('uk_warranty', newValue)}
//                   dangerouslySetInnerHTML={{ __html: content.uk_warranty }}
//                   useTextarea={true}
//                 />
//               </ContentSection>
              
//               <ContentSection id="us-warranty" title="US Warranty">
//                 <EditableText
//                   isAdmin={isAdmin}
//                   value={content.us_warranty}
//                   onSave={(newValue) => handleSave('us_warranty', newValue)}
//                   dangerouslySetInnerHTML={{ __html: content.us_warranty }}
//                   useTextarea={true}
//                 />
//               </ContentSection>
              
//               {/* ... Repeat for eu-warranty and exceptions ... */}

//               <ContentSection id="data-backup" title="Data Backup Policy">
//                  <EditableText
//                   isAdmin={isAdmin}
//                   value={content.data_backup}
//                   onSave={(newValue) => handleSave('data_backup', newValue)}
//                   dangerouslySetInnerHTML={{ __html: content.data_backup }}
//                   useTextarea={true}
//                 />
//               </ContentSection>
              
//               <ContentSection id="support-hours" title="Hours of Support">
//                  <EditableText
//                   isAdmin={isAdmin}
//                   value={content.support_hours}
//                   onSave={(newValue) => handleSave('support_hours', newValue)}
//                   dangerouslySetInnerHTML={{ __html: content.support_hours }}
//                   useTextarea={true}
//                 />
//               </ContentSection>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };


// /* Warranty.jsx */
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';
// import { ArrowRight, AlertTriangle, Plus } from 'lucide-react';

// // Admin Imports
// import { useAuth } from '../context/AuthContext'; // Assuming you have this
// import { EditableText } from '../components/common/EditableText';
// import { ListManagementModal } from '../components/common/ListManagementModal';
// import {
//   getPageContent, // This is for Hero/Page-level data
//   updatePageContent,
//   getPageSections, // NEW: For the list of content blocks
//   syncPageSections, // NEW: To save the list
// } from '../api/policyApi';

// const PAGE_ID = 'warranty';

// // --- Sticky Sidebar Navigation (NOW DYNAMIC) ---
// const StickyNav = ({ sections, activeSection }) => (
//   <nav className="sticky top-32">
//     <h3 className="text-xl font-bold text-white mb-4">On this page</h3>
//     <ul className="space-y-2">
//       {sections.map((section) => (
//         <li key={section.id}>
//           <ScrollLink
//             to={section.id} // Use the UUID as the scroll target ID
//             spy={true}
//             smooth={true}
//             duration={500}
//             offset={-100}
//             className={`cursor-pointer block text-sm transition-all duration-200 ${
//               activeSection === section.id
//                 ? 'text-cyan-400 font-semibold translate-x-2'
//                 : 'text-gray-400 hover:text-white'
//             }`}
//           >
//             {section.title}
//           </ScrollLink>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

// // --- Content Section Component (NOW DYNAMIC) ---
// // This component can render different styles based on 'component_type'
// const DynamicContentSection = ({ section }) => {
//   // Special case for a 'warning_box'
//   if (section.component_type === 'warning_box') {
//     return (
//       <FadeIn>
//         <section id={section.id} className="mb-12">
//           {/* We don't render a title, as the box has its own */}
//           <div
//             className="prose prose-invert prose-lg max-w-none text-gray-300"
//             dangerouslySetInnerHTML={{ __html: section.content_html }}
//           />
//         </section>
//       </FadeIn>
//     );
//   }

//   // 'default' component type
//   return (
//     <FadeIn>
//       <section id={section.id} className="mb-12">
//         <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
//           {section.title}
//         </h2>
//         <div
//           className="prose prose-invert prose-lg max-w-none text-gray-300"
//           dangerouslySetInnerHTML={{ __html: section.content_html }}
//         />
//       </section>
//     </FadeIn>
//   );
// };

// export const Warranty = () => {
//   const { isAdmin } = useAuth();
//   const [activeSection, setActiveSection] = useState('');
//   const [pageContent, setPageContent] = useState(null); // For Hero/meta
//   const [sections, setSections] = useState([]); // For page content blocks
//   const [isLoading, setIsLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   // 1. Fetch BOTH page content and page sections
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const [contentData, sectionData] = await Promise.all([
//           getPageContent(PAGE_ID),
//           getPageSections(PAGE_ID),
//         ]);
//         setPageContent(contentData);
//         setSections(sectionData);
//         if (sectionData.length > 0) {
//           setActiveSection(sectionData[0].id);
//         }
//       } catch (err) {
//         console.error('Failed to load warranty content', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   // 2. Create a save handler for the sections modal
//   const handleSectionsSave = async (newSectionsArray) => {
//     try {
//       // The API function now handles sorting and IDs
//       const syncedSections = await syncPageSections(PAGE_ID, newSectionsArray);
//       setSections(syncedSections); // Update local state with the returned data
//     } catch (err) {
//       console.error('Failed to save sections', err);
//       alert('Save failed!');
//     }
//   };

//   // 3. Define the form for the ListManagementModal
//   const renderSectionForm = (item, setItem) => (
//     <div className="flex flex-col gap-4">
//       <div className="flex flex-col">
//         <label className="mb-1 font-semibold text-gray-700">Section Title</label>
//         <input
//           type="text"
//           value={item.title || ''}
//           onChange={(e) => setItem({ ...item, title: e.target.value })}
//           className="p-2 border rounded"
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="mb-1 font-semibold text-gray-700">
//           Component Type
//         </label>
//         <select
//           value={item.component_type || 'default'}
//           onChange={(e) => setItem({ ...item, component_type: e.target.value })}
//           className="p-2 border rounded bg-white"
//         >
//           <option value="default">Default Text Section</option>
//           <option value="warning_box">Warning Box (No Title)</option>
//           {/* You could add more types here, e.g., 'image_right' */}
//         </select>
//       </div>
//       <div className="flex flex-col">
//         <label className="mb-1 font-semibold text-gray-700">
//           Content (HTML)
//         </label>
//         <textarea
//           value={item.content_html || ''}
//           onChange={(e) => setItem({ ...item, content_html: e.target.value })}
//           className="p-2 border rounded min-h-[250px] font-mono"
//         />
//       </div>
//     </div>
//   );

//   if (isLoading) {
//     return <div className="bg-gray-900 min-h-screen"></div>; // Or a proper spinner
//   }

//   return (
//     <div className="bg-gray-900 text-gray-300">
//       {/* ... (Your Hero section can go here) ... */}
//       {/* You can use EditableText for hero titles from pageContent */}
      
//       <section className="py-16 sm:py-24">
//         <div className="container mx-auto px-4">
          
//           {/* 4. Add the Admin "Manage" button */}
//           {isAdmin && (
//             <div className="mb-12 flex justify-end">
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
//               >
//                 <Plus size={18} /> Manage Page Sections
//               </button>
//             </div>
//           )}
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div className="md:col-span-1">
//               <StickyNav sections={sections} activeSection={activeSection} />
//             </div>
            
//             <div className="md:col-span-3">
//               {/* 5. Render sections dynamically */}
//               {sections.map((section) => (
//                 <DynamicContentSection key={section.id} section={section} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. Render the Modal */}
//       {showModal && (
//         <ListManagementModal
//           title="Manage Page Sections"
//           items={sections}
//           onClose={() => setShowModal(false)}
//           onSave={handleSectionsSave}
//           renderForm={renderSectionForm}
//           itemTitleKey="title"
//           // NOTE: We are NOT using fileKeys here, as the 'sync' function handles everything.
//         />
//       )}
//     </div>
//   );
// };




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';
import { Plus, Edit, Check, X } from 'lucide-react'; // Added icons

// Admin Imports
import { useAuth } from '../context/AuthContext'; // Assuming you have this
import { ListManagementModal } from '../components/common/ListManagementModal';
import {
  getPageContent, // This is for Hero/Page-level data
  updatePageContent,
  getPageSections, // NEW: For the list of content blocks
  syncPageSections, // NEW: To save the list
} from '../api/policyApi'; // Corrected API path

const PAGE_ID = 'warranty';

// ===================================================================
// START OF CUSTOM EDITABLETEXT COMPONENT (FOR THIS FILE ONLY)
// ===================================================================
// This component is now local to Warranty.jsx and contains the fix.
const EditableText = ({
  as: Element = 'p',
  isAdmin,
  value,
  onSave,
  useTextarea = false,
  className = '',
  dangerouslySetInnerHTML,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (currentValue === value) {
      setIsEditing(false);
      return;
    }
    setIsSaving(true);
    try {
      await onSave(currentValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save text:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // --- Admin Editing View ---
  if (isAdmin && isEditing) {
    const InputElement = useTextarea ? 'textarea' : 'input';
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <InputElement
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          disabled={isSaving}
          className={`w-full p-2 border border-blue-500 rounded-md ${
            useTextarea ? 'min-h-[100px]' : ''
          } ${className}`}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-400"
          >
            {isSaving ? 'Saving...' : <Check size={16} />}
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setCurrentValue(value);
            }}
            disabled={isSaving}
            className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-700"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    );
  }

  // --- This handles BOTH Admin (not editing) AND Non-Admin views ---

  // 1. Prepare the props for the <Element>
  const elementProps = { className, ...props };
  if (dangerouslySetInnerHTML) {
    elementProps.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
  } else {
    elementProps.children = value; // Set children ONLY if no HTML
  }

  // 2. Render for Non-Admin
  if (!isAdmin) {
    return <Element {...elementProps} />;
  }

  // 3. Render for Admin (not editing)
  // **THE FIX**: Use a wrapper <div> for 'relative group' and the button.
  // This ensures the <Element> (e.g., <h1>) and the <button> are SIBLINGS.
  return (
    <div className="relative group">
      <Element {...elementProps} />
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-0 right-0 p-1 text-blue-600 transition-opacity bg-white bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100"
        aria-label="Edit text"
      >
        <Edit size={16} />
      </button>
    </div>
  );
};
// ===================================================================
// END OF CUSTOM EDITABLETEXT COMPONENT
// ===================================================================

// --- Sticky Sidebar Navigation (NOW DYNAMIC) ---
const StickyNav = ({ sections, activeSection }) => (
  // RESPONSIVE FIX: Increased top margin to top-40
  <nav className="sticky top-40">
    <h3 className="text-xl font-bold text-gray-900 mb-4">On this page</h3>
    <ul className="space-y-2">
      {sections.map((section) => (
        <li key={section.id}>
          <ScrollLink
            to={section.id} // Use the UUID as the scroll target ID
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className={`cursor-pointer block text-sm transition-all duration-200 ${
              activeSection === section.id
                ? 'text-cyan-600 font-semibold translate-x-2'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {section.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  </nav>
);

// --- Content Section Component (NOW DYNAMIC & LIGHT THEME) ---
const DynamicContentSection = ({ section }) => {
  // Special case for a 'warning_box'
  if (section.component_type === 'warning_box') {
    return (
      <FadeIn>
        <section id={section.id} className="mb-12">
          {/* We don't render a title, as the box has its own */}
          <div
            className="prose prose-lg max-w-none text-gray-700" // Updated text color
            dangerouslySetInnerHTML={{ __html: section.content_html }}
          />
        </section>
      </FadeIn>
    );
  }

  // 'default' component type
  return (
    <FadeIn>
      <section id={section.id} className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          {section.title}
        </h2>
        <div
          className="prose prose-lg max-w-none text-gray-700" // Updated text color
          dangerouslySetInnerHTML={{ __html: section.content_html }}
        />
      </section>
    </FadeIn>
  );
};

export const Warranty = () => {
  const { isAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState('');
  const [pageContent, setPageContent] = useState(null); // For Hero/meta
  const [sections, setSections] = useState([]); // For page content blocks
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // 1. Fetch BOTH page content and page sections
  useEffect(() => {
    const loadData = async () => {
      try {
        const [contentData, sectionData] = await Promise.all([
          getPageContent(PAGE_ID),
          getPageSections(PAGE_ID),
        ]);
        setPageContent(contentData);
        setSections(sectionData);
        if (sectionData.length > 0) {
          setActiveSection(sectionData[0].id);
        }
      } catch (err) {
        console.error('Failed to load warranty content', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // 2. Create a save handler for the sections modal
  const handleSectionsSave = async (newSectionsArray) => {
    try {
      // The API function now handles sorting and IDs
      const syncedSections = await syncPageSections(PAGE_ID, newSectionsArray);
      setSections(syncedSections); // Update local state with the returned data
    } catch (err) {
      console.error('Failed to save sections', err);
      alert('Save failed!');
    }
  };

  // 3. Admin: Save Hero Content
  const handlePageSave = async (key, newValue) => {
    try {
      const newContent = { ...pageContent, [key]: newValue };
      await updatePageContent(PAGE_ID, newContent);
      setPageContent(newContent);
    } catch (err) {
      console.error('Failed to save content:', err);
      alert('Save failed!');
    }
  };


  // 4. Define the form for the ListManagementModal
  const renderSectionForm = (item, setItem) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Section Title</label>
        <input
          type="text"
          value={item.title || ''}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          className="p-2 border rounded"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">
          Component Type
        </label>
        <select
          value={item.component_type || 'default'}
          onChange={(e) => setItem({ ...item, component_type: e.target.value })}
          className="p-2 border rounded bg-white"
        >
          <option value="default">Default Text Section</option>
          <option value="warning_box">Warning Box (No Title)</option>
          {/* You could add more types here, e.g., 'image_right' */}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">
          Content (HTML)
        </label>
        <textarea
          value={item.content_html || ''}
          onChange={(e) => setItem({ ...item, content_html: e.target.value })}
          className="p-2 border rounded min-h-[250px] font-mono"
        />
      </div>
    </div>
  );

  // *** This guard prevents the "TypeError: null is not an object" error ***
  if (isLoading || !pageContent) {
    return (
      <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    // 5. Updated to LIGHT THEME
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* --- Hero Section (New) --- */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={pageContent.hero_title}
              onSave={(val) => handlePageSave('hero_title', val)}
              className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6"
              dangerouslySetInnerHTML={{ __html: pageContent.hero_title }}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={pageContent.hero_subtitle}
              onSave={(val) => handlePageSave('hero_subtitle', val)}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* --- Main Content (LIGHT THEME) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* 6. Add the Admin "Manage" button */}
          {isAdmin && (
            <div className="mb-12 flex justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                <Plus size={18} /> Manage Page Sections
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav sections={sections} activeSection={activeSection} />
            </div>
            
            <div className="lg:col-span-3">
              {/* 7. Render sections dynamically */}
              {sections.map((section) => (
                <DynamicContentSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Render the Modal */}
      {showModal && (
        <ListManagementModal
          title="Manage Page Sections"
          items={sections}
          onClose={() => setShowModal(false)}
          onSave={handleSectionsSave}
          renderForm={renderSectionForm}
          itemTitleKey="title"
        />
      )}
    </div>
  );
};