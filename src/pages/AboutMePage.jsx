import React from "react";
import NavBar from "../components/NavBar";

const AboutMePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-base-200 min-h-[100vh] pt-16 flex flex-col w-full">
        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 w-full">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* Image*/}
            <div className="flex-shrink-0 relative group">
              <img
                src="https://i.postimg.cc/3rmMX25W/nat-img.webp"
                alt="Image of Natasha"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg mt-8 lg:mt-20 transition-all duration-300 group-hover:brightness-110 group-hover:shadow-xl"
              />
              <div className="absolute top-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left">
                <div className="bg-gradient-to-r from-pink-200 to-purple-300 text-gray-800 px-4 py-2 rounded-2xl text-lg font-bold shadow-xl relative whitespace-nowrap">
                  Hi! ✨
                  <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pink-200 transform translate-y-full"></div>
                </div>
              </div>
            </div>

            {/* About me description */}
            <div className="flex-1 text-center lg:text-left w-full min-w-0">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold font-mono tracking-tight mt-8 lg:mt-12 mb-5 lg:mb-3 break-words hyphens-auto">
                <div>I am a student specializing in </div>
                <span className="text-primary hover:text-purple-600">
                  Computer Programming and Analysis
                </span>
              </h2>
              <div className="space-y-4 lg:space-y-6 text-sm lg:text-base xl:text-lg leading-relaxed">
                <p className="text-gray-700 lg:text-justify break-words hyphens-auto">
                  Currently engaged in coursework covering programming languages
                  such as JavaScript, C++, Python, software design principles,
                  and systems analysis methodologies. I am highly motivated to
                  advance my expertise in emerging technologies to develop
                  effective and innovative solutions.
                </p>

                <div className="text-gray-700">
                  <p className="mb-3">
                    Some technologies I have been working with include:
                  </p>
                  <div className="flex justify-center sm:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 w-fit sm:w-full">
                      {[
                        "JavaScript",
                        "HTML/CSS",
                        "SQL",
                        "C++",
                        "Python",
                        "React",
                        "Node.js",
                        "MongoDB",
                        "PostgreSQL",
                        "Git",
                        "AWS",
                        "Jira",
                      ].map((tech, index) => (
                        <span key={index} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2"></span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 lg:text-justify break-words hyphens-auto">
                  Outside of tech life, I actively participate in sports such as
                  volleyball 🏐. I also pursue interests in arts 🎨, photography
                  📸, bouldering 🧗‍♀️, and enjoy consuming matcha-based beverages
                  🧉.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience*/}

        <div className="pb-8 px-4 pt-12 w-full">
          <div className="w-full max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Director of Partnerships, University of Toronto Scarborough
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words mb-2">
                    Google Developer Group UTSC
                  </p>

                  <ul className="list-disc pl-5 text-justify">
                    <li>
                      Highlight the benefits of partnering with the event and
                      negotiate partnership terms
                    </li>
                    <li>
                      Build and manage long-term relationaships with industry
                      leaders
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full ">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Sales Associate, Toronto
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words mb-2">Kiokii And..</p>
                  <ul className="list-disc pl-5 text-justify">
                    <li>
                      Assisted customers by analyzing needs and providing
                      tailored product solutions, reinforcing user-centric
                      problem- solving skills.
                    </li>
                    <li>
                      Used POS software to process transactions while ensuring
                      data accuracy.
                    </li>
                    <li>
                      Adapted quickly to changing customer requests while
                      maintaining professionalism and efficiency.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Hacker (Front-end Developer), University of Toronto
                  Scarborough
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words mb-2">
                    Hack the Valley - Hackathon Event
                  </p>
                  <ul className="list-disc pl-5 text-justify">
                    <li>
                      Ideated and prototyped Slanguage with a team of four
                      hackers to tackle language barrier.
                    </li>
                    <li>
                      Led 60% of the front-end development, building a
                      responsive, dynamic UI.
                    </li>
                    <li>
                      Integrated Gemini API to enhance translation accuracy and
                      creativity, achieving a hackathon-ready project.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Support Services Officer, Toronto
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words mb-2">
                    Accessible Learning Services - Seneca Polytechnic
                  </p>
                  <ul className="list-disc pl-5 text-justify">
                    <li>
                      Guided students in C++ programming assignments, improving
                      comprehension and coding skills.
                    </li>
                    <li>
                      Provided structured support to enhance task completion and
                      learning outcomes.
                    </li>
                    <li>
                      Improved engagement by 20% through consistent mentoring
                      and motivational support.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Volunteer, Toronto Metropolitan University
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">TerraHacks - Hackathon Event</p>
                </div>
              </div>

              <div className="bg-base-200 collapse border border-base-300 w-full">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono font-bold text-sm lg:text-base break-words">
                  Volunteer, York University
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content font-mono text-sm lg:text-base">
                  <p className="break-words">Hack the 6ix - Hackathon Event</p>
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
