
import React from 'react';
import { Branches } from '../components/Branches';
import { FLEET_DETAILS } from '../constants';

const FleetShowcase: React.FC = () => (
    <section className="py-16 md:py-32 bg-[#f4f1e6] px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
                <div className="lg:w-1/2">
                    <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Fleet</p>
                    <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-tight">Clean & Reliable <br />Trucks</h2>
                    <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed">
                        We have a range of well-maintained trucks for all your needs. From small pickups to large cargo carriers, we are ready to move your goods.
                    </p>
                    <div className="space-y-3 md:space-y-6">
                        {FLEET_DETAILS.map((fleet, i) => (
                            <div key={i} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-gray-100 hover:border-[#c5a47e] transition-all shadow-sm">
                                <span className="text-2xl md:text-4xl">{fleet.icon}</span>
                                <div>
                                    <h4 className="font-bold text-[#2d4133] text-sm uppercase tracking-widest">{fleet.name}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{fleet.capacity} Capacity • {fleet.use}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src="/images/truck 3.jpeg"
                        alt="Fleet View"
                        className="w-full h-full object-cover rounded-sm shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </section>
);

export const LocationsPage: React.FC = () => {
    return (
        <div className="pt-20">
            <Branches />
            <FleetShowcase />

            {/* Local Partnership Section */}
            <section className="py-16 md:py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[#2d4133] font-serif text-4xl md:text-6xl mb-8">Strategic Local Presence</h2>
                    <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed mb-12">
                        With warehouses and offices strategically located in major industrial hubs, we provide unmatched local expertise and rapid response times. Our presence in Bangalore, Bidadi, Mehsana, Pune, and Gurgaon allows us to serve the entire nation with ease.
                    </p>
                    <div className="inline-block px-12 py-6 bg-[#2d4133] text-white rounded-full">
                        <p className="font-serif italic text-2xl">"Local expertise, National reach."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
