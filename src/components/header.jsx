"use client"

import React, { useState } from "react";
import { FiCodesandbox } from "react-icons/fi";
import Link from "next/link";
// import { Link } from "react-router-hash-link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed hrefp-0 left-0 z-50">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-6 md:px-12 h-16">
        {/* Logo */}
        <Link href={"/"}>
          <FiCodesandbox
            data-aos="fade-right"
            className="text-3xl md:text-4xl text-[#57564F]"
          />
        </Link>

        {/* Deskhrefp Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link  href="/#aboutPage">
            <li className="text-[#57564F] hover:text-black font-semibold list-none font-signika">
              About Me
            </li>
          </Link>
          <Link  href="/#skillsPage">
            <li className="text-[#57564F] hover:text-black font-semibold list-none font-signika">
              Skills
            </li>
          </Link>
          <Link href="/projects">
            <li className="text-[#57564F] hover:text-black font-semibold list-none font-signika">
              Projects
            </li>
          </Link>
          <Link href="/experience">
            <li className="text-[#57564F] hover:text-black font-semibold list-none font-signika">
              Experience
            </li>
          </Link>
          <Link  href="/#contactPage">
            <button className="rounded-full bg-[#57564F] text-white px-5 py-2 font-signika hover:bg-[#444] transition">
              Contact
            </button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl text-[#57564F]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-[#57564F] flex flex-col items-center gap-6 py-6">
          <Link  href="/#aboutPage" onClick={() => setMenuOpen(false)}>
            <li className="text-white font-semibold list-none font-signika">
              About Me
            </li>
          </Link>
          <Link  href="/#skillsPage" onClick={() => setMenuOpen(false)}>
            <li className="text-white font-semibold list-none font-signika">
              Skills
            </li>
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            <li className="text-white font-semibold list-none font-signika">
              Projects
            </li>
          </Link>
          <Link href="/experience" onClick={() => setMenuOpen(false)}>
            <li className="text-white font-semibold list-none font-signika">
              Experience
            </li>
          </Link>
          <Link  href="/#contactPage" onClick={() => setMenuOpen(false)}>
            <button className="rounded-full bg-white text-[#57564F] px-5 py-2 font-signika hover:bg-gray-200 transition">
              Contact
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

