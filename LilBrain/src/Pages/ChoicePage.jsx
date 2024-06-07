import React from 'react'
import { Link } from 'react-router-dom'

function ChoicePage() {
    return (
        <div className="bg-[url('BGImages/2.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat ">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4 ">
                <Link to={'/colorpage'}
                    className="text-1xl sm:text-3xl mb-5 bg-gradient-to-r from-blue-500 to-teal-400 active:from-teal-400 active:to-blue-500 text-white font-bold p-3 sm:p-5 rounded-lg shadow-lg transform active:scale-105 transition duration-300 ease-in-out"
                >
                    Play Colors
                </Link>
                <Link to={'/alphapage'}
                    className="text-1xl sm:text-3xl  bg-gradient-to-r from-purple-500 to-pink-400 active:from-pink-400 active:to-purple-500 text-white font-bold p-3 sm:p-5 rounded-lg shadow-lg transform active:scale-105 transition duration-300 ease-in-out"
                >
                    Play Alphabets
                </Link>
            </div>
        </div>
    )
}

export default ChoicePage