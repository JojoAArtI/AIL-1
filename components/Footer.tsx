
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="bg-[#f4f1e6] pt-16 md:pt-32 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-12 md:mb-24">
          <div className="space-y-6 max-w-sm">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d4133]">A India Logistics</h2>
            <p className="text-gray-500 font-serif italic text-xl leading-relaxed">
              We make shipping big stuff look easy.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2d4133] flex items-center justify-center text-[#c5a47e] text-xs">f</div>
              <div className="w-8 h-8 rounded-full bg-[#2d4133] flex items-center justify-center text-[#c5a47e] text-xs">t</div>
              <div className="w-8 h-8 rounded-full bg-[#2d4133] flex items-center justify-center text-[#c5a47e] text-xs">in</div>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="text-[120px] font-serif text-[#2d4133]/5 leading-none select-none hidden lg:block">AIL</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[#2d4133] font-bold text-[10px] uppercase tracking-widest mb-6">Call Us</h4>
              <ul className="space-y-4 text-xs font-semibold text-gray-600">
                <li>
                  <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-1">Phone Number</p>
                  +91 95357 79215
                </li>
                <li>
                  <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-1">Email Address</p>
                  aindialogistics@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#2d4133] font-bold text-[10px] uppercase tracking-widest mb-6">Our Office</h4>
              <ul className="space-y-4 text-xs font-semibold text-gray-600">
                <li>
                  <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-1">Office Location</p>
                  1st Floor No.258/1<br />
                  Basaveshwara Layout,<br />
                  Bidadi Ramanagara - 562109<br />
                  Karnataka
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
          <p>© 2025 A India Logistics • www.aindialogistics.com</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>All Rights Reserved</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
