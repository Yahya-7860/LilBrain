import React from 'react'
import { Link } from 'react-router-dom'

function Endgame() {
    
    return (
        <div>
            <Link to={'/choicepage'} className='flex justify-center items-center font-bold p-3 rounded-md bg-red-800 text-white hover:bg-red-900 active:bg-red-500' >End</Link>
        </div>
    )
}

export default Endgame