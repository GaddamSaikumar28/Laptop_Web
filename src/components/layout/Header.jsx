
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Link, useLocation } from 'react-router-dom';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import { 
// // // // //   Menu, 
// // // // //   X, 
// // // // //   Recycle, 
// // // // //   ChevronDown, 
// // // // //   Wrench, 
// // // // //   DatabaseZap, 
// // // // //   Briefcase, 
// // // // //   HardDrive, 
// // // // //   ShieldCheck 
// // // // // } from 'lucide-react'; // Added new icons

// // // // // // Placeholder logo component to make the file self-contained
// // // // // // You can replace this with your actual Logo import
// // // // // const ECycleGreenLogo = ({ className = "" }) => (
// // // // //   <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
// // // // //     <Recycle size={24} />
// // // // //   </div>
// // // // // );

// // // // // export const Header = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// // // // //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// // // // //   // Get current page location
// // // // //   const location = useLocation();
// // // // //   const currentPagePath = location.pathname;

// // // // //   // Updated nav items to include services with children
// // // // //   const navItems = [
// // // // //     { name: 'Home', path: '/' },
// // // // //     { name: 'About Us', path: '/about' },
// // // // //     { 
// // // // //       name: 'Services', 
// // // // //       path: '/services', // Fallback path
// // // // //       children: [
// // // // //         { name: 'Laptop Repairs', path: '/services/repairs', icon: Wrench, description: 'Fast, expert repairs to get you back to work.' },
// // // // //         { name: 'Secure Data Erasure', path: '/services/data-erasure', icon: DatabaseZap, description: 'Certified data wiping for your peace of mind.' },
// // // // //         { name: 'IT Disposals (ITAD)', path: '/services/it-disposals', icon: Briefcase, description: 'Responsible and secure asset disposition.' },
// // // // //         { name: 'Device Upgrades', path: '/services/upgrades', icon: HardDrive, description: 'Boost performance with RAM and SSD upgrades.' },
// // // // //         { name: 'Extended Warranty', path: '/services/warranty', icon: ShieldCheck, description: 'Protect your investment with our extra coverage.' },
// // // // //         { name: 'WEEE Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// // // // //       ]
// // // // //     },
// // // // //     { name: 'Our Laptops', path: '/laptops' },
// // // // //     { name: 'Sustainability', path: '/sustainability' },
// // // // //     { name: 'Education', path: '/education' },
// // // // //     { name: 'Contact Us', path: '/contact' },
// // // // //   ];

// // // // //   // Close all menus on location change
// // // // //   useEffect(() => {
// // // // //     setIsMobileMenuOpen(false);
// // // // //     setIsServicesOpen(false);
// // // // //     setIsMobileServicesOpen(false);
// // // // //   }, [location]);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 10);
// // // // //     };
// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   const closeAllMenus = () => {
// // // // //     setIsMobileMenuOpen(false);
// // // // //     setIsServicesOpen(false);
// // // // //     // We keep mobile services open/closed state persistent until mobile menu is closed
// // // // //   };

// // // // //   const NavLink = ({ item }) => (
// // // // //     <Link
// // // // //       to={item.path}
// // // // //       onClick={closeAllMenus}
// // // // //       className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// // // // //         isMobileMenuOpen ? 'block w-full text-left' : ''
// // // // //       } ${
// // // // //         currentPagePath === item.path
// // // // //           ? 'text-green-600 font-semibold'
// // // // //           : 'text-gray-500 hover:text-gray-900'
// // // // //       } group`}
// // // // //     >
// // // // //       {item.name}
// // // // //       {/* UPDATED: Underline color changed to green/blue gradient */}
// // // // //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
// // // // //         currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// // // // //       }`}></span>
// // // // //     </Link>
// // // // //   );

// // // // //   return (
// // // // //     <header
// // // // //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// // // // //         isScrolled || isMobileMenuOpen ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
// // // // //       }`}
// // // // //     >
// // // // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex items-center justify-between h-20">
// // // // //           {/* Logo */}
// // // // //           <Link 
// // // // //             to="/"
// // // // //             className="flex-shrink-0 flex items-center cursor-pointer group"
// // // // //             onClick={closeAllMenus}
// // // // //           >
// // // // //             {/* Using placeholder logo */}
// // // // //             <ECycleGreenLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
// // // // //             <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">ECycleGreen</span>
// // // // //           </Link>

// // // // //           {/* Desktop Nav */}
// // // // //           <div className="hidden md:flex items-center space-x-2">
// // // // //             {navItems.map((item) => (
// // // // //               item.children ? (
// // // // //                 // Desktop Services Dropdown
// // // // //                 <div 
// // // // //                   key={item.name}
// // // // //                   className="relative"
// // // // //                   onMouseEnter={() => setIsServicesOpen(true)}
// // // // //                   onMouseLeave={() => setIsServicesOpen(false)}
// // // // //                 >
// // // // //                   <button
// // // // //                     className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
// // // // //                       currentPagePath.startsWith(item.path)
// // // // //                         ? 'text-white'
// // // // //                         : 'text-gray-400 hover:text-white'
// // // // //                     } group`}
// // // // //                   >
// // // // //                     {item.name}
// // // // //                     <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // // //                   </button>

               
// // // // //                   <AnimatePresence>
// // // // //     {isServicesOpen && (
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 10 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         exit={{ opacity: 0, y: 10 }}
// // // // //         transition={{ duration: 0.2 }}
// // // // //         className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
// // // // //       >
// // // // //         {/* THIS IS THE CONTAINER THAT WAS MISSING IN YOUR SCREENSHOT */}
// // // // //         <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-64 border border-gray-700">
          
// // // // //           {/* This map function correctly renders links WITH ICONS */}
// // // // //           {item.children.map(child => (
// // // // //             <Link
// // // // //               key={child.name}
// // // // //               to={child.path}
// // // // //               onClick={closeAllMenus}
// // // // //               className="flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
// // // // //             >
// // // // //               <child.icon size={18} className="text-blue-400" />
// // // // //               <span>{child.name}</span>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     )}
// // // // //   </AnimatePresence>
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 // Regular Nav Link
// // // // //                 <NavLink key={item.name} item={item} />
// // // // //               )
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Auth Buttons (Desktop) */}
// // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // //              <Link
// // // // //               to="/auth"
// // // // //               onClick={closeAllMenus}
// // // // //               className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// // // // //             >
// // // // //               Login / Sign Up
// // // // //             </Link>
// // // // //           </div>

// // // // //           {/* Mobile Menu Button */}
// // // // //           <div className="md:hidden flex items-center">
// // // // //             <button
// // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // //               className="text-gray-300 hover:text-white p-2 rounded-md"
// // // // //             >
// // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Mobile Menu */}
// // // // //       <AnimatePresence>
// // // // //         {isMobileMenuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, height: 0 }}
// // // // //             animate={{ opacity: 1, height: 'auto' }}
// // // // //             exit={{ opacity: 0, height: 0 }}
// // // // //             className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg overflow-hidden"
// // // // //           >
// // // // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // // // //               {navItems.map((item) => (
// // // // //                 item.children ? (
// // // // //                   // Mobile Services Accordion
// // // // //                   <div key={item.name}>
// // // // //                     <button
// // // // //                       onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// // // // //                       className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-full text-left flex justify-between items-center text-gray-400 hover:text-white group"
// // // // //                     >
// // // // //                       <span>{item.name}</span>
// // // // //                       <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// // // // //                     </button>
// // // // //                     {/* Mobile Submenu */}
// // // // //                     <AnimatePresence>
// // // // //                       {isMobileServicesOpen && (
// // // // //                         <motion.div
// // // // //                           initial={{ opacity: 0, height: 0 }}
// // // // //                           animate={{ opacity: 1, height: 'auto' }}
// // // // //                           exit={{ opacity: 0, height: 0 }}
// // // // //                           className="pl-8 pb-2 overflow-hidden"
// // // // //                         >
// // // // //                           {item.children.map(child => (
// // // // //                             <Link
// // // // //                               key={child.name}
// // // // //                               to={child.path}
// // // // //                               onClick={closeAllMenus}
// // // // //                               className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-400 hover:text-white group"
// // // // //                             >
// // // // //                               {child.name}
// // // // //                             </Link>
// // // // //                           ))}
// // // // //                         </motion.div>
// // // // //                       )}
// // // // //                     </AnimatePresence>
// // // // //                   </div>
// // // // //                 ) : (
// // // // //                   // Regular Mobile Nav Link
// // // // //                   <NavLink key={item.name} item={item} />
// // // // //                 )
// // // // //               ))}
// // // // //               <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
// // // // //                  <Link
// // // // //                   to="/auth"
// // // // //                   onClick={closeAllMenus}
// // // // //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// // // // //                 >
// // // // //                   Login / Sign Up
// // // // //                 </Link>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Link, useLocation } from 'react-router-dom';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import { 
// // // //   Menu, 
// // // //   X, 
// // // //   Recycle, 
// // // //   ChevronDown, 
// // // //   Wrench, 
// // // //   DatabaseZap, 
// // // //   Briefcase, 
// // // //   HardDrive, 
// // // //   ShieldCheck 
// // // // } from 'lucide-react'; // Added new icons

