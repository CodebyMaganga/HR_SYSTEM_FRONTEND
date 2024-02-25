import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function MidCards() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="flex p-4 w-full">
      {/* Attendance Overview Card */}
      <div className="w-5/12 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">Attendance Overview</h2>

        {/* Recharts Graph */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#7542f5" />
              <Bar dataKey="uv" stackId="a" fill="#42e3f5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-3/12 max-w-sm rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">News and Events</h2>
        {/* Placeholder for graph */}
        <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
          <span>Content Placeholder</span>
        </div>
      </div>

      {/* News and Events Card */}
      <div className="w-4/12 rounded-[15px] overflow-auto shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2 displaycards">Departments</h2>
        {/* Placeholder for content */}
        <div className="h-64 bg-white rounded">
          {departments.map((department) => (
            <div key={department.id} className="py-1">
              <div className="flex displaycards">
                {/* Applicant Details and Button */}
                <div className="flex flex-row justify-between w-full">
                  <div className=" w-full rounded-[15px] h-35 bg-violet-400 overflow-auto displaycards hover:bg-blue-500 shadow-lg p-4 m-1 font-medium text-gray-700">
                    <div className="displaycards">
                      {department.department_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MidCards;
