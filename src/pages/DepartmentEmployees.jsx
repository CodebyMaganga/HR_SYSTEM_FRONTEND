import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function DepartmentEmployees() {
  const [department_employees, setDepartmentsEmployees] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/department_employees`)
      .then((res) => res.json())
      .then((data) => setDepartmentsEmployees(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Department No</th>
              <th>Employee No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {department_employees.map((department_employee) => (
              <tr key={department_employee.id}>
                <td className="px-8">{department_employee.department_id}</td>
                <td className="px-8">{department_employee.employee_id}</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DepartmentEmployees;
