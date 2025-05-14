import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="w-sm z-50 h-20 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-opacity-40 sticky top-0 bg-[#101010]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center">
            <img
              id="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEmu0PGZYRTpa9AQ6bvj74lEVU9FjtWL-9g&s"
              className="mr-3 h-20"
              alt="Logo"
            />
          </Link>

          {/* Dropdown Button */}
          <button
            className="text-white lg:hidden focus:outline-none"
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? (
              // SVG for Cross Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // SVG for Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-20 left-0 w-full bg-[#101010] lg:static lg:block lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
              <NavLink
                to="/"
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/Contact"
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/projects"
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Projects
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}