
import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className="py-16 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start mb-16 md:mb-24">
          <div className="lg:w-1/3 w-full">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[#2d4133] font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
                COREX <br /> <span className="font-light">Transport Group</span>
              </h2>
            </div>
            <h3 className="text-[#2d4133] font-serif text-2xl md:text-4xl mb-4 leading-tight">Delivering Excellence, <br /> Connecting the World</h3>
            <div className="w-20 h-1 bg-[#2d4133] mt-4"></div>
          </div>

          <div className="lg:w-2/3 w-full space-y-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At Corex Transport Group, we are redefining the logistics landscape with precision, efficiency, and innovation. As a trusted partner in global trade, we provide end-to-end logistics solutions that ensure seamless movement of goods across borders. With a strong presence in ocean freight, air freight, land transport, and warehousing, we empower businesses with reliable, scalable, and cost-effective supply chain solutions.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-[#2d4133] mb-2">Our Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To provide world-class logistics solutions that optimize supply chains, enhance efficiency, and drive global connectivity. We are committed to delivering safe, secure, and timely transportation services that empower businesses to thrive in an ever-evolving marketplace.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-[#2d4133] mb-2">Our Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To be the global leader in logistics and supply chain solutions, recognized for innovation, reliability, and a customer-first approach. We aim to set new standards in logistics excellence while fostering sustainable and technology-driven advancements in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-[#2d4133] font-serif text-3xl md:text-5xl mb-4">Our Core Values</h3>
            <div className="w-16 h-[2px] bg-[#c5a47e] mx-auto"></div>
          </div>

          <div className="space-y-10 md:space-y-12 max-w-4xl mx-auto">
            {/* Dynamically imported or defined here for now since constants import might need adjustment if I used it directly in the previous step without importing */}
            {[
              {
                title: "1. Reliability & Integrity",
                description: "We operate with the highest level of professionalism and transparency, ensuring trust and dependability in every service we provide."
              },
              {
                title: "2. Innovation & Excellence",
                description: "By leveraging advanced technology and industry expertise, we continuously refine our logistics solutions to meet the evolving demands of global trade."
              },
              {
                title: "3. Customer-Centric Approach",
                description: "Our clients are at the core of everything we do. We tailor solutions to fit their specific needs, ensuring efficiency, cost-effectiveness, and seamless execution."
              },
              {
                title: "4. Security & Compliance",
                description: "With strict adherence to international logistics standards and regulations, we prioritize the security of cargo at every stage of the supply chain."
              },
              {
                title: "5. Sustainability & Responsibility",
                description: "We are committed to reducing our environmental footprint by integrating sustainable practices in our operations, from energy-efficient transport to eco-friendly warehousing solutions."
              }
            ].map((value, i) => (
              <div key={i} className="group">
                <h4 className="font-serif text-xl md:text-2xl text-[#2d4133] mb-3 group-hover:text-[#c5a47e] transition-colors">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm font-bold text-[#2d4133] mt-12 uppercase tracking-widest">
            Corex Transport Group – Moving the World, Delivering Excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
