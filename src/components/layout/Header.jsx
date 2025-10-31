
// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   Menu, 
// //   X, 
// //   Recycle, 
// //   ChevronDown, 
// //   Wrench, 
// //   DatabaseZap, 
// //   Briefcase, 
// //   HardDrive, 
// //   ShieldCheck 
// // } from 'lucide-react'; // Added new icons

// // // Placeholder logo component to make the file self-contained
// // // You can replace this with your actual Logo import
// // const EonCircularLogo = ({ className = "" }) => (
// //   <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
// //     <Recycle size={24} />
// //   </div>
// // );

// // export const Header = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
// //   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
// //   // Get current page location
// //   const location = useLocation();
// //   const currentPagePath = location.pathname;

// //   // Updated nav items to include services with children
// //   const navItems = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About Us', path: '/about' },
// //     { 
// //       name: 'Services', 
// //       path: '/services', // Fallback path
// //       children: [
// //         { name: 'Laptop Repairs', path: '/services/repairs', icon: Wrench, description: 'Fast, expert repairs to get you back to work.' },
// //         { name: 'Secure Data Erasure', path: '/services/data-erasure', icon: DatabaseZap, description: 'Certified data wiping for your peace of mind.' },
// //         { name: 'IT Disposals (ITAD)', path: '/services/it-disposals', icon: Briefcase, description: 'Responsible and secure asset disposition.' },
// //         { name: 'Device Upgrades', path: '/services/upgrades', icon: HardDrive, description: 'Boost performance with RAM and SSD upgrades.' },
// //         { name: 'Extended Warranty', path: '/services/warranty', icon: ShieldCheck, description: 'Protect your investment with our extra coverage.' },
// //         { name: 'WEEE Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
// //       ]
// //     },
// //     { name: 'Our Laptops', path: '/laptops' },
// //     { name: 'Sustainability', path: '/sustainability' },
// //     { name: 'Education', path: '/education' },
// //     { name: 'Contact Us', path: '/contact' },
// //   ];

// //   // Close all menus on location change
// //   useEffect(() => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     setIsMobileServicesOpen(false);
// //   }, [location]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const closeAllMenus = () => {
// //     setIsMobileMenuOpen(false);
// //     setIsServicesOpen(false);
// //     // We keep mobile services open/closed state persistent until mobile menu is closed
// //   };

// //   const NavLink = ({ item }) => (
// //     <Link
// //       to={item.path}
// //       onClick={closeAllMenus}
// //       className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// //         isMobileMenuOpen ? 'block w-full text-left' : ''
// //       } ${
// //         currentPagePath === item.path
// //           ? 'text-green-600 font-semibold'
// //           : 'text-gray-500 hover:text-gray-900'
// //       } group`}
// //     >
// //       {item.name}
// //       {/* UPDATED: Underline color changed to green/blue gradient */}
// //       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
// //         currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
// //       }`}></span>
// //     </Link>
// //   );

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// //         isScrolled || isMobileMenuOpen ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
// //       }`}
// //     >
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
// //           {/* Logo */}
// //           <Link 
// //             to="/"
// //             className="flex-shrink-0 flex items-center cursor-pointer group"
// //             onClick={closeAllMenus}
// //           >
// //             {/* Using placeholder logo */}
// //             <EonCircularLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
// //             <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
// //           </Link>

// //           {/* Desktop Nav */}
// //           <div className="hidden md:flex items-center space-x-2">
// //             {navItems.map((item) => (
// //               item.children ? (
// //                 // Desktop Services Dropdown
// //                 <div 
// //                   key={item.name}
// //                   className="relative"
// //                   onMouseEnter={() => setIsServicesOpen(true)}
// //                   onMouseLeave={() => setIsServicesOpen(false)}
// //                 >
// //                   <button
// //                     className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
// //                       currentPagePath.startsWith(item.path)
// //                         ? 'text-white'
// //                         : 'text-gray-400 hover:text-white'
// //                     } group`}
// //                   >
// //                     {item.name}
// //                     <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
// //                   </button>

               
// //                   <AnimatePresence>
// //     {isServicesOpen && (
// //       <motion.div
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         exit={{ opacity: 0, y: 10 }}
// //         transition={{ duration: 0.2 }}
// //         className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
// //       >
// //         {/* THIS IS THE CONTAINER THAT WAS MISSING IN YOUR SCREENSHOT */}
// //         <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-64 border border-gray-700">
          
