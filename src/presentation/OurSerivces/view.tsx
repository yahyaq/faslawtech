"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgCompanies from "@/assets/law-images/webp/legal-entities.webp";
import imgFranchise from "@/assets/law-images/webp/franchise.webp";
import imgContracts from "@/assets/law-images/webp/legal-drafting.webp";
import imgConsult from "@/assets/law-images/webp/legal-advice.webp";
import imgLitigation from "@/assets/law-images/webp/litigation.webp";
import imgWills from "@/assets/law-images/webp/happy-family.webp";
import imgDebt from "@/assets/law-images/webp/debt.webp";

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
            duration: 1.4,
            ease: "power2.out",
          }
        ).fromTo(
          text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=1"
        );

        // Parallax scroll
        gsap.to(img, {
          yPercent: 8,
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
    <section
      id="key-services"
      className="relative text-white overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#eae2c8]/30 to-[#0e0e0e]"
    >
      {/* Gentle transition from “Our Values” */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf7f2] via-[#d9ccaa]/50 to-transparent z-10 pointer-events-none" />

      {/* Decorative divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="h-[2px] bg-[#bfa14a] w-3/4 mx-auto mt-24 origin-left"
      />

      {/* Section Header */}
      <div className="text-center py-24 px-6 bg-gradient-to-b from-[#e8dec2]/30 via-[#1a1a1a]/80 to-[#111]">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#f5d97f] mb-4 drop-shadow-[0_0_10px_rgba(245,217,127,0.4)]">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 leading-relaxed text-lg">
          Empowering businesses and individuals through precision-driven legal
          expertise — from company formation to complex dispute resolution.
        </p>
      </div>

      {/* Service Panels */}
      {services.map((s, i) => (
        <div
          key={s.title}
          className="service-panel relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] overflow-hidden -mt-[1px]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={s.img}
              alt={s.title}
              fill
              placeholder="blur"
              className="object-cover panel-img scale-105 brightness-[0.95] contrast-[1.05]"
              loading={i < 2 ? "eager" : "lazy"}
              sizes="100vw"
            />

            {/* Softer vignette gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e]/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
          </div>

          {/* Text Block */}
          <div
            className={`panel-text relative z-10 max-w-3xl mx-auto px-8 py-10 md:py-12 rounded-3xl backdrop-blur-md bg-black/30 shadow-[0_0_30px_rgba(0,0,0,0.4)] ${
              i % 2 === 0
                ? "md:text-left md:ml-[8%]"
                : "md:text-right md:mr-[8%]"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#f5d97f] drop-shadow-[0_0_10px_rgba(245,217,127,0.5)] leading-snug">
              {s.title}
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {s.desc}
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.8 }}
              className={`h-[3px] bg-[#bfa14a] mt-6 rounded-full ${
                i % 2 === 0 ? "ml-0" : "ml-auto"
              }`}
            />
          </div>

          {/* Edge fades to keep images blended */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0e0e0e]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0e0e0e]/70 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* CTA */}
      <div className="text-center py-24 bg-gradient-to-t from-[#111] via-[#1a1a1a]/80 to-[#0e0e0e]/60">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="inline-flex items-center rounded-xl bg-[#bfa14a] px-10 py-4 text-lg text-black font-semibold shadow-[0_0_25px_rgba(191,161,74,0.4)] hover:shadow-[0_0_30px_rgba(191,161,74,0.6)] hover:bg-[#d8ba62] transition-all"
        >
          Schedule a Consultation
        </motion.a>
      </div>
    </section>
  );
}
