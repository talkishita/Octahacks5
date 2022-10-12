import React from 'react'

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col font-azonix justify-evenly md:justify-between items-center lg:flex-row  w-full h-full p-2 gap-2'
    >
      <div className='text-3xl lg:text-5xl xl:text-6xl font-normal text-transparent md:text-4xl lg:w-1/2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center lg:text-start'>
        About Us
      </div>
      <div className='text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] lg:w-1/2 p-4'>
        <p>
          OctaHacks is the annual flagship event of GDSC, Chitkara University,
          where innovators get an opportunity to merge their creative ideas with
          their technical skills to build something exemplary. Expect more than
          36 hours of inspiring panel discussions, working and collaborating on
          futuristic and empowering tech products, networking opportunities.
        </p>
      </div>
    </div>
  )
}

export default About