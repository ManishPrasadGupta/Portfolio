import React from 'react'

function PigGame() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-full">
          <div className="flex space-x-4">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://user-images.githubusercontent.com/63254870/101832427-6593ea80-3b05-11eb-83ab-0b903ef23ebc.png" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        About My Project...
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View
                    </a>
                </div>
            </div>
        </div>
          </div>
        </div>
      )
}

export default PigGame
