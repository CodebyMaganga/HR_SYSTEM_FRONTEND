import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from "react-hot-toast";
import Avatar from "react-avatar";
import SearchFilter from "../components/SearchFilter";

function JobApplicants() {
  const [jobapplicants, setJobapplicants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`)
      .then((res) => res.json())
      .then((data) => setJobapplicants(data));
  }, []);

  const navigate = useNavigate();

  const goToAddJobApplicants = () => {
    navigate("/add-job-applicant");
  };

  const addJobApplicantButtonData = {
    navigationFunction: goToAddJobApplicants,
    text: "Add Job Applicant",
  };

  // delete function (delete a job applicant)
  const deleteApplicant = async (id) => {
    if (window.confirm("Are you sure you want to delete this applicant?")) {
      try {
        const res = await fetch(`${BASE_URL}/job_applicants/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete this applicant");
        }

        setJobapplicants(
          jobapplicants.filter((applicant) => applicant.id !== id)
        );
        toast.success("Job Applicant deleted successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Delete failed: " + error.message);
      }
    }
  };

  const searchedJobApplicants = jobapplicants.filter(
    (jobapplicant) =>
      jobapplicant.first_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      jobapplicant.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(searchedEmployees);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = ([] =
    categoryFilter === "all"
      ? searchedJobApplicants
      : searchedJobApplicants.filter(
          (item) => item.category === categoryFilter
        ));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <AddButtons
              navigationFunction={addJobApplicantButtonData.navigationFunction}
              text={addJobApplicantButtonData.text}
            />
          </div>

          {/* Search component */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categoryFilter={categoryFilter}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto m-5">
        <table className=" border-b text-center text-md bg-white rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b font-medium text-black bg-gray-300">
            <tr>
              <th className="px-4 py-4 hidden  sm:table-cell">Profile</th>
              <th className="px-4 py-4">First Name</th>
              <th className="px-4 py-4 hidden  lg:table-cell">Last Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4 hidden lg:table-cell">Address</th>
              <th className="px-4 py-4 hidden lg:table-cell">Experience</th>
              <th className="px-4 py-4 hidden sm:table-cell">Role</th>
              <th className="px-4 py-4 hidden lg:table-cell">Status</th>
              <th className="px-4 py-4 hidden lg:table-cell">Interview</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchedJobApplicants.map((searchedJobApplicant) => (
              <tr
                key={searchedJobApplicant.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className=" hidden lg:table-cell whitespace-nowrap px-6 py-4">
                  <Avatar
                    name={
                      searchedJobApplicant.first_name +
                      " " +
                      searchedJobApplicant.last_name
                    }
                    size="40"
                    round={true}
                    //onClick={() => openModal(searchedJobApplicant)}
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.first_name}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.last_name}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.email}
                </td>
                <td className="hidden lg:table-cell whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.address}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.experience}
                </td>
                <td className="hidden sm:table-cell whitespace-nowrap px-4 py-4">
                  {searchedJobApplicant.role_applied}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-4 py-4">
                  <button
                    className={`rounded-md p-2 ${
                      searchedJobApplicant.active_status
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {searchedJobApplicant.active_status == 1
                      ? "Active"
                      : "Inactive"}
                  </button>
                </td>
                <td className="hidden lg:table-cell px-8">
                  jobapplicant_interview
                </td>
                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete
                    className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out"
                    onClick={() => deleteApplicant(searchedJobApplicant.id)}
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

export default JobApplicants;
