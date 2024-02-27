import React from "react";

const EmployeeDetailsModal = ({ isModalOpen, modalContent, onClose }) => {
  if (isModalOpen !== true) {
    return null;
  }

  return (
    <section className="modal z-20">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end">
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#6821c3",
              padding: "4px 9px",
              borderRadius: "10px",
            }}
          >
            {" "}
            Close{" "}
          </button>
        </div>
        <main className="modal-mainContents">
          <h5 className="modal-title">
            <h2>
              MORE EMPLOYEE DETAILS: {modalContent.first_name}{" "}
              {modalContent.last_name}
            </h2>{" "}
            <br />
            <h2>Number of Dependants: {modalContent.dependants.length}</h2>
          </h5>
          <hr />

          <p className="mt-lg-3 modalText">
            {" "}
            {modalContent.dependants.map((dependant) => (
              <div
                key={dependant.id}
                className="flex flex-col rounded-lg bg-white shadow-[0px_3px_14px_1px_#718096] dark:bg-neutral-700 md:max-w-xl md:flex-row mt-4"
              >
                <img
                  className="h-auto w-[20%] rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="https://tse4.mm.bing.net/th?id=OIP.mQyY3CKatiLW45eKujJS9QHaHa&pid=Api&P=0&h=220"
                  alt=""
                />
                <div className="flex flex-col justify-start p-6">
                  <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {/* Card title :  */}
                    Dependant {dependant.id}
                  </h5>
                  <p className="mb-4 text-xl text-base text-neutral-600 dark:text-neutral-200">
                    Name : {dependant.first_name} &nbsp;
                    {dependant.last_name}
                    <br />
                    Age: {dependant.age}
                  </p>
                  <p className="text-xl text-neutral-500 dark:text-neutral-300">
                    Relationship: {dependant.relationship}
                  </p>
                </div>
              </div>
            ))}
          </p>
          {/* <div className="modal-button text-end">
            <button>End of content</button>
          </div> */}
        </main>
      </article>
    </section>
  );
};

export default EmployeeDetailsModal;
