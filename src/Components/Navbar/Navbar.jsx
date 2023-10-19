
import { useEffect, useState } from 'react';
import moon from '../../assets/icons/moon.png'
import sun from '../../assets/icons/sun.svg'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
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

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
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
                </ul>
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
    );
}

export default Navbar;