import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  onSnapshot
} from 'firebase/firestore';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Recycle, 
  Cpu, 
  Layers, 
  Zap, 
  BarChart, 
  User,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Award,
  Users,
  PlayCircle,
  Briefcase,
  Target,
  Eye,
  Heart,
  Zap as ZapIcon, // Renaming for Core Values
  Shield,
  Star
} from 'lucide-react';

// --- (Firebase Configuration) ---
// These global variables are expected to be injected by the environment.
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : { apiKey: "MOCK_API_KEY", authDomain: "MOCK_AUTH_DOMAIN", projectId: "MOCK_PROJECT_ID" };

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- CONTEXT ---

// Authentication Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    // setLogLevel('debug'); // Uncomment for Firestore debugging
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setUserId(user.uid);
      } else {
        try {
          if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
          } else {
            await signInAnonymously(auth);
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userId, isAuthReady }}>
      {isAuthReady ? children : <LoadingScreen />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Navigation/App Context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <AppContext.Provider value={{ currentPage, navigate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

// --- HOOKS ---

/**
 * Hook to detect if an element is on screen.
 * Triggers animations.
 */
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options?.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!options?.triggerOnce) {
          setIsVisible(false);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- COMPONENTS ---

/**
 * New EonCircular Logo Component
 */
const EonCircularLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="url(#gradLogo1)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="url(#gradLogo2)" strokeWidth="12" strokeLinecap="round" strokeDasharray="0.1 20"/>
    <path d="M50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30Z" fill="url(#gradLogo3)"/>
    <defs>
      <linearGradient id="gradLogo1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00AEEF"/>
        <stop offset="1" stopColor="#0072FF"/>
      </linearGradient>
      <linearGradient id="gradLogo2" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A960FF"/>
        <stop offset="1" stopColor="#FF00A8"/>
      </linearGradient>
      <linearGradient id="gradLogo3" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF"/>
        <stop offset="1" stopColor="#00AEEF"/>
      </linearGradient>
    </defs>
  </svg>
);


/**
 * A simple animated fade-in component
 */
const FadeIn = ({ children, delay = 0, duration = 500, triggerOnce = true, direction = 'up' }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce });
  
  const initialTransform = {
    up: 'translateY(20px)',
    down: 'translateY(-20px)',
    left: 'translateX(20px)',
    right: 'translateX(-20px)',
  }[direction];

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0)' : initialTransform,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Animated Number Counter
 */
const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const endValue = end;
      const startTime = Date.now();

      const easeOutQuad = (t) => t * (2 - t);

      const frame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);
        
        setCount(Math.floor(easedProgress * endValue));

        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};


const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div className="text-white flex flex-col items-center space-y-4">
      <EonCircularLogo className="w-16 h-16 animate-spin" />
      <span className="text-2xl font-medium tracking-wider text-gray-300">EonCircular</span>
    </div>
  </div>
);

