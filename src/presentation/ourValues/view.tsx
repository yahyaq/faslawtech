'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Icons
import IconPrivacy from '@/assets/icons/value-privacy.png'
import IconProfessionalism from '@/assets/icons/value-professionalism.png'
import IconQuality from '@/assets/icons/value-quality.png'
import IconResponsibility from '@/assets/icons/value-responsibility.png'
import IconTransparency from '@/assets/icons/value-transparency.png'
import IconTrust from '@/assets/icons/value-trust.png'

// Background
import RiyadhSkyLines from '@/assets/pngs/RiyadhSkyLines.png'

const values = [
  { title: 'Privacy & Confidentiality', icon: IconPrivacy, description: 'We ensure the utmost confidentiality in all legal matters, safeguarding our clients’ information and trust.' },
  { title: 'Professionalism & Commitment', icon: IconProfessionalism, description: 'We are dedicated to the highest standards of legal professionalism and unwavering commitment to our clients.' },
  { title: 'Quality & Excellence', icon: IconQuality, description: 'We deliver precise and effective legal solutions through continuous improvement and attention to detail.' },
  { title: 'Social & Legal Responsibility', icon: IconResponsibility, description: 'We uphold justice and contribute positively to the community, fostering legal awareness and ethical practice.' },
  { title: 'Transparency & Integrity', icon: IconTransparency, description: 'We maintain open communication and honesty in every step of our legal services.' },
  { title: 'Trust & Credibility', icon: IconTrust, description: 'We build long-term client relationships grounded in mutual respect, trust, and proven credibility.' },
]

export default function View() {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <section
      id="ourValues"
      ref={ref}
      className="relative isolate py-28 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-[#fffaf2]"
    >
      {/* Fixed Background (shared with Licenses & Partners) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          style={{ y: bgY }}
          className="relative h-full w-full bg-fixed"
        >
          <Image
            src={RiyadhSkyLines}
            alt="Riyadh skyline background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.75, filter: 'contrast(1.1) saturate(1.05)' }}
          />
        </motion.div>

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#f7f1d9]/70 to-[#e9e0b9]/60" />
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-[#9b7b16] tracking-tight"
        >
          Our Values
        </motion.h2>
        <div className="mt-4 mb-6 flex justify-center">
          <span className="inline-block h-1 w-24 rounded-full bg-[#9b7b16]" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          These are the principles that guide our work, shape our firm, and underpin
          the trust we build with all our clients.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {values.map((value, index) => (
          <motion.article
            key={value.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl border border-[#e8dfc7]/70 bg-white/75 backdrop-blur-md p-8 sm:p-10
                       shadow-[0_10px_25px_-10px_rgba(0,0,0,0.15)]
                       hover:bg-white/90 hover:border-[#c5a227]
                       transition-all duration-300"
          >
            <div className="mx-auto mb-6 h-20 w-20 relative">
              <Image src={value.icon} alt={value.title} fill className="object-contain opacity-95" />
            </div>
            <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">{value.title}</h3>
            <p className="text-gray-700 leading-relaxed">{value.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
