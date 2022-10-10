import React from 'react'
import Cards from './Cards'
import Text from './Text'
import "./style.css"

const Tracks = () => {
    
    return (
        <div className='tracksContainer flex max-w-[100vw] justify-evenly min-h-[100vh] text-white bg-slate-900'>
            <Text/>
            <Cards/>
        </div>
    )
}

export default Tracks
