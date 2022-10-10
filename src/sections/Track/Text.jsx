import React from 'react'

const Text = () => {
    return (
        <div className='textContainer  z-50 flex flex-col gap-10 p-24 mt-28'>
            {/* <p className='text'>Building a gaming ecosystem that's truly</p> */}
            <p className='title leading-10 font-semibold text-4xl'>TRACKS</p>
            {/* <p className='title'>SUSTAINABLE</p> */}
            <div className='safe flex gap-5'>
                <div className='dash h-1 w-7 m-4 bottom-0 '></div>
                <div >
                    {/* <p className='p'>Safeguard</p> */}
                    {/* <p className='textpara'></p> */}
                        <br/>
                <p className='textpara text-sm'>As the name suggests, Octahacks comprises 8 themes or impact areas to help spark your ideas. Remember that you're welcome to build the prototype with the technologies of
                        your choice, so feel free to use any technology and think outside the box too!</p>
                </div>
            </div>
            {/* <a href='!#' className='learn'>
                <span className='txt'>Learn More</span>
                <span className='arrow'>
                    <a href='!#'> &#x2192; </a>
                </span>
            </a> */}
        </div>
    )
}

export default Text
