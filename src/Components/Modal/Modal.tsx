import React, { use, useState } from 'react'

export default function Modal() {

    const [isOpen, setOpen ] = useState(false)

  return (
    <div className='fixed top-0 bottom-0 right-0 w-[700px] text-gray-400'>
      <header className="bg-gray-800 flex items-center text-center gap-[16rem] pb-4 ">
        <button className='bg-gray-900 text-2xl px-3 py-1 font-semibold self-start '>x</button>
        <h1 className='text-3xl justify-self-center mt-3 pb-3'>cart(1)</h1>
      </header>

      <main className="bg-gray-900 h-[36rem] shadow">
        <img src="" alt="" />
      </main>
      <footer className="bg-gray-800 flex justify-between px-10 py-5">
        <div className='text-gray-400 flex gap-2'>
          <p>total:</p>
          <p className='font-semibold'>₹ 54,500</p>
        </div>
        <button className='bg-gray-400 py-1 px-4 text-black'>Checkout</button>
      </footer>
    </div>
  );
}
