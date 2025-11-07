// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FadeIn } from '../components/common/FadeIn'; // Using path from your file structure
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight,
//   Check,
//   X,
//   Recycle,
//   Globe,
//   DollarSign,
//   Heart,
//   Zap,
//   // Icons for categories
//   Laptop,
//   Smartphone,
//   Server,
//   Printer,
//   Monitor,
//   Headphones,
//   HardDrive,
//   Battery,
//   Cable,
//   Tv,
//   Microwave,
//   Info
// } from 'lucide-react';

// // --- Hero Section ---
// const HeroSection = () => (
//   <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
//     <FadeIn>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//           {/* Left Column (Text) */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               What We Accept
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mb-10">
//               We responsibly recycle a wide range of electronic waste. See our comprehensive list of accepted items below.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/contact?subject=recycling_pickup"
//                 className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//               >
//                 Schedule a Pickup
//               </Link>
//               <Link
//                 to="/services/drop-off-box"
//                 className="inline-block bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-gray-200"
//               >
//                 Find a Drop-Off Box
//               </Link>
//             </div>
//           </div>

//           {/* Right Column (Image) */}
//           <motion.div 
//             className="mt-12 lg:mt-0"
//             whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
//           >
//             <img 
//               src="https://placehold.co/800x600/166534/f0fdf4?text=Accepted+E-Waste&font=inter"
//               alt="Accepted E-Waste"
//               className="rounded-lg shadow-xl w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </FadeIn>
//   </section>
// );

// // --- Accepted Items Grid ---
// const AcceptedItemsGrid = () => {
//   const categories = [
//     { name: "Computers & Laptops", icon: Laptop, items: ["Desktops", "Laptops", "MacBooks", "All-in-Ones"] },
//     { name: "Mobile Devices", icon: Smartphone, items: ["Smartphones", "Tablets", "Cell Phones", "PDAs"] },
//     { name: "Servers & Networking", icon: Server, items: ["Servers", "Routers", "Switches", "Network Racks"] },
//     { name: "Office Equipment", icon: Printer, items: ["Printers", "Scanners", "Copiers", "Fax Machines"] },
//     { name: "Monitors & Displays", icon: Monitor, items: ["LCD & LED Monitors", "Flat Screen TVs", "Projectors"] },
//     { name: "Audio & Video", icon: Headphones, items: ["Speakers", "Stereos", "DVD/VCR Players", "Cameras"] },
//     { name: "Peripherals", icon: HardDrive, items: ["Keyboards", "Mice", "Hard Drives", "UPS Systems"] },
//     { name: "Batteries & Power", icon: Battery, items: ["Laptop Batteries", "UPS Batteries", "Power Adapters"] },
//     { name: "Cables & Wires", icon: Cable, items: ["All types of power cables", "Data cables (Ethernet, USB)"] },
//     { name: "Miscellaneous", icon: Info, items: ["Circuit Boards", "Modems", "Game Consoles", "And more..."] }
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//             We Gladly Accept
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <FadeIn key={category.name} delay={index * 0.05}>
//               <motion.div
//                 whileHover={{ scale: 1.03, y: -8 }}
//                 className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white"
//               >
//                 {/* Futuristic Glow Effect */}
//                 <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
                
//                 <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
//                   <category.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.name}</h3>
//                 <ul className="space-y-2">
//                   {category.items.map(item => (
//                     <li key={item} className="flex items-center space-x-3">
//                       <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
//                       <span className="text-gray-600">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Not Accepted Section ---
// const NotAcceptedSection = () => {
//   const items = [
//     "Large Appliances (Refrigerators, AC Units)",
//     "Hazardous Waste (Chemicals, Asbestos)",
//     "Non-Electronic Waste (Furniture, Tires)",
//     "Light Bulbs (Fluorescent, LED, Incandescent)",
//     "Smoke Detectors / Carbon Monoxide Detectors",
//     "Anything containing liquids or food"
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
//             <h2 className="text-3xl font-bold text-red-900 mb-6">What We Don't Accept</h2>
//             <p className="text-lg text-red-800 mb-6">
//               For safety and regulatory reasons, we cannot accept the following items. Please contact your local municipality for proper disposal options.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
//               {items.map(item => (
//                 <div key={item} className="flex items-center space-x-3">
//                   <X className="w-5 h-5 text-red-600 flex-shrink-0" />
//                   <span className="text-red-700">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// };

