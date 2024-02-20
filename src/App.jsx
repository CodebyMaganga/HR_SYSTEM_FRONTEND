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
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/DepartmentEmployees" element={<DepartmentEmployees />} />
        <Route path="/Leaves" element={<Leaves />} />
        <Route path="/ProjectEmployees" element={<ProjectEmployees />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/JobApplicants" element={<JobApplicants />} />
        <Route path="/Interviews" element={<Interviews />} />
        <Route path="/DepartmentEmployees" element={<DepartmentEmployees />} />
      </Routes>

      <MidCards />
      <BottomCards />
    </>
  );
}

export default App;
