import React from 'react'

const style={
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

const Sponsers = () => {
  return (

    <div id="sponsors" className=' sm:flex-col flex  flex-wrap bg-black'>

{/* left div----------------------------------------------------------------------------------------- */}
      <div className='bg-black flex-col md:flex-row flex text-center items-center justify-center'>
      <div className='w-full'>
        <div className='font-semibold text-5xl text-white '><h1>Our <span className='font-semibold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Awesome </span>Sponsors</h1></div>
        <div className='text-white'>While all our participants make our event lively. it is our very amazing  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> sponsors </span>that <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>make it possible</span></div>
      </div>
      
      <div className='h-full w-full justify-center text-center items-center bg-black'>

          <div className='flex flex-col text-center h-full items-center justify-center'>



          {/* Platinum Sponsors --------------------------------------------------------------------------*/}

          <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-36 md:h-auto w-3/4'><div><h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Platinum Sponsors</h1></div>

          {/* Platinum Sponsors Images-------------------------------------------------------------------- */}

          <div className='flex justify-evenly mt-6 flex-wrap items-center'>
            <img src={require("../assets/Sponsors/devfolio.svg").default} alt="devfolio" className='h-8 inline' />
            <img src={require("../assets/Sponsors/polygon.svg").default} alt="" className='h-8' />
            </div>
          </div>


            {/* Gold Sponsors ----------------------------------------------------------------------------*/}

            <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-48 md:h-auto'>
              <div>
                <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Gold Sponsors</h1></div>

            {/* Gold Sponsors Images ----------------------------------------------------------------*/}
            <div className='flex justify-evenly mt-6 flex-wrap items-center'>
            <img src={require("../assets/Sponsors/Filecoin.png")} alt="devfolio" className='h-14 inline' />
            <img src={require("../assets/Sponsors/tezos.svg").default} alt="" className='h-12' />
            <img src={require("../assets/Sponsors/celo.png")} alt="" className='h-12' />
            <img src={require("../assets/Sponsors/axure.png")} alt="" className='h-10' /></div></div>



            {/* Premium Sponsors ------------------------------------------------------------------------ */}
            <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-40 md:h-auto'><div><h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Premium Sponsors</h1></div>

            {/* Premium Sponsors Images ---------------------------------------------------------------- */}
          <div className='flex justify-evenly mt-6 flex-wrap items-center'>
            <img src={require("../assets/Sponsors/solanaLogo.png")} alt="devfolio" className='h-8 inline' />
            <img src={require("../assets/Sponsors/airmeet.png")} alt="" className='h-8' />
            <img src={require("../assets/Sponsors/sashido.png")} alt="" className='h-8' /></div></div>
          </div>

      </div>
      </div>


      {/* right div -----------------------------------------------------------------------------------*/}

    </div>
  )
}

export default Sponsers