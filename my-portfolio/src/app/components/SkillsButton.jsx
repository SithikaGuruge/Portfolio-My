import React from "react";



export default function SkillsButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "border rounded-xl p-1 px-2  bg-green-700"
    : " border rounded-xl p-1 px-2 text-[#ADB7BE]";

  return (
    
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold text-white hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}
