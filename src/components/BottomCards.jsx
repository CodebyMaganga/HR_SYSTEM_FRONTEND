import React, { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import moment from "moment";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

function BottomCards() {
  // Fetch project data
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Count projects by status
        const statusCounts = {};
        data.forEach((project) => {
          statusCounts[project.project_status] = statusCounts[
            project.project_status
          ]
            ? statusCounts[project.project_status] + 1
            : 1;
        });

        // Format data for pie chart
        const formattedData = Object.entries(statusCounts).map(
          ([status, count], index) => ({
            name: status,
            value: count,
            color: getStatusColor(status),
            percent: ((count / data.length) * 100).toFixed(2),
          })
        );
        setProjectData(formattedData);
      });
  }, []);

  // Define colors for different project statuses
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#FFBB28";
      case "In Progress":
        return "#FF8042";
      case "Completed":
        return "#00C49F";
      default:
        return "#FF0000";
    }
  };

  // Fetch job applicants data
  const [jobApplicants, setJobApplicants] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/job_applicants`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setJobApplicants(data));
  }, []);

  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/interviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row p-2 displaycards">
        {/* Recent Job Applicants */}
        <div className="col-lg-4 md-12 col-sm-12 col-xs-12 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5 ">
          <h2 className="font-bold text-xl mb-4">Recent Job Applicants</h2>
          {jobApplicants.map((jobApplicant) => (
            <div
              key={jobApplicant.id}
              className="border-b border-gray-200 py-1"
            >
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
                    <button className="px-3 text-sm bg-white hover:bg-[#EEAD49] text-black hover:text-black hover: border border-[#EEAD49] font-bold py-2 rounded-full">
                      {jobApplicant.role_applied}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Interviews */}
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5">
          <h2 className="font-bold text-xl mb-4">Upcoming Interviews</h2>
          {/* Placeholder content */}
          {interviews.map((interview) => (
            <div key={interview.id} className="border-b border-gray-200 py-1">
              <div className="flex items-center justify-between">
                {/* Profile Image */}
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.mQyY3CKatiLW45eKujJS9QHaHa&pid=Api&P=0&h=220"
                  alt={`${interview.first_name}'s profile`}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <div className="font-medium text-gray-700">
                      {interview.jobapplicant.first_name}{" "}
                      {interview.jobapplicant.last_name}
                    </div>
                  </div>
                  <div>
                    <button className="px-3 text-sm text-black bg-white hover:bg-[#EEAD49] hover:text-black hover: border border-[#EEAD49] font-bold py-2 rounded-full">
                      {moment(interview.time).format("DD/MM/yyyy hh:mm A")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Overview*/}
        <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12 rounded-[15px] overflow-auto h-[300px] shadow-lg bg-white p-4 m-2 mb-5 ">
          <h2 className="font-bold text-xl mb-4">Projects Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                label
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend align="center" />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center">
            {projectData.map((entry, index) => (
              <div key={`legend-${index}`} className="displaycards mx-4">
                <div
                  className="mr-2"
                  style={{
                    backgroundColor: entry.color,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                  }}
                ></div>
                <div>{`${entry.name} (${entry.percent}%)`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
