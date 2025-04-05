import React, { useState, useEffect } from "react";

function Work() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const images = [
    {
      url: "https://media.licdn.com/dms/image/v2/D4D22AQGE5OzWqKs4LQ/feedshare-shrink_800/B4DZPZUPODHUAg-/0/1734517783047?e=1746662400&v=beta&t=ekivpWcp2G4ItnyenguRC6-JMPG2dv0MTUdYR5NcDl8",
      top: "50%",
      left: "50%",
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D22AQHY-5tHRlMFpw/feedshare-shrink_800/B4DZSxK..LGcAg-/0/1738139235691?e=1746662400&v=beta&t=ceo_1IZqj4P4te3gQQOKcYlZ2t7I7EhRWPjUMdztacs",
      top: "45%",
      left: "55%",
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D4D22AQE3iVUC2K-Zwg/feedshare-shrink_2048_1536/B4DZTjxY8RGcAo-/0/1738988169747?e=1746662400&v=beta&t=q7WBB_tLnMIdiLsj9F6uI4pFsxBhpOF-GTckI8Kg75I",
      top: "55%",
      left: "45%",
    },
    
    {
      url: "https://media.licdn.com/dms/image/v2/D4D22AQF4jVWsfQv5tw/feedshare-shrink_1280/B4DZVVkRCFHkAk-/0/1740897329317?e=1746662400&v=beta&t=9F1XnleJvygJbOxHHKXt8a6dzodhl2qRlvuZCPHhk34",
      top: "55%",
      left: "50%",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop);

      // Calculate which image should be active based on scroll position
      const scrollPosition = scrollTop - document.getElementById("work-section").offsetTop;
      const sectionHeight = document.getElementById("work-section").offsetHeight;
      const scrollPercentage = Math.min(1, Math.max(0, scrollPosition / sectionHeight));
      
      if (scrollDirection === "down") {
        const newIndex = Math.floor(scrollPercentage * images.length);
        setActiveIndex(newIndex);
      } else {
        const newIndex = Math.floor(scrollPercentage * images.length) - 1;
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, scrollDirection, images.length]);

  return (
    <div id="work-section" className="w-full relative">
      <div className="max-w-screen-xl mx-auto  px-10 relative h-[300vh]">
        <div className="flex flex-col gap-5 sticky top-0 h-screen  justify-center items-center">
          <div className="text-center">
            <h1 className="text-[10vw] font-semibold">Designer & Dev</h1>
            <h1 className="text-[2vw] text-zinc-300">UI/UX Designer & Web developer</h1>
          </div>

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
            {images.map((elem, i) => (
              <img
                key={i}
                className={`absolute w-72 rounded-lg -translate-x-[50%] -translate-y-[50%] transition-all duration-500 ${
                  i <= activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ 
                  top: elem.top, 
                  left: elem.left,
                  transitionDelay: `${i * 100}ms`
                }}
                src={elem.url}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;