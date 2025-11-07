// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Link as ScrollLink } from 'react-scroll';
// // import { FadeIn } from '../components/common/FadeIn';

// // // Array of sections from your provided text
// // const sections = [
// //   { id: 'aims', title: 'Aims & Quality' },
// //   { id: 'opinions', title: 'Opinions' },
// //   { id: 'independence', title: 'Independence' },
// //   { id: 'diversity', title: 'Diversity' },
// //   { id: 'quote', title: 'Right to Quote' },
// //   { id: 'policy', title: 'Privacy Policy' },
// //   { id: 'collection', title: 'What We Collect' },
// //   { id: 'usage', title: 'How We Use Info' },
// //   { id: 'cookies', title: 'Cookies' },
// //   { id: 'requests', title: 'Information Requests' },
// //   { id: 'law', title: 'Governing Law' },
// //   { id: 'gdpr', title: 'GDPR' },
// //   { id: 'forgotten', title: 'Right To Be Forgotten' },
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
// // export const PrivacyPolicy = () => {
// //   const [activeSection, setActiveSection] = useState('aims');

// //   return (
// //     <div className="bg-black text-white overflow-x-hidden">
// //       {/* --- Hero Section --- */}
// //       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <img 
// //             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Privacy+Background&font=inter" 
// //             alt="Abstract background"
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
// //         </div>
        
// //         <div className="relative z-10 max-w-4xl mx-auto px-6">
// //           <FadeIn>
// //             <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
// //                 Privacy Policy
// //               </span>
// //             </h1>
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
// //               Your privacy is important to us. Here's how we handle your data.
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
              
// //               <ContentSection id="aims" title="Content Aims and Quality Criteria">
// //                 <p>As parent company to Circular Computing we firmly believe that ‘IT shouldn’t cost the earth’, and try to ensure all we do impacts positively on the earth. We believe all information provided on this site is true and accurate at the time of creation. Our aim is to provide the public with accurate, up to date, and freely accessible information, sourced from reputable experts in the fields of energy and resources, design, engineering, education, economics and any other topic relevant to the debate regarding a regenerative and restorative circular economy, sustainability, ethics and the environment. These experts have, at all times, the possibility to update, modify and edit the content they have provided to the Circular Computing team.</p>
// //               </ContentSection>

// //               <ContentSection id="opinions" title="Opinions">
// //                 <p>The views expressed on the site by external contributors do not necessarily reflect those of the A2C Services Ltd, A2C Services LLC, and the Circular Computing team its’ Board or its’ staff and employees.</p>
// //               </ContentSection>

// //               <ContentSection id="independence" title="Independence">
// //                 <p>The information provided by the A2C Editorial Team has no bias with regard to political opinions, commercial or corporate considerations. Editorial content will never be paid for by advertisers, sponsors or agencies.</p>
// //               </ContentSection>

// //               <ContentSection id="diversity" title="Diversity">
// //                 <p>Our aim is to ensure a fair balance of opinion, in order to present the site users factual information from bona-fide sources on issues or topics our editorial content focuses on. The A2C Editorial Team will not deliberately favour one side over the other, should the issue tackled seem to present polarised views and/or diametrically opposed political stances.</p>
// //               </ContentSection>

// //               <ContentSection id="quote" title="Right to Quote">
// //                 <p>The A2C Editorial Team complies with international laws regarding intellectual property and copyright protection. Where there is information presented that doesn’t immediately credit the representative author of the content, then please contact the A2C office whereby this information will be confirmed to you. All rights reserved.</p>
// //               </ContentSection>

// //               <ContentSection id="policy" title="Privacy Policy">
// //                 <p>The privacy of our users and subscribers is important to us. This policy explains how A2C Services Ltd uses your personal information. If we make changes to our Privacy Policy that affect how we handle your personal information, we will notify you by email – using only the email address you supplied to us. Minor changes will not be notified.</p>
// //               </ContentSection>

// //               <ContentSection id="collection" title="What information do we collect?">
// //                 <p>When you register as a user of our site, to receive our emails or be kept up to date on sustainable ICT matters, we will collect the personal information necessary in order to provide those services. Typically, we will ask for your name, email address and phone number (the phone number is not an obligatory field).</p>
// //               </ContentSection>

// //               <ContentSection id="usage" title="What do we use your personal information for?">
// //                 <p>We use your personal information in order to personalise the services we provide to you, and in order to improve your experience of our website. We will send you our revised newsletter when it has been written. We may send extra emails out where something significant happens that we think will be of interest to you, for example changes in law with regards to e-waste.</p>
// //                 <p>We will only use your personal data when legally permitted. The most common uses of your personal data are:</p>
// //                 <ul>
// //                   <li>Where we need to perform the contract between us.</li>
// //                   <li>Where we need to process data in accordance with a Customer’s instructions.</li>
// //                   <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
// //                   <li>Where we need to comply with a legal or regulatory obligation.</li>
// //                   <li>To identify and/or verify your identity in accordance with applicable International Anti Money Lying regulations;</li>
// //                   <li>For any other specific purposes as required in accordance with a Customers instruction.</li>
// //                 </ul>
// //               </ContentSection>

