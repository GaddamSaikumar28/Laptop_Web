
import React, { useState, useEffect, useRef } from 'react';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
// import { CallToAction } from '../components/common/CallToAction'; // Not using common component
import { Timeline } from '../components/about/Timeline';
import { CoreValues } from '../components/about/CoreValues';

// Import Admin/CMS tools
import { useAuth } from '../context/AuthContext'; // Make sure this path is correct
import { aboutApi } from '../api/aboutApi';
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { Edit, Upload, Video } from 'lucide-react'; // Removed PlayCircle, X
import { v4 as uuidv4 } from 'uuid';

// --- NEW HELPER COMPONENTS (Scoped to this file) ---

/**
 * NEW: A dedicated button for uploading media.
 * This is just the button, which we can place anywhere.
 */
const EditableMediaButton = ({
  isAdmin,
  onSave,
  label,
  accept, // 'image/*' or 'video/*'
  className = '', // Parent will add positioning classes
  icon = <Upload size={14} />
}) => {
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
        // Removed z-50 and absolute classes. Parent will position.
        className={`bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 ${className}`}
      >
        {isUploading ? 'Uploading...' : (
          <>
            {icon} {label}
          </>
        )}
      </button>
    </>
  );
};

/**
 * NEW: A wrapper for sections with editable background images.
 * This now places the admin button in the center on hover.
 */
