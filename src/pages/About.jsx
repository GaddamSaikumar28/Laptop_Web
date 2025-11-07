
// // // // import React from 'react';
// // // // import { FadeIn } from '../components/common/FadeIn';
// // // // import { CountUp } from '../components/common/CountUp';
// // // // import { CallToAction } from '../components/common/CallToAction';
// // // // import { Timeline } from '../components/about/Timeline';
// // // // import { CoreValues } from '../components/about/CoreValues';
// // // // import { PlayCircle } from 'lucide-react';

// // // // export const About = () => {
// // // //   return (
// // // //     // Main container changed to white background and dark text
// // // //     <div className="bg-white text-gray-900 overflow-x-hidden">
      
// // // //       {/* --- About Hero Section --- */}
// // // //       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
// // // //         {/* Updated placeholder for light theme */}
// // // //         <img 
// // // //           src="https://placehold.co/1920x1080/e0e0e0/555555?text=Our+Facility&font=inter" 
// // // //           alt="ECycleGreen Facility"
// // // //           className="absolute z-0 w-full h-full object-cover"
// // // //         />
// // // //         {/* Gradient Overlay changed from black to white */}
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
// // // //         {/* Light opacity overlay */}
// // // //         <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        
// // // //         {/* Content */}
// // // //         <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <FadeIn>
// // // //             {/* Text changed to dark, gradient updated to greens */}
// // // //             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg">
// // // //               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">Us</span>
// // // //             </h1>
// // // //             {/* Subtitle text changed to a readable gray */}
// // // //             <p className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
// // // //               We built the world's leading facility to provide the highest quality
// // // //               refurbished laptops in the world.
// // // //             </p>
// // // //           </FadeIn>
// // // //         </div>
// // // //       </section>
      
// // // //       {/* --- Animated Timeline Section (Imported) --- */}
// // // //       {/* Wrapped in a section for proper padding and background */}
// // // //       <section className="py-24 bg-white">
// // // //         <Timeline />
// // // //       </section>

// // // //       {/* --- Facility Video Section --- */}
// // // //       {/* Background changed to light gray for separation */}
// // // //       <section className="py-24 bg-gray-50">
// // // //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // // //           <FadeIn>
// // // //             {/* Gradient updated to a vibrant green/teal */}
// // // //             <h2 className="text-4xl md:text-5xl font-light mb-4">
// // // //               Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">World-Class Facility</span>
// // // //             </h2>
// // // //             {/* Text color updated */}
// // // //             <p className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12">
// // // //               See the technology and the people that make our quality possible.
// // // //             </p>
// // // //             {/* Border changed to light gray */}
// // // //             <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
// // // //               {/* Updated placeholder image */}
// // // //               <img 
// // // //                 src="https://placehold.co/1280x720/cccccc/555555?text=Our+Facility+Tour&font=inter" 
// // // //                 alt="Our Facility Video Thumbnail" 
// // // //                 className="w-full h-full object-cover"
// // // //               />
// // // //               {/* Dark overlay kept for contrast, hover opacity tweaked */}
// // // //               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
// // // //               <div className="absolute inset-0 flex items-center justify-center">
// // // //                 <div className="relative">
// // // //                   {/* Icon is white, which is perfect on the dark overlay */}
// // // //                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
// // // //                   {/* Ping animation color changed to green */}
// // // //                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </FadeIn>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- Dynamic Stats Section --- */}
// // // //       {/* Background changed to white, placeholder BG image updated to a light theme */}
// // // //       <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
// // // //             <FadeIn delay={0}>
// // // //               <div className="p-6">
// // // //                 {/* Numbers are now vibrant gradients */}
// // // //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
// // // //                   <CountUp end={30} suffix="+" />
// // // //                 </h3>
// // // //                 <p className="text-2xl text-gray-500 mt-2">Years in the Market</p>
// // // //               </div>
// // // //             </FadeIn>
// // // //             <FadeIn delay={200}>
// // // //               <div className="p-6">
// // // //                 {/* Added more color variation as requested */}
// // // //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
// // // //                   <CountUp end={10} suffix="M+" />
// // // //                 </h3>
// // // //                 <p className="text-2xl text-gray-500 mt-2">Used Assets Sold</p>
// // // //               </div>
// // // //             </FadeIn>
// // // //             <FadeIn delay={400}>
// // // //               <div className="p-6">
// // // //                 {/* Added more color variation as requested */}
// // // //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
// // // //                   <CountUp end={1000} suffix="+" />
// // // //                 </h3>
// // // //                 <p className="text-2xl text-gray-500 mt-2">R&D Projects</p>
// // // //               </div>
// // // //             </FadeIn>
// // // //           </div>
// // // //         </div>
// // // //       </section>
      
// // // //       {/* --- Core Values Section (Imported) --- */}
// // // //       {/* Wrapped in a section with alternating light gray background */}
// // // //       <section className="py-24 bg-gray-50">
// // // //         <CoreValues />
// // // //       </section>

// // // //       {/* --- CTA Section --- */}
// // // //       {/* Wrapped in a section to ensure correct background */}
// // // //       <section className="py-24 bg-white">
// // // //         <CallToAction 
// // // //           title="Let's have a conversation"
// // // //           text="Get in touch to learn how our products can provide for you."
// // // //           buttonText="Contact Us"
// // // //           buttonLink="/contact"
// // // //         />
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // /* src/pages/About.js */

