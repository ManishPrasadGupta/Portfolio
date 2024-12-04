import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className=" w-full z-100 h-50 backdrop-filter backdrop-blur-md border-t border-gray-200 bg-opacity-40 sticky top-0 bg-[#101010] ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEmu0PGZYRTpa9AQ6bvj74lEVU9FjtWL-9g&s"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-indigo-300 uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-indigo-300 uppercase">Follow me</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/ManishPrasadGupta"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/manish-prasad-gupta-053822258/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-indigo-900 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        ©2026
                        <a href="#" className="hover:underline">
                            manishprasadgupta
                        </a>
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link 
                        to="https://www.instagram.com/mnisprsd0201/" 
                        className="text-white hover:text-gray-900"
                        target="_blank"
                        rel="noreferrer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="18" 
                            height="18" 
                            fill="currentColor"
                        >
                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2 .3 2.5.5a5.2 5.2 0 0 1 1.9 1.2 5.2 5.2 0 0 1 1.2 1.9c.3.6.5 1.2.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2-.5 2.5a5.2 5.2 0 0 1-1.2 1.9 5.2 5.2 0 0 1-1.9 1.2c-.6.3-1.2.5-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2-.3-2.5-.5a5.2 5.2 0 0 1-1.9-1.2 5.2 5.2 0 0 1-1.2-1.9c-.3-.6-.5-1.2-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2 .5-2.5a5.2 5.2 0 0 1 1.2-1.9A5.2 5.2 0 0 1 4.6 2.8c.6-.3 1.2-.5 2.5-.5 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 0 5.8.1 4.8.3 4 1a7.5 7.5 0 0 0-2.2 2.2C.3 4.8.1 5.8 0 7c0 1.2 0 1.6 0 5s0 3.8.1 5c.1 1.2.3 2.2 1 3A7.5 7.5 0 0 0 4 23c.8.7 1.8.9 3 .9 1.2 0 1.6 0 5 0s3.8 0 5-.1c1.2-.1 2.2-.3 3-1a7.5 7.5 0 0 0 2.2-2.2c.7-.8.9-1.8 1-3 0-1.2.1-1.6.1-5s0-3.8-.1-5c-.1-1.2-.3-2.2-1-3A7.5 7.5 0 0 0 20 1c-.8-.7-1.8-.9-3-.9-1.2 0-1.6 0-5 0zm0 5.8a6.2 6.2 0 1 1 0 12.4A6.2 6.2 0 0 1 12 5.8zm0 10.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.4-11.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                        </svg>

                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link to="#" className="text-white hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-white hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://github.com/ManishPrasadGupta" className="text-white hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link 
                        to="https://www.linkedin.com/in/manish-prasad-gupta-053822258/" 
                        className="text-white hover:text-gray-900"
                        target="_blank"
                        rel="noreferrer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="18" 
                            height="18" 
                            fill="currentColor"
>
                            <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.62A2.03 2.03 0 1 1 5.31 3.56a2.03 2.03 0 0 1 0 4.06zM20.45 20.45h-3.5v-5.5c0-1.31-.47-2.21-1.64-2.21-.9 0-1.44.61-1.68 1.2-.09.21-.11.5-.11.79v5.72h-3.5V9h3.5v1.56h.05a3.83 3.83 0 0 1 3.45-1.9c2.52 0 4.41 1.64 4.41 5.16v6.63z"/>
                        </svg>

                            <span className="sr-only">Linkedin</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
