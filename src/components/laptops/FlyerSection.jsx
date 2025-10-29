// src/components/laptops/FlyerSection.jsx
import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable card component for the flyers
 */
const FlyerCard = ({ title, subtitle, imageUrl, buttonText, buttonLink }) => {
  return (
    <motion.div
      className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-800"
      // Add a subtle lift and glow effect on hover
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(6, 182, 212, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
      />
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-3">{title}</h3>
        <p className="text-lg text-gray-300 mb-6">{subtitle}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center text-lg font-semibold text-cyan-400 hover:text-cyan-300 group w-fit"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

/**
 * The main section component that holds the cards
 */
export const FlyerSection = () => {
  const flyerData = [
    {
      title: "For Business & Enterprise",
      subtitle: "Sustainable tech, powerful performance",
      imageUrl: "https://placehold.co/600x800/1a2a3a/ffffff?text=Office+Setting&font=inter",
      buttonText: "Learn More",
      buttonLink: "/contact" // Link to contact/business page
    },
    {
      title: "Laptops for Education",
      subtitle: "Bulk buy discounts available",
      imageUrl: "https://placehold.co/600x800/1a3a2a/ffffff?text=Classroom&font=inter",
      buttonText: "Enquire Now",
      buttonLink: "/education"
    },
    {
      title: "For Personal Use",
      subtitle: "Certified quality for everyday tasks",
      imageUrl: "https://placehold.co/600x800/3a2a1a/ffffff?text=Home+Use&font=inter",
      buttonText: "Shop Now",
      buttonLink: "/laptops" // Links to the laptops page itself (or a future shop)
    }
  ];

  return (
    <>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Laptops For Every Need
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {flyerData.map((flyer, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <FlyerCard
              title={flyer.title}
              subtitle={flyer.subtitle}
              imageUrl={flyer.imageUrl}
              buttonText={flyer.buttonText}
              buttonLink={flyer.buttonLink}
            />
          </FadeIn>
        ))}
      </div>
    </>
  );
};