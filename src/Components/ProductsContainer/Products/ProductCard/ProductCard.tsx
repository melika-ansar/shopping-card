
import React from 'react';

export default function ProductCard() {
    
  return (
    <div className='border border-white '>
      <div className='text-gray-400 flex flex-col justify-center items-center gap-3 py-5 text-xl shadow'>
        <img className='w-48'
          src="https://react-shopping-cart-project.netlify.app/images/prod1.png"
          alt=""
        />
        <img src="" alt="" />
        <h2>Hero GoPro 10</h2>
        <h3 className='font-semibold'>₹ 54,500</h3>
      </div>
      <button className='text-center bg-gray-800 text-gray-400 w-full py-2'>Add To Card</button>
    </div>
  );
}
