import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from "react-hot-toast";

function Departments() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  const navigate = useNavigate();

  const goToAddDepartment = () => {
    navigate("/add-department");
  };

  const addDepartmentButtonData = {
    navigationFunction: goToAddDepartment,
    text: "Add Department",
  };

  //delete function
  const deleteDepartment = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        const res = await fetch(`${BASE_URL}/departments/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete the department");
        }

        setDepartments(
          departments.filter((department) => department.id !== id)
        );
        toast.success("Department deleted successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Delete failed: " + error.message);
      }
    }
  };

  return (
    <>
      <AddButtons
        navigationFunction={addDepartmentButtonData.navigationFunction}
        text={addDepartmentButtonData.text}
      />
      <div className="grid overflow-x-auto my-2 mx-10 ">
        <table className=" border-b  min-w-full text-center text-md bg-white rounded-[10px] overflow-hidden shadow-lg mb-5">
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
                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete
                    className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out"
                    onClick={() => deleteDepartment(department.id)}
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

export default Departments;
