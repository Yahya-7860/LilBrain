import React from 'react'

function StartPage() {
    return (
        <div>
            <h1 className='text-5xl flex justify-center items-center m-20'>Learn with your favorite characters</h1>
            <div className='flex justify-center items-center'>
                <button className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-900 ease-in-out active:from-teal-400 active:to-blue-500">
                    Let's play
                </button>
            </div>

        </div>
    )
}

export default StartPage