const Header = () => {
  const { navigate, currentPage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Our Laptops', 'Sustainability', 'Education', 'Contact Us'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ page }) => (
    <button
      onClick={() => {
        navigate(page);
        setIsMobileMenuOpen(false);
      }}
      className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isMobileMenuOpen ? 'block w-full text-left' : ''
      } ${
        currentPage === page
          ? 'text-white'
          : 'text-gray-400 hover:text-white'
      } group`}
    >
      {page}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out ${
        currentPage === page ? 'w-1/2' : 'w-0 group-hover:w-1/2'
      }`}></span>
    </button>
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
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => navigate('Home')}
          >
            <EonCircularLogo className="w-10 h-10 transition-transform duration-500 ease-out group-hover:rotate-180" />
            <span className="text-white text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item} page={item} />
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => navigate('Auth')}
              className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('Auth')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Sign Up
            </button>
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
            <NavLink key={item} page={item} />
          ))}
          <div className="border-t border-gray-700 pt-4 pb-2 space-y-2">
            <button
              onClick={() => {
                navigate('Auth');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate('Auth');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const { navigate } = useApp();
  const supportLinks = [
    'Terms & Conditions', 'Privacy Policy', 'Modern Slavery', 
    'UK Battery & WEEE Regulations', 'ISO & OHSAS Certifications', 
    'Quality Policy', 'Warranty Information'
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Certs */}
          <div className="space-y-4">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => navigate('Home')}
            >
              <EonCircularLogo className="w-10 h-10" />
              <span className="text-white text-3xl font-bold ml-3 tracking-wider">EonCircular</span>
            </div>
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
              {['Home', 'About Us', 'Our Laptops', 'Sustainability'].map(page => (
                <li key={page}>
                  <button onClick={() => navigate(page)} className="hover:text-white transition-colors hover:translate-x-1 duration-200">{page}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold tracking-wider">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors text-sm">{link}</a>
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

/**
 * Testimonial Carousel Component
 */
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "The quality of the refurbished laptop I received was outstanding. It looked and felt brand new. Their commitment to sustainability is what won me over.",
      name: "Sarah J.",
      title: "Eco-Conscious Developer"
    },
    {
      quote: "EonCircular's service is top-notch. They helped our school district secure hundreds of high-quality laptops at an affordable price. A seamless process from start to finish.",
      name: "Michael T.",
      title: "IT Director, Public Schools"
    },
    {
      quote: "I was skeptical about 'refurbished' at first, but the Carbon-Neutral laptop I bought exceeded all my expectations. Plus, I feel good about the purchase.",
      name: "Emily R.",
      title: "Freelance Designer"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-xl md:text-2xl font-light text-gray-200 italic">"{item.quote}"</p>
            <p className="text-lg font-semibold text-white mt-6">{item.name}</p>
            <p className="text-sm text-cyan-400">{item.title}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-600'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

/**
 * Reusable CTA Component
 */
const CallToAction = ({ title, text, buttonText, buttonLink }) => {
  const { navigate } = useApp();
  return (
    <section className="py-24" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/2b2b2b?text=Dark+Texture&font=inter')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-light text-gray-200">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-10">
            {text}
          </p>
          <button
            onClick={() => navigate(buttonLink)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            {buttonText}
          </button>
        </FadeIn>
      </div>
    </section>
  );
};


// --- PAGES ---

const HomePage = () => {
  const { navigate } = useApp();
  
  const sustainabilityItems = [
    { name: 'CO2 emissions', icon: Recycle, img: 'https://placehold.co/600x400/003973/ffffff?text=CO2&font=inter' },
    { name: 'Water Usage', icon: Layers, img: 'https://placehold.co/600x400/005f9e/ffffff?text=Water&font=inter' },
    { name: 'Rare Minerals', icon: Cpu, img: 'https://placehold.co/600x400/008ac5/ffffff?text=Minerals&font=inter' },
    { name: 'E-waste', icon: Zap, img: 'https://placehold.co/600x400/39b5e0/ffffff?text=E-waste&font=inter' },
    { name: 'Device Re-use', icon: ShieldCheck, img: 'https://placehold.co/600x400/8cdeea/000000?text=Re-use&font=inter' },
  ];
  
  const qualityItems = [
    { icon: Award, title: "BSI Kitemark Certified", desc: "The gold standard for quality and safety in refurbished products." },
    { icon: CheckCircle, title: "300-Point Inspection", desc: "Every device undergoes a rigorous check to ensure 'like-new' performance." },
    { icon: TrendingUp, title: "A-Grade Cosmetics", desc: "No grades, just the best. We only sell devices in pristine condition." },
  ];
  
  const brands = ['HP', 'Dell', 'Lenovo', 'Apple', 'Microsoft', 'Acer', 'Asus'];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          poster="https://placehold.co/1920x1080/000000/111111?text=Loading+Video...&font=inter"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-close-up-132 circuit-board-close-up-132-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="right">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                The Future of Tech
                <br />
                is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Circular.</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-light text-gray-300 max-w-lg">
                Experience world-class, carbon-neutral refurbished laptops.
                Unmatched quality, unbeatable sustainability.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('Our Laptops')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Browse Laptops
                </button>
                <button
                  onClick={() => navigate('Sustainability')}
                  className="bg-transparent border-2 border-gray-500 text-gray-300 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:border-gray-700 transition-all"
                >
                  Our Mission
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* --- Animated Stats Section (NEW) --- */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FadeIn delay={0}>
              <div className="p-6">
                <Recycle size={48} className="mx-auto text-green-400 mb-4" />
                <h3 className="text-5xl md:text-6xl"><CountUp end={1200} suffix="+" /></h3>
                <p className="text-xl text-gray-400 mt-2">Tons of CO2 Saved</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="p-6">
                <Cpu size={48} className="mx-auto text-cyan-400 mb-4" />
                <h3 className="text-5xl md:text-6xl"><CountUp end={50000} suffix="+" /></h3>
                <p className="text-xl text-gray-400 mt-2">Devices Given New Life</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="p-6">
                <Users size={48} className="mx-auto text-purple-400 mb-4" />
                <h3 className="text-5xl md:text-6xl"><CountUp end={1500} suffix="+" /></h3>
                <p className="text-xl text-gray-400 mt-2">Happy Partners & Clients</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- Commitment to Quality Section (Redesigned) --- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Commitment to Quality</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
              We don't just refurbish. We remanufacture to a standard that is
              <span className="text-white"> better than new.</span>
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {qualityItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 150}>
                <div className="p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mt-4">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Brands Marquee Section (NEW) --- */}
      <section className="py-16 bg-black border-y border-gray-800">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {brands.map(brand => <li key={brand} className="text-3xl font-bold text-gray-600">{brand}</li>)}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {brands.map(brand => <li key={brand} className="text-3xl font-bold text-gray-600">{brand}</li>)}
          </ul>
        </div>
      </section>

      {/* --- Sustainability Section (Restyled) --- */}
      <section className="py-24 bg-gray-900" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-light text-center">
              The IT industry needs to be
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mt-2">
              Greater with Less.
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 mt-20 rounded-xl overflow-hidden shadow-2xl">
            {sustainabilityItems.map((item, index) => (
              <FadeIn key={item.name} delay={index * 100}>
                <div className="group relative h-80 overflow-hidden cursor-pointer">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-cyan-300 transform scale-100 group-hover:scale-125 transition-transform duration-300">
                      <item.icon size={48} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mt-4">{item.name}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={500}>
            <p className="text-center text-xl md:text-2xl text-gray-300 mt-16 max-w-4xl mx-auto">
              By choosing refurbished, you are helping to reduce <span className="text-white font-medium">CO2 production</span>, <span className="text-white font-medium">water usage</span> and the <span className="text-white font-medium">mining of rare earth minerals</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- "Our Process" Video Section (NEW) --- */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              See <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Our Process</span> in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
              From cosmetic grading to component-level diagnostics, see what makes
              an EonCircular laptop different.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-800">
              <img 
                src="https://placehold.co/1280x720/1a1a1a/333333?text=Our+Refurbishing+Process&font=inter" 
                alt="Our Process Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Testimonials Section (NEW) --- */}
      <section className="py-24" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/2b2b2b?text=Dark+Texture&font=inter')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-16">
              Trusted by <span className="font-semibold text-white">Leaders Worldwide</span>
            </h2>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>
      
      {/* --- Deliverables Section (Restyled) --- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-white mb-20">
              What We Deliver
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Quality', 'Consistency', 'Availability', 'Affordability'].map((item, index) => (
              <FadeIn key={item} delay={index * 150}>
                <div className="relative p-8 h-64 flex flex-col justify-end rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800 group">
                  <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img 
                    src={`https://placehold.co/400x300/${['1a237e', '283593', '303f9f', '3949ab'][index]}/ffffff?text=${item}&font=inter`} 
                    alt={item}
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                  />
                  <div className="relative">
                    <h3 className="text-4xl font-bold text-white z-10">{item}</h3>
                    <p className="text-blue-400 mt-2 font-medium group-hover:translate-x-1 transition-transform duration-300 z-10">
                      Learn More <ArrowRight size={16} className="inline-block ml-1" />
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- NEW "ABOUT US" PAGE ---
const AboutUsPage = () => {
  const { navigate } = useApp();

  const timelineEvents = [
    { year: 1992, title: "Our Foundation", desc: "We began our journey in the business of buying and supplying used IT equipment to every corner of the globe." },
    { year: 2015, title: "A New Focus", desc: "We decided to become the world's largest and highest quality refurbisher of laptop products, narrowing our focus to excel." },
    { year: 2017, title: "World-Class Facility", desc: "We built the world's leading facility for the remanufacturing and refurbishment of laptops, which remains the industry standard today." },
    { year: 2020, title: "Pioneering R&D", desc: "Embarked on over 1,000 mini research and development projects to perfect the consistent quality you see today." },
    { year: 2023, title: "BSI Kitemark Achieved", desc: "Became the only company worldwide to hold a BSI Kitemark for both remanufactured and refurbished laptops." },
  ];
  
  const coreValues = [
    { 
      icon: Eye, 
      title: "Vision", 
      desc: "If we wait for somebody else, it is already too late. Tomorrow belongs to the people and companies prepared to bet it all on red. The wheel is spinning." 
    },
    { 
      icon: Heart, 
      title: "Commitment", 
      desc: "Commitment to people, commitment to quality, commitment to outcomes. Commitment is an act, not a word." 
    },
    { 
      icon: ZapIcon, 
      title: "Courage", 
      desc: "Courage to spend 6 years building a world-class facility and raising the bar on what is considered 'the best quality used stock in the world'." 
    },
    { 
      icon: Shield, 
      title: "Integrity", 
      desc: "Integrity is the essential ingredient that retains your customer. It is about the essence and DNA of a company and does not have an on/off switch." 
    },
  ];

  const [hoveredValue, setHoveredValue] = useState(coreValues[0].title);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- About Hero Section --- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img 
          src="https://placehold.co/1920x1080/1a1a1a/333333?text=Our+Facility&font=inter" 
          alt="EonCircular Facility"
          className="absolute z-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Us</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              We built the world's leading facility to provide the highest quality
              refurbished laptops in the world.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* --- Animated Timeline Section (NEW) --- */}
      <section className="py-24 bg-gray-900" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-20">
              Our journey is the reason we are the market leader in quality.
              We started this process years before others in the market.
            </p>
          </FadeIn>
          
          <div className="relative max-w-2xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-800 rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <FadeIn key={index} triggerOnce={true}>
                <div className="relative mb-12 flex items-center md:w-full">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-blue-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    } md:w-[calc(50%-2rem)]`}>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{event.year}</h3>
                    <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-400">{event.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Facility Video Section --- */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">World-Class Facility</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
              See the technology and the people that make our quality possible.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer border-2 border-gray-800">
              <img 
                src="https://placehold.co/1280x720/1a1a1a/333333?text=Our+Facility+Tour&font=inter" 
                alt="Our Facility Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <PlayCircle size={100} className="text-white text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping -z-10 group-hover:animate-none"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Dynamic Stats Section --- */}
      <section className="py-24 bg-gray-900" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FadeIn delay={0}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={30} suffix="+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">Years in the Market</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={10} suffix="M+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">Used Assets Sold</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="p-6">
                <h3 className="text-6xl md:text-7xl"><CountUp end={1000} suffix="+" /></h3>
                <p className="text-2xl text-gray-400 mt-2">R&D Projects</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* --- Core Values Section (ADVANCED) --- */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
              Our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Core Values</span>
            </h2>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Interactive Hub */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gray-900 border-2 border-gray-800"></div>
              <div className="absolute inset-4 rounded-full bg-black border border-gray-700"></div>
              
              {/* Central Content */}
              <div className="absolute inset-16 md:inset-24 rounded-full bg-gray-900 flex items-center justify-center text-center p-4 border-2 border-blue-500 shadow-xl shadow-blue-500/20">
                {coreValues.map(value => (
                  <div 
                    key={value.title}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                      hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <value.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{value.title}</h3>
                  </div>
                ))}
              </div>

              {/* Spoke Buttons */}
              {coreValues.map((value, index) => {
                const angle = (index / coreValues.length) * 2 * Math.PI - (Math.PI / 2); // Start at top
                const x = Math.cos(angle) * 50 + 50; // 50% radius
                const y = Math.sin(angle) * 50 + 50;
                
                return (
                  <button
                    key={value.title}
                    className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:scale-110"
                    style={{ 
                      top: `calc(${y}% - 2rem)`, 
                      left: `calc(${x}% - 2rem)`,
                      '@media (min-width: 768px)': {
                        top: `calc(${y}% - 2.5rem)`, 
                        left: `calc(${x}% - 2.5rem)`,
                      }
                    }}
                    onMouseEnter={() => setHoveredValue(value.title)}
                  >
                    <value.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 transition-colors duration-300" />
                  </button>
                );
              })}
            </div>
            
            {/* Description Area */}
            <div className="relative w-full max-w-md h-48 lg:h-96">
              {coreValues.map(value => (
                <div 
                  key={value.title}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredValue === value.title ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <FadeIn direction="up">
                    <h3 className="text-3xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-lg text-gray-300">{value.desc}</p>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <CallToAction 
        title="Let's have a conversation"
        text="Get in touch to learn how our products can provide for you."
        buttonText="Contact Us"
        buttonLink="Contact Us"
      />
    </div>
  );
};


// Placeholder Pages
const PlaceholderPage = ({ title }) => {
  const { userId } = useAuth();
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-6xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{title}</h1>
          <p className="text-2xl text-gray-300">This page is under construction.</p>
          <div className="mt-8 p-4 bg-gray-900 border border-gray-700 rounded-lg max-w-md">
            <p className="text-gray-400">Your User ID (for testing):</p>
            <p className="text-blue-400 text-sm break-all">{userId || 'loading...'}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { userId } = useAuth();
  
  return (
    <div className="pt-20 min-h-screen bg-black flex items-center justify-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/1f1f1f?text=Subtle+Circuit+BG&font=inter')" }}>
      <FadeIn>
        <div className="relative bg-gray-900 p-10 rounded-lg shadow-2xl w-full max-w-md border border-gray-800 overflow-hidden">
          {/* Gradient Glow */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <EonCircularLogo className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            
            <div className="mb-6 p-3 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400 text-sm">Your User ID (for testing):</p>
              <p className="text-center text-blue-400 text-xs break-all">{userId || 'loading...'}</p>
            </div>
            
            <form className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Password</label>
                <input type="password" id="password" className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            
            <p className="text-center text-gray-400 mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 font-medium ml-2"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};


// --- APP ---

const App = () => {
  const { currentPage } = useContext(AppContext);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About Us':
        return <AboutUsPage />; // <-- NEWLY ADDED
      case 'Our Laptops':
        return <PlaceholderPage title="Our Laptops" />;
      case 'Sustainability':
        return <PlaceholderPage title="Sustainability" />;
      case 'Education':
        return <PlaceholderPage title="Education" />;
      case 'Contact Us':
        return <PlaceholderPage title="Contact Us" />;
      case 'Auth':
        return <AuthPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-inter bg-black">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Main export wrapped in providers
export default () => (
  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </AuthProvider>
);