// //               <ContentSection id="cookies" title="Cookies">
// //                 <p>Cookies are small text files, stored on your computer, which can be used by websites to make a user’s experience more efficient. We use cookies to help improve your experience of our website. We use Google Analytics, which counts the number of visitors and uses cookies to analyse how people use our site.</p>
// //                 <p>You can delete the cookies that are already on your computer by searching in your file management software for your “cookie” folder or directory. More information about this can be found at www.AboutCookies.org. If you block or delete our cookies, then this might reflect in the functionality of the website.</p>
// //               </ContentSection>

// //               <ContentSection id="requests" title="Information requests">
// //                 <p>If you have any questions or comments about our website, or if you would like to update, change or delete any personal information that we hold about you, please email our office on office@a2c.co.uk</p>
// //               </ContentSection>

// //               <ContentSection id="law" title="Governing Law">
// //                 <p>These terms and conditions shall be construed in accordance with, and governed by, English law and any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
// //               </ContentSection>

// //               <ContentSection id="gdpr" title="General Data Protection Regulation">
// //                 <p>With new rules and regulations coming into play in May 2018 regarding the General Data Protection Regulation (GDPR) we have put in place elelements to cover ensuring that all individuals whose personal information we process have been informed of why we need it, how it is used, what their rights are, who the information is disclosed to and what safeguarding measures are in place to protect their information. As per our Privacy Policy, all data will continue to be handled with due care to ensure privacy of any of our vistors, customers or users of our website.</p>
// //               </ContentSection>

// //               <ContentSection id="forgotten" title="Right To Be Forgotten">
// //                 <p>You have the right to request from us the erasure of all personal data concerning yourself or the subject without undue delay. A2C as an organisation, will ensure that all information concerning yourself or the subject will be removed from our databases so that we no longer contact or hold information concerning yourself or the subject. If you wish to use this right or ask any of the below questions, then please email office@a2c.co.uk with your request.</p>
// //               </ContentSection>

// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };
// /* src/pages/PrivacyPolicy.jsx */
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';
// import { Plus } from 'lucide-react';

// // Admin Imports
// import { useAuth } from '../context/AuthContext'; // Adjust path as needed
// import {
//   getPageContent,
//   updatePageContent,
//   getPageSections,
//   syncPageSections,
// } from '../api/policyApi'; // Adjust path as needed
// import { EditableText } from '../components/common/EditableText';
// import { ListManagementModal } from '../components/common/ListManagementModal';

// const PAGE_ID = 'privacy_policy';

// // --- Sticky Sidebar Navigation (Dynamic) ---
// const StickyNav = ({ sections, activeSection }) => (
//   <nav className="sticky top-32">
//     <h3 className="text-xl font-bold text-gray-900 mb-4">On this page</h3>
//     <ul className="space-y-2">
//       {sections.map((section) => (
//         <li key={section.id}>
//           <ScrollLink
//             to={section.id} // Use the UUID as the scroll target ID
//             spy={true}
//             smooth={true}
//             duration={500}
//             offset={-100} // Offset for the sticky header
//             className={`cursor-pointer block text-sm transition-all duration-200 ${
//               activeSection === section.id
//                 ? 'text-cyan-600 font-semibold translate-x-2'
//                 : 'text-gray-500 hover:text-gray-900'
//             }`}
//           >
//             {section.title}
//           </ScrollLink>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

// // --- Content Section Component (Dynamic) ---
// const DynamicContentSection = ({ section }) => (
//   <FadeIn>
//     <section id={section.id} className="mb-12">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
//         {section.title}
//       </h2>
//       <div
//         className="prose prose-lg max-w-none text-gray-700"
//         dangerouslySetInnerHTML={{ __html: section.content_html }}
//       />
//     </section>
//   </FadeIn>
// );

// // --- Main Page Component ---
// export const PrivacyPolicy = () => {
//   const { isAdmin } = useAuth();
//   const [activeSection, setActiveSection] = useState('');

//   // Data states
//   const [pageContent, setPageContent] = useState(null);
//   const [sections, setSections] = useState([]);

