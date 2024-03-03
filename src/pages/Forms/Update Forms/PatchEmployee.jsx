import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../components/utils";

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md w-full"
      placeholder={placeholder}
    />
  );
};

const PatchEmployee = ({
  isPatchModalOpen,
  patchModalContent,
  setPatchModalContent,
  tempEmployee,
  setTempEmployee,
  onClose,
}) => {
  const [changed, setChanged] = useState(false);

  console.log(tempEmployee);
  console.log(patchModalContent);
  let x = 10;
  let y = x;
  y = 5;
  console.log(x, y);

  const formik = useFormik({
    initialValues: tempEmployee,
    validationSchema: Yup.object({
      profile_picture: Yup.string().required("Profile picture is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      DOB: Yup.date().required("D.O.B is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      gender: Yup.string().required("Gender is required"),
      national_ID: Yup.string().required("National ID is required"),
      address: Yup.string().required("Address is required"),
      role: Yup.string().required("Role is required"),
      nationality: Yup.string().required("Nationality is required"),
      emergency_contact: Yup.string().required("Emergency contact is required"),
      active_status: Yup.string().required("Active status is required"),
      marital_status: Yup.string().required("Marital status is required"),
      date_joined: Yup.date().required("Date joined is required"),
      bankdetails: Yup.object({
        employee_salary: Yup.string().required("Employee salary is required"),
        employee_account: Yup.string().required("Employee account is required"),
        employee_bank: Yup.string().required("Employee bank is required"),
        branch_code: Yup.string().required("Branch code is required"),
      }),
      documents: Yup.object({
        document_type: Yup.string().required("Document type is required"),
      }),
      references: Yup.object({
        reference_name: Yup.string().required("Reference name is required"),
        reference_phone: Yup.string().required("Reference phone is required"),
      }),
      dependants: Yup.object({
        first_name: Yup.string().required("Dependant's first name is required"),
        last_name: Yup.string().required("Dependant's last name is required"),
        gender: Yup.string().required("Dependant's gender is required"),
        age: Yup.number().required("Dependant's age is required"),
        relationship: Yup.string().required(
          "Dependant's relationship is required"
        ),
      }),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(
          `${BASE_URL}/employees/${patchModalContent.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to edit employee");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to edit employee", error.message);
        toast.error("Failed to edit employee: " + error.message);
      }
    },
  });

  useEffect(() => {
    formik.setValues(tempEmployee);
  }, [tempEmployee]); // Update form values when tempEmployee changes

  const handleInputChange = (fieldName, fieldValue) => {
    setChanged(true);
    setTempEmployee((prevEmployee) => ({
      ...prevEmployee,
      [fieldName]: fieldValue,
    }));
    formik.setFieldValue(fieldName, fieldValue);
  };

  if (isPatchModalOpen !== true) {
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
              EMPLOYEE DETAILS: {patchModalContent.first_name}{" "}
              {patchModalContent.last_name}
            </h2>{" "}
            <br />
            <h2>Number of Dependants: {patchModalContent.dependants.length}</h2>
          </h5>
          <hr />

          <p className="mt-lg-3 modalText overflow-y-scroll">
            <div className="container bg-white mx-auto p-4">
              <form className="space-y-8" onSubmit={formik.handleSubmit}>
                {/* Personal Details Section */}
                <div className="border border-black p-4 rounded-md">
                  <h2 className="font-bold text-xl mb-4">Personal Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      type="text"
                      name="profile_picture"
                      value={tempEmployee.profile_picture}
                      placeholder="Profile Picture"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          profile_picture: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      type="text"
                      name="first_name"
                      value={tempEmployee.first_name}
                      placeholder="First Name"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          first_name: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="last_name"
                      value={tempEmployee.last_name}
                      placeholder="Last Name"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          last_name: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="DOB"
                      value={tempEmployee.DOB}
                      placeholder="D.O.B"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          DOB: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="email"
                      value={tempEmployee.email}
                      placeholder="Email"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          email: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="phone"
                      value={tempEmployee.phone}
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          phone: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="gender"
                      value={tempEmployee.gender}
                      placeholder="Gender"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          gender: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="national_ID"
                      value={tempEmployee.national_ID}
                      placeholder="National ID"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          national_ID: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="address"
                      value={tempEmployee.address}
                      placeholder="Address"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          address: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="role"
                      value={tempEmployee.role}
                      placeholder="Role"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          role: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="nationality"
                      value={tempEmployee.nationality}
                      placeholder="Nationality"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          nationality: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="emergency_contact"
                      value={tempEmployee.emergency_contact}
                      placeholder="Emergency Contact"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          emergency_contact: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="checkbox"
                      name="active_status"
                      value={tempEmployee.active_status}
                      placeholder="Active status"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          active_status: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="marital_status"
                      value={tempEmployee.marital_status}
                      placeholder="Marital status"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          marital_status: e.target.value,
                        });
                      }}
                    />

                    <InputField
                      type="text"
                      name="date_joined"
                      value={tempEmployee.date_joined}
                      placeholder="Date joined"
                      onChange={(e) => {
                        setChanged(true);
                        setTempEmployee({
                          ...tempEmployee,
                          date_joined: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                {/* Bank Details Section */}
                <div className="border border-black p-4 rounded-md">
                  <h2 className="font-bold text-xl mb-4">Bank Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tempEmployee.bankdetails.map((bankdetail, index) => (
                      <div key={index}>
                        <InputField
                          type="text"
                          name={`bankdetails[${index}].employee_salary`}
                          value={bankdetail.employee_salary}
                          placeholder="Employee Salary"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedBankdetails = [
                              ...tempEmployee.bankdetails,
                            ];
                            updatedBankdetails[index].employee_salary =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              bankdetails: updatedBankdetails,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`bankdetails[${index}].employee_account`}
                          value={bankdetail.employee_account}
                          placeholder="Employee Account"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedBankdetails = [
                              ...tempEmployee.bankdetails,
                            ];
                            updatedBankdetails[index].employee_account =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              bankdetails: updatedBankdetails,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`bankdetails[${index}].employee_bank`}
                          value={bankdetail.employee_bank}
                          placeholder="Employee Bank"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedBankdetails = [
                              ...tempEmployee.bankdetails,
                            ];
                            updatedBankdetails[index].employee_bank =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              bankdetails: updatedBankdetails,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`bankdetails[${index}].branch_code`}
                          value={bankdetail.branch_code}
                          placeholder="Branch Code"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedBankdetails = [
                              ...tempEmployee.bankdetails,
                            ];
                            updatedBankdetails[index].branch_code =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              bankdetails: updatedBankdetails,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Details Section */}
                <div className="border border-black p-4 rounded-md overflow-auto">
                  <h2 className="font-bold text-xl mb-4">Document Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tempEmployee.documents.map((document, index) => (
                      <div key={index}>
                        <InputField
                          type="text"
                          name={`documents[${index}].document_type`}
                          value={document.document_type}
                          placeholder="Document Type"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDocuments = [
                              ...tempEmployee.documents,
                            ];
                            updatedDocuments[index].document_type =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              documents: updatedDocuments,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reference Details Section */}
                <div className="border border-black p-4 rounded-md">
                  <h2 className="font-bold text-xl mb-4">Reference Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tempEmployee.references.map((reference, index) => (
                      <div key={index}>
                        <InputField
                          type="text"
                          name={`references[${index}].reference_name`}
                          value={reference.reference_name}
                          placeholder="Reference Name"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedReferences = [
                              ...tempEmployee.references,
                            ];
                            updatedReferences[index].reference_name =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              references: updatedReferences,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`references[${index}].reference_phone`}
                          value={reference.reference_phone}
                          placeholder="Reference Phone"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedReferences = [
                              ...tempEmployee.references,
                            ];
                            updatedReferences[index].reference_phone =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              references: updatedReferences,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dependants Details Section */}
                <div className="border border-black p-4 rounded-md">
                  <h2 className="font-bold text-xl mb-4">Dependants Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tempEmployee.dependants.map((dependant, index) => (
                      <div key={index}>
                        <InputField
                          type="text"
                          name={`dependants[${index}].first_name`}
                          value={dependant.first_name}
                          placeholder="Dependants First name"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDependants = [
                              ...tempEmployee.dependants,
                            ];
                            updatedDependants[index].first_name =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              dependants: updatedDependants,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`dependants[${index}].last_name`}
                          value={dependant.last_name}
                          placeholder="Dependants last name"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDependants = [
                              ...tempEmployee.dependants,
                            ];
                            updatedDependants[index].last_name = e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              dependants: updatedDependants,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`dependants[${index}].gender`}
                          value={dependant.gender}
                          placeholder="Dependants gender"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDependants = [
                              ...tempEmployee.dependants,
                            ];
                            updatedDependants[index].gender = e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              dependants: updatedDependants,
                            });
                          }}
                        />

                        <InputField
                          type="number"
                          name={`dependants[${index}].age`}
                          value={dependant.age}
                          placeholder="Dependants age"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDependants = [
                              ...tempEmployee.dependants,
                            ];
                            updatedDependants[index].age = e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              dependants: updatedDependants,
                            });
                          }}
                        />

                        <InputField
                          type="text"
                          name={`dependants[${index}].relationship`}
                          value={dependant.relationship}
                          placeholder="Dependants relationship"
                          onChange={(e) => {
                            setChanged(true);
                            const updatedDependants = [
                              ...tempEmployee.dependants,
                            ];
                            updatedDependants[index].relationship =
                              e.target.value;
                            setTempEmployee({
                              ...tempEmployee,
                              dependants: updatedDependants,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <>
                  {changed ? (
                    <>
                      {" "}
                      <button
                        type="submit"
                        className="bg-[#CBF2FF] hover:bg-[#F9DDEE] displaycards text-black font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                          setPatchModalContent({ ...patchModalContent });
                          setChanged(false);
                          console.log(patchModalContent);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#CBF2FF] hover:bg-[#F9DDEE] displaycards text-black font-bold py-2 px-4 rounded"
                        onClick={() => console.log("I have been clicked")}
                      >
                        Submit
                      </button>{" "}
                    </>
                  ) : null}
                </>
              </form>
            </div>
          </p>
          {/* <div className="modal-button text-end">
            <button>End of content</button>
          </div> */}
        </main>
      </article>
    </section>
  );
};

export default PatchEmployee;
