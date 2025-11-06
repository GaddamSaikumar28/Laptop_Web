
// // import React from 'react';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { CountUp } from '../components/common/CountUp';
// // import { CallToAction } from '../components/common/CallToAction';
// // import { Timeline } from '../components/about/Timeline';
// // import { CoreValues } from '../components/about/CoreValues';
// // import { PlayCircle } from 'lucide-react';

// // export const About = () => {
// //   return (
// //     // Main container changed to white background and dark text
// //     <div className="bg-white text-gray-900 overflow-x-hidden">
      
// //       {/* --- About Hero Section --- */}
// //       <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
// //         {/* Updated placeholder for light theme */}
// //         <img 
// //           src="https://placehold.co/1920x1080/e0e0e0/555555?text=Our+Facility&font=inter" 
// //           alt="ECycleGreen Facility"
// //           className="absolute z-0 w-full h-full object-cover"
// //         />
// //         {/* Gradient Overlay changed from black to white */}
// //         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
// //         {/* Light opacity overlay */}
// //         <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
        
// //         {/* Content */}
// //         <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <FadeIn>
// //             {/* Text changed to dark, gradient updated to greens */}
// //             <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg">
// //               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">Us</span>
// //             </h1>
// //             {/* Subtitle text changed to a readable gray */}
// //             <p className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
// //               We built the world's leading facility to provide the highest quality
// //               refurbished laptops in the world.
// //             </p>
// //           </FadeIn>
// //         </div>
// //       </section>
      
// //       {/* --- Animated Timeline Section (Imported) --- */}
// //       {/* Wrapped in a section for proper padding and background */}
// //       <section className="py-24 bg-white">
// //         <Timeline />
// //       </section>

// //       {/* --- Facility Video Section --- */}
// //       {/* Background changed to light gray for separation */}
// //       <section className="py-24 bg-gray-50">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <FadeIn>
// //             {/* Gradient updated to a vibrant green/teal */}
// //             <h2 className="text-4xl md:text-5xl font-light mb-4">
// //               Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">World-Class Facility</span>
// //             </h2>
// //             {/* Text color updated */}
// //             <p className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12">
// //               See the technology and the people that make our quality possible.
// //             </p>
// //             {/* Border changed to light gray */}
// //             <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
// //               {/* Updated placeholder image */}
// //               <img 
// //                 src="https://placehold.co/1280x720/cccccc/555555?text=Our+Facility+Tour&font=inter" 
// //                 alt="Our Facility Video Thumbnail" 
// //                 className="w-full h-full object-cover"
// //               />
// //               {/* Dark overlay kept for contrast, hover opacity tweaked */}
// //               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <div className="relative">
// //                   {/* Icon is white, which is perfect on the dark overlay */}
// //                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
// //                   {/* Ping animation color changed to green */}
// //                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </FadeIn>
// //         </div>
// //       </section>

// //       {/* --- Dynamic Stats Section --- */}
// //       {/* Background changed to white, placeholder BG image updated to a light theme */}
// //       <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
// //             <FadeIn delay={0}>
// //               <div className="p-6">
// //                 {/* Numbers are now vibrant gradients */}
// //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
// //                   <CountUp end={30} suffix="+" />
// //                 </h3>
// //                 <p className="text-2xl text-gray-500 mt-2">Years in the Market</p>
// //               </div>
// //             </FadeIn>
// //             <FadeIn delay={200}>
// //               <div className="p-6">
// //                 {/* Added more color variation as requested */}
// //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
// //                   <CountUp end={10} suffix="M+" />
// //                 </h3>
// //                 <p className="text-2xl text-gray-500 mt-2">Used Assets Sold</p>
// //               </div>
// //             </FadeIn>
// //             <FadeIn delay={400}>
// //               <div className="p-6">
// //                 {/* Added more color variation as requested */}
// //                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
// //                   <CountUp end={1000} suffix="+" />
// //                 </h3>
// //                 <p className="text-2xl text-gray-500 mt-2">R&D Projects</p>
// //               </div>
// //             </FadeIn>
// //           </div>
// //         </div>
// //       </section>
      
// //       {/* --- Core Values Section (Imported) --- */}
// //       {/* Wrapped in a section with alternating light gray background */}
// //       <section className="py-24 bg-gray-50">
// //         <CoreValues />
// //       </section>

// //       {/* --- CTA Section --- */}
// //       {/* Wrapped in a section to ensure correct background */}
// //       <section className="py-24 bg-white">
// //         <CallToAction 
// //           title="Let's have a conversation"
// //           text="Get in touch to learn how our products can provide for you."
// //           buttonText="Contact Us"
// //           buttonLink="/contact"
// //         />
// //       </section>
// //     </div>
// //   );
// // };
// /*
// *
// * === FULLY INTEGRATED & ADMIN-EDITABLE About.jsx ===
// *
// */
// import React, { useState, useEffect, Fragment, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { 
//   Eye, Heart, Zap as ZapIcon, Shield, PlayCircle, 
//   Edit, Plus, X, Upload,
// } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';

// // --- NEW IMPORTS ---
// // import { useAuth } from '../AuthContext'; // Get admin status
// // import * as aboutApi from '../api/aboutApi'; // <-- Import new API
// import { useAuth } from '../context/AuthContext';
// import * as aboutApi from '../api/aboutApi';
// // --- HELPER COMPONENTS (Imported or defined here) ---
// // (These are the same as used on Home.jsx. 
// // I will paste their full code at the bottom of this file.)
// import { EditableText } from '../components/common/EditableText';
// import { EditableImage } from '../components/common/EditableImage';
// import { DynamicIcon, availableIconNames } from '../components/common/DynamicIcon';
// // import { ListManagementModal } from '../components/ListManagementModal';
// // import { IconPicker } from '../components/IconPicker';
// // import { FadeIn } from '../components/common/FadeIn';
// // import { CountUp } from '../components/common/CountUp';
// // ... or if they are not in separate files, their code is at the bottom.
// import { FadeIn } from '../components/common/FadeIn';
// import { CountUp } from '../components/common/CountUp';

// // ---
// // --- 1. ABOUT HERO SECTION (Integrated & Editable)
// // ---
// const IconPicker = ({ value, onChange }) => {
// const [isOpen, setIsOpen] = useState(false);
// const [filter, setFilter] = useState('');

// const filteredIcons = availableIconNames.filter(name => 
//   name.toLowerCase().includes(filter.toLowerCase())
// ).slice(0, 50); // Limit to 50

