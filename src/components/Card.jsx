import { useEffect } from "react";
import {
  IoIosPeople,
  IoIosBriefcase,
  IoIosPaper,
  IoIosChatbubbles,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { BASE_URL } from "./utils";

function Card() {
  useEffect(() => {
    fetch(`${BASE_URL}/on_leave_employees`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    // <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 -mt-20 z-20  border-solid relative ">
      {/* Card 1: Total Employees */}
      <div className="flex-none w-64 rounded-[15px] overflow-hidden shadow-lg m-4 ">
        <div className="px-4 py-4 bg-white">
          <IoIosPeople className=" text-3xl" />
          <div className=" font-bold text-sm mb-2 mt-4">Total Employees</div>
          <p className="text-gray-700 text-lg">200/200</p>
        </div>
      </div>

      {/* Card 2: Employees on Leave */}
      <div className="flex-none w-64 max-w-sm rounded-[15px] overflow-hidden shadow-lg m-4  ">
        <div className="px-4 py-4 bg-white">
          <IoIosBriefcase className=" text-3xl" />
          <div className="font-bold text-sm mb-2 mt-4">On Leave</div>
          <p className="text-gray-700 text-lg">15/200</p>
        </div>
      </div>

      {/* Card 3: Projects */}
      <div className="flex-none  w-64 max-w-sm rounded-[15px] overflow-hidden shadow-lg m-4  ">
        <div className="px-4 py-4 bg-white">
          <IoIosPaper className=" text-3xl" />
          <div className="font-bold text-sm mb-2 mt-4">Projects</div>
          <p className="text-gray-700 text-lg">8 Active</p>
        </div>
      </div>

      {/* Card 4: Payroll */}
      <div className="flex-none w-64 max-w-sm rounded-[15px] overflow-hidden shadow-lg m-4  ">
        <div className="px-4 py-4 bg-white">
          <IoIosChatbubbles className=" text-3xl" />
          <div className="font-bold text-sm mb-2 mt-4">Payroll</div>
          <p className="text-gray-700 text-lg">March</p>
        </div>
      </div>

      {/* Card 5: Job Applicants */}
      <div className="flex-none w-64 max-w-sm rounded-[15px] overflow-hidden shadow-lg m-4  ">
        <div className="px-4 py-4 bg-white">
          <IoIosCheckmarkCircleOutline className=" text-3xl" />
          <div className="font-bold text-sm mb-2 mt-4">Applicants</div>
          <p className="text-gray-700 text-lg">20 New</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Card;
