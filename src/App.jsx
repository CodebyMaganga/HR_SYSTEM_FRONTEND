import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Leaves from "./pages/Leaves";
import { Route, Routes } from "react-router-dom";
import MidCards from "./components/MidCards";
import BottomCards from "./components/BottomCards";
import Departments from "./pages/Departments";
import Documents from "./pages/Documents";
import JobApplicants from "./pages/JobApplicants";
import DepartmentEmployees from "./pages/DepartmentEmployees";
import Interviews from "./pages/Interviews";
import ProjectEmployees from "./pages/ProjectEmployees";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/department-employees" element={<DepartmentEmployees />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/project-employees" element={<ProjectEmployees />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/job-applicants" element={<JobApplicants />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/department-employees" element={<DepartmentEmployees />} />
      </Routes>

      <MidCards />
      <BottomCards />
    </>
  );
}

export default App;
