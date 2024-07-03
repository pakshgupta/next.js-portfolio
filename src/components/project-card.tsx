'use client';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  image: string; // Ensure the path is relative to the `public` folder
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description, link }) => {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title={title}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 ">
              {description}
            </span>
          </div>
          <div className="flex-1 mt-4 mb-2">
            <Image
              src={image}
              alt={title}
              // layout="responsive" // Optional: Helps to maintain aspect ratio
              width={400} // Set according to your design
              height={300} // Set according to your design
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard;
