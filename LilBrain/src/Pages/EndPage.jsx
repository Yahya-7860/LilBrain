import React from 'react';
import { FaStar } from "react-icons/fa";


function EndPage({ score }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg h-96 w-96">
                <h1 className="text-5xl font-bold text-center text-gray-800">Your Score</h1>
                <div className='flex justify-center items-center mt-14'>
                    <h1 className='text-6xl font-semibold '>
                        0
                    </h1>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Stars</h1>
                        <div className='flex justify-center items-center mt-5 gap-5'>
                            <FaStar className='text-yellow-400 text-4xl' />
                            <FaStar className='text-yellow-400 text-4xl' />
                            <FaStar className='text-yellow-400 text-4xl' />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default EndPage;
