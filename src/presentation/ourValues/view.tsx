'use client'

import Image from 'next/image'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useRef, useMemo } from 'react'

// Icons
import IconPrivacy from '@/assets/icons/value-privacy.png'
import IconProfessionalism from '@/assets/icons/value-professionalism.png'
import IconQuality from '@/assets/icons/value-quality.png'
import IconResponsibility from '@/assets/icons/value-responsibility.png'
import IconTransparency from '@/assets/icons/value-transparency.png'
import IconTrust from '@/assets/icons/value-trust.png'

// Background
import RiyadhSkyLines from '@/assets/webp/RiyadhSkyLines.webp'

// ✅ Memoized static values (no reallocation on re-renders)
const values = [
  {
    title: 'Privacy & Confidentiality',
    icon: IconPrivacy,
    description:
      'We ensure the utmost confidentiality in all legal matters, safeguarding our clients’ information and trust.',
  },
  {
    title: 'Professionalism & Commitment',
    icon: IconProfessionalism,
    description:
      'We are dedicated to the highest standards of legal professionalism and unwavering commitment to our clients.',
  },
  {
    title: 'Quality & Excellence',
    icon: IconQuality,
    description:
      'We deliver precise and effective legal solutions through continuous improvement and attention to detail.',
  },
  {
    title: 'Social & Legal Responsibility',
    icon: IconResponsibility,
    description:
      'We uphold justice and contribute positively to the community, fostering legal awareness and ethical practice.',
  },
  {
    title: 'Transparency & Integrity',
    icon: IconTransparency,
    description:
      'We maintain open communication and honesty in every step of our legal services.',
  },
  {
    title: 'Trust & Credibility',
    icon: IconTrust,
    description:
      'We build long-term client relationships grounded in mutual respect, trust, and proven credibility.',
  },
]

// ✅ Variants declared outside render for reusability
const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

export default function View() {
  const ref = useRef<HTMLDivElement | null>(null)

  // ✅ Precompute a static stagger delay map
  const stagger = useMemo(() => values.map((_, i) => i * 0.1), [])

  return (
    <section
      id="ourValues"
      ref={ref}
      className="relative isolate py-28 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-[#fffaf2]"
    >
      {/* === Optimized Static Background === */}
      <div className="absolute inset-0 -z-10 pointer-events-none will-change-transform">
        <div className="relative h-full w-full">
          <Image
            src={RiyadhSkyLines}
            alt="Riyadh skyline background"
            fill
            loading="lazy"
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center opacity-75 select-none pointer-events-none"
            style={{ filter: 'contrast(1.1) saturate(1.05)' }}
          />
        </div>

        {/* ✅ Single composite overlay instead of multiple layers */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(247,241,217,0.7),rgba(233,224,185,0.6))]" />
      </div>

      <LazyMotion features={domAnimation}>
        {/* === Header === */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#9b7b16] tracking-tight"
          >
            Our Values
          </motion.h2>

          <div className="mt-4 mb-6 flex justify-center">
            <span className="inline-block h-1 w-24 rounded-full bg-[#9b7b16]" />
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            These are the principles that guide our work, shape our firm, and
            underpin the trust we build with all our clients.
          </motion.p>
        </div>

        {/* === Value Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{
                delay: stagger[index],
                duration: 0.55,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative rounded-3xl border border-[#e8dfc7]/70 bg-white/75 backdrop-blur-md p-8 sm:p-10
                         shadow-[0_10px_25px_-10px_rgba(0,0,0,0.15)]
                         hover:bg-white/90 hover:border-[#c5a227]
                         transition-transform duration-300 will-change-transform"
            >
              <div className="mx-auto mb-6 h-20 w-20 relative">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  loading="lazy"
                  className="object-contain opacity-95 select-none"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </LazyMotion>
    </section>
  )
}
