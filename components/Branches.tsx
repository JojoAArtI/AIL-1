
import React from 'react';
import { BRANCHES, ICONS } from '../constants';

export const Branches: React.FC = () => {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Network</p>
            <h3 className="font-serif text-5xl md:text-7xl text-[#2d4133] leading-none mb-6">Pan-India Reach</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              From our Head Office in Bangalore to strategic warehouses across Maharashtra, Gujarat, and Haryana, AIL ensures your assets move with localized precision.
            </p>
          </div>
          <button className="text-[#2d4133] font-bold text-[10px] uppercase tracking-widest border-b-2 border-[#2d4133] pb-1 hover:text-[#c5a47e] hover:border-[#c5a47e] transition-all">
            See Detailed Network
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};
