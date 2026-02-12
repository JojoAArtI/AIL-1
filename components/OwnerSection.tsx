
import React from 'react';

export const OwnerSection: React.FC = () => {
  const values = [
    { title: 'Track Your Goods', desc: 'See where your cargo is anytime with our simple GPS tracking system.' },
    { title: 'Local Expertise', desc: 'Our team in Jaipur knows the local roads and network better than anyone.' },
    { title: 'Modern Trucks', desc: 'We use good, clean trucks and tools to keep your items safe during travel.' },
    { title: 'Owner Involved', desc: 'You can talk to us directly. We are a family business and we care about you.' },
  ];

  return (
    <div id="owner" className="py-16 md:py-32 px-6 md:px-12 bg-[#f4f1e6]">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-32">
        <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Why Work With Us</p>
        <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#2d4133] mb-10 md:mb-16 leading-tight">A Partner You <br className="md:hidden" />Can Trust</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {values.map((v, i) => (
            <div key={i} className="bracket-card text-left group hover:-translate-y-2 duration-300">
              <h4 className="font-serif text-2xl mb-4 text-[#c5a47e] tracking-tight">{v.title}</h4>
              <p className="text-white/60 text-[11px] leading-relaxed font-medium uppercase tracking-wider">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-24 border-t border-gray-200 pt-12 md:pt-24">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#c5a47e] rounded-full translate-x-4 translate-y-4 -z-10 opacity-20"></div>
            <img
              src="/owner.jpg"
              alt="Rajan Bansal"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover shadow-2xl transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#c5a47e] w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-white font-serif italic text-2xl md:text-4xl shadow-xl">
              R.B
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em]">From the Owner</p>
          <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.1]">Our Promise <br className="hidden lg:block" />To You</h2>
          <p className="text-gray-700 italic text-lg md:text-2xl font-serif leading-relaxed">
            "We treat every box as if it were our own. Our business is built on helping yours succeed. We don't just move items; we help you grow your dream in this great country."
          </p>
          <div className="pt-6">
            <p className="font-bold text-[#2d4133] uppercase tracking-[0.4em] text-[10px] md:text-xs mb-1">Rajan Bansal</p>
            <p className="text-[#c5a47e] text-[9px] uppercase tracking-[0.2em] font-bold">Founder & Owner • AIL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