// // // import React, { useState, useEffect } from 'react';
// // // import { FadeIn } from '../components/common/FadeIn';
// // // import { CountUp } from '../components/common/CountUp';
// // // import { CallToAction } from '../components/common/CallToAction';
// // // import { Timeline } from '../components/about/Timeline';
// // // import { CoreValues } from '../components/about/CoreValues';

// // // // Import Admin/CMS tools
// // // import { useAuth } from '../context/AuthContext'; // Assuming path
// // // import { aboutApi } from '../api/aboutApi';
// // // import { EditableText } from '../components/common/EditableText';
// // // import { EditableImage } from '../components/common/EditableImage';
// // // import { ListManagementModal } from '../components/common/ListManagementModal';
// // // import { IconPicker } from '../components/common/IconPicker';
// // // import { Edit, PlayCircle } from 'lucide-react';
// // // import { v4 as uuidv4 } from 'uuid';

// // // // Helper component for admin buttons
// // // const AdminEditButton = ({ onClick, text = 'Edit' }) => (
// // //   <button
// // //     onClick={onClick}
// // //     className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
// // //   >
// // //     <Edit size={14} /> {text}
// // //   </button>
// // // );

// // // export const About = () => {
// // //   //const { isAdmin } = useAuth();
// // //   const isAdmin = true; // For testing purposes
// // //   const [content, setContent] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [modal, setModal] = useState(null); // 'timeline', 'stats', 'core_values'

// // //   // --- Data Fetching ---
// // //   useEffect(() => {
// // //     const loadContent = async () => {
// // //       try {
// // //         const data = await aboutApi.getContent();
// // //         setContent(data);
// // //       } catch (err) {
// // //         console.error('Failed to load page content', err);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };
// // //     loadContent();
// // //   }, []);

// // //   // --- Data Saving ---
// // //   const handleSave = async (sectionName, newContent) => {
// // //     // 1. Optimistic UI update
// // //     setContent((prev) => ({
// // //       ...prev,
// // //       [sectionName]: newContent,
// // //     }));

// // //     // 2. API call
// // //     try {
// // //       await aboutApi.updateSectionContent(sectionName, newContent);
// // //     } catch (err) {
// // //       console.error('Failed to save content', err);
// // //       alert('Error saving content. Please refresh and try again.');
// // //       // NOTE: In a real app, you'd revert the optimistic update here
// // //     }
// // //   };

// // //   // Helper for simple text field updates
// // //   const handleTextSave = (sectionName, field) => async (newValue) => {
// // //     const newContent = {
// // //       ...content[sectionName],
// // //       [field]: newValue,
// // //     };
// // //     await handleSave(sectionName, newContent);
// // //   };

// // //   // Helper for image updates
// // //   // const handleImageSave = (sectionName, field) => async (newFile) => {
// // //   //   const section = content[sectionName];
// // //   //   const oldStoragePath = section[`${field}_storage_path`];

// // //   //   try {
// // //   //     const { publicUrl, storagePath } = await aboutApi.updateFile(newFile, oldStoragePath);
      
// // //   //     const newContent = {
// // //   //       ...section,
// // //   //       [`${field}_url`]: publicUrl,
// // //   //       [`${field}_storage_path`]: storagePath,
// // //   //     };
// // //   //     await handleSave(sectionName, newContent);

// // //   //   } catch (err) {
// // //   //     console.error("Failed to update image", err);
// // //   //     alert("Image update failed.");
// // //   //   }
// // //   // };


// // //   const handleImageSave = (sectionName, field) => async (newFile) => {
// // //     // --- Add this check ---
// // //     if (!newFile) {
// // //       console.log('No file selected.');
// // //       return;
// // //     }

// // //     console.log(`Saving image for: ${sectionName}.${field}`); // Debug log
    
// // //     const section = content[sectionName];
// // //     if (!section) {
// // //       console.error(`Error: No content found for section '${sectionName}'`);
// // //       return;
// // //     }
    
// // //     const oldStoragePath = section[`${field}_storage_path`];
// // //     console.log('Old storage path:', oldStoragePath); // Debug log

// // //     try {
// // //       const { publicUrl, storagePath } = await aboutApi.updateFile(newFile, oldStoragePath);
// // //       console.log('Upload success:', { publicUrl, storagePath }); // Debug log
      
// // //       const newContent = {
// // //         ...section,
// // //         [`${field}_url`]: publicUrl,
// // //         [`${field}_storage_path`]: storagePath,
// // //       };
// // //       await handleSave(sectionName, newContent);

// // //     } catch (err) {
// // //       console.error("Failed to update image", err);
// // //       alert("Image update failed. Check the console for details.");
// // //     }
// // //   };

