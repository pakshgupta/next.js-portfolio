"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between  text-white">
      <p className="text-xs">Paksh Gupta &#64; 2024</p>
      <div className="relative group ">
        <Image
          src="/images/plogo.png" // Ensure the path is correct
          alt="Logo"
          width={80} // Set appropriate width
          height={80} // Set appropriate height
          className="cursor-pointer transition-transform duration-300 transform group-hover:scale-110"
        />
        <Link href="#">
          <div className="w-20 absolute top-1/2 left-full ml-4 transform -translate-y-1/2 bg-slate-700 text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            To Top
          </div>
        </Link>
      </div>
      <div className="flex space-x-7 mb-4">
        <Link href="https://github.com/pakshgupta">
          <FaGithub className="text-2xl text-gray-400 hover:text-gray-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/paksh-gupta-053724212/">
          <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-700" />
        </Link>
        <Link href="https://leetcode.com/u/_Paksh_Gupta/">
          <SiLeetcode className="text-2xl text-orange-600 hover:text-orange-700" />
        </Link>
        <Link href="https://www.instagram.com/_paksh_gupta/">
          <FaInstagram className="text-2xl text-pink-600 hover:text-pink-700" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
