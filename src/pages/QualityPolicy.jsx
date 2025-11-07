// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';

// // Array of sections from your provided text
// const sections = [
//   { id: 'quality-policy', title: 'Our Quality Policy' },
//   { id: 'vision', title: 'The A2C LTD Vision' },
// ];

// // --- Sticky Sidebar Navigation ---
// const StickyNav = ({ activeSection }) => (
//   <nav className="sticky top-32">
//     <h3 className="text-xl font-bold text-white mb-4">On this page</h3>
//     <ul className="space-y-2">
//       {sections.map(section => (
//         <li key={section.id}>
//           <ScrollLink
//             to={section.id}
//             spy={true}
//             smooth={true}
//             duration={500}
//             offset={-100} // Offset for the sticky header
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

// // --- Content Section Component ---
// const ContentSection = ({ id, title, children }) => (
//   <FadeIn>
//     <section id={id} className="mb-12">
//       <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
//         {title}
//       </h2>
//       <div className="prose prose-invert prose-lg max-w-none text-gray-300">
//         {children}
//       </div>
//     </section>
//   </FadeIn>
// );


// // --- Main Page Component ---
// export const QualityPolicy = () => {
//   const [activeSection, setActiveSection] = useState('quality-policy');

//   return (
//     <div className="bg-black text-white overflow-x-hidden">
//       {/* --- Hero Section --- */}
//       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Quality+Policy&font=inter" 
//             alt="Abstract background"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//         </div>
        
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
//                 Quality Policy
//               </span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
//               Our commitment to the highest standards in all operations.
//             </p>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- Main Content --- */}
//       <section className="py-24 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
//             {/* --- Sidebar (Left Column) --- */}
//             <div className="hidden lg:block lg:col-span-1">
//               <StickyNav activeSection={activeSection} />
//             </div>
            
//             {/* --- Content (Right Column) --- */}
//             <div className="lg:col-span-3">
              
//               <ContentSection id="quality-policy" title="Our Quality Policy">
//                 <p>A2C Services is committed to the highest standards in refurbishing, remanufacturing, testing, repairing, assembling, and trading of IT equipment and computer components. We ensure excellence through responsible downstream vendor management and secure logical and physical data sanitization, delivering reliable and sustainable solutions to our customers.</p>
//                 <p>We listen to our clients, continually reviewing our processes of service realisation in line with business needs, maximising the efficiency of our integrated management system.</p>
//                 <p>We are committed to minimising our impact on the environment protecting the health & safety of all individuals affected by our activities, including our employees & the public while in the pursuit of quality production and supply.</p>
//                 <p>We provide a safe & healthy working environment by ensuring that all personnel are suitably protected, informed, trained or instructed to carry out their work in & safe, healthy & environmentally friendly manner both to themselves, their surroundings & any other individuals who may be affected. We fully assess the risks of our activities & mitigate to reduce impact on Quality, Health,Safety & the Environment – <strong>TARGET ZERO</strong> accidents.</p>
//                 <p>The principal elements of our policies are: –</p>
//                 <ul>
//                   <li><strong>a)</strong> To develop & maintain a Quality, Health, Safety & Environmental Management System satisfying the requirements of BS EN ISO 9001: 2015; 14001:2015 and ISO 45001 and BS8887-211 which form the framework for achieving continual improvement, complete client satisfaction, reduced health, safety & environmental impact & full realization of all company objectives in line with the strategy and aims of the company.</li>
//                   <li><strong>b)</strong> To focus on the requirements of our clients, establishing levels of communication capable of fully determining their needs & expectations.</li>
//                   <li><strong>c)</strong> To maintain an accurate knowledge of and comply with all relevant health, safety & environmental legislation, requirements, best practice and guidelines.</li>
//                   <li><strong>d)</strong> To maintain an optimum understanding of health, safety & environmental risk & impact associated with our activities & communicate these to our staff, & clients (as appropriate) through training and continually updated knowledge on quality, health, safety & environmental issues.</li>
//                   <li><strong>e)</strong> To encourage open debate, input & suggestion for Quality, Health, Safety & Environmental improvement from all of our staff.</li>
//                   <li><strong>f)</strong> To establish & maintain an infrastructure capable of supporting all company activities & realising all company objectives in relation to these policies.</li>
//                   <li><strong>g)</strong> To identify scope for improvement in every aspect of the company’s activities, devising & implementing effective solutions throughout.</li>
//                 </ul>
//               </ContentSection>

