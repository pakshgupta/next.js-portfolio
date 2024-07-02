"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import About from "@/components/About";

import { Vortex } from "./ui/vortex";
const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          {/* Adjust or remove problematic path */}
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/images/imageme.png"
          alt="Your image description"
        />
      </div>
     
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
         
            <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Hello!
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-navy-blue sm:text-4xl sm:leading-none">
              I'm
              <br className="hidden md:block" />
              Paksh Gupta
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-200 md:text-lg">
              A Full Stack Web Developer Transforming Your Vision into
              Interactive Web Solutions.
            </p>
            {/* <div className="mt-4">
            <Link
              href={
                "https://drive.google.com/file/d/1L3dnEKT733kJX8JRqod35Z5lrjuI0T85/view?usp=sharing"
              }
            >
              <Button
                borderRadius="1.75rem"
                className=" className="
                bg-white
                dark:bg-slate-900
                text-black
                dark:text-white
                border-neutral-200
                dark:border-slate-800
              >
                Resume
              </Button>
            </Link>
          </div> */}
            <div className="mt-4">
              <About />
             
            </div>
        </div>
      </div>
          
    </div>
  );
};

export default HeroSection;
