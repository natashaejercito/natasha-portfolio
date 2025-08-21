import React from "react";
import NavBar from "../components/NavBar";

const AboutMePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero Section - with my img, about, and experience */}
      <section className="bg-base-200 min-h-[100vh] pt-16 flex flex-col w-full">
        {/* Main content area with image and text */}
        <div className="flex-1 flex items-center justify-center px-4 w-full">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* Image on the left */}
            <div className="flex-shrink-0 relative group">
              <img
                src="https://i.postimg.cc/SxkFXgp5/natasha.jpg"
                alt="Profile"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg mt-8 lg:mt-20 transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
              />
              <div className="absolute top-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left">
                <div className="bg-gradient-to-r from-pink-200 to-purple-300 text-gray-800 px-4 py-2 rounded-2xl text-lg font-bold shadow-xl relative whitespace-nowrap">
                  Hi! ✨{/* Chat bubble tail */}
                  <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pink-200 transform translate-y-full"></div>
                </div>
              </div>
            </div>

            {/* About me text on the right */}
            <div className="flex-1 text-center lg:text-left w-full min-w-0">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold font-mono tracking-tight mt-8 lg:mt-12 mb-6 lg:mb-8 break-words hyphens-auto">
                I am a student specializing in{" "}
                <span className="text-primary hover:text-purple-600">
                  Computer Programming and Analysis
                </span>
              </h2>

              <div className="space-y-4 lg:space-y-6 text-sm lg:text-base xl:text-lg leading-relaxed">
                <p className="text-gray-700 lg:text-justify break-words hyphens-auto">
                  Currently engaged in coursework covering programming languages
                  such as C++, software design principles, and systems analysis
                  methodologies. I am highly motivated to advance my expertise
                  in emerging technologies to develop effective and innovative
                  solutions.
                </p>

                <p className="text-gray-700 lg:text-justify break-words hyphens-auto">
                  Additionally, I have practical experience collaborating within
                  multidisciplinary teams to design, implement, and validate
                  software projects, particularly through roles in Quality
                  Assurance (QA) to identify and address real-world application
                  challenges and to develop robust tools for problem resolution.
                </p>

                <p className="text-gray-700 lg:text-justify break-words hyphens-auto">
                  Outside of programming and interface design, I actively
                  participate in sports such as volleyball. I also pursue
                  interests in vlogging, photography, bouldering, and enjoy
                  consuming matcha-based beverages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Buttons at the bottom */}
        <div className="pb-8 px-4 pt-12 w-full">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Volunteer, Toronto Metropolitan University
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">TerraHacks - Hackathon Event</p>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Volunteer, York University
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">Hack the 6ix - Hackathon Event</p>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Sales Associate, Toronto
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">Kiokii And..</p>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Support Services Officer, Toronto
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">Seneca Polytechnic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
