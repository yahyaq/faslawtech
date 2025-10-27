// components/views/KeyServicesView.tsx
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Companies and Business Sector",
    description: [
      "Set up companies of all types (national/foreign/mixed) until they acquire legal status.",
      "Register and protect intellectual property rights (trade names/trademarks/patents).",
      "Manage governance processes, mergers, and acquisitions.",
      "Handle bankruptcy and liquidation procedures.",
      "Provide legal support, representation, and consultancy services.",
    ],
  },
  {
    title: "Commercial Franchise",
    description: [
      "Draft franchise agreements to ensure the proper application of Franchise Law and its executive regulations.",
      "Document franchise agreements at the Commercial Franchise Centre.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    description: [
      "Register patents and copyrights.",
      "Register trademarks.",
      "Object and dispute the use and registration of trademarks.",
    ],
  },
  {
    title: "Formulation of Contracts and Agreements",
    description: [
      "Draft, review, and amend memorandums of understanding, commercial contracts, agreements, employment contracts, and both private and public entity regulations.",
    ],
  },
  {
    title: "Litigation and Dispute Settlement",
    description: [
      "Resolve disputes through alternative methods such as mediation, arbitration, negotiation, and conciliation.",
      "Provide legal representation before general and administrative courts at all levels.",
      "Represent clients before quasi-judicial committees.",
    ],
  },
  {
    title: "Legal Consultations",
    description: [
      "Offer legal opinions and consultations across various fields to protect clients’ rights and interests.",
    ],
  },
  {
    title: "Wills, Endowments, and Real-Estate Settlement",
    description: [
      "Execute wills and endowments in compliance with Islamic law.",
      "Handle Real Estate settlement, inheritance, and division of assets in a legitimate and fair manner.",
    ],
  },
  {
    title: "Debt Collection and Execution",
    description: [
      "File financial claims in preliminary courts.",
      "Execute court orders and arbitrators’ decisions.",
      "Execute commercial documents (checks, promissory notes, bills of exchange).",
      "Execute financial debt declarations issued by notaries.",
    ],
  },
];

export default function View() {
  return (
    <section
      id="key-services"
      className="relative bg-gradient-to-b from-[#faf7f2] to-[#f0e4d2] py-24 overflow-hidden"
    >
      {/* Background abstract gold pattern (for next step integration) */}
      <div className="absolute inset-0 bg-[url('/textures/abstract-gold.webp')] bg-cover bg-center opacity-20" />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center text-[#9b7b16] mb-10"
        >
          Key Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-700 mb-16 leading-relaxed"
        >
          Our firm provides a variety of legal services that help create a successful business
          environment. These services assist companies, entrepreneurs, investors, and individuals in
          achieving their goals while safeguarding their rights and interests.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 border border-[#e8d9b9] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm leading-relaxed">
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
