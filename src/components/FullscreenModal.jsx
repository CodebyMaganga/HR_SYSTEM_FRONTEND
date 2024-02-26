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
import { IoMdClose } from "react-icons/io";

const Modal = ({ isModalOpen, modalContent, onClose }) => {
  if (isModalOpen !== true) {
    return null;
  }
  console.log(modalContent[0].title);
  return (
    <section className="modal">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end">
          <button onClick={onClose}> Close </button>
        </div>
        <main className="modal-mainContents">
          <h5 className="modal-title">
            <h2>{modalContent[0].title}</h2>
          </h5>
          <hr />
          <div className="modal-image text-center mt-lg-2">
            <img src={modalContent.image} alt="image" />
          </div>
          <p className="mt-lg-3 modalText">
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
          <div className="modal-button text-end">
            <button>End of content</button>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Modal;
