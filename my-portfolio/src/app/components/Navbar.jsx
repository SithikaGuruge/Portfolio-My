"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./NavLinks";
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import MenuItems from "./MenuItems";

const navLinks = [
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#skills", name: "Skills" },
  { href: "#contact", name: "Contact" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90 border-b border-cyan-800">
      <div className="flex flex-wrap text-xl md:text-3xl justify-between item-center mx-auto px-3 py-3 font-semibold">
        <Link href="/">SG</Link>
        <div className="sm:hidden block ">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="text-slate-100 px-3 rounded border-slate-200"
            >
              <HiBars3 className="h-8 w-8" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-100 px-3 rounded border-slate-200"
            >
              <FaXmark className="h-8 w-8" />
            </button>
          )}
        </div>
        <div className="hidden sm:block" id="navbar">
          <ul className="flex p-4 sm:p-0 sm:flex-row sm:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.href}>{link.name}</Navlink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuItems links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
