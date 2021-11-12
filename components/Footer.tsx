import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='flex bg-gray-200 justify-center items-center w-full h-52'>
      <p className='mx-4' >This is the Footer</p>
      <div className='w-32 h-40 mx-4 relative'>
        <Image
          className='rounded-md'
          src='/doglead.svg'
          alt='cat image'
          layout='fill'
        />
      </div>
      <p className='mx-4'>Another line</p>
    </div>
  );
}

export default Footer;
