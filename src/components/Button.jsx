import React, { useState } from 'react';
import { PiArrowBendDownRightBold } from "react-icons/pi";

function Button({ 
  title = "Get Started",
  link = "#", // Default empty link
  onClick // Optional additional click handler
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e); // Call custom handler if provided
    }
    if (link) {
      window.location.href = link; // Navigate to the link
    }
  };

  return (
    <button
      className='bg-white rounded-full font-medium text-sm py-1.5 px-5 text-black flex gap-2 items-center w-fit overflow-hidden relative cursor-pointer'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <div className="relative h-5 overflow-hidden">
        {/* Static text */}
        <div className={`transition-all duration-500 ${isHovering ? '-translate-y-full' : 'translate-y-0'}`}>
          {title}
        </div>
        
        {/* Rolling text */}
        <div className={`absolute top-full left-0 transition-all duration-500 ${isHovering ? '-translate-y-full' : 'translate-y-0'}`}>
          {title}
        </div>
      </div>
      
      <PiArrowBendDownRightBold className={`transition-transform duration-300 ${isHovering ? 'rotate-45' : 'rotate-0'}`} />
    </button>
  );
}

export default Button;