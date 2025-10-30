'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Brand assets
import LogoWhite from '@/assets/pngs/logo-white.png'

// Updated official SVG icons
import IconX from '@/assets/icons/x.svg'
import IconInstagramNew from '@/assets/icons/instagram.svg'
import IconLinkedInNew from '@/assets/icons/linkedin-gold.svg'
import IconWhatsApp from '@/assets/icons/whatsapp.svg'

export default function FooterView() {
  const colors = {
    gold: {
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
      700: '#4C4741',
    },
  }

  // ✅ Adjusted per-icon scaling for visual balance
  const socials = [
    { icon: IconX, href: 'https://x.com', label: 'X (formerly Twitter)', scale: 1 },
    { icon: IconInstagramNew, href: 'https://instagram.com', label: 'Instagram', scale: 1.25 },
    { icon: IconLinkedInNew, href: 'https://linkedin.com', label: 'LinkedIn', scale: 1.35 },
  ]

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#aboutUs' },
    { label: 'Our Philosophy', href: '#ourPhilosophy' },
    { label: 'Our Values', href: '#ourValues' },
    { label: 'Licensed & Partnered', href: '#licensed' },
    { label: 'Our Services', href: '#our-expertise' },
  ]

  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${colors.gold[900]} 0%, ${colors.gold[800]} 60%, ${colors.gold[700]} 85%, ${colors.gold[600]} 100%)`,
        color: colors.stone[50],
        padding: '4rem 1.5rem 2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '10rem',
          background: `radial-gradient(ellipse at top, rgba(200,161,40,0.25), transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Main layout */}
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2.5rem',
          zIndex: 1,
          position: 'relative',
        }}
      >
        {/* Left: Logo & Socials */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-start',
            flex: '1 1 250px',
          }}
        >
          <Image
            src={LogoWhite}
            alt="Faisal Abdullah AlShehri Law Firm"
            width={260}
            height={80}
            className="object-contain"
          />

          {/* Socials */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {socials.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                aria-label={item.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 8px rgba(255,255,255,0)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 0 15px rgba(255,255,255,0.25)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 0 8px rgba(255,255,255,0)')
                }
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={18 * item.scale}
                  height={18 * item.scale}
                  style={{
                    filter: 'invert(1)', // ✅ White icons for visibility
                    opacity: 0.9,
                    transition: 'filter 0.3s ease',
                  }}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Center: Navigation */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flex: '2 1 500px',
            flexWrap: 'wrap',
          }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                fontWeight: 500,
                position: 'relative',
                transition: 'color 0.3s ease, opacity 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.gold[300])
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')
              }
            >
              {link.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0%',
                  height: '2px',
                  backgroundColor: colors.gold[400],
                  transition: 'width 0.3s ease',
                }}
                className="footer-link-underline"
              />
            </motion.a>
          ))}
        </nav>

        {/* Right: WhatsApp CTA */}
        <motion.a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: colors.gold[500],
            color: '#FFFFFF', // ✅ White text for contrast
            fontWeight: 600,
            padding: '0.9rem 1.75rem',
            borderRadius: '9999px',
            fontFamily: "'Inter', sans-serif",
            boxShadow:
              '0 0 25px rgba(255,255,255,0.15), inset 0 0 4px rgba(255,255,255,0.15)',
            flex: '1 1 250px',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 0 6px rgba(0,0,0,0.25)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              '0 0 35px rgba(255,255,255,0.3), inset 0 0 5px rgba(255,255,255,0.25)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              '0 0 25px rgba(255,255,255,0.15), inset 0 0 4px rgba(255,255,255,0.15)')
          }
        >
          <Image
            src={IconWhatsApp}
            alt="WhatsApp"
            width={20}
            height={20}
            style={{ filter: 'invert(1)', opacity: 0.9 }} // ✅ White icon
          />
          Contact Us on WhatsApp
        </motion.a>
      </div>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background:
            'linear-gradient(to right, rgba(223,185,63,0.1), rgba(223,185,63,0.25), rgba(223,185,63,0.1))',
          margin: '2.5rem 0',
        }}
      />

      {/* Footer bottom note */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.02em',
        }}
      >
        © {new Date().getFullYear()} Faisal Abdullah AlShehri Law Firm. All Rights Reserved.
      </p>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
          pointerEvents: 'none',
        }}
      />
    </footer>
  )
}
