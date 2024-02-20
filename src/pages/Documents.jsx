import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Documents() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/documents`)
      .then((res) => res.json())
      .then((data) => setDocuments(data));
  }, []);
  return (
    <>
      <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Document Type</th>
              <th>Employee No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id}>
                <td className="px-8">{document.document_type}</td>
                <td className="px-8">{document.employee_id}</td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Documents;
