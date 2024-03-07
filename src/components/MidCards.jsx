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
import { NavLink } from "react-router-dom";

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
    <ResponsiveContainer className="overflow-x-scroll" height={300}>
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
        <Bar dataKey="grossSalary" fill="#13325A" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function MidCards() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row p-0 displaycards" style={{}}>
        {/* Employee Salary Chart Card */}
        <div className="col-lg-6 col-md-7 col-sm-12 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-3">
          <h2 className="font-bold text-xl mb-2">Employee Gross Salary</h2>
          <EmployeeSalaryChart />
        </div>
        <div className="col-lg-5 col-md-4 col-sm-12 rounded-[15px] shadow-lg bg-white p-4 m-3 ">
          <h2 className="font-bold text-xl mb-2 displaycards overflow-auto">
            Departments
          </h2>
          {/* Placeholder for content */}
          {departments.map((department) => (
            <div key={department.id} className="py-1">
              <div className="">
                {/* Applicant Details and Button */}
                <div className="w-full">
                  <NavLink
                    className=" w-full rounded-[15px] h-38 bg-white overflow-auto displaycards hover:bg-[#EEAD49] text-black hover:text-black hover: border border-[#EEAD49] shadow-lg p-4 m-1 font-medium "
                    to={`/example-params/${department.id}`}
                  >
                    <div className="displaycards">
                      {department.department_name}
                    </div>
                  </NavLink>
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