// // // // // Placeholder logo component to make the file self-contained
// // // // // You can replace this with your actual Logo import
// // // // const ECycleGreenLogo = ({ className = "" }) => (
// // // //   <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
// // // //     <Recycle size={24} />
// // // //   </div>
// // // // );

// // // // export const Header = () => {
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// // // //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// // // //   // Get current page location
// // // //   const location = useLocation();
// // // //   const currentPagePath = location.pathname;

// // // //   // Updated nav items to include services with children
// // // //   const navItems = [
// // // //     { name: 'Home', path: '/' },
// // // //     { name: 'About Us', path: '/about' },
// // // //     { 
// // // //       name: 'Services', 
// // // //       path: '/services', // Fallback path
// // // //       children: [
// // // //         { name: 'Laptop Repairs', path: '/services/repairs', icon: Wrench, description: 'Fast, expert repairs to get you back to work.' },
// // // //         { name: 'Secure Data Erasure', path: '/services/data-erasure', icon: DatabaseZap, description: 'Certified data wiping for your peace of mind.' },
// // // //         { name: 'IT Disposals (ITAD)', path: '/services/it-disposals', icon: Briefcase, description: 'Responsible and secure asset disposition.' },
// // // //         { name: 'Device Upgrades', path: '/services/upgrades', icon: HardDrive, description: 'Boost performance with RAM and SSD upgrades.' },
// // // //         { name: 'Extended Warranty', path: '/services/warranty', icon: ShieldCheck, description: 'Protect your investment with our extra coverage.' },
// // // //         { name: 'WEEE Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// // // //       ]
// // // //     },
// // // //     { name: 'Our Laptops', path: '/laptops' },
// // // //     { name: 'Sustainability', path: '/sustainability' },
// // // //     { name: 'Education', path: '/education' },
// // // //     { name: 'Contact Us', path: '/contact' },
// // // //   ];

// // // //   // Close all menus on location change
// // // //   useEffect(() => {
// // // //     setIsMobileMenuOpen(false);
// // // //     setIsServicesOpen(false);
// // // //     setIsMobileServicesOpen(false);
// // // //   }, [location]);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 10);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   const closeAllMenus = () => {
// // // //     setIsMobileMenuOpen(false);
// // // //     setIsServicesOpen(false);
// // // //     // We keep mobile services open/closed state persistent until mobile menu is closed
// // // //   };

// // // //   const NavLink = ({ item }) => (
// // // //     <Link
// // // //       to={item.path}
// // // //       onClick={closeAllMenus}
// // // //       className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// // // //         isMobileMenuOpen ? 'block w-full text-left' : ''
// // // //       } ${
// // // //         currentPagePath === item.path
// // // //           ? 'text-green-600 font-semibold'
// // // //           : 'text-gray-500 hover:text-gray-900'
// // // //       } group`}
// // // //     >
// // // //       {item.name}
// // // //       {/* UPDATED: Underline color changed to green/blue gradient */}
// // // //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
// // // //         currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// // // //       }`}></span>
// // // //     </Link>
// // // //   );

// // // //   return (
// // // //     <header
// // // //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// // // //         isScrolled || isMobileMenuOpen ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
// // // //       }`}
// // // //     >
// // // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex items-center justify-between h-20">
// // // //           {/* Logo */}
// // // //           <Link 
// // // //             to="/"
// // // //             className="flex-shrink-0 flex items-center cursor-pointer group"
// // // //             onClick={closeAllMenus}
// // // //           >
// // // //             {/* Using placeholder logo */}
// // // //             <ECycleGreenLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
// // // //             <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">ECycleGreen</span>
// // // //           </Link>

// // // //           {/* Desktop Nav */}
// // // //           <div className="hidden md:flex items-center space-x-2">
// // // //             {navItems.map((item) => (
// // // //               item.children ? (
// // // //                 // Desktop Services Dropdown
// // // //                 <div 
// // // //                   key={item.name}
// // // //                   className="relative"
// // // //                   onMouseEnter={() => setIsServicesOpen(true)}
// // // //                   onMouseLeave={() => setIsServicesOpen(false)}
// // // //                 >
// // // //                   {/* --- FIX: Changed <button> to <Link> --- */}
// // // //                   <Link
// // // //                     to={item.path}
// // // //                     onClick={closeAllMenus}
// // // //                     className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
// // // //                       currentPagePath.startsWith(item.path)
// // // //                         ? 'text-white'
// // // //                         : 'text-gray-400 hover:text-white'
// // // //                     } group`}
// // // //                   >
// // // //                     {item.name}
// // // //                     <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // // //                   </Link>

               
// // // //                   <AnimatePresence>
// // // //                     {isServicesOpen && (
// // // //                       <motion.div
// // // //                         initial={{ opacity: 0, y: 10 }}
// // // //                         animate={{ opacity: 1, y: 0 }}
// // // //                         exit={{ opacity: 0, y: 10 }}
// // // //                         transition={{ duration: 0.2 }}
// // // //                         className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
// // // //                       >
// // // //                         <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-64 border border-gray-700">
// // // //                           {item.children.map(child => (
// // // //                             <Link
// // // //                               key={child.name}
// // // //                               to={child.path}
// // // //                               onClick={closeAllMenus}
// // // //                               className="flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
// // // //                             >
// // // //                               <child.icon size={18} className="text-blue-400" />
// // // //                               <span>{child.name}</span>
// // // //                             </Link>
// // // //                           ))}
// // // //                         </div>
// // // //                       </motion.div>
// // // //                     )}
// // // //                   </AnimatePresence>
// // // //                 </div>
// // // //               ) : (
// // // //                 // Regular Nav Link
// // // //                 <NavLink key={item.name} item={item} />
// // // //               )
// // // //             ))}
// // // //           </div>

// // // //           {/* Auth Buttons (Desktop) */}
// // // //           <div className="hidden md:flex items-center space-x-3">
// // // //              <Link
// // // //               to="/auth"
// // // //               onClick={closeAllMenus}
// // // //               className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// // // //             >
// // // //               Login / Sign Up
// // // //             </Link>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button
// // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // //               className="text-gray-300 hover:text-white p-2 rounded-md"
// // // //             >
// // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Mobile Menu */}
// // // //       <AnimatePresence>
// // // //         {isMobileMenuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, height: 0 }}
// // // //             animate={{ opacity: 1, height: 'auto' }}
// // // //             exit={{ opacity: 0, height: 0 }}
// // // //             className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg overflow-hidden"
// // // //           >
// // // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // // //               {navItems.map((item) => (
// // // //                 item.children ? (
// // // //                   // Mobile Services Accordion
// // // //                   <div key={item.name}>
// // // //                     {/* --- FIX: Split button into a Link and a separate Button --- */}
// // // //                     <div className="flex items-center justify-between w-full">
// // // //                       <Link
// // // //                         to={item.path}
// // // //                         onClick={closeAllMenus}
// // // //                         className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-left text-gray-400 hover:text-white group flex-grow"
// // // //                       >
// // // //                         {item.name}
// // // //                       </Link>
// // // //                       <button
// // // //                         onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// // // //                         className="text-gray-400 hover:text-white p-2 rounded-md flex-shrink-0"
// // // //                       >
// // // //                         <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// // // //                       </button>
// // // //                     </div>
// // // //                     {/* Mobile Submenu */}
// // // //                     <AnimatePresence>
// // // //                       {isMobileServicesOpen && (
// // // //                         <motion.div
// // // //                           initial={{ opacity: 0, height: 0 }}
// // // //                           animate={{ opacity: 1, height: 'auto' }}
// // // //                           exit={{ opacity: 0, height: 0 }}
// // // //                           className="pl-8 pb-2 overflow-hidden"
// // // //                         >
// // // //                           {item.children.map(child => (
// // // //                             <Link
// // // //                               key={child.name}
// // // //                               to={child.path}
// // // //                               onClick={closeAllMenus}
// // // //                               className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-400 hover:text-white group"
// // // //                             >
// // // //                               {child.name}
// // // //                             </Link>
// // // //                           ))}
// // // //                         </motion.div>
// // // //                       )}
// // // //                     </AnimatePresence>
// // // //                   </div>
// // // //                 ) : (
// // // //                   // Regular Mobile Nav Link
// // // //                   <NavLink key={item.name} item={item} />
// // // //                 )
// // // //               ))}
// // // //               <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
// // // //                  <Link
// // // //                   to="/auth"
// // // //                   onClick={closeAllMenus}
// // // //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// // // //                 >
// // // //                   Login / Sign Up
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </header>
// // // //   );
// // // // };

// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { 
// // //   Menu, 
// // //   X, 
// // //   Recycle, 
// // //   ChevronDown, 
// // //   Wrench, 
// // //   ShieldCheck,
// // //   Server,      // Replaced Briefcase
// // //   Truck,       // Added for Logistics
// // //   HardHat,     // Added for On-site
// // //   Box,           // Added for Drop-Off Box
// // //   RefreshCw,     // Added for Buyback
// // //   ServerOff,     // Added for Decommission
// // //   FileText,      // Added for IT Asset Management
// // //   Users,         // Added for Consultation
// // //   Trash2,  
// // // } from 'lucide-react'; // Updated icons
// // // import { ImageLogo } from '../common/Logo';

// // // // Placeholder logo component to make the file self-contained
// // // // You can replace this with your actual Logo import
// // // const ECycleGreenLogo = ({ className = "" }) => (
// // //   <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
// // //     <Recycle size={24} />
// // //   </div>
// // // );

// // // export const Header = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// // //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// // //   // Get current page location
// // //   const location = useLocation();
// // //   const currentPagePath = location.pathname;

// // //   // --- UPDATED Nav Items ---
// // //   const navItems = [
// // //     { name: 'Home', path: '/' },
// // //     { name: 'About Us', path: '/about' },
// // //     { 
// // //       name: 'Services', 
// // //       path: '/services', // Fallback path
// // //      children: [
// // //         { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
// // //         { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping for peace of mind.' },
// // //         { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// // //        // { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench, description: 'Expert device refurbishment and upgrades.' },
// // //        // { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck, description: 'Secure logistics and pickup services.' },
// // //        // { name: 'On-site Services', path: '/services/on-site', icon: HardHat, description: 'Services performed securely at your location.' },
// // //         { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations for your e-waste.' },
// // //         { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value back for your old IT equipment.' },
// // //         { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe and secure decommissioning of IT assets.' },
// // //         { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management of your IT assets.' },
// // //         { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert advice on your recycling strategy.' },
// // //         { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free removal of IT junk.' },
// // //       ]
// // //     },
// // //     { name: 'Our Laptops', path: '/laptops' },
// // //     { name: 'Accepted Items', path: '/accepted-items'},
// // //     { name: 'Sustainability', path: '/sustainability' },
// // //     // { name: 'Education', path: '/education' },
// // //     { name: 'Contact Us', path: '/contact' },
// // //   ];

// // //   // Close all menus on location change
// // //   useEffect(() => {
// // //     setIsMobileMenuOpen(false);
// // //     setIsServicesOpen(false);
// // //     setIsMobileServicesOpen(false);
// // //   }, [location]);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 10);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const closeAllMenus = () => {
// // //     setIsMobileMenuOpen(false);
// // //     setIsServicesOpen(false);
// // //     // We keep mobile services open/closed state persistent until mobile menu is closed
// // //   };

// // //   const NavLink = ({ item }) => (
// // //     <Link
// // //       to={item.path}
// // //       onClick={closeAllMenus}
// // //       className={`relative px-4 py-2 rounded-md text-sm font-small transition-colors duration-300 ${
// // //         isMobileMenuOpen ? 'block w-full text-left' : ''
// // //       } ${
// // //         // --- COLOR FIX ---
// // //         currentPagePath === item.path
// // //           ? 'text-green-600 font-semibold'
// // //           : 'text-gray-600 hover:text-gray-900' // Changed from light text
// // //       } group`}
// // //     >
// // //       {item.name}
// // //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
// // //         currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// // //       }`}></span>
// // //     </Link>
// // //   );

// // //   return (
// // //     <header
// // //       // --- COLOR FIX: Changed to white bg ---
// // //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
// // //         isScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-sm'
// // //       }`}
// // //     >
// // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex items-center justify-between h-20">
// // //           {/* Logo */}
// // //           <Link 
// // //             to="/"
// // //             className="flex-shrink-0 flex items-center cursor-pointer group"
// // //             onClick={closeAllMenus}
// // //           >
// // //             <ECycleGreenLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
// // //             <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">ECycleGreen</span>
// // //             <ImageLogo src="/mainlogo.png" />
// // //           </Link>

// // //           {/* Desktop Nav */}
// // //           <div className="hidden md:flex items-center space-x-2">
// // //             {navItems.map((item) => (
// // //               item.children ? (
// // //                 // Desktop Services Dropdown
// // //                 <div 
// // //                   key={item.name}
// // //                   className="relative"
// // //                   onMouseEnter={() => setIsServicesOpen(true)}
// // //                   onMouseLeave={() => setIsServicesOpen(false)}
// // //                 >
// // //                   <Link
// // //                     to={item.path}
// // //                     onClick={closeAllMenus}
// // //                     // --- COLOR FIX ---
// // //                     className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
// // //                       currentPagePath.startsWith(item.path)
// // //                         ? 'text-green-600 font-semibold' // Active
// // //                         : 'text-gray-600 hover:text-gray-900' // Inactive
// // //                     } group`}
// // //                   >
// // //                     {item.name}
// // //                     <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// // //                   </Link>

               
// // //                   <AnimatePresence>
// // //                     {isServicesOpen && (
// // //                       <motion.div
// // //                         initial={{ opacity: 0, y: 10 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         exit={{ opacity: 0, y: 10 }}
// // //                         transition={{ duration: 0.2 }}
// // //                         className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
// // //                       >
// // //                         {/* --- COLOR FIX: Dropdown container --- */}
// // //                         <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 border border-gray-200">
// // //                           {item.children.map(child => (
// // //                             <Link
// // //                               key={child.name}
// // //                               to={child.path}
// // //                               onClick={closeAllMenus}
// // //                               // --- COLOR FIX: Dropdown item ---
// // //                               className="flex items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
// // //                             >
// // //                               <child.icon size={18} className="text-green-500" />
// // //                               <span>{child.name}</span>
// // //                             </Link>
// // //                           ))}
// // //                         </div>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </div>
// // //               ) : (
// // //                 // Regular Nav Link
// // //                 <NavLink key={item.name} item={item} />
// // //               )
// // //             ))}
// // //           </div>

// // //           {/* Auth Buttons (Desktop) */}
// // //           <div className="hidden md:flex items-center space-x-3">
// // //              <Link
// // //               to="/auth"
// // //               onClick={closeAllMenus}
// // //               className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// // //             >
// // //               Login / Sign Up
// // //             </Link>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <div className="md:hidden flex items-center">
// // //             <button
// // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // //               // --- COLOR FIX ---
// // //               className="text-gray-600 hover:text-gray-900 p-2 rounded-md"
// // //             >
// // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Mobile Menu */}
// // //       <AnimatePresence>
// // //         {isMobileMenuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, height: 0 }}
// // //             animate={{ opacity: 1, height: 'auto' }}
// // //             exit={{ opacity: 0, height: 0 }}
// // //             // --- COLOR FIX: Mobile menu background ---
// // //             className="md:hidden bg-white shadow-lg overflow-hidden"
// // //           >
// // //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// // //               {navItems.map((item) => (
// // //                 item.children ? (
// // //                   // Mobile Services Accordion
// // //                   <div key={item.name}>
// // //                     <div className="flex items-center justify-between w-full">
// // //                       <Link
// // //                         to={item.path}
// // //                         onClick={closeAllMenus}
// // //                         // --- COLOR FIX ---
// // //                         className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-left text-gray-600 hover:text-gray-900 group flex-grow"
// // //                       >
// // //                         {item.name}
// // //                       </Link>
// // //                       <button
// // //                         onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// // //                         // --- COLOR FIX ---
// // //                         className="text-gray-600 hover:text-gray-900 p-2 rounded-md flex-shrink-0"
// // //                       >
// // //                         <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// // //                       </button>
// // //                     </div>
// // //                     {/* Mobile Submenu */}
// // //                     <AnimatePresence>
// // //                       {isMobileServicesOpen && (
// // //                         <motion.div
// // //                           initial={{ opacity: 0, height: 0 }}
// // //                           animate={{ opacity: 1, height: 'auto' }}
// // //                           exit={{ opacity: 0, height: 0 }}
// // //                           className="pl-8 pb-2 overflow-hidden"
// // //                         >
// // //                           {/* --- UPDATED: Mobile submenu --- */}
// // //                           {item.children.map(child => (
// // //                             <Link
// // //                               key={child.name}
// // //                               to={child.path}
// // //                               onClick={closeAllMenus}
// // //                               // --- COLOR FIX ---
// // //                               className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-500 hover:text-gray-900 group"
// // //                             >
// // //                               {child.name}
// // //                             </Link>
// // //                           ))}
// // //                         </motion.div>
// // //                       )}
// // //                     </AnimatePresence>
// // //                   </div>
// // //                 ) : (
// // //                   // Regular Mobile Nav Link
// // //                   <NavLink key={item.name} item={item} />
// // //                 )
// // //               ))}
// // //               {/* --- COLOR FIX: Mobile menu border --- */}
// // //               <div className="border-t border-gray-200 pt-4 pb-2 space-y-2">
// // //                  <Link
// // //                   to="/auth"
// // //                   onClick={closeAllMenus}
// // //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// // //                 >
// // //                   Login / Sign Up
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // };

