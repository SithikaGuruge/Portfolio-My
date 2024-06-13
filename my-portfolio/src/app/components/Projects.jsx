"use client"
import React,{useState, useTransition } from "react";
import ProjectCard from "./ProjectCard";
import TabButtton from "./TabButtton";

const projects = [
  {
    id: 1,
    image: "/Projects/Arrival.png",
    title: "Arrival",
    description: "Tuorism Website",
    tag: ["All", "Mobile"],
    git:"https://github.com/deshithagallage/Arrival.git",
    preview:""
  },
  {
    id: 2,
    image: "/Projects/Jupiter.png",
    title: "Jupiter HRM System",
    description: "HRM System",
    tag: ["All", "Web"],
    git:"https://github.com/SithikaGuruge/Jupiter_HRM.git",
    preview:""
  },
  {
    id: 3,
    image: "/Projects/Portfolio.png",
    title: "Portfolio",
    description: "Portfolio Website",
    tag: ["All", "Web"],
    git:"https://github.com/SithikaGuruge/Portfolio-My.git",
    preview:""
  },
];
export default function Projects() {
  const [tab, setTab] = useState("All");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center py-8">My Projects</h2>
      <div className="flex flex-row items-center justify-center">
      <TabButtton
              selectTab={() => handleTabChange("All")}
              active={tab === "All"}
            >
              All
            </TabButtton>
            <TabButtton
              selectTab={() => handleTabChange("Web")}
              active={tab === "Web"}
            >
              Web
            </TabButtton>
            <TabButtton
              selectTab={() => handleTabChange("Mobile")}
              active={tab === "Mobile"}
            >
              Mobile
            </TabButtton>
      </div>
      <div className="md:flex md:flex-row md:space-x-7">
        {projects.map((project) => (
          project.tag.includes(tab) && (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              git={project.git}
              preview={project.preview}
            >
            </ProjectCard>     
          )))} 

      </div>
    </div>
  );
}