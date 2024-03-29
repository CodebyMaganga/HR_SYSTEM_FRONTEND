import React, { useState, useEffect } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  AreaChart,
  Legend,
  Area,
} from "recharts";
import { BASE_URL } from "./utils";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [leaveData, setleaveData] = useState([]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/departments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDepartments(data);
      });

    fetch(`${BASE_URL}/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEmployees(data);
      });
    fetch(`${BASE_URL}/leaves`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setleaveData(data);
      });
  }, []);

  const departmentData = departments.map((dept) => ({
    department_name: dept.department_name,
    department_employee_count: dept.department_employees.length,
  }));

  // Calculate age of employees from their date of birth
  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const diffMs = Date.now() - dobDate.getTime();
    const ageDate = new Date(diffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const employeeData = employees.map((employee) => ({
    department_name: employee.employee_department?.department_name,
    age: calculateAge(employee.DOB),
  }));

  const processData = () => {
    // Group leave data by month
    const leaveByMonth = leaveData.reduce((acc, leave) => {
      const leaveMonth = new Date(leave.leave_from).toLocaleString("default", {
        month: "long",
      });
      if (!acc[leaveMonth]) {
        acc[leaveMonth] = 1;
      } else {
        acc[leaveMonth]++;
      }
      return acc;
    }, {});

    // Convert leaveByMonth object to array format for recharts
    const chartData = Object.keys(leaveByMonth).map((month) => ({
      month,
      employeesOnLeave: leaveByMonth[month],
    }));

    return chartData;
  };

  return (
    <>
      <div className="bg-white hidden sm:block">
        <h2>
          <button
            type="button"
            onClick={toggleAccordion}
            className="flex bg-[#EEAD49] hover:bg-white text-black hover:text-black hover: border border-[#EEAD49] items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:dark: gap-3"
            aria-expanded={isOpen}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="text-center text-black text-xl">Show stats</span>
            <svg
              className={`w-3 h-3 rotate-${isOpen ? "0" : "180"} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>

        {isOpen && (
          <div className="container hidden sm:block">
            <div className="row ">
              <div className="mb-10 mt-4 text-center">
                <h2>No. of employees in each department</h2>
              </div>
              <LineChart
                width={730}
                height={250}
                data={departmentData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="department_employee_count"
                  stroke="#8884d8"
                />
              </LineChart>
              <div>
                <div className="mb-10 mt-4 text-center">
                  <h2>Employees age in the company</h2>
                </div>
                <AreaChart
                  width={730}
                  height={250}
                  data={employeeData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department_name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="age"
                    stackId="1"
                    fill="#8884d8"
                  />
                </AreaChart>
              </div>
              <div>
                <div className="mb-10 mt-4 text-center">
                  <h2>Employees on Leave</h2>
                </div>
                <LineChart
                  width={730}
                  height={250}
                  data={processData()}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="employeesOnLeave" />
                  <YAxis dataKey="month" type="category" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="employeesOnLeave"
                    stroke="#8884d8"
                  />
                </LineChart>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
