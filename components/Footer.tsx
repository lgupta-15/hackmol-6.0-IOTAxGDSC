import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#00122E] to-[#001B40] text-white p-8 text-center">
      {/* Left Ornament */}
      <div className="absolute top-0 left-0 w-28 h-full">
        <img src="/icons/left.png" alt="Left Ornament" className="h-full w-full" />
      </div>
      {/* Right Ornament */}
      <div className="absolute top-0 right-0 w-28 h-full">
        <img src="/icons/right.png" alt="Right Ornament" className="h-full w-full" />
      </div>

      <div className="mt-10 flex flex-wrap justify-between max-w-5xl mx-auto font-custom text-white">
        {/* Quick Links Section */}
        <div className="mt-6 text-left">
          <h3 className="text-4xl text-[#E3DAAF]">QUICK LINKS</h3>
          <ul className="text-xl mt-2 space-y-1">
            <li>- The Team</li>
            <li>- Upcoming Events</li>
            <li>- Past Events</li>
            <li>- Join Us</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 text-right">
          <h3 className="text-4xl text-[#E3DAAF]">GET THE LATEST TEA</h3>
          <div className="flex space-x-4 justify-end mt-2 text-white">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Centerpiece */}
      <div className="mt-6 relative flex flex-col justify-center items-center">
        <svg className="w-full h-32 mb-0" viewBox="0 0 1028 256">
          <path id="curve" d="M50,140 Q514,10 978,140" fill="transparent" />
          <text className="fill-[#E3DAAF] text-2xl font-custom tracking-widest">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              PRESENTED BY HACKMOL | GDSC 2025
            </textPath>
          </text>
        </svg>
        <div className="relative w-full flex justify-center items-center mt-[-40px]">
          <img src="/icons/center.png" alt="Footer Centerpiece" className="w-150 h-60" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;