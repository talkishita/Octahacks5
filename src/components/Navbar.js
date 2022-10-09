import React from 'react';
import logo from '../assets/logo1.png'
import logo1 from '../assets/logo.png'
function Navbar(){
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return(
        <>
        <nav className="relative px-4 py-4 flex justify-between items-center">
          <div className="flex items-center justify-center w-28 h-full ml-2">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={logo} class="w-52 h-12" alt="gdsc"/>
        </a>
        </div>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-mainColor p-3" onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
       <div className="hidden absolute top-1/2 left-72 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mr-6 xl:mr-12 lg:items-center lg:w-auto lg:space-x-10">
        <ul
          className="lg:flex lg:mx-2 lg:my-2 lg:items-center lg:w-auto lg:space-x-10"
        >
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#">Home</a>
          </li>
  
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#">Our Team</a>
          </li>
  
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#">Contact</a>
          </li>
  
         
        </ul>
        </div>
        <div className="hidden lg:flex items-center justify-center p-1 mr-2">
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm font-bold rounded-xl transition duration-200"
          href="#"
          >
            <img src={logo1} className="w-50 h-8" alt="gdsc"/>
        </a>
        </div>
      </nav>
      <div className={
              "navbar-menu relative z-50 lg:hidden" +
              (navbarOpen ? " flex" : " hidden")
            }>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto"
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
             <img src={logo} alt="gdsc" className="w-auto h-12"/>
            </a>
            <button className="navbar-close" onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Home</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Overview</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Tracks</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Prizes</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Sponsors</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Judges</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Mentor</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Our Team</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
      </>
    );
};
export default  Navbar;