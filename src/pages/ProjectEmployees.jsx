import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function ProjectEmployees() {
  const [project_employees, setProjectEmployees] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/employees`)
      .then((res) => res.json())
      .then((data) => setProjectEmployees(data));
  }, []);
  return (
    <>
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Project No</th>
              <th className="px-6 py-4">Employee No</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {project_employees.map((project_employee) => (
              <tr
                key={project_employee.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {project_employee.profile_picture}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {project_employee.first_name}
                </td>

                <td className="whitespace-nowrap px-6 py-4"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProjectEmployees;
