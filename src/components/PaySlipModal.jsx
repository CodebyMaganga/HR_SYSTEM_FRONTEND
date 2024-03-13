import React from "react";
import Avatar from "react-avatar";

const PaySlipModal = ({
  isModalOpen,
  modalContent,
  onClose,
  CountDeductions,
  handleNHIFdeductions,
  handleNSSFdeduction,
  houseLevyDeduction,
  handleDeductions,
}) => {
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

  if (isModalOpen !== true) {
    return null;
  }

  return (
    <section className="modal z-20 ">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end">
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#FF605C",
              padding: "4px 9px",
              borderRadius: "10px",
              transition: "transform 0.2s ease-in-out", // Adding transition for smooth effect
              // Initial size
              fontSize: "inherit",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)"; // Increase size by 10%
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Revert to original size
            }}
          >
            Close
          </button>
        </div>
        <main className="modal-mainContents z-20 W-[200px] ">
          <h5 className="modal-title text-center">
            <h2>{modalContent.title}</h2> <br />
            <h2>
              Payslip : {paymentMonth} {paymentYear}
            </h2>
          </h5>
          <p className="mt-lg-3 modalText">
            <div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="flex flex-row justify-around">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-xl font-medium leading-6 text-gray-900">
                        Full name :
                      </dt>
                      <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {modalContent.employee.first_name}{" "}
                        {modalContent.employee.last_name}
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-xl font-medium leading-6 text-gray-900">
                        Role :
                      </dt>
                      <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {modalContent.employee.role}
                      </dd>
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Gross salary
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {modalContent.employee_salary}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      PAYE
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {CountDeductions(modalContent.employee_salary)}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      NHIF
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {handleNHIFdeductions(modalContent.employee_salary)}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      NSSF
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {handleNSSFdeduction(modalContent.employee_salary)}{" "}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Housing Levy
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {houseLevyDeduction(modalContent.employee_salary)}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Net Salary
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {handleDeductions(modalContent.employee_salary)}{" "}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </p>
        </main>
      </article>
      <hr />
    </section>
  );
};

export default PaySlipModal;
