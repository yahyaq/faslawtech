'use client';

import Image from 'next/image';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import KAFD1 from '@/assets/webp/KAFD1.webp';

export default function OurPhilosophyView() {
  const t = useTranslations('ourPhilosophy');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // ✅ Load cards dynamically from translations
  const cards = t.raw('cards') as { title: string; content: string }[];

  // ✅ Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="ourPhilosophy"
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`relative min-h-screen py-32 px-6 sm:px-10 lg:px-20 overflow-hidden text-white ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      {/* === Background Layer === */}
      <div className="absolute inset-0 -z-10 overflow-hidden will-change-transform">
        <motion.div
          className="absolute inset-0"
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
            alt={t('backgroundAlt', { defaultValue: 'King Abdullah Financial District background' })}
            fill
            className="object-cover object-center select-none pointer-events-none"
            placeholder="blur"
            loading="lazy"
            priority={false}
          />
        </motion.div>

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
              className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d682] mx-auto rounded-full origin-left"
            />
          </div>

          {/* === Cards === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-100">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{
                  delay: i * 0.3,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 will-change-transform"
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
  );
}
