import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Payroll() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/bank_details`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);
  return (
    <>
      <div className="grid items-center my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white  -mt-24 rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Employee Number</th>
              <th className="px-6 py-4">Payment Time</th>
              <th className="px-6 py-4">Bank Details</th>
              <th className="px-6 py-4">Gross Salary</th>
              <th className="px-6 py-4"> Total Deductions</th>
              <th className="px-6 py-4">Net Salary</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {payment.employee_id}
                </td>
                <td className="whitespace-nowrap px-6 py-4">31/03/2024</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {payment.employee_bank}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {payment.employee_salary}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  Total Deductions
                </td>
                <td className="whitespace-nowrap px-6 py-4">Net Salary</td>
                <td className="whitespace-nowrap px-6 py-4"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Payroll;
