"use client";
import React, { FormEvent, useState } from "react";
import Globe from "./Globe";
import { BackgroundBeams } from "./ui/background-beams";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center py-16 lg:pt-0 lg:pb-0"
    >
      {/* Centered heading and paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-lg md:text-7xl font-sans font-bold text-white mb-4">
          Contact Me
        </h1>
        <p className="text-neutral-500 text-sm max-w-lg mx-auto">
          Feel free to Contact me by submitting the form below
        </p>
      </div>

      {/* Two-column layout for globe and contact form */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-6xl">
        {/* Globe on the left */}
        <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <div className="relative w-full h-96 ">
            <Globe />
          </div>
        </div>

        {/* Contact form on the right */}
        <div className="lg:w-1/2 p-4 flex items-center justify-center">
          <form
            className="space-y-4 w-full"
            action={"https://formspree.io/f/moqgggoq"}
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              autoComplete="off"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-100"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-100"
              rows={5}
              autoComplete="off"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg dark:bg-slate-900 text-white dark:text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              value={"send"}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
};

export default Contact;
