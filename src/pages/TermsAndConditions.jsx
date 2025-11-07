
// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { Link as ScrollLink } from 'react-scroll';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { Plus } from 'lucide-react';

// // // Admin Imports
// // import { useAuth } from '../context/AuthContext'; // Adjust path as needed
// // import {
// //   getPageContent,
// //   updatePageContent,
// //   getPageSections,
// //   syncPageSections,
// // } from '../api/policyApi'; // Adjust path as needed
// // import { EditableText } from '../components/common/EditableText';
// // import { ListManagementModal } from '../components/common/ListManagementModal';

// // const PAGE_ID = 'terms';

// // // --- Sticky Sidebar Navigation (Dynamic) ---
// // const StickyNav = ({ sections, activeSection }) => (
// //   <nav className="sticky top-32">
// //     <h3 className="text-xl font-bold text-gray-900 mb-4">On this page</h3>
// //     <ul className="space-y-2">
// //       {sections.map((section) => (
// //         <li key={section.id}>
// //           <ScrollLink
// //             to={section.id} // Use the UUID as the scroll target ID
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             offset={-100} // Offset for the sticky header
// //             className={`cursor-pointer block text-sm transition-all duration-200 ${
// //               activeSection === section.id
// //                 ? 'text-cyan-600 font-semibold translate-x-2'
// //                 : 'text-gray-500 hover:text-gray-900'
// //             }`}
// //           >
// //             {section.title}
// //           </ScrollLink>
// //         </li>
// //       ))}
// //     </ul>
// //   </nav>
// // );

// // // --- Content Section Component (Dynamic) ---
// // const DynamicContentSection = ({ section }) => (
// //   <FadeIn>
// //     <section id={section.id} className="mb-12">
// //       <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
// //         {section.title}
// //       </h2>
// //       <div
// //         className="prose prose-lg max-w-none text-gray-700"
// //         dangerouslySetInnerHTML={{ __html: section.content_html }}
// //       />
// //     </section>
// //   </FadeIn>
// // );

// // // --- Main Page Component ---
// // export const TermsAndConditions = () => {
// //   const { isAdmin } = useAuth();
// //   const [activeSection, setActiveSection] = useState('');

// //   // Data states
// //   const [pageContent, setPageContent] = useState(null);
// //   const [sections, setSections] = useState([]);

// //   // Loading and Modal states
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [showModal, setShowModal] = useState(false);

// //   // --- Data Fetching ---
// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const [contentData, sectionData] = await Promise.all([
// //           getPageContent(PAGE_ID),
// //           getPageSections(PAGE_ID),
// //         ]);
// //         setPageContent(contentData);
// //         setSections(sectionData); // Already sorted by 'sort_order' from API
// //         if (sectionData.length > 0) {
// //           setActiveSection(sectionData[0].id);
// //         }
// //       } catch (err) {
// //         console.error('Failed to load terms content', err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     loadData();
// //   }, []);

// //   // --- Admin Save Handlers ---
// //   const handlePageSave = async (key, newValue) => {
// //     try {
// //       const newContent = { ...pageContent, [key]: newValue };
// //       await updatePageContent(PAGE_ID, newContent);
// //       setPageContent(newContent);
// //     } catch (err) {
// //       console.error('Failed to save content:', err);
// //       alert('Save failed!');
// //     }
// //   };

// //   const handleSectionsSave = async (newSections) => {
// //     try {
// //       const syncedSections = await syncPageSections(PAGE_ID, newSections);
// //       setSections(syncedSections);
// //     } catch (err){
// //       console.error('Failed to save page sections:', err);
// //       alert('Save failed!');
// //     }
// //   };

// //   // --- Admin Form Renderer ---
// //   const renderSectionForm = (item, setItem) => (
// //     <div className="flex flex-col gap-4">
// //       <div className="flex flex-col">
// //         <label className="mb-1 font-semibold text-gray-700">Section Title</label>
// //         <input
// //           type="text"
// //           value={item.title || ''}
// //           onChange={(e) => setItem({ ...item, title: e.target.value })}
// //           className="p-2 border rounded"
// //         />
// //       </div>
// //       <div className="flex flex-col">
// //         <label className="mb-1 font-semibold text-gray-700">Content (HTML)</label>
// //         <textarea
// //           value={item.content_html || ''}
// //           onChange={(e) => setItem({ ...item, content_html: e.target.value })}
// //           className="p-2 border rounded min-h-[250px] font-mono"
// //         />
// //       </div>
// //     </div>
// //   );

// //   if (isLoading) {
// //     return (
// //       <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-white text-gray-900 overflow-x-hidden">
// //       {/* --- Hero Section --- */}
// //       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-50">
// //         <div className="absolute inset-0 z-0">
// //           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
// //         </div>
        
// //         <div className="relative z-10 max-w-4xl mx-auto px-6">
// //           <FadeIn>
// //             <EditableText
// //               as="h1"
// //               isAdmin={isAdmin}
// //               value={pageContent.hero_title}
// //               onSave={(val) => handlePageSave('hero_title', val)}
// //               className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6"
// //               dangerouslySetInnerHTML={{ __html: pageContent.hero_title }}
// //             />
// //           </FadeIn>
// //           <FadeIn delay={0.2}>
// //             <EditableText
// //               as="p"
// //               isAdmin={isAdmin}
// //               value={pageContent.hero_subtitle}
// //               onSave={(val) => handlePageSave('hero_subtitle', val)}
// //               className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
// //             />
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- Main Content --- */}
// //       <section className="py-24 bg-gray-50">
// //         <div className="container mx-auto px-6 max-w-7xl">
// //           {/* Admin Manage Button */}
// //           {isAdmin && (
// //             <div className="mb-12 flex justify-end">
// //               <button
// //                 onClick={() => setShowModal(true)}
// //                 className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
// //               >
// //                 <Plus size={18} /> Manage Page Sections
// //               </button>
// //             </div>
// //           )}
          
