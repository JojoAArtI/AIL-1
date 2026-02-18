import React from 'react';

export const SecurityFeatures: React.FC = () => {
    return (
        <>
            {/* Secure warehouse section */}
            <section className="py-16 md:py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2">
                        <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-6xl mb-6">Secure Warehouse Solutions</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            We provide secure warehousing solutions for your cargo, ensuring safety and integrity throughout the storage period. Our facilities are equipped with state-of-the-art surveillance and tracking systems to give you peace of mind.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#2d4133] flex items-center justify-center text-white font-bold text-xl">
                                ✓
                            </div>
                            <span className="text-[#2d4133] font-serif text-xl">Certified & Secured</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                            alt="Secure Warehouse"
                            className="w-full h-auto rounded-sm shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Unmatched Security Parallax/Image Section */}
            <section className="relative py-24 md:py-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000")' }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl mb-6 max-w-3xl leading-tight">
                        Offering Unmatched Specialized Security for All Your Shipments
                    </h2>
                </div>
            </section>

            {/* Cargo Tracking & Safety Points */}
            <section className="py-16 md:py-32 bg-[#2d4133] text-white px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <h3 className="font-serif text-3xl md:text-4xl mb-6">Cargo Tracker: Safe, Secure, and Efficient</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="text-[#c5a47e] text-2xl">•</span>
                                <p className="text-[#f4f1e6]/80 text-sm leading-relaxed">
                                    Real-time tracking systems allow you to monitor your shipments 24/7, providing transparency and reliability.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#c5a47e] text-2xl">•</span>
                                <p className="text-[#f4f1e6]/80 text-sm leading-relaxed">
                                    Advanced security protocols ensure that your cargo remains safe from theft and damage during transit and storage.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#c5a47e] text-2xl">•</span>
                                <p className="text-[#f4f1e6]/80 text-sm leading-relaxed">
                                    Our experienced team handles every shipment with care, ensuring efficient and timely delivery to your destination.
                                </p>
                            </div>
                        </div>

                        {/* Client Logos Placeholder */}
                        <div className="mt-16 flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* These are placeholders, normally we'd import images */}
                            <div className="text-2xl font-bold font-serif text-[#c5a47e]">FedEx</div>
                            <div className="text-2xl font-bold font-serif text-white">ARAMEX</div>
                            <div className="text-2xl font-bold font-serif text-[#FFCC00] text-black bg-[#FFCC00] px-1">DHL</div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                            alt="Container"
                            className="w-full h-auto rounded-sm shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
