import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="h-screen p-7">
    <div className="flex justify-center rounded flex-col mx-auto w-11/12 md:w-1/4 shadow-lg dark:bg-slate-600 gap-5">
      <h1 className="text-2xl text-blue-500 font-semibold mx-auto my-2">Log In</h1>

      <form className="p-5">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example134@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type your password."
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <Link to='/'>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mb-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        </Link>
        <p className=" opacity-60 text-xs mb-8 dark:text-slate-100">Don't you have Account? <Link to='/Register'><span className="text-green-500">Register Now</span></Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