// //           <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
// //             {/* --- Sidebar (Left Column) --- */}
// //             <div className="hidden lg:block lg:col-span-1">
// //               <StickyNav sections={sections} activeSection={activeSection} />
// //             </div>
            
// //             {/* --- Content (Right Column) --- */}
// //             <div className="lg:col-span-3">
// //               {/* Dynamic Section Rendering */}
// //               {sections.map((section) => (
// //                 <DynamicContentSection key={section.id} section={section} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- Admin Modal --- */}
// //       {showModal && (
// //         <ListManagementModal
// //           title="Manage Page Sections"
// //           items={sections}
// //           onClose={() => setShowModal(false)}
// //           onSave={handleSectionsSave}
// //           renderForm={renderSectionForm}
// //           itemTitleKey="title"
// //         />
// //       )}
// //     </div>
// //   );
// // };


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';
// import { Plus, Edit, Check, X } from 'lucide-react';

// // Admin Imports
// import { useAuth } from '../context/AuthContext'; // Adjust path as needed
// import {
//   getPageContent,
//   updatePageContent,
//   getPageSections,
//   syncPageSections,
// } from '../api/policyApi'; // Adjust path as needed
// // Removed EditableText from import, as it's now in this file
// import { ListManagementModal } from '../components/common/ListManagementModal';

// const PAGE_ID = 'terms';

// // ===================================================================
// // INCLUDED EDITABLETEXT COMPONENT AS REQUESTED
// // ===================================================================
// export const EditableText = ({
//   as: Element = 'p',
//   isAdmin,
//   value, // This is the raw string, e.g., "Hello <b>world</b>"
//   onSave,
//   useTextarea = false,
//   className = '',
//   dangerouslySetInnerHTML, // <-- Accept this prop
//   ...props // All other props
// }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentValue, setCurrentValue] = useState(value);
//   const [isSaving, setIsSaving] = useState(false);

//   const handleSave = async () => {
//     if (currentValue === value) {
//       setIsEditing(false);
//       return;
//     }
//     setIsSaving(true);
//     try {
//       await onSave(currentValue);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Failed to save text:', error);
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // --- Non-Admin View ---
//   if (!isAdmin) {
//     return (
//       <Element 
//         className={className} 
//         {...props} // 'value' and 'dangerouslySetInnerHTML' are not in 'props'
//         dangerouslySetInnerHTML={dangerouslySetInnerHTML}
//       >
//         {/* If dangerouslySetInnerHTML is used, children must be null */}
//         {dangerouslySetInnerHTML ? null : value}
//       </Element>
//     );
//   }

//   // --- Admin Editing View ---
//   if (isEditing) {
//     const InputElement = useTextarea ? 'textarea' : 'input';
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative"
//       >
//         <InputElement
//           type="text"
//           value={currentValue}
//           onChange={(e) => setCurrentValue(e.target.value)}
//           disabled={isSaving}
//           className={`w-full p-2 border border-blue-500 rounded-md ${
//             useTextarea ? 'min-h-[100px]' : ''
//           } ${className}`}
//         />
//         <div className="flex gap-2 mt-2">
//           <button
//             onClick={handleSave}
//             disabled={isSaving}
//             className="px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-gray-400"
//           >
//             {isSaving ? 'Saving...' : <Check size={16} />}
//           </button>
//           <button
//             onClick={() => {
//               setIsEditing(false);
//               setCurrentValue(value);
//             }}
//             disabled={isSaving}
//             className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-700"
//           >
//             <X size={16} />
//           </button>
//         </div>
//       </motion.div>
//     );
//   }

//   // --- Admin Logged-In View (Not Editing) ---
//   return (
//     <Element
//       className={`relative group ${className}`}
//       {...props} // 'value' and 'dangerouslySetInnerHTML' are not in 'props'
//       dangerouslySetInnerHTML={dangerouslySetInnerHTML}
//     >
//       {/* If dangerouslySetInnerHTML is used, children must be null */}
//       {dangerouslySetInnerHTML ? null : value}
//       <button
//         onClick={() => setIsEditing(true)}
//         className="absolute top-0 right-0 p-1 text-blue-600 transition-opacity bg-white bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100"
//         aria-label="Edit text"
//       >
//         <Edit size={16} />
//       </button>
//     </Element>
//   );
// };
// // ===================================================================
// // END OF INCLUDED COMPONENT
// // ===================================================================


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
// export const TermsAndConditions = () => {
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
//         console.error('Failed to load terms content', err);
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

//   // ===================================================================
//   // *** THE FIX: Check for loading OR if pageContent is null ***
//   // ===================================================================
//   if (isLoading || !pageContent) {
//     return (
//       <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   // --- Main Render ---
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
} from '../api/policyApi'; // Adjust path as needed
import { ListManagementModal } from '../components/common/ListManagementModal';

const PAGE_ID = 'terms';

// ===================================================================
// START OF CORRECTED EDITABLETEXT COMPONENT
// ===================================================================
export const EditableText = ({
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
          } ${className}`} // Pass className here for sizing
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
  // The <Element> no longer has the button as a child, fixing the error.
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
// END OF CORRECTED EDITABLETEXT COMPONENT
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
export const TermsAndConditions = () => {
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
        console.error('Failed to load terms content', err);
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

  // Loading Guard: Check for loading OR if pageContent is null
  if (isLoading || !pageContent) {
    return (
      <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // --- Main Render ---
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