import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

export const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (isVisible) {
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
        }
      };
      requestAnimationFrame(frame);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
