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
  const colors = {
    gold: {
      50: "#FBF7E8",
      100: "#F6EBC4",
      200: "#F0DD9B",
      300: "#EACD6F",
      400: "#DFB93F",
      500: "#C8A128",
      600: "#AA8822",
      700: "#8E6E1C",
      800: "#5C4913",
      900: "#32270A",
    },
    stone: {
      50: "#FAF9F7",
      100: "#F3F1ED",
      200: "#E5E1DA",
      300: "#D4CEC5",
      400: "#BFB8AE",
      500: "#A49C90",
      600: "#8B8378",
      700: "#6F685E",
      800: "#4C4741",
      900: "#2E2A26",
    },
  };

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
      style={{
        position: "relative",
        padding: "8rem 0",
        background: `linear-gradient(to bottom, ${colors.gold[50]}, ${colors.gold[100]}, ${colors.gold[200]})`,
        overflow: "hidden",
      }}
    >
      {/* Subtle warm-greige glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(164,156,144,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 5rem auto",
          }}
        >
          <p
            style={{
              color: colors.gold[600],
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our Expertise
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              lineHeight: 1.2,
              color: colors.gold[700],
              fontWeight: 700,
              marginBottom: "1.5rem",
              textShadow: "0 1px 10px rgba(200,161,40,0.25)",
            }}
          >
            Comprehensive Legal Solutions
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: colors.stone[700],
            }}
          >
            We offer end-to-end legal expertise across sectors — blending
            precision, innovation, and deep legal understanding to help our
            clients achieve their goals confidently.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const fromColor =
              index % 2 === 0
                ? colors.stone[50]
                : colors.gold[50];
            const toColor =
              index % 2 === 0
                ? colors.stone[100]
                : colors.gold[100];

            return (
              <motion.div
                key={service.title}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 30px rgba(200,161,40,0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                style={{
                  position: "relative",
                  padding: "2rem",
                  borderRadius: "1.25rem",
                  background: `linear-gradient(to bottom right, ${fromColor} 95%, ${toColor} 100%)`,
                  border: `1px solid ${colors.gold[200]}`,
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(5px)",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "-1.5rem",
                    left: "1.5rem",
                    background: `${colors.gold[200]}90`,
                    padding: "0.75rem",
                    borderRadius: "50%",
                    boxShadow: "0 0 12px rgba(200,161,40,0.25)",
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={2.5}
                    style={{ color: colors.gold[700] }}
                  />
                </div>

                {/* Text */}
                <div style={{ marginTop: "1rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: colors.gold[700],
                      marginBottom: "0.5rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: colors.stone[700],
                      letterSpacing: "0.015em",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6rem",
          background: `linear-gradient(to top, ${colors.gold[200]}, transparent)`,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
