import React from 'react'

const style={
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

const Sponsers = () => {
  return (

    <div className='h-screen block md:flex justify-center flex-wrap bg-black'>

{/* left div----------------------------------------------------------------------------------------- */}
      <div className='bg-black h-full md:w-6/12 flex text-center items-center justify-center flex-wrap'>
      <div className='w-10/12'>
        <div className='font-semibold text-5xl text-white pt-16'><h1>Our <span className='font-semibold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Awesome </span>Sponsors</h1></div>
        <div className='text-white'>While all our participants make our event lively. it is our very amazing  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> sponsors </span>that <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>make it possible</span></div>
      </div>
      </div>


      {/* right div -----------------------------------------------------------------------------------*/}

      <div className='h-full md:w-6/12 justify-center text-center items-center bg-black'>

          <div className='block md:flex flex-col text-center flex-wrap h-4/5 md:gap-4 pt-28 '>



          {/* Platinum Sponsors --------------------------------------------------------------------------*/}

          <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-36 md:h-auto'><div><h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Platinum Sponsors</h1></div>

          {/* Platinum Sponsors Images-------------------------------------------------------------------- */}

          <div className='flex justify-evenly mt-6 flex-wrap'>
            <img src={require("../assets/Sponsors/devfolio.svg").default} alt="devfolio" className='h-8 inline' />
            <img src={require("../assets/Sponsors/polygon.svg").default} alt="" className='h-8' />
            </div>
          </div>


            {/* Gold Sponsors ----------------------------------------------------------------------------*/}

            <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-48 md:h-auto'>
              <div>
                <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Gold Sponsors</h1></div>

            {/* Gold Sponsors Images ----------------------------------------------------------------*/}
            <div className='flex justify-evenly mt-6 flex-wrap'>
            <img src={require("../assets/Sponsors/Filecoin.png")} alt="devfolio" className='h-14 inline' />
            <img src={require("../assets/Sponsors/tezos.svg").default} alt="" className='h-12' />
            <img src={require("../assets/Sponsors/celo.png")} alt="" className='h-12' />
            <img src={require("../assets/Sponsors/axure.png")} alt="" className='h-10' /></div></div>



            {/* Premium Sponsors ------------------------------------------------------------------------ */}
            <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg min-h-[50px] rounded-lg shadow-x overflow-hidden flex-auto m-4 h-40 md:h-auto'><div><h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4'>Premium Sponsors</h1></div>

            {/* Premium Sponsors Images ---------------------------------------------------------------- */}
          <div className='flex justify-evenly mt-6 flex-wrap '>
            <img src={require("../assets/Sponsors/solanaLogo.png")} alt="devfolio" className='h-8 inline' />
            <img src={require("../assets/Sponsors/airmeet.png")} alt="" className='h-8' />
            <img src={require("../assets/Sponsors/sashido.png")} alt="" className='h-8' /></div></div>
          </div>

      </div>
    </div>
  )
}

export default Sponsers