// return (
//   <div className="relative">
//     <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full p-2 border rounded">
//       <span>{value ? <DynamicIcon name={value} className="inline-block mr-2" /> : null} {value || 'Select Icon'}</span>
//       <span>{isOpen ? 'Close' : 'Open'}</span>
//     </button>
//     {isOpen && (
//       <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
//         <input
//           type="text"
//           placeholder="Search icons..."
//           value={filter}
//           onChange={e => setFilter(e.target.value)}
//           className="w-full p-1 mb-2 border rounded"
//         />
//         <div className="grid grid-cols-6 gap-1">
//           {filteredIcons.map(name => (
//             <button
//               key={name}
//               type="button"
//               onClick={() => {
//                 onChange(name);
//                 setIsOpen(false);
//                 setFilter('');
//               }}
//               className="p-2 border rounded hover:bg-gray-100"
//               title={name}
//             >
//               <DynamicIcon name={name} />
//             </button>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );
// };

// const ListManagementModal = ({ title, items, onClose, onSave, renderForm, itemTitleKey, fileKeys = [] }) => {
//   const [currentItems, setCurrentItems] = useState(items);
//   const [editingItem, setEditingItem] = useState(null); // The item object to edit
//   const [isSaving, setIsSaving] = useState(false);
//   const formRef = useRef(null);

//   const handleAddNew = () => {
//     setEditingItem({ id: uuidv4(), isNew: true }); // Use isNew flag
//   };

//   const handleEdit = (item) => {
//     setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
//   };

//   const handleDelete = async (itemToDelete) => {
//     if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey] || 'this item'}"?`)) return;
    
//     setIsSaving(true);
//     try {
//       // Delete any associated files
//       for (const key of fileKeys) {
//         if (itemToDelete[`${key}_storage_path`]) {
//           await contentApi.deleteFile(itemToDelete[`${key}_storage_path`]);
//         }
//       }
      
//       const newItems = currentItems.filter(i => i.id !== itemToDelete.id);
//       await onSave(newItems); // Save deletion immediately
//       setCurrentItems(newItems);
      
//     } catch (err) {
//       console.error('Failed to delete item:', err);
//       alert('Failed to delete item.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // This handles the form submission for BOTH add and edit
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSaving(true);
//     let updatedItem = { ...editingItem };
    
//     try {
//       // Handle file uploads
//       const fileInputs = formRef.current.querySelectorAll('.file-input');
//       for (const input of fileInputs) {
//         const file = input.files[0];
//         if (file) {
//           const key = input.dataset.key; // e.g., 'video' or 'logo'
//           const oldStoragePath = items.find(i => i.id === updatedItem.id)?.[`${key}_storage_path`];
          
//           const { publicUrl, storagePath } = await contentApi.updateFile(file, oldStoragePath);
//           updatedItem[`${key}_url`] = publicUrl;
//           updatedItem[`${key}_storage_path`] = storagePath;
//         }
//       }
      
//       delete updatedItem.isNew; // Clean up flag

//       let newItemsArray;
//       if (items.find(i => i.id === updatedItem.id)) { // It's an update
//         newItemsArray = currentItems.map(i => i.id === updatedItem.id ? updatedItem : i);
//       } else { // It's a new item
//         newItemsArray = [...currentItems, updatedItem];
//       }
      
//       await onSave(newItemsArray); // Save the entire new array
//       setCurrentItems(newItemsArray);
//       setEditingItem(null); // Close the form
//     } catch (err) {
//       console.error(err);
//       alert('Failed to save item.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
//       <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <button onClick={onClose}><X /></button>
//         </div>

//         {/* --- Add/Edit Form --- */}
//         {editingItem ? (
//           <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg">
//             <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item`}</h3>
//             <div className="flex flex-col gap-2 mt-2">
//               {renderForm(editingItem, setEditingItem, editingItem.isNew)}
//             </div>
//             <div className="flex gap-2 mt-4">
//               <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
//               <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
//             </div>
//           </form>
//         ) : (
//           <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 my-4 text-white bg-blue-600 rounded">
//             <Plus size={18} /> Add New Item
//           </button>
//         )}

//         {/* --- List of Current Items --- */}
//         <div className="space-y-2">
//           {currentItems.map(item => (
//             <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
//               <span className="font-semibold">{item[itemTitleKey] || 'New Item'}</span>
//               <div className="flex gap-2">
//                 <button onClick={() => handleEdit(item)} disabled={isSaving} className="p-1 text-blue-600 disabled:text-gray-400"><Edit size={16} /></button>
//                 <button onClick={() => handleDelete(item)} disabled={isSaving} className="p-1 text-red-600 disabled:text-gray-400"><Trash2 size={16} /></button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const AboutHeroSection = ({ content, isAdmin, onUpdate }) => {
//   const { 
//     image_url, image_alt, image_storage_path, 
//     title_prefix, title_suffix, subtitle 
//   } = content || {};

//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('about_hero', { ...content, [key]: newValue });
//   };

//   const handleImageSave = async (file) => {
//     const { publicUrl, storagePath } = await aboutApi.updateFile(file, image_storage_path);
//     await onUpdate('about_hero', { 
//       ...content, 
//       image_url: publicUrl, 
//       image_storage_path: storagePath 
//     });
//   };

//   return (
//     <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
//       <EditableImage
//         isAdmin={isAdmin}
//         src={image_url || 'https://placehold.co/1920x1080'}
//         alt={image_alt || 'About us hero'}
//         onSave={handleImageSave}
//         className="absolute z-0 w-full h-full object-cover"
//         wrapperClassName="absolute z-0 w-full h-full"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
//       <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
      
//       <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg">
//             <EditableText as="span" isAdmin={isAdmin} value={title_prefix} onSave={val => handleTextSave('title_prefix', val)} />
//             {' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
//               <EditableText as="span" isAdmin={isAdmin} value={title_suffix} onSave={val => handleTextSave('title_suffix', val)} />
//             </span>
//           </h1>
//           <EditableText
//             as="p"
//             isAdmin={isAdmin}
//             value={subtitle}
//             onSave={val => handleTextSave('subtitle', val)}
//             className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
//             useTextarea
//           />
//         </FadeIn>
//       </div>
//     </section>
//   );
// };


// // ---
// // --- 2. TIMELINE SECTION (Integrated & Editable)
// // ---
// const TimelineSection = ({ content, isAdmin, onUpdate }) => {
//   const { title, subtitle, events } = content || {};
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('timeline', { ...content, [key]: newValue });
//   };

