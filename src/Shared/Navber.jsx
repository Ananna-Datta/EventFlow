import React, { useState, useContext, useRef, useEffect } from 'react';
import logo from '../assets/Home/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <div className="bg-[#004AAD] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-[#004AAD]"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/addevent">Add Event</Link></li>
              <li><Link to="/myevents">My Event</Link></li>
              {!user && <li><Link to="/login">Login</Link></li>}
            </ul>
          </div>

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img className="rounded-full h-10 w-10 object-cover" src={logo} alt="EventFlow Logo" />
            <span className="text-2xl font-semibold">EventFlow</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/addevent">Add Event</Link></li>
            <li><Link to="/myevents">My Event</Link></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end" ref={dropdownRef}>
          {!user ? (
            <Link to="/login" className="btn btn-sm bg-white text-[#004AAD]">Login</Link>
          ) : (
            <div className="relative">
              <div
                className="btn btn-ghost btn-circle avatar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "https://i.ibb.co/5xvYf4T/user.png"}
                    alt="Profile"
                  />
                </div>
              </div>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-3 p-2 shadow menu menu-sm bg-white text-[#004AAD] rounded-box w-52 z-50">
                  <li>
                    <span className="font-semibold cursor-default">
                      {user.displayName || "User"}
                    </span>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
