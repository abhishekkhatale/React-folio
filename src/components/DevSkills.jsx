import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC, SiMysql, SiDotnet } from 'react-icons/si';

const DevSkills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-white text-2xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-white text-2xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-white text-2xl" /> },
    { name: 'ReactJS', icon: <FaReact className="text-white text-2xl" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-white text-2xl" /> },
    { name: 'C', icon: <SiC className="text-white text-2xl" /> },
    { name: 'C++', icon: <SiCplusplus className="text-white text-2xl" /> },
    { name: 'Java', icon: <FaJava className="text-white text-2xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-white text-2xl" /> },
    { name: 'PHP', icon: <FaPhp className="text-white text-2xl" /> },
    { name: 'ASP.NET', icon: <SiDotnet className="text-white text-2xl" /> }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="bg-zinc-900 py-12 overflow-hidden">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Developer Skills</h2>
      
      <div className="relative">
        {/* First Marquee */}
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap py-4">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex items-center mx-8">
                {skill.icon}
                <span className="ml-2 text-white text-xl font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee (reverse direction) */}
        <div className="flex items-center overflow-hidden mt-4">
          <div className="flex items-center animate-marquee-reverse whitespace-nowrap py-4">
            {duplicatedSkills.reverse().map((skill, index) => (
              <div key={index + skills.length} className="flex items-center mx-8">
                {skill.icon}
                <span className="ml-2 text-white text-xl font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSkills;