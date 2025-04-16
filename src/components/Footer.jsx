import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/abhishekkhatale",
      label: "Visit my GitHub profile"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishekkhatale/",
      label: "Connect with me on LinkedIn"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram",
      url: "https://www.instagram.com/abhishekkhatale?igsh=MWYycXR4eXBtYTdscA==",
      label: "Follow me on Instagram"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      name: "Email",
      url: "mailto:abhishekkhatale007@gmail.com",
      label: "Send me an email"
    },
    {
      icon: <FaPhone className="text-xl" />,
      name: "Phone",
      url: "tel:8828885050",
      label: "Call me"
    },
    {
      icon: <FaFilePdf className="text-xl" />,
      name: "Resume",
      url: "https://drive.google.com/file/d/1fWRYSUAuBKbuHMv5WOs5ngFmOM3qkL0r/view?usp=sharing",
      label: "Download my resume"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.footer-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 border-t border-zinc-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 footer-element opacity-0">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-zinc-400 max-w-md">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-element opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-xs mt-1 text-zinc-400 group-hover:text-white group-hover:translate-y-1 transition-all duration-300">
                    {link.name}
                  </span>
                  <span className="absolute inset-0 rounded-lg border-2 border-white opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow transition-all duration-300 pointer-events-none"></span>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-500 text-sm footer-element opacity-0">
          <p>© {new Date().getFullYear()} Abhishek Khatale. All rights reserved.</p>
          <p className="mt-2">Designed and built with by Abhishek Khatale</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
