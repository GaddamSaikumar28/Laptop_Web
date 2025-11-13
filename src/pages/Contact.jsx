
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertTriangle, 
  ChevronDown, ArrowRight, User, Briefcase, Building, Edit, X, Trash2, Eye
} from 'lucide-react';
import { FadeIn } from '../components/common/FadeIn';

// --- Admin Imports ---
import { useAuth } from '../context/AuthContext'; // UPDATE PATH AS NEEDED
import { contactApi } from '../api/contactApi'; // Use the new API
import { EditableText } from '../components/common/EditableText';
import { ListManagementModal } from '../components/common/ListManagementModal';
import { IconPicker } from '../components/common/IconPicker';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { v4 as uuidv4 } from 'uuid';

// === HELPER ADMIN COMPONENTS ===

const AdminEditButton = ({ onClick, text = 'Edit' }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-1"
  >
    <Edit size={14} /> {text}
  </button>
);

// --- Animated Form Input (No changes needed) ---
const FormInput = ({ id, label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className={`absolute -top-2.5 left-4 px-1 text-sm z-10 transition-colors duration-300
                    ${isFocused ? 'text-green-600' : 'text-gray-500'}
                    ${props.type === 'textarea' ? 'bg-white' : 'bg-gray-50'}
                  `}
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
        <motion.input
          id={id}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
            borderColor: isFocused ? '#10B981' : '#D1D5DB'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    </div>
  );
};

