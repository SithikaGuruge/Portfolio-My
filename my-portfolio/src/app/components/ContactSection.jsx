"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <diV>
      <div className="flex mt-10 font-bold text-3xl justify-center md:justify-start">
        Contact Me
      </div>
      <span className="flex justify-center py-3 md:text-2xl font-semibold">
        <TypeAnimation
          sequence={["Reach out for a new project ", 1000, "Say Hello", 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </span>
      <ContactForm />
    </diV>
  );
}
