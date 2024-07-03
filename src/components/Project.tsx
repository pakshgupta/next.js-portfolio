// project.tsx

import React from "react";
import ProjectCard from "./project-card";
import TechStack from "../components/tech-stack";
import projectData from "../data/project-data.json";

const Project: React.FC = () => {
  const projects = projectData.projects;

  return (
    <div
      id="project"
      className="container mx-auto w-full h-full dark:bg-black bg-white py-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] "
    >
      <div className="text-center mb-8">
        <h1 className="text-lg md:text-7xl font-sans font-bold text-white mb-4">
          PROJECTS
        </h1>
        <p className="text-neutral-500 text-sm max-w-lg mx-auto">
          My Project Work
        </p>
      </div>

      <div className="relative wrap overflow-hidden h-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border border-gray-500 hidden sm:block"></div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            {/* Timeline number */}

            <div className="order-1 rounded-lg w-full sm:w-5/12 px-6 py-4 flex flex-col items-center">
              <ProjectCard
                name={project.name}
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
              />
              <TechStack
                techStack={project.techStack}
                github={project.github}
              />
            </div>

            {/* Empty space for alignment on large screens */}
            <div className="hidden sm:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
