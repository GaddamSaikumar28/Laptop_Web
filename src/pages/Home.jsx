import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/common/FadeIn';
import { CountUp } from '../components/common/CountUp';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { 
  Recycle, 
  Cpu, 
  Users,
  ShieldCheck,
  Layers,
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
  PlayCircle,
  ArrowRight
} from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();
  
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
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-close-up-132-large.mp4" type="video/mp4" />
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
                  onClick={() => navigate('/laptops')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Browse Laptops
                </button>
                <button
                  onClick={() => navigate('/sustainability')}
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
