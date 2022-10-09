import React from 'react';
import ApplyButton from './ApplyButton';

const Landing = () => {
  return (
    // <div className='font-azonix bg-[url(https://im4.ezgif.com/tmp/ezgif-4-5b32c07892.gif)] w-full h-full min-h-screen bg-cover bg-center text-gray-200'>
    <div className='font-azonix bg-[url(https://im4.ezgif.com/tmp/ezgif-4-99b1d043cb.gif)] w-full h-full min-h-screen bg-cover bg-center text-gray-200'>
      <div className='fixed w-full h-fit z-20 bg-gradient-to-b from-black'>
        <nav className='flex flex-row justify-between mx-10 mt-2 items-center'>
          <div className='flex justify-evenly items-center'>
            <div className='w-1/6'>
              <img
                src='https://octahacks4.tech/assets/media/octahackslogo_svg.svg'
                alt=''
                srcset=''
              />
            </div>
            <div className='mx-5 text-lg'>About Us</div>
            <div className='mx-5 text-lg'>Tracks</div>
            <div className='mx-5 text-lg'>Prices</div>
            <div className='mx-5 text-lg'>Our Sponsers</div>
          </div>
          <ApplyButton />
        </nav>
      </div>

      <div className='flex relative flex-row flex-1 '>
        <div className='w-1/6 flex flex-col justify-center min-h-screen'>
          <div className='rotate-90 text-7xl w-full'>NAVBAR HERE</div>
        </div>
        <div
          className='w-full h-full min-h-screen flex flex-col justify-center backdrop-blur-lg bg-black/30
      '
        >
          <div className='w-1/5'>
            <img
              src='https://octahacks4.tech/assets/media/GDSClogo.png'
              alt='gdsc logo'
            />
          </div>
          <div className='w-2/3 text-9xl p-10'>
            Octahacks <br /> Five
          </div>
          <div className='w-1/12 m-10 border-white border-2'></div>

          <button className='p-5 group w-1/5 flex items-center justify-around text-xl'>
            Apply With Devfolio
            <span className='flex group-hover:-inset-x-2 items-center relative text-2xl transition-all duration-150'>
              <span className='z-10'> &rarr;</span>
              <div className='w-6 h-6 absolute border border-blue-400 left-3 group-hover:bg-blue-500  transition-all ease-in duration-150'></div>
            </span>
          </button>
        </div>
        <div className='flex flex-col justify-center pr-10'>
          <img
            alt='socials'
            className='p-2'
            src='https://img.icons8.com/ios-glyphs/40/4299E1/instagram-new.png'
          />
          <img
            alt='socials'
            className='p-2'
            src='https://img.icons8.com/ios-glyphs/40/4299E1/twitter--v1.png'
          />
          <img
            alt='socials'
            className='p-2'
            src='https://img.icons8.com/ios-glyphs/40/4299E1/linkedin-circled.png'
          />
          <img
            alt='socials'
            className='p-2'
            src='https://img.icons8.com/ios-glyphs/40/4299E1/github.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
