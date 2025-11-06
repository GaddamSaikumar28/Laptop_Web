import React from 'react';
import { ECycleGreenLogo } from './ECycleGreenLogo';

export const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div className="text-white flex flex-col items-center space-y-4">
      <ECycleGreenLogo className="w-16 h-16 animate-spin" />
      <span className="text-2xl font-medium tracking-wider text-gray-300">ECycleGreen</span>
    </div>
  </div>
);
