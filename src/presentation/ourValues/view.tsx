'use client';

import Image, { StaticImageData } from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { memo, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';

// Icons
import IconPrivacy from '@/assets/icons/value-privacy.png';
import IconProfessionalism from '@/assets/icons/value-professionalism.png';
import IconQuality from '@/assets/icons/value-quality.png';
import IconResponsibility from '@/assets/icons/value-responsibility.png';
import IconTransparency from '@/assets/icons/value-transparency.png';
import IconTrust from '@/assets/icons/value-trust.png';

// Background
import RiyadhSkyLines from '@/assets/webp/RiyadhSkyLines.webp';

// ✅ Icon mapping (linked by index)
const icons = [
  IconPrivacy,
  IconProfessionalism,
  IconQuality,
  IconResponsibility,
  IconTransparency,
  IconTrust,
];

// ✅ Motion variants declared outside to prevent recreation
const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Memoized card component (isolates re-renders)
const ValueCard = memo(
  ({
    value,
    delay,
    icon,
  }: {
    value: { title: string; description: string };
    delay: number;
    icon: StaticImageData;
  }) => (
    <m.article
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative rounded-3xl border border-[#e8dfc7]/70 bg-white/70 backdrop-blur-md p-8 sm:p-10
                 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]
                 hover:bg-white/85 hover:border-[#c5a227]
                 transition-transform duration-300 will-change-transform"
    >
      <div className="mx-auto mb-6 h-20 w-20 relative shrink-0">
        <Image
          src={icon}
          alt={value.title}
          fill
          loading="lazy"
          decoding="async"
          className="object-contain opacity-95 select-none"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#9b7b16] mb-3">{value.title}</h3>
      <p className="text-gray-700 leading-relaxed">{value.description}</p>
    </m.article>
  )
);
ValueCard.displayName = 'ValueCard';

export default function OurValuesView() {
  const t = useTranslations('ourValues');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // ✅ Fetch values from translations
  const values = t.raw('values') as { title: string; description: string }[];

  // ✅ Generate staggered animation delays
  const stagger = useMemo(() => values.map((_, i) => i * 0.1), [values]);

  return (
    <section
      id="ourValues"
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`relative isolate py-24 sm:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-[#fffaf2] ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      {/* === Optimized Background === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src={RiyadhSkyLines}
          alt="Riyadh skyline background"
          fill
          priority={false}
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center opacity-75 select-none"
          style={{ filter: 'contrast(1.08) saturate(1.05)' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(247,241,217,0.75),rgba(233,224,185,0.6))]" />
      </div>

      <LazyMotion features={domAnimation}>
        {/* === Section Header === */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <m.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#9b7b16] tracking-tight"
          >
            {t('heading')}
          </m.h2>

          <div className="mt-4 mb-6 flex justify-center">
            <span className="inline-block h-1 w-24 rounded-full bg-[#9b7b16]" />
          </div>

          <m.p
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            {t('intro')}
          </m.p>
        </div>

        {/* === Value Grid === */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto"
          role="list"
        >
          {values.map((value, i) => (
            <ValueCard
              key={`${value.title}-${i}`}
              value={value}
              icon={icons[i]}
              delay={stagger[i]}
            />
          ))}
        </div>
      </LazyMotion>
    </section>
  );
}
