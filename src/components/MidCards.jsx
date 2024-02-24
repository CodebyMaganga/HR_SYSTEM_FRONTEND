import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function MidCards() {
  //fetch applicants data
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <div className="flex p-4 w-full">
      {/* Attendance Overview Card */}
      <div className="w-5/12 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
        <h2 className="font-bold text-xl mb-2">Attendance Overview</h2>
        {/* Placeholder for graph */}
        <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
          <span>Graph Placeholder</span>
        </div>
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
        <div className="h-64 bg-white rounded">
          {departments.map((department) => (
            <div key={department.id} className="py-1">
              <div className="flex displaycards">
                {/* Applicant Details and Button */}
                <div className="flex flex-row justify-between w-full">
                  <div className=" w-full rounded-[15px] h-35 bg-violet-400 overflow-auto displaycards hover:bg-blue-500 shadow-lg p-4 m-1 font-medium text-gray-700">
                    <div className="displaycards">
                      {department.department_name}
                    </div>
                  </div>
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
