import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import MidCards from "../components/MidCards";
import BottomCards from "../components/BottomCards";
import Accordion from "../components/Accordion";
import { BASE_URL } from "../components/utils";
import {
  IoIosPeople,
  IoIosBriefcase,
  IoIosPaper,
  IoIosChatbubbles,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

function Home() {
  const [payments, setPayments] = useState([]);

  const d = new Date();
  const month = d.getMonth();

  useEffect(() => {
    fetch(`${BASE_URL}/bank_details`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched payments:", data); // Log fetched payments
        setPayments(data);
      })
      .catch((error) => {
        console.error("Error fetching payments:", error); // Log fetch error
      });
  }, []);

  // Calculate the total payment
  const totalPayment = payments.reduce((acc, payment) => {
    return acc + parseFloat(payment.employee_salary);
  }, 0);

  const employeeCardData = {
    title: "Total employees",
    text: "10",
    icon: <IoIosPeople className=" text-5xl bg-[#87D8FB] rounded-full p-1" />,
  };

  const onLeaveEmployeeCardData = {
    title: "Employees on leave",
    text: "5",
    icon: (
      <IoIosBriefcase className=" text-5xl bg-[#FFA3AF] rounded-full p-1" />
    ),
  };

  const projectsCardData = {
    title: "Projects",
    text: "Active 3 ",
    icon: <IoIosPaper className=" text-5xl bg-[#FFD639] rounded-full p-1" />,
  };

  const payrollCardData = {
    title: "Payroll",
    text: isNaN(totalPayment)
      ? "N/A"
      : `${new Date().toLocaleString("default", {
          month: "long",
        })} ${totalPayment}`,
    icon: (
      <IoIosChatbubbles className=" text-5xl bg-[#87D8FB] rounded-full p-1" />
    ),
  };

  const jobApplicantCardData = {
    title: "Job Applicants",
    text: "10",
    icon: (
      <IoIosCheckmarkCircleOutline className=" text-5xl bg-[#FFA3AF] rounded-full p-1" />
    ),
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3  z-20  border-solid relative ">
        <NavLink to="/employees">
          <Card
            title={employeeCardData.title}
            text={employeeCardData.text}
            icon={employeeCardData.icon}
          />
        </NavLink>
        <NavLink to="/leaves">
          <Card
            title={onLeaveEmployeeCardData.title}
            text={onLeaveEmployeeCardData.text}
            icon={onLeaveEmployeeCardData.icon}
          />
        </NavLink>
        <NavLink to="/projects">
          <Card
            title={projectsCardData.title}
            text={projectsCardData.text}
            icon={projectsCardData.icon}
          />
        </NavLink>
        <NavLink to="/payroll">
          <Card
            title={payrollCardData.title}
            text={payrollCardData.text}
            icon={payrollCardData.icon}
          />
        </NavLink>
        <NavLink to="/job-applicants">
          <Card
            title={jobApplicantCardData.title}
            text={jobApplicantCardData.text}
            icon={jobApplicantCardData.icon}
          />
        </NavLink>
      </div>
      <MidCards />
      <BottomCards />
      <Accordion />
    </>
  );
}

export default Home;
