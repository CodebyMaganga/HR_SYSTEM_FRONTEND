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
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Interview Time</th>
              <th>Applicant Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id}>
                <td className="px-8">{interview.time}</td>
                <td className="px-8">{interview.applicant_id}</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Interviews;
