import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

const personalRelief = 2400;
const contributionBenefit = 1080;
let taxableIncome;

/*Check if user entered any contribution benefits and if salary is a number */
// if (!isNaN(saveSalary) && saveContribution > 0) {
//   contributionBenefit = saveContribution; //
// }

// taxableIncome = saveSalary - contributionBenefit;

let totalTax, netSalary;

/*Function calculate the first 24000KSh */
function firstTier() {
  return 0; //the first tier has a personalrelief of 2400 which equates to free
}

/*Calculate tax for the next 8333Ksh*/
function secondTier(taxableIncome) {
  let secondBatch = taxableIncome - 24000;

  if (secondBatch < 8333) {
    return secondBatch * 0.25;
  } else if (secondBatch >= 8333) {
    return 2083.25;
  }
}

/*Calculate tax for the next 467667Ksh */
function thirdTier(taxableIncome) {
  let thirdBatch = taxableIncome - 32333;

  if (thirdBatch < 467667) {
    return thirdBatch * 0.3;
  } else if (thirdBatch >= 467667) {
    return 140300.1;
  }
}

/*Calculate tax for the next 300000Ksh */
function fourthTier(taxableIncome) {
  let fourthBatch = taxableIncome - 500000;

  if (fourthBatch < 300000) {
    return fourthBatch * 0.325;
  } else if (fourthBatch >= 300000) {
    return 97500;
  }
}

/*Calculate tax for the next 800000Ksh and above */

function Payroll() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/bank_details`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  const handleDeductions = (salary) => {
    if (salary > 0 && salary <= 24000) {
      totalTax = firstTier();
    } else if (salary > 24000 && salary <= 32333) {
      totalTax = secondTier(salary);
    } else if (salary > 32333 && salary <= 500000) {
      totalTax = secondTier(salary) + thirdTier(salary);
    } else if (salary > 500000 && salary <= 800000) {
      totalTax = secondTier(salary) + thirdTier(salary) + fourthTier(salary);
    } else if (salary > 800000) {
      totalTax =
        secondTier(salary) +
        thirdTier(salary) +
        fourthTier(salary) +
        finalTier(salary);
    }

    netSalary = salary - totalTax;
    return netSalary;
  };

  const CountDeductions = (salary) => {
    if (salary > 0 && salary <= 24000) {
      totalTax = firstTier();
    } else if (salary > 24000 && salary <= 32333) {
      totalTax = secondTier(salary);
    } else if (salary > 32333 && salary <= 500000) {
      totalTax = secondTier(salary) + thirdTier(salary);
    } else if (salary > 500000 && salary <= 800000) {
      totalTax = secondTier(salary) + thirdTier(salary) + fourthTier(salary);
    } else if (salary > 800000) {
      totalTax =
        secondTier(salary) +
        thirdTier(salary) +
        fourthTier(salary) +
        finalTier(salary);
    }

    return totalTax;
  };
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
                  {CountDeductions(payment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {handleDeductions(payment.employee_salary)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Payroll;
