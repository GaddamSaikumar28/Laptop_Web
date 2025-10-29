import React from 'react';

export const EonCircularLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="url(#gradLogo1)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="url(#gradLogo2)" strokeWidth="12" strokeLinecap="round" strokeDasharray="0.1 20"/>
    <path d="M50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30Z" fill="url(#gradLogo3)"/>
    <defs>
      <linearGradient id="gradLogo1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00AEEF"/>
        <stop offset="1" stopColor="#0072FF"/>
      </linearGradient>
      <linearGradient id="gradLogo2" x1="50" y1="90" x2="50" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A960FF"/>
        <stop offset="1" stopColor="#FF00A8"/>
      </linearGradient>
      <linearGradient id="gradLogo3" x1="50" y1="30" x2="50" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF"/>
        <stop offset="1" stopColor="#00AEEF"/>
      </linearGradient>
    </defs>
  </svg>
);