// // import React, { useState, useEffect, Fragment } from 'react';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   Menu, 
// //   X, 
// //   Recycle, 
// //   ChevronDown, 
// //   Server,
// //   ShieldCheck,
// //   Box,
// //   RefreshCw,
// //   ServerOff,
// //   FileText,
// //   Users,
// //   Trash2,
// //   LogOut, // New icon
// //   User,     // New icon
// //   Settings, // New icon for Admin
// //   Loader2   // New icon for loading
// // } from 'lucide-react';
// // // Corrected paths (assuming src/common/Logo and src/context/AuthContext)
// // // import { ImageLogo } from '../../common/Logo'; 
// // // import { useAuth } from '../../context/AuthContext'; 
// // import { ImageLogo } from '../common/Logo'; 
// // import { useAuth } from '../../context/AuthContext';
// // // This is the navigation structure from your old file.
// // // I've added descriptions which the new dropdown will use.
// // const navItems = [
// //   { name: 'Home', path: '/' },
// //   { name: 'About Us', path: '/about' },
// //   { 
// //     name: 'Services', 
// //     path: '/services', // Fallback path
// //     children: [
// //       { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
// //       { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping for peace of mind.' },
// //       { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// //       { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations.' },
// //       { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value back for your old IT equipment.' },
// //       { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe and secure decommissioning.' },
// //       { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management.' },
// //       { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert advice on your recycling strategy.' },
// //       { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free removal of IT junk.' },
// //     ]
// //   },
// //   { name: 'Our Laptops', path: '/laptops' },
// //   { name: 'Accepted Items', path: '/accepted-items'},
// //   { name: 'Sustainability', path: '/sustainability' },
// //   { name: 'Contact Us', path: '/contact' },
// // ];

// // // --- Reusable NavLink Component ---
// // const NavLink = ({ to, children, isMobile, onClick }) => {
// //   const location = useLocation();
// //   const isActive = location.pathname === to;

// //   return (
// //     <Link
// //       to={to}
// //       onClick={onClick}
// //       className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// //         isMobile 
// //           ? 'block w-full text-left px-4 py-3 text-base' // Mobile styles
// //           : 'inline-block' // Desktop styles
// //       } ${
// //         isActive
// //           ? 'text-green-600 font-semibold'
// //           : 'text-gray-700 hover:text-green-600'
// //       } group`}
// //     >
// //       {children}
// //       {/* Animated underline for desktop */}
// //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out ${
// //         isMobile ? 'hidden' : '' // Hide on mobile
// //       } ${
// //         isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// //       }`}></span>
// //     </Link>
// //   );
// // };

// // // --- Main Header Component ---
// // export const Header = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// //   const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile dropdown
// //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { user, profile, isAdmin, signOut, actionLoading } = useAuth();

// //   // --- Effects ---
  
// //   // Close all menus on location change
// //   useEffect(() => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     setIsProfileOpen(false);
// //   }, [location]);

// //   // Handle header background on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // --- Handlers ---

// //   const closeAllMenus = () => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     setIsProfileOpen(false);
// //     // We keep mobile services open/closed state persistent until mobile menu is closed
// //   };

// //   const handleSignOut = async () => {
// //     await signOut();
// //     closeAllMenus();
// //     navigate('/'); // Redirect to home after logout
// //   };

// //   // --- Dropdown Animations ---
// //   const dropdownVariants = {
// //     hidden: { opacity: 0, scale: 0.95, y: -10 },
// //     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
// //     exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15, ease: 'easeIn' } }
// //   };

// //   const mobileMenuVariants = {
// //     hidden: { opacity: 0, height: 0 },
// //     visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
// //     exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } }
// //   };

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
// //         isScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-sm'
// //       }`}
// //     >
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
          
// //           {/* 1. Logo (Left) */}
// //           <div className="flex-shrink-0">
// //             <Link 
// //               to="/"
// //               className="flex items-center gap-2"
// //               onClick={closeAllMenus}
// //             >
// //               {/* Using your ImageLogo from the old file */}
// //               <ImageLogo src="/mainlogo.png" className="h-10 w-auto" />
// //             </Link>
// //           </div>

// //           {/* 2. Desktop Nav (Center) */}
// //           <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
// //             {navItems.map((item) => (
// //               !item.children ? (
// //                 // Regular Nav Link
// //                 <NavLink key={item.name} to={item.path} onClick={closeAllMenus}>
// //                   {item.name}
// //                 </NavLink>
// //               ) : (
// //                 // Services Dropdown
// //                 <div 
// //                   key={item.name}
// //                   className="relative"
// //                   onMouseEnter={() => setIsServicesOpen(true)}
// //                   onMouseLeave={() => setIsServicesOpen(false)}
// //                 >
// //                   <NavLink
// //                     to={item.path}
// //                     onClick={(e) => { e.preventDefault(); setIsServicesOpen(true); }} // Click to open on touch devices
// //                   >
// //                     <span className="flex items-center">
// //                       {item.name}
// //                       <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// //                     </span>
// //                   </NavLink>
               
// //                   <AnimatePresence>
// //                     {isServicesOpen && (
// //                       <motion.div
// //                         variants={dropdownVariants}
// //                         initial="hidden"
// //                         animate="visible"
// //                         exit="exit"
// //                         className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
// //                         style={{ minWidth: '40rem' }} // Wider dropdown
// //                       >
// //                         <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
// //                           {/* Grid layout for services */}
// //                           <div className="grid grid-cols-2 gap-x-2 gap-y-1 p-4">
// //                             {item.children.map(child => (
// //                               <Link
// //                                 key={child.name}
// //                                 to={child.path}
// //                                 onClick={closeAllMenus}
// //                                 className="flex items-start gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
// //                               >
// //                                 <child.icon size={20} className="text-green-500 mt-1 flex-shrink-0" />
// //                                 <div>
// //                                   <span className="font-medium">{child.name}</span>
// //                                   <p className="text-sm text-gray-500">{child.description}</p>
// //                                 </div>
// //                               </Link>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               )
// //             ))}
// //           </div>

// //           {/* 3. Auth Buttons (Right) */}
// //           <div className="hidden md:flex items-center justify-end space-x-3" style={{ minWidth: '150px' }}>
// //             {user && profile ? (
// //               // --- Logged In: Profile Dropdown ---
// //               <div 
// //                 className="relative"
// //                 onMouseEnter={() => setIsProfileOpen(true)}
// //                 onMouseLeave={() => setIsProfileOpen(false)}
// //               >
// //                 <button
// //                   onClick={() => setIsProfileOpen(o => !o)}
// //                   className="flex items-center gap-2 p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
// //                 >
// //                   <span className="text-sm font-medium">{profile.full_name.split(' ')[0]}</span>
// //                   <User size={20} className="text-green-600" />
// //                 </button>
                
