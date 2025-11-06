
import React from 'react';
import { Link } from 'react-router-dom';
// import { ECycleGreenLogo } from '../common/Logo'; // Assuming this is your logo component
import { ECycleGreenLogo } from '../common/Logo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Reusable Animated Link Item (Updated for Dark BG) ---
const FooterLink = ({ path, name }) => (
  <li>
    <motion.div
      whileHover={{ x: 5, color: '#34D399' }} // emerald-400
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Link to={path} className="text-sm">
        {name}
      </Link>
    </motion.div>
  </li>
);

// --- Reusable Social Icon (Updated for Dark BG) ---
const SocialIcon = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Dark mode styles
    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400"
    whileHover={{ 
      scale: 1.1,
      background: 'linear-gradient(to right, #10B981, #0D9488)', // green-500 to teal-600
      color: '#ffffff',
      borderColor: '#10B981'
    }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export const Footer = () => {
  const supportLinks = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Modern Slavery', path: '/modern-slavery' },
    { name: 'UK Battery & WEEE Regulations', path: '/regulations' },
    { name: 'ISO & OHSAS Certifications', path: '/certifications' },
    { name: 'Quality Policy', path: '/quality-policy' },
    { name: 'Warranty Information', path: '/warranty' },
  ];
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Laptops', path: '/laptops' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    // --- Background changed to dark gradient, text color to light gray ---
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-400 pt-24 pb-12 overflow-hidden">
      
      {/* --- Advanced: Animated Gradient Top Border (now highly visible) --- */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: 'linear-gradient(90deg, #10B981, #0D9488, #06B6D4, #10B981)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%', '0% 50%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* --- Column 1: Logo & New Feature (Newsletter) --- */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <ECycleGreenLogo /> {/* Your logo component (ensure it's light-mode compatible) */}
            <p className="text-sm max-w-xs">
              The world's leading BSI Kitemark certified remanufacturer of
              laptops, promoting a circular economy.
            </p>
            
            {/* --- New Feature: Newsletter (Dark Mode) --- */}
            <form className="space-y-3">
              {/* Heading updated to white */}
              <h3 className="text-lg font-semibold text-white tracking-wider">Stay in the loop</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  // Input updated for dark mode
                  className="w-full bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <motion.button
                  type="submit"
                  className="p-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-r-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </form>
          </div>
          
          {/* --- Column 2: Company Links --- */}
          <div className="space-y-4">
            {/* Gradient Heading (Updated to light gradient) */}
            <h3 className="text-lg font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Company</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <FooterLink key={link.name} path={link.path} name={link.name} />
              ))}
            </ul>
          </div>
          
          {/* --- Column 3: Support Links --- */}
          <div className="space-y-4">
            {/* Gradient Heading (Updated to light gradient) */}
            <h3 className="text-lg font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <FooterLink key={link.name} path={link.path} name={link.name} />
              ))}
            </ul>
          </div>

          {/* --- Column 4: Contact & New Feature (Socials) --- */}
          <div className="space-y-6">
            {/* Gradient Heading (Updated to light gradient) */}
            <h3 className="text-lg font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                {/* Icon color updated to be brighter */}
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-green-500" />
                <span>Unit E, Railway Triangle, Walton Road, Portsmouth, PO6 1TY, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-green-500" />
                <span>+44 (0)2392 530290</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-green-500" />
                <span>info@ECycleGreen.co.uk</span>
              </li>
            </ul>
            
            {/* --- New Feature: Social Icons --- */}
            <div className="flex space-x-4 pt-4">
              <SocialIcon icon={Twitter} href="https://twitter.com" />
              <SocialIcon icon={Linkedin} href="https://linkedin.com" />
              <SocialIcon icon={Facebook} href="https://facebook.com" />
            </div>
          </div>
        </div>
        
        {/* --- Bottom Bar (Updated for Dark BG) --- */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} ECycleGreen. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};