// // //   // --- Modal Forms ---
// // //   const renderModalForm = (item, setItem) => {
// // //     switch (modal) {
// // //       case 'timeline':
// // //         return (
// // //           <>
// // //             <label>Year: <input type="number" className="w-full p-1 border" value={item.year || ''} onChange={e => setItem({...item, year: parseInt(e.target.value)})} /></label>
// // //             <label>Title: <input type="text" className="w-full p-1 border" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
// // //             <label>Description: <textarea className="w-full p-1 border" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
// // //           </>
// // //         );
// // //       case 'stats':
// // //         return (
// // //           <>
// // //             <label>Value (Number): <input type="number" className="w-full p-1 border" value={item.value || ''} onChange={e => setItem({...item, value: parseInt(e.target.value)})} /></label>
// // //             <label>Suffix (e.g., +, M+): <input type="text" className="w-full p-1 border" value={item.suffix || ''} onChange={e => setItem({...item, suffix: e.target.value})} /></label>
// // //             <label>Label: <input type="text" className="w-full p-1 border" value={item.label || ''} onChange={e => setItem({...item, label: e.target.value})} /></label>
// // //           </>
// // //         );
// // //       case 'core_values':
// // //         return (
// // //           <>
// // //             <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
// // //             <label>Title: <input type="text" className="w-full p-1 border" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
// // //             <label>Description: <textarea className="w-full p-1 border" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
// // //           </>
// // //         );
// // //       default: return null;
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Loading...</div>;
// // //   }
  
// // //   if (!content) {
// // //     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Error loading content.</div>;
// // //   }

// // //   const { about_hero, timeline, facility_video, about_stats, core_values, about_cta } = content;

// // //   return (
// // //     <div className="bg-white text-gray-900 overflow-x-hidden">
      
// // //       {/* --- About Hero Section --- */}
// // //       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
// // //         <EditableImage
// // //           isAdmin={isAdmin}
// // //           src={about_hero.image_url}
// // //           alt={about_hero.image_alt}
// // //           onSave={handleImageSave('about_hero', 'image')}
// // //           className="absolute z-0 w-full h-full"
// // //           imgProps={{ className: "w-full h-full object-cover" }}
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
// // //         <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        
// // //         <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <FadeIn>
// // //             <EditableText
// // //               as="h1"
// // //               isAdmin={isAdmin}
// // //               value={about_hero.title_prefix}
// // //               onSave={handleTextSave('about_hero', 'title_prefix')}
// // //               className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg"
// // //             >
// // //               {about_hero.title_prefix}{' '}
// // //               <EditableText
// // //                 as="span"
// // //                 isAdmin={isAdmin}
// // //                 value={about_hero.title_suffix}
// // //                 onSave={handleTextSave('about_hero', 'title_suffix')}
// // //                 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600"
// // //               />
// // //             </EditableText>

// // //             <EditableText
// // //               as="p"
// // //               isAdmin={isAdmin}
// // //               value={about_hero.subtitle}
// // //               onSave={handleTextSave('about_hero', 'subtitle')}
// // //               className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
// // //               useTextarea
// // //             />
// // //           </FadeIn>
// // //         </div>
// // //       </section>
      
// // //       {/* --- Animated Timeline Section (Imported) --- */}
// // //       <section className="py-24 bg-white relative">
// // //         {isAdmin && <AdminEditButton onClick={() => setModal('timeline')} text="Edit Timeline" />}
// // //         <Timeline 
// // //           timelineData={timeline} 
// // //           isAdmin={isAdmin}
// // //           onSave={handleSave} // Pass the main save function
// // //         />
// // //       </section>

// // //       {/* --- Facility Video Section --- */}
// // //       <section className="py-24 bg-gray-50 relative">
// // //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // //           <FadeIn>
// // //             <EditableText
// // //               as="h2"
// // //               isAdmin={isAdmin}
// // //               value={facility_video.title}
// // //               onSave={handleTextSave('facility_video', 'title')}
// // //               className="text-4xl md:text-5xl font-light mb-4"
// // //             >
// // //               {facility_video.title.split(' ').slice(0, -1).join(' ')}
// // //               <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
// // //                 {facility_video.title.split(' ').pop()}
// // //               </span>
// // //             </EditableText>

// // //             <EditableText
// // //               as="p"
// // //               isAdmin={isAdmin}
// // //               value={facility_video.subtitle}
// // //               onSave={handleTextSave('facility_video', 'subtitle')}
// // //               className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
// // //               useTextarea
// // //             />
            
// // //             <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
// // //               <EditableImage
// // //                 isAdmin={isAdmin}
// // //                 src={facility_video.thumbnail_url}
// // //                 alt={facility_video.thumbnail_alt}
// // //                 onSave={handleImageSave('facility_video', 'thumbnail')}
// // //                 className="w-full h-full"
// // //                 imgProps={{ className: "w-full h-full object-cover" }}
// // //               />
// // //               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
// // //               <div className="absolute inset-0 flex items-center justify-center">
// // //                 <div className="relative">
// // //                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
// // //                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {/* Note: Video URL editing would require another button/modal */}
// // //           </FadeIn>
// // //         </div>
// // //       </section>

// // //       {/* --- Dynamic Stats Section --- */}
// // //       <section className="py-24 bg-white relative" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
// // //         {isAdmin && <AdminEditButton onClick={() => setModal('stats')} text="Edit Stats" />}
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
// // //             {about_stats.map((stat, index) => (
// // //               <FadeIn key={stat.id} delay={index * 200}>
// // //                 <div className="p-6">
// // //                   <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
// // //                     <CountUp end={stat.value} suffix={stat.suffix} />
// // //                   </h3>
// // //                   <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
// // //                 </div>
// // //               </FadeIn>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
      
// // //       {/* --- Core Values Section (Imported) --- */}
// // //       <section className="py-24 bg-gray-50 relative">
// // //         {isAdmin && <AdminEditButton onClick={() => setModal('core_values')} text="Edit Core Values" />}
// // //         <CoreValues 
// // //           valuesData={core_values} 
// // //           isAdmin={isAdmin}
// // //           onSave={handleSave} 
// // //         />
// // //       </section>

