// Navbar.tsx
"use client";  // Add this line

import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menuoverlay from "./Menuoverlay";

// Your existing code...


const navLinks = [
  { title: "About", path: "#about" },
  { title: "Army", path: "#army" },
  { title: "Capital", path: "#capital" },
  { title: "Culture", path: "#culture" },
  { title: "Politics", path: "#politics" },
  { title: "Population", path: "#population" },
   { title: "Currency", path: "#currency" },
  { title: "Tourism", path: "#tourism" },
  { title: "Weather", path: "#weather" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text:2xl md:text-5xl text-white font-semibold">
          
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Menuoverlay links={navLinks} isOpen={navbarOpen} /> {/* Pass the isOpen prop */}
    </nav>
  );
};

export default Navbar;
