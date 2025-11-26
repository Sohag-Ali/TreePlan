import React, { use } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import MyLink from "./MyLink";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut().then((result) => setUser(result.user));
  };
  return (
    <div
      className="bg-gradient-to-r from-green-50 to-green-100
"
    >
      <nav className="flex justify-between items-center backdrop-blur-2xl rounded-2xl p-5">
        <div>
          <Link to="/">
            <h1 className="text-emerald-600 font-bold text-3xl typing-text">
              🌿GreenNest
            </h1>
          </Link>
        </div>
        <div className="text-green-700 hover:text-green-900  flex justify-center items-center gap-5">
          <MyLink
            to={"/"}
            className="hover:scale-105 transition-all duration-300 "
          >
            Home
          </MyLink>
          <MyLink
            to={"/plants"}
            className="hover:scale-105 transition-all duration-300
            "
          >
            Plants
          </MyLink>

          {/* <NavLink className='font-bold hover:bg-secondary hover:text-white hover:underline
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg ' to='/'>Home</NavLink> */}
          {/* <NavLink className='font-bold hover:bg-secondary hover:text-white 
                    hover:underline
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/plants'> Plants</NavLink> */}
          {user && (
            <>
              <MyLink
                to={"/profile"}
                className="hover:scale-105 transition-all duration-300"
              >
                Profile
              </MyLink>
              {/* <NavLink className='font-bold 
                      hover:underline
                      hover:bg-secondary hover:text-white 
                hover:scale-105 transition-all duration-300 px-3 py-1 rounded-2xl hover:shadow-lg' to='/profile'>Profile</NavLink> */}
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-3">
          <img
            className="max-w-7 rounded-[50%]"
            src={`${user ? user.photoURL : userIcon}`}
            alt=""
          />
          {user ? (
            <button
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white
"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          ) : (
            <div className="flex flex-row gap-3">
              <Link className="btn  bg-emerald-600 hover:bg-emerald-700 text-white" to="/login">
                Login
              </Link>
              <Link className="btn  bg-emerald-600 hover:bg-emerald-700 text-white" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