// // //       {/* --- CTA Section --- */}
// // //       <section className="py-24 bg-white">
// // //         <CallToAction 
// // //           ctaData={about_cta}
// // //           isAdmin={isAdmin}
// // //           onSave={handleSave}
// // //           onImageSave={handleImageSave('about_cta', 'background')}
// // //         />
// // //       </section>

// // //       {/* --- List Management Modal --- */}
// // //       {modal && (
// // //         <ListManagementModal
// // //           title={`Manage ${modal.replace('_', ' ')}`}
// // //           items={
// // //             modal === 'stats' ? content.about_stats : content[modal].events || content[modal].values
// // //           }
// // //           itemTitleKey={modal === 'stats' ? 'label' : 'title'}
// // //           onClose={() => setModal(null)}
// // //           renderForm={renderModalForm}
// // //           onSave={async (newItems) => {
// // //             let newContent;
// // //             if (modal === 'stats') {
// // //               newContent = newItems; // Stats is a root-level array
// // //             } else {
// // //               // Timeline and Core Values are objects with an array inside
// // //               const key = content[modal].events ? 'events' : 'values';
// // //               newContent = {
// // //                 ...content[modal],
// // //                 [key]: newItems
// // //               };
// // //             }
// // //             await handleSave(modal, newContent);
// // //             setModal(null); // Close modal on save
// // //           }}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // import React, { useState, useEffect } from 'react';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { CountUp } from '../components/common/CountUp';
// // import { CallToAction } from '../components/common/CallToAction';
// // import { Timeline } from '../components/about/Timeline';
// // import { CoreValues } from '../components/about/CoreValues';

// // // Import Admin/CMS tools
// // import { useAuth } from '../context/AuthContext'; // Make sure this path is correct
// // import { aboutApi } from '../api/aboutApi';
// // import { EditableText } from '../components/common/EditableText';
// // import { EditableImage } from '../components/common/EditableImage';
// // import { ListManagementModal } from '../components/common/ListManagementModal';
// // import { IconPicker } from '../components/common/IconPicker';
// // import { Edit, PlayCircle } from 'lucide-react';
// // import { v4 as uuidv4 } from 'uuid';

// // // Helper component for admin buttons
// // const AdminEditButton = ({ onClick, text = 'Edit' }) => (
// //   <button
// //     onClick={onClick}
// //     className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
// //   >
// //     <Edit size={14} /> {text}
// //   </button>
// // );

// // export const About = () => {
// //   // const { isAdmin } = useAuth(); // UNCOMMENT THIS
// //   const isAdmin = true; // For testing purposes
// //   const [content, setContent] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [modal, setModal] = useState(null); // 'timeline', 'stats', 'core_values'

// //   // --- Data Fetching ---
// //   useEffect(() => {
// //     const loadContent = async () => {
// //       try {
// //         const data = await aboutApi.getContent();
// //         setContent(data);
// //       } catch (err) {
// //         console.error('Failed to load page content', err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     loadContent();
// //   }, []);

// //   // --- Data Saving ---
// //   const handleSave = async (sectionName, newContent) => {
// //     // 1. Optimistic UI update
// //     setContent((prev) => ({
// //       ...prev,
// //       [sectionName]: newContent,
// //     }));

// //     // 2. API call
// //     try {
// //       await aboutApi.updateSectionContent(sectionName, newContent);
// //     } catch (err) {
// //       console.error('Failed to save content', err);
// //       alert('Error saving content. Please refresh and try again.');
// //       // NOTE: In a real app, you'd revert the optimistic update here
// //     }
// //   };

// //   // Helper for simple text field updates
// //   const handleTextSave = (sectionName, field) => async (newValue) => {
// //     const newContent = {
// //       ...content[sectionName],
// //       [field]: newValue,
// //     };
// //     await handleSave(sectionName, newContent);
// //   };

// //   // Helper for image updates
// //   const handleImageSave = (sectionName, field) => async (newFile) => {
// //     if (!newFile) {
// //       console.log('No file selected.');
// //       return;
// //     }
    
// //     console.log(`Saving image for: ${sectionName}.${field}`);
    
// //     const section = content[sectionName];
// //     if (!section) {
// //       console.error(`Error: No content found for section '${sectionName}'`);
// //       return;
// //     }
    
// //     const oldStoragePath = section[`${field}_storage_path`];
// //     console.log('Old storage path:', oldStoragePath);

// //     try {
// //       const { publicUrl, storagePath } = await aboutApi.updateFile(newFile, oldStoragePath);
// //       console.log('Upload success:', { publicUrl, storagePath });
      
// //       const newContent = {
// //         ...section,
// //         [`${field}_url`]: publicUrl,
// //         [`${field}_storage_path`]: storagePath,
// //       };
// //       await handleSave(sectionName, newContent);

// //     } catch (err) {
// //       console.error("Failed to update image", err);
// //       alert("Image update failed. Check the console for details.");
// //     }
// //   };

