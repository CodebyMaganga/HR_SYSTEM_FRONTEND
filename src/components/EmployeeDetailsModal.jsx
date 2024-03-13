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
              backgroundColor: "#FF605C",
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

          <div className="mt-lg-3 modalText">
            <div className="w-2/4 mx-auto bg-white p-4 rounded">
              <form className="space-y-8">
                {/* Personal Details Section */}
                <h2 className=" font-bold text-xl mb-2 text-center">
                  Personal Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <h2 className="font-bold text-xl mb-2">Personal Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="flex flex-row text-lg justify-between">
                      Profile Picture: {modalContent.profile_picture}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      First Name: {modalContent.first_name}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Last Name: {modalContent.last_name}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Date of Birth: {modalContent.DOB}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Email: {modalContent.email}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Phone: {modalContent.phone}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Gender: {modalContent.gender}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      National_ID: {modalContent.national_ID}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Address: {modalContent.address}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Role: {modalContent.role}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Nationality: {modalContent.nationality}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Active_Status: {modalContent.active_status}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Marital_Status: {modalContent.marital_status}
                    </p>
                    <hr />
                    <p className="flex flex-row text-lg justify-between">
                      Date_Joined: {modalContent.date_joined}
                    </p>
                    <hr />
                  </div>
                </div>

                {/* Emergency Contacts Details Section */}
                <h2 className="font-bold text-xl mb-4 text-center">
                  Emergency Contacts Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.emergency_contacts.map(
                      (emergency_contact) => (
                        <div key={emergency_contact.id}>
                          <p className="flex flex-row text-lg justify-between">
                            {emergency_contact.first_name}
                          </p>
                          <p>{emergency_contact.last_name}</p>
                          <p>{emergency_contact.gender}</p>
                          <p>{emergency_contact.relationship}</p>
                          <p>{emergency_contact.phone}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Bank Details Section */}
                <h2 className="font-bold text-xl mb-4 text-center">
                  Bank Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.bankdetails.map((bankdetail) => (
                      <div key={bankdetail.id}>
                        <p>{bankdetail.employee_salary}</p>
                        <p>{bankdetail.employee_account}</p>
                        <p>{bankdetail.employee_bank}</p>
                        <p>{bankdetail.branch_code}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reference Details Section */}
                <h2 className="font-bold text-xl mb-4 text-center">
                  Reference Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.references.map((reference) => (
                      <div key={reference.id}>
                        <p>{reference.reference_name}</p>
                        <p>{reference.reference_phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dependants Details Section */}
                <h2 className="font-bold text-xl mb-4 text-center">
                  Dependants Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.dependants.map((dependant) => (
                      <div key={dependant.id}>
                        <p>{dependant.first_name}</p>
                        <p>{dependant.last_name}</p>
                        <p>{dependant.gender}</p>
                        <p>{dependant.age}</p>
                        <p>{dependant.relationship}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="font-bold text-xl mb-4 text-center">
                  Company Properites
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.company_properties.map((company_property) => (
                      <div key={company_property.id}>
                        <p>{company_property.category}</p>
                        <p>{company_property.brand}</p>
                        <p>{company_property.description}</p>
                        <p>{company_property.condition}</p>
                        <p>{company_property.serial_number}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Details Section */}
                <h2 className="font-bold text-xl mb-4 text-center">
                  Document Details
                </h2>
                <div className="border border-black p-4 rounded-md">
                  <div className="space-y-4">
                    {modalContent.documents.map((document) => (
                      <div key={document.id}>
                        <p>{document.document_type}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#CBF2FF] hover:bg-[#F9DDEE] displaycards text-black font-bold py-2 px-4 rounded-full text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default EmployeeDetailsModal;
