import React, { useState } from 'react';
import { DynamicIcon, availableIconNames } from './DynamicIcon';

export const IconPicker = ({ value, onChange }) => {
const [isOpen, setIsOpen] = useState(false);
const [filter, setFilter] = useState('');

const filteredIcons = availableIconNames.filter(name => 
  name.toLowerCase().includes(filter.toLowerCase())
).slice(0, 50); // Limit to 50

return (
  <div className="relative">
    <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full p-2 border rounded">
      <span>{value ? <DynamicIcon name={value} className="inline-block mr-2" /> : null} {value || 'Select Icon'}</span>
      <span>{isOpen ? 'Close' : 'Open'}</span>
    </button>
    {isOpen && (
      <div className="absolute z-50 w-full p-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
        <input
          type="text"
          placeholder="Search icons..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full p-1 mb-2 border rounded"
        />
        <div className="grid grid-cols-6 gap-1">
          {filteredIcons.map(name => (
            <button
              key={name}
              type="button"
              onClick={() => {
                onChange(name);
                setIsOpen(false);
                setFilter('');
              }}
              className="p-2 border rounded hover:bg-gray-100"
              title={name}
            >
              <DynamicIcon name={name} />
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
);
};
