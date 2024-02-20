import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Leaves() {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/leaves`)
      .then((res) => res.json())
      .then((data) => setLeaves(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Leave Day</th>
              <th>Leave return</th>
              <th>Leave type</th>
              <th>Leave letter</th>
              <th>Employees on Leave</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td className="px-8">{leave.leave_from}</td>
                <td className="px-8">{leave.leave_to}</td>
                <td className="px-8">{leave.leave_type}</td>
                <td className="px-8">{leave.leave_letter}</td>
                <td className="px-8">leave employees_on_leave</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaves;
