'use client'

import Image, { StaticImageData } from 'next/image'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { memo, useMemo, useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

// Icons
import IconPrivacy from '@/assets/icons/value-privacy.png'
import IconProfessionalism from '@/assets/icons/value-professionalism.png'
import IconQuality from '@/assets/icons/value-quality.png'
import IconResponsibility from '@/assets/icons/value-responsibility.png'
import IconTransparency from '@/assets/icons/value-transparency.png'
import IconTrust from '@/assets/icons/value-trust.png'

// Background
import RiyadhSkyLines from '@/assets/webp/RiyadhSkyLines.webp'

// ✅ Icon mapping
const icons = [
  IconPrivacy,
  IconProfessionalism,
  IconQuality,
  IconResponsibility,
  IconTransparency,
  IconTrust,
]

// ✅ Motion variants (matching “good code”)
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

// ✅ Memoized Value Card (matches fade-in smoothness)
const ValueCard = memo(
  ({
    value,
    delay,
    icon,
    isMobile,
  }: {
    value: { title: string; description: string }
    delay: number
    icon: StaticImageData
    isMobile: boolean
  }) => (
    <motion.article
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: isMobile ? 0 : delay,
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative rounded-3xl border border-[#e8dfc7]/70 bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]
        ${isMobile ? 'hover:bg-white/75' : 'hover:bg-white/85 hover:border-[#c5a227] hover:-translate-y-1'}
        transition-transform duration-500 ${
          isMobile ? 'will-change-auto' : 'will-change-transform'
        }`}
    >
      <div className="mx-auto mb-6 h-20 w-20 relative shrink-0">
        <Image
          src={icon}
          alt={value.title}
          fill
          loading="lazy"
          decoding="async"
          quality={isMobile ? 70 : 90}
          sizes={isMobile ? '(max-width: 768px) 80px' : '100px'}
          className="object-contain opacity-95 select-none"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">
        {value.title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{value.description}</p>
    </motion.article>
  )
)
ValueCard.displayName = 'ValueCard'

export default function OurValuesView() {
  const t = useTranslations('ourValues')
  const locale = useLocale()
  const isArabic = locale === 'ar'

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  // ✅ Fetch values and stagger delays
  const values = t.raw('values') as { title: string; description: string }[]
  const stagger = useMemo(() => values.map((_, i) => i * 0.3), [values])

  return (
    <section
      id="ourValues"
      className="relative isolate py-24 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-[#fffaf2] text-[#111]"
    >
      {/* === Background Layer === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src={RiyadhSkyLines}
          alt="Riyadh skyline background"
          fill
          priority={false}
          placeholder="blur"
          sizes={isMobile ? '(max-width: 768px) 100vw' : '100vw'}
          quality={isMobile ? 70 : 90}
          className={`object-cover object-center select-none ${
            isMobile ? 'opacity-70' : 'opacity-75'
          }`}
          style={{
            filter: isMobile
              ? 'contrast(1.05) saturate(1.02)'
              : 'contrast(1.08) saturate(1.05)',
          }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(247,241,217,0.75),rgba(233,224,185,0.6))]" />
      </div>

      {/* === Content === */}
      <LazyMotion features={domAnimation}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto text-center space-y-20"
        >
          {/* === Section Header === */}
          <div>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold tracking-wide text-[#9b7b16] mb-4"
            >
              {t('heading')}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className={`w-24 h-1 bg-gradient-to-r from-[#9b7b16] to-[#c5a227] mx-auto rounded-full ${
                isArabic ? 'origin-right' : 'origin-left'
              }`}
            />

            <motion.p
              variants={fadeIn}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mt-6"
            >
              {t('intro')}
            </motion.p>
          </div>

          {/* === Value Grid === */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto ${
              isMobile ? 'will-change-auto' : 'will-change-transform'
            }`}
          >
            {values.map((value, i) => (
              <ValueCard
                key={`${value.title}-${i}`}
                value={value}
                icon={icons[i]}
                delay={stagger[i]}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.div>
      </LazyMotion>
    </section>
  )
}
