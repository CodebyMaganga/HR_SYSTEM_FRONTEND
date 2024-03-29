import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdPersonOff } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from "react-hot-toast";
import Avatar from "react-avatar";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";
import PatchEmployee from "./Forms/Update Forms/PatchEmployee";
import SearchFilter from "../components/SearchFilter";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isPatchModalOpen, setIsPatchModalOpen] = useState(false);
  const [patchModalContent, setPatchModalContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [tempEmployee, setTempEmployee] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
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
  const deactivateEmployee = async (id) => {
    if (window.confirm("Are you sure you want to deactivate this employee?")) {
      try {
        const res = await fetch(`${BASE_URL}/employees/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ active_status: 0 }),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to deactivate the employee");
        }

        setEmployees(employees.filter((employee) => employee.id !== id));
        toast.success("Employee deactivated successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Deactivate failed: " + error.message);
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

  const openPatchModal = (content) => {
    setIsPatchModalOpen(true);
    setPatchModalContent(content);
    setTempEmployee(content);
  };

  const closePatchModal = () => {
    setIsPatchModalOpen(false);
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
      <div className="container-fluid displaycards ">
        <table className=" border-b tablecard text-center text-md bg-white  rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="hidden lg:table-cell px-6 py-4">Profile</th>
              <th className="px-6 py-4">First Name</th>
              <th className=" hidden lg:table-cell px-6 py-4">Last Name</th>
              <th className="hidden sm:table-cell px-6 py-4">Role</th>
              <th className="hidden sm:table-cell px-6 py-4">Phone</th>
              <th className="hidden lg:table-cell px-6 py-4">Status</th>
              <th className=" px-6 py-4">Action</th>
              <th className="px-6 py-4">...</th>
            </tr>
          </thead>
          <tbody>
            {searchedEmployees.map((searchedEmployee) => (
              <tr
                key={searchedEmployee.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className=" hidden lg:table-cell whitespace-nowrap px-6 py-4">
                  <Avatar
                    name={
                      searchedEmployee.first_name +
                      " " +
                      searchedEmployee.last_name
                    }
                    size="40"
                    round={true}
                    //onClick={() => openModal(searchedEmployee)}
                  />
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  {searchedEmployee.first_name}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-6 py-4">
                  {searchedEmployee.last_name}
                </td>
                <td className=" hidden sm:table-cell whitespace-nowrap px-6 py-4">
                  {searchedEmployee.role}
                </td>
                <td className="hidden sm:table-cell whitespace-nowrap px-6 py-4">
                  {searchedEmployee.phone}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-6 py-4">
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
                <td className="displaycards gap-4 flex py-4 px-6 text-2xl">
                  {searchedEmployee.active_status ? (
                    <>
                      <MdPersonOff
                        className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out text-2xl mt-2"
                        onClick={() => deactivateEmployee(searchedEmployee.id)}
                      />
                      <CiEdit
                        className="hover:text-orange-600 transition duration-150 hover:scale-150 hover:ease-in-out text-2xl mt-2"
                        onClick={() => openPatchModal(searchedEmployee)}
                      />
                    </>
                  ) : null}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <p onClick={() => openModal(searchedEmployee)}>
                    <button className="bg-white hover:bg-[#EEAD49] text-black p-[6px] hover: border border-[#EEAD49] rounded-[10px] ">
                      View More Details
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="displaycards">
        <EmployeeDetailsModal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      </section>
      <section className="displaycards">
        <PatchEmployee
          isPatchModalOpen={isPatchModalOpen}
          patchModalContent={patchModalContent}
          setPatchModalContent={setPatchModalContent}
          tempEmployee={tempEmployee}
          setTempEmployee={setTempEmployee}
          onClose={closePatchModal}
        />
      </section>
      ;
    </>
  );
}

export default Employees;
