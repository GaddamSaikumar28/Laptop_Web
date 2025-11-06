
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
      className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
      // Updated hover effect with green shadow
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background Image - updated placeholder */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay for text readability (dark overlay is fine) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-lg text-gray-200 mb-6">{subtitle}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 text-lg font-semibold text-white group"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

/**
 * The main section component
 */
export const FlyerSection = () => {
  // Updated with light-theme placeholders
  const flyerData = [
    {
      title: "For Business",
      subtitle: "Sustainable tech, powerful performance",
      imageUrl: "https://placehold.co/600x800/d4d4d4/555555?text=Office+Setting&font=inter",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      title: "For Education",
      subtitle: "Bulk buy discounts available",
      imageUrl: "https://placehold.co/600x800/d4d4d4/555555?text=Classroom&font=inter",
      buttonText: "Enquire Now",
      buttonLink: "/education"
    },
    {
      title: "For Personal Use",
      subtitle: "Certified quality for everyday tasks",
      imageUrl: "https://placehold.co/600x800/d4d4d4/555555?text=Home+Use&font=inter",
      buttonText: "Shop Now",
      buttonLink: "/laptops"
    }
  ];

  return (
    <>
      <FadeIn>
        {/* Heading updated to green gradient */}
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900">
          Laptops For <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Every Need</span>
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {flyerData.map((flyer, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <FlyerCard {...flyer} />
          </FadeIn>
        ))}
      </div>
    </>
  );
};