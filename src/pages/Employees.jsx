import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from "react-hot-toast";

function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/employees`)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const navigate = useNavigate();

  const goToAddEmployee = () => {
    navigate("/add-employee");
  };

  const addEmployeeButtonData = {
    navigationFunction: goToAddEmployee,
    text: "Add Employee",
  };

  //delete function
  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const res = await fetch(`${BASE_URL}/employees/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete the employee");
        }

        setEmployees(employees.filter((employee) => employee.id !== id));
        toast.success("Employee deleted successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Delete failed: " + error.message);
      }
    }
  };

  return (
    <>
      <AddButtons
        navigationFunction={addEmployeeButtonData.navigationFunction}
        text={addEmployeeButtonData.text}
      />
      <div className="  grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Profile</th>
              <th className="px-6 py-4">First Name</th>
              <th className="px-6 py-4">Last Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {employee.profile_picture}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {employee.first_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {employee.last_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{employee.role}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {employee.phone}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    className={`rounded-md p-2 ${
                      employee.active_status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {employee.active_status == 1 ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete
                    className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out"
                    onClick={() => deleteEmployee(employee.id)}
                  />
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

export default Employees;