// //   // --- Modal Forms ---
// //   const renderModalForm = (item, setItem) => {
// //     switch (modal) {
// //       case 'timeline':
// //         return (
// //           <>
// //             <label>Year: <input type="number" className="w-full p-1 border rounded" value={item.year || ''} onChange={e => setItem({...item, year: parseInt(e.target.value)})} /></label>
// //             <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
// //             <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
// //           </>
// //         );
// //       case 'stats':
// //         return (
// //           <>
// //             <label>Value (Number): <input type="number" className="w-full p-1 border rounded" value={item.value || ''} onChange={e => setItem({...item, value: parseInt(e.target.value)})} /></label>
// //             <label>Suffix (e.g., +, M+): <input type="text" className="w-full p-1 border rounded" value={item.suffix || ''} onChange={e => setItem({...item, suffix: e.target.value})} /></label>
// //             <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.label || ''} onChange={e => setItem({...item, label: e.target.value})} /></label>
// //           </>
// //         );
// //       case 'core_values':
// //         return (
// //           <>
// //             <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
// //             <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
// //             <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
// //           </>
// //         );
// //       default: return null;
// //     }
// //   };

// //   if (isLoading) {
// //     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Loading...</div>;
// //   }
  
// //   if (!content) {
// //     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Error loading content.</div>;
// //   }

// //   const { about_hero, timeline, facility_video, about_stats, core_values, about_cta } = content;

// //   return (
// //     <div className="bg-white text-gray-900 overflow-x-hidden">
      
// //       {/* --- About Hero Section (FIXED) --- */}
// //       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
// //         {/* Layer 1: Image (Z-0) */}
// //         <img 
// //           src={about_hero.image_url} 
// //           alt={about_hero.image_alt}
// //           className="absolute z-0 w-full h-full object-cover"
// //         />
// //         {/* Layer 2: Overlays (Z-10) */}
// //         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
// //         <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        
// //         {/* Layer 3: Content (Z-20) */}
// //         <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <FadeIn>
// //             <EditableText
// //               as="h1"
// //               isAdmin={isAdmin}
// //               value={about_hero.title_prefix}
// //               onSave={handleTextSave('about_hero', 'title_prefix')}
// //               className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg"
// //             >
// //               {about_hero.title_prefix}{' '}
// //               <EditableText
// //                 as="span"
// //                 isAdmin={isAdmin}
// //                 value={about_hero.title_suffix}
// //                 onSave={handleTextSave('about_hero', 'title_suffix')}
// //                 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600"
// //               />
// //             </EditableText>

// //             <EditableText
// //               as="p"
// //               isAdmin={isAdmin}
// //               value={about_hero.subtitle}
// //               onSave={handleTextSave('about_hero', 'subtitle')}
// //               className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
// //               useTextarea
// //             />
// //           </FadeIn>
// //         </div>

// //         {/* Layer 4: Admin Button (Z-30) */}
// //         <EditableImage
// //           isAdmin={isAdmin}
// //           onSave={handleImageSave('about_hero', 'image')}
// //           className="absolute inset-0 z-30" 
// //           renderImage={false}
// //         />
// //       </section>
      
// //       {/* --- Animated Timeline Section --- */}
// //       <section className="py-24 bg-white relative">
// //         {isAdmin && <AdminEditButton onClick={() => setModal('timeline')} text="Edit Timeline" />}
// //         <Timeline 
// //           timelineData={timeline} 
// //           isAdmin={isAdmin}
// //           onSave={handleSave} 
// //         />
// //       </section>

// //       {/* --- Facility Video Section (FIXED) --- */}
// //       <section className="py-24 bg-gray-50 relative">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <FadeIn>
// //             <EditableText
// //               as="h2"
// //               isAdmin={isAdmin}
// //               value={facility_video.title}
// //               onSave={handleTextSave('facility_video', 'title')}
// //               className="text-4xl md:text-5xl font-light mb-4"
// //             >
// //               {facility_video.title.split(' ').slice(0, -1).join(' ')}
// //               <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
// //                 {facility_video.title.split(' ').pop()}
// //               </span>
// //             </EditableText>

// //             <EditableText
// //               as="p"
// //               isAdmin={isAdmin}
// //               value={facility_video.subtitle}
// //               onSave={handleTextSave('facility_video', 'subtitle')}
// //               className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
// //               useTextarea
// //             />
            
// //             <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
// //               {/* Layer 1: Thumbnail Image */}
// //               <img 
// //                 src={facility_video.thumbnail_url} 
// //                 alt={facility_video.thumbnail_alt} 
// //                 className="w-full h-full object-cover"
// //               />
// //               {/* Layer 2: Overlays and Play Button */}
// //               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <div className="relative">
// //                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
// //                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
// //                 </div>
// //               </div>

// //               {/* Layer 3: Admin Button (Z-30) */}
// //               <EditableImage
// //                 isAdmin={isAdmin}
// //                 onSave={handleImageSave('facility_video', 'thumbnail')}
// //                 className="absolute inset-0 z-30"
// //                 renderImage={false}
// //               />
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- Dynamic Stats Section --- */}
// //       <section className="py-24 bg-white relative" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
// //         {isAdmin && <AdminEditButton onClick={() => setModal('stats')} text="Edit Stats" />}
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
// //             {about_stats.map((stat, index) => (
// //               <FadeIn key={stat.id} delay={index * 200}>
// //                 <div className="p-6">
// //                   <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
// //                     <CountUp end={stat.value} suffix={stat.suffix} />
// //                   </h3>
// //                   <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
// //                 </div>
// //               </FadeIn>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
      
