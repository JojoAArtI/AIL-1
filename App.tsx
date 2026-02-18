
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OwnerSection } from './components/OwnerSection';
import { Testimonials } from './components/Testimonials';
import { Branches } from './components/Branches';
import { Footer } from './components/Footer';
import { SecurityFeatures } from './components/SecurityFeatures';
import { Chatbot } from './components/Chatbot';
import { PROCESS_STEPS, STATS, FLEET_DETAILS } from './constants';

const StatsSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-brand-green text-[#f4f1e6] relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 striped-bg"></div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center">
      {STATS.map((stat, i) => (
        <div key={i} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
          <p className="font-serif text-3xl sm:text-5xl md:text-7xl mb-2 text-[#c5a47e]">{stat.value}</p>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-60">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

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
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
            alt="Fleet View"
            className="w-full h-full object-cover rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What are the delivery and insurance policies?", a: "We take full responsibility for your goods. We have basic insurance for every trip to make sure you have peace of mind." },
    { q: "Do you have trucks for hot weather?", a: "Yes, we have cool trucks for food and other items that need to stay out of the Rajasthan heat." },
    { q: "Can you move heavy machinery?", a: "Yes, we have large trailers that can carry big factory machines and heavy equipment safely." },
    { q: "How can I pay for the service?", a: "We accept Cash, UPI (GPay/PhonePe), and regular Bank Transfers after the job is done." }
  ];

  return (
    <section id="faq" className="py-16 md:py-32 px-6 md:px-12 bg-[#f4f1e6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          <div>
            <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Support</p>
            <h2 className="text-[#2d4133] font-serif text-3xl sm:text-5xl md:text-7xl leading-[1.1] mb-6 md:mb-8">Questions <br />You May Have</h2>
            <p className="text-gray-600 text-sm max-w-sm">
              If you have more questions, please call our office anytime and we will be happy to help you.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-[#2d4133] text-white p-8' : 'bg-white text-[#2d4133] p-6'} cursor-pointer hover:shadow-md border border-gray-100`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-semibold pr-8">{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                {openIndex === i && (
                  <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-lg">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'owner', 'services', 'testimonials', 'branches', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#c5a47e] selection:text-white">
      <Navbar activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <StatsSection />

        <SecurityFeatures />

        <section id="owner">
          <OwnerSection />
        </section>

        <ProcessSection />

        <section id="services">
          <Services />
        </section>

        <FleetShowcase />

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="branches">
          <Branches />
        </section>

        <FAQ />

        <LeadForm />
      </main>

      <footer id="contact">
        <Footer />
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