// //                 <AnimatePresence>
// //                   {isProfileOpen && (
// //                     <motion.div
// //                       variants={dropdownVariants}
// //                       initial="hidden"
// //                       animate="visible"
// //                       exit="exit"
// //                       className="absolute right-0 top-full pt-3"
// //                       style={{ width: '250px' }}
// //                     >
// //                       <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 p-2">
// //                         <div className="px-3 py-2 border-b border-gray-100">
// //                           <p className="text-sm font-medium text-gray-900 truncate">{profile.full_name}</p>
// //                           <p className="text-sm text-gray-500 truncate">{user.email}</p>
// //                         </div>
// //                         <div className="py-1">
// //                           {isAdmin && (
// //                             <Link
// //                               to="/admin" // TODO: Update to your admin path
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
// //                             >
// //                               <Settings size={16} />
// //                               Admin Dashboard
// //                             </Link>
// //                           )}
// //                            <Link
// //                               to="/profile" // TODO: Update to your profile path
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
// //                             >
// //                               <User size={16} />
// //                               My Profile
// //                             </Link>
// //                           <button
// //                             onClick={handleSignOut}
// //                             disabled={actionLoading}
// //                             className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-red-600 rounded-md hover:bg-gray-50"
// //                           >
// //                             {actionLoading ? (
// //                               <Loader2 size={16} className="animate-spin" />
// //                             ) : (
// //                               <LogOut size={16} />
// //                             )}
// //                             Logout
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             ) : (
// //               // --- Logged Out: Login Button ---
// //               <Link
// //                 to="/auth"
// //                 onClick={closeAllMenus}
// //                 className="block text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// //               >
// //                 Login / Sign Up
// //               </Link>
// //             )}
// //           </div>

// //           {/* 4. Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="text-gray-700 hover:text-green-600 p-2 rounded-md"
// //               aria-label="Open main menu"
// //             >
// //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>

// //         </div>
// //       </nav>

// //       {/* --- Mobile Menu --- */}
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             variants={mobileMenuVariants}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //             className="md:hidden bg-white shadow-lg overflow-y-auto"
// //             style={{ maxHeight: 'calc(100vh - 5rem)' }} // Full height minus header
// //           >
// //             <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
// //               {navItems.map((item) => (
// //                 !item.children ? (
// //                   // Regular Mobile Link
// //                   <NavLink 
// //                     key={item.name} 
// //                     to={item.path} 
// //                     isMobile 
// //                     onClick={closeAllMenus}
// //                   >
// //                     {item.name}
// //                   </NavLink>
// //                 ) : (
// //                   // Mobile Services Accordion
// //                   <div key={item.name}>
// //                     <button
// //                       onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// //                       className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700"
// //                     >
// //                       {item.name}
// //                       <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// //                     </button>
                    
// //                     <AnimatePresence>
// //                       {isMobileServicesOpen && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           className="pl-8 pr-4 pb-2 overflow-hidden"
// //                         >
// //                           {item.children.map(child => (
// //                             <Link
// //                               key={child.name}
// //                               to={child.path}
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-green-600"
// //                             >
// //                               <child.icon size={18} />
// //                               <span>{child.name}</span>
// //                             </Link>
// //                           ))}
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 )
// //               ))}
// //             </div>
            
// //             {/* Mobile Auth Section */}
// //             <div className="border-t border-gray-100 pt-4 pb-4 px-4 space-y-3">
// //               {user && profile ? (
// //                 // Logged In (Mobile)
// //                 <Fragment>
// //                   <div className="flex items-center gap-3">
// //                     <User size={24} className="text-green-600" />
// //                     <div>
// //                       <p className="text-base font-medium text-gray-900">{profile.full_name}</p>
// //                       <p className="text-sm text-gray-500">{user.email}</p>
// //                     </div>
// //                   </div>
// //                   {isAdmin && (
// //                     <Link
// //                       to="/admin" // TODO: Update to your admin path
// //                       onClick={closeAllMenus}
// //                       className="flex items-center justify-center gap-3 w-full text-center px-4 py-3 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
// //                     >
// //                       <Settings size={18} />
// //                       Admin Dashboard
// //                     </Link>
// //                   )}
// //                   <button
// //                     onClick={handleSignOut}
// //                     disabled={actionLoading}
// //                     className="flex items-center justify-center gap-3 w-full text-center px-4 py-3 rounded-md text-sm font-medium bg-red-50 text-red-600"
// //                   >
// //                     {actionLoading ? (
// //                       <Loader2 size={18} className="animate-spin" />
// //                     ) : (
// //                       <LogOut size={18} />
// //                     )}
// //                     Logout
// //                   </button>
// //                 </Fragment>
// //               ) : (
// //                 // Logged Out (Mobile)
// //                 <Link
// //                   to="/auth"
// //                   onClick={closeAllMenus}
// //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-3 rounded-full text-base font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// //                 >
// //                   Login / Sign Up
// //                 </Link>
// //               )}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };


// /*
// * === Redesigned Header.jsx ===
// *
// * - Cleaner, more modern design inspired by your screenshot.
// * - Uses your AuthContext to show user's name and logout button.
// * - Improved animations for services and new profile dropdowns.
// * - Better responsive layout for mobile.
// *
// * --- FIX ---
// * - Corrected relative import paths for AuthContext and ImageLogo
// * based on likely project structure (e.g., components/common and context/).
// *
// */
// // import React, { useState, useEffect, Fragment } from 'react';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   Menu, 
// //   X, 
// //   Recycle, 
// //   ChevronDown, 
// //   Server,
// //   ShieldCheck,
// //   Box,
// //   RefreshCw,
// //   ServerOff,
// //   FileText,
// //   Users,
// //   Trash2,
// //   LogOut, // New icon
// //   User,     // New icon
// //   Settings, // New icon for Admin
// //   Loader2   // New icon for loading
// // } from 'lucide-react';
// // // Corrected paths (assuming src/components/common/Logo and src/context/AuthContext)
// // import { ImageLogo } from '../common/Logo'; 
// // import { useAuth } from '../../context/AuthContext'; 
// // import ECycleGreenLogo from '../common/Logo'; // Assuming you have this SVG
// // // This is the navigation structure from your old file.
// // // I've added descriptions which the new dropdown will use.
// // const navItems = [
// //   { name: 'Home', path: '/' },
// //   { name: 'About Us', path: '/about' },
// //   { 
// //     name: 'Services', 
// //     path: '/services', // Fallback path
// //     children: [
// //       { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
// //       { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping for peace of mind.' },
// //       { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// //       { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations.' },
// //       { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value back for your old IT equipment.' },
// //       { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe and secure decommissioning.' },
// //       { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management.' },
// //       { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert advice on your recycling strategy.' },
// //       { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free removal of IT junk.' },
// //     ]
// //   },
// //   { name: 'Our Laptops', path: '/laptops' },
// //   { name: 'Accepted Items', path: '/accepted-items'},
// //   { name: 'Sustainability', path: '/sustainability' },
// //   { name: 'Contact Us', path: '/contact' },
// // ];

// // // --- Reusable NavLink Component ---
// // const NavLink = ({ to, children, isMobile, onClick }) => {
// //   const location = useLocation();
// //   const isActive = location.pathname === to;

// //   return (
// //     <Link
// //       to={to}
// //       onClick={onClick}
// //       className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// //         isMobile 
// //           ? 'block w-full text-left px-4 py-3 text-base' // Mobile styles
// //           : 'inline-block' // Desktop styles
// //       } ${
// //         isActive
// //           ? 'text-green-600 font-semibold'
// //           : 'text-gray-700 hover:text-green-600'
// //       } group`}
// //     >
// //       {children}
// //       {/* Animated underline for desktop */}
// //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out ${
// //         isMobile ? 'hidden' : '' // Hide on mobile
// //       } ${
// //         isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// //       }`}></span>
// //     </Link>
// //   );
// // };

// // // --- Main Header Component ---
// // export const Header = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// //   const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile dropdown
// //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { user, profile, isAdmin, signOut, actionLoading } = useAuth();

// //   // --- Effects ---
  
// //   // Close all menus on location change
// //   useEffect(() => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     setIsProfileOpen(false);
// //   }, [location]);

// //   // Handle header background on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // --- Handlers ---

// //   const closeAllMenus = () => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     setIsProfileOpen(false);
// //     // We keep mobile services open/closed state persistent until mobile menu is closed
// //   };

// //   const handleSignOut = async () => {
// //     await signOut();
// //     closeAllMenus();
// //     navigate('/'); // Redirect to home after logout
// //   };

// //   // --- Dropdown Animations ---
// //   const dropdownVariants = {
// //     hidden: { opacity: 0, scale: 0.95, y: -10 },
// //     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
// //     exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15, ease: 'easeIn' } }
// //   };

// //   const mobileMenuVariants = {
// //     hidden: { opacity: 0, height: 0 },
// //     visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
// //     exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } }
// //   };

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
// //         isScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-sm'
// //       }`}
// //     >
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
          
// //           {/* 1. Logo (Left) */}
// //           <div className="flex-shrink-0">
// //             <Link 
// //               to="/"
// //               className="flex items-center gap-2"
// //               onClick={closeAllMenus}
// //             >
// //               {/* Using your ImageLogo from the old file */}
// //               <ImageLogo src="/mainlogo.png" className="h-10 w-auto" />
// //                <ECycleGreenLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
// //                <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">ECycleGreen</span>
// //             </Link>
// //           </div>

