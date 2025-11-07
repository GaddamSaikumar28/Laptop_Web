/* src/components/common/EditableMedia.jsx */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Video } from 'lucide-react';

/**
 * A reusable admin-only button for uploading files.
 */
export const EditableMediaButton = ({
  isAdmin,
  onSave,
  label,
  accept, // 'image/*' or 'video/*'
  className = '',
  icon
}) => {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await onSave(file);
    } catch (error) {
      console.error('Failed to save media:', error);
      alert('Media upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAdmin) return null;

  // Determine icon
  let buttonIcon;
  if (icon) {
    buttonIcon = icon;
  } else if (accept.startsWith('video')) {
    buttonIcon = <Video size={14} />;
  } else {
    buttonIcon = <Upload size={14} />;
  }

  return (
    <>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        disabled={isUploading}
        className={`bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 ${className}`}
      >
        {isUploading ? 'Uploading...' : (
          <>
            {buttonIcon} {label}
          </>
        )}
      </button>
    </>
  );
};


/**
 * A wrapper for images that shows a centered "Change Image"
 * button on hover for admins.
 */
export const EditableCenteredImage = ({
  isAdmin,
  src,
  alt,
  onSave,
  className = '',
  imgClassName = ''
}) => {
  return (
    <motion.div 
      className={`relative rounded-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      {isAdmin && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 hover:bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <EditableMediaButton
            isAdmin={isAdmin}
            onSave={onSave}
            label="Change Image"
            accept="image/*"
          />
        </div>
      )}
    </motion.div>
  );
};