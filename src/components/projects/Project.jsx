import React from "react";
import { PROJECTS } from "../../constants";
import { FaGithub } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">My Work</h1>
      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="mb-14 flex flex-wrap lg:justify-center"
          >
            <div className="sm:w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                // height={180}
                // width={180}
                className="sm:w-full sm:h-[240px] lg:h-[180px] lg:w-[180px] mb-6 rounded-xl"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((item, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-900"
                >
                  {item}
                </span>
              ))}
              <div className="mt-5 flex gap-4">
                <Link
                  to={`/project/${project.id}`}
                  className="flex items-center bg-transparent border-2 border-purple-400 hover:border-transparent text-neutral-400 hover:bg-purple-400 hover:text-white font-light py-2 px-4 rounded"
                >
                  <IoMdMore className="mr-1" />
                  View Details
                </Link>
                <Link
                  href={project.github_link}
                  className="flex items-center bg-transparent border-2 border-purple-400 hover:border-transparent text-neutral-400 hover:bg-purple-400 hover:text-white font-light py-2 px-4 rounded"
                >
                  <FaGithub className="mr-1" />
                  View Repository
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
