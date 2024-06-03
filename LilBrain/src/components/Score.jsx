import React from 'react';
import { FaStar } from "react-icons/fa";


const Score = ({ score }) => {
    return (
        <div className='w-full p-5 bg-transparent flex justify-between items-center '>
            <h3 className='flex justify-center items-center text-2xl font-bold p-3 rounded-md bg-blue-800 text-white'>Stars : 0{score} <FaStar className='ml-3 text-yellow-300 ' /></h3>


            <button className='flex justify-center items-center text-2xl font-bold p-3 rounded-md bg-red-800 text-white hover:bg-red-900 active:bg-red-500'>End Game</button>

        </div>
    );
};

export default Score;
