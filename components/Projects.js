import myInfo from "../constants/info";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

import iNoteIt from "../public/assets/images/i-note-it.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "i-Note-It",
      thumbnail: iNoteIt,
      description: "d",
    },
  ];

  const openProjectDetails = project => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-9">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full p-4 m-2 shadow-lg rounded hover:scale-105 transition-transform duration-300"
            onClick={() => openProjectDetails(project)}>
            <ProjectCard name={project.name} thumbnail={project.thumbnail} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-1/2 h-1/2">
            <ProjectDetails
              project={selectedProject}
              onClose={closeProjectDetails}
            />
          </div>
        </div>
      )}
    </>
  );
}
