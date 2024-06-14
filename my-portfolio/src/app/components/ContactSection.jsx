"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "./ContactForm";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact">
      <diV>
        <div className="flex mt-16 font-bold text-3xl justify-center sm:text-4xl lg:text-5xl">
          Contact Me
        </div>
        <span className="flex justify-center flex-col py-3 ">
          <div className="text-center my-2 pb-5 md:text-2xl font-semibold">
            <TypeAnimation
              sequence={["Let's Connect", 1000, "Say Hello!", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="lg:flex w-full lg:flex-row lg:justify-between ">
            <div className="lg:w-3/4">
              <ContactForm />
            </div>
            <div>
              <h1 className="mt-10 py-4 text-md lg:text-lg">
                {" "}
                I&apos;m Currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
              </h1>
              <div className="flex flex-row justify-center">
                <Link href="http://www.linkedin.com/in/sithika-guruge-37a580214">
                  <TiSocialLinkedinCircular className=" w-11 h-11 mx-5 text-green-500" />
                </Link>
                <Link href="https://github.com/SithikaGuruge">
                  <FaGithub className=" w-10 h-10 mx-5 text-green-500" />
                </Link>
                <Link href="mailto:sithika.21@cse.mrt.ac.lk">
                  <MdEmail className=" w-10 h-10 mx-5 text-green-500" />
                </Link>
              </div>
            </div>
          </div>
        </span>
      </diV>
    </section>
  );
}
