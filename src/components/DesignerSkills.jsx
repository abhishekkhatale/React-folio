import React from 'react';
import { FaFigma, FaPinterest } from 'react-icons/fa';
import { SiAdobexd, SiCanva, SiAdobeillustrator } from 'react-icons/si';
import { GiPaintBrush } from 'react-icons/gi';

const DesignerSkills = () => {
  const skills = [
    { name: 'Figma', icon: <FaFigma className="text-white text-2xl" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-white text-2xl" /> },
    { name: 'Canva', icon: <SiCanva className="text-white text-2xl" /> },
    { name: 'Mottif', icon: <GiPaintBrush className="text-white text-2xl" /> },
    { name: 'Pinterest', icon: <FaPinterest className="text-white text-2xl" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="text-white text-2xl" /> }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="bg-zinc-900 py-12 overflow-hidden">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Designer Skills</h2>
      
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

export default DesignerSkills;