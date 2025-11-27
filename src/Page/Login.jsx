import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  // const [user , setUser] = useState({});
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { signInUser, user, setUser, signInWithGoogle, resetPass } =
    use(AuthContext);
//   console.log(user);
  const location = useLocation();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("Login succesful");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast("Login failed!!", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast("Login succesful");
      })
      .catch((error) => {
        toast.error("error found from google Sign In", error);
      });
  };

  const handleForgatePassword = () => {
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    resetPass(email)
      .then(() => {
        toast.success("Password reset email sent! 📧 Check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Failed to send reset email.");
      });
  };
  return (
    <div>
      {/* <div>
                <Navbar></Navbar>
            </div> */}
      <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm shadow-md rounded-xl border border-emerald-100">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 mb-1 text-start">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border  border-emerald-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-1 text-start">
                Password
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full px-3 py-2 border  border-emerald-300  rounded-lg focus:outline-none focus:ring-2 focus:border-emerald-500 focus:ring-emerald-300 "
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-10 text-gray-600 cursor-pointer"
              >
                {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>
            <button
              className="text-start hover:text-red-400 cursor-pointer"
              onClick={handleForgatePassword}
              type="button"
            >
              Forget Password?
            </button>
            {error && (
              <p className="text-red-500 text-xs">
                Invalid password or username !!
              </p>
            )}
            <button
              type="submit"
              className=" text-white py-2 rounded-lg transition-colors bg-lime-500 hover:bg-lime-600"
            >
              Login
            </button>
            <div className="flex items-center justify-center gap-2 my-0.2">
              <div className="h-px w-full bg-green-200"></div>
              <div className="text-sm text-green-400">or</div>
              <div className="h-px w-full bg-green-200"></div>
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] mt-3 w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              href="/signup"
              className="text-lime-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