// // --- Why Recycle Section ---
// const WhyRecycleSection = () => {
//   const benefits = [
//     { name: "Prevent Pollution", description: "Keep toxic materials like lead and mercury out of landfills and water.", icon: Globe },
//     { name: "Conserve Resources", description: "Recover valuable materials like gold, copper, and aluminum.", icon: Recycle },
//     { name: "Create Jobs", description: "The recycling industry supports local economies and creates jobs.", icon: DollarSign },
//     { name: "Protect Data", description: "Ensure your personal data is securely destroyed before recycling.", icon: Zap },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Why Recycling Your E-Waste Matters
//           </h2>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefits.map((benefit, index) => (
//             <FadeIn key={benefit.name} delay={index * 0.1}>
//               <motion.div
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full"
//               >
//                 <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-6">
//                   <benefit.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">{benefit.name}</h3>
//                 <p className="text-gray-300">{benefit.description}</p>
//               </motion.div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Main Page Component ---
// export const AcceptedItems = () => {
//   return (
//     <div className="bg-white">
//       <HeroSection />
//       <AcceptedItemsGrid />
//       <NotAcceptedSection />
//       <WhyRecycleSection />

//       {/* Final CTA */}
//       <FadeIn>
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="max-w-4xl mx-auto text-center px-4">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Recycle Responsibly?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Whether it's one item or a truckload, we make it easy.
//             </p>
//             <Link
//               to="/contact?subject=recycling_quote"
//               className="inline-block bg-green-600 text-white font-bold px-10 py-5 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
//             >
//               Get Your Free Quote
//             </Link>
//           </div>
//         </section>
//       </FadeIn>
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn.jsx';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, Server, ShieldCheck, Wrench, Truck, HardHat, 
  RefreshCw, ServerOff, FileText, Users, Trash2, Globe, Check, X, 
  Recycle, DollarSign, Zap, Edit, Upload
} from 'lucide-react';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { acceptedItemsApi } from '../api/acceptedItemsApi'; // Use the new API
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { EditableCenteredImage } from '../components/common/EditableMedia'; // Import from common
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS ===

// Admin button for list modals
const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);
// === END OF ADMIN HELPERS ===


// --- Hero Section (Refactored) ---
const HeroSection = ({ data, isAdmin, onTextSave, onImageSave }) => (
  <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column (Text) */}
          <div>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={data.title}
              onSave={onTextSave('hero', 'title')}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={data.subtitle}
              onSave={onTextSave('hero', 'subtitle')}
              className="text-xl text-gray-600 max-w-2xl mb-10"
              useTextarea
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact?subject=recycling_pickup"
                className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
              >
                Schedule a Pickup
              </Link>
              <Link
                to="/services/drop-off-box"
                className="inline-block bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-gray-200"
              >
                Find a Drop-Off Box
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <motion.div 
            className="mt-12 lg:mt-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <EditableCenteredImage
              isAdmin={isAdmin}
              src={data.image_url}
              alt={data.image_alt}
              onSave={onImageSave('hero', 'image')}
              className="rounded-lg shadow-xl w-full h-full object-cover"
              imgClassName="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// --- Accepted Items Grid (Refactored) ---
