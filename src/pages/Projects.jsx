import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Title</th>
              <th>Project status</th>
              <th>Project Employees </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-8">{project.title}</td>
                <td className="px-8">{project.project_status}</td>
                <td className="px-8">project project_employees</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Projects;
