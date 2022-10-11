import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Judges from './sections/Judges';

import Landing from './sections/Landing/Landing';
import Mentors from './sections/Mentors';
import Prizes from './sections/Prizes';
import Tracks from './sections/Track/Track';
function App() {
  return (
    // <div className='debug-screens font-azonix bg-slate-900 w-full h-full min-h-screen bg-cover bg-center text-gray-100'>
    <div className='font-azonix debug-screens bg-[url(https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/backVideo2.gif?raw=true)] bg-no-repeat bg-contain w-full h-full min-h-screen text-gray-100'>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <div className='fixed w-full h-fit z-20 bg-gradient-to-b from-black'>
        <nav className='flex flex-row justify-between mx-10 mt-2 items-center'>
          <div className='flex w-4/6 items-center'>
            <div className='w-1/6 mx-10'>
              <img
                src='https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true'
                alt=''
                srcset=''
              />
            </div>
            <div className='mx-5 text-lg'>Home</div>
            <div className='mx-5 text-lg'>About</div>
            <div className='mx-5 text-lg'>Contact</div>
          </div>
          <div className='w-1/5'>
            <img
              src='https://octahacks4.tech/assets/media/GDSClogo.png'
              alt='gdsc logo'
            />
          </div>
        </nav>
      </div>
      <div className='fixed w-[15%] h-full min-h-screen z-[18] bg-gradient-to-r from-black'>
        <div className='flex flex-col items-center justify-evenly h-full pt-28'>
          <div className='-rotate-90'>Home</div>
          <div className='-rotate-90'>Tracks</div>
          <div className='-rotate-90'>Prizes</div>
          <div className='-rotate-90'>Mentors</div>
          <div className='-rotate-90'>Judges</div>
        </div>
      </div>
      <div className='h-full xl:ml-60 lg:ml-48 md:ml-40 sm:ml-32 ml-20'>
        <Landing />
        <Tracks />
        <Prizes />
        <Judges />
        <Mentors />
      </div>
    </div>
  );
}

export default App;
