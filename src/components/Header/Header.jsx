import React from 'react'
import { Link, NavLink} from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className="w-sm z-50 h-20 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-opacity-40 sticky top-0 bg-[#101010]  ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                    <Link to="/" className="flex items-center">
                    
                        <img id='logo'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEmu0PGZYRTpa9AQ6bvj74lEVU9FjtWL-9g&s"
                            className="mr-3 h-20"
                            alt="Logo"
                        />
                    </Link>

                    {/* home,contact,about, and github button division */}
                    <div 
                    className="flex flex-row justify-center lg:border-b-2 w-full lg:flex lg:w-auto lg:order-1 lg:flex-row lg:space-x-8 lg:mt-0"
                    >
                        <div>
                            <NavLink
                            to= "/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 
                            ${isActive ? "text-orange-700" : "text-white"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                                Home
                            </NavLink>
                        </div>
                        
                        <div>        
                            <NavLink
                            to="/about"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 
                                    ${isActive ? "text-orange-700" : "text-white"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </div>    
                        <div>
                            <NavLink
                            to="/Contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 
                            ${isActive ? "text-orange-700" : "text-white"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                            >
                                Contact 
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                            to="/projects"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 
                            ${isActive ? "text-orange-700" : "text-white"} 
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                            >
                                Projects
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}