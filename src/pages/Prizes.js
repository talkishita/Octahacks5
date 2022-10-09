import React from 'react';
import platform from '../assets/platform.png'
import trophy from '../assets/trophy.png'
function Prizes(){
    return(
       <>
       <div className='absolute grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6 lg:w-[90%] xl:w-[92%] xl:h-[84%] lg:h-[83%] w-full h-[88%] lg:top-24 lg:left-[5.5rem] lg:my-2 lg:mx-2 top-[5.2rem]' >

<div className='flex flex-col justify-center items-center'>
  
  <div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>
<div className=' flex flex-col justify-center items-center'>
  
<div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>
<div className='flex flex-col justify-center items-center'>
<div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>
<div className='flex flex-col justify-center items-center'>
<div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>
<div className='flex flex-col justify-center items-center'>
 
<div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>
<div className='flex flex-col justify-center items-center'>
  
<div class="flex justify-center items-center w-[60%] sm:w-[75%] md:w-[80%] lg:w-[90%] h-auto"><img src={trophy} alt="prizes" class="w-fit xxs:h-20 xs:h-28" /></div>
  <div class="flex justify-center items-end w-[60%] sm:w-[75%]  md:w-[80%] lg:w-[90%] h-auto"><img src={platform} alt="platform" class="w-fit h-fit" /></div>

</div>

</div>
  

</>
    
    );
}
export default Prizes;