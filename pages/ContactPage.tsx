
import React from 'react';

const LeadForm: React.FC = () => (
    <section className="py-16 md:py-32 px-6 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 striped-bg pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-16">
                <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#f4f1e6] mb-4 md:mb-6">Start Moving <br className="md:hidden" />With Us Today</h3>
                <p className="text-[#c5a47e] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">Get a Quote for Your Next Shipment</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input type="text" placeholder="YOUR NAME" className="bg-transparent border-b border-white/20 p-4 text-white placeholder:text-white/30 text-xs font-bold tracking-widest outline-none focus:border-[#c5a47e] transition-colors" />
                    <input type="text" placeholder="PHONE NUMBER" className="bg-transparent border-b border-white/20 p-4 text-white placeholder:text-white/30 text-xs font-bold tracking-widest outline-none focus:border-[#c5a47e] transition-colors" />
                    <input type="email" placeholder="EMAIL (OPTIONAL)" className="bg-transparent border-b border-white/20 p-4 text-white placeholder:text-white/30 text-xs font-bold tracking-widest outline-none focus:border-[#c5a47e] transition-colors" />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="terms" className="w-4 h-4 rounded-none border-white/20 bg-transparent text-[#c5a47e]" />
                        <label htmlFor="terms" className="text-[10px] text-white/40 uppercase tracking-widest cursor-pointer">I agree to be contacted</label>
                    </div>
                    <button className="w-full md:w-auto px-16 py-5 bg-[#c5a47e] text-[#2d4133] font-bold text-xs tracking-[0.3em] uppercase hover:bg-white transition-all">
                        Get Pricing
                    </button>
                </div>
            </form>
        </div>
    </section>
);

export const ContactPage: React.FC = () => {
    return (
        <div className="pt-20">
            <LeadForm />
            <section className="py-16 md:py-24 bg-[#f4f1e6] px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-6xl mb-8">Visit Our Office</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[#c5a47e] font-bold text-xs uppercase tracking-widest mb-4">Phone</h4>
                            <p className="text-[#2d4133] font-serif text-xl">+91 93525 35257</p>
                        </div>
                        <div>
                            <h4 className="text-[#c5a47e] font-bold text-xs uppercase tracking-widest mb-4">Email</h4>
                            <p className="text-[#2d4133] font-serif text-xl">info@aindielogistics.com</p>
                        </div>
                        <div>
                            <h4 className="text-[#c5a47e] font-bold text-xs uppercase tracking-widest mb-4">Location</h4>
                            <p className="text-[#2d4133] font-serif text-xl">Jaipur, Rajasthan, India</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
