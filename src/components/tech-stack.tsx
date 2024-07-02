import Link from "next/link";
import React from "react";

interface TechStackProps {
  techStack: string[];
  github:string;
}

const TechStack: React.FC<TechStackProps> = ({ techStack, github}) => {
  return (
    <div className="mt-4 p-4 border border-gray-500 rounded-lg bg-gray-800 w-full">
      <h4 className="text-white text-sm font-semibold mb-2">Tech Stack:</h4>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white px-3 py-1 rounded-md text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
     <div className=" text-lg font-semibold mt-4 w-1/4  bg-slate-500 text-white px-3 py-1 rounded-md text-center ">
     <Link href={github}>Code</Link>
     </div>
    </div>
  );
};

export default TechStack;
