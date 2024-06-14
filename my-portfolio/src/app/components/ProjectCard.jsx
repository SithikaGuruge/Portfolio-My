import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ProjectCard({
  image,
  title,
  description,
  git,
  preview,
  tech,
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg mt-5 md:w-1/3 flex flex-col w-72  justify-center mx-auto md:mx-0 ">
      <div className="h-32 md:h-42 lg:h-52 sm:h-42 relative group flex-shrink-0 ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
          }}
        >
          <div className="absolute bottom-0 left-0 w-full p-1 font-semibold  text-white flex justify-center space-x-2 text-xs lg:text-sm">
            {tech.map((item, index) => (
              <h1
                key={index}
                className="bg-black rounded-lg px-1 lg:px-2 m-0.1 border-green-500 border"
              >
                {item}
                
              </h1>
            ))}
          </div>
        </div>
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={git}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={preview}
            className="h-14 ml-2 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white bg-[#181818] lg:py-6 md:py-1 md:px-4 py-2 px-3 mt-2 sm:mt-2 md:mt-0 lg:mt-0.5 rounded-b-xl flex-grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-green-500">{description}</p>
      </div>
    </div>
  );
}
