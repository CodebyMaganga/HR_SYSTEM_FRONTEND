import NavBar from "./components/NavBar";
import Karibu from "./components/Karibu";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

import Departments from "./pages/Departments";
import Documents from "./pages/Documents";
import JobApplicants from "./pages/JobApplicants";
import DepartmentEmployees from "./pages/DepartmentEmployees";
import Leaves from "./pages/Leaves";
import Payroll from "./pages/Payroll";
import ProjectEmployees from "./pages/ProjectEmployees";
import AddEmployee from "./pages/Forms/AddEmployee";
import Login from "./pages/Login";
import OnLeaveEmployees from "./pages/OnLeaveEmployees";
import ExampleParams from "./components/ExampleParams";
import AddDepartment from "./pages/Forms/AddDepartment";
import AddLeave from "./pages/Forms/AddLeave";
import AddJobapplicant from "./pages/Forms/AddJobapplicant";
import AddProject from "./pages/Forms/AddProject";

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
        <Route path="/on-leave-employees" element={<OnLeaveEmployees />} />
        <Route path="/project-employees" element={<ProjectEmployees />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/job-applicants" element={<JobApplicants />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/example-params/:id" element={<ExampleParams />} />
        <Route path="/add-department" element={<AddDepartment />} />
        <Route path="/add-employee-on-leave" element={<AddLeave />} />
        <Route path="/add-job-applicant" element={<AddJobapplicant />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </>
  );
}

export default App;
