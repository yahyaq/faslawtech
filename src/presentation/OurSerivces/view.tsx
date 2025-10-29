"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function OurServicesView() {
  const services = [
    {
      title: "Companies & Business Sector",
      desc: "From company setup to governance, mergers and acquisitions — we support organisations through every legal stage of growth.",
    },
    {
      title: "Commercial Franchise",
      desc: "Franchise agreement drafting and regulatory documentation aligned with local law and international standards.",
    },
    {
      title: "Contracts & Agreements",
      desc: "Drafting and reviewing MOUs, employment and commercial contracts to ensure clarity and legal protection.",
    },
    {
      title: "Litigation & Dispute Settlement",
      desc: "Representation in general & administrative courts, arbitration and mediation — delivering effective resolutions.",
    },
    {
      title: "Legal Consultations",
      desc: "Advisory across corporate, civil and regulatory domains — helping clients make informed, confident decisions.",
    },
    {
      title: "Wills & Real-Estate Settlement",
      desc: "Execution of wills, inheritance & real-estate settlements under Islamic law — providing fairness and clarity.",
    },
    {
      title: "Debt Collection & Execution",
      desc: "Swift recovery of financial claims, enforcement of court/arbitrator decisions and commercial notice execution.",
    },
    {
      title: "Intellectual Property Rights",
      desc: "Protection and registration of patents, trademarks and copyrights — safeguarding your brand and innovation.",
    },
  ];

  return (
    <section
      id="our-services"
      className="relative py-28 bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
        {/* Left Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1"
        >
          <p className="text-[#bfa14a] font-semibold mb-2 uppercase tracking-wide">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5d97f] mb-6 leading-tight drop-shadow-[0_0_10px_rgba(245,217,127,0.4)]">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-md">
            Our firm offers integrated legal services that combine precision, technology and integrity — empowering clients to navigate today’s complex legal landscape with confidence.
          </p>
        </motion.div>

        {/* Right Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10"
        >
          {services.map((service) => (
            <div key={service.title} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="rounded-full p-1 bg-[#bfa14a]/20 group-hover:bg-[#bfa14a]/40 transition-colors duration-300">
                  <Check className="w-5 h-5 text-[#f5d97f]" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#f5d97f] mb-1 group-hover:text-[#ffe89b] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade for smooth end */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
