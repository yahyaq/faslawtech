// components/views/KeyServicesView.tsx
"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ---- Static image imports (place your files under /src/assets/law-images) ----
import imgCompanies from "@/assets/law-images/legal-entities.jpg";
import imgFranchise from "@/assets/law-images/franchise.jpg";
import imgContracts from "@/assets/law-images/legal-drafting.jpg";
import imgConsult from "@/assets/law-images/legal-advice.jpg";
import imgLitigation from "@/assets/law-images/litigation.jpg";
import imgWills from "@/assets/law-images/happy-family.jpg";
import imgDebt from "@/assets/law-images/debt.jpg";

// Optional: if you add an IP image later, import it here
// import imgIP from "@/assets/law-images/intellectual-property.jpg";

// -----------------------------------------------------------------------------

type Service = {
  title: string;
  bullets: string[];
  img: StaticImageData;
  // If you later add a "deep link" per service, add href?: string
};

// Accessibility: reduced-motion
function usePrefersReducedMotion() {
  const query = useMemo(() => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null), []);
  const prefers = query?.matches ?? false;
  useEffect(() => {
    const handler = () => {};
    query?.addEventListener?.("change", handler);
    return () => query?.removeEventListener?.("change", handler);
  }, [query]);
  return prefers;
}

export default function View() {
  // Register GSAP plugins once on client
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Services content (from your PDF)
  const services: Service[] = [
    {
      title: "Companies & Business Sector",
      bullets: [
        "Company setup (national/foreign/mixed) to legal status",
        "IP registration (trade names, trademarks, patents)",
        "Governance, M&A, bankruptcy & liquidation",
        "Legal support, representation & consultancy",
      ],
      img: imgCompanies,
    },
    {
      title: "Commercial Franchise",
      bullets: [
        "Draft franchise agreements aligned with law & regulations",
        "Document agreements at the Commercial Franchise Centre",
      ],
      img: imgFranchise,
    },
    {
      title: "Intellectual Property Rights",
      bullets: [
        "Register patents & copyrights",
        "Register trademarks",
        "Object to and dispute trademark use/registration",
      ],
      // img: imgIP, // add when available
      img: imgContracts, // temporary visual; replace with dedicated IP image if you add one
    },
    {
      title: "Contracts & Agreements",
      bullets: [
        "Draft/review MOUs, commercial & employment contracts",
        "Draft/adapt regulations for private & public entities",
      ],
      img: imgContracts,
    },
    {
      title: "Litigation & Dispute Settlement",
      bullets: [
        "ADR: mediation, arbitration, negotiation, conciliation",
        "Representation before general & administrative courts",
        "Representation before quasi-judicial committees",
      ],
      img: imgLitigation,
    },
    {
      title: "Legal Consultations",
      bullets: [
        "Legal opinions & consultations across various fields",
        "Focus on protecting clients’ rights & interests",
      ],
      img: imgConsult,
    },
    {
      title: "Wills, Endowments & Real-Estate Settlement",
      bullets: [
        "Execute wills & endowments per Islamic law",
        "Real-estate settlement, inheritance & asset division",
      ],
      img: imgWills,
    },
    {
      title: "Debt Collection & Execution",
      bullets: [
        "File financial claims in preliminary courts",
        "Execute court/arbitrator decisions & commercial docs",
        "Execute notary-issued debt declarations",
      ],
      img: imgDebt,
    },
  ];

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || prefersReducedMotion) return;

      // Panels: fade/slide in, image parallax, subtle scale
      const panels = gsap.utils.toArray<HTMLElement>(".ks-panel");
      panels.forEach((panel, idx) => {
        const image = panel.querySelector(".ks-image") as HTMLElement | null;
        const textBox = panel.querySelector(".ks-text") as HTMLElement | null;
        const bullets = panel.querySelectorAll(".ks-bullet");

        // panel entrance
        gsap.from(textBox, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });

        // stagger bullets
        gsap.from(bullets, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: panel,
            start: "top 68%",
          },
        });

        // image parallax + scale
        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -8, scale: 0.98 },
            {
              yPercent: 8,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Detect RTL from <html dir="rtl"> or fallback to LTR
  const isRTL =
    typeof document !== "undefined"
      ? document?.documentElement?.getAttribute("dir") === "rtl"
      : false;

  return (
    <section
      ref={sectionRef}
      id="key-services"
      className="relative overflow-hidden bg-gradient-to-b from-[#faf7f2] to-[#f0e4d2]"
    >
      {/* Title block */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-semibold text-[#9b7b16]"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-gray-700 mt-3"
        >
          A comprehensive suite of legal solutions for companies, investors, and individuals — delivered with precision and discretion.
        </motion.p>
      </div>

      {/* Panels */}
      <div className="space-y-20 md:space-y-28">
        {services.map((s, i) => {
          // Alternate layout, but mirror when RTL
          const imgLeft = (i % 2 === 0) !== isRTL;
          return (
            <div
              key={s.title}
              className="ks-panel container mx-auto px-6 md:px-12 lg:px-20"
            >
              <div
                className={[
                  "relative grid items-center gap-8 md:gap-12",
                  "md:grid-cols-12",
                ].join(" ")}
              >
                {/* Image */}
                <div
                  className={[
                    "relative ks-image h-[40vh] md:h-[64vh] rounded-2xl overflow-hidden shadow-md md:col-span-7",
                    imgLeft ? "order-1" : "order-2 md:col-start-6",
                  ].join(" ")}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {/* soft overlay for contrast */}
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                {/* Text */}
                <div
                  className={[
                    "ks-text md:col-span-5",
                    imgLeft ? "order-2 md:col-start-8" : "order-1",
                  ].join(" ")}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#9b7b16]">
                    {s.title}
                  </h3>
                  <div className="mt-2 h-1 w-28 rounded-full bg-[#9b7b16]" />
                  <ul className="mt-5 space-y-2 text-gray-800">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="ks-bullet flex items-start gap-2">
                        <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#9b7b16]" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section CTA (no “Learn more” per your request; simple contact anchor) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-[#9b7b16] px-6 py-3 text-white font-medium shadow hover:bg-[#7e6412] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
