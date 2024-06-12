import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-96 relative group"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href="/"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-white bg-[#181818] py-6 px-4 rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-pink-300">{description}</p>
      </div>
    </div>
  );
}
