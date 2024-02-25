import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../components/utils";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function BottomCards() {
  // Example project data
  const projectData = [
    { name: 'Active', value: 10 },
    { name: 'In Progress', value: 7 },
    { name: 'Completed', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Fetch applicants data
  const [jobApplicants, setJobApplicants] = useState([]);
  
  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`)
      .then((res) => res.json())
      .then((data) => setJobApplicants(data));
  }, []);
  

  return (
    <div className="flex justify-between p-4 w-full">
      {/* Recent Job Applicants */}
      <div className="h-80 w-1/2 rounded-[15px] overflow-auto h-40 shadow-lg bg-white p-4 m-2">
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

      {/* Upcoming Interviews Placeholder */}
      <div className="h-80 w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-20">Upcoming Interviews</h2>
        {/* Placeholder content */}
      </div>

      {/* Projects Overview */}
      <div className="h-80 w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-4">Projects Overview</h2>
        <div className='w-full h-full flex justify-center items-center'>
        <ResponsiveContainer width="80%" height="80%">
          <PieChart>
            <Pie
              data={projectData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {projectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
