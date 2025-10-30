'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Brand assets
import LogoGold from '@/assets/pngs/logo.png'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'
import Skyline from '@/assets/pngs/SkylineHorizontal.png'

export default function HeroView() {
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
      900: '#32270A',
    },
    blend: {
      top: 'rgba(250,247,232,0)',
      mid: 'rgba(250,247,232,0.9)',
      bottom: '#fffaf2',
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* === Background Image === */}
      <Image
        src={Skyline}
        alt="King Abdullah Financial District, Riyadh"
        fill
        priority
        className="object-cover object-center will-change-transform"
      />

      {/* === Soft Overlay for left gradient === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(250,247,232,0.95) 0%, rgba(250,247,232,0.7) 35%, rgba(250,247,232,0) 65%)`,
        }}
      />

      {/* === Content Positioned in Black Box Area === */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-start justify-center pl-[8%] lg:pl-[10%] pr-4 max-w-xl"
      >
        {/* Logo */}
        <Image
          src={LogoGold}
          alt="Faisal Abdullah AlShehri Law Firm Logo"
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
            textShadow: '0 2px 10px rgba(255,255,255,0.75)',
          }}
        >
          Upholding Justice, Protecting Interests, Enabling Success
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
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Image
            src={IconWhatsApp}
            alt="WhatsApp"
            width={22}
            height={22}
            style={{ filter: 'invert(1)', opacity: 0.9 }}
          />
          Request a Legal Consultation
        </motion.a>
      </motion.div>

      {/* === Stronger Bottom Gradient with Overlap Fix === */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 h-[12vh] z-[5]"
        style={{
          background: `linear-gradient(
            to bottom,
            ${colors.blend.top} 0%,
            ${colors.blend.mid} 60%,
            ${colors.blend.bottom} 100%
          )`,
          transform: 'translateZ(0)',
        }}
      />

      {/* === Extra 1px Underlay to Mask Seam === */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-[6]"
        style={{
          backgroundColor: colors.blend.bottom,
        }}
      />
    </section>
  )
}
