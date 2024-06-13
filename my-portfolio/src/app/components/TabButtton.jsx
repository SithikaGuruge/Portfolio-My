import React from 'react';

export default function TabButtton({ active, selectTab, children }) {
  const buttonClasses = active ? 'text-white border-b border-purple-400' : 'text-[#ADB7BE]';
  
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
