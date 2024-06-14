"use client";
import React, { startTransition, useState, useTransition } from "react";
import Image from "next/image";
import TabButtton from "./TabButtton";

const Tab_DATA = [
  {
    title: "other_skills",
    id: "other_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Project Management</li>
        <li>Team Work</li>
        <li>Leadership</li>
        <li>Analytical Skills</li>
        <li>Chess</li>
        <li>Graphic Design</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Committee Lead - MERCon</li>
        <li>Web Committee Member - Mora UXPlore</li>
        <li>Director of Web and PR - UoM Leos</li>
        <li>Marcketing and Web Committee Member - IEEE(RAAS)</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ST. Thomas College</li>
        <li>Faculty of Engineering, University of Moratuwa</li>
      </ul>
    ),
  },
  {
    title: "certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>Finalist-ENIGMA Hackathon </li>
        <li>Front-end development - Open UoM</li>
        <li>Mobile app development - Coursera</li>
        <li>Python Basic - Open UoM</li>
        <li>Python Intermidiate - Open UoM</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col items-center relative top-20 py-3 sm:flex-row sm:items-start sm:space-x-10">
        <div className="hidden sm:flex sm:w-full sm:h-full lg:w-1/2 sm:m-4 md:py-6">
          <Image
            src={"/Sithika Guruge2.jpg"}
            alt="about Image"
            width={250}
            height={250}
            className="sm:order-1 sm:pt-20 pt-20"
          />
        </div>

        <div className="flex flex-col items-center sm:items-start sm:order-2">
          <h1 className="text-3xl sm:text-4xl font-bold py-5 sm:pt-10 mt-5 lg:text-5xl">
            About Me
          </h1>
          <p className="py-0 text-center sm:text-lg sm:text-left">
            I am a highly motivated computer science and engineering student at
            the University of Moratuwa, with excellent problem-solving
            abilities, attention to detail, and proficiency in various
            programming languages and tools. I have excellent project management
            skills. Additionally, I possess expertise in full-stack development,
            enabling me to tackle challenges across the entire software
            development lifecycle with efficiency and innovation.
          </p>
          <div className="mt-5 flex flex-row md:space-x-6 md:text-xl text-lg">
            <TabButtton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButtton>
            <TabButtton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButtton>
            <TabButtton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certificates
            </TabButtton>
            <TabButtton
              selectTab={() => handleTabChange("other_skills")}
              active={tab === "other_skills"}
            >
              Other Skills
            </TabButtton>
          </div>
          <div className="mt-8">
            {Tab_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
