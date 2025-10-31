'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import JusticeImage from '@/assets/pngs/scalesOfJustice-Photoroom.png';

export default function View() {
  const t = useTranslations('aboutUs');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section
      id="aboutUs"
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`relative bg-gradient-to-br from-white via-[#fffaf2] to-[#fdf8ee] py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24 overflow-hidden ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      {/* Static background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,161,40,0.06),transparent_70%)]"></div>

      <div
        className={`mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 ${
          isArabic ? 'md:grid-cols-[1fr_1fr] md:direction-rtl' : ''
        }`}
      >
        {/* === Left: Text === */}
        <div className={`${isArabic ? 'order-1' : 'order-2'} md:order-1`}>
          {/* Heading */}
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl sm:text-4xl font-bold text-[#9b7b16] mb-6 flex items-center"
          >
            {!isArabic && (
              <span className="inline-block w-10 h-1 bg-[#9b7b16] mr-3 rounded-full"></span>
            )}
            {t('heading')}
            {isArabic && (
              <span className="inline-block w-10 h-1 bg-[#9b7b16] ml-3 rounded-full"></span>
            )}
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            {/* Paragraph 1 */}
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              {t.rich('paragraph1', {
              firmName: (chunks) => (
                <span className="font-semibold text-[#9b7b16]">{chunks}</span>
              )
            })}
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              {t.rich('paragraph2', {
                highlightJustice: (chunks) => (
                  <span className="text-[#9b7b16] font-medium">{chunks}</span>
                )
              })}
            </motion.p>
          </div>
        </div>

        {/* === Right: Static Image === */}
        <div
          className={`${
            isArabic ? 'order-2' : 'order-1'
          } md:order-2 relative flex justify-center items-center`}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#9b7b16]/10 blur-3xl rounded-full"></div>
          <Image
            src={JusticeImage}
            alt={t('imageAlt')}
            className="rounded-2xl object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-out"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
