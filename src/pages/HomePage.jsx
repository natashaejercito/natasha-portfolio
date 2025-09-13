import React from "react";
import NavBar from "../components/NavBar";
import ProjectCards from "../components/ProjectCards";
import Typewriter from "../components/Typewriter";
import { Link } from "react-router";
import { Linkedin, Github, Instagram } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <NavBar />

      {/* Hero Section */}
      <section className="hero bg-base-200 min-h-[100vh] pt-16 w-full">
        <div className="hero-content text-center w-full">
          <div className="max-w-4xl w-full px-4">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 break-words ">
              <Typewriter
                className="text-primary hover:text-purple-600 font-mono"
                text="Hey there, it's Natasha."
                speed={200}
              />
            </h1>
            <code className="text-2xl lg:text-3xl xl:text-4xl tracking-tight mb-10 break-words">
              A Software Developer
            </code>
            <div className="max-w-3xl mx-auto">
              <p className="text-base lg:text-lg leading-relaxed text-gray-700 mt-4 mb-6 break-words">
                Specializing in the design and implementation of robust,
                scalable, and maintainable web applications. Possesses
                proficiency in both front-end and back-end development, with a
                focus on user experience optimization and intuitive interface
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 lg:py-20 bg-base-100 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl ">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-mono tracking-tight mb-4 break-words">
              Featured Projects
            </h2>
            <p className="text-base lg:text-lg text-base-content/70 max-w-2xl mx-auto break-words text-gray-700">
              Here are some of my recent projects that showcase my skills in
              development
            </p>
          </div>
          <div className="w-full overflow-x-hidden">
            <ProjectCards />
          </div>
          {/* to be added soon.. <div className="text-center mt-8 lg:mt-2">
            <Link to="/projects" className="btn btn-outline btn-md lg:btn-lg">
              View All Projects
            </Link>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20 bg-base-200 w-full overflow-x-hidden ">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-mono tracking-tight mb-2 break-words">
              Want to reach out?
            </h2>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl tracking-tight mb-3 break-words font-sans">
              You are welcome to do so!
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto break-words">
              Let's connect and build something amazing.{" "}
              <a
                href="mailto:natasha.ejercito@outlook.com"
                className="link text-primary font-semibold hover:underline break-all "
              >
                Send me an email
              </a>{" "}
              or you can also reach out to me using my other platforms below:
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4 lg:gap-6 mb-12 lg:mb-16 flex-wrap">
              <a
                href="https://www.linkedin.com/in/natashaejercito/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md lg:btn-lg flex-shrink-0"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="size-5 lg:size-6" />
              </a>
              <a
                href="https://github.com/natashaejercito"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md lg:btn-lg flex-shrink-0"
                aria-label="GitHub Profile"
              >
                <Github className="size-5 lg:size-6" />
              </a>
              <a
                href="https://www.instagram.com/tashaejercito/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md lg:btn-lg flex-shrink-0"
                aria-label="Instagram Profile"
              >
                <Instagram className="size-5 lg:size-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 py-6 lg:py-8 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p className="font-mono tracking-tight text-base-content/70 text-sm lg:text-base break-words">
              Built and developed by Natasha © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