const AcceptedItemsGrid = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('accepted_items')} text="Edit Categories" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('accepted_items', 'title')}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl h-full overflow-hidden bg-white group"
              >
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl -z-10"></div>
                
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <DynamicIcon name={category.icon_name} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map(item => (
                    <li key={item} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Not Accepted Section (Refactored) ---
const NotAcceptedSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 relative">
            {isAdmin && <AdminEditButton onClick={() => onListEdit('not_accepted')} text="Edit List" />}
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={data.title}
              onSave={onTextSave('not_accepted', 'title')}
              className="text-3xl font-bold text-red-900 mb-6"
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={data.subtitle}
              onSave={onTextSave('not_accepted', 'subtitle')}
              className="text-lg text-red-800 mb-6"
              useTextarea
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {data.items.map(item => (
                <div key={item.id} className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Why Recycle Section (Refactored) ---
const WhyRecycleSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('why_recycle')} text="Edit Benefits" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <EditableText
            as="h2"
            isAdmin={isAdmin}
            value={data.title}
            onSave={onTextSave('why_recycle', 'title')}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.benefits.map((benefit, index) => (
            <FadeIn key={benefit.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full"
              >
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-6">
                  <DynamicIcon name={benefit.icon_name} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.name}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Bottom CTA Section (Refactored) ---
const BottomCTASection = ({ data, isAdmin, onTextSave }) => (
  <FadeIn>
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title}
          onSave={onTextSave('bottom_cta', 'title')}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        />
        <EditableText
          as="p"
          isAdmin={isAdmin}
          value={data.subtitle}
          onSave={onTextSave('bottom_cta', 'subtitle')}
          className="text-xl text-gray-600 mb-8"
          useTextarea
        />
        <Link
          to="/contact?subject=recycling_quote"
          className="inline-block bg-green-600 text-white font-bold px-10 py-5 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  </FadeIn>
);


// --- Main Page Component ---
export const AcceptedItems = () => {
  // const { isAdmin } = useAuth(); // UNCOMMENT THIS
  const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'accepted_items', 'not_accepted', 'why_recycle'

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await acceptedItemsApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load accepted items content', err);
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
      await acceptedItemsApi.updateSectionContent(sectionName, newContent);
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
      const { publicUrl, storagePath } = await acceptedItemsApi.updateFile(newFile, oldStoragePath);
      const newContent = {
        ...section,
        [`${field}_url`]: publicUrl,
        [`${field}_storage_path`]: storagePath,
      };
      await handleSave(sectionName, newContent);
    } catch (err) {
      console.error("Failed to update image", err);
      alert("Image update failed.");
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'accepted_items':
        return (
          <>
            <label>Category Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Items (one per line): 
              <textarea 
                className="w-full p-1 border rounded min-h-[100px]" 
                value={item.items ? item.items.join('\n') : ''} 
                onChange={e => setItem({...item, items: e.target.value.split('\n').filter(Boolean)})} 
              />
            </label>
          </>
        );
      case 'not_accepted':
        return (
          <>
            <label>Item Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
          </>
        );
      case 'why_recycle':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Benefit Name: <input type="text" className="w-full p-1 border rounded" value={item.name || ''} onChange={e => setItem({...item, name: e.target.value})} /></label>
            <label>Description: <textarea className="w-full p-1 border rounded" value={item.description || ''} onChange={e => setItem({...item, description: e.target.value})} /></label>
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
    <div className="bg-white">
      <HeroSection 
        data={content.hero}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onImageSave={handleMediaSave}
      />
      <AcceptedItemsGrid 
        data={content.accepted_items}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />
      <NotAcceptedSection 
        data={content.not_accepted}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />
      <WhyRecycleSection 
        data={content.why_recycle}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
        onListEdit={setModal}
      />
      <BottomCTASection 
        data={content.bottom_cta}
        isAdmin={isAdmin}
        onTextSave={handleTextSave}
      />

      {/* --- List Management Modal --- */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'accepted_items' ? content.accepted_items.categories :
            modal === 'not_accepted' ? content.not_accepted.items :
            content.why_recycle.benefits
          }
          itemTitleKey={
            modal === 'not_accepted' ? 'text' : 'name'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'accepted_items') {
              listKey = 'categories';
            } else if (modal === 'not_accepted') {
              listKey = 'items';
            } else if (modal === 'why_recycle') {
              listKey = 'benefits';
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