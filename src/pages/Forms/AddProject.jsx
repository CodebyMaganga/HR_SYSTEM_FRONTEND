import React, { useState } from "react";

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

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

function AddProject() {
  const [formData, setFormData] = useState({});

  const projectFields = [
    { name: "title", placeholder: "Project Title" },
    { name: "status", placeholder: "Project Status" },
    { name: "project_employees", placeholder: "Project Employees" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (fieldName, fieldValue) => {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };
  return (
    <div className="container bg-gray-300 mx-auto p-4">
      <form className="space-y-8 " onSubmit={handleSubmit}>
        {/* Job Application Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Project Details</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectFields.map((field) => (
              <InputField
                key={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProject;
