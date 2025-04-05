import React from 'react';
import InfiniteScroll from './InfiniteScroll';

const EducationSection = () => {
  const educationItems = [
    { 
      content: (
        <div className="p-6 text-left  rounded-lg ">
          <h3 className="text-white text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-zinc-300">Sahyog College Thane</p>
          <div className="flex justify-between mt-4">
            <span className="text-zinc-400">2021 - 2024</span>
            <span className="text-white font-medium bg-blue-600 px-2 py-1 rounded-full text-sm">CGPA: 9.63</span>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="p-6 text-left ">
          <h3 className="text-white text-xl font-bold">XII (HSC) Maharashtra Board</h3>
          <p className="text-zinc-300">VG Vaze Kelkar College</p>
          <div className="flex justify-between mt-4">
            <span className="text-zinc-400">2019 - 2021</span>
            <span className="text-white font-medium bg-blue-600 px-2 py-1 rounded-full text-sm">70%</span>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="p-6 text-left ">
          <h3 className="text-white text-xl font-bold">X (SSC) Maharashtra Board</h3>
          <p className="text-zinc-300">Mithila English High School</p>
          <div className="flex justify-between mt-4">
            <span className="text-zinc-400">2018 - 2019</span>
            <span className="text-white font-medium bg-blue-600 px-2 py-1 rounded-full text-sm">84%</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-zinc-900 py-16 px-4">
      <h2 className="text-white text-3xl font-bold text-center mb-12">Education</h2>
      <div style={{ height: '500px', position: 'relative' }}>
        <InfiniteScroll
          items={educationItems}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
          itemMinHeight={180}
          negativeMargin="-1em"
        />
      </div>
    </section>
  );
};

export default EducationSection;