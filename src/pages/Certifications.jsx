

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';
import { Plus, Download, Edit, Check, X } from 'lucide-react'; // Added icons

// Admin Imports
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import {
  getPageContent,
  updatePageContent,
  getPageSections,
  syncPageSections,
  getListContent,
  updateListContent,
  syncGalleryImages,
} from '../api/policyApi'; // Corrected API path
// We are NOT importing the broken EditableText component
// import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';

// ID for this page's text content
const PAGE_ID = 'certifications_page';

// ===================================================================
// START OF CUSTOM EDITABLETEXT COMPONENT (FOR THIS FILE ONLY)
// ===================================================================
// This component is now local to Certifications.jsx and contains the fix.
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
            to={section.id}
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

// --- Content Section Component (NOW DYNAMIC) ---
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

// --- Reusable Certification Card (Light Theme) ---
const CertificationCard = ({ logoSrc, title, subtitle, pdfUrl, children, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full shadow-md hover:shadow-lg hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
      <img
        src={logoSrc}
        alt={title}
        className="h-20 w-auto mb-6 object-contain object-left"
        onError={(e) => (e.target.src = 'https://placehold.co/200x100/ffffff/333333?text=Logo+Error&font=inter')}
      />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <h4 className="text-md font-semibold text-cyan-600 mb-4">{subtitle}</h4>
      <p className="text-gray-600 text-base flex-grow">{children}</p>

      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors mt-6 font-semibold"
        >
          <Download size={16} />
          View Certificate
        </a>
      )}
    </div>
  </FadeIn>
);

