import React from 'react';
import { Link } from 'react-router-dom';

const BusinessDeliveryService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[#345e37] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#f39223] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Services / Corporate</p>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-6">Business Delivery</h1>
                    <p className="max-w-2xl text-[#f4f1e6]/80 text-lg leading-relaxed">
                        Scalable and reliable delivery solutions tailored for modern business environments.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-[#f39223] font-serif text-3xl md:text-5xl">Corporate Partner</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We provide daily delivery services for local and national businesses. Our goal is to handle the complex logistics requirements so you can focus on core business growth.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            From documents and small parcels to bulk inventory, our business delivery service is designed for speed, security, and professional representation of your brand during the final mile.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="border-l-4 border-[#2d3282] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">Final Mile</h4>
                                <p className="text-sm text-gray-500">Professional doorstep delivery for your clients.</p>
                            </div>
                            <div className="border-l-4 border-[#f39223] pl-6 py-2">
                                <h4 className="font-bold text-[#345e37] uppercase text-xs tracking-widest mb-2">Bulk Distribution</h4>
                                <p className="text-sm text-gray-500">Efficient movement of large commercial quantities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#2d3282] translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                            <img
                                src="/images/truck 3.jpeg"
                                alt="Business Delivery Services"
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-16 md:py-32 bg-[#f4f1e6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#345e37] font-serif text-4xl mb-4">Tailored Solutions</h2>
                        <div className="w-24 h-1 bg-[#f39223] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Same Day Delivery", desc: "Urgent delivery options for time-sensitive business shipments." },
                            { title: "Scheduled Pickup", desc: "Recurring logistics arrangements that fit your production schedule." },
                            { title: "Proof of Delivery", desc: "Instant digital confirmations and detailed tracking logs." }
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
                    <h2 className="font-serif text-3xl md:text-5xl mb-8">Streamline Your Deliveries</h2>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-[#f39223] text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#2d3282] transition-all">
                        Start a Business Account
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BusinessDeliveryService;
