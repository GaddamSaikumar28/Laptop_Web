/* src/components/DynamicIcon.jsx */
import React from 'react';
// Import all icons from lucide-react
import * as LucideIcons from 'lucide-react';

/**
 * Renders a Lucide icon component dynamically based on its string name.
 * @param {string} name - The case-sensitive name of the icon (e.g., 'Laptop', 'Smartphone')
 */
export const DynamicIcon = ({ name, ...props }) => {
  // Fallback to a 'Box' icon if the name is not found
  const IconComponent = LucideIcons[name] || LucideIcons.Box;
  
  return <IconComponent {...props} />;
};

// This list is used for your 'icon picker' UI.
// You must provide this to your "Add E-waste Item" modal.
export const availableIconNames = [
  'Laptop', 'Smartphone', 'Printer', 'Server', 'HardDrive', 'Monitor',
  'Cpu', 'DatabaseZap', 'Box', 'Recycle', 'Trash2', 'Wrench', 'Zap',
  // Add any other icons you want to make available
];