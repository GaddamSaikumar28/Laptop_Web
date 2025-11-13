
// export default Home;
/*
*
* === FULLY UPDATED AND COMPLETE Home.jsx ===
*
*/
import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, Award, Box, CheckCircle, Cpu, DatabaseZap, HardDrive,
  Laptop, Layers, Monitor, PlayCircle, Printer, Recycle, Server,
  ShieldCheck, ShoppingCart, Smartphone, Smile, Star, Trash2,
  TrendingUp, Truck, Users, Wrench, Zap, Edit, Plus, X, Upload,
} from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { FileCheck2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // npm install uuid

// --- NEW IMPORTS ---
// import { useAuth } from '../AuthContext'; // Get admin status
// Ensure this path is correct for your project structure
import * as contentApi from '../api/contentApi'; // Our new API
// import { EditableText } from '../components/EditableText'; // Our new component
// import { EditableImage } from '../components/EditableImage'; // Our new component
// import { DynamicIcon, availableIconNames } from '../components/DynamicIcon'; // Our new component
import { useAuth } from '../context/AuthContext';
import { EditableText } from '../components/common/EditableText';
import { EditableImage } from '../components/common/EditableImage';
import { DynamicIcon, availableIconNames } from '../components/common/DynamicIcon';

// --- Reusable Components (Unchanged from your file) ---
const FadeIn = ({ children, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: props.x || 0, y: props.y || 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: props.delay || 0, ease: [0.25, 0.25, 0.25, 0.75] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Container = ({ children, className = '', ...props }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
    {children}
  </div>
);

const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
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
    </span>
  );
};


// ---
// --- 1. VEDIC CAROUSEL SECTION (Dynamic & Editable)
// ---
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const VedicCarouselSection = ({ content, isAdmin, onUpdate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const slides = content || []; 

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <Fragment key={slide.id}>
          <video
            key={slide.video_url} 
            autoPlay muted loop playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === activeSlide ? 0 : -1 }}
          >
            <source src={slide.video_url} type="video/mp4" />
          </video>
        </Fragment>
      ))}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white p-4">
        <AnimatePresence mode="wait">
          {slides.length > 0 && (
            <motion.div
              key={slides[activeSlide].id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-amber-300 drop-shadow-xl"
              >
                {slides[activeSlide].title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-lg"
              >
                {slides[activeSlide].text}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  to={slides[activeSlide].link}
                  className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-lg font-medium text-black bg-amber-400 rounded-full shadow-lg transform transition-all duration-300 hover:bg-amber-300 hover:shadow-xl hover:scale-105"
                >
                  <PlayCircle size={22} />
                  {slides[activeSlide].cta}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'w-6 bg-amber-400' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* --- EDIT BUTTON --- */}
      {isAdmin && (
        <div className="absolute z-40 bottom-24 left-1/2 -translate-x-1/2">
          <button
            onClick={() => setIsManageModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Edit size={18} /> Manage Carousel
          </button>
        </div>
      )}

      {/* --- MANAGEMENT MODAL (SYNTAX CORRECTED) --- */}
      {isManageModalOpen && (
        <ListManagementModal
          title="Manage Carousel Slides"
          items={slides}
          onClose={() => setIsManageModalOpen(false)}
          onSave={(newSlides) => onUpdate('vedic_carousel', newSlides)}
          renderForm={ (item, setItem, isNew) => (
            <>
              <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>CTA Button Text: <input type="text" value={item.cta || ''} onChange={e => setItem(i => ({...i, cta: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>Link (e.g., /wisdom): <input type="text" value={item.link || ''} onChange={e => setItem(i => ({...i, link: e.target.value}))} className="w-full p-1 border rounded" /></label>
              <label>New Video File (optional): <input type="file" accept="video/mp4" data-key="video" className="w-full p-1 border rounded file-input" /></label>
              {item.video_url && <small>Current video: {item.video_url.substring(0, 50)}... Leave blank to keep.</small>}
            </>
          )}
          itemTitleKey="title"
          fileKeys={['video']}
        />
      )}
    </section>
  );
};


// ---
// --- 2. HERO SECTION (Dynamic & Editable)
// ---
const HeroSection = ({ content, isAdmin, onUpdate }) => {
  const { title, subtitle, image_url, image_storage_path } = content || {};

  const handleTextSave = async (key, newValue) => {
    const newContent = { ...content, [key]: newValue };
    await onUpdate('hero', newContent);
  };
  
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(
        file,
        image_storage_path
    );
    const newContent = {
        ...content,
        image_url: publicUrl,
        image_storage_path: storagePath
    };
    await onUpdate('hero', newContent);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <FadeIn y={0} delay={0.2} className="text-center lg:text-left">
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={title || ''}
              onSave={(newValue) => handleTextSave('title', newValue)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
              useTextarea
            />
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={subtitle || ''}
              onSave={(newValue) => handleTextSave('subtitle', newValue)}
              className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
              useTextarea
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Static buttons */}
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-green-700 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                Our Services
              </Link>
            </div>
          </FadeIn>

          {/* Right Image/Graphic */}
          <FadeIn y={0} x={30} delay={0.4} className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200 rounded-full opacity-50 filter blur-xl animate-blob animation-delay-4000"></div>
              
              <EditableImage
                isAdmin={isAdmin}
                src={image_url || 'https://placehold.co/600x500'}
                alt="E-Waste Recycling Process"
                onSave={handleImageSave}
                className="relative rounded-3xl shadow-2xl w-full"
              />
              
              {/* Floating Icon Badges (static) */}
              <motion.div 
                className="absolute -top-6 -left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ShieldCheck className="text-green-600" size={28} />
                <span className="font-semibold text-sm text-gray-700">Data Security</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Recycle className="text-green-600" size={28} />
                <span className="font-semibold text-sm text-gray-700">Zero Landfill</span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 3. STATS SECTION (Dynamic & Editable)
// ---
const StatsSection = ({ content, isAdmin, onUpdate }) => {
  const stats = content || [];
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="relative flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="absolute -top-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg">
                  <DynamicIcon name={stat.icon_name || 'Box'} className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
                <dd className="mt-8 text-5xl font-extrabold text-gray-900 tracking-tight">
                  <CountUp end={stat.value} duration={2000} decimals={stat.decimals || 0} />
                  {stat.suffix}
                </dd>
                <dt className="mt-3 text-base font-medium text-gray-500">{stat.label}</dt>
              </div>
            ))}
          </div>
        </FadeIn>
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
            onSave={(newStats) => onUpdate('stats', newStats)}
            renderForm={ (item, setItem) => (
              <>
                <label>Label: <input type="text" value={item.label || ''} onChange={e => setItem(i => ({...i, label: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Value (Number): <input type="number" value={item.value || 0} onChange={e => setItem(i => ({...i, value: parseFloat(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Suffix (e.g., + or %): <input type="text" value={item.suffix || ''} onChange={e => setItem(i => ({...i, suffix: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Decimals (e.g., 0 or 1): <input type="number" value={item.decimals || 0} onChange={e => setItem(i => ({...i, decimals: parseInt(e.target.value)}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="label"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 4. LEADING THE WAY SECTION (Dynamic & Editable)
// ---
const LeadingTheWaySection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, image_url, image_storage_path, benefits } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('leading_the_way', { ...content, [key]: newValue });
  };
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(file, image_storage_path);
    await onUpdate('leading_the_way', { ...content, image_url: publicUrl, image_storage_path: storagePath });
  };
  const handleBenefitsSave = async (newBenefits) => {
    await onUpdate('leading_the_way', { ...content, benefits: newBenefits });
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <FadeIn x={-30} className="relative">
            <EditableImage
              isAdmin={isAdmin}
              src={image_url || 'https://placehold.co/600x600'}
              alt="ECycleGreen advanced recycling facility"
              onSave={handleImageSave}
              className="rounded-3xl shadow-2xl relative z-10 w-full"
            />
          </FadeIn>
          
          {/* Content Side */}
          <FadeIn x={30} delay={0.2}>
            <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
            <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
            <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
            
            <ul className="mt-8 space-y-6">
              {(benefits || []).map(item => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    <DynamicIcon name={item.icon_name || 'Box'} className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {isAdmin && (
              <button 
                onClick={() => setIsManageModalOpen(true)} 
                className="mt-6 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Edit size={18} /> Edit Benefit List
              </button>
            )}
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Benefits"
                items={benefits}
                onClose={() => setIsManageModalOpen(false)}
                onSave={handleBenefitsSave}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Text: <textarea value={item.text || ''} onChange={e => setItem(i => ({...i, text: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
                  </>
                )}
                itemTitleKey="title"
              />
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 5. SERVICES SECTION (NOW IMPLEMENTED)
// ---
const ServicesSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('services', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {(list || []).map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="h-full p-8 bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white group">
                <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full inline-block shadow-lg">
                  <DynamicIcon name={service.icon_name || 'Box'} className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <Link to={service.link || '#'} className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Learn More <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
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
              <Edit size={18} /> Manage Services
            </button>
          </div>
        )}

        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Services"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('services', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Link (e.g., /services/itad): <input type="text" value={item.link || ''} onChange={e => setItem(i => ({...i, link: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 6. SERVICE CTA (E-WASTE ITEMS) SECTION (Dynamic & Editable)
// ---
const ServiceCtaSection = ({ content, isAdmin, onUpdate }) => {
  const { title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('ewaste_items', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 sm:py-28">
      <Container className="text-center">
        <FadeIn>
          <EditableText as="h2" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto" useTextarea />
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mt-16">
          {(list || []).map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05} className="flex flex-col items-center">
              <div className="p-5 bg-white/10 rounded-full">
                <DynamicIcon name={item.icon_name || 'Box'} className="h-10 w-10 text-green-400" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-200">{item.name}</p>
            </FadeIn>
          ))}
        </div>

        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Recycled Items
            </button>
          </div>
        )}
        
        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Recycled Items"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('ewaste_items', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 7. BENEFITS SECTION (Dynamic & Editable)
// ---
const BenefitsSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, image_url, image_storage_path, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleTextSave = async (key, newValue) => {
    await onUpdate('benefits', { ...content, [key]: newValue });
  };
  const handleImageSave = async (file) => {
    const { publicUrl, storagePath } = await contentApi.updateFile(file, image_storage_path);
    await onUpdate('benefits', { ...content, image_url: publicUrl, image_storage_path: storagePath });
  };

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <FadeIn x={-30} delay={0.2}>
            <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
            <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
            <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
            
            <ul className="mt-8 space-y-6">
              {(list || []).map(item => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-full">
                    <DynamicIcon name={item.icon_name || 'Box'} className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {isAdmin && (
              <button 
                onClick={() => setIsManageModalOpen(true)} 
                className="mt-6 flex items-center gap-2 px-4 py-2 text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Edit size={18} /> Edit Benefit List
              </button>
            )}
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Benefits List"
                items={list || []}
                onClose={() => setIsManageModalOpen(false)}
                onSave={(newList) => onUpdate('benefits', { ...content, list: newList })}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
                  </>
                )}
                itemTitleKey="title"
              />
            )}
          </FadeIn>
          
          {/* Image Side */}
          <FadeIn x={30} className="relative">
            <EditableImage
              isAdmin={isAdmin}
              src={image_url || 'https://placehold.co/600x700'}
              alt="Protecting your brand with secure e-waste recycling"
              onSave={handleImageSave}
              className="rounded-3xl shadow-2xl relative z-10 w-full"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};


// ---
// --- 8. PROCESS SECTION (Dynamic & Editable)
// ---
const ProcessSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, text, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('process', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-600" useTextarea />
        </FadeIn>
        
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gray-300 border-dashed" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {(list || []).map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.15} className="relative p-8 bg-white rounded-2xl shadow-xl z-10">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold text-green-600">{step.step}</span>
                  <DynamicIcon name={step.icon_name || 'Box'} className="h-12 w-12 text-gray-900" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.name}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Process Steps
            </button>
          </div>
        )}
        
        {isManageModalOpen && (
          <ListManagementModal
            title="Manage Process Steps"
            items={list || []}
            onClose={() => setIsManageModalOpen(false)}
            onSave={(newList) => onUpdate('process', { ...content, list: newList })}
            renderForm={ (item, setItem) => (
              <>
                <label>Step (e.g., 01): <input type="text" value={item.step || ''} onChange={e => setItem(i => ({...i, step: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Description: <textarea value={item.description || ''} onChange={e => setItem(i => ({...i, description: e.target.value}))} className="w-full p-1 border rounded" /></label>
                <label>Icon Name: <IconPicker value={item.icon_name || ''} onChange={name => setItem(i => ({...i, icon_name: name}))} /></label>
              </>
            )}
            itemTitleKey="name"
          />
        )}
      </Container>
    </section>
  );
};


// ---
// --- 9. TESTIMONIALS SECTION (Dynamic & Editable)
// ---
const TestimonialSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, title, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const testimonials = list || [];
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('testimonials', { ...content, [key]: newValue });
  };
  
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-green-600 uppercase tracking-wider" />
          <EditableText as="p" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" />
        </FadeIn>
        
        <div className="mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll hover:pause-animation">
            {[...(testimonials), ...(testimonials)].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-[300px] sm:w-[400px] lg:w-[450px] mx-4 flex-shrink-0">
                <div className="h-full flex flex-col justify-between p-8 bg-gray-50 rounded-2xl shadow-xl">
                  <div className="flex-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <blockquote className="mt-6 text-lg text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <img className="h-14 w-14 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Testimonials
            </button>
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Testimonials"
                items={testimonials}
                onClose={() => setIsManageModalOpen(false)}
                onSave={newList => onUpdate('testimonials', {...content, list: newList})}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Quote: <textarea value={item.quote || ''} onChange={e => setItem(i => ({...i, quote: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Title: <input type="text" value={item.title || ''} onChange={e => setItem(i => ({...i, title: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Avatar URL: <input type="text" value={item.avatar || ''} onChange={e => setItem(i => ({...i, avatar: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <small>Use a service like placehold.co or upload to storage and paste the URL.</small>
                  </>
                )}
                itemTitleKey="name"
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};


// ---
// --- 10. CLIENT LOGOS SECTION (Dynamic & Editable)
// ---
const ClientLogoSection = ({ content, isAdmin, onUpdate }) => {
  const { pre_title, list } = content || {};
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const logos = list || [];

  const handleTextSave = async (key, newValue) => {
    await onUpdate('client_logos', { ...content, [key]: newValue });
  };
  
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container>
        <FadeIn className="text-center">
          <EditableText as="h2" isAdmin={isAdmin} value={pre_title || ''} onSave={val => handleTextSave('pre_title', val)} className="text-base font-semibold text-gray-600 tracking-wider" />
        </FadeIn>
        
        <div className="mt-8 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max animate-scroll-logos hover:pause-animation">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="w-48 mx-8 flex-shrink-0">
                <img 
                  src={logo.logo_url} 
                  alt={logo.name} 
                  className="h-12 w-full object-contain" 
                  style={{ filter: 'grayscale(100%) opacity(60%)' }} 
                />
              </div>
            ))}
          </div>
        </div>

        {isAdmin && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsManageModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 mx-auto text-white transition-all bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <Edit size={18} /> Manage Client Logos
            </button>
            {isManageModalOpen && (
              <ListManagementModal
                title="Manage Client Logos"
                items={logos}
                onClose={() => setIsManageModalOpen(false)}
                onSave={newList => onUpdate('client_logos', {...content, list: newList})}
                renderForm={ (item, setItem) => (
                  <>
                    <label>Name: <input type="text" value={item.name || ''} onChange={e => setItem(i => ({...i, name: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>Logo URL: <input type="text" value={item.logo_url || ''} onChange={e => setItem(i => ({...i, logo_url: e.target.value}))} className="w-full p-1 border rounded" /></label>
                    <label>New Logo File (optional): <input type="file" accept="image/*" data-key="logo" className="w-full p-1 border rounded file-input" /></label>
                    <small>Uploading a file will override the URL.</small>
                  </>
                )}
                itemTitleKey="name"
                fileKeys={['logo']}
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};


// ---
// --- 11. CONTACT CTA SECTION (Dynamic & Editable)
// ---
const ContactCtaSection = ({ content, isAdmin, onUpdate }) => {
  const { title, text } = content || {};
  
  const handleTextSave = async (key, newValue) => {
    await onUpdate('contact_cta', { ...content, [key]: newValue });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Container className="py-20 sm:py-28 text-center">
        <FadeIn>
          <EditableText as="h2" isAdmin={isAdmin} value={title || ''} onSave={val => handleTextSave('title', val)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" />
          <EditableText as="p" isAdmin={isAdmin} value={text || ''} onSave={val => handleTextSave('text', val)} className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto" useTextarea />
          <div className="mt-10">
            {/* Static button */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-gray-900 bg-green-500 rounded-lg shadow-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};


// ---
// --- GENERIC HELPER COMPONENTS (MODAL, ICONPICKER)
// ---
const ListManagementModal = ({ title, items, onClose, onSave, renderForm, itemTitleKey, fileKeys = [] }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [editingItem, setEditingItem] = useState(null); // The item object to edit
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(null);

  const handleAddNew = () => {
    setEditingItem({ id: uuidv4(), isNew: true }); // Use isNew flag
  };

  const handleEdit = (item) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
  };

  const handleDelete = async (itemToDelete) => {
    if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey] || 'this item'}"?`)) return;
    
    setIsSaving(true);
    try {
      // Delete any associated files
      for (const key of fileKeys) {
        if (itemToDelete[`${key}_storage_path`]) {
          await contentApi.deleteFile(itemToDelete[`${key}_storage_path`]);
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
          
          const { publicUrl, storagePath } = await contentApi.updateFile(file, oldStoragePath);
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
          <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item`}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {renderForm(editingItem, setEditingItem, editingItem.isNew)}
            </div>
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

const IconPicker = ({ value, onChange }) => {
const [isOpen, setIsOpen] = useState(false);
const [filter, setFilter] = useState('');

const filteredIcons = availableIconNames.filter(name => 
  name.toLowerCase().includes(filter.toLowerCase())
).slice(0, 50); // Limit to 50

return (
  <div className="relative">
    <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full p-2 border rounded">
      <span>{value ? <DynamicIcon name={value} className="inline-block mr-2" /> : null} {value || 'Select Icon'}</span>
      <span>{isOpen ? 'Close' : 'Open'}</span>
    </button>
    {isOpen && (
      <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
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



const CertificateSection = ({ content, certificates, isAdmin, onSectionUpdate, onCertificatesUpdate }) => {
  const [selectedCert, setSelectedCert] = useState(null); // For viewing modal
  const [editingCert, setEditingCert] = useState(null); // For editing modal (null = closed)

  const handleUpdate = (key, value) => {
    onSectionUpdate('certificates_section', { ...content, [key]: value });
  };
  
  const handleSaveEdit = async (certData) => {
    try {
      if (editingCert && editingCert.id) {
        // Update existing certificate
        await contentApi.updateCertificateImage(editingCert.id, certData);
      } else {
        // Add new certificate
        if (!certData.newFile) {
          alert("An image is required to add a new certificate.");
          return;
        }
        await contentApi.addCertificateImage(
          certData.newFile,
          certData.caption,
          certData.sortOrder
        );
      }
      setEditingCert(null); // Close modal
      onCertificatesUpdate(); // Refetch all certificates
    } catch (error) {
      console.error("Failed to save certificate:", error);
      alert("Failed to save certificate. Check console for details.");
    }
  };

  const handleDelete = async (id, storagePath) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      try {
        await contentApi.deleteCertificateImage(id, storagePath);
        onCertificatesUpdate(); // Refetch
      } catch (error) {
        console.error("Failed to delete certificate:", error);
        alert("Failed to delete certificate. Check console for details.");
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn y={-20}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            <EditableText
              value={content?.title || 'Our Certifications & Credentials'}
              onSave={(value) => handleUpdate('title', value)}
              isAdmin={isAdmin}
              multiline={false}
              className="text-center"
            />
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            <EditableText
              value={content?.subtitle || 'We are committed to the highest standards of data security, environmental responsibility, and quality management.'}
              onSave={(value) => handleUpdate('subtitle', value)}
              isAdmin={isAdmin}
              multiline={true}
              className="text-center"
            />
          </p>
        </FadeIn>

        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${!certificates?.length && 'text-center'}`}>
          {!certificates?.length && (
            <span className="text-gray-500 dark:text-gray-400 col-span-full">
              {isAdmin ? 'Click the "Add" button to upload your first certificate.' : 'No certificates to display.'}
            </span>
          )}

          {certificates.map((cert, index) => (
            <FadeIn y={20} transition={{ delay: index * 0.1 }} key={cert.id}>
              <div className="relative group">
                {isAdmin && (
                  <div className="absolute top-2 right-2 z-20 flex space-x-2">
                    <button
                      onClick={() => setEditingCert(cert)}
                      className="p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(cert.id, cert.image_storage_path)}
                      className="p-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center p-6 text-center">
                  <FileCheck2 className="w-20 h-20 text-green-500 dark:text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.caption || 'Certificate'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Sort Order: {cert.sort_order}
                  </p>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
                  >
                    View Certificate
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}

          {isAdmin && (
            <FadeIn y={20} transition={{ delay: (certificates?.length || 0) * 0.1 }}>
              <button
                onClick={() => setEditingCert({ caption: '', sort_order: (certificates?.length || 0) + 1 })}
                className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-center text-blue-600 dark:text-blue-400 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                <Plus className="w-16 h-16 mb-2" />
                <span className="text-lg font-semibold">Add New Certificate</span>
              </button>
            </FadeIn>
          )}
        </div>
      </div>

      {/* --- Modals --- */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <EditCertificateModal
        certificate={editingCert}
        onClose={() => setEditingCert(null)}
        onSave={handleSaveEdit}
      />
    </section>
  );
};


// --- NEW MODAL COMPONENTS ---

/**
 * Certificate Viewing Modal
 */
const CertificateModal = ({ certificate, onClose }) => {
  return (
    <AnimatePresence>
      {certificate && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {certificate.caption || 'Certificate'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <img
                  src={certificate.image_url}
                  alt={certificate.caption || 'Certificate Image'}
                  className="w-full h-auto object-contain rounded"
                  onError={(e) => {
                    // Handle broken image links
                    e.target.src = 'https://placehold.co/1000x1400/f8f8f8/b0b0b0?text=Image+Not+Found';
                    e.target.alt = 'Image not found';
                  }}
                />
              </div>
              <div className="p-4 border-t dark:border-gray-700 flex justify-end">
                  <a
                    href={certificate.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open in New Tab
                  </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};


/**
 * Admin Edit/Add Certificate Modal
 */
const EditCertificateModal = ({ certificate, onClose, onSave }) => {
  const [caption, setCaption] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [newFile, setNewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  
  // Set form state when certificate prop changes
  useEffect(() => {
    if (certificate) {
      setCaption(certificate.caption || '');
      setSortOrder(certificate.sort_order || 0);
      setPreviewUrl(certificate.image_url || ''); // Show existing image
      setNewFile(null); // Reset file input
      setError('');
    }
  }, [certificate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File is too large (Max 5MB).');
        setNewFile(null);
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/gif', 'application/pdf'].includes(file.type)) {
         setError('Invalid file type. Please upload PNG, JPG, GIF, or PDF.');
         setNewFile(null);
         return;
      }
      
      setNewFile(file);
      setError('');
      
      // Create a preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(''); // No preview for PDF, etc.
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!caption) {
      setError('Caption is required.');
      setIsLoading(false);
      return;
    }
    if (certificate && !certificate.id && !newFile) {
      setError('An image is required to add a new certificate.');
      setIsLoading(false);
      return;
    }

    try {
      await onSave({
        caption,
        sortOrder: Number(sortOrder),
        newFile, // Will be null if no new file was selected
        oldStoragePath: certificate?.image_storage_path // Pass old path for deletion
      });
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {certificate && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {certificate.id ? 'Edit Certificate' : 'Add New Certificate'}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
                {error && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="caption" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Certificate Title / Caption
                  </label>
                  <input
                    type="text"
                    id="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sort Order (e.g., 1, 2, 3...)
                  </label>
                  <input
                    type="number"
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Certificate File (Image or PDF)
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg, image/gif, application/pdf"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-500 dark:text-gray-400 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center justify-center">
                      <Upload className="w-5 h-5 mr-2" />
                      <span>{newFile ? newFile.name : (certificate.id ? 'Change File (Optional)' : 'Upload File (Required)')}</span>
                    </div>
                  </button>
                </div>

                {previewUrl && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image Preview:</p>
                    <img src={previewUrl} alt="Preview" className="w-full h-auto max-h-48 object-contain rounded-md border dark:border-gray-600" />
                  </div>
                )}
                {newFile && !newFile.type.startsWith('image/') && (
                   <div className="mt-4 p-3 bg-blue-50 dark:bg-gray-700 rounded-md flex items-center text-sm text-blue-700 dark:text-blue-300">
                     <FileWarning className="w-5 h-5 mr-2 flex-shrink-0" />
                     <span>Preview is not available for this file type ({newFile.type}).</span>
                   </div>
                )}


              </form>

              <div className="p-4 border-t dark:border-gray-700 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isLoading}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit} // Trigger form submit
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};


// ---
// --- MAIN HOME COMPONENT (THE "CONTROLLER")
// ---
export const Home = () => {
  const { isAdmin } = useAuth(); // Get admin status
  //const isAdmin = true; // TEMP: Hardcoded for testing
  const [pageContent, setPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [certificates, setCertificates] = useState([]); 
  const [authReady, setAuthReady] = useState(false); 


   const fetchPageContent = async () => {
    try {
      const content = await contentApi.getHomePageContent();
      setPageContent(content);
    } catch (error) {
      console.error("Error fetching page content:", error);
    }
  };

  const fetchCertificates = async () => {
    try {
      const certs = await contentApi.getCertificateGallery();
      setCertificates(certs);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

   useEffect(() => {
    const loadAllData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchPageContent(),
        fetchCertificates()
      ]);
      setIsLoading(false);
    };
    
    // This is a proxy for auth context being ready
    // In a real app, useAuth would provide a loading state
    setAuthReady(true); 
    loadAllData();
  }, []);

  // Fetch all page content on mount
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await contentApi.getHomePageContent();
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

  // MASTER update function
  const handleSectionUpdate = async (sectionName, newContent) => {
    if (!isAdmin) return;

    // 1. Optimistic UI: Update local state immediately
    setPageContent((prev) => ({
      ...prev,
      [sectionName]: newContent,
    }));

    // 2. Push change to the database
    try {
      await contentApi.updateSectionContent(sectionName, newContent);
      // You could show a "Saved!" toast here
    } catch (err) {
      console.error('Failed to save content:', err);
      setError('Failed to save changes. Please refresh.');
      // You could implement a more robust rollback here.
    }
  };

  const handleCertificatesUpdate = () => {
    fetchCertificates(); // Just refetch the list
  };

  // Show a loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading Content...
      </div>
    );
  }

  // Show an error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error Loading Content</h2>
        <p className="mt-2">{error}</p>
        <p className="mt-4">Please check your Supabase connection and RLS policies.</p>
      </div>
    );
  }

  // Inject styles (unchanged)
  const scrollStyles = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll { animation: scroll 60s linear infinite; }
    .animate-scroll-logos { animation: scroll 40s linear infinite; }
    .hover\\:pause-animation:hover { animation-play-state: paused; }
  `;

  // Render the full page, passing content down
  return (
    <>
      <style>{scrollStyles}</style>
      <div className="bg-white text-gray-900 overflow-x-hidden">
        {/*
          *
          * Each section now gets its content, admin status,
          * and the master update function.
          *
          */}
        <VedicCarouselSection
          content={pageContent.vedic_carousel}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <HeroSection
          content={pageContent.hero}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <CertificateSection
          content={pageContent.certificates_section}
          certificates={certificates}
          isAdmin={isAdmin}
          onSectionUpdate={handleSectionUpdate}
          onCertificatesUpdate={handleCertificatesUpdate}
        />
        <StatsSection
          content={pageContent.stats}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <LeadingTheWaySection
          content={pageContent.leading_the_way}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ServicesSection
          content={pageContent.services}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ServiceCtaSection
          content={pageContent.ewaste_items}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <BenefitsSection
          content={pageContent.benefits}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ProcessSection
          content={pageContent.process}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <TestimonialSection
          content={pageContent.testimonials}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ClientLogoSection
          content={pageContent.client_logos}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
        <ContactCtaSection
          content={pageContent.contact_cta}
          isAdmin={isAdmin}
          onUpdate={handleSectionUpdate}
        />
      </div>
    </>
  );
};

export default Home;