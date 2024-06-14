"use client";
import React, { startTransition, useState, useTransition } from "react";
import SkillsButton from "./SkillsButton";
import SkillsComponent from "./SkillsComponent";
import {
  faAngular,
  faReact,
  faNode,
  faJava,
  faEnvira,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase,faServer } from "@fortawesome/free-solid-svg-icons";

const Tab_DATA = [
  {
    title: "front-end",
    content: [{icon:faHtml5,name:"HTML",level:"Advanced"},{icon:faCss3,name:"CSS",level:"Intermediate"} ,{icon:faReact,name:"React",level:"Intermediate"},{icon:faBootstrap,name:"Bootstrap",level:"Intermediate"},{icon:faAngular,name:"Angular",level:"Beginner"}, ],
    
  },
  {
    title: "back-end",
    content: [{icon:faNode,name:"Node",level:"Intermediate"}, {icon:faJava,name:"Java",level:"Intermediate"}],
    // content: [faNode, faJava],
    // names: ["Node", "Java"],
    // Levels:["Intermediate", "Intermediate"]
  },
  {
    title: "database",
    content: [{icon:faEnvira,name:"MongoDB",level:"Intermediate"}, {icon:faDatabase,name:"MySQL",level:"Intermediate"},{icon:faServer,name:"Firebase",level:"Intermediate"}],
    // content: [faEnvira, faDatabase],
    // names: ["MongoDB", "MySQL"],
    // Levels:["Intermediate", "Intermediate"]
  },
  {
    title: "mobile-app",
    content: [{icon:faReact,name:"React Native",level:"Intermediate"}],
    // content: [faNode, faJava],
    // names: ["Node", "Java"],
    // Levels:["Intermediate", "Intermediate"]
  },
];

export default function Skills() {
  const [tab, setTab] = useState("front-end");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold py-5 sm:pt-10 my-5">
        Skills
      </h1>
      <div className="flex flex-row space-x-5">
        <SkillsButton
          selectTab={() => handleTabChange("front-end")}
          active={tab === "front-end"}
          children={"Front-end child"}
        >
          Front-end
        </SkillsButton>

        <SkillsButton
          selectTab={() => handleTabChange("back-end")}
          active={tab === "back-end"}
          children={"Back-end"}
        >
          Back-end
        </SkillsButton>

        <SkillsButton
          selectTab={() => handleTabChange("database")}
          active={tab === "database"}
          children={"Database"}
        >
          Database
        </SkillsButton>
        <SkillsButton
          selectTab={() => handleTabChange("mobile-app")}
          active={tab === "mobile-app"}
          children={"Mobile App Development"} 
        >
          Mobile App Development
        </SkillsButton>
      </div>
      <div className="flex flex-col items-center">
        {Tab_DATA.map((data) => (
          <div key={data.title}>
            {tab === data.title && <SkillsComponent list={data.content} />}
          </div>
        ))}
      </div>
    </div>
  );
}
