import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaCartPlus, FaSearch } from "react-icons/fa";
const Nav = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/"> About</Link>
      </li>
      <li>
        <Link to="/"> Services</Link>
      </li>
      <li>
        <Link to="/"> Blog</Link>
      </li>
      <li>
        <Link to="/"> Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto my-5">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="h-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold text-black">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <span className="flex justify-between items-center w-14 text-black text-xl">
          <FaSearch></FaSearch>
          <FaCartPlus></FaCartPlus>
        </span>
        <Link
          to="/"
          className=" border-2 border-[#FF3811]  text-[#FF3811] py-2 px-5 rounded ml-6"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Nav;
