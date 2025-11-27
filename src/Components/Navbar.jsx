import React, { use, useState } from "react";
import userIcon from "../assets/user.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyLink from "./MyLink";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut().then((result) => setUser(result.user));
    navigate('/')
    toast('LogOut succesful');
  };
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between backdrop-blur-2xl rounded-2xl p-5">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-emerald-600 font-bold text-3xl typing-text ">
              🌿GreenNest
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-green-700 hover:text-green-900  justify-center items-center gap-5">
          <MyLink
            to={"/"}
            className="hover:scale-105 transition-all duration-300 "
          >
            Home
          </MyLink>
          <MyLink
            to={"/plants"}
            className="hover:scale-105 transition-all duration-300"
          >
            Plants
          </MyLink>
          {user && (
            <MyLink
              to={"/profile"}
              className="hover:scale-105 transition-all duration-300"
            >
              Profile
            </MyLink>
          )}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex justify-center items-center gap-3">
          <img
            className="max-w-7 rounded-[50%]"
            src={user ? user.photoURL : userIcon}
            alt=""
          />
          {user ? (
            <button
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          ) : (
            <div className="flex flex-row gap-3">
              <Link
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden px-5 pb-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3 text-green-700">
          <MyLink
            to={"/"}
            className="hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </MyLink>
          <MyLink
            to={"/plants"}
            className="hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Plants
          </MyLink>
          {user && (
            <MyLink
              to={"/profile"}
              className="hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </MyLink>
          )}

          <div className="flex items-center gap-3 mt-3">
            <img
              className="max-w-8 rounded-[50%]"
              src={user ? user.photoURL : userIcon}
              alt=""
            />
            {user ? (
              <button
                className="btn flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleLogOut}
              >
                LogOut
              </button>
            ) : (
              <div className="flex flex-1 gap-3">
                <Link
                  className="btn flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  to="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  className="btn flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  to="/register"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
       <ToastContainer position="top-center" />
    </div>
  );
};

export default Navbar;
