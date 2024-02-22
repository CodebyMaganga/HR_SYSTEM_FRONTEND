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
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Project status</th>
              <th className="px-6 py-4">Project Employees </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">{project.title}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {project.project_status}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  project project_employees
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Projects;
