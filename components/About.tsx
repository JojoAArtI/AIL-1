
import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#f4f1e6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-24">
          <div className="lg:w-1/3 w-full">
            <span className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">About Our Company</span>
            <h2 className="text-[#2d4133] font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
              Shipping <br className="hidden md:block" /> Big Stuff
            </h2>
            <div className="w-20 h-1 bg-[#2d4133]"></div>
          </div>
          
          <div className="lg:w-2/3 w-full space-y-10">
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl">
              A India Logistics (AIL) is a growing company that helps businesses with their shipping and storage needs. We make sure your goods are moved properly and on time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-200 pt-10">
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-[#2d4133]">Good Planning</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We look at the best ways to move your materials from raw items to finished products, helping your business grow and save on costs.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-[#2d4133]">Safe Handling</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We care for your goods as if they were our own. We reduce extra costs and give you the high-quality help your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-24">
          <div>
            <h4 className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Our Vision</h4>
            <p className="text-[#2d4133] font-serif text-3xl mb-4 italic leading-tight">Giving businesses the best shipping help in India.</p>
            <p className="text-gray-500 text-sm leading-relaxed">We focus on being organized and on time so that your supply chain works perfectly every day.</p>
          </div>
          <div>
            <h4 className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Our Goal</h4>
            <p className="text-[#2d4133] font-serif text-3xl mb-4 italic leading-tight">Save money and grow your business with us.</p>
            <p className="text-gray-500 text-sm leading-relaxed">We find the best ways to store and move your items from the start to the final customer.</p>
          </div>
          <div>
            <h4 className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Our Promise</h4>
            <p className="text-[#2d4133] font-serif text-3xl mb-4 italic leading-tight">"We make shipping big stuff look easy."</p>
            <p className="text-gray-500 text-sm leading-relaxed">No matter how big or heavy your items are, we handle the hard work so you don't have to worry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