// //       {/* --- Core Values Section --- */}
// //       <section className="py-24 bg-gray-50 relative">
// //         {isAdmin && <AdminEditButton onClick={() => setModal('core_values')} text="Edit Core Values" />}
// //         <CoreValues 
// //           valuesData={core_values} 
// //           isAdmin={isAdmin}
// //           onSave={handleSave} 
// //         />
// //       </section>

// //       {/* --- CTA Section --- */}
// //       <section className="py-24 bg-white">
// //         <CallToAction 
// //           ctaData={about_cta}
// //           isAdmin={isAdmin}
// //           onSave={handleSave}
// //           onImageSave={handleImageSave('about_cta', 'background')}
// //         />
// //       </section>

// //       {/* --- List Management Modal --- */}
// //       {modal && (
// //         <ListManagementModal
// //           title={`Manage ${modal.replace('_', ' ')}`}
// //           items={
// //             modal === 'stats' ? content.about_stats : content[modal].events || content[modal].values
// //           }
// //           itemTitleKey={modal === 'stats' ? 'label' : 'title'}
// //           onClose={() => setModal(null)}
// //           renderForm={renderModalForm}
// //           onSave={async (newItems) => {
// //             let newContent;
// //             if (modal === 'stats') {
// //               newContent = newItems; // Stats is a root-level array
// //             } else {
// //               // Timeline and Core Values are objects with an array inside
// //               const key = content[modal].events ? 'events' : 'values';
// //               newContent = {
// //                 ...content[modal],
// //                 [key]: newItems
// //               };
// //             }
// //             await handleSave(modal, newContent);
// //             setModal(null); // Close modal on save
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// /* src/pages/About.jsx */

// import React, { useState, useEffect, useRef } from 'react';
// import { FadeIn } from '../components/common/FadeIn';
// import { CountUp } from '../components/common/CountUp';
// import { CallToAction } from '../components/common/CallToAction';
// import { Timeline } from '../components/about/Timeline';
// import { CoreValues } from '../components/about/CoreValues';

// // Import Admin/CMS tools
// import { useAuth } from '../context/AuthContext'; // Make sure this path is correct
// import { aboutApi } from '../api/aboutApi';
// import { EditableText } from '../components/common/EditableText';
// // We will NOT use the common EditableImage for backgrounds
// // import { EditableImage } from '../components/common/EditableImage'; 
// import { ListManagementModal } from '../components/common/ListManagementModal';
// import { IconPicker } from '../components/common/IconPicker';
// import { Edit, PlayCircle, Upload, X, Video } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';

// // --- NEW HELPER COMPONENTS (Scoped to this file) ---

// /**
//  * NEW: A dedicated button for uploading media.
//  * This is just the button, which we can place anywhere.
//  */
// const EditableMediaButton = ({
//   isAdmin,
//   onSave,
//   label,
//   accept, // 'image/*' or 'video/*'
//   className = '',
//   icon = <Upload size={14} />
// }) => {
//   const fileInputRef = useRef(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsUploading(true);
//     try {
//       await onSave(file);
//     } catch (error) {
//       console.error('Failed to save media:', error);
//       alert('Media upload failed.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   if (!isAdmin) return null;

//   return (
//     <>
//       <input
//         type="file"
//         accept={accept}
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />
//       <button
//         onClick={() => fileInputRef.current.click()}
//         disabled={isUploading}
//         className={`z-50 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 ${className}`}
//       >
//         {isUploading ? 'Uploading...' : (
//           <>
//             {icon} {label}
//           </>
//         )}
//       </button>
//     </>
//   );
// };

// /**
//  * NEW: A wrapper for sections with editable background images.
//  * This solves all z-index and positioning issues.
//  */
// const EditableBackgroundImage = ({
//   isAdmin,
//   src,
//   onSave,
//   children,
//   className = '',
// }) => {
//   return (
//     <section
//       className={`relative bg-cover bg-center ${className}`}
//       style={{ backgroundImage: `url('${src}')` }}
//     >
//       <EditableMediaButton
//         isAdmin={isAdmin}
//         onSave={onSave}
//         label="Change Background"
//         accept="image/*"
//         className="absolute top-4 right-4"
//       />
//       {children}
//     </section>
//   );
// };

// /**
//  * NEW: A simple modal for editing text URLs.
//  */
// const EditUrlModal = ({ isOpen, onClose, onSave, initialValue }) => {
//   const [value, setValue] = useState(initialValue);
//   const [isSaving, setIsSaving] = useState(false);

//   useEffect(() => {
//     setValue(initialValue);
//   }, [initialValue]);

//   if (!isOpen) return null;

//   const handleSave = async () => {
//     setIsSaving(true);
//     try {
//       await onSave(value);
//       onClose();
//     } catch (err) {
//       console.error("Failed to save URL", err);
//       alert("Failed to save URL.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black/80">
//       <div className="bg-white p-6 rounded-lg w-full max-w-lg text-gray-900">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold">Edit Video URL</h3>
//           <button onClick={onClose}><X size={24} /></button>
//         </div>
//         <label className="block text-sm font-medium mb-2">
//           Video URL (e.g., YouTube, Vimeo, or .mp4 link)
//         </label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <div className="mt-6 flex justify-end gap-3">
//           <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={isSaving}
//             className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
//           >
//             {isSaving ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main About Page Component ---

// // Helper component for admin buttons (for list modals)
// const AdminEditButton = ({ onClick, text = 'Edit' }) => (
//   <button
//     onClick={onClick}
//     className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
//   >
//     <Edit size={14} /> {text}
//   </button>
// );

