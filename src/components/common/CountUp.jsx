

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
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
        } else {
          setCount(endValue); // Ensure it ends exactly on the end value
        }
      };
      requestAnimationFrame(frame);
    }
  }, [inView, end, duration]);

  return (
    // Updated to new green gradient
    <span ref={ref} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
