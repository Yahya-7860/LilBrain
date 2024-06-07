import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
    return (
        <div className="bg-[url('BGImages/1.jpg')] w-full h-screen bg-cover bg-no-repeat">
            
            <h1 className='text-2xl sm:text-5xl flex justify-center items-center text-center sm:p-20 p-10 font-bold'>Learn with your favorite characters</h1>
            <div className='flex justify-center items-center sm:mt-[1rem] mt-[-1rem] '>
                <Link to='/choicepage'><button className="bg-gradient-to-r from-red-500 to-teal-800 hover:from-red-600 hover:to-teal-500 font-bold p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-900 ease-in-out active:from-teal-400 active:to-blue-500 text-1xl sm:text-2xl sm:p-6  text-white">
                    Let's play
                </button></Link>
            </div>

        </div>
    )
}

export default StartPage