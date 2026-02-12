
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-6 bg-[#f4f1e6]">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-serif text-3xl sm:text-5xl text-[#2d4133] mb-8 md:mb-16">Trusted By Logistics Professionals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#2d4133] p-4 md:p-10 text-left relative">
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white/10 text-3xl md:text-5xl font-serif">"</div>
              <div className="flex gap-1 mb-2 md:mb-6">
                <span className="text-white font-serif text-sm md:text-lg">5.0</span>
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[#c5a47e] text-xs md:text-base">★</span>)}
              </div>
              <p className="text-white/80 text-xs md:text-sm italic leading-relaxed mb-3 md:mb-10 md:min-h-[80px] line-clamp-3 md:line-clamp-none">
                {t.text}
              </p>
              <h4 className="text-white font-serif text-lg md:text-2xl">{t.name}</h4>
            </div>
          ))}
        </div>
        <button className="mt-8 md:mt-12 border border-gray-300 px-10 py-3 text-xs font-bold tracking-widest text-gray-500 hover:bg-[#2d4133] hover:text-white transition-all uppercase">
          More Reviews
        </button>
      </div>
    </div>
  );
};
