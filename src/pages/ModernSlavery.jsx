// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
// import { FadeIn } from '../components/common/FadeIn';

// // Array of sections from your provided text
// const sections = [
//   { id: 'what-is', title: 'What is Modern Slavery?' },
//   { id: 'policies', title: 'Our Policies' },
//   { id: 'code', title: 'Code of Conduct' },
//   { id: 'risk', title: 'Identifying Risk' },
//   { id: 'diligence', title: 'Due Diligence' },
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
// export const ModernSlavery = () => {
//   const [activeSection, setActiveSection] = useState('what-is');

//   return (
//     <div className="bg-black text-white overflow-x-hidden">
//       {/* --- Hero Section --- */}
//       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://placehold.co/1920x1080/000000/1a1a1a?text=Policy+Background&font=inter" 
//             alt="Abstract background"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//         </div>
        
//         <div className="relative z-10 max-w-4xl mx-auto px-6">
//           <FadeIn>
//             <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
//                 Modern Slavery Policy
//               </span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
//               Our commitment to acting ethically and with integrity in all our business relationships.
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
              
//               <ContentSection id="what-is" title="What is Modern Slavery?">
//                 <p>Modern Slavery and Human Trafficking remains a hidden issue within global society. We all have a responsibility to be alert to the risks, however small, in our businesses and in the wider supply chain.</p>
//                 <p>Staff are expected to report concerns and management are expected to act upon them.</p>
//                 <p>Many think of slavery as a relic of history, eradicated in the nineteenth century by the abolitionist movement. Unfortunately, slavery continues to flourish in the modern world. Modern Slavery refers to situations of exploitation that a person cannot refuse or leave, because of threats, violence, and coercion, abuse of power or deception. As of 2016 there were 40.3 million people reported in modern slavery (71% Female & 29% Male).</p>
//                 <p>We are committed to acting ethically and with integrity in all of our business relationships and are taking steps to enforce effective systems and controls to ensure that no Modern Slavery or Human Trafficking occurs anywhere in our supply chain in the UK and internationally.</p>
//               </ContentSection>

//               <ContentSection id="policies" title="Our Policies">
//                 <p>As part of our commitment to identify and mitigate risk, we build long standing relationships with our suppliers and make our expectations of acceptable business behaviour, clear.</p>
//                 <p>By building these relationships and following guidelines outline by the Responsible Business Alliance we can engage with our suppliers to ensure that they share our commitment and ethics. With the strength of our supplier relationships we are confident that our tier 1 suppliers maintain this same relationship with their tier 1 suppliers and so forth.</p>
//                 <p>We have a zero tolerance approach to Modern Slavery and Human Trafficking and expect all those in our supply chain to take the same approach and to comply with our values, including any 3rd party brands who supply both our A2C Services Ltd and Circular Computing™ brand.</p>
//                 <p>Any suppliers within our supply chain who are unable to comply with our code of conduct and Modern Slavery Polices and refuse to collaborate with us on implementing improvement strategies would have their contractual relationship terminated immediately.</p>
//               </ContentSection>

//               <ContentSection id="code" title="Code of Conduct">
//                 <p>Our Code of Conduct is based on the Responsible Business Alliance principles which can be applied, fairly, to all nations. We are signatories to the United Nations Global Compact demonstrating our commitment to helping eliminate modern day slavery. We also undertake to complete annually the Modern Slavery assessment tool provided for by HM Government, as part of our annual policy reviews.</p>
//                 <p>This code is shared with all our current Tier 1 suppliers across our supply chain and with all our service providers.</p>
//                 <p>We require our Agents to translate and ensure our Code of Conduct is communicated to all suppliers under their remit. Those factories operating outside of Agents we communicate directly with.</p>
//                 <p>We ensure all employees have access to our polices via our A2C Wikipedia, website and internal systems which covers anti -bribery policies, grievance and whistle blowing procedures and forms part of our mandatory induction process. We will continue to enhance and develop our policies through the coming year as we learn from our experience, and best practices.</p>
//                 <p>We endeavour to provide a support network for our employees to consult and provide them guidance on their wellbeing and to provide a further forum for educating our employees on Modern Slavery and raising its awareness.</p>
//               </ContentSection>

//               <ContentSection id="risk" title="Identifying Risk">
//                 <p>We source our products globally with a wide and varied supplier base. We push to understand areas with the greatest risk of modern slavery and focus our efforts in ensuring those we choose to work with prevent modern slavery. Our continued focus for 2020/2021 is to ensure that standards are continuing to be met throughout our supply chain and support those that need further educating. We collaborate and look to remedy any areas of concern through close communication and education.</p>
//                 <p>We instil our company virtues and ethical stance in our agents/resellers. We engage them to the highest standard to share our values face to face with our factories. They regularly visit operations and provide feedback to our head office team ensuring all comply to our Code of Conduct.</p>
//                 <p>We endeavour to have our Modern Slavery Policy / Code of Conduct available to all stakeholders of our business and encourage them to continue to develop their practises based on our own.</p>
//                 <p>We ensure all our employees are aware of and abide by the Bribery Act 2010. We train employees involved within buying and sourcing to equip them with the tools to identify practices that would contravene our code of ethics.</p>
//               </ContentSection>

//               <ContentSection id="diligence" title="Due Diligence">
//                 <p>We are committed to conducting our business with honesty and integrity and we expect all staff to maintain high standards. We operate a transparent and open culture at all levels throughout our organisation and supply chain.</p>
//                 <p>As a business we have a Senior Management Team (SMT) who directly report to the board on business operations, governance & risk management. The SMT meet on a weekly basis and operate as a steering group to discuss topics including Business Sustainability, Risk Identification & Modern Slavery amongst others.</p>
//                 <p>Members of the group represent functional areas across the business and take responsibility for ensuring the business operates within accordance of our corporate governance structure.</p>
//               </ContentSection>

//             </div>
//           </div>
//         </div>
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

// const PAGE_ID = 'modern_slavery';

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
// export const ModernSlavery = () => {
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
//         console.error('Failed to load modern slavery content', err);
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
// We are NOT importing the broken EditableText component
// import { EditableText } from '../components/common/EditableText'; 
import { ListManagementModal } from '../components/common/ListManagementModal';

const PAGE_ID = 'modern_slavery';

// ===================================================================
// START OF CUSTOM EDITABLETEXT COMPONENT (FOR THIS FILE ONLY)
// ===================================================================
// This component is now local to ModernSlavery.jsx and contains the fix.
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
export const ModernSlavery = () => {
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
        console.error('Failed to load modern slavery content', err);
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