import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function BottomCards() {
  //fetch applicants data
  const [jobApplicants, setJobApplicants] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`)
      .then((res) => res.json())
      .then((data) => setJobApplicants(data));
  }, []);

  return (
    <div className="flex justify-between p-4 w-full">
      {/* Recent Job Applicants */}
      <div className="w-1/2 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5">
        <h2 className="font-bold text-xl mb-4">Recent Job Applicants</h2>

        {jobApplicants.map((jobApplicant) => (
          <div key={jobApplicant.id} className="border-b border-gray-200 py-1">
            <div className="flex items-center justify-between">
              {/* Profile Image */}
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.mQyY3CKatiLW45eKujJS9QHaHa&pid=Api&P=0&h=220"
                alt={`${jobApplicant.first_name}'s profile`}
                className="h-10 w-10 rounded-full"
              />

              {/* Applicant Details and Button */}
              <div className="flex flex-row justify-between w-full">
                <div>
                  <div className="font-medium text-gray-700">
                    {jobApplicant.first_name} {jobApplicant.last_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {jobApplicant.status}
                  </div>
                </div>

                <div>
                  <button className="px-3 text-sm hover:bg-blue-500 bg-violet-400 text-white font-bold py-2 rounded-full">
                    {jobApplicant.role_applied}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Interviews */}
      <div className="w-1/2 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5">
        <h2 className="font-bold text-xl mb-20">Upcoming Interviews</h2>
      </div>

      {/* Projects Overview*/}
      <div className="w-1/2 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5">
        <h2 className="font-bold text-xl mb-20">Projects Overview</h2>
      </div>
    </div>
  );
}

export default BottomCards;
