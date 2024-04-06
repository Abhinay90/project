import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createUserAsync } from '../authSlice';
import { Link } from 'react-router-dom';
// import styles from './Counter.module.css';

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      Product Logo
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#"
      method="POST"
      onSubmit={handleSubmit((data) => {
        dispatch(
         createUserAsync(data)
        );

        console.log(data);
      })}
      noValidate
      
      
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "Email not valid",
                },
              })}
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
             {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
          </div>
          <div className="mt-2">
            <input
              id="name"
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
             {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
          </div>
        </div>


        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
              Your Department
            </label>
          </div>
          <div className="mt-2">
            <select
              id="role"
              {...register("role", {
                required: "Role is required",
              })}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Choose Department</option>
              <option value="developer">Developer</option>
              <option value="manegment">Manegment</option>
              <option value="seles">Seles</option>
            </select>
            {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
          </div>
        </div>


        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Have an account?{' '}
        <Link
                to="/signin"
                className="font-semibold leading-3 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
      </p>
    </div>
  </div>
  );
}
