import React from 'react';

export default function TabButtton({ active, selectTab, children }) {
  const buttonClasses = active ? 'text-white border-b-4 border-[#11823b]' : 'text-[#ADB7BE]';
  
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
