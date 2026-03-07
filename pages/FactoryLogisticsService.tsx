import React from 'react';
import { Link } from 'react-router-dom';

const FactoryLogisticsService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[#345e37] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#f39223] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Services / Industrial</p>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-6">Factory Logistics</h1>
                    <p className="max-w-2xl text-[#f4f1e6]/80 text-lg leading-relaxed">
                        In-plant material handling and seamless logistics integration for the manufacturing sector.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-[#f39223] font-serif text-3xl md:text-5xl">Manufacturing Excellence</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We provide end-to-end logistics support within factory premises, ensuring that raw materials, semi-finished goods, and finished products move smoothly through your production lines.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our specialized team and equipment are designed to handle the unique challenges of industrial environments, focusing on safety, precision, and zero-downtime operations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="border-l-4 border-[#2d3282] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">In-Plant Ops</h4>
                                <p className="text-sm text-gray-500">Expert handle of internal factory movements.</p>
                            </div>
                            <div className="border-l-4 border-[#f39223] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">KPI Focused</h4>
                                <p className="text-sm text-gray-500">Efficiency metrics aligned with production goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#2d3282] -translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                            <img
                                src="/images/truck sideway.jpeg"
                                alt="Factory Logistics"
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Efficiency Cards */}
            <section className="py-16 md:py-32 bg-[#f4f1e6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#345e37] font-serif text-4xl mb-4">Industrial Solutions</h2>
                        <div className="w-24 h-1 bg-[#f39223] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Material Dispatch", desc: "Efficient loading and dispatch of finished goods to markets." },
                            { title: "Just-In-Time", desc: "Synchronized delivery of raw materials to keep production lines active." },
                            { title: "Labor Management", desc: "Expert staff provided for varied industrial logistics tasks." }
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
                    <h2 className="font-serif text-3xl md:text-5xl mb-8">Boost Factory Efficiency</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-[#f39223] text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#2d3282] transition-all">
                        Inquire About Industrial Support
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FactoryLogisticsService;
