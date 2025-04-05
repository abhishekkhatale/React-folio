import React from 'react'

function Stripe({ val }) {
  return (
    <div className='flex w-[25%] py-3 justify-center gap-5 items-center border-zinc-600 border-t-[1px] border-b-[1px] border-r-[1px] group overflow-hidden'>
      {/* Logo and Title with rolling effect */}
      <div className='flex gap-2 items-center transition-transform duration-300 hover:scale-105 overflow-hidden relative h-7'>
        <img className='h-auto w-8' src={val.url} alt="" />
        
        <div className="relative">
          {/* Static title */}
          <h1 className='text-white font-medium text-lg group-hover:-translate-y-full transition-all duration-500'>
            {val.title}
          </h1>
          
          {/* Rolling title */}
          <h1 className='absolute top-full left-0 text-white font-medium text-lg group-hover:-translate-y-full transition-all duration-500'>
            {val.title}
          </h1>
        </div>
      </div>
      
      {/* Number with enhanced hover effect */}
      <div className="overflow-hidden relative h-7">
        <h1 className='text-zinc-300 font-medium text-lg group-hover:-translate-y-full group-hover:text-white transition-all duration-500'>
          {val.num}
        </h1>
        <h1 className='absolute top-full left-0 text-white font-medium text-lg group-hover:-translate-y-full transition-all duration-500'>
          {val.num}
        </h1>
      </div>
    </div>
  )
}

export default Stripe