//   // Loading and Modal states
//   const [isLoading, setIsLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   // --- Data Fetching ---
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const [contentData, sectionData] = await Promise.all([
//           getPageContent(PAGE_ID),
//           getPageSections(PAGE_ID),
//         ]);
//         setPageContent(contentData);
//         setSections(sectionData); // Already sorted by 'sort_order' from API
//         if (sectionData.length > 0) {
//           setActiveSection(sectionData[0].id);
//         }
//       } catch (err) {
//         console.error('Failed to load privacy content', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   // --- Admin Save Handlers ---
//   const handlePageSave = async (key, newValue) => {
//     try {
//       const newContent = { ...pageContent, [key]: newValue };
//       await updatePageContent(PAGE_ID, newContent);
//       setPageContent(newContent);
//     } catch (err) {
//       console.error('Failed to save content:', err);
//       alert('Save failed!');
//     }
//   };

//   const handleSectionsSave = async (newSections) => {
//     try {
//       const syncedSections = await syncPageSections(PAGE_ID, newSections);
//       setSections(syncedSections);
//     } catch (err) {
//       console.error('Failed to save page sections:', err);
//       alert('Save failed!');
//     }
//   };

//   // --- Admin Form Renderer ---
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
//         <label className="mb-1 font-semibold text-gray-700">Content (HTML)</label>
//         <textarea
//           value={item.content_html || ''}
//           onChange={(e) => setItem({ ...item, content_html: e.target.value })}
//           className="p-2 border rounded min-h-[250px] font-mono"
//         />
//       </div>
//     </div>
//   );

//   if (isLoading) {
//     return (
//       <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
//       {/* --- Hero Section --- */}
//       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-50">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             <EditableText
//               as="h1"
//               isAdmin={isAdmin}
//               value={pageContent.hero_title}
//               onSave={(val) => handlePageSave('hero_title', val)}
//               className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6"
//               dangerouslySetInnerHTML={{ __html: pageContent.hero_title }}
//             />
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <EditableText
//               as="p"
//               isAdmin={isAdmin}
//               value={pageContent.hero_subtitle}
//               onSave={(val) => handlePageSave('hero_subtitle', val)}
//               className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
//             />
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- Main Content --- */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 max-w-7xl">
//           {/* Admin Manage Button */}
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

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
//             {/* --- Sidebar (Left Column) --- */}
//             <div className="hidden lg:block lg:col-span-1">
//               <StickyNav sections={sections} activeSection={activeSection} />
//             </div>

//             {/* --- Content (Right Column) --- */}
//             <div className="lg:col-span-3">
//               {/* Dynamic Section Rendering */}
//               {sections.map((section) => (
//                 <DynamicContentSection key={section.id} section={section} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Admin Modal --- */}
//       {showModal && (
//         <ListManagementModal
//           title="Manage Page Sections"
//           items={sections}
//           onClose={() => setShowModal(false)}
//           onSave={handleSectionsSave}
//           renderForm={renderSectionForm}
//           itemTitleKey="title"
//         />
//       )}
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';
import { Plus, Edit, Check, X } from 'lucide-react';

// Admin Imports
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import {
  getPageContent,
  updatePageContent,
  getPageSections,
  syncPageSections,
} from '../api/policyApi'; // Corrected API path
// We are NOT importing the broken EditableText component anymore.
// import { EditableText } from '../components/common/EditableText'; 
import { ListManagementModal } from '../components/common/ListManagementModal';

const PAGE_ID = 'privacy_policy';

// ===================================================================
// START OF CUSTOM EDITABLETEXT COMPONENT (FOR THIS FILE ONLY)
// ===================================================================
// This component is now local to PrivacyPolicy.jsx and contains the fix.
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


// --- Sticky Sidebar Navigation (Dynamic) ---
const StickyNav = ({ sections, activeSection }) => (
  <nav className="sticky top-32">
    <h3 className="text-xl font-bold text-gray-900 mb-4">On this page</h3>
    <ul className="space-y-2">
      {sections.map((section) => (
        <li key={section.id}>
          <ScrollLink
            to={section.id} // Use the UUID as the scroll target ID
            spy={true}
            smooth={true}
            duration={500}
            offset={-100} // Offset for the sticky header
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

// --- Content Section Component (Dynamic) ---
const DynamicContentSection = ({ section }) => (
  <FadeIn>
    <section id={section.id} className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        {section.title}
      </h2>
      <div
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: section.content_html }}
      />
    </section>
  </FadeIn>
);

// --- Main Page Component ---
export const PrivacyPolicy = () => {
  const { isAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState('');

  // Data states
  const [pageContent, setPageContent] = useState(null);
  const [sections, setSections] = useState([]);

  // Loading and Modal states
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // --- Data Fetching ---
  useEffect(() => {
    const loadData = async () => {
      try {
        const [contentData, sectionData] = await Promise.all([
          getPageContent(PAGE_ID),
          getPageSections(PAGE_ID),
        ]);
        setPageContent(contentData);
        setSections(sectionData); // Already sorted by 'sort_order' from API
        if (sectionData.length > 0) {
          setActiveSection(sectionData[0].id);
        }
      } catch (err) {
        console.error('Failed to load privacy content', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // --- Admin Save Handlers ---
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

  const handleSectionsSave = async (newSections) => {
    try {
      const syncedSections = await syncPageSections(PAGE_ID, newSections);
      setSections(syncedSections);
    } catch (err) {
      console.error('Failed to save page sections:', err);
      alert('Save failed!');
    }
  };

  // --- Admin Form Renderer ---
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
        <label className="mb-1 font-semibold text-gray-700">Content (HTML)</label>
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
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-50">
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

      {/* --- Main Content --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Admin Manage Button */}
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
            {/* --- Sidebar (Left Column) --- */}
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav sections={sections} activeSection={activeSection} />
            </div>

            {/* --- Content (Right Column) --- */}
            <div className="lg:col-span-3">
              {/* Dynamic Section Rendering */}
              {sections.map((section) => (
                <DynamicContentSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Admin Modal --- */}
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