// export const About = () => {
//   // const { isAdmin } = useAuth(); // UNCOMMENT THIS
//   const isAdmin = true; // For testing purposes
//   const [content, setContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [modal, setModal] = useState(null); // 'timeline', 'stats', 'core_values'
//   const [isVideoUrlModalOpen, setIsVideoUrlModalOpen] = useState(false);

//   // --- Data Fetching ---
//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const data = await aboutApi.getContent();
//         setContent(data);
//       } catch (err) {
//         console.error('Failed to load page content', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadContent();
//   }, []);

//   // --- Data Saving ---
//   const handleSave = async (sectionName, newContent) => {
//     setContent((prev) => ({
//       ...prev,
//       [sectionName]: newContent,
//     }));
//     try {
//       await aboutApi.updateSectionContent(sectionName, newContent);
//     } catch (err) {
//       console.error('Failed to save content', err);
//       alert('Error saving content. Please refresh and try again.');
//     }
//   };

//   // Helper for simple text field updates
//   const handleTextSave = (sectionName, field) => async (newValue) => {
//     const newContent = {
//       ...content[sectionName],
//       [field]: newValue,
//     };
//     await handleSave(sectionName, newContent);
//   };

//   // Helper for image/media updates
//   const handleMediaSave = (sectionName, field) => async (newFile) => {
//     if (!newFile) {
//       console.log('No file selected.');
//       return;
//     }
//     const section = content[sectionName];
//     const oldStoragePath = section[`${field}_storage_path`];

//     try {
//       const { publicUrl, storagePath } = await aboutApi.updateFile(newFile, oldStoragePath);
//       const newContent = {
//         ...section,
//         [`${field}_url`]: publicUrl,
//         [`${field}_storage_path`]: storagePath,
//       };
//       await handleSave(sectionName, newContent);
//     } catch (err) {
//       console.error("Failed to update media", err);
//       alert("Media update failed. Check console.");
//     }
//   };

//   // --- Modal Forms (for ListManagementModal) ---
//   const renderModalForm = (item, setItem) => {
//     // ... (This logic remains the same)
//     switch (modal) {
//       case 'timeline':
//         return (
//           <>
//             <label>Year: <input type="number" className="w-full p-1 border rounded" value={item.year || ''} onChange={e => setItem({...item, year: parseInt(e.target.value)})} /></label>
//             <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
//             <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
//           </>
//         );
//       case 'stats':
//         return (
//           <>
//             <label>Value (Number): <input type="number" className="w-full p-1 border rounded" value={item.value || ''} onChange={e => setItem({...item, value: parseInt(e.target.value)})} /></label>
//             <label>Suffix (e.g., +, M+): <input type="text" className="w-full p-1 border rounded" value={item.suffix || ''} onChange={e => setItem({...item, suffix: e.target.value})} /></label>
//             <label>Label: <input type="text" className="w-full p-1 border rounded" value={item.label || ''} onChange={e => setItem({...item, label: e.target.value})} /></label>
//           </>
//         );
//       case 'core_values':
//         return (
//           <>
//             <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
//             <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
//             <label>Description: <textarea className="w-full p-1 border rounded" value={item.desc || ''} onChange={e => setItem({...item, desc: e.target.value})} /></label>
//           </>
//         );
//       default: return null;
//     }
//   };

//   if (isLoading) {
//     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Loading...</div>;
//   }
  
//   if (!content) {
//     return <div className="h-screen bg-white flex items-center justify-center text-gray-900">Error loading content.</div>;
//   }

//   const { about_hero, timeline, facility_video, about_stats, core_values, about_cta } = content;

//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
      
//       {/* --- About Hero Section (FIXED) --- */}
//       <EditableBackgroundImage
//         isAdmin={isAdmin}
//         src={about_hero.image_url}
//         onSave={handleMediaSave('about_hero', 'image')}
//         className="h-[70vh] flex items-center justify-center text-center overflow-hidden"
//       >
//         {/* Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
//         <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        
//         {/* Content */}
//         <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn>
//             <EditableText
//               as="h1"
//               isAdmin={isAdmin}
//               value={about_hero.title_prefix}
//               onSave={handleTextSave('about_hero', 'title_prefix')}
//               className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg"
//             >
//               {about_hero.title_prefix}{' '}
//               <EditableText
//                 as="span"
//                 isAdmin={isAdmin}
//                 value={about_hero.title_suffix}
//                 onSave={handleTextSave('about_hero', 'title_suffix')}
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600"
//               />
//             </EditableText>

//             <EditableText
//               as="p"
//               isAdmin={isAdmin}
//               value={about_hero.subtitle}
//               onSave={handleTextSave('about_hero', 'subtitle')}
//               className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
//               useTextarea
//             />
//           </FadeIn>
//         </div>
//       </EditableBackgroundImage>
      
//       {/* --- Animated Timeline Section --- */}
//       <section className="py-24 bg-white relative">
//         {isAdmin && <AdminEditButton onClick={() => setModal('timeline')} text="Edit Timeline" />}
//         <Timeline 
//           timelineData={timeline} 
//           isAdmin={isAdmin}
//           onSave={handleSave} 
//         />
//       </section>

