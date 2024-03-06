import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";
import AddButtons from "../components/AddButtons";
import { useNavigate } from "react-router-dom";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import SearchFilter from "../components/SearchFilter";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    fetch(`${BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const navigate = useNavigate();

  const goToAddProject = () => {
    navigate("/add-project");
  };

  const addProjectButtonData = {
    navigationFunction: goToAddProject,
    text: "Add Project",
  };

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const searchedProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredData = ([] =
    categoryFilter === "all"
      ? searchedProjects
      : searchedProjects.filter((item) => item.category === categoryFilter));

  return (
    <>
      <AddButtons
        navigationFunction={addProjectButtonData.navigationFunction}
        text={addProjectButtonData.text}
      />
      {/* Search component */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        handleFilterChange={handleFilterChange}
      />
      <div className="grid displaycards my-2 mx-10 ">
        <table className=" border-b  min-w-full  text-center text-md bg-white tablecard rounded-[10px] overflow-hidden shadow-lg mb-5">
          <thead className="border-b  font-medium text-black bg-gray-300 ">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Project status</th>
              <th className="px-6 py-4">Project Employees </th>
            </tr>
          </thead>
          <tbody>
            {searchedProjects.map((searchedProject) => (
              <tr
                key={searchedProject.id}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedProject.title}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {searchedProject.project_status}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <p onClick={() => openModal(searchedProject)}>
                    <button
                      style={{
                        backgroundColor: "lightblue",
                        padding: "6px",
                        borderRadius: "10px",
                      }}
                    >
                      View Full List
                    </button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <ProjectDetailsModal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      </section>
      ;
    </>
  );
}

export default Projects;