//   return (
//     <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
//             <EditableText as="span" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} />
//           </h2>
//           <EditableText
//             as="p"
//             isAdmin={isAdmin}
//             value={subtitle || ''}
//             onSave={val => handleTextSave('subtitle', val)}
//             className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-24"
//             useTextarea
//           />
//         </FadeIn>
        
//         <div className="relative max-w-2xl mx-auto">
//           <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>
          
//           {(events || []).map((event, index) => (
//             <FadeIn key={event.id || index} triggerOnce={true}>
//               <div className="relative mb-12 flex items-center md:w-full group">
//                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
//                   <div className="w-8 h-8 rounded-full bg-white border-4 border-green-500 flex items-center justify-center transition-all duration-300 group-hover:border-teal-400 group-hover:scale-110">
//                     <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
//                   </div>
//                 </div>
                
//                 <div className={`w-full p-8 bg-white border border-gray-200 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
//                   } md:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-xl hover:border-gray-300`}>
//                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-2">{event.year}</h3>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
//                   <p className="text-gray-600">{event.desc}</p>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
        
//         {isAdmin && (
//           <div className="text-center mt-12">
//             <button 
//               onClick={() => setIsManageModalOpen(true)} 
//               className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
//             >
//               <Edit size={18} /> Manage Timeline
//             </button>
//           </div>
//         )}

//         {isManageModalOpen && (
//           <ListManagementModal
//             title="Manage Timeline Events"
//             items={events || []}
//             onClose={() => setIsManageModalOpen(false)}
//             onSave={(newList) => onUpdate('timeline', { ...content, events: newList })}
//             renderForm={ (item, setItem) => (
//               <>
//                 <label>Year: <input type="number" value={item.year || ''} onChange={e => setItem(i => ({...i, year: parseInt(e.target.value)}))} className="w-full p-1 border rounded" /></label>
//                 <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Description: <textarea value={item.desc || ''} onChange={e => setItem(i => ({...i, desc: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               </>
//             )}
//             itemTitleKey="title"
//           />
//         )}
//       </div>
//     </section>
//   );
// };


// // ---
// // --- 3. FACILITY VIDEO SECTION (Integrated & Editable)
// // ---
// const FacilityVideoSection = ({ content, isAdmin, onUpdate }) => {
//   const { 
//     title, subtitle, thumbnail_url, 
//     thumbnail_alt, thumbnail_storage_path, video_url 
//   } = content || {};

//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('facility_video', { ...content, [key]: newValue });
//   };
  
//   const handleThumbnailSave = async (file) => {
//     const { publicUrl, storagePath } = await aboutApi.updateFile(file, thumbnail_storage_path);
//     await onUpdate('facility_video', { 
//       ...content, 
//       thumbnail_url: publicUrl, 
//       thumbnail_storage_path: storagePath 
//     });
//   };

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light mb-4">
//             <EditableText as="span" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} />
//           </h2>
//           <EditableText
//             as="p"
//             isAdmin={isAdmin}
//             value={subtitle || ''}
//             onSave={val => handleTextSave('subtitle', val)}
//             className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
//             useTextarea
//           />
//           <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
//             {/* The actual video link is just a_href, but the thumbnail is editable */}
//             <a href={video_url || '#'} target="_blank" rel="noopener noreferrer">
//               <EditableImage
//                 isAdmin={isAdmin}
//                 src={thumbnail_url || 'https://placehold.co/1280x720'}
//                 alt={thumbnail_alt || 'Facility video thumbnail'}
//                 onSave={handleThumbnailSave}
//                 className="w-full h-full object-cover"
//                 wrapperClassName="w-full h-full"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative">
//                   <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
//                   <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
//                 </div>
//               </div>
//             </a>
//           </div>
//           {isAdmin && (
//             <div className="mt-4 text-left max-w-lg mx-auto">
//               <label className="font-semibold text-gray-700">Video URL:</label>
//               <EditableText
//                 as="p"
//                 isAdmin={isAdmin}
//                 value={video_url || ''}
//                 onSave={val => handleTextSave('video_url', val)}
//                 className="p-2 border rounded bg-white"
//               />
//             </div>
//           )}
//         </FadeIn>
//       </div>
//     </section>
//   );
// };


