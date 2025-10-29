import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EonCircularLogo } from '../common/Logo';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current page location
  const location = useLocation();
  const currentPagePath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Laptops', path: '/laptops' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Education', path: '/education' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ item }) => (
    <Link
      to={item.path}
      onClick={() => setIsMobileMenuOpen(false)}
      className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isMobileMenuOpen ? 'block w-full text-left' : ''
      } ${
        currentPagePath === item.path
          ? 'text-white'
          : 'text-gray-400 hover:text-white'
      } group`}
    >
      {item.name}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out ${
        currentPagePath === item.path ? 'w-1/2' : 'w-0 group-hover:w-1/2'
      }`}></span>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <EonCircularLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
            <span className="text-white text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <Link 
              to="/auth"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </Link> */}
            {/* <Link 
              to="/auth"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Sign Up
            </Link> */}
             <Link
              to="/auth"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Login / Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
            {/* <Link
              to="/auth"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link> */}
            {/* <Link
              to="/auth"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Sign Up
            </Link> */}
             <Link
              to="/auth"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
