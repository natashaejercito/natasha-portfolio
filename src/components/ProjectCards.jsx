import React from "react";
import { Link } from "react-router";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "Haiku Generator",
      description:
        "An application to help you generate a 5-7-5 syllable haiku poem based on your chosen theme using Gemini API.",
      image: "https://i.postimg.cc/W11svHw4/Haiku-img-cover.png",
      technologies: ["Gemini API", "React", "JavaScript", "HTML/CSS"],
      liveUrl: "https://haiku-aigenerator.netlify.app/",
      githubUrl: "https://github.com/natashaejercito/haiku-ai-generator",
      featured: true,
    },
    {
      id: 2,
      title: "Discography Artist",
      description:
        "A web application showcasing the developer's favourite artist of the month.",
      image: "https://i.postimg.cc/KvVxRPYh/Discography-Artist.png",
      technologies: ["Figma", "React", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/wave-to-earth",
      featured: false,
    },
    {
      id: 3,
      title: "Pretty Plants Info",
      description:
        "An informational website about pretty plants we surround ourselves with.",
      image: "https://i.postimg.cc/fb18db9L/Pretty-Plants-Info.png",
      technologies: ["8bit Painter", "React", "JavaScript", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/pretty-plants-info",
      featured: false,
    },
    {
      id: 4,
      title: "New York Times",
      description:
        "A replica of New York Times Page using the fundamentals of HTML and CSS in building the application.",
      image: "https://i.postimg.cc/HkBKrHzc/new-york-page.png",
      technologies: ["HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/natashaejercito/new-york-times-page",
      featured: false,
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8 min-h-[600px]">
        {/* Project List */}
        <div className="lg:col-span-1">
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:bg-primary ${
                    activeProject.id === project.id
                      ? "bg-primary/50 font-semibold"
                      : "bg-base-200"
                  }`}
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Project Display */}
        <div className="lg:col-span-3 ml-5">
          <div className="grid md:grid-cols-2 gap-10 items-center h-full">
            {/* Project Image */}
            <div className="order-2 md:order-1">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-base-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 " />
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-all duration-700 ease-out group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/*Content on Hover*/}
                <div className="absolute inset-0 flex intems-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              </div>
            </div>
            {/* Project Details */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <code className="text-3xl lg:text-5xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
                  {activeProject.title}
                </code>
                <p className="text-base-content/80 text-lg leading-relaxed mt-4">
                  {activeProject.description}
                </p>
              </div>
              {/* Technologies */}
              <div>
                <h4 className="text-lg font-mono font-extrabold mb-3 text-base-content/90">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge badge-lg bg-base-200 text-base-content/80 border border-base-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-violet-400 text-center mt-auto mb-3">
                {/*Action Button*/}
                <div className="flex flex-row gap-3 ml-1">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:scale-125 hover:text-black transition-transform duration-500"
                    aria-label={`View ${activeProject.title} Live`}
                  >
                    <ExternalLink className="transition-transform duration-200 " />
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:scale-125 hover:text-black transition-transform duration-500"
                    aria-label={`View ${activeProject.title} GitHub`}
                  >
                    <Github className="transition-transform duration-200 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
