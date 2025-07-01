import React from 'react';
import logo from "../assets/Home/Logo.png";
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="bg-[#004AAD] text-white">
      <div className="navbar max-w-7xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a>Event</a></li>
              <li>
                <a>Add Event</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>My Event</a></li>
            </ul>
          </div>

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2 ml-2">
            <img className="rounded-full h-10 w-10 object-cover" src={logo} alt="Logo" />
            <span className="btn btn-ghost text-2xl normal-case">EventFlow</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/event">Event</Link></li>
            <li>
              <details>
                <summary><Link to="addevent">Add Event</Link></summary>
                <ul className="p-2 bg-base-100 text-black rounded-box shadow">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>My Event</a></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
