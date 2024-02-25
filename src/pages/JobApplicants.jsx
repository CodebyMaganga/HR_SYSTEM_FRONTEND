import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import toast from 'react-hot-toast';

function JobApplicants() {
  const [jobapplicants, setJobapplicants] = useState([]);
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
    if (window.confirm('Are you sure you want to delete this applicant?')) {
      try {
        const res = await fetch(`${BASE_URL}/job_applicants/${id}`, {
          method: 'DELETE',
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete this applicant");
        }

        setJobapplicants(jobapplicants.filter(applicant => applicant.id !== id));
        toast.success('Job Applicant deleted successfully');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Delete failed: ' + error.message);
      }
    }
  };

  return (
    <>
      <AddButtons
        navigationFunction={addJobApplicantButtonData.navigationFunction}
        text={addJobApplicantButtonData.text}
      />
      <div className="grid items-center my-2 mx-10 ">
        <table className="border-b min-w-full text-center text-md bg-white -mt-24 rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b font-medium text-black bg-gray-300">
            <tr>
              <th className="px-4 py-4">Profile</th>
              <th className="px-4 py-4">First Name</th>
              <th className="px-4 py-4">Last Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Address</th>
              <th className="px-4 py-4">Experience</th>
              <th className="px-4 py-4">Role</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Interview</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobapplicants.map((jobapplicant) => (
              <tr
                key={jobapplicant.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.photo}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.first_name}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.last_name}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.email}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.address}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.experience}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  {jobapplicant.role_applied}
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <button
                    className={`rounded-md p-2 ${
                      jobapplicant.active_status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {jobapplicant.active_status == 1 ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-8">jobapplicant_interview</td>
                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete 
                    className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out" 
                    onClick={() => deleteApplicant(jobapplicant.id)} 
                  />
                  <CiEdit 
                    className="hover:text-orange-600 transition duration-150 hover:scale-150 hover:ease-in-out" 
                  />
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
