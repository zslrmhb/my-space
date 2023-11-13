import myInfo from "constants/info";
import { useState } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <section>
      <div className="mx-auto">
        {/* max-w-6xl */}
        <h1 className="">
          {/* text-5xl md:text-6xl font-bold text-center md:text-left */}
          {/* PROJECTS. */}
        </h1>
        {/* Grids starts here */}
        <div className="">
          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-5 ">
            {/* max-w-6xl */}
            {myInfo.projects.map((proj, idx) => (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                thumbnail={proj.thumbnail}
                number={`${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  //   const [selectedProject, setSelectedProject] = useState(null);
  //   const openProjectDetails = project => {
  //     setSelectedProject(project);
  //   };
  //   const closeProjectDetails = () => {
  //     setSelectedProject(null);
  //   };
  //   return (
  //     <>
  //       <div className="grid grid-cols-1 gap-8 p-9">
  //         {myInfo.projects.map((project, index) => (
  //           <div
  //             key={index}
  //             className="w-full h-full p-4 m-2 shadow-lg rounded hover:scale-105 transition-transform duration-300"
  //             onClick={() => openProjectDetails(project)}>
  //             <ProjectCard name={project.name} thumbnail={project.thumbnail} />
  //           </div>
  //         ))}
  //       </div>
  //       {selectedProject && (
  //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  //           <div className="bg-white rounded-lg w-1/2 h-1/2">
  //             <ProjectDetails
  //               project={selectedProject}
  //               onClose={closeProjectDetails}
  //             />
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // }
}

const ProjectCard = ({ title, link, thumbnail, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-48 object-cover">
          <img
            src={thumbnail}
            alt="portfolio"
            className="transform hover:scale-150 transition duration-2000 ease-linear object-cover h-full w-full"
          />
          <h1 className="absolute top-0 text-gray-50 font-bold text-base bg-red-500 rounded px-2">
            {title}
          </h1>
          <h1 className="relative bottom-10 text-center text-gray-500 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </div>
    </a>
  );
};
