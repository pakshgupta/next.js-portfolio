"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/moving-border";

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to open modal */}
      <Button
        onClick={handleOpenModal}
        borderRadius="1.75rem"
        className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
        About Me
      </Button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-8 rounded-lg max-w-5xl w-4/5 mx-auto flex opacity-80">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-5xl text-white hover:text-red-400"
            >
              &times;
            </button>

            <div className="w-1/3 flex justify-center items-center">
              {/* Image */}
              <Image
                src="/images/developer.png"
                alt="Developer"
                width={600} 
                height={200} 
                className="rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 p-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">About Me</h3>
                <p className="text-gray-300 mt-2">
                  Hi, I&apos;m Paksh Gupta, a dedicated Full Stack Developer, with a
                  passion for building efficient, full stack web applications
                  using technologies like React.js, Node.js, and MongoDB. With a
                  background in software development and a B.Tech degree in CSE
                  (AI and Data Science) from Graphic Era University, I thrive on
                  creating innovative solutions that drive positive change. I’m
                  eager to collaborate on projects that push the boundaries of
                  technology and sustainability.
                </p>
              </div>

              <h3 className="text-2xl font-bold">Skills</h3>
              <div className="mt-4 mb-6">
                <div className="flex flex-wrap gap-3">
                  <Image
                    src="/images/JavaScript.png"
                    alt="JavaScript"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/HTML5.png"
                    alt="HTML5"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/CSS3.png"
                    alt="CSS3"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/C++ (CPlusPlus).png"
                    alt="C++"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/React.png"
                    alt="React"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/express.png"
                    alt="Express"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Node.js.png"
                    alt="Node.js"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Redux.png"
                    alt="Redux"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/TypeScript.png"
                    alt="TypeScript"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Postman.png"
                    alt="Postman"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/MongoDB.png"
                    alt="MongoDB"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/images/MySQL.png"
                    alt="MySQL"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold">Links</h3>
              <div className="flex justify-between">
                <div className="flex space-x-4 mt-4">
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
                <div>
                  <Link
                    href={
                      "https://drive.google.com/file/d/1L3dnEKT733kJX8JRqod35Z5lrjuI0T85/view?usp=sharing"
                    }
                  >
                    <Button
                      borderRadius="1.75rem"
                      className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
