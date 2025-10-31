'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Logos
import ministryOfJustice from '@/assets/logos/ministry-of-justice-Photoroom.png'
import monshaat from '@/assets/logos/monshaat-Photoroom.png'
import saip from '@/assets/logos/SAIP-1.svg'
import sba from '@/assets/logos/SBA.svg'
import bog from '@/assets/logos/BOG-colored-Photoroom-1.svg'
import franchiseCenter from '@/assets/logos/Franchise-Center.svg'
import ministryOfCommerce from '@/assets/logos/ministry-of-commerce-1.svg'
import ministryOfInvestment from '@/assets/logos/Ministry-of-Investment.svg'
import humanResource from '@/assets/logos/human-resource.svg'

export default function LicensesPartnersView() {
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
    stone: {
      50: '#FAF9F7',
      100: '#F3F1ED',
      200: '#E5E1DA',
      900: '#2E2A26',
    },
  }

  const logos = [
    { src: ministryOfJustice, alt: 'Ministry of Justice', scale: 0.85 },
    { src: monshaat, alt: "Monsha'at", scale: 0.9 },
    { src: saip, alt: 'Saudi Authority for Intellectual Property', scale: 1.4 },
    { src: sba, alt: 'Saudi Bar Association', scale: 1.05 },
    { src: bog, alt: 'Board of Grievances', scale: 0.8 },
    { src: franchiseCenter, alt: 'Franchise Center', scale: 1.2 },
    { src: ministryOfCommerce, alt: 'Ministry of Commerce', scale: 1.1 },
    { src: ministryOfInvestment, alt: 'Ministry of Investment', scale: 1.05 },
    { src: humanResource, alt: 'Human Resources Development Fund', scale: 1.0 },
  ]

  const duplicated = [...logos, ...logos]

  return (
    <section
      id="licenses-partners"
      style={{
        background: `linear-gradient(to bottom, ${colors.stone[50]}, white 40%, ${colors.gold[50]})`,
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* === Section Titles (fade in once when visible) === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            color: colors.gold[700],
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.5rem',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Licenses & Partners
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.25rem',
            color: colors.stone[900],
            fontWeight: 700,
            marginBottom: '3.5rem',
          }}
        >
          Proudly Accredited & Partnered With
        </motion.h2>

        {/* === Modern Carousel === */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4rem',
              width: 'max-content',
            }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            }}
          >
            {duplicated.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{
                  width: '8rem',
                  height: '5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120 * logo.scale}
                  height={80 * logo.scale}
                  style={{
                    objectFit: 'contain',
                    transform: `scale(${logo.scale})`,
                    opacity: 0.95,
                    transition:
                      'transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease',
                  }}
                  className="logo-item"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === Hover & Color Styles === */}
      <style jsx>{`
        .logo-item:hover {
          transform: scale(1.1);
          filter: brightness(1.05)
            drop-shadow(0 0 8px rgba(200, 161, 40, 0.25));
          opacity: 1;
        }

        @media (prefers-color-scheme: dark) {
          section#licenses-partners {
            background: linear-gradient(
              to bottom,
              ${colors.stone[900]},
              ${colors.stone[200]} 40%,
              ${colors.gold[800]}
            );
          }
          section#licenses-partners h2 {
            color: ${colors.stone[50]};
          }
        }
      `}</style>
    </section>
  )
}
