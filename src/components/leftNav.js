import React from 'react'

const LeftNavbar = () => {
    return (
        <div className='hidden flex-col justify-center items-center relative top-[.72rem] py-6 ml-3 lg:space-y-16 xl:space-y-20 h-11/12 w-fit text-xl text-white lg:flex' >
            <div className='rotate-[270deg] text-center '> Overview </div>
            <div className='rotate-[270deg] text-center'> Tracks </div>
            <div className='rotate-[270deg] text-center'> Prizes </div>
            <div className='rotate-[270deg] text-center'> Sponsors </div>
            <div className='rotate-[270deg] text-center'> Judges </div>
            <div className='rotate-[270deg] text-center'> Mentor </div>
        </div>
    )
}

export default LeftNavbar