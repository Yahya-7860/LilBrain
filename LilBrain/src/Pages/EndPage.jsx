import React from 'react';
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function EndPage() {
    const star = useSelector((state) => state.score.star)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg h-[27rem] w-96">
                <h1 className="text-5xl font-bold text-center text-gray-800">Your Score</h1>
                <div className='flex justify-center items-center mt-14'>
                    <h1 className='text-6xl font-semibold '>
                        {star}
                    </h1>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Stars</h1>
                        <div className='flex justify-center items-center mt-5 gap-5'>
                            <FaStar className='text-yellow-400 text-4xl' />
                            <FaStar className='text-yellow-400 text-4xl' />
                            <FaStar className='text-yellow-400 text-4xl' />
                            <FaStar className='text-yellow-400 text-4xl' />
                        </div>
                        <Link to={'/choicepage'} className='mt-8 p-2 rounded bg-red-600 font-bold text-white hover:bg-red-700 active:bg-red-800'>Back</Link>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default EndPage;
