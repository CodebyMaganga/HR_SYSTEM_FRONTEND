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
      <div className="grid items-center overflow-x-auto  my-2 mx-10 ">
        <table className=" border-b tablecard min-w-full  text-center text-md bg-white rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Department No</th>
              <th className="px-6 py-4">Employee No</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {department_employees.map((department_employee) => (
              <tr
                key={department_employee.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {department_employee.department_id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {department_employee.employee_id}
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

export default DepartmentEmployees;
