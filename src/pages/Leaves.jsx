import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AddButtons from "../components/AddButtons";
import SearchFilter from "../components/SearchFilter";
import moment from "moment";

function Leaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/leaves`)
      .then((res) => res.json())
      .then((data) => setLeaves(data));
  }, []);

  const navigate = useNavigate();

  const goToAddEmployeeOnLeave = () => {
    navigate("/add-employee-on-leave");
  };

  const addEmployeeOnLeaveButtonData = {
    navigationFunction: goToAddEmployeeOnLeave,
    text: "Add Employee On Leave",
  };

  return (
    <>
      <AddButtons
        navigationFunction={addEmployeeOnLeaveButtonData.navigationFunction}
        text={addEmployeeOnLeaveButtonData.text}
      />

      <div className="grid displaycards my-2  mx-10 ">
        <table className=" border-b  min-w-full tablecard text-center text-md bg-white  rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Employee on Leave</th>
              <th className="hidden sm:table-cell px-6 py-4">Leave Day</th>
              <th className="hidden sm:table-cell px-6 py-4">Leave return</th>
              <th className="px-6 py-4">Leave type</th>
              <th className="hidden lg:table-cell px-6 py-4">Leave letter</th>
              <th className=" px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr
                key={leave.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {leave.employee.first_name} {leave.employee.last_name}
                </td>
                <td className="hidden sm:table-cell hitespace-nowrap px-6 py-4">
                  {moment(leave.leave_from).format("DD/MM/yyyy hh:mm A")}
                </td>
                <td className="hidden sm:table-cell whitespace-nowrap px-6 py-4">
                  {moment(leave.leave_to).format("DD/MM/yyyy hh:mm A")}
                </td>
                <td className=" whitespace-nowrap px-6 py-4">
                  {leave.leave_type}
                </td>
                <td className=" hidden lg:table-cell whitespace-nowrap px-6 py-4">
                  {leave.leave_letter}
                </td>

                <td className="flex gap-4 py-5 px-6 text-3xl">
                  <MdDelete className="hover:text-red-500 transition duration-150 hover:scale-150 hover:ease-in-out" />
                  <CiEdit className="hover:text-orange-600 transition duration-150 hover:scale-150 hover:ease-in-out" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaves;
