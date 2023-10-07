/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex-row-reverse lg:flex-row px-6 lg:px-0 flex justify-between items-center max-w-7xl mx-auto py-6 shadow-lg">
      {/* logo */}
      <div className="flex gap-3 flex-row-reverse lg:flex-row">
        <img className="w-[50px]" src={logo} alt="logo" />
        <div>
          <h3 className="text-primary text-xl text-right lg:text-left">
            Cheers
          </h3>
          <p>
            <small>Here's to Celebrating You!</small>
          </p>
        </div>
      </div>
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className=" text-3xl">
          <IoMenu />
        </label>
        <ul
          tabIndex={0}
          className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-36"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-between items-center w-[60%]">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-1 px-2 bg-primary text-white rounded-lg"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="py-2 px-3 bg-primary text-white rounded-lg">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