const EditableBackgroundImage = ({
  isAdmin,
  src,
  onSave,
  children,
  className = '',
}) => {
  return (
    <section
      className={`relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url('${src}')` }}
    >
      {/* Admin Overlay: Centered, appears on hover */}
      {isAdmin && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 hover:bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={onSave}
            label="Change Background"
            accept="image/*"
            // No positioning classes needed here
          />
        </div>
      )}

      {/* Children are placed on top of the BG, but under the admin overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};


// --- Main About Page Component ---

// Helper component for admin buttons (for list modals)
const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);

export const About = () => {
  const { isAdmin } = useAuth(); // UNCOMMENT THIS
  //const isAdmin = true; // For testing purposes
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'timeline', 'stats', 'core_values'
  // Removed isVideoUrlModalOpen state

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await aboutApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load page content', err);
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
      await aboutApi.updateSectionContent(sectionName, newContent);
    } catch (err) {
      console.error('Failed to save content', err);
      alert('Error saving content. Please refresh and try again.');
    }
  };

  // Helper for simple text field updates
  const handleTextSave = (sectionName, field) => async (newValue) => {
    const newContent = {
      ...content[sectionName],
      [field]: newValue,
    };
    await handleSave(sectionName, newContent);
  };

  // Helper for image/media updates
  // This function now handles both image and video uploads
  const handleMediaSave = (sectionName, field) => async (newFile) => {
    if (!newFile) {
      console.log('No file selected.');
      return;
    }
    const section = content[sectionName];
    // Note: This assumes your DB has 'field_url' and 'field_storage_path'
    // e.g., 'video_url' and 'video_storage_path'
    const oldStoragePath = section[`${field}_storage_path`];

    try {
      const { publicUrl, storagePath } = await aboutApi.updateFile(newFile, oldStoragePath);
      const newContent = {
        ...section,
        [`${field}_url`]: publicUrl,
        [`${field}_storage_path`]: storagePath,
      };
      await handleSave(sectionName, newContent);
    } catch (err) {
      console.error("Failed to update media", err);
      alert("Media update failed. Check console.");
    }
  };

  // --- Modal Forms (for ListManagementModal) ---
  const renderModalForm = (item, setItem) => {
    // ... (This logic remains the same)
    switch (modal) {
      case 'timeline':
        return (
          <>
            <label>Year: <input type="number" className="w-full p-1 border rounded" value={item.year || ''} onChange={e => setItem({...item, year: parseInt(e.target.value)})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
          </>
        );
      case 'stats':
        return (
          <>
            <label>Value (Number): <input type="number" className="w-full p-1 border rounded" value={item.value || ''} onChange={e => setItem({...item, value: parseInt(e.target.value)})} /></label>
            <label>Suffix (e.g., +, M+): <input type="text" className="w-full p-1 border rounded" value={item.suffix || ''} onChange={e => setItem({...item, suffix: e.target.value})} /></label>
            <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.label || ''} onChange={e => setItem({...item, label: e.target.value})} /></label>
          </>
        );
      case 'core_values':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
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

  const { about_hero, timeline, facility_video, about_stats, core_values, about_cta } = content;

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      
      {/* --- About Hero Section (FIXED) --- */}
      <EditableBackgroundImage
        isAdmin={isAdmin}
        src={about_hero.image_url}
        onSave={handleMediaSave('about_hero', 'image')}
        className="h-[70vh] flex items-center justify-center text-center overflow-hidden"
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-40 z-0"></div>
        
        {/* Content (z-10 is default from parent) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={about_hero.title_prefix}
              onSave={handleTextSave('about_hero', 'title_prefix')}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg"
            >
              {about_hero.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={about_hero.title_suffix}
                onSave={handleTextSave('about_hero', 'title_suffix')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600"
              />
            </EditableText>

            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={about_hero.subtitle}
              onSave={handleTextSave('about_hero', 'subtitle')}
              className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
              useTextarea
            />
          </FadeIn>
        </div>
      </EditableBackgroundImage>
      
      {/* --- Animated Timeline Section --- */}
      <section className="py-24 bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('timeline')} text="Edit Timeline" />}
        <Timeline 
          timelineData={timeline} 
          isAdmin={isAdmin}
          onSave={handleSave} 
        />
      </section>

      {/* --- Facility Video Section (FIXED) --- */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={facility_video.title}
              onSave={handleTextSave('facility_video', 'title')}
              className="text-4xl md:text-5xl font-light mb-4"
            >
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">World-Class Facility</span>
            </EditableText>

            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={facility_video.subtitle}
              onSave={handleTextSave('facility_video', 'subtitle')}
              className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
              useTextarea
            />
            
            {/* Video Player Wrapper */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group border-2 border-gray-200">
              
              {/* Admin Button: Upload Video */}
              <EditableMediaButton
                isAdmin={isAdmin}
                // This assumes your DB has 'video_url' and 'video_storage_path'
                onSave={handleMediaSave('facility_video', 'video')} 
                label="Upload Video"
                accept="video/*"
                icon={<Video size={14} />}
                className="absolute top-4 right-4 z-20" // Positioned top-right
              />

              {/* The Video Player */}
              <video
                key={facility_video.video_url} // Force re-render if URL changes
                src={facility_video.video_url}
                controls // Adds browser's play/pause/volume controls
                // poster={facility_video.thumbnail_url} // We removed thumbnail
                className="w-full h-full object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Dynamic Stats Section --- */}
      <section className="py-24 bg-white relative" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font--inter')" }}>
        {isAdmin && <AdminEditButton onClick={() => setModal('stats')} text="Edit Stats" />}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {about_stats.map((stat, index) => (
              <FadeIn key={stat.id} delay={index * 200}>
                <div className="p-6">
                  <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Core Values Section --- */}
      <section className="py-24 bg-gray-50 relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('core_values')} text="Edit Core Values" />}
        <CoreValues 
          valuesData={core_values} 
          isAdmin={isAdmin}
          onSave={handleSave} 
        />
      </section>

      {/* --- CTA Section (FIXED) --- */}
      <EditableBackgroundImage
        isAdmin={isAdmin}
        src={about_cta.background_url}
        onSave={handleMediaSave('about_cta', 'background')}
        className="py-24"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 z-0"></div>

        {/* Content (z-10 is default from parent) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={about_cta.title}
              onSave={handleTextSave('about_cta', 'title')}
              className="text-4xl md:text-5xl font-light text-gray-900"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={about_cta.text}
              onSave={handleTextSave('about_cta', 'text')}
              className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 mb-10"
              useTextarea
            />
            <button
              onClick={() => alert(`Maps to: ${about_cta.buttonLink}`)} // Use react-router's navigate in real app
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={about_cta.buttonText}
                onSave={handleTextSave('about_cta', 'buttonText')}
              />
            </button>
          </FadeIn>
        </div>
      </EditableBackgroundImage>

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'stats' ? content.about_stats : content[modal].events || content[modal].values
          }
          itemTitleKey={modal === 'stats' ? 'label' : 'title'}
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let newContent;
            if (modal === 'stats') {
              newContent = newItems; // Stats is a root-level array
            } else {
              // Timeline and Core Values are objects with an array inside
              const key = content[modal].events ? 'events' : 'values';
              newContent = {
                ...content[modal],
                [key]: newItems
              };
            }
            await handleSave(modal, newContent);
            setModal(null); // Close modal on save
          }}
        />
      )}
      
      {/* Removed Video URL Edit Modal */}
    </div>
  );
};