// //           {/* 2. Desktop Nav (Center) */}
// //           <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
// //             {navItems.map((item) => (
// //               !item.children ? (
// //                 // Regular Nav Link
// //                 <NavLink key={item.name} to={item.path} onClick={closeAllMenus}>
// //                   {item.name}
// //                 </NavLink>
// //               ) : (
// //                 // Services Dropdown
// //                 <div 
// //                   key={item.name}
// //                   className="relative"
// //                   onMouseEnter={() => setIsServicesOpen(true)}
// //                   onMouseLeave={() => setIsServicesOpen(false)}
// //                 >
// //                   <NavLink
// //                     to={item.path}
// //                     onClick={(e) => { e.preventDefault(); setIsServicesOpen(true); }} // Click to open on touch devices
// //                   >
// //                     <span className="flex items-center">
// //                       {item.name}
// //                       <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// //                     </span>
// //                   </NavLink>
               
// //                   <AnimatePresence>
// //                     {isServicesOpen && (
// //                       <motion.div
// //                         variants={dropdownVariants}
// //                         initial="hidden"
// //                         animate="visible"
// //                         exit="exit"
// //                         className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
// //                         style={{ minWidth: '40rem' }} // Wider dropdown
// //                       >
// //                         <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
// //                           {/* Grid layout for services */}
// //                           <div className="grid grid-cols-2 gap-x-2 gap-y-1 p-4">
// //                             {item.children.map(child => (
// //                               <Link
// //                                 key={child.name}
// //                                 to={child.path}
// //                                 onClick={closeAllMenus}
// //                                 className="flex items-start gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
// //                               >
// //                                 <child.icon size={20} className="text-green-500 mt-1 flex-shrink-0" />
// //                                 <div>
// //                                   <span className="font-medium">{child.name}</span>
// //                                   <p className="text-sm text-gray-500">{child.description}</p>
// //                                 </div>
// //                               </Link>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               )
// //             ))}
// //           </div>

// //           {/* 3. Auth Buttons (Right) */}
// //           <div className="hidden md:flex items-center justify-end space-x-3" style={{ minWidth: '150px' }}>
// //             {user && profile ? (
// //               // --- Logged In: Profile Dropdown ---
// //               <div 
// //                 className="relative"
// //                 onMouseEnter={() => setIsProfileOpen(true)}
// //                 onMouseLeave={() => setIsProfileOpen(false)}
// //               >
// //                 <button
// //                   onClick={() => setIsProfileOpen(o => !o)}
// //                   className="flex items-center gap-2 p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
// //                 >
// //                   <span className="text-sm font-medium">{profile.full_name.split(' ')[0]}</span>
// //                   <User size={20} className="text-green-600" />
// //                 </button>
                
// //                 <AnimatePresence>
// //                   {isProfileOpen && (
// //                     <motion.div
// //                       variants={dropdownVariants}
// //                       initial="hidden"
// //                       animate="visible"
// //                       exit="exit"
// //                       className="absolute right-0 top-full pt-3"
// //                       style={{ width: '250px' }}
// //                     >
// //                       <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 p-2">
// //                         <div className="px-3 py-2 border-b border-gray-100">
// //                           <p className="text-sm font-medium text-gray-900 truncate">{profile.full_name}</p>
// //                           <p className="text-sm text-gray-500 truncate">{user.email}</p>
// //                         </div>
// //                         <div className="py-1">
// //                           {isAdmin && (
// //                             <Link
// //                               to="/admin" // TODO: Update to your admin path
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
// //                             >
// //                               <Settings size={16} />
// //                               Admin Dashboard
// //                             </Link>
// //                           )}
// //                            <Link
// //                               to="/profile" // TODO: Update to your profile path
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
// //                             >
// //                               <User size={16} />
// //                               My Profile
// //                             </Link>
// //                           <button
// //                             onClick={handleSignOut}
// //                             disabled={actionLoading}
// //                             className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-red-600 rounded-md hover:bg-gray-50"
// //                           >
// //                             {actionLoading ? (
// //                               <Loader2 size={16} className="animate-spin" />
// //                             ) : (
// //                               <LogOut size={16} />
// //                             )}
// //                             Logout
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             ) : (
// //               // --- Logged Out: Login Button ---
// //               <Link
// //                 to="/auth"
// //                 onClick={closeAllMenus}
// //                 className="block text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// //               >
// //                 Login / Sign Up
// //               </Link>
// //             )}
// //           </div>

// //           {/* 4. Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="text-gray-700 hover:text-green-600 p-2 rounded-md"
// //               aria-label="Open main menu"
// //             >
// //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>

// //         </div>
// //       </nav>

// //       {/* --- Mobile Menu --- */}
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             variants={mobileMenuVariants}
// //             initial="hidden"
// //             animate="visible"
// //             exit="exit"
// //             className="md:hidden bg-white shadow-lg overflow-y-auto"
// //             style={{ maxHeight: 'calc(100vh - 5rem)' }} // Full height minus header
// //           >
// //             <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
// //               {navItems.map((item) => (
// //                 !item.children ? (
// //                   // Regular Mobile Link
// //                   <NavLink 
// //                     key={item.name} 
// //                     to={item.path} 
// //                     isMobile 
// //                     onClick={closeAllMenus}
// //                   >
// //                     {item.name}
// //                   </NavLink>
// //                 ) : (
// //                   // Mobile Services Accordion
// //                   <div key={item.name}>
// //                     <button
// //                       onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// //                       className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700"
// //                     >
// //                       {item.name}
// //                       <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// //                     </button>
                    
// //                     <AnimatePresence>
// //                       {isMobileServicesOpen && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           className="pl-8 pr-4 pb-2 overflow-hidden"
// //                         >
// //                           {item.children.map(child => (
// //                             <Link
// //                               key={child.name}
// //                               to={child.path}
// //                               onClick={closeAllMenus}
// //                               className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-green-600"
// //                             >
// //                               <child.icon size={18} />
// //                               <span>{child.name}</span>
// //                             </Link>
// //                           ))}
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 )
// //               ))}
// //             </div>
            
// //             {/* Mobile Auth Section */}
// //             <div className="border-t border-gray-100 pt-4 pb-4 px-4 space-y-3">
// //               {user && profile ? (
// //                 // Logged In (Mobile)
// //                 <Fragment>
// //                   <div className="flex items-center gap-3">
// //                     <User size={24} className="text-green-600" />
// //                     <div>
// //                       <p className="text-base font-medium text-gray-900">{profile.full_name}</p>
// //                       <p className="text-sm text-gray-500">{user.email}</p>
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={handleSignOut}
// //                     disabled={actionLoading}
// //                     className="flex items-center justify-center gap-3 w-full text-center px-4 py-3 rounded-md text-sm font-medium bg-red-50 text-red-600"
// //                   >
// //                     {actionLoading ? (
// //                       <Loader2 size={18} className="animate-spin" />
// //                     ) : (
// //                       <LogOut size={18} />
// //                     )}
// //                     Logout
// //                   </button>
// //                 </Fragment>
// //               ) : (
// //                 // Logged Out (Mobile)
// //                 <Link
// //                   to="/auth"
// //                   onClick={closeAllMenus}
// //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-3 rounded-full text-base font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// //                 >
// //                   Login / Sign Up
// //                 </Link>
// //               )}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };


// import React, { useState, useEffect, Fragment } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Menu, X, Recycle, ChevronDown, Server, ShieldCheck,
//   Box, RefreshCw, ServerOff, FileText, Users, Trash2,
//   LogOut, User, Settings, Loader2
// } from 'lucide-react';
// import { useAuth } from '../../context/AuthContext'; 

// // --- Navigation Configuration ---
// const navItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About Us', path: '/about' },
//   { 
//     name: 'Services', 
//     path: '/services', 
//     children: [
//       { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
//       { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping.' },
//       { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly e-waste recycling.' },
//       { name: 'Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations.' },
//       { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value for old equipment.' },
//       { name: 'Decommissioning', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe secure decommissioning.' },
//       { name: 'Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management.' },
//       { name: 'Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert recycling advice.' },
//       { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free junk removal.' },
//     ]
//   },
//   { name: 'Our Laptops', path: '/laptops' },
//   { name: 'Accepted Items', path: '/accepted-items'},
//   { name: 'Sustainability', path: '/sustainability' },
//   { name: 'Contact', path: '/contact' },
// ];

// // --- Reusable NavLink Component ---
// const NavLink = ({ to, children, isMobile, onClick, className }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link
//       to={to}
//       onClick={onClick}
//       className={`relative text-sm font-medium transition-colors duration-300 ${
//         isMobile 
//           ? 'block w-full text-left px-4 py-3 text-base' 
//           : 'px-2 py-2' // Compact padding for desktop
//       } ${
//         isActive
//           ? 'text-green-600 font-semibold'
//           : 'text-gray-600 hover:text-green-600'
//       } ${className || ''} group`}
//     >
//       {children}
//       {/* Subtle Animated underline for desktop */}
//       {!isMobile && (
//         <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-green-500 rounded-full transition-all duration-300 ease-out ${
//           isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
//         }`}></span>
//       )}
//     </Link>
//   );
// };