// //           {/* This map function correctly renders links WITH ICONS */}
// //           {item.children.map(child => (
// //             <Link
// //               key={child.name}
// //               to={child.path}
// //               onClick={closeAllMenus}
// //               className="flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
// //             >
// //               <child.icon size={18} className="text-blue-400" />
// //               <span>{child.name}</span>
// //             </Link>
// //           ))}
// //         </div>
// //       </motion.div>
// //     )}
// //   </AnimatePresence>
// //                 </div>
// //               ) : (
// //                 // Regular Nav Link
// //                 <NavLink key={item.name} item={item} />
// //               )
// //             ))}
// //           </div>

// //           {/* Auth Buttons (Desktop) */}
// //           <div className="hidden md:flex items-center space-x-3">
// //              <Link
// //               to="/auth"
// //               onClick={closeAllMenus}
// //               className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
// //             >
// //               Login / Sign Up
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="text-gray-300 hover:text-white p-2 rounded-md"
// //             >
// //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg overflow-hidden"
// //           >
// //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //               {navItems.map((item) => (
// //                 item.children ? (
// //                   // Mobile Services Accordion
// //                   <div key={item.name}>
// //                     <button
// //                       onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
// //                       className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-full text-left flex justify-between items-center text-gray-400 hover:text-white group"
// //                     >
// //                       <span>{item.name}</span>
// //                       <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
// //                     </button>
// //                     {/* Mobile Submenu */}
// //                     <AnimatePresence>
// //                       {isMobileServicesOpen && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           className="pl-8 pb-2 overflow-hidden"
// //                         >
// //                           {item.children.map(child => (
// //                             <Link
// //                               key={child.name}
// //                               to={child.path}
// //                               onClick={closeAllMenus}
// //                               className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-400 hover:text-white group"
// //                             >
// //                               {child.name}
// //                             </Link>
// //                           ))}
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 ) : (
// //                   // Regular Mobile Nav Link
// //                   <NavLink key={item.name} item={item} />
// //                 )
// //               ))}
// //               <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
// //                  <Link
// //                   to="/auth"
// //                   onClick={closeAllMenus}
// //                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
// //                 >
// //                   Login / Sign Up
// //                 </Link>
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Menu, 
//   X, 
//   Recycle, 
//   ChevronDown, 
//   Wrench, 
//   DatabaseZap, 
//   Briefcase, 
//   HardDrive, 
//   ShieldCheck 
// } from 'lucide-react'; // Added new icons

// // Placeholder logo component to make the file self-contained
// // You can replace this with your actual Logo import
// const EonCircularLogo = ({ className = "" }) => (
//   <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
//     <Recycle size={24} />
//   </div>
// );

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
//   // Get current page location
//   const location = useLocation();
//   const currentPagePath = location.pathname;

//   // Updated nav items to include services with children
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { 
//       name: 'Services', 
//       path: '/services', // Fallback path
//       children: [
//         { name: 'Laptop Repairs', path: '/services/repairs', icon: Wrench, description: 'Fast, expert repairs to get you back to work.' },
//         { name: 'Secure Data Erasure', path: '/services/data-erasure', icon: DatabaseZap, description: 'Certified data wiping for your peace of mind.' },
//         { name: 'IT Disposals (ITAD)', path: '/services/it-disposals', icon: Briefcase, description: 'Responsible and secure asset disposition.' },
//         { name: 'Device Upgrades', path: '/services/upgrades', icon: HardDrive, description: 'Boost performance with RAM and SSD upgrades.' },
//         { name: 'Extended Warranty', path: '/services/warranty', icon: ShieldCheck, description: 'Protect your investment with our extra coverage.' },
//         { name: 'WEEE Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
//       ]
//     },
//     { name: 'Our Laptops', path: '/laptops' },
//     { name: 'Sustainability', path: '/sustainability' },
//     { name: 'Education', path: '/education' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   // Close all menus on location change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setIsServicesOpen(false);
//     setIsMobileServicesOpen(false);
//   }, [location]);

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
//     // We keep mobile services open/closed state persistent until mobile menu is closed
//   };

//   const NavLink = ({ item }) => (
//     <Link
//       to={item.path}
//       onClick={closeAllMenus}
//       className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
//         isMobileMenuOpen ? 'block w-full text-left' : ''
//       } ${
//         currentPagePath === item.path
//           ? 'text-green-600 font-semibold'
//           : 'text-gray-500 hover:text-gray-900'
//       } group`}
//     >
//       {item.name}
//       {/* UPDATED: Underline color changed to green/blue gradient */}
//       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
//         currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
//       }`}></span>
//     </Link>
//   );

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled || isMobileMenuOpen ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link 
//             to="/"
//             className="flex-shrink-0 flex items-center cursor-pointer group"
//             onClick={closeAllMenus}
//           >
//             {/* Using placeholder logo */}
//             <EonCircularLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
//             <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-2">
//             {navItems.map((item) => (
//               item.children ? (
//                 // Desktop Services Dropdown
//                 <div 
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => setIsServicesOpen(true)}
//                   onMouseLeave={() => setIsServicesOpen(false)}
//                 >
//                   {/* --- FIX: Changed <button> to <Link> --- */}
//                   <Link
//                     to={item.path}
//                     onClick={closeAllMenus}
//                     className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
//                       currentPagePath.startsWith(item.path)
//                         ? 'text-white'
//                         : 'text-gray-400 hover:text-white'
//                     } group`}
//                   >
//                     {item.name}
//                     <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                   </Link>

               
//                   <AnimatePresence>
//                     {isServicesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
//                       >
//                         <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-64 border border-gray-700">
//                           {item.children.map(child => (
//                             <Link
//                               key={child.name}
//                               to={child.path}
//                               onClick={closeAllMenus}
//                               className="flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
//                             >
//                               <child.icon size={18} className="text-blue-400" />
//                               <span>{child.name}</span>
//                             </Link>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 // Regular Nav Link
//                 <NavLink key={item.name} item={item} />
//               )
//             ))}
//           </div>

//           {/* Auth Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-3">
//              <Link
//               to="/auth"
//               onClick={closeAllMenus}
//               className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
//             >
//               Login / Sign Up
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-300 hover:text-white p-2 rounded-md"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {navItems.map((item) => (
//                 item.children ? (
//                   // Mobile Services Accordion
//                   <div key={item.name}>
//                     {/* --- FIX: Split button into a Link and a separate Button --- */}
//                     <div className="flex items-center justify-between w-full">
//                       <Link
//                         to={item.path}
//                         onClick={closeAllMenus}
//                         className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-left text-gray-400 hover:text-white group flex-grow"
//                       >
//                         {item.name}
//                       </Link>
//                       <button
//                         onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                         className="text-gray-400 hover:text-white p-2 rounded-md flex-shrink-0"
//                       >
//                         <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
//                       </button>
//                     </div>
//                     {/* Mobile Submenu */}
//                     <AnimatePresence>
//                       {isMobileServicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="pl-8 pb-2 overflow-hidden"
//                         >
//                           {item.children.map(child => (
//                             <Link
//                               key={child.name}
//                               to={child.path}
//                               onClick={closeAllMenus}
//                               className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-400 hover:text-white group"
//                             >
//                               {child.name}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   // Regular Mobile Nav Link
//                   <NavLink key={item.name} item={item} />
//                 )
//               ))}
//               <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
//                  <Link
//                   to="/auth"
//                   onClick={closeAllMenus}
//                   className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
//                 >
//                   Login / Sign Up
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Recycle, 
  ChevronDown, 
  Wrench, 
  ShieldCheck,
  Server,      // Replaced Briefcase
  Truck,       // Added for Logistics
  HardHat,     // Added for On-site
  Box,           // Added for Drop-Off Box
  RefreshCw,     // Added for Buyback
  ServerOff,     // Added for Decommission
  FileText,      // Added for IT Asset Management
  Users,         // Added for Consultation
  Trash2,  
} from 'lucide-react'; // Updated icons

