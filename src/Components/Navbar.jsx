import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-6 shadow-lg">
      {/* logo */}
      <div className="flex gap-3">
        <img className="w-[50px]" src={logo} alt="logo" />
        <div>
          <h3 className="text-primary text-xl">Cheers</h3>
          <p>
            <small>Here's to Celebrating You!</small>
          </p>
        </div>
      </div>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " py-1 px-2 bg-secondary rounded-lg"
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
                ? "py-1 px-2 bg-secondary rounded-lg"
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
                ? "py-1 px-2 bg-secondary rounded-lg"
                : ""
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="py-2 px-3 bg-primary rounded-lg">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
