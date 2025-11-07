// // /* src/components/EditableImage.jsx */
// // import React, { useState, useRef } from 'react';
// // import { Upload } from 'lucide-react';

// // /**
// //  * A component that wraps an image.
// //  * If isAdmin is true, it shows an upload button.
// //  * @param {boolean} isAdmin - From useAuth()
// //  * @param {string} src - The current image URL
// //  * @param {function} onSave - Function to call with the new { publicUrl, storagePath }
// //  */
// // export const EditableImage = ({ isAdmin, src, onSave, className, ...props }) => {
// //   const [isUploading, setIsUploading] = useState(false);
// //   const fileInputRef = useRef(null);

// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     setIsUploading(true);
// //     try {
// //       // onSave is expected to be an async function that handles
// //       // the upload and returns the new data
// //       await onSave(file);
// //     } catch (error) {
// //       console.error('Failed to save image:', error);
// //       alert('Image upload failed.');
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

// //   return (
// //     <div className={`relative ${className}`}>
// //       <img src={src} {...props} />
// //       {isAdmin && (
// //         <>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             ref={fileInputRef}
// //             onChange={handleFileChange}
// //             className="hidden"
// //           />
// //           <button
// //             onClick={() => fileInputRef.current.click()}
// //             disabled={isUploading}
// //             className="absolute inset-0 flex items-center justify-center text-white transition-all bg-black bg-opacity-0 hover:bg-opacity-50"
// //           >
// //             <div className="flex flex-col items-center p-4 rounded-lg bg-black/60">
// //               <Upload size={24} />
// //               <span className="text-sm">
// //                 {isUploading ? 'Uploading...' : 'Change Image'}
// //               </span>
// //             </div>
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };
// /* src/components/common/EditableImage.jsx */
// import React, { useState, useRef } from 'react';
// import { Upload } from 'lucide-react';

// export const EditableImage = ({ 
//   isAdmin, 
//   src, 
//   onSave, 
//   className = '', 
//   imgProps = {}, // Pass props for the <img> tag
//   ...props // Pass props for the <div> wrapper
// }) => {
//   const [isUploading, setIsUploading] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsUploading(true);
//     try {
//       await onSave(file);
//     } catch (error) {
//       console.error('Failed to save image:', error);
//       alert('Image upload failed.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className={`relative ${className}`} {...props}>
//       <img src={src} {...imgProps} /> {/* Apply imgProps here */}
//       {isAdmin && (
//         <>
//           <input
//             type="file"
//             accept="image/*"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             className="hidden"
//           />
//           <button
//             onClick={() => fileInputRef.current.click()}
//             disabled={isUploading}
//             className="absolute inset-0 flex items-center justify-center text-white transition-all bg-black bg-opacity-0 hover:bg-opacity-50"
//           >
//             <div className="flex flex-col items-center p-4 rounded-lg bg-black/60">
//               <Upload size={24} />
//               <span className="text-sm">
//                 {isUploading ? 'Uploading...' : 'Change Image'}
//               </span>
//             </div>
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

/* src/components/common/EditableImage.jsx */
import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

export const EditableImage = ({ 
  isAdmin, 
  src, 
  onSave, 
  className, 
  imgProps = {}, 
  renderImage = true, // <-- New prop
  ...props 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await onSave(file);
    } catch (error){
      console.error('Failed to save image:', error);
      alert('Image upload failed.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={`relative ${className}`} {...props}>
      {/* Only render the image if renderImage is true */}
      {renderImage && <img src={src} {...imgProps} />}
      
      {isAdmin && (
        <>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            disabled={isUploading}
            // Add z-index to the button itself
            className="absolute inset-0 z-30 flex items-center justify-center text-white transition-all bg-black bg-opacity-0 hover:bg-opacity-50"
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/60">
              <Upload size={24} />
              <span className="text-sm">
                {isUploading ? 'Uploading...' : 'Change Image'}
              </span>
            </div>
          </button>
        </>
      )}
    </div>
  );
};