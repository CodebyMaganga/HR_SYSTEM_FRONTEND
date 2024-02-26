import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from "react-hot-toast";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";
import SearchFilter from "../components/SearchFilter";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

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

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const searchedEmployees = employees.filter(
    (employee) =>
      employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(searchedEmployees);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = ([] =
    categoryFilter === "all"
      ? searchedEmployees
      : searchedEmployees.filter((item) => item.category === categoryFilter));

  return (
    <>
      <AddButtons
        navigationFunction={addEmployeeButtonData.navigationFunction}
        text={addEmployeeButtonData.text}
      />
      {/* Search component */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        handleFilterChange={handleFilterChange}
      />
      <div className=" @container grid items-center my-2 mx-10 ">
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
              <th className="px-6 py-4">...</th>
            </tr>
          </thead>
          <tbody>
            {searchedEmployees.map((searchedEmployee) => (
              <tr
                key={searchedEmployee.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.profile_picture}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.first_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.last_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.phone}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    className={`rounded-md p-2 ${
                      searchedEmployee.active_status
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {searchedEmployee.active_status == 1
                      ? "Active"
                      : "Inactive"}
                  </button>
                </td>
                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete
                    className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out"
                    onClick={() => deleteEmployee(searchedEmployee.id)}
                  />
                  <CiEdit className="hover:text-orange-600 transition duration-150 hover:scale-150 hover:ease-in-out" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <p onClick={() => openModal(searchedEmployee)}>
                    <button
                      style={{
                        backgroundColor: "lightblue",
                        padding: "6px",
                        borderRadius: "10px",
                      }}
                    >
                      View More Details
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <EmployeeDetailsModal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      </section>
      ;
    </>
  );
}

export default Employees;
