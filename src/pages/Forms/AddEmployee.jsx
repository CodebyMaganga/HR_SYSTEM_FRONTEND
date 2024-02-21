import React, { useState } from 'react';

const InputField = ({ name, value, onChange, placeholder, type = 'text' }) => {
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

const AddEmployee = () => {
  const [formData, setFormData] = useState({});

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   // Submit formData to server or handle as needed
  // };

  const personalFields = [
    { name: "firstName", placeholder: "First Name" },
    { name: "lastName", placeholder: "Last Name" },
    { name: "email", placeholder: "Email" },
    { name: "phone", placeholder: "Phone" },
    { name: "gender", placeholder: "Gender" },
    { name: "nationalID", placeholder: "National ID" },
    { name: "address", placeholder: "Address" },
    { name: "role", placeholder: "Role" },
    { name: "profile", placeholder: "Profile Picture URL" },
    { name: "nationality", placeholder: "Nationality" },
    { name: "emergencyContact", placeholder: "Emergency Contact" }
  ];

  const bankFields = [
    { name: "employeeSalary", placeholder: "Employee Salary" },
    { name: "employeeAccount", placeholder: "Employee Account Number" },
    { name: "employeeBank", placeholder: "Employee Bank Name" },
    { name: "branchCode", placeholder: "Branch Code" }
  ];

  const documentFields = [
    { name: "documentType", placeholder: "Document Type" }
  ];

  return (
    <div className="container bg-gray-300 mx-auto p-4">
      <form  className="space-y-8">
        {/* Personal Details Section */}
        <div className='border border-black p-4 rounded-md'>
          <h2 className="font-bold text-xl mb-4">Personal Details</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalFields.map(field => (
              <InputField
                key={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                
                placeholder={field.placeholder}
              />
            ))}
          </div>
        </div>

        {/* Bank Details Section */}
        <div className='border border-black p-4 rounded-md'>
          <h2 className="font-bold text-xl mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bankFields.map(field => (
              <InputField
                key={field.name}
                name={field.name}
                value={formData[field.name] || ''}
               
                placeholder={field.placeholder}
              />
            ))}
          </div>
        </div>

        {/* Document Details Section */}
        <div className='border border-black p-4 rounded-md'>
          <h2 className="font-bold text-xl mb-4">Document Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentFields.map(field => (
              <InputField
                key={field.name}
                name={field.name}
                value={formData[field.name] || ''}
               
                placeholder={field.placeholder}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="bg-gray-800 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;