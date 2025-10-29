"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function OurServicesView() {
  const services = [
    {
      title: "Companies & Business Sector",
      desc: "From company setup to governance, mergers, and acquisitions — we support organisations through every legal stage of growth.",
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
      className="relative py-32 bg-gradient-to-b from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-white overflow-hidden"
    >
      {/* Smooth transition divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf7f2]/80 via-[#d6caa8]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#bfa14a] font-semibold mb-3 uppercase tracking-widest">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5d97f] mb-6 leading-tight drop-shadow-[0_0_15px_rgba(245,217,127,0.4)]">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our firm provides integrated legal services that unite tradition,
            innovation, and precision — guiding businesses and individuals through
            complex legal landscapes with clarity and confidence.
          </p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-[#bfa14a] w-24 mx-auto mt-8 origin-left"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(191,161,74,0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${
                i % 2 === 0
                  ? "from-[#1a1a1a]/80 to-[#252525]/60"
                  : "from-[#222]/70 to-[#151515]/60"
              } border border-[#bfa14a]/10 group transition-all duration-300 hover:border-[#bfa14a]/40`}
            >
              {/* Icon */}
              <div className="absolute -top-5 left-6 bg-[#bfa14a]/20 p-2 rounded-full shadow-[0_0_10px_rgba(191,161,74,0.3)] group-hover:bg-[#bfa14a]/40 transition-colors duration-300">
                <Check className="w-5 h-5 text-[#f5d97f]" strokeWidth={3} />
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-semibold text-xl text-[#f5d97f] mb-2 group-hover:text-[#ffe89b] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed tracking-wide group-hover:text-gray-100 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,161,74,0.06),transparent_70%)] pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
