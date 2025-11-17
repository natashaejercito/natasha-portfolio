import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";
import AlterEgoPage from "./pages/AlterEgoPage";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutMePage />} /> */}
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
        {/* <Route path="/hobbies" element={<AlterEgoPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
