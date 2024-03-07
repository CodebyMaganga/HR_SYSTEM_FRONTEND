import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import SearchFilter from "../components/SearchFilter";
import PaySlipModal from "../components/PaySlipModal";

let totalTax, netSalary;

/*Function calculate the first 24000KSh */
function firstTier() {
  return 0; //the first tier has a personalrelief of 2400 which equates to free
}

/*Calculate tax for the next 8333Ksh*/
function secondTier(taxableIncome) {
  let secondBatch = taxableIncome - 24000;

  if (secondBatch <= 8333) {
    return secondBatch * 0.25;
  } else if (secondBatch > 8333) {
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
function finalTier(taxableIncome) {
  let fifthBatch = taxableIncome - 800000;

  return fifthBatch * 0.35;
}

function handleNSSFdeduction(salary) {
  if (salary > 0 && salary <= 10000) {
    return 600;
  } else if (salary > 10000 && salary <= 18000) {
    return 1080;
  } else if (salary > 18000 && salary <= 20000) {
    return 1200;
  } else if (salary > 20000 && salary <= 30000) {
    return 1800;
  } else if (salary > 30000) {
    return 2160;
  }
}
function handleNHIFdeductions(salary) {
  if (salary > 0 && salary < 6000) {
    return 150;
  } else if (salary >= 6000 && salary < 8000) {
    return 300;
  } else if (salary >= 8000 && salary < 12000) {
    return 500;
  } else if (salary >= 1200 && salary < 15000) {
    return 500;
  } else if (salary >= 15000 && salary < 20000) {
    return 650;
  } else if (salary >= 20000 && salary < 25000) {
    return 750;
  } else if (salary >= 25000 && salary < 30000) {
    return 850;
  } else if (salary >= 30000 && salary < 35000) {
    return 900;
  } else if (salary >= 35000 && salary < 40000) {
    return 950;
  } else if (salary >= 40000 && salary < 45000) {
    return 1000;
  } else if (salary >= 45000 && salary < 50000) {
    return 1100;
  } else if (salary >= 50000 && salary < 60000) {
    return 1200;
  } else if (salary >= 60000 && salary < 70000) {
    return 1300;
  } else if (salary >= 70000 && salary < 80000) {
    return 1400;
  } else if (salary >= 80000 && salary < 90000) {
    return 1500;
  } else if (salary >= 90000 && salary < 100000) {
    return 1600;
  } else if (salary >= 100000) {
    return 1700;
  }
}

function houseLevyDeduction(salary) {
  return salary * 0.015;
}
function Payroll() {
  const [payments, setPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const paymentMonth = month[d.getMonth() - 1];
  const paymentYear = d.getFullYear();

  useEffect(() => {
    fetch(`${BASE_URL}/bank_details`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  const handleDeductions = (salary) => {
    let GrossSalary =
      salary -
      (handleNSSFdeduction(salary) +
        handleNHIFdeductions(salary) +
        houseLevyDeduction(salary));
    if (GrossSalary > 0 && GrossSalary <= 24000) {
      totalTax = firstTier();
    } else if (GrossSalary > 24000 && GrossSalary <= 32333) {
      totalTax = secondTier(GrossSalary);
    } else if (GrossSalary > 32333 && GrossSalary <= 500000) {
      totalTax = secondTier(GrossSalary) + thirdTier(GrossSalary);
    } else if (GrossSalary > 500000 && GrossSalary <= 800000) {
      totalTax =
        secondTier(GrossSalary) +
        thirdTier(GrossSalary) +
        fourthTier(GrossSalary);
    } else if (GrossSalary > 800000) {
      totalTax =
        secondTier(GrossSalary) +
        thirdTier(GrossSalary) +
        fourthTier(GrossSalary) +
        finalTier(GrossSalary);
    }

    netSalary = GrossSalary - totalTax;
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

  const searchedPayments = payments.filter(
    (payment) =>
      payment.employee.first_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      payment.employee.last_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
  // console.log(searchedEmployees);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = ([] =
    categoryFilter === "all"
      ? searchedPayments
      : searchedPayments.filter((item) => item.category === categoryFilter));

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        handleFilterChange={handleFilterChange}
      />
      <div className="grid displaycards overflow-x-auto my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Employee Name</th>
              {/* <th className="px-6 py-4">Bank Details</th> */}
              <th className="px-6 py-4">Gross Salary</th>
              <th className="px-6 py-4"> PAYE Deductions</th>
              <th className="px-6 py-4"> NHIF</th>
              <th className="px-6 py-4"> NSSF</th>
              <th className="px-6 py-4"> Housing</th>
              <th className="px-6 py-4">Net Salary</th>
              <th className="px-6 py-4">Month</th>
              <th className="px-6 py-4"> ... </th>
            </tr>
          </thead>
          <tbody>
            {searchedPayments.map((searchedPayment) => (
              <tr
                key={searchedPayment.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedPayment.employee.first_name}{" "}
                  {searchedPayment.employee.last_name}
                </td>
                {/* <td className="whitespace-nowrap px-6 py-4">
                  {searchedPayment.employee_bank}
                </td> */}
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedPayment.employee_salary}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {CountDeductions(searchedPayment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {handleNHIFdeductions(searchedPayment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {handleNSSFdeduction(searchedPayment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {houseLevyDeduction(searchedPayment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {handleDeductions(searchedPayment.employee_salary)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {paymentMonth} {paymentYear}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <p onClick={() => openModal(searchedPayment)}>
                    <button className="bg-white hover:bg-[#EEAD49] text-black  p-[6px] hover: border border-[#EEAD49] rounded-[10px] ">
                      View Pay Slip
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <PaySlipModal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
          CountDeductions={CountDeductions}
          handleNHIFdeductions={handleNHIFdeductions}
          handleNSSFdeduction={handleNSSFdeduction}
          houseLevyDeduction={houseLevyDeduction}
          handleDeductions={handleDeductions}
        />
      </section>
    </>
  );
}

export default Payroll;
