import React from 'react';
import { FaStar } from "react-icons/fa";


const Score = ({ score }) => {
    return (
        <div>
            <h3 className='flex justify-center items-center text-2xl font-bold p-3 rounded-md bg-blue-800 text-white'>Stars : {score} <FaStar className='ml-3 text-yellow-300 ' /></h3>

        </div>
    );
};

export default Score;
