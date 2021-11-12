import React from 'react';
import Image from 'next/image';


function Card({ cat }: any) {
  if (!cat.image.url) return null;

  return (
    <div className='m-2 p-5 h-auto bg-red-200 shadow-lg md:w-1/4 rounded-lg'>
      <p className='text-gray-100 text-3xl'>{cat.name}</p>
      <p className='my-1 font-mono'>
        Active, Energetic, Independent, Intelligent, Gentle
      </p>
      <button className='w-auto mx-auto px-4 py-2 my-1 rounded-md bg-yellow-300 hover:bg-yellow-200 font-mono'>
        Read More
      </button>
      {/* <div className=' rounded-sm w-max h-max bg-gray-600 pb-4'></div> */}
      <div className='w-full h-60 relative mt-2'>
        <Image
          className='rounded-md'
          src={cat.image.url}
          alt='cat image'
          layout='fill'
        />
      </div>
    </div>
  );
}

export default Card;
