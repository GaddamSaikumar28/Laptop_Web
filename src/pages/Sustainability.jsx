
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Recycle, Droplet, Cpu, Box, ShieldCheck, CheckCircle, 
  PlayCircle, ArrowRight, Briefcase, BookOpen, Edit, Upload, Video, X, Check
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { CallToAction } from '../components/common/CallToAction';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { sustainabilityApi } from '../api/sustainabilityApi'; // Use the new API
import { EditableText } from '../components/common/EditableText'; // Still used for titles, etc.
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS (SCOPED TO THIS FILE) ===

// Admin button for list modals
const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);

// Admin button for media uploads
const EditableMediaButton = ({ isAdmin, onSave, label, accept, className = '', icon }) => {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      await onSave(file);
    } catch (error) {
      console.error('Failed to save media:', error);
      alert('Media upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAdmin) return null;

  return (
    <>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        disabled={isUploading}
        className={`bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 ${className}`}
      >
        {isUploading ? 'Uploading...' : <>{icon || <Upload size={14} />} {label}</>}
      </button>
    </>
  );
};

// +++ NEW COMPONENT TO FIX THE ERROR +++
/**
 * A special component ONLY for rendering and editing raw HTML content.
 * This avoids the conflict with the common EditableText component.
 */
const EditableHTMLParagraph = ({ isAdmin, value, onSave, className = '' }) => {
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
      await onSave(currentValue); // onSave is expected to be handleTextSave('section', 'field')
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save HTML:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // --- Admin Editing View ---
  if (isAdmin && isEditing) {
    return (
      <div className="relative">
        <textarea
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          disabled={isSaving}
          className={`w-full p-2 border border-blue-500 rounded-md min-h-[100px] text-gray-800 ${className}`}
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
      </div>
    );
  }

  // --- Normal View (Admin or Public) ---
  return (
    <p
      className={`relative group ${className}`}
      dangerouslySetInnerHTML={{ __html: value }}
    >
      {/* This <p> tag intentionally has NO children */}
      {isAdmin && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-0 right-0 p-1 text-blue-600 transition-opacity bg-white bg-opacity-75 rounded-full opacity-0 group-hover:opacity-100"
          aria-label="Edit HTML"
        >
          <Edit size={16} />
        </button>
      )}
    </p>
  );
};

// === END OF ADMIN HELPERS ===