// Placeholder logo component to make the file self-contained
// You can replace this with your actual Logo import
const EonCircularLogo = ({ className = "" }) => (
  <div className={`p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full text-white ${className}`}>
    <Recycle size={24} />
  </div>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For desktop dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // For mobile accordion
  
  // Get current page location
  const location = useLocation();
  const currentPagePath = location.pathname;

  // --- UPDATED Nav Items ---
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services', // Fallback path
    //   children: [
    //     { name: 'ITAD', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
    //     { name: 'Data Destruction', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping for peace of mind.' },
    //     { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
    //     { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench, description: 'Expert device refurbishment and upgrades.' },
    //     { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck, description: 'Secure logistics and pickup services.' },
    //     { name: 'On-site Services', path: '/services/on-site', icon: HardHat, description: 'Services performed securely at your location.' },
    //   ]
     children: [
        { name: 'IT Asset Disposition', path: '/services/itad', icon: Server, description: 'Secure IT Asset Disposition.' },
        { name: 'Hard Drive Shredding', path: '/services/data-destruction', icon: ShieldCheck, description: 'Certified data wiping for peace of mind.' },
        { name: 'Electronics Recycling', path: '/services/recycling', icon: Recycle, description: 'Eco-friendly recycling of all your e-waste.' },
        { name: 'Refurbishment', path: '/services/refurbishment', icon: Wrench, description: 'Expert device refurbishment and upgrades.' },
        { name: 'Logistics & Pickup', path: '/services/logistics', icon: Truck, description: 'Secure logistics and pickup services.' },
        { name: 'On-site Services', path: '/services/on-site', icon: HardHat, description: 'Services performed securely at your location.' },
        { name: 'Electronic Recycling Drop-Off Box', path: '/services/drop-off-box', icon: Box, description: 'Convenient drop-off locations for your e-waste.' },
        { name: 'Equipment Buyback', path: '/services/equipment-buyback', icon: RefreshCw, description: 'Get value back for your old IT equipment.' },
        { name: 'Equipment Decommission', path: '/services/equipment-decommission', icon: ServerOff, description: 'Safe and secure decommissioning of IT assets.' },
        { name: 'IT Asset Management', path: '/services/it-asset-management', icon: FileText, description: 'Full lifecycle management of your IT assets.' },
        { name: 'Recycling Consultation', path: '/services/recycling-consultation', icon: Users, description: 'Expert advice on your recycling strategy.' },
        { name: 'Junk Removal', path: '/services/junk-removal', icon: Trash2, description: 'Hassle-free removal of IT junk.' },
      ]
    },
    { name: 'Our Laptops', path: '/laptops' },
    { name: 'Accepted Items', path: '/accepted-items'},
    { name: 'Sustainability', path: '/sustainability' },
    // { name: 'Education', path: '/education' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Close all menus on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

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
    // We keep mobile services open/closed state persistent until mobile menu is closed
  };

  const NavLink = ({ item }) => (
    <Link
      to={item.path}
      onClick={closeAllMenus}
      className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isMobileMenuOpen ? 'block w-full text-left' : ''
      } ${
        // --- COLOR FIX ---
        currentPagePath === item.path
          ? 'text-green-600 font-semibold'
          : 'text-gray-600 hover:text-gray-900' // Changed from light text
      } group`}
    >
      {item.name}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out ${
        currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
      }`}></span>
    </Link>
  );

  return (
    <header
      // --- COLOR FIX: Changed to white bg ---
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
        isScrolled || isMobileMenuOpen ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={closeAllMenus}
          >
            <EonCircularLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
            <span className="text-green-600 text-3xl font-bold ml-3 tracking-wider">ECycle Green</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.children ? (
                // Desktop Services Dropdown
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={item.path}
                    onClick={closeAllMenus}
                    // --- COLOR FIX ---
                    className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                      currentPagePath.startsWith(item.path)
                        ? 'text-green-600 font-semibold' // Active
                        : 'text-gray-600 hover:text-gray-900' // Inactive
                    } group`}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>

               
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                      >
                        {/* --- COLOR FIX: Dropdown container --- */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 border border-gray-200">
                          {item.children.map(child => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeAllMenus}
                              // --- COLOR FIX: Dropdown item ---
                              className="flex items-center gap-4 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            >
                              <child.icon size={18} className="text-green-500" />
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Regular Nav Link
                <NavLink key={item.name} item={item} />
              )
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
             <Link
              to="/auth"
              onClick={closeAllMenus}
              className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              Login / Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // --- COLOR FIX ---
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            // --- COLOR FIX: Mobile menu background ---
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.children ? (
                  // Mobile Services Accordion
                  <div key={item.name}>
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to={item.path}
                        onClick={closeAllMenus}
                        // --- COLOR FIX ---
                        className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-left text-gray-600 hover:text-gray-900 group flex-grow"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        // --- COLOR FIX ---
                        className="text-gray-600 hover:text-gray-900 p-2 rounded-md flex-shrink-0"
                      >
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 pb-2 overflow-hidden"
                        >
                          {/* --- UPDATED: Mobile submenu --- */}
                          {item.children.map(child => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={closeAllMenus}
                              // --- COLOR FIX ---
                              className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 block w-full text-left text-gray-500 hover:text-gray-900 group"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular Mobile Nav Link
                  <NavLink key={item.name} item={item} />
                )
              ))}
              {/* --- COLOR FIX: Mobile menu border --- */}
              <div className="border-t border-gray-200 pt-4 pb-2 space-y-2">
                 <Link
                  to="/auth"
                  onClick={closeAllMenus}
                  className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:to-blue-500 transition-all"
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

