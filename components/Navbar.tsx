import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  return (
    <div className='px-4 bg-purple-300 '>
      {/* primary nav bar */}
      <div className='flex md:px-36 max-w-auto justify-between'>
        <div className='flex space-x-4 my-3 md:my-4 text-sm md:text-xl items-center'>
          <div className=''>
            <a href='/test'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                />
              </svg>
            </a>
          </div>
          <a href='#'>CatSite</a>
          <a className='' href='#'>
            Features
          </a>
          <a className='' href='#'>
            Pricing
          </a>
        </div>

        {/* secondary navbar */}
        <div className='md:flex hidden items-center my-4 space-x-4 text-xl'>
          <a href='#' className=''>
            Login
          </a>
          <a
            href='#'
            className='bg-green-400 hover:bg-green-300 py-2 px-2 rounded-md shadow-lg'
          >
            SignUp
          </a>
        </div>
        {/* mobile navbar menu open */}
        <div
          onClick={() => setIsOpenNavBar(!isOpenNavBar)}
          className='flex md:hidden my-2 px-2 rounded-sm shadow-lg bg-yellow-500 items-center'
        >
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* mobile navbar */}
      <div
        className={`md:hidden py-2 transition duration-500 ease-in-out ${
          isOpenNavBar ? 'block' : 'hidden'
        } `}
      >
        <div className='py-2 space-x-4 text-md '>
          <a href='#' className=''>
            Features
          </a>
        </div>
        <div className='py-2 space-x-4 text-md '>
          <a href='#' className=''>
            Pricing
          </a>
        </div>
        <div className=' py-2 space-x-4 text-md '>
          <a href='#' className=''>
            Login
          </a>
        </div>
        <div className='py-2 space-x-4 text-md'>
          <a href='#' className=''>
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
