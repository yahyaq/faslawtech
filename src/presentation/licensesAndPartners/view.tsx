"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ministryOfJustice from "@/assets/logos/ministry-of-justice-Photoroom.png";
import monshaat from "@/assets/logos/monshaat-Photoroom.png";
import saip from "@/assets/logos/SAIP-1.svg";
import sba from "@/assets/logos/SBA.svg";
import bog from "@/assets/logos/BOG-colored-Photoroom-1.svg";
import franchiseCenter from "@/assets/logos/Franchise-Center.svg";
import ministryOfCommerce from "@/assets/logos/ministry-of-commerce-1.svg";
import ministryOfInvestment from "@/assets/logos/Ministry-of-Investment.svg";
import humanResource from "@/assets/logos/human-resource.svg";

export default function LicensesPartnersView() {
  const colors = {
    gold: "#C8A128",
    stone: "#FAF9F7",
    dark: "#1E1E1E",
  };

  // Custom logo sizes for visual balance
  const logos = [
    { src: ministryOfJustice, alt: "Ministry of Justice", scale: 0.85 },
    { src: monshaat, alt: "Monsha'at", scale: 0.9 },
    { src: saip, alt: "Saudi Authority for Intellectual Property", scale: 1.4 },
    { src: sba, alt: "Saudi Bar Association", scale: 1.05 },
    { src: bog, alt: "Board of Grievances", scale: 0.80 },
    { src: franchiseCenter, alt: "Franchise Center", scale: 1.2 },
    { src: ministryOfCommerce, alt: "Ministry of Commerce", scale: 1.1 },
    { src: ministryOfInvestment, alt: "Ministry of Investment", scale: 1.05 },
    { src: humanResource, alt: "Human Resources Development Fund", scale: 1.0 },
  ];

  const duplicated = [...logos, ...logos]; // smooth looping

  return (
    <section
      id="licenses-partners"
      style={{
        backgroundColor: colors.stone,
        padding: "6rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            letterSpacing: "0.05em",
            color: colors.dark,
            marginBottom: "3rem",
          }}
        >
          Trusted by leading institutions and authorities
        </h2>

        {/* Carousel Wrapper */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Animated Carousel */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              width: "max-content",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }}
          >
            {duplicated.map((logo, i) => (
              <div
                key={i}
                style={{
                  width: "8rem",
                  height: "5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120 * logo.scale}
                  height={80 * logo.scale}
                  style={{
                    objectFit: "contain",
                    transform: `scale(${logo.scale})`,
                    opacity: 0.95,
                    transition:
                      "transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease",
                  }}
                  className="logo-item"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .logo-item:hover {
          transform: scale(1.1);
          filter: brightness(1.05)
            drop-shadow(0 0 8px rgba(200, 161, 40, 0.25));
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
