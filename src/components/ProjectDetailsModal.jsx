import React from "react";
import { TERipple } from "tw-elements-react";

const ProjectDetailsModal = ({ isModalOpen, modalContent, onClose }) => {
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
            }}
          >
            {" "}
            Close{" "}
          </button>
        </div>
        <main className="modal-mainContents z-20 ">
          <h5 className="modal-title">
            <h2>{modalContent.title}</h2> <br />
            <h2>
              {" "}
              Number of Employees: {modalContent.project_employees.length}
            </h2>
          </h5>
          <hr />

          <p className="mt-lg-3 modalText">
            {" "}
            {modalContent.project_employees.map((project_employee) => (
              <div
                key={project_employee.id}
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
                    Employee ID: {project_employee.id}
                  </h5>
                  <p className="mb-4 text-xl text-base text-neutral-600 dark:text-neutral-200">
                    Name : {project_employee.first_name} &nbsp;
                    {project_employee.last_name}
                    <br />
                    Role: {project_employee.role}
                  </p>
                  <p className="text-xl text-neutral-500 dark:text-neutral-300">
                    Contact: {project_employee.phone}
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

export default ProjectDetailsModal;
