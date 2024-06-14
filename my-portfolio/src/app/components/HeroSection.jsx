"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="my-4 text-4xl lg:text-6xl font-extrabold">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to bg-yellow-400">
              Hello, I&apos;m <br />
              Sithika Guruge
            </span>{" "}
            <br />
            <span className="md:text-3xl lg:text-5xl text-lg">
              <TypeAnimation
                sequence={[
                  "Full-Stack Web developer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="sm:text-lg lg:text-xl my-8  text-sm">
            Third-year undergraduate in the Department of Computer Science and
            Engineering at the University of Moratuwa, very enthusiastic about
            full-stack web development and mobile app development.{" "}
          </p>
          <div>
            <Link href="#contact">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-600 via-[#1e5a07] to-yellow-400 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#91bb53] via-[#1f5b08] to-[#071f03] hover:bg-slate-200 border-white mt-2">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] relative">
            <Image
              src="/Sithika Guruge.jpeg"
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/3 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
