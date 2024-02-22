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
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Department Name</th>
              <th className="px-6 py-4">Department Employees</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr
                key={department.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {department.department_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  department department_employees
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

export default Departments;