// --- Reusable Parallax Image Section (Refactored) ---
const ParallaxImageSection = ({ 
  title,
  children, 
  imageUrl, 
  imageAlt, 
  reverse = false,
  isAdmin,
  onImageSave
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section 
      ref={sectionRef} 
      className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-24 overflow-hidden"
    >
      {/* Content Column */}
      <div className={`relative z-10 px-6 ${reverse ? 'md:order-2' : ''}`}>
        <FadeIn>
          {title}
          <div className="text-lg text-gray-600 space-y-4">
            {children}
          </div>
        </FadeIn>
      </div>

      {/* Image Column */}
      <div className={`relative z-0 h-80 md:h-full min-h-[400px] ${reverse ? 'md:order-1' : ''}`}>
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover opacity-50 md:opacity-70"
          />
          <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'l' : 'r'} from-white via-transparent to-transparent`}></div>
        </motion.div>
        <EditableMediaButton
          isAdmin={isAdmin}
          onSave={onImageSave}
          label="Change Image"
          accept="image/*"
          className="absolute top-4 right-4 z-20"
        />
      </div>
    </section>
  );
};

// --- Stat Component ---
const StatBubble = ({ icon: Icon, value, unit, label, delay = 0 }) => (
  <FadeIn delay={delay}>
    <motion.div 
      className="flex flex-col items-center justify-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center bg-white rounded-2xl shadow-xl border border-gray-100">
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-green-500/10"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <div className="absolute inset-2 rounded-lg border-2 border-green-400/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-2" />
          <div className="text-4xl md:text-5xl font-bold text-gray-900">
            <CountUp end={value} />{unit}
          </div>
          <div className="text-sm md:text-md text-gray-600 mt-1">{label}</div>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

// --- Partner Card Component ---
const PartnerCard = ({ icon: Icon, title, description, link }) => (
  <FadeIn>
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(16, 185, 129, 0.1)' }}
      className="h-full bg-white p-8 rounded-2xl border border-gray-200 shadow-lg transition-shadow duration-300"
    >
      <Icon className="w-12 h-12 text-green-600 mb-6" />
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
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
  const { isAdmin } = useAuth(); // UNCOMMENT THIS
  //const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'stats', 'bsi_kitemark', 'partners'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await sustainabilityApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load sustainability content', err);
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
      await sustainabilityApi.updateSectionContent(sectionName, newContent);
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

  const handleMediaSave = (sectionName, field) => async (newFile) => {
    if (!newFile) return;
    const section = content[sectionName];
    const oldStoragePath = section[`${field}_storage_path`];
    try {
      const { publicUrl, storagePath } = await sustainabilityApi.updateFile(newFile, oldStoragePath);
      const newContent = {
        ...section,
        [`${field}_url`]: publicUrl,
        [`${field}_storage_path`]: storagePath,
      };
      await handleSave(sectionName, newContent);
    } catch (err) {
      console.error("Failed to update media", err);
      alert("Media update failed.");
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'stats':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Value: <input type="number" className="w-full p-1 border rounded" value={item.value || 0} onChange={e => setItem({...item, value: parseInt(e.target.value)})} /></label>
            <label>Unit (e.g., %): <input type="text" className="w-full p-1 border rounded" value={item.unit || ''} onChange={e => setItem({...item, unit: e.target.value})} /></label>
            <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.label || ''} onChange={e => setItem({...item, label: e.target.value})} /></label>
          </>
        );
      case 'bsi_kitemark':
        return (
          <>
            <label>List Item Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
          </>
        );
      case 'partners':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
            <label>Link (e.g., /contact): <input type="text" className="w-full p-1 border rounded" value={item.link || ''} onChange={e => setItem({...item, link: e.target.value})} /></label>
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
      
      {/* --- 1. Hero Section --- */}
      <section 
        className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden bg-gray-50"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={content.hero.bg_image_url}
            alt="Futuristic background"
            className="w-full h-full object-cover opacity-50"
          />
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={handleMediaSave('hero', 'bg_image')}
            label="Change BG"
            accept="image/*"
            className="absolute top-4 right-4 z-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
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
              0% { opacity: 0.5; } 50% { opacity: 0.8; } 100% { opacity: 0.5; }
            }
          `}</style>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={content.hero.title_gradient}
              onSave={handleTextSave('hero', 'title_gradient')}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
                {content.hero.title_gradient}
              </span>
            </EditableText>
          </FadeIn>
          <FadeIn delay={0.2}>
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={content.hero.subtitle}
              onSave={handleTextSave('hero', 'subtitle')}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
              useTextarea
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <motion.a
              href="#process-video"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-green-500/20
                         hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
            >
              <PlayCircle className="w-6 h-6 mr-3" />
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.hero.button_text}
                onSave={handleTextSave('hero', 'button_text')}
              />
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* --- 2. ECycleGreen Certified --- */}
      <div className="bg-white">
        <ParallaxImageSection
          title={
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.certified.title}
              onSave={handleTextSave('certified', 'title')}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
            />
          }
          imageUrl={content.certified.image_url}
          imageAlt={content.certified.image_alt}
          reverse={true}
          isAdmin={isAdmin}
          onImageSave={handleMediaSave('certified', 'image')}
        >
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.certified.paragraph1}
            onSave={handleTextSave('certified', 'paragraph1')}
            useTextarea
          /> 
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.certified.paragraph2_highlight}
            onSave={handleTextSave('certified', 'paragraph2_highlight')}
            className="font-semibold text-green-600"
          />
        </ParallaxImageSection>
      </div>

      {/* --- 3. Stats Section --- */}
      <section className="py-24 bg-gray-50 relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('stats')} text="Edit Stats" />}
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.stats.title_prefix}
              onSave={handleTextSave('stats', 'title_prefix')}
              className="text-4xl md:text-5xl font-bold text-center mb-20"
            > 
            
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.stats.title_suffix_gradient}
                onSave={handleTextSave('stats', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.items.map((stat, index) => (
              <StatBubble 
                key={stat.id}
                icon={DynamicIcon} 
                value={stat.value} 
                unit={stat.unit} 
                label={stat.label} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

       {/* --- 4. BSI Kitemark Section (FIXED) --- */}
      {/* <div className="bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('bsi_kitemark')} text="Edit List" />}
        <ParallaxImageSection
          title={
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.bsi_kitemark.title}
              onSave={handleTextSave('bsi_kitemark', 'title')}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
            />
          }
          imageUrl={content.bsi_kitemark.image_url}
          imageAlt={content.bsi_kitemark.image_alt}
          isAdmin={isAdmin}
          onImageSave={handleMediaSave('bsi_kitemark', 'image')}
        >
        
       
          <EditableHTMLParagraph
            isAdmin={isAdmin}
            value={content.bsi_kitemark.paragraph}
            onSave={handleTextSave('bsi_kitemark', 'paragraph')}
            className="text-lg text-gray-600 space-y-4" // Pass base styles
          />
         
          
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
            {content.bsi_kitemark.list_items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </ParallaxImageSection>
      </div> */}

      {/* --- 5. Carbon Neutral Section --- */}
      <div className="bg-gray-50">
        <ParallaxImageSection
          title={
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.carbon_neutral.title}
              onSave={handleTextSave('carbon_neutral', 'title')}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
            />
          }
          imageUrl={content.carbon_neutral.image_url}
          imageAlt={content.carbon_neutral.image_alt}
          reverse={true}
          isAdmin={isAdmin}
          onImageSave={handleMediaSave('carbon_neutral', 'image')}
        >
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.carbon_neutral.paragraph1}
            onSave={handleTextSave('carbon_neutral', 'paragraph1')}
            useTextarea
          />
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.carbon_neutral.paragraph2}
            onSave={handleTextSave('carbon_neutral', 'paragraph2')}
            className="mt-4"
            useTextarea
          />
        </ParallaxImageSection>
      </div>
      
      {/* --- 6. Video Section --- */}
      <section id="process-video" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.video.title_prefix}
              onSave={handleTextSave('video', 'title_prefix')}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              {content.video.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.video.title_suffix_gradient}
                onSave={handleTextSave('video', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div 
              className="relative aspect-video max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 group"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <video
                key={content.video.video_url}
                src={content.video.video_url}
                controls
                className="w-full h-full object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
              <EditableMediaButton
                isAdmin={isAdmin}
                onSave={handleMediaSave('video', 'video')}
                label="Upload Video"
                accept="video/*"
                icon={<Video size={14} />}
                className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* --- 7. E-Waste & Re-use Sections (Combined) --- */}
      <div className="bg-gray-50">
        <ParallaxImageSection
          title={
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.e_waste.title}
              onSave={handleTextSave('e_waste', 'title')}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
            />
          }
          imageUrl={content.e_waste.image_url}
          imageAlt={content.e_waste.image_alt}
          isAdmin={isAdmin}
          onImageSave={handleMediaSave('e_waste', 'image')}
        >
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.e_waste.paragraph}
            onSave={handleTextSave('e_waste', 'paragraph')}
            useTextarea
          />
        </ParallaxImageSection>
      </div>
      <div className="bg-white">
        <ParallaxImageSection
          title={
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.device_reuse.title}
              onSave={handleTextSave('device_reuse', 'title')}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
            />
          }
          imageUrl={content.device_reuse.image_url}
          imageAlt={content.device_reuse.image_alt}
          reverse={true}
          isAdmin={isAdmin}
          onImageSave={handleMediaSave('device_reuse', 'image')}
        >
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={content.device_reuse.paragraph}
            onSave={handleTextSave('device_reuse', 'paragraph')}
            useTextarea
          />
        </ParallaxImageSection>
      </div>

      {/* --- 8. Partner With Us Section --- */}
      <section className="py-24 bg-gray-50 relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('partners')} text="Edit Cards" />}
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.partners.title_prefix}
              onSave={handleTextSave('partners', 'title_prefix')}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              {content.partners.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.partners.title_suffix_gradient}
                onSave={handleTextSave('partners', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.partners.cards.map((card) => (
              <PartnerCard
                key={card.id}
                icon={DynamicIcon} 
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- 9. Final Call to Action --- */}
      <div className="bg-white">
        <CallToAction 
          data={content.cta}
          isAdmin={isAdmin}
          onTextSave={handleTextSave}
          onImageSave={handleMediaSave('cta', 'background_image')}
        />
      </div>

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'stats' ? content.stats.items :
            modal === 'bsi_kitemark' ? content.bsi_kitemark.list_items :
            content.partners.cards
          }
          itemTitleKey={
            modal === 'bsi_kitemark' ? 'text' :
            modal === 'stats' ? 'label' :
            'title'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'stats') {
              listKey = 'items';
            } else if (modal === 'bsi_kitemark') {
              listKey = 'list_items';
            } else if (modal === 'partners') {
              listKey = 'cards';
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
    </div>
  );
};

export default Sustainability;