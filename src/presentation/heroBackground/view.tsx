'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import IconWhatsApp from '@/assets/icons/whatsapp.svg';
import LogoGold from '@/assets/pngs/logo.png';
import Skyline from '@/assets/pngs/SkylineHorizontal.png';

export default function HeroView() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const colors = {
    gold: {
      50: '#FBF7E8',
      100: '#F6EBC4',
      200: '#F0DD9B',
      300: '#EACD6F',
      400: '#DFB93F',
      500: '#C8A128',
      600: '#AA8822',
      700: '#8E6E1C',
      800: '#5C4913',
      900: '#32270A'
    },
    blend: {
      top: 'rgba(250,247,232,0)',
      mid: 'rgba(250,247,232,0.9)',
      bottom: '#fffaf2'
    }
  };

  // ✅ Choose profile file by locale
  const handleDownload = () => {
    const file =
      locale === 'en'
        ? '/profile/Faslawfirm-Profile-EN.pdf'
        : '/profile/Faslawfirm-Profile-AR.pdf';

    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop() || 'FAS-Law-Firm-Profile.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background */}
      <Image
        src={Skyline}
        alt={t('altText')}
        fill
        priority
        className="object-cover object-center will-change-transform"
      />

      {/* Left overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(250,247,232,0.95) 0%, rgba(250,247,232,0.7) 35%, rgba(250,247,232,0) 65%)`
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-start justify-center pl-[8%] lg:pl-[10%] pr-4 max-w-xl"
      >
        {/* Logo */}
        <Image
          src={LogoGold}
          alt={t('logoAlt')}
          width={460}
          height={160}
          priority
          className="mb-6 h-auto w-auto drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
        />

        {/* Slogan */}
        <p
          className="mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.55rem',
            color: colors.gold[800],
            lineHeight: 1.6,
            textShadow: '0 2px 10px rgba(255,255,255,0.75)'
          }}
        >
          {t('slogan')}
        </p>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full font-semibold text-white"
          style={{
            background: `linear-gradient(90deg, ${colors.gold[500]}, ${colors.gold[400]})`,
            boxShadow: '0 0 25px rgba(200,161,40,0.4)',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          <Image
            src={IconWhatsApp}
            alt="WhatsApp"
            width={22}
            height={22}
            style={{ filter: 'invert(1)', opacity: 0.9 }}
          />
          {t('cta.whatsapp')}
        </motion.a>

        {/* Download Profile Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={handleDownload}
          className="mt-5 px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300"
          style={{
            borderColor: colors.gold[600],
            color: colors.gold[700],
            fontFamily: "'Inter', sans-serif",
            backgroundColor: 'rgba(255,255,255,0.6)'
          }}
        >
          {t('cta.download')}
        </motion.button>
      </motion.div>
    </section>
  );
}
