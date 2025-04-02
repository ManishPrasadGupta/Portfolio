import React from 'react'

function Auth() {
    return (
        <div 
        className="flex flex-col items-center p-6 bg-gray-400 rounded-lg shadow-md w-full"
        >
          <div className="flex space-x-4">
          <div 
          className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h1 className="flex justify-center text-2xl font-bold text-white mt-5">Authentication System</h1>
            <a href="https://mern-auth-g00f.onrender.com/">
                <img className="p-8 rounded-t-lg" src="https://res.cloudinary.com/mnisprsd/image/upload/v1743592631/auth_mudtzn.png" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="https://mern-auth-g00f.onrender.com/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    This project is a full-stack authentication system built using React for the frontend and Express for the backend. It incorporates CORS and JWT tokens for secure authentication.
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    <a
                        href="https://mern-auth-g00f.onrender.com/"
                        target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Live
                    </a>
                    <a
                        href="https://github.com/ManishPrasadGupta/mern-auth.git"
                        target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </div>
        </div>
        </div>
      )
}

export default Auth;
