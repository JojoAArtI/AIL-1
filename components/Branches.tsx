
import React from 'react';
import { BRANCHES, ICONS } from '../constants';

export const Branches: React.FC = () => {
  return (
    <div className="py-16 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-xl">
            <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Network</p>
            <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#2d4133] leading-none mb-4 md:mb-6">Pan-India Reach</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              From our Head Office in Bangalore to strategic warehouses across Maharashtra, Gujarat, and Haryana, AIL ensures your assets move with localized precision.
            </p>
          </div>
          <button className="text-[#2d4133] font-bold text-[10px] uppercase tracking-widest border-b-2 border-[#2d4133] pb-1 hover:text-[#c5a47e] hover:border-[#c5a47e] transition-all">
            See Detailed Network
          </button>
        </div>

        {/* Desktop: spacious cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <div key={branch.id} className="group p-10 border border-gray-100 hover:border-[#c5a47e] transition-all duration-500 hover:shadow-xl relative overflow-hidden bg-[#fcfcfc]">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[#c5a47e]">
                    <ICONS.MapPin />
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100 px-3 py-1 bg-white">{branch.type}</span>
                </div>

                <h4 className="text-[#2d4133] font-serif text-3xl mb-4">{branch.location}</h4>
                <div className="h-20 overflow-hidden mb-8">
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[240px]">{branch.address}</p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <a href={`tel:${branch.phone}`} className="text-[#2d4133] text-[11px] font-bold hover:text-[#c5a47e] transition-all flex items-center gap-2">
                    <ICONS.Phone />
                    {branch.phone}
                  </a>
                  <p className="text-gray-400 text-[10px] lowercase font-medium">{branch.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: compact list cards */}
        <div className="md:hidden space-y-3">
          {BRANCHES.map((branch) => (
            <div key={branch.id} className="flex items-center gap-4 p-4 border border-gray-100 bg-[#fcfcfc] rounded-lg active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#2d4133] flex items-center justify-center text-[#c5a47e] flex-shrink-0">
                <ICONS.MapPin />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-[#2d4133] font-serif text-lg">{branch.location}</h4>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider border border-gray-200 px-2 py-0.5 bg-white rounded-sm flex-shrink-0">{branch.type}</span>
                </div>
                <p className="text-gray-500 text-[11px] leading-snug truncate">{branch.address}</p>
              </div>
              <a href={`tel:${branch.phone}`} className="w-9 h-9 rounded-full bg-[#f4f1e6] flex items-center justify-center text-[#2d4133] flex-shrink-0 active:bg-[#c5a47e] active:text-white transition-colors">
                <ICONS.Phone />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
