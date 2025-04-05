import React, { useEffect } from 'react';
import { FaReact, FaFigma, FaJava, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC } from 'react-icons/si';

const About = () => {
  const skillIcons = [
    { icon: <FaReact className="text-4xl text-blue-400" />, name: "React" },
    { icon: <FaFigma className="text-4xl text-purple-500" />, name: "Figma" },
    { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, name: "Tailwind" },
    { icon: <FaJava className="text-4xl text-red-500" />, name: "Java" },
    { icon: <FaPhp className="text-4xl text-indigo-500" />, name: "PHP" },
    { icon: <SiCplusplus className="text-4xl text-blue-600" />, name: "C++" },
    { icon: <SiC className="text-4xl text-gray-400" />, name: "C" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-zinc-900 text-white" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-on-scroll">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <p className="text-xl mb-6 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-medium">UI/UX Designer</span> and <span className="text-blue-400 font-medium">Frontend Developer</span> with a keen eye for detail and a love for creating intuitive, user-centered digital experiences.
            </p>
            <p className="text-xl mb-8 leading-relaxed">
              My approach combines aesthetic design with functional implementation to build applications that are both beautiful and practical across all devices and platforms.
            </p>
            
            <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 animate-on-scroll delay-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">My Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Technical Skills</h4>
                  <p className="text-zinc-300">
                    Proficient in UI/UX design, frontend development, and various programming languages.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Soft Skills</h4>
                  <p className="text-zinc-300">
                    Strong team management, problem-solving, adaptability, and effective communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-200">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {skillIcons.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 bg-zinc-800 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-on-scroll"
                  style={{ animationDelay: `${150 + (index * 50)}ms` }}
                >
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-zinc-800 p-6 rounded-xl border border-zinc-700 animate-on-scroll delay-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Design Philosophy</h3>
              <p className="text-zinc-300">
                I believe in creating interfaces that are not just visually appealing but also intuitive and accessible. Every pixel should serve a purpose, and every interaction should feel natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;