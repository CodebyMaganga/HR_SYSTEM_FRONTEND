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
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Project No</th>
              <th>Employee No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {project_employees.map((project_employee) => (
              <tr key={project_employee.id}>
                <td className="px-8">{project_employee.profile_picture}</td>
                <td className="px-8">{project_employee.first_name}</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProjectEmployees;
