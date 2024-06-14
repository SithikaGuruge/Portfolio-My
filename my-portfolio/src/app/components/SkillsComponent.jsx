import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillsComponent({ list }) {
  return (
    <div className="flex flex-row space-x-8 md:space-x-16 mt-6 py-10 text-3xl md:text-6xl">
      {list.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={item.icon} size="2xl" />
          <h1 className="text-sm md:text-xl pt-1">{item.name}</h1>
          <h1 className="text-sm md:text-xl py-1">{item.level}</h1>
        </div>
      ))}
    </div>
  );
}
