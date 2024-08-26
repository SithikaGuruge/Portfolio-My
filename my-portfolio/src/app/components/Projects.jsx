"use client";
import React, { useState, useTransition } from "react";
import ProjectCard from "./ProjectCard";
import TabButtton from "./TabButtton";

const projects = [
  {
    id: 1,
    image: "/Projects/Arrival.png",
    title: "Movie Mingle",
    description:
      "Developed a comprehensive seat booking system that allows users to reserve seats for movies, submit reviews for both films and theaters, and request refunds. The system also features an integrated chatbot to assist users by providing detailed information about the system and its content.",
    tag: ["All", "Web"],
    git: "https://github.com/SithikaGuruge/Theater-reservation-system.git",
    preview: "",
    tec: ["ReactJS", "NodeJs", "MySql", "Tailwind", "Firebase", "Nodemailer"],
  },
  {
    id: 2,
    image: "/Projects/Jupiter.png",
    title: "Jupiter HRM System",
    description:
      "This Human Resource Management System streamlines key company operations, including leave management and user management. The system is designed to efficiently handle employee records, manage leave requests, and support administrative tasks, improving overall organizational productivity.",
    tag: ["All", "Web"],
    git: "https://github.com/SithikaGuruge/Jupiter_HRM.git",
    preview: "",
    tec: ["React", "NodeJs", "Mysql", "Bootstrap"],
  },
  {
    id: 3,
    image: "/Projects/Portfolio.png",
    title: "Portfolio",
    description:
      "This personal portfolio website showcasing my projects and skills. The site highlights my experience in software development, including detailed descriptions of completed projects and a comprehensive overview of the technologies and tools I am proficient in.",
    tag: ["All", "Web"],
    git: "https://github.com/SithikaGuruge/Portfolio-My.git",
    preview: "https://www.sithika.me/",
    tec: ["NextJs", "Tailwind"],
  },
  {
    id: 4,
    image: "/Projects/MediLink.png",
    title: "MediLink",
    description:
      "This project was developed for Idealize 2024. Using this web app, users can do e-channeling, book scans and tests, and learn about medications.",
    tag: ["All", "Web"],
    git: "https://github.com/SithikaGuruge/MedLink.git",
    preview: "",
    tec: ["MongoDB", "NodeJS", "React", "Express", "FireBase", "Tailwind"],
  },
  {
    id: 5,
    image: "/Projects/BuyNow.png",
    title: "Buy Now",
    description:
      "This is an E-Commerce Platform where users can order, add to cart, and purchase clothes.",
    tag: ["All", "Web"],
    git: "https://github.com/SithikaGuruge/E-Commerce-Platform.git",
    preview: "",
    tec: ["Vite+ReactJS", "ExpressJS", "MongoDB", "Tailwind", "Docker"],
  },
  {
    id: 6,
    image: "/Projects/MediBox.png",
    title: "Smart Medi Box",
    description:
      "The project includes features like alarms, light intensity monitoring, temperature and humidity sensing, and motor control, all integrated with Wi-Fi and MQTT for remote communication, ensuring a user-friendly and reliable solution for medication management.",
    tag: ["All", "Others"],
    git: "https://wokwi.com/projects/397221951685376001",
    preview: "",
    tec: ["NODE RED", "C++", "MQTT"],
  },
  {
    id: 7,
    image: "/Projects/Rpal.png",
    title: "RPAL Compiler",
    description:
      "Developed this compiler for RPAL,as part of my 4th-semester project. The project involved tokenizing input, constructing an abstract syntax tree, converting it into a standardized tree, and evaluating the code using a control structure evaluation machine, all implemented in C++.",
    tag: ["All", "Others"],
    git: "https://github.com/SithikaGuruge/PL_Group_47.git",
    preview: "",
    tec: ["NextJs", "Tailwind"],
  },
  {
    id: 8,
    image: "/Projects/NanoProcessor.png",
    title: "3-bit Nano Processor",
    description:
      "Designed a 4-bit nano processor to do addition, subtraction, left shift, right shift, and negation. My role in the team was to design some components in the processor",
    tag: ["All", "Others"],
    git: "https://github.com/SithikaGuruge/NanoProcessor-Project.git",
    preview: "",
    tec: ["VHDL"],
  },
  {
    id: 9,
    image: "/Projects/EmailClient.png",
    title: "Email Client",
    description:
      "This customizable email client built with Java, featuring a user-friendly GUI designed with the Swing toolkit. This robust application leverages the JavaMail API and the SMTP server protocol to enable secure email sending directly from users' accounts.",
    tag: ["All", "Others"],
    git: "https://github.com/SithikaGuruge/Email-Client.git",
    preview: "",
    tec: ["NextJs", "Tailwind"],
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
    <section id="projects">
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center py-8 lg:text-5xl sm:text-4xl">
          My Projects
        </h2>
        <div className="flex flex-row items-center justify-center md:text-base lg:space-x-2">
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
            Web Development
          </TabButtton>
          <TabButtton
            selectTab={() => handleTabChange("Others")}
            active={tab === "Others"}
          >
            Others
          </TabButtton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map(
            (project) =>
              project.tag.includes(tab) && (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  git={project.git}
                  preview={project.preview}
                  tech={project.tec}
                ></ProjectCard>
              )
          )}
        </div>
      </div>
    </section>
  );
}
