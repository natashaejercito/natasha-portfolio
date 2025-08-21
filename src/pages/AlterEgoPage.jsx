import React from "react";
import NavBar from "../components/NavBar";
import {
  Camera,
  Mountain,
  Video,
  Coffee,
  Palette,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

const AlterEgoPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Coming Soon Section */}
      <section className="bhero bg-base-200 min-h-[100vh] pt-20 w-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold font-mono tracking-tight  mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PAGE.HOBBIES
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl lg:text-3xl font-semibold mb-8 text-base-content/90">
            Beyond the Code: Creative Pursuits
          </h2>

          {/* Description */}
          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-700 mb-12">
            <p className="text-lg lg:text-xl">
              While I craft digital experiences through code, I also capture
              life's moments and explore creative adventures beyond the screen.
            </p>
          </div>

          {/* Hobby Preview Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group">
              <Camera className="size-8 lg:size-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-sm lg:text-base">Photography</h3>
              <p className="text-xs lg:text-sm text-base-content/70 mt-1">
                Capturing moments
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group">
              <Video className="size-8 lg:size-12 mx-auto mb-3 text-secondary group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-sm lg:text-base">Vlogging</h3>
              <p className="text-xs lg:text-sm text-base-content/70 mt-1">
                Sharing stories
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group">
              <Mountain className="size-8 lg:size-12 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-sm lg:text-base">Bouldering</h3>
              <p className="text-xs lg:text-sm text-base-content/70 mt-1">
                Climbing adventures
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group">
              <Coffee className="size-8 lg:size-12 mx-auto mb-3 text-warning group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-sm lg:text-base">Matcha</h3>
              <p className="text-xs lg:text-sm text-base-content/70 mt-1">
                🏃‍♀️‍➡️
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link to="/" className="btn btn-primary btn-lg gap-2">
              <ArrowLeft className="size-5" />
              Back to Home
            </Link>

            <Link to="/about" className="btn btn-outline btn-lg">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlterEgoPage;
