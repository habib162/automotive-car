import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from './SocialLogin';

const Register = () => {


    const { registerUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;

        if (!regex.test(password)) {
            if (password.length < 6) {
                toast.error("Password is less than 6 characters");
            }
            else if (!/[A-Z]/.test(password)) {
                toast.error("Don't have capital letter");
            }
            else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
                toast.error("Don't have Special Character");
            }
        } else {
            if (email) {
                registerUser(email, password, name)

                    .then(result => {
                        const createdAt = result.user?.metadata?.creationTime;
                        const newUser = { email, password, name, createdAt }
                        fetch('https://automotive-server-side-ksc9idnd4.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast.success("user registered successfully")
                                }

                            })
                        navigate(location?.state ? location.state : "/");

                    })
                    .catch(error => { toast.error(error) });
            }

        }
    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen  shadow-lg">
                <div className=" bg-base-200 bg-blur w-[25%] p-8 rounded-md py-10">
                    <SocialLogin></SocialLogin>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 col-span-2 md:col-span-1">
                            <label htmlFor="name" className="text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                            />
                        </div>
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
                            Sign Up
                        </button>
                    </form>
                    <br />
                    <label className='label mx-auto'>
                        Already have an account ?<Link to="/login" className='label-text-alt link link-hover'> Login Here</Link>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Register;