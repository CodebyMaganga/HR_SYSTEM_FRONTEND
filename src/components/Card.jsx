import { useEffect } from "react";
import { IoIosPeople } from "react-icons/io";
import {BASE_URL} from "./utils"




function Card() {

  useEffect(() => {
    fetch(`${BASE_URL}/on_leave_employees`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  
  }, []); 
  return (
    <div className="flex flex-wrap justify-center relative top-[-16px] z-0">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 text-center ">
        <div className="px-6 py-4 grid place-items-center ">
          <IoIosPeople className="size-12  " />

          <div className="font-bold text-xl mb-2 mt-4">Total Employees</div>
        </div>
        <p className="text-gray-700 text-lg">200/200</p>
      </div>
    </div>
  );
}

export default Card;