// // ---
// // --- 4. STATS SECTION (Integrated & Editable)
// // ---
// const StatsSection = ({ content, isAdmin, onUpdate }) => {
//   const stats = content || [];
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   return (
//     <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {(stats).map((stat, index) => (
//             <FadeIn key={stat.id || index} delay={index * 200}>
//               <div className="p-6">
//                 <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
//                   <CountUp end={stat.value || 0} suffix={stat.suffix || ''} />
//                 </h3>
//                 <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
        
//         {isAdmin && (
//           <div className="text-center mt-12">
//             <button 
//               onClick={() => setIsManageModalOpen(true)} 
//               className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
//             >
//               <Edit size={18} /> Manage Stats
//             </button>
//           </div>
//         )}

//         {isManageModalOpen && (
//           <ListManagementModal
//             title="Manage Stats"
//             items={stats}
//             onClose={() => setIsManageModalOpen(false)}
//             onSave={(newStats) => onUpdate('about_stats', newStats)}
//             renderForm={ (item, setItem) => (
//               <>
//                 <label>Label: <input type="text" value={item.label || ''} onChange={e => setItem(i => ({...i, label: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Value (Number): <input type="number" value={item.value || 0} onChange={e => setItem(i => ({...i, value: parseFloat(e.target.value)}))} className="w-full p-1 border rounded" /></label>
//                 <label>Suffix (e.g., + or M+): <input type="text" value={item.suffix || ''} onChange={e => setItem(i => ({...i, suffix: e.target.value}))} className="w-full p-1 border rounded" /></label>
//               </>
//             )}
//             itemTitleKey="label"
//           />
//         )}
//       </div>
//     </section>
//   );
// };


// // ---
// // --- 5. CORE VALUES SECTION (Integrated & Editable)
// // ---
// const CoreValuesSection = ({ content, isAdmin, onUpdate }) => {
//   const { title, values } = content || {};
//   const [hoveredValue, setHoveredValue] = useState(values?.[0]?.title || '');
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   // Sync state if content loads
//   useEffect(() => {
//     if (values && values.length > 0) {
//       setHoveredValue(values[0].title);
//     }
//   }, [values]);
  
//   const handleTextSave = async (key, newValue) => {
//     await onUpdate('core_values', { ...content, [key]: newValue });
//   };

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light text-center mb-24 text-gray-900">
//             <EditableText as="span" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} />
//           </h2>
//         </FadeIn>
        
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
//           {/* Interactive Hub */}
//           <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
//             <div className="absolute inset-0 rounded-full bg-gray-200/70 border-2 border-gray-300"></div>
//             <div className="absolute inset-4 rounded-full bg-white border border-gray-200"></div>
            
//             <div className="absolute inset-16 md:inset-24 rounded-full bg-white flex items-center justify-center text-center p-4 border-2 border-green-500 shadow-xl shadow-green-500/20">
//               {(values || []).map(value => (
//                 <div 
//                   key={value.title}
//                   className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
//                     hoveredValue === value.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                   }`}
//                 >
//                   <DynamicIcon name={value.icon_name || 'Box'} className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
//                   <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">{value.title}</h3>
//                 </div>
//               ))}
//             </div>

//             {/* Spoke Buttons */}
//             {(values || []).map((value, index) => {
//               const angle = (index / (values?.length || 1)) * 2 * Math.PI - (Math.PI / 2); // Start at top
//               const x = Math.cos(angle) * 50 + 50; 
//               const y = Math.sin(angle) * 50 + 50;
              
//               return (
//                 <div key={value.title} className="absolute" style={{ top: `${y}%`, left: `${x}%` }}>
//                   <button
//                     className="w-16 h-16 -translate-x-8 -translate-y-8 md:w-20 md:h-20 md:-translate-x-10 md:-translate-y-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group transition-all duration-300 hover:bg-green-500 hover:border-green-400 hover:scale-110"
//                     onMouseEnter={() => setHoveredValue(value.title)}
//                   >
//                     <DynamicIcon name={value.icon_name || 'Box'} className="w-6 h-6 md:w-8 md:h-8 text-gray-500 transition-colors duration-300 group-hover:text-white" />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
          
//           {/* Description Area */}
//           <div className="relative w-full max-w-md h-48 lg:h-96">
//             {(values || []).map(value => (
//               <div 
//                 key={value.title}
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <FadeIn>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
//                   <p className="text-lg text-gray-600">{value.desc}</p>
//                 </FadeIn>
//               </div>
//             ))}
//           </div>
//         </div>

//         {isAdmin && (
//           <div className="text-center mt-24">
//             <button 
//               onClick={() => setIsManageModalOpen(true)} 
//               className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
//             >
//               <Edit size={18} /> Manage Core Values
//             </button>
//           </div>
//         )}

//         {isManageModalOpen && (
//           <ListManagementModal
//             title="Manage Core Values"
//             items={values || []}
//             onClose={() => setIsManageModalOpen(false)}
//             onSave={(newList) => onUpdate('core_values', { ...content, values: newList })}
//             renderForm={ (item, setItem) => (
//               <>
//                 <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Description: <textarea value={item.desc || ''} onChange={e => setItem(i => ({...i, desc: e.target.value}))} className="w-full p-1 border rounded" /></label>
//                 <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
//               </>
//             )}
//             itemTitleKey="title"
//           />
//         )}
//       </div>
//     </section>
//   );
// };


// // ---
// // --- 6. CTA SECTION (Integrated & Editable)
// // ---
// const CtaSection = ({ content, isAdmin, onUpdate }) => {
//   const { 
//     background_image_url, background_storage_path, 
//     title, text, buttonText, buttonLink 
//   } = content || {};
  
//   const navigate = useNavigate();
//   const [isManageModalOpen, setIsManageModalOpen] = useState(false);

//   const handleSave = async (newContentData, file) => {
//     let newContent = { ...newContentData };
    
//     if (file) {
//       const { publicUrl, storagePath } = await aboutApi.updateFile(file, background_storage_path);
//       newContent.background_image_url = publicUrl;
//       newContent.background_storage_path = storagePath;
//     }
    
//     await onUpdate('about_cta', newContent);
//   };

//   return (
//     <section 
//       className="py-24 relative" // Added relative for admin button
//       style={{ backgroundImage: `url(${background_image_url || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className="absolute inset-0 bg-black/70"></div> {/* Overlay for readability */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         <FadeIn>
//           <h2 className="text-4xl md:text-5xl font-light text-gray-200">
//             {title}
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-10">
//             {text}
//           </p>
//           <button
//             onClick={() => navigate(buttonLink || '/')}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
//           >
//             {buttonText}
//           </button>
//         </FadeIn>
//       </div>
      
//       {isAdmin && (
//         <button
//           onClick={() => setIsManageModalOpen(true)}
//           className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
//         >
//           <Edit size={18} /> Edit CTA
//         </button>
//       )}

//       {isManageModalOpen && (
//         <CtaEditModal
//           content={content}
//           onClose={() => setIsManageModalOpen(false)}
//           onSave={handleSave}
//         />
//       )}
//     </section>
//   );
// };

// // ---
// // --- 6b. Special Modal for CTA (since it's unique)
// // ---
// const CtaEditModal = ({ content, onClose, onSave }) => {
//   const [formData, setFormData] = useState(content);
//   const [file, setFile] = useState(null);
//   const [isSaving, setIsSaving] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSaving(true);
//     try {
//       await onSave(formData, file);
//       onClose();
//     } catch (err) {
//       console.error("Failed to save CTA", err);
//       alert("Save failed. See console for details.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
//       <div className="w-full max-w-2xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
//         <form onSubmit={handleSubmit}>
//           <h2 className="text-2xl font-bold mb-4">Edit Call to Action</h2>
//           <div className="flex flex-col gap-3">
//             <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-1 border rounded" /></label>
//             <label>Text: <textarea name="text" value={formData.text} onChange={handleChange} className="w-full p-1 border rounded" /></label>
//             <label>Button Text: <input type="text" name="buttonText" value={formData.buttonText} onChange={handleChange} className="w-full p-1 border rounded" /></label>
//             <label>Button Link (e.g., /contact): <input type="text" name="buttonLink" value={formData.buttonLink} onChange={handleChange} className="w-full p-1 border rounded" /></label>
//             <label>Background Image (optional): <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-1 border rounded" /></label>
//             <small>Leave blank to keep the current image: {content.background_image_url?.substring(0, 50)}...</small>
//           </div>
//           <div className="flex gap-2 mt-6">
//             <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
//             <button type="button" onClick={onClose} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


// // ---
// // --- MAIN ABOUT COMPONENT (THE "CONTROLLER")
// // ---
// export const About = () => {
//   //const { isAdmin } = useAuth();
//   const isAdmin = true; // For testing purposes, set to true. Replace with above line in real app.
//   const [pageContent, setPageContent] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const content = await aboutApi.getAboutPageContent();
//         setPageContent(content);
//       } catch (err) {
//         setError(err.message);
//         console.error(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchContent();
//   }, []);

//   const handleSectionUpdate = async (sectionName, newContent) => {
//     if (!isAdmin) return;

//     // Optimistic UI update
//     setPageContent((prev) => ({
//       ...prev,
//       [sectionName]: newContent,
//     }));

//     // Push to DB
//     try {
//       await aboutApi.updateAboutSectionContent(sectionName, newContent);
//     } catch (err) {
//       console.error('Failed to save content:', err);
//       setError('Failed to save changes. Please refresh.');
//       // TODO: Add rollback logic
//     }
//   };

//   if (isLoading) {
//     return <div className="h-screen flex items-center justify-center">Loading About Page...</div>;
//   }

//   if (error) {
//     return <div className="h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="bg-white text-gray-900 overflow-x-hidden">
//       <AboutHeroSection 
//         content={pageContent.about_hero} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//       <TimelineSection 
//         content={pageContent.timeline} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//       <FacilityVideoSection 
//         content={pageContent.facility_video} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//       <StatsSection 
//         content={pageContent.about_stats} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//       <CoreValuesSection 
//         content={pageContent.core_values} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//       <CtaSection 
//         content={pageContent.about_cta} 
//         isAdmin={isAdmin} 
//         onUpdate={handleSectionUpdate} 
//       />
//     </div>
//   );
// };

// export default About;


// // ---
// // --- ALL HELPER COMPONENT DEFINITIONS
// // ---
// // To make this file standalone, I am pasting the code for the 
// // helper components here. In a real app, you would import these.
// // ---

// /*
// *
// * --- src/components/EditableText.jsx ---
// *
// */
// // import React, { useState } from 'react';
// // import { Check, Edit, X } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // export const EditableText = ({...}) => { ... };
// // ... (Full code for EditableText) ...


// /*
// *
// * --- src/components/EditableImage.jsx ---
// *
// */
// // import React, { useState, useRef } from 'react';
// // import { Upload } from 'lucide-react';
// // export const EditableImage = ({...}) => { ... };
// // ... (Full code for EditableImage,
// //  * NOTE: I added a `wrapperClassName` prop to it to support the Hero image) ...


// /*
// *
// * --- src/components/ListManagementModal.jsx ---
// *
// */
// // import React, { useState, useRef } from 'react';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Edit, Plus, X, Trash2 } from 'lucide-react';
// // import * as aboutApi from '../api/aboutApi'; // <-- This modal needs the API
// // export const ListManagementModal = ({...}) => { ... };
// // ... (Full code for ListManagementModal,
// //  * NOTE: It must be adapted to use `aboutApi` or have the API passed in) ...


// /*
// *
// * --- srcGood/components/DynamicIcon.jsx ---
// *
// */
// // import React from 'react';
// // import * as LucideIcons from 'lucide-react';
// // export const DynamicIcon = ({...}) => { ... };
// // export const availableIconNames = [...]
// // ... (Full code for DynamicIcon) ...


// /*
// *
// * --- src/components/IconPicker.jsx ---
// *
// */
// // import React, { useState } from 'react';
// // import { DynamicIcon, availableIconNames } from './DynamicIcon';
// // export const IconPicker = ({...}) => { ... };
// // ... (Full code for IconPicker) ...


// /*
// *
// * --- src/components/common/FadeIn.jsx & CountUp.jsx ---
// *
// */
// // (These are already in your file, so they are just used)
/*
*
* === FULLY INTEGRATED & COMPLETE About.jsx (Standalone) ===
*
* This file contains all components needed for the About page,
* including helper components (Modals, EditableText, etc.)
* for admin functionality.
*
*/

import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Eye, Heart, Zap as ZapIcon, Shield, PlayCircle, 
  Edit, Plus, X, Upload, Trash2, Box
} from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

