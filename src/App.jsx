import { useState } from "react";

import NavBar from "./components/NavBar";
import Karibu from "./components/Karibu"
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Leaves from "./pages/Leaves";
import { Route, Routes } from "react-router-dom";

import Departments from "./pages/Departments";
import Documents from "./pages/Documents";
import JobApplicants from "./pages/JobApplicants";
import DepartmentEmployees from "./pages/DepartmentEmployees";
import Interviews from "./pages/Interviews";
import ProjectEmployees from "./pages/ProjectEmployees";
import AddEmployee from "./pages/Forms/AddEmployee";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Karibu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/department-employees" element={<DepartmentEmployees />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/project-employees" element={<ProjectEmployees />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/job-applicants" element={<JobApplicants />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
      

      
    </>
  );
}

export default App;
