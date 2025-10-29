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
  Scale,
} from "lucide-react";

export default function OurServicesView() {
  const services = [
    {
      title: "Companies & Business Sector",
      desc: "From company setup to governance, mergers, and acquisitions — we support organisations through every legal stage of growth.",
      icon: Building2,
    },
    {
      title: "Commercial Franchise",
      desc: "Franchise agreement drafting and regulatory documentation aligned with local law and international standards.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Contracts & Agreements",
      desc: "Drafting and reviewing MOUs, employment and commercial contracts to ensure clarity and legal protection.",
      icon: FileSignature,
    },
    {
      title: "Litigation & Dispute Settlement",
      desc: "Representation in general & administrative courts, arbitration and mediation — delivering effective resolutions.",
      icon: Gavel,
    },
    {
      title: "Legal Consultations",
      desc: "Advisory across corporate, civil and regulatory domains — helping clients make informed, confident decisions.",
      icon: BookOpenCheck,
    },
    {
      title: "Wills & Real-Estate Settlement",
      desc: "Execution of wills, inheritance & real-estate settlements under Islamic law — providing fairness and clarity.",
      icon: ScrollText,
    },
    {
      title: "Debt Collection & Execution",
      desc: "Swift recovery of financial claims, enforcement of court/arbitrator decisions and commercial notice execution.",
      icon: Landmark,
    },
    {
      title: "Intellectual Property Rights",
      desc: "Protection and registration of patents, trademarks and copyrights — safeguarding your brand and innovation.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section
      id="our-services"
      className="relative py-32 bg-gradient-to-b from-[#fffaf2] via-[#f4ecd4] to-[#e2d29d] text-[#2d240b] overflow-hidden"
    >
      {/* Smooth top transition from Licenses & Partners */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-[#fef8e8]/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Intro Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#bfa14a] font-semibold mb-3 uppercase tracking-widest">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#9b7b16] mb-6 leading-tight drop-shadow-[0_0_10px_rgba(155,123,22,0.25)]">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-[#4b3d16] text-lg leading-relaxed">
            Our firm provides integrated legal services that unite tradition, innovation, and precision — guiding businesses and individuals through complex legal landscapes with clarity and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(191,161,74,0.35)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${
                  i % 2 === 0
                    ? "from-[#ffffff]/90 to-[#fdf6e3]/90"
                    : "from-[#f9f3da]/90 to-[#f2e3aa]/80"
                } border border-[#d6c99d]/50 group transition-all duration-300 hover:border-[#bfa14a]/70 hover:bg-[#fffaf2]/90 backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className="absolute -top-5 left-6 bg-[#bfa14a]/25 p-2 rounded-full group-hover:bg-[#bfa14a]/45 transition-colors duration-300 shadow-[0_0_10px_rgba(191,161,74,0.2)]">
                  <Icon className="w-5 h-5 text-[#9b7b16]" strokeWidth={2.5} />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3 className="font-semibold text-xl text-[#9b7b16] mb-2 group-hover:text-[#bfa14a] transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#3a2d0a] text-sm leading-relaxed tracking-wide group-hover:text-[#1f1605] transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Warm radial glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(191,161,74,0.15),transparent_75%)] pointer-events-none" />

      {/* Soft transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#e2d29d]/80 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
