// import React, { useState } from "react";
// import {
//   TERipple,
//   TEModal,
//   TEModalDialog,
//   TEModalContent,
//   TEModalHeader,
//   TEModalBody,
//   TEModalFooter,
// } from "tw-elements-react";

// function FullscreenModal() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       {/* <!-- Button trigger modal --> */}
//       <TERipple rippleColor="white">
//         <button
//           type="button"
//           className="inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//           onClick={() => setShowModal(true)}
//         >
//           Launch demo modal full screen
//         </button>
//       </TERipple>

//       {/* <!-- Modal --> */}
//       <TEModal show={showModal} setShow={setShowModal} scrollable>
//         <TEModalDialog
//           centered
//           size="fullscreen"
//           position="top-center"
//           theme={{
//             show: "translate-x-0 opacity-100",
//             hidden: "translate-x-[100%] opacity-0",
//           }}
//         >
//           <TEModalContent className="text-white bg-black h-full w-full">
//             <TEModalHeader className="text-white bg-black">
//               {/* <!-- Modal title --> */}
//               <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
//                 Modal title
//               </h5>
//               {/* <!--Close button--> */}
//               <button
//                 type="button"
//                 className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
//                 onClick={() => setShowModal(false)}
//                 aria-label="Close"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="h-6 w-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </TEModalHeader>
//             {/* <!--Modal body--> */}
//             <TEModalBody className="text-white bg-black">
//               <p className="px-10 text-center leading-[3rem] text-white bg-black">
//                 <div className="w-3/12 max-w-sm rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
//                   <h2 className="font-bold text-xl mb-2">News and Events</h2>
//                   {/* Placeholder for graph */}
//                   <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
//                     <span>Content Placeholder</span>
//                   </div>
//                 </div>
//               </p>
//             </TEModalBody>
//             <TEModalFooter className="text-white bg-black">
//               <TERipple rippleColor="light">
//                 <button
//                   type="button"
//                   className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Close
//                 </button>
//               </TERipple>
//               <TERipple rippleColor="light">
//                 <button
//                   type="button"
//                   className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 >
//                   Save changes
//                 </button>
//               </TERipple>
//             </TEModalFooter>
//           </TEModalContent>
//         </TEModalDialog>
//       </TEModal>
//     </div>
//   );
// }

// export default FullscreenModal;

import React from "react";
import { TERipple } from "tw-elements-react";

const Modal = ({ isModalOpen, modalContent, onClose }) => {
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
        <main className="modal-mainContents ">
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
                    Employee ID: {project_employee.employee.id}
                  </h5>
                  <p className="mb-4 text-xl text-base text-neutral-600 dark:text-neutral-200">
                    Name : {project_employee.employee.first_name} &nbsp;
                    {project_employee.employee.last_name}
                    <br />
                    Role: {project_employee.employee.role}
                  </p>
                  <p className="text-xl text-neutral-500 dark:text-neutral-300">
                    Contact: {project_employee.employee.phone}
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

export default Modal;
