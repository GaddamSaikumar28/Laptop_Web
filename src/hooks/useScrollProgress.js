// import { useState, useEffect, useRef } from 'react';

// /**
//  * A custom hook to track the scroll progress (0 to 1) within a specific element.
//  * @param {React.RefObject<HTMLElement>} ref - The ref of the element to track.
//  * @returns {number} The scroll progress from 0 (top) to 1 (bottom).
//  */
// export const useScrollProgress = (ref) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
//       // Get the element's position relative to the viewport
//       const { top, height } = el.getBoundingClientRect();
      
//       // The total scrollable distance *within* the element's defined viewport.
//       // We define the scrollable height as the element's height minus one viewport height.
//       const scrollableHeight = height - clientHeight;
      
//       if (scrollableHeight <= 0) {
//         setProgress(0);
//         return;
//       }
      
//       // Calculate how far the *viewport's top* is from the *element's top*.
//       // `top` will be 0 when the element's top hits the viewport's top.
//       // It will become negative as we scroll "into" the element.
//       const scrollAmount = -top;

//       // Calculate progress (0 to 1)
//       let scrollProgress = scrollAmount / scrollableHeight;
      
//       // Clamp progress between 0 and 1
//       scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
//       setProgress(scrollProgress);
//     };

//     // We listen to the window's scroll event
//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     // Run once on mount to set initial state
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [ref]);

//   return progress;
// };
import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to track the scroll progress (0 to 1) within a specific element.
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to track.
 * @returns {number} The scroll progress from 0 (top) to 1 (bottom).
 */
export const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      // Get the element's position relative to the viewport
      const { top, height } = el.getBoundingClientRect();
      
      // The total scrollable distance *within* the element's defined viewport.
      // We define the scrollable height as the element's height minus one viewport height.
      const scrollableHeight = height - clientHeight;
      
      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }
      
      // Calculate how far the *viewport's top* is from the *element's top*.
      // `top` will be 0 when the element's top hits the viewport's top.
      // It will become negative as we scroll "into" the element.
      const scrollAmount = -top;

      // Calculate progress (0 to 1)
      let scrollProgress = scrollAmount / scrollableHeight;
      
      // Clamp progress between 0 and 1
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      setProgress(scrollProgress);
    };

    // We listen to the window's scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return progress;
};

