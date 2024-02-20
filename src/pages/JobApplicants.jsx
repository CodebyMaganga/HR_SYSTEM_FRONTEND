import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function JobApplicants() {
  const [jobapplicants, setJobapplicants] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`)
      .then((res) => res.json())
      .then((data) => setJobapplicants(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Experience</th>
              <th>Role</th>
              <th>Status</th>
              <th>Interview</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobapplicants.map((jobapplicant) => (
              <tr key={jobapplicant.id}>
                <td className="px-8">{jobapplicant.photo}</td>
                <td className="px-8">{jobapplicant.first_name}</td>
                <td className="px-8">{jobapplicant.last_name}</td>
                <td className="px-8">{jobapplicant.address}</td>
                <td className="px-8">{jobapplicant.experience}</td>
                <td className="px-8">{jobapplicant.role_applied}</td>
                <td className="px-8">
                  {jobapplicant.active_status == 1 ? "Active" : "Inactive"}
                </td>
                <td className="px-8">jobapplicant_interview</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobApplicants;
