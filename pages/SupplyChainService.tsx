import React from 'react';
import { Link } from 'react-router-dom';

const SupplyChainService: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[#345e37] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#f39223] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Services / Logistics</p>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-6">Supply Chain Help</h1>
                    <p className="max-w-2xl text-[#f4f1e6]/80 text-lg leading-relaxed">
                        Optimizing your logistics lifecycle from source to destination with strategic precision.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-[#f39223] font-serif text-3xl md:text-5xl">Strategic Optimization</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            A well-oiled supply chain is the backbone of any successful business. We help you identify bottlenecks, optimize routes, and reduce overhead costs while improving delivery speed.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our experts analyze your current logistics flow and propose data-driven improvements that enhance transparency, predictability, and overall operational efficiency across your entire network.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="border-l-4 border-[#2d3282] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">Cost Reduction</h4>
                                <p className="text-sm text-gray-500">Minimize wastage and optimize freight spending.</p>
                            </div>
                            <div className="border-l-4 border-[#f39223] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">Route Planning</h4>
                                <p className="text-sm text-gray-500">Intelligent selection of paths for maximum speed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#2d3282] translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                            <img
                                src="/images/truck 4.jpeg"
                                alt="Supply Chain Services"
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-32 bg-[#f4f1e6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#345e37] font-serif text-4xl mb-4">Our Approach</h2>
                        <div className="w-24 h-1 bg-[#f39223] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Analyze", desc: "In-depth review of your current logistics and supply chain processes." },
                            { title: "Implement", desc: "Deploying optimized solutions and technology to streamline operations." },
                            { title: "Monitor", desc: "Continuous tracking and adjustment to ensure sustained performance." }
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
                    <h2 className="font-serif text-3xl md:text-5xl mb-8">Optimize Your Chain Today</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-[#f39223] text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#2d3282] transition-all">
                        Talk to an Expert
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SupplyChainService;
