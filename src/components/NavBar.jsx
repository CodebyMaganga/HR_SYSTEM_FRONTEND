import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
// import { FaRegBell, FaMoon, FaSun } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import LOGO from "../logo/LOGO.jpg";

const navigation = [
  { name: "Dashboard", href: "/home" },
  { name: "Employees", href: "/employees" },
  { name: "Projects", href: "/projects" },
  { name: "Job Applicants", href: "/job-applicants" },
  { name: "Employees on Leave", href: "/leaves" },
  { name: "Payroll", href: "/payroll" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  {
    /*Dark mode logic */
  }
  const [darkMode, setDarkMode] = useState(false);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.clear();
      navigate("/");
      toast.success("Logged out");
    }
  };

  return (
    <Disclosure
      as="nav"
      className={`${darkMode && "dark"} bg-[#13325A] dark:bg-slate-300 `}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiMiniXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/home" activeclassname="active">
                    <img
                      className="mx-auto logo w-auto "
                      src={LOGO}
                      alt="Your Company"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        activeclassname="font-bold"
                        className={classNames(
                          "block rounded-md px-3 py-2 text-sm font-medium",
                          location.pathname === item.href
                            ? "text-white bg-gray-900 dark:bg-slate-200"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*Dark Mode button */}
                {/* <button
                  onClick={toogleDarkMode}
                  className="mr-4 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? (
                    <FaSun className="h-6 4-6" />
                  ) : (
                    <FaMoon className="h-6 4-6" />
                  )}
                </button> */}

                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <FaRegBell className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://cdn.wallpapersafari.com/82/82/5PjKtk.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Admin
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item onClick={handleLogOut}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Log out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white dark:bg-slate-200"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default NavBar;