// --- API & AUTH IMPORTS ---
// Make sure these paths are correct for your project
// import { useAuth } from '../AuthContext'; 
import { useAuth } from '../context/AuthContext';
import * as aboutApi from '../api/aboutApi'; // The API for the About page
import * as LucideIcons from 'lucide-react'; // For the DynamicIcon

/*
================================================================================
|
|  SECTION 1: REUSABLE UI COMPONENTS (FadeIn, CountUp)
|  (These are the base components from your original file)
|
================================================================================
*/

/**
 * Fades in children as they scroll into view.
 */
const FadeIn = ({ children, delay = 0, duration = 0.8, x = 0, y = 20, once = true, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animates a number from 0 to 'end' when in view.
 */
const CountUp = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const endValue = end;
      const startTime = Date.now();
      const easeOutQuad = (t) => t * (2 - t);
      const frame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentCount = easedProgress * endValue;
        setCount(parseFloat(currentCount.toFixed(decimals)));
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setCount(parseFloat(endValue.toFixed(decimals)));
        }
      };
      requestAnimationFrame(frame);
    }
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
};


/*
================================================================================
|
|  SECTION 2: ADMIN HELPER COMPONENTS
|  (These are the components that provide admin functionality)
|
================================================================================
*/

/**
 * Renders text that becomes an input field for admins.
 */
