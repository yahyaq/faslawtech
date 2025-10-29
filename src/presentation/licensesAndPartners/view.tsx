"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Import optimized images
import ministryOfJustice from "@/assets/logos/ministry-of-justice.png";
import monshaat from "@/assets/logos/monshaat.png";
import saip from "@/assets/logos/SAIP.svg";
import sba from "@/assets/logos/SBA.svg";
import bog from "@/assets/logos/BOG-colored.png";
import franchiseCenter from "@/assets/logos/Franchise-Center.svg";
import ministryOfCommerce from "@/assets/logos/ministry-of-commerce.svg";
import ministryOfInvestment from "@/assets/logos/Ministry-of-Investment.svg";
import humanResource from "@/assets/logos/human-resource.svg";

export default function View() {
  const logos = [
    { src: ministryOfJustice, alt: "Ministry of Justice" },
    { src: monshaat, alt: "Monsha'at" },
    { src: saip, alt: "Saudi Authority for Intellectual Property" },
    { src: sba, alt: "Saudi Bar Association" },
    { src: bog, alt: "Board of Grievances" },
    { src: franchiseCenter, alt: "Franchise Center" },
    { src: ministryOfCommerce, alt: "Ministry of Commerce" },
    { src: ministryOfInvestment, alt: "Ministry of Investment" },
    { src: humanResource, alt: "Human Resources Development Fund" },
  ];

  // Duplicate array for infinite loop
  const logosLoop = [...logos, ...logos];

  return (
    <section
      id="licenses-partners"
      className="relative py-24 bg-gradient-to-b from-[#faf7f2] via-[#e9dec0]/40 to-[#1a1a1a]/90 overflow-hidden"
    >
      {/* Top transition overlay */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#faf7f2] via-[#d8c99b]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#bfa14a] font-semibold mb-2 uppercase tracking-wider"
        >
          Licenses & Partners
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-14"
        >
          Proudly Accredited & Partnered With
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {logosLoop.map((logo, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-36 h-20 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain brightness-[1.2] contrast-[1.1] saturate-[1.05] drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_0_15px_rgba(191,161,74,0.3)] transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fades for Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
