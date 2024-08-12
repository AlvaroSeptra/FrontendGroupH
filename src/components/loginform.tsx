"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username"),
  password: Yup.string()
    .min(8, "Your password is too weak, please enter a stronger password")
    .required("Please enter your password"),
});

const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <Field
              type="text"
              name="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <div className="text-center text-sm text-gray-500">
            <Link href="/register" className="hover:underline pointer">
              don't have an account?
            </Link>
            <span className="mx-2 underline pointer hover:text-blue-500">
              |
            </span>
            <Link href="/" className="hover:underline pointer">
              Go Back to Home
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
