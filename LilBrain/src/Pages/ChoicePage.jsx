import React from 'react'

function ChoicePage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <button
                    className="text-3xl mb-5 bg-gradient-to-r from-blue-500 to-teal-400 active:from-teal-400 active:to-blue-500 text-white font-bold p-5 rounded-lg shadow-lg transform active:scale-105 transition duration-300 ease-in-out"
                >
                    Play Colors
                </button>
                <button
                    className="text-3xl  bg-gradient-to-r from-purple-500 to-pink-400 active:from-pink-400 active:to-purple-500 text-white font-bold p-5 rounded-lg shadow-lg transform active:scale-105 transition duration-300 ease-in-out"
                >
                    Play Alphabets
                </button>
            </div>
        </div>
    )
}

export default ChoicePage