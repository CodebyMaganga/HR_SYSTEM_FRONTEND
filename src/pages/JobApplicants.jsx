import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function JobApplicants() {
  const [jobapplicants, setJobapplicants] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`)
      .then((res) => res.json())
      .then((data) => setJobapplicants(data));
  }, []);
  return (
    <>
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-4 py-4">Profile</th>
              <th className="px-4 py-4">First Name</th>
              <th className="px-4 py-4">Last Name</th>
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
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
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

export default JobApplicants;
