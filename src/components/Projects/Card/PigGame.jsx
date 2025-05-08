import React from 'react'

function PigGame() {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-col h-full w-full bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all">
                <h1 className="flex justify-center text-2xl font-bold text-white mt-6 mb-2 bg-blue-700 rounded-t-xl py-3">
                    Pig Game
                </h1>
                <a
                    href="https://pig-game-sigma-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex-1"
                >
                    <img
                        className="w-full h-48 object-cover rounded-lg mx-auto p-4"
                        src="https://res.cloudinary.com/mnisprsd/image/upload/v1733384676/Screenshot_20241205_121146_gvt330.png"
                        alt="Pig Game Screenshot"
                    />
                </a>
                <div className="flex-1 px-6 pb-5 flex flex-col justify-between">
                    <a
                        href="https://pig-game-sigma-three.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h5 className="text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                            A fun and interactive dice-based game built with HTML, CSS, and JavaScript. The Pig Game is a two-player game where players take turns rolling a dice, accumulating points, and strategizing to win by reaching the target score first.
                        </h5>
                    </a>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://pig-game-sigma-three.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/ManishPrasadGupta/Pig-Game.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center shadow-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        >
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PigGame