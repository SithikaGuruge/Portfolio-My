import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "/Projects/Arrival.png",
    title: "Arrival",
    description: "Tuorism Website",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    image: "/Projects/Jupiter.png",
    title: "Project 2",
    description: "HRM System",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    image: "/Projects/Portfolio.png",
    title: "Project 3",
    description: "Portfolio Website",
    tag: ["All", "Web"],
  },
];
export default function Projects() {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center py-8">My Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
          >
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}