//               <ContentSection id="vision" title="The A2C LTD Vision">
//                 <p>We are customer- focused bulk computer dealers who trade in volumes of Used, Refurbished, Recycled and end of line Computer stocks. Our aim is to offer unsurpassed levels of customer service, delivery, reliability and competitive pricing – a partner to both our customers & the environment.</p>
//               </ContentSection>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
/* QualityPolicy.jsx */
// import React, { useState, useEffect } from 'react';
// // ... (other imports)

// // Admin Imports
// import { useAuth } from '../context/AuthContext';
// import { EditableText } from '../components/common/EditableText';
// import { EditableCenteredImage } from '../components/common/EditableMedia';
// import { getPageContent, updatePageContent, updateFile } from '../api/policyApi';

// const PAGE_ID = 'quality_policy';
// const BUCKET_NAME = 'certification_files'; // Re-use bucket or make a new one

// export const QualityPolicy = () => {
//   const { isAdmin } = useAuth();
//   const [content, setContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
  
//   // ... (Fetch data on load - same as Warranty.jsx) ...
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await getPageContent(PAGE_ID);
//         setContent(data);
//       } catch (err) {
//         console.error("Failed to load content", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   // ... (handleSave for text - same as Warranty.jsx) ...
//   const handleTextSave = async (sectionKey, newHtml) => {
//     try {
//       const newContent = { ...content, [sectionKey]: newHtml };
//       await updatePageContent(PAGE_ID, newContent);
//       setContent(newContent);
//     } catch (err) {
//       console.error("Failed to save text", err);
//       alert("Save failed!");
//     }
//   };
  
//   // 1. Create a save handler for the image
//   const handleImageSave = async (file) => {
//     try {
//       const oldStoragePath = content.vision_image_storage_path;
//       const { publicUrl, storagePath } = await updateFile(file, oldStoragePath);

//       // Save the new URLs to the page_content JSON
//       const newContent = {
//         ...content,
//         vision_image_url: publicUrl,
//         vision_image_storage_path: storagePath,
//       };
      
//       await updatePageContent(PAGE_ID, newContent);
//       setContent(newContent); // Update local state
//     } catch (err) {
//       console.error("Failed to save image", err);
//       alert("Image save failed!");
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-900 text-gray-300">
//       {/* ... (StickyNav, ContentSection definitions) ... */}
//       <section className="py-16 sm:py-24">
//         {/* ... (page layout) ... */}
              
//           <ContentSection id="quality-policy" title="Our Quality Policy">
//             <EditableText
//               isAdmin={isAdmin}
//               value={content.policy}
//               onSave={(newValue) => handleTextSave('policy', newValue)}
//               dangerouslySetInnerHTML={{ __html: content.policy }}
//               useTextarea={true}
//             />
//           </ContentSection>

//           <ContentSection id="vision" title="The A2C LTD Vision">
//             <EditableText
//               isAdmin={isAdmin}
//               value={content.vision}
//               onSave={(newValue) => handleTextSave('vision', newValue)}
//               dangerouslySetInnerHTML={{ __html: content.vision }}
//               useTextarea={true}
//             />
            
//             {/* 2. Add the EditableCenteredImage */}
//             <EditableCenteredImage
//               isAdmin={isAdmin}
//               src={content.vision_image_url}
//               alt="Our company vision"
//               onSave={handleImageSave}
//               className="mt-6 rounded-lg"
//               imgClassName="aspect-video"
//             />
//           </ContentSection>
          
//         {/* ... (rest of layout) ... */}
//       </section>
//     </div>
//   );
// };

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

// const PAGE_ID = 'quality_policy';

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
// export const QualityPolicy = () => {
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
//         console.error('Failed to load quality policy content', err);
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
import { Plus, Edit, Check, X } from 'lucide-react'; // Added icons

// Admin Imports
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import {
  getPageContent,
  updatePageContent,
  getPageSections,
  syncPageSections,
} from '../api/policyApi'; // Corrected API path
// We are NOT importing the broken EditableText component
// import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';

const PAGE_ID = 'quality_policy';

// ===================================================================
// START OF CUSTOM EDITABLETEXT COMPONENT (FOR THIS FILE ONLY)
// ===================================================================
// This component is now local to QualityPolicy.jsx and contains the fix.
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
export const QualityPolicy = () => {
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
        console.error('Failed to load quality policy content', err);
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
      {/* RESPONSIVE FIX: Adjusted hero height for mobile */}
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