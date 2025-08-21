import React from "react";
import NavBar from "../components/NavBar";
import { Construction, ArrowLeft, Coffee } from "lucide-react";
import { Link } from "react-router";

const ProjectPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Work in Progress Section */}
      <section className="bg-base-200 min-h-[100vh] pt-16 flex flex-col items-center justify-center w-full">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Construction Icon with Animation */}
          <div className="mb-8">
            <Construction className="size-24 lg:size-32 mx-auto text-warning animate-bounce mt-20 " />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold font-mono tracking-tight mb-6 text-primary">
            Work in Progress
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl lg:text-2xl font-semibold mb-8 text-base-content/80">
            This page is currently under construction
          </h2>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="text-sm font-medium text-base-content/70 mb-2">
              Progress
            </div>
            <div className="w-full bg-base-300 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full animate-pulse"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="text-xs text-base-content/60 mt-1">
              40% Complete
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="btn btn-primary btn-lg gap-2">
              <ArrowLeft className="size-5" />
              Back to Home
            </Link>

            <Link to="/about" className="btn btn-outline btn-lg">
              Learn About Me
            </Link>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-base-100 rounded-lg border border-base-300 shadow-sm">
            <p className="text-sm text-base-content/70 italic">
              💡 Check back soon for updates, or feel free to reach out if you'd
              like to know about my projects!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
