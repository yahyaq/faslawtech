"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ---- Service Images ----
import imgCompanies from "@/assets/law-images/png/legal-entities.png";
import imgFranchise from "@/assets/law-images/png/franchise.png";
import imgContracts from "@/assets/law-images/png/legal-drafting.png";
import imgConsult from "@/assets/law-images/png/legal-advice.png";
import imgLitigation from "@/assets/law-images/png/litigation.jpeg";
import imgWills from "@/assets/law-images/png/happy-family.png";
import imgDebt from "@/assets/law-images/png/debt.png";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  title: string;
  desc: string;
  img: StaticImageData;
};

export default function KeyServicesView() {
  const services: Service[] = [
    {
      title: "Companies & Business Sector",
      desc:
        "From company setup to governance, mergers and acquisitions — we guide organizations through every legal stage of business development.",
      img: imgCompanies,
    },
    {
      title: "Commercial Franchise",
      desc:
        "Certified expertise in franchise law: drafting, compliance, and documentation to protect your brand and ensure regulatory clarity.",
      img: imgFranchise,
    },
    {
      title: "Contracts & Agreements",
      desc:
        "Meticulous drafting of MOUs, employment and commercial agreements. Every clause refined to prevent disputes and safeguard interests.",
      img: imgContracts,
    },
    {
      title: "Litigation & Dispute Settlement",
      desc:
        "We combine experience and strategy to resolve disputes through courts, arbitration, and mediation — delivering practical, just outcomes.",
      img: imgLitigation,
    },
    {
      title: "Legal Consultations",
      desc:
        "Expert guidance across corporate, civil, and regulatory domains — enabling informed, confident decisions for your business and personal matters.",
      img: imgConsult,
    },
    {
      title: "Wills, Endowments & Real-Estate Settlement",
      desc:
        "Faithful execution of wills and property settlements in compliance with Islamic law — ensuring fairness, legality, and peace of mind.",
      img: imgWills,
    },
    {
      title: "Debt Collection & Execution",
      desc:
        "Swift and strategic recovery of financial claims through court proceedings, arbitration awards, and commercial document enforcement.",
      img: imgDebt,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".service-panel");

      panels.forEach((panel) => {
        const text = panel.querySelector(".panel-text") as HTMLElement;
        const img = panel.querySelector(".panel-img") as HTMLElement;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
          img,
          { scale: 1.15, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        ).fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8"
        );

        // subtle parallax
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="key-services" className="relative bg-[#faf7f2] overflow-hidden">
      {/* Decorative transition divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="h-[2px] bg-[#9b7b16] w-3/4 mx-auto mt-20 origin-left"
      />

      {/* Header */}
      <div className="text-center py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-[#f0e4d2]">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#9b7b16] mb-4">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Expert legal services that merge tradition with technology — guiding
          clients through business, innovation, and justice.
        </p>
      </div>

      {/* Panels */}
      {services.map((s, i) => (
        <div
          key={s.title}
          className="service-panel relative flex flex-col md:flex-row items-center justify-center min-h-[75vh] md:min-h-[85vh] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={s.img}
              alt={s.title}
              fill
              placeholder="blur"
              className="object-cover panel-img"
              loading={i < 2 ? "eager" : "lazy"}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Text overlay */}
          <div
            className={`panel-text relative z-10 max-w-3xl mx-auto px-8 py-6 text-white rounded-2xl backdrop-blur-sm bg-black/30 shadow-lg ${
              i % 2 === 0
                ? "md:text-left md:ml-[10%]"
                : "md:text-right md:mr-[10%]"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#f3d37a] drop-shadow-[0_0_10px_rgba(155,123,22,0.5)]">
              {s.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              {s.desc}
            </p>

            {/* Progress Indicator (optional aesthetic) */}
            <div className="mt-6 text-sm text-white/70">
              {i + 1} / {services.length}
            </div>
          </div>

          {/* Bottom decorative gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#9b7b16]/30 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* CTA */}
      <div className="text-center py-24 bg-gradient-to-t from-[#f0e4d2] to-[#faf7f2]">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="inline-flex items-center rounded-lg bg-[#9b7b16] px-8 py-4 text-white font-semibold shadow hover:bg-[#7e6412] transition-all"
        >
          Schedule a Consultation
        </motion.a>
      </div>
    </section>
  );
}