// --- NEW: Certificate Scroller Component ---
const CertificateScroller = ({ images, isAdmin, onManage }) => {
  // Duplicate images for a seamless loop
  const extendedImages = [...images, ...images];

  return (
    <div className="relative w-full max-w-7xl mx-auto my-16">
       <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        Our Certifications
      </h2>
      {isAdmin && (
        <div className="flex justify-end mb-4">
          <button
            onClick={onManage}
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <Plus size={18} /> Manage Gallery Images
          </button>
        </div>
      )}
      <div className="w-full overflow-hidden mask-image-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-track {
            animation: scroll 60s linear infinite;
          }
          .scrolling-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex w-max scrolling-track">
          {extendedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] h-[300px] mx-4 p-2 bg-white border border-gray-200 rounded-lg shadow-md">
              <img
                src={image.image_url}
                alt={image.caption || `Certificate ${index}`}
                className="w-full h-full object-contain"
                onError={(e) => (e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=Image+Error&font=inter')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export const Certifications = () => {
  const { isAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState('');

  // Data states
  const [pageContent, setPageContent] = useState(null);
  const [pageSections, setPageSections] = useState([]);
  const [certificationCards, setCertificationCards] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Modal states
  const [showSectionsModal, setShowSectionsModal] = useState(false);
  const [showCardsModal, setShowCardsModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  // --- Data Fetching ---
  useEffect(() => {
    const loadData = async () => {
      try {
        const [content, sections, cards, images] = await Promise.all([
          getPageContent(PAGE_ID),
          getPageSections(PAGE_ID),
          getListContent('certifications'),
          getListContent('certificate_gallery_images'),
        ]);
        setPageContent(content);
        setPageSections(sections);
        setCertificationCards(cards);
        setGalleryImages(images.sort((a, b) => a.sort_order - b.sort_order)); // Sort gallery images
        
        if (sections.length > 0) {
          setActiveSection(sections[0].id);
        }
      } catch (err) {
        console.error('Failed to load page data:', err);
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
      setPageSections(syncedSections);
    } catch (err) {
      console.error('Failed to save page sections:', err);
      alert('Save failed!');
    }
  };

  const handleCardsSave = async (newCards) => {
    try {
      // Using simple upsert for cards. Assumes modal handles file logic.
      await updateListContent('certifications', newCards);
      setCertificationCards(newCards);
    } catch (err) {
      console.error('Failed to save certification cards:', err);
      alert('Save failed!');
    }
  };

  const handleGallerySave = async (newImages) => {
    try {
      const syncedImages = await syncGalleryImages(newImages);
      setGalleryImages(syncedImages.sort((a, b) => a.sort_order - b.sort_order));
    } catch (err) {
      console.error('Failed to save gallery images:', err);
      alert('Save failed!');
    }
  };

  // --- Admin Form Renderers ---
  const renderSectionForm = (item, setItem) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Section Title</label>
        <input type="text" value={item.title || ''} onChange={(e) => setItem({ ...item, title: e.target.value })} className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Content (HTML)</label>
        <textarea value={item.content_html || ''} onChange={(e) => setItem({ ...item, content_html: e.target.value })} className="p-2 border rounded min-h-[250px] font-mono" />
      </div>
    </div>
  );

  const renderCardForm = (item, setItem) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col"><label className="mb-1 font-semibold text-gray-700">Title</label><input type="text" value={item.title || ''} onChange={(e) => setItem({ ...item, title: e.target.value })} className="p-2 border rounded" /></div>
      <div className="flex flex-col"><label className="mb-1 font-semibold text-gray-700">Subtitle</label><input type="text" value={item.subtitle || ''} onChange={(e) => setItem({ ...item, subtitle: e.target.value })} className="p-2 border rounded" /></div>
      <div className="md:col-span-2 flex flex-col"><label className="mb-1 font-semibold text-gray-700">Description</label><textarea value={item.description || ''} onChange={(e) => setItem({ ...item, description: e.target.value })} className="p-2 border rounded min-h-[100px]" /></div>
      <div className="flex flex-col"><label className="mb-1 font-semibold text-gray-700">Logo Image (Current: {item.logo_url ? 'Yes' : 'No'})</label><input type="file" accept="image/*" data-key="logo" className="file-input p-2 border rounded" /></div>
      <div className="flex flex-col"><label className="mb-1 font-semibold text-gray-700">Certificate PDF (Current: {item.pdf_url ? 'Yes' : 'No'})</label><input type="file" accept="application/pdf" data-key="pdf" className="file-input p-2 border rounded" /></div>
    </div>
  );

  const renderGalleryForm = (item, setItem) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Image Caption</label>
        <input type="text" value={item.caption || ''} onChange={(e) => setItem({ ...item, caption: e.target.value })} className="p-2 border rounded" />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700">Image File (Current: {item.image_url ? 'Yes' : 'No'})</label>
        <input type="file" accept="image/*" data-key="image" className="file-input p-2 border rounded" />
      </div>
    </div>
  );

  // *** This guard prevents the "TypeError: null is not an object" error ***
  if (isLoading || !pageContent) {
    return <div className="bg-white min-h-screen text-gray-900 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* --- Hero Section --- */}
      {/* RESPONSIVE FIX: Adjusted hero height for mobile */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center text-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <EditableText as="h1" isAdmin={isAdmin} value={pageContent.hero_title} onSave={(val) => handlePageSave('hero_title', val)} className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6" dangerouslySetInnerHTML={{ __html: pageContent.hero_title }} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <EditableText as="p" isAdmin={isAdmin} value={pageContent.hero_subtitle} onSave={(val) => handlePageSave('hero_subtitle', val)} className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Admin Manage Buttons */}
          {isAdmin && (
            <div className="mb-12 flex flex-wrap justify-end gap-4">
              <button onClick={() => setShowSectionsModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                <Plus size={18} /> Manage Page Sections
              </button>
              <button onClick={() => setShowCardsModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                <Plus size={18} /> Manage ISO Cards
              </button>
              {/* Gallery button is rendered *with* the scroller */}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* --- Sidebar (Left Column) --- */}
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav sections={pageSections} activeSection={activeSection} />
            </div>

            {/* --- Content (Right Column) --- */}
            <div className="lg:col-span-3">
              {/* --- DYNAMIC CONTENT RENDER --- */}
              {pageSections
                .sort((a, b) => a.sort_order - b.sort_order)
                .map((section, index) => (
                  <React.Fragment key={section.id}>
                    {/* Render the section */}
                    <DynamicContentSection section={section} />

                    {/* Inject Scroller after the first section (sort_order 0) */}
                    {section.sort_order === 0 && (
                      <CertificateScroller
                        images={galleryImages}
                        isAdmin={isAdmin}
                        onManage={() => setShowGalleryModal(true)}
                      />
                    )}
                  </React.Fragment>
                ))}

              {/* --- ISO CARDS GRID (Static position, dynamic content) --- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {certificationCards.map((card, index) => (
                  <CertificationCard
                    key={card.id}
                    logoSrc={card.logo_url || 'https://placehold.co/200x100/ffffff/333333?text=No+Logo&font=inter'}
                    title={card.title}
                    subtitle={card.subtitle}
                    pdfUrl={card.pdf_url}
                    delay={index * 0.1}
                  >
                    {card.description}
                  </CertificationCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Admin Modals --- */}
      {showSectionsModal && (
        <ListManagementModal title="Manage Page Sections" items={pageSections} onClose={() => setShowSectionsModal(false)} onSave={handleSectionsSave} renderForm={renderSectionForm} itemTitleKey="title" />
      )}
      
      {showCardsModal && (
        <ListManagementModal title="Manage ISO Cards" items={certificationCards} onClose={() => setShowCardsModal(false)} onSave={handleCardsSave} renderForm={renderCardForm} itemTitleKey="title" fileKeys={['logo', 'pdf']} />
      )}
      
      {showGalleryModal && (
        <ListManagementModal title="Manage Gallery Images" items={galleryImages} onClose={() => setShowGalleryModal(false)} onSave={handleGallerySave} renderForm={renderGalleryForm} itemTitleKey="caption" fileKeys={['image']} />
      )}
    </div>
  );
};