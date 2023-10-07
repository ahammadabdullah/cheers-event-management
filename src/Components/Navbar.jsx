/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import logo from "../assets/logo.png";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out Successfully"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex-row-reverse lg:flex-row px-6 lg:px-0 flex justify-between items-center max-w-7xl mx-auto py-6 ">
      {/* logo */}
      <div className="flex gap-3 items-center flex-row-reverse lg:flex-row">
        <img className="w-[50px]" src={logo} alt="logo" />
        <div>
          <h3 className="text-primary text-3xl md:text-5xl text-right lg:text-left font-bold">
            Cheers
          </h3>
        </div>
      </div>
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className=" text-3xl">
          {user?.photoURL ? (
            <img
              className="rounded-full w-[30px]"
              src={user?.photoURL}
              alt="user avatar"
            />
          ) : (
            <IoMenu />
          )}
        </label>
        <ul
          tabIndex={0}
          className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-36"
        >
          {user && <li className="py-1 px-2">{user?.displayName}</li>}
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
            {user ? (
              <button onClick={handleLogout}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "py-1 px-2 bg-primary text-white rounded-lg"
                      : ""
                  }
                >
                  Log Out
                </NavLink>
              </button>
            ) : (
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
            )}
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
        <div className="flex items-center">
          {user?.photoURL && (
            <img
              className="rounded-full w-[30px]"
              src={user?.photoURL}
              alt="user avatar"
            />
          )}
          {user?.displayName && (
            <p className="py-1 px-2">{user?.displayName}</p>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="py-2 px-3 bg-primary text-white rounded-lg"
            >
              <Link>Logout</Link>
            </button>
          ) : (
            <button className="py-2 px-3 bg-primary text-white rounded-lg">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