// --- Animated Text Area (No changes needed) ---
const FormTextarea = ({ id, label, icon: Icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className={`absolute -top-2.5 left-4 bg-white px-1 text-sm z-10 transition-colors duration-300
                    ${isFocused ? 'text-green-600' : 'text-gray-500'}
                  `}
      >
        {label}
      </label>
      <div className="relative">
        <Icon className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
        <motion.textarea
          id={id}
          className="w-full bg-white border border-gray-300 rounded-lg py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
          rows={5}
          style={{
            boxShadow: isFocused ? '0 0 15px rgba(16, 185, 129, 0.3)' : 'none',
            borderColor: isFocused ? '#10B981' : '#D1D5DB'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        ></motion.textarea>
      </div>
    </div>
  );
};

// --- FAQ Section (Refactored) ---
const FAQSection = ({ data, isAdmin, onTextSave, onListEdit }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full relative">
      {isAdmin && <AdminEditButton onClick={() => onListEdit('faq')} text="Edit FAQs" />}
      <FadeIn>
        <EditableText
          as="h2"
          isAdmin={isAdmin}
          value={data.title_prefix}
          onSave={onTextSave('faq', 'title_prefix')}
          className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900"
        >
          {data.title_prefix}{' '}
          <EditableText
            as="span"
            isAdmin={isAdmin}
            value={data.title_suffix_gradient}
            onSave={onTextSave('faq', 'title_suffix_gradient')}
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
          />
        </EditableText>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          {data.faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => handleClick(index)}
                className="flex justify-between items-center w-full py-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-green-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

// --- NEW Admin Modal for Submissions ---
const SubmissionsModal = ({ onClose, submissions, onDelete }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Form Submissions</h2>
          <button onClick={onClose}><X /></button>
        </div>
        
        {selected ? (
          // Detail View
          <div className="mt-4">
            <button onClick={() => setSelected(null)} className="text-sm text-blue-600 mb-4">&larr; Back to list</button>
            <h3 className="text-xl font-semibold">{selected.subject}</h3>
            <p className="text-sm text-gray-500">From: {selected.name} ({selected.email})</p>
            <p className="text-sm text-gray-500 mb-4">Received: {new Date(selected.created_at).toLocaleString()}</p>
            <div className="p-4 bg-gray-100 rounded border whitespace-pre-wrap">
              {selected.message}
            </div>
            <button
              onClick={() => onDelete(selected.id)}
              className="mt-4 flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        ) : (
          // List View
          <div className="space-y-2 mt-6">
            {submissions.length === 0 && <p>No submissions yet.</p>}
            {submissions.map(sub => (
              <div key={sub.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className={`font-semibold ${!sub.is_read ? 'text-green-700' : ''}`}>{sub.subject || '(No Subject)'}</span>
                  <span className="text-sm text-gray-600 ml-2">from {sub.name}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => {
                    setSelected(sub);
                    if (!sub.is_read) {
                      contactApi.updateSubmission(sub.id, { is_read: true });
                    }
                  }} className="p-1 text-blue-600"><Eye size={16} /></button>
                  <button onClick={() => onDelete(sub.id)} className="p-1 text-red-600"><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


// --- Main Contact Page Component ---
export const Contact = () => {
  //const { isAdmin } = useAuth(); // UNCOMMENT THIS
   const isAdmin = true; // For testing
  
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null); // 'channels', 'form_info', 'faq'
  const [formState, setFormState] = useState('idle');
  
  // State for admin submissions modal
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  // --- Data Fetching ---
  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await contactApi.getContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load contact content', err);
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
      await contactApi.updateSectionContent(sectionName, newContent);
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
  
  // --- Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      await contactApi.submitForm(formData);
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 3000); // Reset after 3s
    } catch (err) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };
  
  // --- Admin Submission Management ---
  const handleViewSubmissions = async () => {
    if (!isAdmin) return;
    try {
      const data = await contactApi.getSubmissions();
      setSubmissions(data);
      setShowSubmissions(true);
    } catch (err) {
      alert('Failed to load submissions.');
    }
  };

  const handleDeleteSubmission = async (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await contactApi.deleteSubmission(id);
        setSubmissions(submissions.filter(s => s.id !== id));
      } catch (err) {
        alert('Failed to delete submission.');
      }
    }
  };

  // --- Modal Form Renderer ---
  const renderModalForm = (item, setItem) => {
    switch (modal) {
      case 'channels':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Subtitle: <input type="text" className="w-full p-1 border rounded" value={item.subtitle || ''} onChange={e => setItem({...item, subtitle: e.target.value})} /></label>
            <label>Link Text: <input type="text" className="w-full p-1 border rounded" value={item.link_text || ''} onChange={e => setItem({...item, link_text: e.target.value})} /></label>
            <label>Link Href: <input type="text" className="w-full p-1 border rounded" value={item.link_href || ''} onChange={e => setItem({...item, link_href: e.target.value})} /></label>
          </>
        );
      case 'form_info':
        return (
          <>
            <label>Icon: <IconPicker value={item.icon_name} onChange={name => setItem({...item, icon_name: name})} /></label>
            <label>Title: <input type="text" className="w-full p-1 border rounded" value={item.title || ''} onChange={e => setItem({...item, title: e.target.value})} /></label>
            <label>Text: <input type="text" className="w-full p-1 border rounded" value={item.text || ''} onChange={e => setItem({...item, text: e.target.value})} /></label>
          </>
        );
      case 'faq':
        return (
          <>
            <label>Question: <input type="text" className="w-full p-1 border rounded" value={item.q || ''} onChange={e => setItem({...item, q: e.target.value})} /></label>
            <label>Answer: <textarea className="w-full p-1 border rounded" value={item.a || ''} onChange={e => setItem({...item, a: e.target.value})} /></label>
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
      
      {/* Admin Button to View Submissions */}
      {isAdmin && (
        <button
          onClick={handleViewSubmissions}
          className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all flex items-center gap-2"
        >
          <Eye size={18} /> View Submissions
        </button>
      )}
      
      {/* --- 1. Hero Section --- */}
      <section 
        className="relative py-32 md:py-48 flex items-center justify-center text-center bg-gray-50"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/f5f5f5/cccccc?text=Subtle+Grid+BG&font=inter')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <EditableText
              as="h1"
              isAdmin={isAdmin}
              value={content.hero.title_prefix}
              onSave={handleTextSave('hero', 'title_prefix')}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6"
            >
              {content.hero.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.hero.title_suffix_gradient}
                onSave={handleTextSave('hero', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
            <EditableText
              as="p"
              isAdmin={isAdmin}
              value={content.hero.subtitle}
              onSave={handleTextSave('hero', 'subtitle')}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
              useTextarea
            />
          </FadeIn>
        </div>
      </section>

      {/* --- 2. Contact Channels Section --- */}
      <section className="py-24 bg-white relative">
        {isAdmin && <AdminEditButton onClick={() => setModal('channels')} text="Edit Channels" />}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.channels.cards.map((card, index) => (
              <FadeIn key={card.id} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <DynamicIcon name={card.icon_name} className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.subtitle}</p>
                  <a href={card.link_href} className="font-semibold text-green-600 hover:text-green-500">{card.link_text}</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Contact Form Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info */}
            <div className="lg:mt-8 relative">
              {isAdmin && <AdminEditButton onClick={() => setModal('form_info')} text="Edit Info" />}
              <FadeIn>
                <EditableText
                  as="h2"
                  isAdmin={isAdmin}
                  value={content.form_info.title}
                  onSave={handleTextSave('form_info', 'title')}
                  className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
                />
                <EditableText
                  as="p"
                  isAdmin={isAdmin}
                  value={content.form_info.subtitle}
                  onSave={handleTextSave('form_info', 'subtitle')}
                  className="text-xl text-gray-600 mb-12"
                  useTextarea
                />
                <div className="space-y-6">
                  {content.form_info.items.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <DynamicIcon name={item.icon_name} className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            {/* Right Column: Form */}
            <FadeIn delay={0.2}>
              <form 
                onSubmit={handleSubmit} 
                className="w-full bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
              >
                <div className="space-y-8">
                  <FormInput id="name" label="Full Name" icon={User} type="text" required />
                  <FormInput id="email" label="Email Address" icon={Mail} type="email" required />
                  <FormInput id="subject" label="Subject" icon={Briefcase} type="text" />
                  <FormTextarea id="message" label="Your Message" icon={Send} required />
                  
                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
                                ${formState === 'loading' && 'bg-gray-400 cursor-not-allowed'}
                                ${formState === 'idle' && 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20 hover:scale-105'}
                                ${formState === 'success' && 'bg-emerald-600'}
                                ${formState === 'error' && 'bg-red-600'}
                              `}
                    disabled={formState === 'loading'}
                    whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                  >
                    {formState === 'idle' && <><Send className="w-5 h-5 mr-3" /> Send Message</>}
                    {formState === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Sending...</>}
                    {formState === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Message Sent!</>}
                    {formState === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Error! Try Again.</>}
                  </motion.button>
                </div>
              </form>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- 4. FAQ Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FAQSection 
            data={content.faq}
            isAdmin={isAdmin}
            onTextSave={handleTextSave}
            onListEdit={setModal}
          />
        </div>
      </section>

      {/* --- 5. Map Section --- */}
      <section id="map" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <FadeIn>
            <EditableText
              as="h2"
              isAdmin={isAdmin}
              value={content.map.title_prefix}
              onSave={handleTextSave('map', 'title_prefix')}
              className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900"
            >
              {content.map.title_prefix}{' '}
              <EditableText
                as="span"
                isAdmin={isAdmin}
                value={content.map.title_suffix_gradient}
                onSave={handleTextSave('map', 'title_suffix_gradient')}
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600"
              />
            </EditableText>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
              <iframe
                src={content.map.map_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1] opacity-90"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* --- Admin Modals --- */}
      
      {/* Content CMS Modal */}
      {modal && (
        <ListManagementModal
          title={`Manage ${modal.replace('_', ' ')}`}
          items={
            modal === 'channels' ? content.channels.cards :
            modal === 'form_info' ? content.form_info.items :
            content.faq.faqs
          }
          itemTitleKey={
            modal === 'faq' ? 'q' : 'title'
          }
          onClose={() => setModal(null)}
          renderForm={renderModalForm}
          onSave={async (newItems) => {
            let sectionName = modal;
            let listKey = 'items';
            
            if (modal === 'channels') {
              listKey = 'cards';
            } else if (modal === 'form_info') {
              listKey = 'items';
            } else if (modal === 'faq') {
              listKey = 'faqs';
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
      
      {/* Submissions Viewer Modal */}
      {isAdmin && showSubmissions && (
        <SubmissionsModal 
          onClose={() => setShowSubmissions(false)}
          submissions={submissions}
          onDelete={handleDeleteSubmission}
        />
      )}

    </div>
  );
};