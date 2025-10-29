import React from 'react';
import { Link } from 'react-router-dom';
// import { EonCircularLogo } from '../common/EonCircularLogo';
import { EonCircularLogo } from '../common/Logo';
import { Award, Recycle, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
//   const supportLinks = [
//     'Terms & Conditions', 'Privacy Policy', 'Modern Slavery', 
//     'UK Battery & WEEE Regulations', 'ISO & OHSAS Certifications', 
//     'Quality Policy', 'Warranty Information'
//   ];

const supportLinks = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' }, // <-- UPDATED
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
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Certs */}
          <div className="space-y-4">
            <Link 
              to="/"
              className="flex items-center cursor-pointer"
            >
              <EonCircularLogo className="w-10 h-10" />
              <span className="text-white text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
            </Link>
            <p className="text-sm">Powering the future with sustainable technology.</p>
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white text-xs text-center p-1">
                <Award size={20} className="mb-1 text-cyan-400"/> ISO 9001 Certified
              </div>
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-white text-xs text-center p-1">
                <Recycle size={20} className="mb-1 text-green-400"/> R2 Certified Recycler
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wider">Navigate</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors hover:translate-x-1 duration-200">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wider">Support</h3>
            {/* <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link}>
            
                  <a href="#" className="hover:text-white transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul> */}
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.name}>
                  {/* Use Link for internal routes */}
                  <Link to={link.path} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <span>Unit E, Railway Triangle, Walton Road, Portsmouth, PO6 1TY, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <span>+44 (0)2392 530290</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400" />
                <span>info@eoncircular.co.uk</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} EonCircular. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