// // --- Main Header Component ---
// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, profile, isAdmin, signOut, actionLoading } = useAuth();

//   // Close all menus on location change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setIsServicesOpen(false);
//     setIsProfileOpen(false);
//   }, [location]);

//   // Handle header background on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const closeAllMenus = () => {
//     setIsMobileMenuOpen(false);
//     setIsServicesOpen(false);
//     setIsProfileOpen(false);
//   };

//   const handleSignOut = async () => {
//     await signOut();
//     closeAllMenus();
//     navigate('/');
//   };

//   // Animations
//   const dropdownVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: -5 },
//     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15 } },
//     exit: { opacity: 0, scale: 0.95, y: -5, transition: { duration: 0.1 } }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || isMobileMenuOpen 
//           ? 'bg-white/95 backdrop-blur-md shadow-md py-1' 
//           : 'bg-white shadow-sm py-3'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* FLEX CONTAINER STRATEGY: 
//             Left (Logo) = flex-1 justify-start
//             Center (Nav) = flex-auto justify-center
//             Right (Auth) = flex-1 justify-end
//             This ensures the center nav is always perfectly centered relative to the viewport 
//         */}
//         <div className="flex items-center justify-between h-16">
          
//           {/* --- 1. Logo (Left Aligned) --- */}
//           <div className="flex-1 flex justify-start min-w-0">
//             <Link 
//               to="/"
//               className="flex items-center gap-2 group"
//               onClick={closeAllMenus}
//             >
//               {/* Assuming these logos exist in your project */}
//               <ImageLogo src="/mainlogo.png" className="h-9 w-auto" />
//               <ECycleGreenLogo className="w-9 h-9 transition-transform duration-700 ease-in-out group-hover:rotate-180" />
//               <span className="hidden xl:block text-green-600 text-2xl font-bold ml-2 tracking-wide whitespace-nowrap">
//                 ECycleGreen
//               </span>
//               {/* Short name for smaller screens to save space */}
//               <span className="block xl:hidden text-green-600 text-2xl font-bold ml-2 tracking-wide">
//                 ECG
//               </span>
//             </Link>
//           </div>

//           {/* --- 2. Desktop Nav (Centered) --- */}
//           <div className="hidden md:flex items-center justify-center gap-1 lg:gap-4">
//             {navItems.map((item) => (
//               !item.children ? (
//                 <NavLink key={item.name} to={item.path} onClick={closeAllMenus}>
//                   {item.name}
//                 </NavLink>
//               ) : (
//                 // Dropdown Trigger
//                 <div 
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => setIsServicesOpen(true)}
//                   onMouseLeave={() => setIsServicesOpen(false)}
//                 >
//                   <button
//                     className={`flex items-center px-2 py-2 text-sm font-medium transition-colors duration-300 ${
//                        isServicesOpen || location.pathname.includes(item.path) ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
//                     }`}
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   >
//                     {item.name}
//                     <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                   </button>
               
//                   <AnimatePresence>
//                     {isServicesOpen && (
//                       <motion.div
//                         variants={dropdownVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px]" // Fixed width, centered
//                       >
//                         <div className="bg-white shadow-xl rounded-xl border border-gray-100 p-4">
//                           <div className="grid grid-cols-2 gap-2">
//                             {item.children.map(child => (
//                               <Link
//                                 key={child.name}
//                                 to={child.path}
//                                 onClick={closeAllMenus}
//                                 className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group/item"
//                               >
//                                 <div className="mt-1 p-1.5 bg-green-100 text-green-600 rounded-md group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
//                                     <child.icon size={16} />
//                                 </div>
//                                 <div>
//                                   <span className="block text-sm font-semibold text-gray-800 group-hover/item:text-green-700">{child.name}</span>
//                                   <span className="text-xs text-gray-500 line-clamp-1">{child.description}</span>
//                                 </div>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               )
//             ))}
//           </div>

//           {/* --- 3. Auth Buttons (Right Aligned) --- */}
//           <div className="flex-1 flex justify-end items-center gap-3">
            
//             {/* Mobile Toggle (Hidden on Desktop) */}
//             <div className="md:hidden">
//                 <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-gray-700 hover:text-green-600 p-1"
//                 >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Desktop Auth UI */}
//             <div className="hidden md:flex items-center">
//                 {user && profile ? (
//                 // --- Logged In ---
//                 <div 
//                     className="relative"
//                     onMouseEnter={() => setIsProfileOpen(true)}
//                     onMouseLeave={() => setIsProfileOpen(false)}
//                 >
//                     <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all">
//                         <div className="text-right hidden lg:block">
//                             <p className="text-xs font-bold text-gray-700 leading-none">{profile.full_name}</p>
//                             <p className="text-[10px] text-gray-500 leading-none pt-1">View Profile</p>
//                         </div>
//                         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
//                             <User size={18} />
//                         </div>
//                     </button>
                    
//                     <AnimatePresence>
//                     {isProfileOpen && (
//                         <motion.div
//                         variants={dropdownVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         className="absolute right-0 top-full pt-2 w-56"
//                         >
//                         <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden">
//                             <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
//                                 <p className="text-sm font-semibold text-gray-900 truncate">{profile.full_name}</p>
//                                 <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                             </div>
//                             <div className="p-1">
//                             {isAdmin && (
//                                 <Link to="/admin" onClick={closeAllMenus} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
//                                 <Settings size={16} /> Admin Panel
//                                 </Link>
//                             )}
//                             <Link to="/profile" onClick={closeAllMenus} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
//                                 <User size={16} /> My Profile
//                             </Link>
//                             <div className="h-px bg-gray-100 my-1" />
//                             <button
//                                 onClick={handleSignOut}
//                                 disabled={actionLoading}
//                                 className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors"
//                             >
//                                 {actionLoading ? <Loader2 size={16} className="animate-spin" /> : <LogOut size={16} />}
//                                 Logout
//                             </button>
//                             </div>
//                         </div>
//                         </motion.div>
//                     )}
//                     </AnimatePresence>
//                 </div>
//                 ) : (
//                 // --- Logged Out ---
//                 <Link
//                     to="/auth"
//                     className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                 >
//                     <User size={16} />
//                     <span>Login</span>
//                 </Link>
//                 )}
//             </div>
//           </div>

//         </div>
//       </nav>

//       {/* --- Mobile Menu (Full Width Overlay) --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
//           >
//             <div className="px-4 pt-2 pb-6 space-y-1 h-[calc(100vh-4rem)] overflow-y-auto">
//               {navItems.map((item) => (
//                 !item.children ? (
//                   <NavLink key={item.name} to={item.path} isMobile onClick={closeAllMenus}>
//                     {item.name}
//                   </NavLink>
//                 ) : (
//                   <div key={item.name} className="border-b border-gray-50">
//                     <button
//                       onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                       className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700"
//                     >
//                       {item.name}
//                       <ChevronDown size={20} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
//                     </button>
                    
//                     <AnimatePresence>
//                       {isMobileServicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="bg-gray-50"
//                         >
//                           {item.children.map(child => (
//                             <Link
//                               key={child.name}
//                               to={child.path}
//                               onClick={closeAllMenus}
//                               className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:text-green-600 border-l-2 border-transparent hover:border-green-500"
//                             >
//                               <child.icon size={18} />
//                               <span>{child.name}</span>
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 )
//               ))}
              
//               {/* Mobile Auth Section */}
//               <div className="pt-6 pb-4">
//                 {user && profile ? (
//                     <div className="bg-gray-50 rounded-xl p-4">
//                         <div className="flex items-center gap-3 mb-4">
//                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                                 <User size={20} />
//                             </div>
//                             <div>
//                                 <p className="font-bold text-gray-900">{profile.full_name}</p>
//                                 <p className="text-xs text-gray-500">{user.email}</p>
//                             </div>
//                         </div>
//                          {isAdmin && (
//                             <Link to="/admin" onClick={closeAllMenus} className="block w-full text-center mb-2 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
//                                 Admin Dashboard
//                             </Link>
//                         )}
//                         <button
//                             onClick={handleSignOut}
//                             className="flex items-center justify-center gap-2 w-full py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium"
//                         >
//                             <LogOut size={16} /> Logout
//                         </button>
//                     </div>
//                 ) : (
//                     <Link
//                         to="/auth"
//                         onClick={closeAllMenus}
//                         className="block w-full py-3 bg-green-600 text-white text-center rounded-xl font-bold shadow-lg"
//                     >
//                         Login / Sign Up
//                     </Link>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// // --- Local Logo Components (Kept as provided) ---
// export const ECycleGreenLogo = ({ className = "w-10 h-10" }) => (
//   <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="url(#gradLogo1)" strokeWidth="12" strokeLinecap="round"/>
//     <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="url(#gradLogo2)" strokeWidth="12" strokeLinecap="round" strokeDasharray="0.1 20"/>
//     <path d="M50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30Z" fill="url(#gradLogo3)"/>
//     <defs>
//       <linearGradient id="gradLogo1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#00AEEF"/>
//         <stop offset="1" stopColor="#0072FF"/>
//       </linearGradient>
//       <linearGradient id="gradLogo2" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#A960FF"/>
//         <stop offset="1" stopColor="#FF00A8"/>
//       </linearGradient>
//       <linearGradient id="gradLogo3" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#00F0FF"/>
//         <stop offset="1" stopColor="#00AEEF"/>
//       </linearGradient>
//     </defs>
//   </svg>
// );

