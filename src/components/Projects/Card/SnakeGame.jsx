import React from 'react'

function PigGame() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-400 rounded-lg shadow-md w-full">
          <div className="flex space-x-4">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://snake-game-brown-eight.vercel.app/">
                <img className="p-8 rounded-t-lg" src="https://res.cloudinary.com/mnisprsd/image/upload/v1733498817/Screenshot_20241206_205242_k9nerh.png" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="https://snake-game-brown-eight.vercel.app/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    A classic Snake game built with HTML, CSS, and JavaScript, featuring a scoreboard, username input, and a toggle music on/off button for an enhanced gaming experience.
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    
                    <a
                        href="https://snake-game-brown-eight.vercel.app/"
                        target="_blank"
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
