import React from 'react'

function FrontendDesign() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-400 rounded-lg shadow-md w-full">
          <div className="flex space-x-4">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-2xl flex justify-center font-bold text-white mt-5">Frontend Design</h1>
            <a href="https://github.com/ManishPrasadGupta/Frontend-Design.git">
                <img className="p-8 rounded-t-lg" src="https://res.cloudinary.com/mnisprsd/image/upload/v1736080911/Screenshot_2025-01-05_180930_prqv3w.png" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="https://github.com/ManishPrasadGupta/Frontend-Design.git">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    This is a Frontend Design web application website with a sleek and modern frontend using Aeternity UI and the Next.js framework, ensuring responsive design and seamless functionality.
                    </h5>
                </a>
            <div className="flex items-center justify-between">
                <a
                    href="https://github.com/ManishPrasadGupta/Frontend-Design.git"
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

export default FrontendDesign;
