"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username"),
  password: Yup.string()
    .min(8, "Your password is too weak, please enter a stronger password")
    .required("Please enter your password"),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="relative">
              <Field
                type="text"
                name="username"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 pl-3 pr-10 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 pl-3 pr-10 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <div className="text-center text-sm text-gray-500">
            <Link href="/register" className="hover:underline">
              don't have an account?
            </Link>
            <span className="mx-2 underline">|</span>
            <Link href="/" className="hover:underline">
              Go Back to Home
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
