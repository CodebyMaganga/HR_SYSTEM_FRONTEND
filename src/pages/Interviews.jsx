import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Interviews() {
  const [interviews, setInterviews] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/interviews`)
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, []);
  return (
    <>
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Interview Time</th>
              <th className="px-6 py-4">Applicant Number</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr
                key={interview.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {interview.time}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {interview.applicant_id}
                </td>
                <td className="whitespace-nowrap px-6 py-4"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Interviews;
