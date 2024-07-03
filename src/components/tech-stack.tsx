import Link from "next/link";
import React from "react";

interface TechStackProps {
  techStack: string[];
  github: string;
}

const TechStack: React.FC<TechStackProps> = ({ techStack, github }) => {
  return (
    <div className="mt-4 p-4 border border-gray-500 rounded-lg bg-gray-800 w-full">
      <h4 className="text-white text-sm font-semibold mb-2">Tech Stack:</h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <a
          href={github}
          className="text-lg font-semibold bg-slate-500 text-white px-3 py-1 rounded-md text-center mb-2 sm:mb-0 sm:mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default TechStack;
