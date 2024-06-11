import React from "react";
import Navlink from "./NavLinks";

export default function MenuItems({ links }) {
  return (
    <div className="sm:hidden">
          <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
              <li key={index} className="py-2">
                <Navlink href={link.href}>{link.name}</Navlink>
              </li>
            ))}
          </ul>
        </div>
  );
}
