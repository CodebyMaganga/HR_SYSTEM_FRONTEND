import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BASE_URL } from "../components/utils";

function EmployeeDistributionChart() {
  const [departmentEmployees, setDepartmentEmployees] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/department_employees1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Debugging log

        const employeeCountByDepartment = data.reduce((acc, item) => {
          const department = item.department_name;
          acc[department] = (acc[department] || 0) + 1;
          return acc;
        }, {});

        console.log('Count by department:', employeeCountByDepartment); // Debugging log

        // Calculate total number of employees
        const totalEmployees = Object.values(employeeCountByDepartment).reduce((sum, count) => sum + count, 0);

        // Convert counts to percentages
        const chartData = Object.keys(employeeCountByDepartment).map(key => ({
          department: key,
          employees: totalEmployees > 0 ? ((employeeCountByDepartment[key] / totalEmployees) * 100).toFixed(2) : 0  // Converted to percentage and fixed to 2 decimal places
        }));

        console.log('Chart Data:', chartData); // Debugging log

        setDepartmentEmployees(chartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={departmentEmployees}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis label={{ value: '% No. of Employees', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="employees" fill="#87D8FB" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function MidCards() {
  
  return (
    <div className="flex p-4 w-full">
      {/* Employee Distribution by Department Card */}
      <div className="w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">Employee Distribution by Department</h2>
        <EmployeeDistributionChart />
      </div>

      {/* News and Events Card */}
      <div className="w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">News and Events</h2>
        {/* Placeholder for content */}
        <div className="h-64 bg-gray-200 rounded">
          <p className="p-4">Content Placeholder for News and Events</p>
        </div>
      </div>
    </div>
  );
}

export default MidCards;
