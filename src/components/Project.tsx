import React from "react";
import ProjectCard from "./project-card";
import TechStack from "../components/tech-stack";
import projectData from "../data/project-data.json";
import { ProductCard } from "./ui/hero-parallax";

const Project: React.FC = () => {
  const projects = projectData.projects;

  return (
    <div id="project" className="container mx-auto w-full h-full dark:bg-black bg-white py-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border border-gray-500"></div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-700 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">{project.id}</h1>
            </div>
            <div className="order-1 rounded-lg w-5/12 px-6 py-4 flex flex-col items-center">
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
              />
              <TechStack techStack={project.techStack} github={project.github} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
