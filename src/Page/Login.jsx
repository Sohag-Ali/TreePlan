import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const [error,setError] = useState("");
     const navigate = useNavigate();
   const {signInUser, user, setUser} = use(AuthContext);
    console.log(user);
    const location = useLocation();
    // console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            setUser(result.user);
             navigate(`${location.state?location.state : '/'}`)
              toast('Login succesful');

        })
        .catch(error => {
            const errorCode = error.code;
            setError(errorCode);
            toast('Login failed!!', error);
        })
    }
    return (
         <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin}  className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Email</label>
                            <input
                            name='email'
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 text-start">Password</label>
                            <input
                            name='password'
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <p className='text-start'>Forget Password?</p>
                        {error && <p className='text-red-500 text-xs'>Invalid password or username !!</p>}
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <Link to='/register' href="/signup" className="text-indigo-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;