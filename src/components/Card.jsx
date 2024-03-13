import { useEffect } from "react";
import { BASE_URL } from "./utils";

function Card({ title, text, icon }) {
  useEffect(() => {
    fetch(`${BASE_URL}/leaves`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    // <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div className="container-fluid">
      <div className="row">
        <div className="topcards grid  mb-20 md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-2 gap-0 -mt-20   border-solid relative ml-2">
          {/* Card 1: Total Employees */}
          <div className="topcard  rounded-[15px] overflow-hidden shadow-lg m-2 content-center">
            <div className="px-4 py-4 bg-white">
              {icon}
              <div className=" font-bold text-sm mb-2 mt-4">{title}</div>
              <p className="text-gray-700 text-lg">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
