
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Services</p>
        <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#2d4133] mb-8 md:mb-20 leading-tight">
          Comprehensive Logistics<br className="hidden md:block" /> Solutions
        </h3>

        {/* Desktop: tall vertical cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden shadow-xl mb-8 border border-gray-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4133]/90 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#c5a47e] font-serif text-3xl italic">0{idx + 1}</span>
                  <h4 className="text-[#2d4133] font-serif text-2xl md:text-3xl">{service.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-[#c5a47e] font-bold text-[9px] uppercase tracking-widest group-hover:gap-3 transition-all">
                  Service Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: compact horizontal cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="flex gap-4 bg-[#f9f8f4] border border-gray-100 rounded-lg overflow-hidden text-left group cursor-pointer active:scale-[0.98] transition-transform">
              <div className="relative w-24 min-h-[100px] flex-shrink-0 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2d4133]/20"></div>
                <span className="absolute bottom-1 left-2 text-white font-serif text-lg italic opacity-80">0{idx + 1}</span>
              </div>
              <div className="py-3 pr-4 flex flex-col justify-center min-w-0">
                <h4 className="text-[#2d4133] font-serif text-lg leading-tight mb-1">{service.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
