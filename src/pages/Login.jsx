// import React, { useState } from "react";
import { BASE_URL } from "../components/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LOGO from "../logo/LOGO.jpg";

function Login() {
  {
    /* Navigating to register page on clicking Register button */
  }
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        console.log(data);
        //store access and refresh tokens in local storage
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        if (!res.ok) {
          throw new Error("Invalid email/password");
        }

        if (data.statusCode == !200) {
          toast.error(data.message);
        } else if (data.status == "success") {
          toast.success(data.message);
          //upon a successful login, the user is navigated to the contacts page
          navigate("/home");
          // if login is successful, resetform
          resetForm();
          //persisting the user once logged in
          // redirecting the user to contacts page
        }
      } catch (error) {
        console.log("Unable to login", error.message);
        toast.error("Login failed: " + error.message);
      }
    },
  });
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className=" h-[200px] w-auto  logo1"
          src={LOGO}
          alt="Your Company"
        />
        <h2 className="-mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={formik.handleSubmit}
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#13325A] hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white hover:bg-[#EEAD49] hover: border border-[#EEAD49] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
