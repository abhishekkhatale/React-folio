import React, { useState } from 'react';
import Button from './Button';

function Product({data, index}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define colors based on project index
  const getHoverColor = () => {
    switch(index) {
      case 0: return '#80D002'; // Project 1
      case 1: return '#FF4D6D'; // Project 2
      case 2: return '#25282D'; // Project 3
      case 3: return '#104734'; // Project 4
      default: return '#18181b'; // Default
    }
  };

  return (
    <div 
      className='w-full py-10 transition-all duration-500 relative overflow-hidden group'
      style={{ backgroundColor: isHovered ? getHoverColor() : '#18181b' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-between max-w-screen-xl mx-auto items-center relative z-10'>
        <div className='transition-all duration-500 group-hover:translate-x-10'>
          <h1 className='text-4xl font-semibold'>{data.title}</h1>
        </div>
        
        <div className={`transition-all duration-700 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
          <img 
            className='h-auto w-80 rounded-md shadow-2xl object-cover'
            src={data.url} 
            alt={data.title} 
          />
        </div>
        
        <div className='flex flex-col w-1/3 gap-6 transition-all duration-500 group-hover:-translate-x-10'>
          <p className='transition-all duration-300 group-hover:text-white'>{data.description}</p>
          <Button title='About Project' link={data.link}/>
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
      />
    </div>
  );
}

export default Product;