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

export default function OurExpertiseView() {
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
      id="our-expertise"
      className="relative py-32 bg-gradient-to-b from-golden-50 via-golden-100 to-golden-200 overflow-hidden"
    >
      {/* Decorative blue-gold blend glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,111,163,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-golden-600 font-semibold uppercase tracking-[0.2em] mb-3">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-golden-700 leading-tight mb-6 drop-shadow-[0_1px_10px_rgba(200,161,40,0.25)]">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            We offer end-to-end legal expertise across sectors — blending
            precision, innovation, and deep legal understanding to help our
            clients achieve their goals confidently.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 6px 30px rgba(200,161,40,0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-golden-50/95 to-golden-100/90"
                    : "from-slate-50/95 to-slate-100/90"
                } border border-golden-200/60 hover:border-golden-400 transition-all duration-300`}
              >
                {/* Icon */}
                <div className="absolute -top-6 left-6 bg-golden-200/50 p-3 rounded-full shadow-[0_0_12px_rgba(200,161,40,0.2)] group-hover:bg-golden-400/60 transition-all duration-300">
                  <Icon
                    className="w-6 h-6 text-golden-700"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Text */}
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-golden-700 mb-2 group-hover:text-golden-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed tracking-wide group-hover:text-slate-900 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-golden-200 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
