
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative h-screen min-h-[500px] md:min-h-[600px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg"
          alt="Logistics Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="reveal">
            <h1 className="text-white font-serif text-5xl sm:text-7xl md:text-[12rem] mb-2 tracking-tighter leading-none opacity-90 drop-shadow-2xl">
              AIL
            </h1>
            <div className="w-16 h-[2px] bg-[#c5a47e] mx-auto mb-6"></div>
            <p className="text-white font-medium tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 opacity-80">
              Reliable Logistics Partner
            </p>
            <p className="text-white font-serif italic text-xl md:text-2xl opacity-90">
              Trusted Shipping • India
            </p>

            <Link
              to="/about"
              className="mt-10 md:mt-12 inline-block text-white border border-white/30 px-8 py-4 md:px-10 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-[#2d4133] transition-all active:scale-95"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Tracking Form Removed */}
    </div>
  );
};