//       {/* --- Facility Video Section (FIXED) --- */}
//       <section className="py-24 bg-gray-50 relative">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <FadeIn>
//             <EditableText
//               as="h2"
//               isAdmin={isAdmin}
//               value={facility_video.title}
//               onSave={handleTextSave('facility_video', 'title')}
//               className="text-4xl md:text-5xl font-light mb-4"
//             >
//               {/* This split logic is brittle. Better to use EditableText twice */}
//               Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">World-Class Facility</span>
//             </EditableText>

//             <EditableText
//               as="p"
//               isAdmin={isAdmin}
//               value={facility_video.subtitle}
//               onSave={handleTextSave('facility_video', 'subtitle')}
//               className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
//               useTextarea
//             />
            
//             {/* Video Player Wrapper */}
//             <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group border-2 border-gray-200">
              
//               {/* Admin Buttons (Layer 3 - Top) */}
//               <div className="absolute top-4 left-4 z-50">
//                 <button
//                   onClick={() => setIsVideoUrlModalOpen(true)}
//                   className="z-50 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
//                 >
//                   <Video size={14} /> Edit Video URL
//                 </button>
//               </div>
//               <EditableMediaButton
//                 isAdmin={isAdmin}
//                 onSave={handleMediaSave('facility_video', 'thumbnail')}
//                 label="Change Thumbnail"
//                 accept="image/*"
//                 className="absolute top-4 right-4 z-50"
//               />

//               {/* Clickable Area (Layer 2) */}
//               <a 
//                 href={facility_video.video_url || '#'} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
//               >
//                 <div className="relative">
//                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
//                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
//                 </div>
//               </a>
              
//               {/* Thumbnail Image (Layer 1) */}
//               <img 
//                 src={facility_video.thumbnail_url} 
//                 alt={facility_video.thumbnail_alt} 
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay (Layer 0) */}
//               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* --- Dynamic Stats Section --- */}
//       <section className="py-24 bg-white relative" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
//         {isAdmin && <AdminEditButton onClick={() => setModal('stats')} text="Edit Stats" />}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//             {about_stats.map((stat, index) => (
//               <FadeIn key={stat.id} delay={index * 200}>
//                 <div className="p-6">
//                   <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
//                     <CountUp end={stat.value} suffix={stat.suffix} />
//                   </h3>
//                   <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* --- Core Values Section --- */}
//       <section className="py-24 bg-gray-50 relative">
//         {isAdmin && <AdminEditButton onClick={() => setModal('core_values')} text="Edit Core Values" />}
//         <CoreValues 
//           valuesData={core_values} 
//           isAdmin={isAdmin}
//           onSave={handleSave} 
//         />
//       </section>

//       {/* --- CTA Section (FIXED) --- */}
//       {/* This is tricky. The CallToAction component is common.
//         My previous fix for CallToAction.js was correct. 
//         Instead of using EditableBackgroundImage, we should fix the common CallToAction.
//         But you said not to edit common files.
        
//         So, I will create a *new* CallToAction *inline* here.
//       */}
//       <EditableBackgroundImage
//         isAdmin={isAdmin}
//         src={about_cta.background_image_url}
//         onSave={handleMediaSave('about_cta', 'background')}
//         className="py-24"
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-white/80 z-0"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <FadeIn>
//             <EditableText
//               as="h2"
//               isAdmin={isAdmin}
//               value={about_cta.title}
//               onSave={handleTextSave('about_cta', 'title')}
//               className="text-4xl md:text-5xl font-light text-gray-900"
//             />
//             <EditableText
//               as="p"
//               isAdmin={isAdmin}
//               value={about_cta.text}
//               onSave={handleTextSave('about_cta', 'text')}
//               className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 mb-10"
//               useTextarea
//             />
//             <button
//               onClick={() => alert(`Maps to: ${about_cta.buttonLink}`)} // Use react-router's navigate in real app
//               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-green-400 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
//             >
//               <EditableText
//                 as="span"
//                 isAdmin={isAdmin}
//                 value={about_cta.buttonText}
//                 onSave={handleTextSave('about_cta', 'buttonText')}
//               />
//             </button>
//           </FadeIn>
//         </div>
//       </EditableBackgroundImage>

//       {/* --- List Management Modal --- */}
//       {modal && (
//         <ListManagementModal
//           title={`Manage ${modal.replace('_', ' ')}`}
//           items={
//             modal === 'stats' ? content.about_stats : content[modal].events || content[modal].values
//           }
//           itemTitleKey={modal === 'stats' ? 'label' : 'title'}
//           onClose={() => setModal(null)}
//           renderForm={renderModalForm}
//           onSave={async (newItems) => {
//             let newContent;
//             if (modal === 'stats') {
//               newContent = newItems; // Stats is a root-level array
//             } else {
//               // Timeline and Core Values are objects with an array inside
//               const key = content[modal].events ? 'events' : 'values';
//               newContent = {
//                 ...content[modal],
//                 [key]: newItems
//               };
//             }
//             await handleSave(modal, newContent);
//             setModal(null); // Close modal on save
//           }}
//         />
//       )}

//       {/* --- Video URL Edit Modal --- */}
//       <EditUrlModal
//         isOpen={isVideoUrlModalOpen}
//         onClose={() => setIsVideoUrlModalOpen(false)}
//         initialValue={facility_video.video_url}
//         onSave={async (newUrl) => {
//           await handleTextSave('facility_video', 'video_url')(newUrl);
//           setIsVideoUrlModalOpen(false);
//         }}
//       />
//     </div>
//   );
// };

/* src/pages/About.jsx */

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
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing purposes
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