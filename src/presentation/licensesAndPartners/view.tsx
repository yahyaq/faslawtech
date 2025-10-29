"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

  const logosLoop = [...logos, ...logos];

  return (
    <section
      id="licenses-partners"
      className="relative py-28 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#9b7b16] font-semibold mb-2 uppercase tracking-wider drop-shadow-sm"
        >
          Licenses & Partners
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-[#2c2303] mb-14"
        >
          Proudly Accredited & Partnered With
        </motion.h2>

        {/* Logos Carousel */}
        <div className="relative overflow-hidden backdrop-blur-sm bg-white/40 rounded-3xl py-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
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
                    className="object-contain brightness-[1.1] contrast-[1.05] saturate-[1.05] hover:drop-shadow-[0_0_12px_rgba(155,123,22,0.3)] transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gentle fade into dark next section */}
      <div className="" />
    </section>
  );
}
