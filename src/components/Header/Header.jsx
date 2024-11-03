import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-indigo-500 border-gray-900 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEmu0PGZYRTpa9AQ6bvj74lEVU9FjtWL-9g&s"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    

                    {/* home,contact,about, and github button division */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to= "/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}