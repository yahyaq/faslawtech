"use client";

import { Check } from "lucide-react";

export default function OurServicesView() {
  const services = [
    {
      title: "Companies & Business Sector",
      desc: "Company setup, governance, mergers, acquisitions, and bankruptcy management — ensuring compliance and smooth business operations.",
    },
    {
      title: "Commercial Franchise",
      desc: "Certified franchise brokerage offering agreement drafting and documentation aligned with Franchise Law and SME regulations.",
    },
    {
      title: "Intellectual Property Rights",
      desc: "Protect and register patents, trademarks, and copyrights — defending innovations and brand identity across markets.",
    },
    {
      title: "Contracts & Agreements",
      desc: "Drafting and reviewing MOUs, employment, and administrative contracts with legal precision to prevent disputes.",
    },
    {
      title: "Litigation & Dispute Settlement",
      desc: "Legal representation in courts and arbitration — providing mediation and resolution strategies for all dispute types.",
    },
    {
      title: "Legal Consultations",
      desc: "Comprehensive advisory services across corporate, civil, and regulatory matters to safeguard client interests.",
    },
    {
      title: "Wills & Real-Estate Settlement",
      desc: "Execution of wills and inheritance settlements under Islamic law, ensuring fairness and legal validity.",
    },
    {
      title: "Debt Collection & Execution",
      desc: "Swift recovery of debts, execution of court orders, and enforcement of commercial instruments through proper legal channels.",
    },
  ];

  return (
    <section className="relative py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
        {/* Left Intro Section */}
        <div className="col-span-1">
          <p className="text-indigo-600 font-semibold mb-2">
            Our Expertise
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We deliver strategic legal services that empower businesses,
            entrepreneurs, and individuals to operate with confidence.
            Our approach combines legal precision, ethical standards,
            and modern efficiency — all tailored to your unique goals.
          </p>
        </div>

        {/* Right Grid of Services */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {services.map((service) => (
            <div key={service.title} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-indigo-600" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
