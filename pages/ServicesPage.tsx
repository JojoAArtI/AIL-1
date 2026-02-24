
import React from 'react';
import { Services } from '../components/Services';
import { PROCESS_STEPS } from '../constants';

const ProcessSection: React.FC = () => (
    <section className="py-16 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
                <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Simple Workflow</p>
                <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-7xl">How We Work</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {PROCESS_STEPS.map((step, i) => (
                    <div key={i} className="group relative">
                        <span className="text-6xl md:text-8xl font-serif text-[#2d4133]/5 absolute -top-8 -left-4 group-hover:text-[#c5a47e]/10 transition-colors">{step.step}</span>
                        <div className="relative pt-6">
                            <h4 className="font-serif text-2xl text-[#2d4133] mb-4">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const ServicesPage: React.FC = () => {
    return (
        <div className="pt-20">
            <Services />
            <ProcessSection />

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-32 px-6 md:px-12 bg-[#f4f1e6]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Our Methodology</p>
                        <h2 className="text-[#2d4133] font-serif text-4xl md:text-6xl">How We Work</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {PROCESS_STEPS.map((step) => (
                            <div key={step.step} className="group">
                                <div className="text-5xl font-serif text-[#c5a47e] mb-6 italic opacity-50 group-hover:opacity-100 transition-opacity">
                                    {step.step}
                                </div>
                                <h4 className="text-[#2d4133] font-serif text-2xl mb-4">{step.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-32 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-[#2d4133] font-serif text-4xl md:text-6xl mb-8">Why Choose Our Services?</h2>
                            <p className="text-gray-600 mb-12 leading-relaxed">
                                We go beyond simple logistics. We provide strategic solutions that help your business grow.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f1e6] flex items-center justify-center text-[#2d4133] font-bold shrink-0">✓</div>
                                    <div>
                                        <h5 className="font-serif text-xl text-[#2d4133] mb-2">Real-time Tracking</h5>
                                        <p className="text-gray-500 text-sm">Always know where your goods are with our advanced tracking systems.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f1e6] flex items-center justify-center text-[#2d4133] font-bold shrink-0">✓</div>
                                    <div>
                                        <h5 className="font-serif text-xl text-[#2d4133] mb-2">Safety Guaranteed</h5>
                                        <p className="text-gray-500 text-sm">We handle your items with the utmost care, ensuring they arrive in perfect condition.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f1e6] flex items-center justify-center text-[#2d4133] font-bold shrink-0">✓</div>
                                    <div>
                                        <h5 className="font-serif text-xl text-[#2d4133] mb-2">Cost Effective</h5>
                                        <p className="text-gray-500 text-sm">Optimized routes and processes mean better rates for our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="/images/truck 2.jpeg"
                                alt="Efficiency"
                                className="rounded-2xl shadow-2xl grayscale"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
