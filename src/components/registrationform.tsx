"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

interface User {
  userId: number;
  username: string;
  password: string;
  email: string;
  location: string;
  userType: "CUSTOMER" | "SELLER";
}

const RegistrationForm: React.FC = () => {
  const formik = useFormik<User>({
    initialValues: {
      userId: 0,
      username: "",
      password: "",
      email: "",
      location: "",
      userType: "CUSTOMER",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      location: Yup.string().required("Location is required"),
      userType: Yup.string()
        .oneOf(["CUSTOMER", "SELLER"], "Invalid user type")
        .required("User type is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.username}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.location && formik.errors.location ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.location}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="userType"
          className="block text-sm font-medium text-gray-700"
        >
          User Type
        </label>
        <select
          id="userType"
          name="userType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userType}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="CUSTOMER">Customer</option>
          <option value="SELLER">Seller</option>
        </select>
        {formik.touched.userType && formik.errors.userType ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.userType}
          </div>
        ) : null}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
      <div className="mt-4">
        <div className="text-center text-sm text-gray-500">
          <Link href="/login" className="hover:underline pointer">
            already have an account?
          </Link>
          <div className="my-2"></div>
          <Link href="/" className="hover:underline pointer">
            Go Back to Home
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
