import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 z-10 left-0 w-full">
      <nav className="bg-slate-200 p-4">
        <div className="mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center">
          <div className="ml-5">
            <Link to="/">
              <h1 className="text-2xl lg:text-4xl font-bold">Job Portal</h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-16 mr-16">
            <Link
              to="/"
              className={`text-gray-500 hover:text-blue-700 text-2xl font-bold ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Statistics
            </Link>
            <Link
              to="/login"
              className={`text-gray-500 hover:text-blue-700 text-2xl font-bold ${
                location.pathname === "/applied" ? "active" : ""
              }`}
            >
              Applied Jobs
            </Link>
            <Link
              to="/blog"
              className={`text-gray-500 hover:text-blue-700 text-2xl font-bold ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
              Blog
            </Link>
          </div>

          <button className=" hidden md:flex justify-center items-center ml-auto bg-gray-800 text-white hover:bg-slate-200 hover:text-black p-4 rounded-lg">
            <h1 className="font-bold text-xl">
              <Link to="/signup" className="mr-2 hover:bg-green-600 hover:p-2 hover:rounded-lg hover:text-white">
                Sign Up
              </Link>
              /
              <Link to="/Login" className="ml-2 hover:bg-blue-800 hover:p-2 hover:rounded-lg hover:text-white">
                Log In
              </Link>
            </h1>
          </button>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-black focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        } bg-neutral-300 p-4`}
      >
        <Link
          to="/"
          className={`text-black font-bold block py-2 hover:underline ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/applied"
          className={`text-black font-bold block py-2 hover:underline ${
            location.pathname === "/applied" ? "active" : ""
          }`}
        >
          Applied Jobs
        </Link>
        <Link
          to="/blog"
          className={`text-black font-bold block py-2 hover:underline ${
            location.pathname === "/blog" ? "active" : ""
          }`}
        >
          Blog
        </Link>

        <button className=" flex justify-center items-center mt-3 bg-cyan-700 text-white hover:bg-slate-300 hover:text-black p-4 rounded-lg">
          <h1 className="font-bold text-xl">
            <Link to="/signup" className="mr-2 hover:bg-green-600 hover:p-2 hover:rounded-lg hover:text-white">
              Sign In
            </Link>
            /
            <Link to="/Login" className="ml-2 hover:bg-blue-800 hover:p-2 hover:rounded-lg hover:text-white">
              Log In
            </Link>
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
