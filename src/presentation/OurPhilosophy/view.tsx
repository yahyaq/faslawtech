'use client';

import Image from 'next/image';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useMemo } from 'react';
import KAFD1 from '@/assets/webp/KAFD1.webp';

export default function OurPhilosophyView() {
  const t = useTranslations('ourPhilosophy');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // ✅ Memoize translation cards to avoid re-renders
  const cards = useMemo(() => t.raw('cards') as { title: string; content: string }[], [t]);

  // ✅ Framer motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="ourPhilosophy"
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`relative min-h-screen py-24 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden text-white ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      {/* === Background Layer === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 🔧 Simplified subtle animation for better performance */}
        <LazyMotion features={domAnimation}>
          <m.div
            className="absolute inset-0"
            initial={{ opacity: 0.95, scale: 1 }}
            animate={{ opacity: [0.95, 1, 0.95] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={KAFD1}
              alt={t('backgroundAlt', { defaultValue: 'King Abdullah Financial District background' })}
              fill
              decoding="async"
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center select-none pointer-events-none"
              placeholder="blur"
              priority={false}
              quality={75} // ✅ Lowered quality slightly for mobile
              style={{
                transform: 'none',
              }}
            />
          </m.div>
        </LazyMotion>

        {/* === Overlay Gradients (optimized) === */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-[#111]/80" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-2xl rounded-full" />
      </div>

      {/* === Content === */}
      <LazyMotion features={domAnimation}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto text-center space-y-16 sm:space-y-20"
        >
          {/* === Section Title === */}
          <div>
            <motion.h2
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#d4af37] mb-4"
            >
              {t('heading')}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d682] mx-auto rounded-full origin-left"
            />
          </div>

          {/* === Cards === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-100">
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-md hover:bg-white/20 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500"
                style={{
                  willChange: 'transform',
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#d4af37] mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  {card.content}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </LazyMotion>
    </section>
  );
}