const EditableText = ({
  as: Element = 'p',
  isAdmin,
  value,
  onSave,
  useTextarea = false,
  className = '',
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);

  // Sync with external value changes
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

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

  if (!isAdmin) {
    return (
      <Element className={className} {...props}>
        {value}
      </Element>
    );
  }

  if (isEditing) {
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
          className={`w-full p-2 border border-blue-500 rounded-md bg-white ${
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

  return (
    <Element
      className={`relative group ${className}`}
      {...props}
    >
      {value}
      <button
        onClick={() => setIsEditing(true)}
        className="absolute -top-1 -right-1 p-1 text-blue-600 transition-opacity bg-white/70 rounded-full opacity-0 group-hover:opacity-100"
        aria-label="Edit text"
        style={{ zIndex: 1 }} // Ensure button is on top
      >
        <Edit size={16} />
      </button>
    </Element>
  );
};

/**
 * Renders an image with an "Upload" overlay for admins.
 * This version includes `wrapperClassName` for better layout control.
 */
const EditableImage = ({ 
  isAdmin, 
  src, 
  alt, 
  onSave, 
  className, 
  wrapperClassName = '', // <-- NEW prop
  ...props 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await onSave(file);
    } catch (error) {
      console.error('Failed to save image:', error);
      alert('Image upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={`relative ${wrapperClassName}`}>
      <img src={src} alt={alt} className={className} {...props} />
      {isAdmin && (
        <>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            disabled={isUploading}
            className="absolute inset-0 z-10 flex items-center justify-center text-white transition-all bg-black bg-opacity-0 hover:bg-opacity-50"
            aria-label="Change image"
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={24} />
              <span className="text-sm">
                {isUploading ? 'Uploading...' : 'Change Image'}
              </span>
            </div>
          </button>
        </>
      )}
    </div>
  );
};

/**
 * Renders a Lucide icon component dynamically based on its string name.
 */
const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.Box; // Fallback to 'Box'
  return <IconComponent {...props} />;
};

/**
 * List of all available icon names from lucide-react.
 */
const availableIconNames = Object.keys(LucideIcons).filter(
  (key) => typeof LucideIcons[key] === 'object' && key !== 'default'
);

/**
 * A dropdown/searchable picker for Lucide icons.
 */
const IconPicker = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  
  const filteredIcons = availableIconNames.filter(name => 
    name.toLowerCase().includes(filter.toLowerCase())
  ).slice(0, 50); // Limit to 50
  
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">Icon:</label>
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-md bg-white"
      >
        <span className="flex items-center gap-2">
          {value ? <DynamicIcon name={value} className="inline-block" /> : null} 
          {value || 'Select Icon'}
        </span>
        <span>{isOpen ? 'Close' : 'Open'}</span>
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto mt-1">
          <input
            type="text"
            placeholder="Search icons..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full p-1 mb-2 border rounded"
          />
          <div className="grid grid-cols-6 gap-1">
            {filteredIcons.map(name => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  onChange(name);
                  setIsOpen(false);
                  setFilter('');
                }}
                className="p-2 border rounded hover:bg-gray-100"
                title={name}
              >
                <DynamicIcon name={name} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * A generic modal for managing a list of items (add, edit, delete).
 * This version is corrected to accept API functions as props.
 */
const ListManagementModal = ({
  title,
  items,
  onClose,
  onSave,
  renderForm,
  itemTitleKey,
  fileKeys = [],
  api // <-- NEW PROP: Pass in { updateFile, deleteFile }
}) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [editingItem, setEditingItem] = useState(null); // The item object to edit
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(null);

  const handleAddNew = () => {
    setEditingItem({ id: uuidv4(), isNew: true });
  };

  const handleEdit = (item) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
  };

  const handleDelete = async (itemToDelete) => {
    if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey] || 'this item'}"?`)) return;
    
    setIsSaving(true);
    try {
      // Check for and delete associated files
      for (const key of fileKeys) {
        const storagePath = itemToDelete[`${key}_storage_path`];
        if (storagePath && api.deleteFile) {
          await api.deleteFile(storagePath);
        }
      }
      
      const newItems = currentItems.filter(i => i.id !== itemToDelete.id);
      await onSave(newItems); // Save deletion immediately
      setCurrentItems(newItems);
      
    } catch (err) {
      console.error('Failed to delete item:', err);
      alert('Failed to delete item.');
    } finally {
      setIsSaving(false);
    }
  };

  // This handles the form submission for BOTH add and edit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!api.updateFile) {
      console.error("api.updateFile function was not provided to ListManagementModal");
      alert("Configuration error: Cannot update files.");
      return;
    }
    
    setIsSaving(true);
    let updatedItem = { ...editingItem };
    
    try {
      // Handle file uploads
      const fileInputs = formRef.current.querySelectorAll('.file-input');
      for (const input of fileInputs) {
        const file = input.files[0];
        if (file) {
          const key = input.dataset.key; // e.g., 'video' or 'logo'
          const oldStoragePath = items.find(i => i.id === updatedItem.id)?.[`${key}_storage_path`];
          
          const { publicUrl, storagePath } = await api.updateFile(file, oldStoragePath);
          updatedItem[`${key}_url`] = publicUrl;
          updatedItem[`${key}_storage_path`] = storagePath;
        }
      }
      
      delete updatedItem.isNew; // Clean up flag

      let newItemsArray;
      if (items.find(i => i.id === updatedItem.id)) { // It's an update
        newItemsArray = currentItems.map(i => i.id === updatedItem.id ? updatedItem : i);
      } else { // It's a new item
        newItemsArray = [...currentItems, updatedItem];
      }
      
      await onSave(newItemsArray); // Save the entire new array
      setCurrentItems(newItemsArray);
      setEditingItem(null); // Close the form
    } catch (err) {
      console.error(err);
      alert('Failed to save item.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose}><X /></button>
        </div>

        {/* --- Add/Edit Form --- */}
        {editingItem ? (
          <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg space-y-3">
            <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item`}</h3>
            {renderForm(editingItem, setEditingItem, editingItem.isNew)}
            <div className="flex gap-2 mt-4">
              <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
              <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 my-4 text-white bg-blue-600 rounded">
            <Plus size={18} /> Add New Item
          </button>
        )}

        {/* --- List of Current Items --- */}
        <div className="space-y-2">
          {currentItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
              <span className="font-semibold">{item[itemTitleKey] || 'New Item'}</span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} disabled={isSaving} className="p-1 text-blue-600 disabled:text-gray-400"><Edit size={16} /></button>
                <button onClick={() => handleDelete(item)} disabled={isSaving} className="p-1 text-red-600 disabled:text-gray-400"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


/*
================================================================================
|
|  SECTION 3: PAGE SECTION COMPONENTS
|  (These are the visual blocks of the About page)
|
================================================================================
*/

// --- 1. ABOUT HERO SECTION ---
const AboutHeroSection = ({ content, isAdmin, onUpdate }) => {
  const { 
    image_url, image_alt, image_storage_path, 
    title_prefix, title_suffix, subtitle 
  } = content || {};

  const handleTextSave = async (key, newValue) => {
    await onUpdate('about_hero', { ...content, [key]: newValue });
  };

  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await aboutApi.updateFile(file, image_storage_path);
    await onUpdate('about_hero', { 
      ...content, 
      image_url: publicUrl, 
      image_storage_path: storagePath 
    });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <EditableImage
        isAdmin={isAdmin}
        src={image_url || 'https://placehold.co/1920x1080'}
        alt={image_alt || 'About us hero'}
        onSave={handleImageSave}
        className="absolute z-0 w-full h-full object-cover"
        // This wrapper is crucial for the admin overlay to cover the image
        wrapperClassName="absolute z-0 w-full h-full group" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 drop-shadow-lg">
            <EditableText as="span" isAdmin={isAdmin} value={title_prefix || 'About'} onSave={val => handleTextSave('title_prefix', val)} />
            {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
              <EditableText as="span" isAdmin={isAdmin} value={title_suffix || 'Us'} onSave={val => handleTextSave('title_suffix', val)} />
            </span>
          </h1>
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={subtitle || 'Subtitle text...'}
            onSave={val => handleTextSave('subtitle', val)}
            className="mt-6 text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto"
            useTextarea
          />
        </FadeIn>
      </div>
    </section>
  );
};

// --- 2. TIMELINE SECTION ---
const TimelineSection = ({ content, isAdmin, onUpdate }) => {
  const { title, subtitle, events } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('timeline', { ...content, [key]: newValue });
  };

  return (
    <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-gray-900">
            <EditableText as="span" isAdmin={isAdmin} value={title || 'Our Journey'} onSave={val => handleTextSave('title', val)} />
          </h2>
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={subtitle || 'Subtitle...'}
            onSave={val => handleTextSave('subtitle', val)}
            className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-24"
            useTextarea
          />
        </FadeIn>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>
          
          {(events || []).map((event, index) => (
            <FadeIn key={event.id || index} triggerOnce={true}>
              <div className="relative mb-12 flex items-center md:w-full group">
                <div className="absolute left-4 md:left-1/half -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-green-500 flex items-center justify-center transition-all duration-300 group-hover:border-teal-400 group-hover:scale-110">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className={`w-full p-8 bg-white border border-gray-200 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  } md:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-xl hover:border-gray-300`}>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-2">{event.year}</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Timeline
            </button>
          </div>
        )}

        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Timeline Events"
            items={events || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('timeline', { ...content, events: newList })}
            api={{ updateFile: aboutApi.updateFile, deleteFile: aboutApi.deleteFile }} // <-- Pass API functions
            renderForm={ (item, setItem) => (
              <>
                <label>Year: <input type="number" value={item.year || ''} onChange={e => setItem(i => ({...i, year: parseInt(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.desc || ''} onChange={e => setItem(i => ({...i, desc: e.target.value}))} className="w-full p-1 border rounded" /></label>
              </>
            )}
            itemTitleKey="title"
          />
        )}
      </div>
    </section>
  );
};

// --- 3. FACILITY VIDEO SECTION ---
const FacilityVideoSection = ({ content, isAdmin, onUpdate }) => {
  const { 
    title, subtitle, thumbnail_url, 
    thumbnail_alt, thumbnail_storage_path, video_url 
  } = content || {};

  const handleTextSave = async (key, newValue) => {
    await onUpdate('facility_video', { ...content, [key]: newValue });
  };
  
  const handleThumbnailSave = async (file) => {
    const { publicUrl, storagePath } = await aboutApi.updateFile(file, thumbnail_storage_path);
    await onUpdate('facility_video', { 
      ...content, 
      thumbnail_url: publicUrl, 
      thumbnail_storage_path: storagePath 
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            <EditableText as="span" isAdmin={isAdmin} value={title || 'Our Facility'} onSave={val => handleTextSave('title', val)} />
          </h2>
          <EditableText
            as="p"
            isAdmin={isAdmin}
            value={subtitle || 'Subtitle...'}
            onSave={val => handleTextSave('subtitle', val)}
            className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
            useTextarea
          />
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-200">
            {/* The actual video link is just a_href, but the thumbnail is editable */}
            <a href={video_url || '#'} target="_blank" rel="noopener noreferrer" aria-label="Play facility video">
              <EditableImage
                isAdmin={isAdmin}
                src={thumbnail_url || 'https://placehold.co/1280x720'}
                alt={thumbnail_alt || 'Facility video thumbnail'}
                onSave={handleThumbnailSave}
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
                </div>
              </div>
            </a>
          </div>
          {isAdmin && (
            <div className="mt-4 text-left max-w-full mx-auto p-4 bg-gray-100 rounded-lg">
              <label className="block text-sm font-medium text-gray-700">Video URL (e.g., YouTube, Vimeo link):</label>
              <EditableText
                as="p"
                isAdmin={isAdmin}
                value={video_url || ''}
                onSave={val => handleTextSave('video_url', val)}
                className="p-2 border rounded bg-white text-gray-900"
              />
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

// --- 4. STATS SECTION ---
const StatsSection = ({ content, isAdmin, onUpdate }) => {
  const stats = content || [];
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white" style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Circuit+BG&font=inter')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {(stats).map((stat, index) => (
            <FadeIn key={stat.id || index} delay={index * 200}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  <CountUp end={stat.value || 0} suffix={stat.suffix || ''} />
                </h3>
                <p className="text-2xl text-gray-500 mt-2">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Stats
            </button>
          </div>
        )}

        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Stats"
            items={stats}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newStats) => onUpdate('about_stats', newStats)}
            api={{ updateFile: aboutApi.updateFile, deleteFile: aboutApi.deleteFile }} // <-- Pass API functions
            renderForm={ (item, setItem) => (
              <>
                <label>Label: <input type="text" value={item.label || ''} onChange={e => setItem(i => ({...i, label: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Value (Number): <input type="number" value={item.value || 0} onChange={e => setItem(i => ({...i, value: parseFloat(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Suffix (e.g., + or M+): <input type="text" value={item.suffix || ''} onChange={e => setItem(i => ({...i, suffix: e.target.value}))} className="w-full p-1 border rounded" /></label>
              </>
            )}
            itemTitleKey="label"
          />
        )}
      </div>
    </section>
  );
};

// --- 5. CORE VALUES SECTION ---
const CoreValuesSection = ({ content, isAdmin, onUpdate }) => {
  const { title, values } = content || {};
  const [hoveredValue, setHoveredValue] = useState(values?.[0]?.title || '');
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  // Sync state if content loads or changes
  useEffect(() => {
    if (!hoveredValue && values && values.length > 0) {
      setHoveredValue(values[0].title);
    }
  }, [values, hoveredValue]);
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('core_values', { ...content, [key]: newValue });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 text-gray-900">
            <EditableText as="span" isAdmin={isAdmin} value={title || 'Our Core Values'} onSave={val => handleTextSave('title', val)} />
          </h2>
        </FadeIn>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          {/* Interactive Hub */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gray-200/70 border-2 border-gray-300"></div>
            <div className="absolute inset-4 rounded-full bg-white border border-gray-200"></div>
            
            <div className="absolute inset-16 md:inset-24 rounded-full bg-white flex items-center justify-center text-center p-4 border-2 border-green-500 shadow-xl shadow-green-500/20">
              {(values || []).map(value => (
                <div 
                  key={value.title}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                    hoveredValue === value.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <DynamicIcon name={value.icon_name || 'Box'} className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">{value.title}</h3>
                </div>
              ))}
            </div>

            {/* Spoke Buttons */}
            {(values || []).map((value, index) => {
              const angle = (index / (values?.length || 1)) * 2 * Math.PI - (Math.PI / 2); // Start at top
              const x = Math.cos(angle) * 50 + 50; 
              const y = Math.sin(angle) * 50 + 50;
              
              return (
                <div key={value.title} className="absolute" style={{ top: `${y}%`, left: `${x}%` }}>
                  <button
                    className="w-16 h-16 -translate-x-8 -translate-y-8 md:w-20 md:h-20 md:-translate-x-10 md:-translate-y-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group transition-all duration-300 hover:bg-green-500 hover:border-green-400 hover:scale-110"
                    onMouseEnter={() => setHoveredValue(value.title)}
                  >
                    <DynamicIcon name={value.icon_name || 'Box'} className="w-6 h-6 md:w-8 md:h-8 text-gray-500 transition-colors duration-300 group-hover:text-white" />
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Description Area */}
          <div className="relative w-full max-w-md h-48 lg:h-96">
            {(values || []).map(value => (
              <div 
                key={value.title}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <FadeIn>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600">{value.desc}</p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {isAdmin && (
          <div className="text-center mt-24">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Core Values
            </button>
          </div>
        )}

        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Core Values"
            items={values || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('core_values', { ...content, values: newList })}
            api={{ updateFile: aboutApi.updateFile, deleteFile: aboutApi.deleteFile }} // <-- Pass API functions
            renderForm={ (item, setItem) => (
              <>
                <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.desc || ''} onChange={e => setItem(i => ({...i, desc: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} />
              </>
            )}
            itemTitleKey="title"
          />
        )}
      </div>
    </section>
  );
};

// --- 6. CTA SECTION ---
const CtaSection = ({ content, isAdmin, onUpdate }) => {
  const { 
    background_image_url, background_storage_path, 
    title, text, buttonText, buttonLink 
  } = content || {};
  
  const navigate = useNavigate();
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  // This save handler is passed to the modal
  const handleSave = async (newContentData, file) => {
    let newContent = { ...newContentData };
    
    if (file) {
      const { publicUrl, storagePath } = await aboutApi.updateFile(file, background_storage_path);
      newContent.background_image_url = publicUrl;
      newContent.background_storage_path = storagePath;
    }
    
    await onUpdate('about_cta', newContent);
  };

  return (
    <section 
      className="py-24 relative" 
      style={{ backgroundImage: `url(${background_image_url || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* This overlay is part of the design */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light text-gray-200">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-10">
            {text}
          </p>
          <button
            onClick={() => navigate(buttonLink || '/')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            {buttonText}
          </button>
        </FadeIn>
      </div>
      
      {isAdmin && (
        <button
          onClick={() => setIsManageModalOpen(true)}
          className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <Edit size={18} /> Edit CTA
        </button>
      )}

      {isManageModalOpen && (
        <CtaEditModal
          content={content}
          onClose={() => setIsManageModalOpen(false)}
          onSave={handleSave} // Pass the save handler
        />
      )}
    </section>
  );
};

// --- 6b. Special Modal for CTA (since it's a unique section) ---
const CtaEditModal = ({ content, onClose, onSave }) => {
  const [formData, setFormData] = useState(content);
  const [file, setFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(formData, file); // onSave is the function passed from CtaSection
      onClose();
    } catch (err) {
      console.error("Failed to save CTA", err);
      alert("Save failed. See console for details.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Edit Call to Action</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Text:</label>
            <textarea name="text" value={formData.text} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Button Text:</label>
            <input type="text" name="buttonText" value={formData.buttonText} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Button Link (e.g., /contact):</label>
            <input type="text" name="buttonLink" value={formData.buttonLink} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Background Image (optional):</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
            <small className="text-gray-500">Leave blank to keep the current image: {content.background_image_url?.substring(0, 50)}...</small>
          </div>
          <div className="flex gap-2 mt-6">
            <button type="submit" disabled={isSaving} className="px-4 py-2 text-white bg-green-600 rounded-md">{isSaving ? 'Saving...' : 'Save'}</button>
            <button type="button" onClick={onClose} className="px-4 py-2 text-white bg-gray-500 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};


/*
================================================================================
|
|  SECTION 4: MAIN ABOUT PAGE CONTROLLER
|  (This is the main component that fetches data and renders sections)
|
================================================================================
*/
export const About = () => {
  const { isAdmin } = useAuth();
  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await aboutApi.getAboutPageContent();
        setPageContent(content);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleSectionUpdate = async (sectionName, newContent) => {
    if (!isAdmin) return;

    // 1. Optimistic UI update
    setPageContent((prev) => ({
      ...prev,
      [sectionName]: newContent,
    }));

    // 2. Push to DB
    try {
      await aboutApi.updateAboutSectionContent(sectionName, newContent);
    } catch (err) {
      console.error('Failed to save content:', err);
      setError('Failed to save changes. Please refresh.');
      // You could add rollback logic here by re-fetching all content
    }
  };

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading About Page...</div>;
  }

  if (error) {
    return <div className="h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  // Render all sections only when pageContent is not null
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {pageContent && (
        <>
          <AboutHeroSection 
            content={pageContent.about_hero} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
          <TimelineSection 
            content={pageContent.timeline} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
          <FacilityVideoSection 
            content={pageContent.facility_video} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
          <StatsSection 
            content={pageContent.about_stats} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
          <CoreValuesSection 
            content={pageContent.core_values} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
          <CtaSection 
            content={pageContent.about_cta} 
            isAdmin={isAdmin} 
            onUpdate={handleSectionUpdate} 
          />
        </>
      )}
    </div>
  );
};

export default About;