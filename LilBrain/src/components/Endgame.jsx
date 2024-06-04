import React from 'react'

function Endgame() {
    const audio = new Audio('/Voice/1.mp3')
    const audi = () => {
        audio.play()
    }
    return (
        <div>
            <button className='flex justify-center items-center font-bold p-3 rounded-md bg-red-800 text-white hover:bg-red-900 active:bg-red-500' onClick={audi}>End</button>
        </div>
    )
}

export default Endgame