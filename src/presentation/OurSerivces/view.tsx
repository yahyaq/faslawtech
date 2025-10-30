'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  BriefcaseBusiness,
  FileSignature,
  Gavel,
  BookOpenCheck,
  ScrollText,
  Landmark,
  BadgeCheck,
} from 'lucide-react'

export default function OurExpertiseView() {
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
    },
    stone: {
      50: '#FAF9F7',
      100: '#F3F1ED',
      200: '#E5E1DA',
      700: '#4C4741',
    },
  }

  const services = [
    { title: 'Companies & Business Sector', desc: 'From company setup to governance, mergers, and acquisitions — we support organisations through every legal stage of growth.', icon: Building2 },
    { title: 'Commercial Franchise', desc: 'Franchise agreement drafting and regulatory documentation aligned with local law and international standards.', icon: BriefcaseBusiness },
    { title: 'Contracts & Agreements', desc: 'Drafting and reviewing MOUs, employment and commercial contracts to ensure clarity and legal protection.', icon: FileSignature },
    { title: 'Litigation & Dispute Settlement', desc: 'Representation in general & administrative courts, arbitration and mediation — delivering effective resolutions.', icon: Gavel },
    { title: 'Legal Consultations', desc: 'Advisory across corporate, civil and regulatory domains — helping clients make informed, confident decisions.', icon: BookOpenCheck },
    { title: 'Wills & Real-Estate Settlement', desc: 'Execution of wills, inheritance & real-estate settlements under Islamic law — providing fairness and clarity.', icon: ScrollText },
    { title: 'Debt Collection & Execution', desc: 'Swift recovery of financial claims, enforcement of court/arbitrator decisions and commercial notice execution.', icon: Landmark },
    { title: 'Intellectual Property Rights', desc: 'Protection and registration of patents, trademarks and copyrights — safeguarding your brand and innovation.', icon: BadgeCheck },
  ]

  return (
    <section
      id="our-expertise"
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: `linear-gradient(to bottom, ${colors.gold[50]}, ${colors.gold[100]} 35%, ${colors.gold[200]} 85%, ${colors.gold[100]} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at top center, rgba(249,232,160,0.15), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 5rem auto',
          }}
        >
          <p
            style={{
              color: colors.gold[600],
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '0.75rem',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our Expertise
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3rem',
              lineHeight: 1.2,
              color: colors.gold[700],
              fontWeight: 700,
              marginBottom: '1.5rem',
              textShadow: '0 1px 10px rgba(200,161,40,0.25)',
            }}
          >
            Comprehensive Legal Solutions
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: colors.stone[700],
            }}
          >
            We offer end-to-end legal expertise across sectors — blending
            precision, innovation, and deep legal understanding to help our
            clients achieve their goals confidently.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gap: '3rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 30px rgba(200,161,40,0.25)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                style={{
                  position: 'relative',
                  padding: '2.25rem 2rem',
                  borderRadius: '1rem',
                  background: `linear-gradient(145deg, rgba(255,255,255,0.85), rgba(250,242,210,0.9))`,
                  border: `1px solid ${colors.gold[200]}`,
                  boxShadow: '0 6px 25px -10px rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: '1.5rem',
                    background: `linear-gradient(135deg, ${colors.gold[200]}, ${colors.gold[300]})`,
                    padding: '0.75rem',
                    borderRadius: '50%',
                    boxShadow: '0 2px 10px rgba(200,161,40,0.25), inset 0 0 8px rgba(255,255,255,0.35)',
                  }}
                >
                  <Icon
                    size={26}
                    strokeWidth={2.3}
                    style={{ color: colors.gold[700] }}
                  />
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: colors.gold[600],
                      marginBottom: '0.5rem',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: colors.stone[700],
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6rem',
          background: `linear-gradient(to top, ${colors.gold[200]}, transparent)`,
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
