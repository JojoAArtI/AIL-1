import React from 'react';
import { Link } from 'react-router-dom';

const WarehouseService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[#345e37] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#f39223] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Services / Logistics</p>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-6">Storage & Warehousing</h1>
                    <p className="max-w-2xl text-[#f4f1e6]/80 text-lg leading-relaxed">
                        Secure, clean, and strategically located warehousing facilities across major industrial hubs.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-[#f39223] font-serif text-3xl md:text-5xl">Modern Facilities</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our warehousing solutions go beyond simple storage. We provide a comprehensive ecosystem for stock management, inventory control, and safe handling of diverse product categories.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With facilities in Bangalore, Bidadi, Kadi, Pune, and Gurgaon, we ensure your goods are stored in climate-controlled, secure environments that are easily accessible for onward distribution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="border-l-4 border-[#2d3282] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">24/7 Security</h4>
                                <p className="text-sm text-gray-500">CCTV surveillance and professional guarding.</p>
                            </div>
                            <div className="border-l-4 border-[#f39223] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">Inventory Mgmt</h4>
                                <p className="text-sm text-gray-500">Precise tracking of stock movement and levels.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#2d3282] -translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                            <img
                                src="/images/garage.jpeg"
                                alt="Warehousing Services"
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-32 bg-[#f4f1e6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#345e37] font-serif text-4xl mb-4">Storage Solutions</h2>
                        <div className="w-24 h-1 bg-[#f39223] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Short-Term Storage", desc: "Flexible options for businesses needing temporary overflow space." },
                            { title: "Long-Term Leasing", desc: "Dedicated spaces for long-term inventory management and regional hubs." },
                            { title: "Cross-Docking", desc: "Efficient fast-moving goods handling to minimize storage time and costs." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-gray-100 hover:border-[#2d3282] transition-all">
                                <h4 className="text-[#f39223] font-serif text-2xl mb-4">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-[#2d3282] text-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-5xl mb-8">Need Secure Space?</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-[#f39223] text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#2d3282] transition-all">
                        Book a Warehouse Tour
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WarehouseService;
