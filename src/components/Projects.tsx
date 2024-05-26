"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectPrev1 from "../assets/project_prev_1.jpg";

const Projects = () => {
  return (
    <div className="border border-gray-600/50 w-full rounded-md p-4 mb-4">
      <div className="relative w-full max-w-2xl mx-auto h-full px-0 lg:px-6">
        <h2 className="relative z-10 text-2xl pt-1 lg:pt-0 md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-sans font-bold mb-6">
          Projects
        </h2>
        <ProjectCard image={projectPrev1} />
        <ProjectCard image={projectPrev1} />
        <ProjectCard image={projectPrev1} />
        <ProjectCard image={projectPrev1} />
        <ProjectCard image={projectPrev1} />
      </div>
    </div>
  );
};

export default Projects;
