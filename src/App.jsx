import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";
import AlterEgoPage from "./pages/AlterEgoPage";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Optional: Add background gradient that doesn't cause overflow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-white bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/hobbies" element={<AlterEgoPage />} />
      </Routes>
    </div>
  );
};

export default App;
