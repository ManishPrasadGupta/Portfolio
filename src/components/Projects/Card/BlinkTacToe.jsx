import React from 'react'

function BlinkTacToe() {
    return (
        <div className="flex flex-col h-full w-full">
            <div 
                className="flex flex-col h-full w-full bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all"
            >
                <h1 className="flex justify-center text-2xl font-bold text-white mt-6 mb-2 bg-blue-700 rounded-t-xl py-3">
                    Blink Tac Toe
                </h1>
                <a href="https://blink-tac-toe.manish.social" target="_blank" rel="noopener noreferrer" className="block flex-1">
                    <img 
                        className="w-full h-48 object-cover rounded-lg mx-auto p-4"
                        src="https://res.cloudinary.com/mnisprsd/image/upload/v1749656360/blink-tac-toe_venamc.png" 
                        alt="Blinktac Toe image" 
                    />
                </a>
                <div className="flex-1 px-6 pb-5 flex flex-col justify-between">
                    <a href="https://ananymous-text-u812.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <h5 className="text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                            A playful, animated Emoji FIFO Tic Tac A playful, animated Emoji FIFO Tic Tac Toe game with custom emojis and smooth UI, built in React.
                        </h5>
                    </a>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://blink-tac-toe.manish.social"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/ManishPrasadGupta/Blink-Tac-Toe.git"
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

export default BlinkTacToe;