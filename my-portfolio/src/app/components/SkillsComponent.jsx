import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillsComponent({ list }) {
  return (
    <div className="flex flex-row space-x-2 md:space-x-16 lg:mt-6 py-10 text-3xl sm:text-4xl md:text-6xl">
      {list.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={item.icon} size="sm" />
          <h1 className="text-xs md:text-xl pt-1">{item.name}</h1>
          <h1 className="text-xs md:text-xl py-1">{item.level}</h1>
        </div>
      ))}
    </div>
  );
}
