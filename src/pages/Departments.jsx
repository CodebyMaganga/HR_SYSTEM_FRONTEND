import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Departments() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Department Name</th>
              <th>Department Employees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td className="px-8">{department.department_name}</td>
                <td className="px-8">department department_employees</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Departments;
