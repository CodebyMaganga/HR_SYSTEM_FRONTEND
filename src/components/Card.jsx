import { useEffect } from "react";
import { BASE_URL } from "./utils";

function Card({ title, text, icon }) {
  useEffect(() => {
    fetch(`${BASE_URL}/on_leave_employees`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    // <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 -mt-20 z-20  border-solid relative ">
      {/* Card 1: Total Employees */}
      <div className="flex-none w-64 rounded-[15px] overflow-hidden shadow-lg m-4 content-center">
        <div className="px-4 py-4 bg-white">
          {icon}
          <div className=" font-bold text-sm mb-2 mt-4">{title}</div>
          <p className="text-gray-700 text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
