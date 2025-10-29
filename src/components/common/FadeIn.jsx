// import React from 'react';
// import { useOnScreen } from '../../hooks/useOnScreen';

// export const FadeIn = ({ children, delay = 0, duration = 500, triggerOnce = true, direction = 'up' }) => {
//   const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce });
  
//   const initialTransform = {
//     up: 'translateY(20px)',
//     down: 'translateY(-20px)',
//     left: 'translateX(20px)',
//     right: 'translateX(-20px)',
//   }[direction];

//   return (
//     <div
//       ref={ref}
//       style={{
//         transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
//         transitionDelay: `${delay}ms`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0) translateX(0)' : initialTransform,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FadeIn = ({ children, delay = 0, duration = 0.8, x = 0, y = 20, once = true, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: once, // Only trigger animation once when it comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: x, y: y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

