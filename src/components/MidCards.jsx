import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
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

function EmployeeSalaryChart() {
  const [employeeSalaries, setEmployeeSalaries] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/bank_details`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging log

        // Check if data is an array and not null or undefined
        if (Array.isArray(data)) {
          // Convert data to format suitable for BarChart
          const chartData = data
            .map((item) => {
              // Check if item.employee is not null or undefined
              if (item.employee) {
                return {
                  name: `${item.employee.first_name} ${item.employee.last_name}`,
                  grossSalary: item.employee_salary,
                };
              } else {
                console.warn("Employee data is null or undefined:", item); // Log warning for null or undefined employee data
                return null;
              }
            })
            .filter(Boolean); // Filter out null values

          console.log("Chart Data:", chartData); // Debugging log

          setEmployeeSalaries(chartData);
        } else {
          console.error("Data is not an array:", data); // Log error if data is not an array
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={employeeSalaries}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          label={{ value: "Gross Salary", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="grossSalary" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function MidCards() {
  return (
    <div className="flex p-4 w-full">
      {/* Employee Salary Chart Card */}
      <div className="w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">Employee Gross Salary</h2>
        <EmployeeSalaryChart />
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
        <div className="h-64 bg-gray-200 rounded">
          <p className="p-4">Content Placeholder for News and Events</p>
        </div>
      </div>
    </div>
  );
}

export default MidCards;
