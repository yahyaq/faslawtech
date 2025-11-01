'use client'

import Image from 'next/image'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import KAFD1 from '@/assets/webp/KAFD1.webp'

export default function OurPhilosophyView() {
  const t = useTranslations('ourPhilosophy')
  const locale = useLocale()
  const isArabic = locale === 'ar' // ✅ detect Arabic locale

  // ✅ Detect mobile devices once on mount
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  // ✅ Load cards dynamically from translations
  const cards = t.raw('cards') as { title: string; content: string }[]

  // ✅ Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="ourPhilosophy"
      className="relative min-h-screen py-32 px-6 sm:px-10 lg:px-20 overflow-hidden text-white"
    >
      {/* === Background Layer === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {isMobile ? (
          <div className="absolute inset-0">
            <Image
              src={KAFD1}
              alt={t('backgroundAlt', {
                defaultValue: 'King Abdullah Financial District background',
              })}
              fill
              className="object-cover object-center select-none pointer-events-none"
              placeholder="blur"
              loading="lazy"
              decoding="async"
              priority={false}
              quality={75}
              sizes="100vw"
            />
          </div>
        ) : (
          <motion.div
            className="absolute inset-0 will-change-transform"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Image
              src={KAFD1}
              alt={t('backgroundAlt', {
                defaultValue: 'King Abdullah Financial District background',
              })}
              fill
              className="object-cover object-center select-none pointer-events-none"
              placeholder="blur"
              loading="lazy"
              decoding="async"
              priority={false}
            />
          </motion.div>
        )}

        {/* === Overlays === */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#111]/80" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-3xl rounded-full" />
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
          {/* === Section Title === */}
          <div>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold tracking-wide text-[#d4af37] mb-4"
            >
              {t('heading')}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className={`w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d682] mx-auto rounded-full ${
                isArabic ? 'origin-right' : 'origin-left'
              }`}
            />
          </div>

          {/* === Cards === */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-100 ${
              isMobile ? 'will-change-auto' : 'will-change-transform'
            }`}
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: i * (isMobile ? 0 : 0.3),
                  duration: isMobile ? 0.6 : 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-xl transition-all duration-500 ${
                  isMobile
                    ? 'hover:bg-white/10 hover:translate-y-0'
                    : 'hover:bg-white/20 hover:-translate-y-2'
                }`}
              >
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                  {card.title}
                </h3>
                <p className="leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </LazyMotion>
    </section>
  )
}
