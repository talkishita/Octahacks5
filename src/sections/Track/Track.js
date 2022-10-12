import React from 'react'
import Cards from './Cards'
import Text from './Text'
import "./style.css"

const Tracks = () => {
    return (
        <div className='tracksContainer min-h-screen bg-slate-900 flex max-w-[100vw] justify-evenly text-white'>
            <Text/>
            <Cards/>
        </div>
    )
}

export default Tracks
