
import React from 'react';
import { About } from '../components/About';
import { OwnerSection } from '../components/OwnerSection';

export const AboutPage: React.FC = () => {
    return (
        <div className="pt-20">
            <About />

            <section className="py-16 md:py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-[#2d4133] font-serif text-4xl md:text-6xl mb-8">Our Journey</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Founded over a decade ago, A India Logistics (AIL) started with a single truck and a vision to transform the logistics landscape in India. Driven by a commitment to reliability and customer satisfaction, we quickly expanded our fleet and network.
                                </p>
                                <p>
                                    Today, we stand as a premier logistics provider, serving thousands of clients across the nation. Our growth is a testament to our dedication to excellence and our ability to adapt to the changing needs of the industry.
                                </p>
                                <p>
                                    From small-scale local deliveries to large-scale industrial logistics, AIL has been at the forefront of moving the nation's economy forward.
                                </p>
                            </div>
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-3xl font-serif text-[#c5a47e]">10+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Years of Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-serif text-[#c5a47e]">500+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Trusted Partners</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-serif text-[#c5a47e]">24/7</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Support Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="/images/truck 4.jpeg"
                                alt="AIL Logistics Journey"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#2d4133]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            <OwnerSection />
        </div>
    );
};
