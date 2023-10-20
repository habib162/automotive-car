
import SocialLogin from "./SocialLogin";
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
 const {signIn} = useContext(AuthContext);
 const location = useLocation();
 const navigate = useNavigate();
const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
        signIn(email,password) 
        .then(result => {
            navigate (location?.state ? location.state : "/");
            toast("Logged in successfully");
        })
        .catch(error => {
         toast.error("Email or Password invalid")})
    }

}
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-md">
                <div className="bg-opacity-40 bg-white bg-blur w-[25%] p-8 rounded-md py-10">
                <SocialLogin></SocialLogin>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 col-span-2 md:col-span-1">
                            <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                            />
                        </div>
                        <div className="mb-6 col-span-2 md:col-span-1">
                            <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                        >
                           Sign In
                        </button>
                    </form>
                    <br/>
                    <label className='label mx-auto'>
                        Don't have an account ?<Link to="/register" className='label-text-alt link link-hover'> Register Here</Link>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Login;