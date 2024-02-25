import React from "react";

import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import MidCards from "../components/MidCards";
import BottomCards from "../components/BottomCards";
import {
  IoIosPeople,
  IoIosBriefcase,
  IoIosPaper,
  IoIosChatbubbles,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

function Home() {
  const employeeCardData = {
    title: "Total employees",
    text: "200",
    icon: <IoIosPeople className=" text-5xl bg-[#87D8FB] rounded-full p-1" />,
  };

  const onLeaveEmployeeCardData = {
    title: "Employees on leave",
    text: "30",
    icon: (
      <IoIosBriefcase className=" text-5xl bg-[#FFA3AF] rounded-full p-1" />
    ),
  };

  const projectsCardData = {
    title: "Projects",
    text: "Active 5 ",
    icon: <IoIosPaper className=" text-5xl bg-[#FFD639] rounded-full p-1" />,
  };

  const payrollCardData = {
    title: "Payroll",
    text: "March",
    icon: (
      <IoIosChatbubbles className=" text-5xl bg-[#87D8FB] rounded-full p-1" />
    ),
  };

  const jobApplicantCardData = {
    title: "Job Applicants",
    text: "12",
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
    </>
  );
}

export default Home;
