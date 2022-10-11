import React from 'react';

function Prizes() {
  return (
    <div className='min-h-screen bg-slate-900 bg-[url(https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/backVideo2.gif?raw=true)] bg-no-repeat bg-contain grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:w-[91%] xl:w-[92%] xl:h-[84%] lg:h-[84%] h-[88%] p-2'>
      <div className='flex flex-col justify-center items-center backdrop-blur-lg bg-black/30'>
        <div className='p-2 flex flex-col justify-center items-center '>
          <div className='md:w-full lg:w-[88%] h-full flex flex-col justify-center items-start text-white bg-transparent mb-[4px] cursor-pointer space-y-4'>
            <h2 className='text-[1.2rem] lg:text-[1.3rem] xl:text-[1.6rem] font-medium'>
              'TECH IT EASY'
            </h2>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-normal text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text'>
              Prizes & Rewards
            </h1>
            <p className='text-[1.3rem] lg:text-[1.4rem] xl:text-[1.6rem] font-light'>
              Just to incentivise your hard work and effort over those 36 hours
              we have prizes, cash rewards and more lined up for the top
              performers by our generous Sponsors. Swags and goodies are for
              everyone but for the ones with the most creative and innovative
              projects we have more lined up!!
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center backdrop-blur-lg bg-black/30'>
        <div className='p-2 flex flex-col justify-center items-center'>
          <div className='prize_section_card wrap-image w-full h-full flex flex-col justify-center items-center text-white bg-transparent border-[2px] mb-[4px] border-orange-400 rounded-[96% 4% 95% 5% / 3% 95% 5% 97%] p-[10px] cursor-pointer'>
            <h2 className='text-xl font-semibold p-[2%] '>Winner</h2>
            <h1 className='text-[4rem] font-black'>₹ 15,000 *</h1>
            <p className='text-[1.2rem]'>+Goodies worth upto</p>
            <p>₹ 1 Lakh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prizes;
