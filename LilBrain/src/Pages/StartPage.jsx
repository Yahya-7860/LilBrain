import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
    return (
        <div className="bg-[url('BGImages/1.jpg')] w-full h-screen bg-cover bg-no-repeat">
            <h1 className='text-5xl flex justify-center items-center p-20 font-bold'>Learn with your favorite characters</h1>
            <div className='flex justify-center items-center'>
                <Link to='/choicepage'><button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 font-bold p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-900 ease-in-out active:from-teal-400 active:to-blue-500 text-2xl text-black">
                    Let's play
                </button></Link>
            </div>

        </div>
    )
}

export default StartPage