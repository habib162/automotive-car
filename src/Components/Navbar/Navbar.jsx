
import { useEffect, useState, useContext } from 'react';
import moon from '../../assets/icons/moon.png'
import sun from '../../assets/icons/sun.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { RxAvatar } from "react-icons/rx";
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logout, currentUser, loading } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
        })
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div>
            {
                loading ? <div className='text-center text-3xl'>
                    <span className="loading loading-spinner text-success"></span>
                </div> :
                    <div className="navbar bg-base-100 py-4 shadow-lg px-4 sm:px-8">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                            }
                                        >
                                            Home
                                        </NavLink></li>
                                    <li>
                                        <NavLink
                                            to="/add-products"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                            }
                                        >
                                            Add Products
                                        </NavLink></li>
                                    <li>
                                        <NavLink
                                            to="/add-brand"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                            }
                                        >
                                            Add Brand
                                        </NavLink></li>

                                        <li>
                                    <NavLink
                                        to="/my-cart"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                        }
                                    >
                                       My Cart
                                    </NavLink></li>
                                </ul>
                            </div>
                            <div className="w-10 rounded-full flex gap-2">
                                <img src="https://i.ibb.co/KLK8xQN/Carlogo.png" />
                                <a className="normal-case text-xl">Automotive</a>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                        }
                                    >
                                        Home
                                    </NavLink></li>
                                <li>
                                    <NavLink
                                        to="/add-products"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                        }
                                    >
                                        Add Products
                                    </NavLink></li>
                                <li>
                                    <NavLink
                                        to="/add-brand"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                        }
                                    >
                                        Add Brand
                                    </NavLink></li>
                                    <li>
                                    <NavLink
                                        to="/my-cart"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                                        }
                                    >
                                       My Cart
                                    </NavLink></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                 {
                    currentUser?.email ? 
                    <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {
                            currentUser.photoURL ? <img src={currentUser.photoURL} alt={currentUser.displayName} /> : <RxAvatar className="w-full h-full"></RxAvatar>
                        }
                            
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {currentUser.displayName}
                            </a>
                        </li>
                        <li><a>{currentUser.email}</a></li>
                        <li onClick={handleLogOut}><a>Logout</a></li>
                    </ul>
                    </div>
                     :      <div>
                     <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline font-semibold" : ""
                            }
                        >
                            Login
                        </NavLink>
                     </div>
                 }
                </div>
                        <div className="navbar-end">
                            <button className="btn btn-square btn-ghost">
                                <label className="swap swap-rotate w-12 h-12">
                                    <input
                                        type="checkbox"
                                        onChange={handleToggle}
                                        checked={theme === "light" ? false : true}
                                    />
                                    <img src={sun} alt="light" className="w-8 h-8 swap-on" />
                                    <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
                                </label>
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Navbar;