import React from 'react';
const Landing = () => {
  return (
    <div className='flex relative flex-row flex-1'>
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
        <div className='w-2/3 text-xl p-10 xl:text-9xl lg:text-5xl md:text-3xl'>
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
  );
};

export default Landing;
