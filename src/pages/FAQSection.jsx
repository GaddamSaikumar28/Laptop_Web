// src/components/laptops/FAQSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What does 'BSI Kitemark Certified' mean?",
    answer: "It means our refurbished and remanufactured laptops have been independently tested by the British Standards Institution (BSI) to meet rigorous standards for quality, safety, and performance, ensuring they are as good as new."
  },
  {
    question: "Do you offer bulk discounts for schools?",
    answer: "Yes, we provide significant discounts for educational institutions and businesses purchasing in bulk. Please contact our sales team for a custom quote."
  },
  {
    question: "What is the warranty on your laptops?",
    answer: "All our laptops come with a standard 12-month warranty, covering hardware failure and defects, giving you complete peace of mind with your purchase."
  },
  {
    question: "How does buying refurbished help the environment?",
    answer: "By choosing refurbished, you are extending the life of an existing device, which significantly reduces e-waste, conserves natural resources, and lowers the carbon footprint associated with manufacturing a new product."
  }
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-green-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};