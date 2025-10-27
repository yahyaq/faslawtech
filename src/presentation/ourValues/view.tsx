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

  // subtle parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-2%', '4%'])

  return (
    <section
      id="ourValues"
      ref={ref}
      className="relative isolate py-28 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div style={{ y: bgY }} className="relative h-full w-full">
          <Image
            src={RiyadhSkyLines}
            alt="Riyadh skyline background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            // Make the image pop a bit more
            style={{ opacity: 0.72, filter: 'contrast(1.06) saturate(1.08)' }}
          />
        </motion.div>

        {/* Very subtle gold vignette (reduced strength so skyline is visible) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(80% 60% at 50% 20%, rgba(155,123,22,0.06), transparent 60%)',
          }}
        />
        {/* Lighter vertical fade so image shows through more */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf2]/55 via-[#fff7ea]/60 to-white/70" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/55 to-transparent" />
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
            className="relative rounded-3xl border border-[#e8dfc7]/70 bg-white/72 backdrop-blur-md p-8 sm:p-10
                       shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                       transition-all duration-300
                       hover:bg-white/85 hover:border-[#c5a227]
                       motion-reduce:transition-none"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.45, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mx-auto mb-6 h-20 w-20 relative"
            >
              <Image src={value.icon} alt={value.title} fill className="object-contain opacity-95" />
            </motion.div>

            <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">{value.title}</h3>
            <p className="text-gray-700 leading-relaxed">{value.description}</p>

            <span className="pointer-events-none absolute left-8 right-8 bottom-6 h-px bg-gradient-to-r from-transparent via-[#e8dfc7] to-transparent" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
