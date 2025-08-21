import React from "react";
import { Link } from "react-router";
import { ExternalLink, Github } from "lucide-react";

const ProjectCards = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Discography Artist",
      description:
        "A web application built with Figma, React, JavaScript, and HTML/CSS.",
      image: "src/assets/Discography-Artist.png",
      technologies: ["Figma", "React", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/wave-to-earth",
      featured: true,
    },
    {
      id: 2,
      title: "Pretty Plants Info",
      description:
        "An informational website about pretty plants we surround ourselves with.",
      image: "src/assets/Pretty-Plants-Info.png",
      technologies: ["8bit Painter", "React", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/pretty-plants-info",
      featured: false,
    },
    {
      id: 3,
      title: "New York Times",
      description:
        "A replica of New York Times Page using the fundamentals of HTML and CSS in building the application.",
      image: "./src/assets/new-york-page.png",
      technologies: ["HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/new-york-times-page",
      featured: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <figure className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            {project.featured && (
              <div className="badge badge-secondary absolute top-2 sm:top-4 right-2 sm:right-4 text-xs">
                Featured
              </div>
            )}
          </figure>

          <div className="card-body p-4 sm:p-6">
            <h3 className="card-title text-lg sm:text-xl font-bold">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-base-content/70 mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="badge badge-outline text-xs sm:text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="card-actions flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-xs sm:btn-sm w-full sm:w-auto"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink className="size-3 sm:size-4" />
                  <span className="text-xs sm:text-sm">Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-xs sm:btn-sm w-full sm:w-auto"
                  aria-label={`View ${project.title} source code`}
                >
                  <Github className="size-3 sm:size-4" />
                  <span className="text-xs sm:text-sm">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
