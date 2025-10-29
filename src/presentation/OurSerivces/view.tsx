"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BriefcaseBusiness,
  FileSignature,
  Gavel,
  BookOpenCheck,
  ScrollText,
  Landmark,
  BadgeCheck,
} from "lucide-react";

export default function OurServicesView() {
  const services = [
    { title: "Companies & Business Sector", desc: "From company setup to governance, mergers, and acquisitions — we support organisations through every legal stage of growth.", icon: Building2 },
    { title: "Commercial Franchise", desc: "Franchise agreement drafting and regulatory documentation aligned with local law and international standards.", icon: BriefcaseBusiness },
    { title: "Contracts & Agreements", desc: "Drafting and reviewing MOUs, employment and commercial contracts to ensure clarity and legal protection.", icon: FileSignature },
    { title: "Litigation & Dispute Settlement", desc: "Representation in general & administrative courts, arbitration and mediation — delivering effective resolutions.", icon: Gavel },
    { title: "Legal Consultations", desc: "Advisory across corporate, civil and regulatory domains — helping clients make informed, confident decisions.", icon: BookOpenCheck },
    { title: "Wills & Real-Estate Settlement", desc: "Execution of wills, inheritance & real-estate settlements under Islamic law — providing fairness and clarity.", icon: ScrollText },
    { title: "Debt Collection & Execution", desc: "Swift recovery of financial claims, enforcement of court/arbitrator decisions and commercial notice execution.", icon: Landmark },
    { title: "Intellectual Property Rights", desc: "Protection and registration of patents, trademarks and copyrights — safeguarding your brand and innovation.", icon: BadgeCheck },
  ];

  return (
    <section
      id="our-services"
      className="relative py-32 bg-gradient-to-b from-[#1a1a1a] via-[#181612] to-[#0f0e0c] text-white overflow-hidden"
    >
      {/* Smooth top transition from Licenses & Partners */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-[#fefaf0]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#d6b352] font-semibold mb-3 uppercase tracking-widest">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5d97f] mb-6 leading-tight drop-shadow-[0_0_12px_rgba(245,217,127,0.3)]">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our firm provides integrated legal services that unite tradition,
            innovation, and precision — guiding businesses and individuals through
            complex legal landscapes with clarity and confidence.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 25px rgba(191,161,74,0.4)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${
                  i % 2 === 0
                    ? "from-[#2a2720]/90 to-[#1c1a16]/90"
                    : "from-[#22201b]/90 to-[#16140f]/90"
                } border border-[#bfa14a]/20 group transition-all duration-300 hover:border-[#bfa14a]/50 hover:shadow-[0_0_20px_rgba(191,161,74,0.25)]`}
              >
                {/* Icon */}
                <div className="absolute -top-5 left-6 bg-[#bfa14a]/25 p-2 rounded-full group-hover:bg-[#bfa14a]/45 transition-colors duration-300 shadow-[0_0_10px_rgba(191,161,74,0.2)]">
                  <Icon className="w-5 h-5 text-[#f5d97f]" strokeWidth={2.5} />
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
            );
          })}
        </div>
      </div>

      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,161,74,0.08),transparent_80%)] pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0e0c] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