// export const ImageLogo = ({ src, alt = "Logo", className = "w-10 h-10" }) => (
//   <img src={src} alt={alt} className={className} />
// );

// export default Header;
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Recycle, ChevronDown, Server, ShieldCheck,
  Box, RefreshCw, ServerOff, FileText, Users, Trash2,
  LogOut, User, Settings, Loader2
} from 'lucide-react';
// Using the real useAuth hook from the path you provided
import {useAuth} from '../../context/AuthContext';

// --- Mock Auth Context (for standalone preview) ---
// This is necessary for the component to render in an isolated preview.
// In your real project, you'll use the import above.
// const useAuth = () => ({
//   user: null, // or { email: 'test@example.com' }
//   profile: null, // or { full_name: 'Test User' }
//   isAdmin: false,
//   signOut: async () => console.log('Sign Out'),
//   actionLoading: false,
// });
// --- End Mock ---


// --- Logo Components (Defined locally as in your file) ---
export const ECycleGreenLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="url(#gradLogo1)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="url(#gradLogo2)" strokeWidth="12" strokeLinecap="round" strokeDasharray="0.1 20"/>
    <path d="M50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30Z" fill="url(#gradLogo3)"/>
    <defs>
      <linearGradient id="gradLogo1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00AEEF"/><stop offset="1" stopColor="#0072FF"/>
      </linearGradient>
      <linearGradient id="gradLogo2" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A960FF"/><stop offset="1" stopColor="#FF00A8"/>
      </linearGradient>
      <linearGradient id="gradLogo3" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF"/><stop offset="1" stopColor="#00AEEF"/>
      </linearGradient>
    </defs>
  </svg>
);
export const ImageLogo = ({ src, alt = "Logo", className = "w-10 h-10" }) => (
  <img src={src} alt={alt} className={className} onError={(e) => e.target.style.display = 'none'} />
);
// --- End Logo Components ---


// --- Navigation Configuration ---
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services', 
    children: [
      { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
      { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping.' },
      { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly e-waste recycling.' },
      { name: 'Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations.' },
      { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value for old equipment.' },
      { name: 'Decommissioning', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe secure decommissioning.' },
      { name: 'Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management.' },
      { name: 'Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert recycling advice.' },
      { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free junk removal.' },
    ]
  },
  { name: 'Our Laptops', path: '/laptops' },
  { name: 'Accepted Items', path: '/accepted-items'},
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Contact', path: '/contact' },
];

// --- Reusable NavLink Component ---
const NavLink = ({ to, children, isMobile, onClick, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-300 ${
        isMobile 
          ? 'block w-full text-left px-4 py-3 text-base' 
          : 'px-3 py-2' // Compact padding for desktop
      } ${
        isActive
          ? 'text-green-600 font-semibold'
          : 'text-gray-600 hover:text-green-600'
      } ${className || ''} group`}
    >
      {children}
      {/* Subtle Animated underline for desktop */}
      {!isMobile && (
        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-green-500 rounded-full transition-all duration-300 ease-out ${
          isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
        }`}></span>
      )}
    </Link>
  );
};

// --- Main Header Component ---
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  // Using the real auth context
  const { user, profile, isAdmin, signOut, actionLoading } = useAuth();

  // Close all menus on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsProfileOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    closeAllMenus();
    navigate('/');
  };

  // Animations
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -5 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15 } },
    exit: { opacity: 0, scale: 0.95, y: -5, transition: { duration: 0.1 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      {/* --- Tier 1: Top Bar (Logo & Auth) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 border-b border-gray-100">
          
          {/* Left: Logo & Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="flex items-center gap-2 group"
              onClick={closeAllMenus}
            >
              <ImageLogo src="/mainlogo.png" className="h-9 w-auto" />
              {/* <ECycleGreenLogo className="w-9 h-9 transition-transform duration-700 ease-in-out group-hover:rotate-180" /> */}
              <span className="hidden sm:block text-green-600 text-2xl font-bold ml-2 tracking-wide whitespace-nowrap">
                ECycleGreen
              </span>
            </Link>
          </div>

          {/* Right: Auth & Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Desktop Auth UI */}
            <div className="hidden md:flex items-center">
              {user && profile ? (
                // Logged In
                <div 
                  className="relative"
                  onMouseEnter={() => setIsProfileOpen(true)}
                  onMouseLeave={() => setIsProfileOpen(false)}
                >
                  <button 
                    onClick={() => setIsProfileOpen(o => !o)}
                    className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <span className="text-sm font-medium text-gray-700">{profile.full_name.split(' ')[0]}</span>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
                      <User size={18} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute right-0 top-full pt-2 w-56"
                      >
                        <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden">
                          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-900 truncate">{profile.full_name}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                          </div>
                          <div className="p-1">
                            <div className="h-px bg-gray-100 my-1" />
                            <button
                              onClick={handleSignOut}
                              disabled={actionLoading}
                              className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              {actionLoading ? <Loader2 size={16} className="animate-spin" /> : <LogOut size={16} />}
                              Logout
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Logged Out
                <Link
                  to="/auth"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <User size={16} />
                  <span>Login / Sign Up</span>
                </Link>
              )}
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 p-1"
                aria-label="Open main menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Tier 2: Navigation Bar (Links) --- */}
      <nav className="hidden md:flex justify-center items-center h-12">
        <div className="flex items-center gap-1 lg:gap-4">
          {navItems.map((item) => (
            !item.children ? (
              // Regular Nav Link
              <NavLink key={item.name} to={item.path} onClick={closeAllMenus}>
                {item.name}
              </NavLink>
            ) : (
              // Services Dropdown
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                     isServicesOpen || (location.pathname.startsWith(item.path) && location.pathname !== '/') ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {item.name}
                  <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px]" // Centered dropdown
                    >
                      <div className="bg-white shadow-xl rounded-xl border border-gray-100 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {item.children.map(child => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeAllMenus}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group/item"
                            >
                              <div className="mt-1 p-1.5 bg-green-100 text-green-600 rounded-md group-hover/item:bg-green-600 group-hover/item:text-white transition-colors">
                                <child.icon size={16} />
                              </div>
                              <div>
                                <span className="block text-sm font-semibold text-gray-800 group-hover/item:text-green-700">{child.name}</span>
                                <span className="text-xs text-gray-500 line-clamp-1">{child.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          ))}
        </div>
      </nav>

      {/* --- Mobile Menu (Overlay) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {/* This container ensures the mobile menu is scrollable on small screens */}
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  !item.children ? (
                    // Regular Mobile Link
                    <NavLink 
                      key={item.name} 
                      to={item.path} 
                      isMobile 
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    // Mobile Services Accordion
                    <div key={item.name} className="border-b border-gray-100">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700"
                      >
                        {item.name}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            {item.children.map(child => (
                              <Link
                                key={child.name}
                                to={child.path}
                                onClick={closeAllMenus}
                                className="flex items-center gap-3 py-3 px-6 text-sm text-gray-600 hover:text-green-600 border-l-2 border-transparent hover:border-green-500"
                              >
                                <child.icon size={18} />
                                <span>{child.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                ))}
              </div>
              
              {/* Mobile Auth Section */}
              <div className="border-t border-gray-100 pt-4 pb-6 px-4">
                {user && profile ? (
                  // Logged In (Mobile)
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{profile.full_name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    {isAdmin && (
                      <Link to="/admin" onClick={closeAllMenus} className="block w-full text-center mb-2 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      disabled={actionLoading}
                      className="flex items-center justify-center gap-2 w-full py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium"
                    >
                      {actionLoading ? <Loader2 size={16} className="animate-spin" /> : <LogOut size={16} />}
                      Logout
                    </button>
                  </div>
                ) : (
                  // Logged Out (Mobile)
                  <Link
                    to="/auth"
                    onClick={closeAllMenus}
                    className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-3 rounded-full text-base font-medium hover:from-green-400 hover:to-blue-500 transition-all shadow-lg"
                  >
                    Login / Sign Up
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Exporting as default as is common practice for page components
export default Header;