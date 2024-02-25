import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function OnLeaveEmployees() {
  const [onLeaveEmployees, setOnLeaveEmployees] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/on_leave_employees`)
      .then((res) => res.json())
      .then((data) => setOnLeaveEmployees(data));
  }, []);
  return (
    <>
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Leave ID</th>
              <th className="px-6 py-4">Employees ID</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {onLeaveEmployees.map((onLeaveEmployee) => (
              <tr
                key={onLeaveEmployee.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {onLeaveEmployee.leave_id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {onLeaveEmployee.employee_id}
                </td>
                <td className=" flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out" />
                  <CiEdit className="hover:text-orange-600 transition duration-150 hover:scale-150 hover:ease-in-out" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OnLeaveEmployees;
